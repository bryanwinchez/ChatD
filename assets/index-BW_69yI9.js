(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var ng={exports:{}},Bu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ST;function rR(){if(ST)return Bu;ST=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Bu.Fragment=e,Bu.jsx=t,Bu.jsxs=t,Bu}var AT;function aR(){return AT||(AT=1,ng.exports=rR()),ng.exports}var b=aR(),ig={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CT;function oR(){if(CT)return Oe;CT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=T&&N[T]||N["@@iterator"],typeof N=="function"?N:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,B={};function U(N,X,ie){this.props=N,this.context=X,this.refs=B,this.updater=ie||D}U.prototype.isReactComponent={},U.prototype.setState=function(N,X){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,X,"setState")},U.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function ae(){}ae.prototype=U.prototype;function re(N,X,ie){this.props=N,this.context=X,this.refs=B,this.updater=ie||D}var ue=re.prototype=new ae;ue.constructor=re,M(ue,U.prototype),ue.isPureReactComponent=!0;var _e=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},me=Object.prototype.hasOwnProperty;function k(N,X,ie,se,Ee,Me){return ie=Me.ref,{$$typeof:n,type:N,key:X,ref:ie!==void 0?ie:null,props:Me}}function C(N,X){return k(N.type,X,void 0,void 0,void 0,N.props)}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function P(N){var X={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ie){return X[ie]})}var V=/\/+/g;function L(N,X){return typeof N=="object"&&N!==null&&N.key!=null?P(""+N.key):X.toString(36)}function x(){}function ye(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(x,x):(N.status="pending",N.then(function(X){N.status==="pending"&&(N.status="fulfilled",N.value=X)},function(X){N.status==="pending"&&(N.status="rejected",N.reason=X)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function Ke(N,X,ie,se,Ee){var Me=typeof N;(Me==="undefined"||Me==="boolean")&&(N=null);var Ce=!1;if(N===null)Ce=!0;else switch(Me){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(N.$$typeof){case n:case e:Ce=!0;break;case y:return Ce=N._init,Ke(Ce(N._payload),X,ie,se,Ee)}}if(Ce)return Ee=Ee(N),Ce=se===""?"."+L(N,0):se,_e(Ee)?(ie="",Ce!=null&&(ie=Ce.replace(V,"$&/")+"/"),Ke(Ee,X,ie,"",function(Zn){return Zn})):Ee!=null&&(R(Ee)&&(Ee=C(Ee,ie+(Ee.key==null||N&&N.key===Ee.key?"":(""+Ee.key).replace(V,"$&/")+"/")+Ce)),X.push(Ee)),1;Ce=0;var Lt=se===""?".":se+":";if(_e(N))for(var lt=0;lt<N.length;lt++)se=N[lt],Me=Lt+L(se,lt),Ce+=Ke(se,X,ie,Me,Ee);else if(lt=w(N),typeof lt=="function")for(N=lt.call(N),lt=0;!(se=N.next()).done;)se=se.value,Me=Lt+L(se,lt++),Ce+=Ke(se,X,ie,Me,Ee);else if(Me==="object"){if(typeof N.then=="function")return Ke(ye(N),X,ie,se,Ee);throw X=String(N),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function Y(N,X,ie){if(N==null)return N;var se=[],Ee=0;return Ke(N,se,"","",function(Me){return X.call(ie,Me,Ee++)}),se}function ne(N){if(N._status===-1){var X=N._result;X=X(),X.then(function(ie){(N._status===0||N._status===-1)&&(N._status=1,N._result=ie)},function(ie){(N._status===0||N._status===-1)&&(N._status=2,N._result=ie)}),N._status===-1&&(N._status=0,N._result=X)}if(N._status===1)return N._result.default;throw N._result}var te=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function fe(){}return Oe.Children={map:Y,forEach:function(N,X,ie){Y(N,function(){X.apply(this,arguments)},ie)},count:function(N){var X=0;return Y(N,function(){X++}),X},toArray:function(N){return Y(N,function(X){return X})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Oe.Component=U,Oe.Fragment=t,Oe.Profiler=a,Oe.PureComponent=re,Oe.StrictMode=s,Oe.Suspense=p,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return ce.H.useMemoCache(N)}},Oe.cache=function(N){return function(){return N.apply(null,arguments)}},Oe.cloneElement=function(N,X,ie){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var se=M({},N.props),Ee=N.key,Me=void 0;if(X!=null)for(Ce in X.ref!==void 0&&(Me=void 0),X.key!==void 0&&(Ee=""+X.key),X)!me.call(X,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&X.ref===void 0||(se[Ce]=X[Ce]);var Ce=arguments.length-2;if(Ce===1)se.children=ie;else if(1<Ce){for(var Lt=Array(Ce),lt=0;lt<Ce;lt++)Lt[lt]=arguments[lt+2];se.children=Lt}return k(N.type,Ee,void 0,void 0,Me,se)},Oe.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},Oe.createElement=function(N,X,ie){var se,Ee={},Me=null;if(X!=null)for(se in X.key!==void 0&&(Me=""+X.key),X)me.call(X,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(Ee[se]=X[se]);var Ce=arguments.length-2;if(Ce===1)Ee.children=ie;else if(1<Ce){for(var Lt=Array(Ce),lt=0;lt<Ce;lt++)Lt[lt]=arguments[lt+2];Ee.children=Lt}if(N&&N.defaultProps)for(se in Ce=N.defaultProps,Ce)Ee[se]===void 0&&(Ee[se]=Ce[se]);return k(N,Me,void 0,void 0,null,Ee)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(N){return{$$typeof:d,render:N}},Oe.isValidElement=R,Oe.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ne}},Oe.memo=function(N,X){return{$$typeof:g,type:N,compare:X===void 0?null:X}},Oe.startTransition=function(N){var X=ce.T,ie={};ce.T=ie;try{var se=N(),Ee=ce.S;Ee!==null&&Ee(ie,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(fe,te)}catch(Me){te(Me)}finally{ce.T=X}},Oe.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},Oe.use=function(N){return ce.H.use(N)},Oe.useActionState=function(N,X,ie){return ce.H.useActionState(N,X,ie)},Oe.useCallback=function(N,X){return ce.H.useCallback(N,X)},Oe.useContext=function(N){return ce.H.useContext(N)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(N,X){return ce.H.useDeferredValue(N,X)},Oe.useEffect=function(N,X,ie){var se=ce.H;if(typeof ie=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(N,X)},Oe.useId=function(){return ce.H.useId()},Oe.useImperativeHandle=function(N,X,ie){return ce.H.useImperativeHandle(N,X,ie)},Oe.useInsertionEffect=function(N,X){return ce.H.useInsertionEffect(N,X)},Oe.useLayoutEffect=function(N,X){return ce.H.useLayoutEffect(N,X)},Oe.useMemo=function(N,X){return ce.H.useMemo(N,X)},Oe.useOptimistic=function(N,X){return ce.H.useOptimistic(N,X)},Oe.useReducer=function(N,X,ie){return ce.H.useReducer(N,X,ie)},Oe.useRef=function(N){return ce.H.useRef(N)},Oe.useState=function(N){return ce.H.useState(N)},Oe.useSyncExternalStore=function(N,X,ie){return ce.H.useSyncExternalStore(N,X,ie)},Oe.useTransition=function(){return ce.H.useTransition()},Oe.version="19.1.1",Oe}var xT;function T_(){return xT||(xT=1,ig.exports=oR()),ig.exports}var J=T_(),sg={exports:{}},qu={},rg={exports:{}},ag={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RT;function lR(){return RT||(RT=1,(function(n){function e(Y,ne){var te=Y.length;Y.push(ne);e:for(;0<te;){var fe=te-1>>>1,N=Y[fe];if(0<a(N,ne))Y[fe]=ne,Y[te]=N,te=fe;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ne=Y[0],te=Y.pop();if(te!==ne){Y[0]=te;e:for(var fe=0,N=Y.length,X=N>>>1;fe<X;){var ie=2*(fe+1)-1,se=Y[ie],Ee=ie+1,Me=Y[Ee];if(0>a(se,te))Ee<N&&0>a(Me,se)?(Y[fe]=Me,Y[Ee]=te,fe=Ee):(Y[fe]=se,Y[ie]=te,fe=ie);else if(Ee<N&&0>a(Me,te))Y[fe]=Me,Y[Ee]=te,fe=Ee;else break e}}return ne}function a(Y,ne){var te=Y.sortIndex-ne.sortIndex;return te!==0?te:Y.id-ne.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,T=null,w=3,D=!1,M=!1,B=!1,U=!1,ae=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function _e(Y){for(var ne=t(g);ne!==null;){if(ne.callback===null)s(g);else if(ne.startTime<=Y)s(g),ne.sortIndex=ne.expirationTime,e(p,ne);else break;ne=t(g)}}function ce(Y){if(B=!1,_e(Y),!M)if(t(p)!==null)M=!0,me||(me=!0,L());else{var ne=t(g);ne!==null&&Ke(ce,ne.startTime-Y)}}var me=!1,k=-1,C=5,R=-1;function P(){return U?!0:!(n.unstable_now()-R<C)}function V(){if(U=!1,me){var Y=n.unstable_now();R=Y;var ne=!0;try{e:{M=!1,B&&(B=!1,re(k),k=-1),D=!0;var te=w;try{t:{for(_e(Y),T=t(p);T!==null&&!(T.expirationTime>Y&&P());){var fe=T.callback;if(typeof fe=="function"){T.callback=null,w=T.priorityLevel;var N=fe(T.expirationTime<=Y);if(Y=n.unstable_now(),typeof N=="function"){T.callback=N,_e(Y),ne=!0;break t}T===t(p)&&s(p),_e(Y)}else s(p);T=t(p)}if(T!==null)ne=!0;else{var X=t(g);X!==null&&Ke(ce,X.startTime-Y),ne=!1}}break e}finally{T=null,w=te,D=!1}ne=void 0}}finally{ne?L():me=!1}}}var L;if(typeof ue=="function")L=function(){ue(V)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,ye=x.port2;x.port1.onmessage=V,L=function(){ye.postMessage(null)}}else L=function(){ae(V,0)};function Ke(Y,ne){k=ae(function(){Y(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(Y){switch(w){case 1:case 2:case 3:var ne=3;break;default:ne=w}var te=w;w=ne;try{return Y()}finally{w=te}},n.unstable_requestPaint=function(){U=!0},n.unstable_runWithPriority=function(Y,ne){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var te=w;w=Y;try{return ne()}finally{w=te}},n.unstable_scheduleCallback=function(Y,ne,te){var fe=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?fe+te:fe):te=fe,Y){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=te+N,Y={id:y++,callback:ne,priorityLevel:Y,startTime:te,expirationTime:N,sortIndex:-1},te>fe?(Y.sortIndex=te,e(g,Y),t(p)===null&&Y===t(g)&&(B?(re(k),k=-1):B=!0,Ke(ce,te-fe))):(Y.sortIndex=N,e(p,Y),M||D||(M=!0,me||(me=!0,L()))),Y},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(Y){var ne=w;return function(){var te=w;w=ne;try{return Y.apply(this,arguments)}finally{w=te}}}})(ag)),ag}var IT;function uR(){return IT||(IT=1,rg.exports=lR()),rg.exports}var og={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NT;function cR(){if(NT)return Tn;NT=1;var n=T_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},Tn.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},Tn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},Tn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Tn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:D}):y==="script"&&s.d.X(p,{crossOrigin:T,integrity:w,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Tn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},Tn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Tn.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},Tn.requestFormReset=function(p){s.d.r(p)},Tn.unstable_batchedUpdates=function(p,g){return p(g)},Tn.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},Tn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Tn.version="19.1.1",Tn}var DT;function hR(){if(DT)return og.exports;DT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),og.exports=cR(),og.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kT;function fR(){if(kT)return qu;kT=1;var n=uR(),e=T_(),t=hR();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),re=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function L(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var x=Symbol.for("react.client.reference");function ye(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===x?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case M:return"Fragment";case U:return"Profiler";case B:return"StrictMode";case ce:return"Suspense";case me:return"SuspenseList";case R:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case D:return"Portal";case ue:return(i.displayName||"Context")+".Provider";case re:return(i._context.displayName||"Context")+".Consumer";case _e:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case k:return r=i.displayName||null,r!==null?r:ye(i.type)||"Memo";case C:r=i._payload,i=i._init;try{return ye(i(r))}catch{}}return null}var Ke=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},fe=[],N=-1;function X(i){return{current:i}}function ie(i){0>N||(i.current=fe[N],fe[N]=null,N--)}function se(i,r){N++,fe[N]=i.current,i.current=r}var Ee=X(null),Me=X(null),Ce=X(null),Lt=X(null);function lt(i,r){switch(se(Ce,r),se(Me,i),se(Ee,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?ZE(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=ZE(r),i=JE(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ie(Ee),se(Ee,i)}function Zn(){ie(Ee),ie(Me),ie(Ce)}function Ri(i){i.memoizedState!==null&&se(Lt,i);var r=Ee.current,o=JE(r,i.type);r!==o&&(se(Me,i),se(Ee,o))}function mi(i){Me.current===i&&(ie(Ee),ie(Me)),Lt.current===i&&(ie(Lt),Lu._currentValue=te)}var rs=Object.prototype.hasOwnProperty,as=n.unstable_scheduleCallback,os=n.unstable_cancelCallback,Yr=n.unstable_shouldYield,eo=n.unstable_requestPaint,On=n.unstable_now,Pl=n.unstable_getCurrentPriorityLevel,Ii=n.unstable_ImmediatePriority,Ni=n.unstable_UserBlockingPriority,pi=n.unstable_NormalPriority,Vl=n.unstable_LowPriority,ge=n.unstable_IdlePriority,Ie=n.log,ze=n.unstable_setDisableYieldValue,Fe=null,Be=null;function jt(i){if(typeof Ie=="function"&&ze(i),Be&&typeof Be.setStrictMode=="function")try{Be.setStrictMode(Fe,i)}catch{}}var Ct=Math.clz32?Math.clz32:Kr,hn=Math.log,Gc=Math.LN2;function Kr(i){return i>>>=0,i===0?32:31-(hn(i)/Gc|0)|0}var $r=256,Xr=4194304;function gi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function to(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=gi(u):(E&=S,E!==0?f=gi(E):o||(o=S&~i,o!==0&&(f=gi(o))))):(S=u&~m,S!==0?f=gi(S):E!==0?f=gi(E):o||(o=u&~i,o!==0&&(f=gi(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Wr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Ll(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jl(){var i=$r;return $r<<=1,($r&4194048)===0&&($r=256),i}function Ul(){var i=Xr;return Xr<<=1,(Xr&62914560)===0&&(Xr=4194304),i}function ls(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function us(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function zl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var S=i.entanglements,I=i.expirationTimes,q=i.hiddenUpdates;for(o=E&~o;0<o;){var K=31-Ct(o),Z=1<<K;S[K]=0,I[K]=-1;var H=q[K];if(H!==null)for(q[K]=null,K=0;K<H.length;K++){var G=H[K];G!==null&&(G.lane&=-536870913)}o&=~Z}u!==0&&Di(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function Di(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-Ct(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Fl(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-Ct(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function $s(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function no(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Xs(){var i=ne.p;return i!==0?i:(i=window.event,i===void 0?32:yT(i.type))}function Qc(i,r){var o=ne.p;try{return ne.p=i,r()}finally{ne.p=o}}var bt=Math.random().toString(36).slice(2),Kt="__reactFiber$"+bt,Ut="__reactProps$"+bt,Jn="__reactContainer$"+bt,Bl="__reactEvents$"+bt,rm="__reactListeners$"+bt,Ws="__reactHandles$"+bt,Yc="__reactResources$"+bt,Zr="__reactMarker$"+bt;function Zs(i){delete i[Kt],delete i[Ut],delete i[Bl],delete i[rm],delete i[Ws]}function cs(i){var r=i[Kt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Jn]||o[Kt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=iT(i);i!==null;){if(o=i[Kt])return o;i=iT(i)}return r}i=o,o=i.parentNode}return null}function ki(i){if(i=i[Kt]||i[Jn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Mi(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function xn(i){var r=i[Yc];return r||(r=i[Yc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Nt(i){i[Zr]=!0}var ql=new Set,io={};function _i(i,r){hs(i,r),hs(i+"Capture",r)}function hs(i,r){for(io[i]=r,i=0;i<r.length;i++)ql.add(r[i])}var Kc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$c={},Jr={};function Xc(i){return rs.call(Jr,i)?!0:rs.call($c,i)?!1:Kc.test(i)?Jr[i]=!0:($c[i]=!0,!1)}function Js(i,r,o){if(Xc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Oi(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function fn(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var ea,Wc;function fs(i){if(ea===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);ea=r&&r[1]||"",Wc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ea+i+Wc}var so=!1;function ro(i,r){if(!i||so)return"";so=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(G){var H=G}Reflect.construct(i,[],Z)}else{try{Z.call()}catch(G){H=G}i.call(Z.prototype)}}else{try{throw Error()}catch(G){H=G}(Z=i())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var I=E.split(`
`),q=S.split(`
`);for(f=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(u===I.length||f===q.length)for(u=I.length-1,f=q.length-1;1<=u&&0<=f&&I[u]!==q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(I[u]!==q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||I[u]!==q[f]){var K=`
`+I[u].replace(" at new "," at ");return i.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",i.displayName)),K}while(1<=u&&0<=f);break}}}finally{so=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?fs(o):""}function Hl(i){switch(i.tag){case 26:case 27:case 5:return fs(i.type);case 16:return fs("Lazy");case 13:return fs("Suspense");case 19:return fs("SuspenseList");case 0:case 15:return ro(i.type,!1);case 11:return ro(i.type.render,!1);case 1:return ro(i.type,!0);case 31:return fs("Activity");default:return""}}function ao(i){try{var r="";do r+=Hl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Rn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Gl(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function am(i){var r=Gl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function oo(i){i._valueTracker||(i._valueTracker=am(i))}function Ql(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=Gl(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function ta(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var om=/[\n"\\]/g;function zt(i){return i.replace(om,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function qn(i,r,o,u,f,m,E,S){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+Rn(r)):i.value!==""+Rn(r)&&(i.value=""+Rn(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?er(i,E,Rn(r)):o!=null?er(i,E,Rn(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.name=""+Rn(S):i.removeAttribute("name")}function na(i,r,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+Rn(o):"",r=r!=null?""+Rn(r):o,S||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=S?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function er(i,r,o){r==="number"&&ta(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function ds(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+Rn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function ut(i,r,o){if(r!=null&&(r=""+Rn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+Rn(o):""}function ia(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(Ke(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=Rn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function ei(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var sa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||sa.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Yl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Zc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Zc(i,m,r[m])}function Kl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),um=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lo(i){return um.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var ms=null;function ti(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ps=null,gs=null;function $l(i){var r=ki(i);if(r&&(i=r.stateNode)){var o=i[Ut]||null;e:switch(i=r.stateNode,r.type){case"input":if(qn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+zt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Ut]||null;if(!f)throw Error(s(90));qn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Ql(u)}break e;case"textarea":ut(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&ds(i,!!o.multiple,r,!1)}}}var Pi=!1;function Jc(i,r,o){if(Pi)return i(r,o);Pi=!0;try{var u=i(r);return u}finally{if(Pi=!1,(ps!==null||gs!==null)&&(Qh(),ps&&(r=ps,i=gs,gs=ps=null,$l(r),i)))for(r=0;r<i.length;r++)$l(i[r])}}function ra(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Ut]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=!1;if(yi)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){ni=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{ni=!1}var Vi=null,tr=null,_s=null;function Xl(){if(_s)return _s;var i,r=tr,o=r.length,u,f="value"in Vi?Vi.value:Vi.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return _s=f.slice(i,1<u?1-u:void 0)}function Li(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function ji(){return!0}function Wl(){return!1}function en(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(o=i[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ji:Wl,this.isPropagationStopped=Wl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),r}var it={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=en(it),oa=y({},it,{view:0,detail:0}),eh=en(oa),co,ho,Ui,la=y({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ha,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ui&&(Ui&&i.type==="mousemove"?(co=i.screenX-Ui.screenX,ho=i.screenY-Ui.screenY):ho=co=0,Ui=i),co)},movementY:function(i){return"movementY"in i?i.movementY:ho}}),ii=en(la),th=y({},la,{dataTransfer:0}),cm=en(th),ua=y({},oa,{relatedTarget:0}),fo=en(ua),Zl=y({},it,{animationName:0,elapsedTime:0,pseudoElement:0}),mo=en(Zl),nh=y({},it,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),po=en(nh),hm=y({},it,{data:0}),Jl=en(hm),ca={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eu(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=sh[i])?!!r[i]:!1}function ha(){return eu}var rh=y({},oa,{key:function(i){if(i.key){var r=ca[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Li(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ih[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ha,charCode:function(i){return i.type==="keypress"?Li(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Li(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),go=en(rh),ah=y({},la,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=en(ah),ys=y({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ha}),oh=en(ys),lh=y({},it,{propertyName:0,elapsedTime:0,pseudoElement:0}),uh=en(lh),ch=y({},la,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),_o=en(ch),In=y({},it,{newState:0,oldState:0}),hh=en(In),fh=[9,13,27,32],zi=yi&&"CompositionEvent"in window,h=null;yi&&"documentMode"in document&&(h=document.documentMode);var _=yi&&"TextEvent"in window&&!h,v=yi&&(!zi||h&&8<h&&11>=h),A=" ",z=!1;function Q(i,r){switch(i){case"keyup":return fh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var $e=!1;function $t(i,r){switch(i){case"compositionend":return oe(r);case"keypress":return r.which!==32?null:(z=!0,A);case"textInput":return i=r.data,i===A&&z?null:i;default:return null}}function Xe(i,r){if($e)return i==="compositionend"||!zi&&Q(i,r)?(i=Xl(),_s=tr=Vi=null,$e=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var tn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!tn[i.type]:r==="textarea"}function vs(i,r,o,u){ps?gs?gs.push(u):gs=[u]:ps=u,r=Zh(r,"onChange"),0<r.length&&(o=new uo("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var dn=null,Fi=null;function nu(i){YE(i,0)}function dh(i){var r=Mi(i);if(Ql(r))return i}function mv(i,r){if(i==="change")return r}var pv=!1;if(yi){var fm;if(yi){var dm="oninput"in document;if(!dm){var gv=document.createElement("div");gv.setAttribute("oninput","return;"),dm=typeof gv.oninput=="function"}fm=dm}else fm=!1;pv=fm&&(!document.documentMode||9<document.documentMode)}function _v(){dn&&(dn.detachEvent("onpropertychange",yv),Fi=dn=null)}function yv(i){if(i.propertyName==="value"&&dh(Fi)){var r=[];vs(r,Fi,i,ti(i)),Jc(nu,r)}}function PC(i,r,o){i==="focusin"?(_v(),dn=r,Fi=o,dn.attachEvent("onpropertychange",yv)):i==="focusout"&&_v()}function VC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return dh(Fi)}function LC(i,r){if(i==="click")return dh(r)}function jC(i,r){if(i==="input"||i==="change")return dh(r)}function UC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Hn=typeof Object.is=="function"?Object.is:UC;function iu(i,r){if(Hn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!rs.call(r,f)||!Hn(i[f],r[f]))return!1}return!0}function vv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ev(i,r){var o=vv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=vv(o)}}function Tv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?Tv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function bv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=ta(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=ta(i.document)}return r}function mm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var zC=yi&&"documentMode"in document&&11>=document.documentMode,yo=null,pm=null,su=null,gm=!1;function wv(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;gm||yo==null||yo!==ta(u)||(u=yo,"selectionStart"in u&&mm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),su&&iu(su,u)||(su=u,u=Zh(pm,"onSelect"),0<u.length&&(r=new uo("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=yo)))}function fa(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var vo={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionrun:fa("Transition","TransitionRun"),transitionstart:fa("Transition","TransitionStart"),transitioncancel:fa("Transition","TransitionCancel"),transitionend:fa("Transition","TransitionEnd")},_m={},Sv={};yi&&(Sv=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function da(i){if(_m[i])return _m[i];if(!vo[i])return i;var r=vo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in Sv)return _m[i]=r[o];return i}var Av=da("animationend"),Cv=da("animationiteration"),xv=da("animationstart"),FC=da("transitionrun"),BC=da("transitionstart"),qC=da("transitioncancel"),Rv=da("transitionend"),Iv=new Map,ym="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ym.push("scrollEnd");function vi(i,r){Iv.set(i,r),_i(r,[i])}var Nv=new WeakMap;function si(i,r){if(typeof i=="object"&&i!==null){var o=Nv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:ao(r)},Nv.set(i,r),r)}return{value:i,source:r,stack:ao(r)}}var ri=[],Eo=0,vm=0;function mh(){for(var i=Eo,r=vm=Eo=0;r<i;){var o=ri[r];ri[r++]=null;var u=ri[r];ri[r++]=null;var f=ri[r];ri[r++]=null;var m=ri[r];if(ri[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&Dv(o,f,m)}}function ph(i,r,o,u){ri[Eo++]=i,ri[Eo++]=r,ri[Eo++]=o,ri[Eo++]=u,vm|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function Em(i,r,o,u){return ph(i,r,o,u),gh(i)}function To(i,r){return ph(i,null,null,r),gh(i)}function Dv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-Ct(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function gh(i){if(50<Iu)throw Iu=0,Cp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var bo={};function HC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(i,r,o,u){return new HC(i,r,o,u)}function Tm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Es(i,r){var o=i.alternate;return o===null?(o=Gn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function kv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function _h(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")Tm(i)&&(E=1);else if(typeof i=="string")E=Qx(i,o,Ee.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case R:return i=Gn(31,o,r,f),i.elementType=R,i.lanes=m,i;case M:return ma(o.children,f,m,r);case B:E=8,f|=24;break;case U:return i=Gn(12,o,r,f|2),i.elementType=U,i.lanes=m,i;case ce:return i=Gn(13,o,r,f),i.elementType=ce,i.lanes=m,i;case me:return i=Gn(19,o,r,f),i.elementType=me,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ae:case ue:E=10;break e;case re:E=9;break e;case _e:E=11;break e;case k:E=14;break e;case C:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Gn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function ma(i,r,o,u){return i=Gn(7,i,u,r),i.lanes=o,i}function bm(i,r,o){return i=Gn(6,i,null,r),i.lanes=o,i}function wm(i,r,o){return r=Gn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var wo=[],So=0,yh=null,vh=0,ai=[],oi=0,pa=null,Ts=1,bs="";function ga(i,r){wo[So++]=vh,wo[So++]=yh,yh=i,vh=r}function Mv(i,r,o){ai[oi++]=Ts,ai[oi++]=bs,ai[oi++]=pa,pa=i;var u=Ts;i=bs;var f=32-Ct(u)-1;u&=~(1<<f),o+=1;var m=32-Ct(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,Ts=1<<32-Ct(r)+f|o<<f|u,bs=m+i}else Ts=1<<m|o<<f|u,bs=i}function Sm(i){i.return!==null&&(ga(i,1),Mv(i,1,0))}function Am(i){for(;i===yh;)yh=wo[--So],wo[So]=null,vh=wo[--So],wo[So]=null;for(;i===pa;)pa=ai[--oi],ai[oi]=null,bs=ai[--oi],ai[oi]=null,Ts=ai[--oi],ai[oi]=null}var Nn=null,xt=null,tt=!1,_a=null,Bi=!1,Cm=Error(s(519));function ya(i){var r=Error(s(418,""));throw ou(si(r,i)),Cm}function Ov(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Kt]=i,r[Ut]=u,o){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(o=0;o<Du.length;o++)He(Du[o],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":He("invalid",r),na(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),oo(r);break;case"select":He("invalid",r);break;case"textarea":He("invalid",r),ia(r,u.value,u.defaultValue,u.children),oo(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||WE(r.textContent,o)?(u.popover!=null&&(He("beforetoggle",r),He("toggle",r)),u.onScroll!=null&&He("scroll",r),u.onScrollEnd!=null&&He("scrollend",r),u.onClick!=null&&(r.onclick=Jh),r=!0):r=!1,r||ya(i)}function Pv(i){for(Nn=i.return;Nn;)switch(Nn.tag){case 5:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Nn=Nn.return}}function ru(i){if(i!==Nn)return!1;if(!tt)return Pv(i),tt=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Bp(i.type,i.memoizedProps)),o=!o),o&&xt&&ya(i),Pv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){xt=Ti(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}xt=null}}else r===27?(r=xt,_r(i.type)?(i=Qp,Qp=null,xt=i):xt=r):xt=Nn?Ti(i.stateNode.nextSibling):null;return!0}function au(){xt=Nn=null,tt=!1}function Vv(){var i=_a;return i!==null&&(Ln===null?Ln=i:Ln.push.apply(Ln,i),_a=null),i}function ou(i){_a===null?_a=[i]:_a.push(i)}var xm=X(null),va=null,ws=null;function nr(i,r,o){se(xm,r._currentValue),r._currentValue=o}function Ss(i){i._currentValue=xm.current,ie(xm)}function Rm(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function Im(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var I=0;I<r.length;I++)if(S.context===r[I]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Rm(m.return,o,i),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),Rm(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function lu(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;Hn(f.pendingProps.value,E.value)||(i!==null?i.push(S):i=[S])}}else if(f===Lt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Lu):i=[Lu])}f=f.return}i!==null&&Im(r,i,o,u),r.flags|=262144}function Eh(i){for(i=i.firstContext;i!==null;){if(!Hn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Ea(i){va=i,ws=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function En(i){return Lv(va,i)}function Th(i,r){return va===null&&Ea(i),Lv(i,r)}function Lv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ws===null){if(i===null)throw Error(s(308));ws=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else ws=ws.next=r;return o}var GC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},QC=n.unstable_scheduleCallback,YC=n.unstable_NormalPriority,Wt={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nm(){return{controller:new GC,data:new Map,refCount:0}}function uu(i){i.refCount--,i.refCount===0&&QC(YC,function(){i.controller.abort()})}var cu=null,Dm=0,Ao=0,Co=null;function KC(i,r){if(cu===null){var o=cu=[];Dm=0,Ao=Mp(),Co={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Dm++,r.then(jv,jv),r}function jv(){if(--Dm===0&&cu!==null){Co!==null&&(Co.status="fulfilled");var i=cu;cu=null,Ao=0,Co=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function $C(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Uv=Y.S;Y.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&KC(i,r),Uv!==null&&Uv(i,r)};var Ta=X(null);function km(){var i=Ta.current;return i!==null?i:pt.pooledCache}function bh(i,r){r===null?se(Ta,Ta.current):se(Ta,r.pool)}function zv(){var i=km();return i===null?null:{parent:Wt._currentValue,pool:i}}var hu=Error(s(460)),Fv=Error(s(474)),wh=Error(s(542)),Mm={then:function(){}};function Bv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Sh(){}function qv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(Sh,Sh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Gv(i),i;default:if(typeof r.status=="string")r.then(Sh,Sh);else{if(i=pt,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Gv(i),i}throw fu=r,hu}}var fu=null;function Hv(){if(fu===null)throw Error(s(459));var i=fu;return fu=null,i}function Gv(i){if(i===hu||i===wh)throw Error(s(483))}var ir=!1;function Om(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function sr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function rr(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(rt&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=gh(i),Dv(i,null,o),r}return ph(i,u,r,o),gh(i)}function du(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Fl(i,o)}}function Vm(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Lm=!1;function mu(){if(Lm){var i=Co;if(i!==null)throw i}}function pu(i,r,o,u){Lm=!1;var f=i.updateQueue;ir=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var I=S,q=I.next;I.next=null,E===null?m=q:E.next=q,E=I;var K=i.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==E&&(S===null?K.firstBaseUpdate=q:S.next=q,K.lastBaseUpdate=I))}if(m!==null){var Z=f.baseState;E=0,K=q=I=null,S=m;do{var H=S.lane&-536870913,G=H!==S.lane;if(G?(We&H)===H:(u&H)===H){H!==0&&H===Ao&&(Lm=!0),K!==null&&(K=K.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var xe=i,be=S;H=r;var ft=o;switch(be.tag){case 1:if(xe=be.payload,typeof xe=="function"){Z=xe.call(ft,Z,H);break e}Z=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=be.payload,H=typeof xe=="function"?xe.call(ft,Z,H):xe,H==null)break e;Z=y({},Z,H);break e;case 2:ir=!0}}H=S.callback,H!==null&&(i.flags|=64,G&&(i.flags|=8192),G=f.callbacks,G===null?f.callbacks=[H]:G.push(H))}else G={lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(q=K=G,I=Z):K=K.next=G,E|=H;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;G=S,S=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);K===null&&(I=Z),f.baseState=I,f.firstBaseUpdate=q,f.lastBaseUpdate=K,m===null&&(f.shared.lanes=0),dr|=E,i.lanes=E,i.memoizedState=Z}}function Qv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Yv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Qv(o[i],r)}var xo=X(null),Ah=X(0);function Kv(i,r){i=Ds,se(Ah,i),se(xo,r),Ds=i|r.baseLanes}function jm(){se(Ah,Ds),se(xo,xo.current)}function Um(){Ds=Ah.current,ie(xo),ie(Ah)}var ar=0,Pe=null,ct=null,Ft=null,Ch=!1,Ro=!1,ba=!1,xh=0,gu=0,Io=null,XC=0;function Dt(){throw Error(s(321))}function zm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Hn(i[o],r[o]))return!1;return!0}function Fm(i,r,o,u,f,m){return ar=m,Pe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Y.H=i===null||i.memoizedState===null?D0:k0,ba=!1,m=o(u,f),ba=!1,Ro&&(m=Xv(r,o,u,f)),$v(i),m}function $v(i){Y.H=Mh;var r=ct!==null&&ct.next!==null;if(ar=0,Ft=ct=Pe=null,Ch=!1,gu=0,Io=null,r)throw Error(s(300));i===null||nn||(i=i.dependencies,i!==null&&Eh(i)&&(nn=!0))}function Xv(i,r,o,u){Pe=i;var f=0;do{if(Ro&&(Io=null),gu=0,Ro=!1,25<=f)throw Error(s(301));if(f+=1,Ft=ct=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=ix,m=r(o,u)}while(Ro);return m}function WC(){var i=Y.H,r=i.useState()[0];return r=typeof r.then=="function"?_u(r):r,i=i.useState()[0],(ct!==null?ct.memoizedState:null)!==i&&(Pe.flags|=1024),r}function Bm(){var i=xh!==0;return xh=0,i}function qm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Hm(i){if(Ch){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ch=!1}ar=0,Ft=ct=Pe=null,Ro=!1,gu=xh=0,Io=null}function Pn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?Pe.memoizedState=Ft=i:Ft=Ft.next=i,Ft}function Bt(){if(ct===null){var i=Pe.alternate;i=i!==null?i.memoizedState:null}else i=ct.next;var r=Ft===null?Pe.memoizedState:Ft.next;if(r!==null)Ft=r,ct=i;else{if(i===null)throw Pe.alternate===null?Error(s(467)):Error(s(310));ct=i,i={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},Ft===null?Pe.memoizedState=Ft=i:Ft=Ft.next=i}return Ft}function Gm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _u(i){var r=gu;return gu+=1,Io===null&&(Io=[]),i=qv(Io,i,r),r=Pe,(Ft===null?r.memoizedState:Ft.next)===null&&(r=r.alternate,Y.H=r===null||r.memoizedState===null?D0:k0),i}function Rh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return _u(i);if(i.$$typeof===ue)return En(i)}throw Error(s(438,String(i)))}function Qm(i){var r=null,o=Pe.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Pe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Gm(),Pe.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=P;return r.index++,o}function As(i,r){return typeof r=="function"?r(i):r}function Ih(i){var r=Bt();return Ym(r,ct,i)}function Ym(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var S=E=null,I=null,q=r,K=!1;do{var Z=q.lane&-536870913;if(Z!==q.lane?(We&Z)===Z:(ar&Z)===Z){var H=q.revertLane;if(H===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),Z===Ao&&(K=!0);else if((ar&H)===H){q=q.next,H===Ao&&(K=!0);continue}else Z={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(S=I=Z,E=m):I=I.next=Z,Pe.lanes|=H,dr|=H;Z=q.action,ba&&o(m,Z),m=q.hasEagerState?q.eagerState:o(m,Z)}else H={lane:Z,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(S=I=H,E=m):I=I.next=H,Pe.lanes|=Z,dr|=Z;q=q.next}while(q!==null&&q!==r);if(I===null?E=m:I.next=S,!Hn(m,i.memoizedState)&&(nn=!0,K&&(o=Co,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=I,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Km(i){var r=Bt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Hn(m,r.memoizedState)||(nn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Wv(i,r,o){var u=Pe,f=Bt(),m=tt;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Hn((ct||f).memoizedState,o);E&&(f.memoizedState=o,nn=!0),f=f.queue;var S=e0.bind(null,u,f,i);if(yu(2048,8,S,[i]),f.getSnapshot!==r||E||Ft!==null&&Ft.memoizedState.tag&1){if(u.flags|=2048,No(9,Nh(),Jv.bind(null,u,f,o,r),null),pt===null)throw Error(s(349));m||(ar&124)!==0||Zv(u,r,o)}return o}function Zv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Pe.updateQueue,r===null?(r=Gm(),Pe.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Jv(i,r,o,u){r.value=o,r.getSnapshot=u,t0(r)&&n0(i)}function e0(i,r,o){return o(function(){t0(r)&&n0(i)})}function t0(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Hn(i,o)}catch{return!0}}function n0(i){var r=To(i,2);r!==null&&Xn(r,i,2)}function $m(i){var r=Pn();if(typeof i=="function"){var o=i;if(i=o(),ba){jt(!0);try{o()}finally{jt(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:i},r}function i0(i,r,o,u){return i.baseState=o,Ym(i,ct,typeof u=="function"?u:As)}function ZC(i,r,o,u,f){if(kh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};Y.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,s0(r,m)):(m.next=o.next,r.pending=o.next=m)}}function s0(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=Y.T,E={};Y.T=E;try{var S=o(f,u),I=Y.S;I!==null&&I(E,S),r0(i,r,S)}catch(q){Xm(i,r,q)}finally{Y.T=m}}else try{m=o(f,u),r0(i,r,m)}catch(q){Xm(i,r,q)}}function r0(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){a0(i,r,u)},function(u){return Xm(i,r,u)}):a0(i,r,o)}function a0(i,r,o){r.status="fulfilled",r.value=o,o0(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,s0(i,o)))}function Xm(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,o0(r),r=r.next;while(r!==u)}i.action=null}function o0(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function l0(i,r){return r}function u0(i,r){if(tt){var o=pt.formState;if(o!==null){e:{var u=Pe;if(tt){if(xt){t:{for(var f=xt,m=Bi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ti(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){xt=Ti(f.nextSibling),u=f.data==="F!";break e}}ya(u)}u=!1}u&&(r=o[0])}}return o=Pn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l0,lastRenderedState:r},o.queue=u,o=R0.bind(null,Pe,u),u.dispatch=o,u=$m(!1),m=tp.bind(null,Pe,!1,u.queue),u=Pn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=ZC.bind(null,Pe,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function c0(i){var r=Bt();return h0(r,ct,i)}function h0(i,r,o){if(r=Ym(i,r,l0)[0],i=Ih(As)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=_u(r)}catch(E){throw E===hu?wh:E}else u=r;r=Bt();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Pe.flags|=2048,No(9,Nh(),JC.bind(null,f,o),null)),[u,m,i]}function JC(i,r){i.action=r}function f0(i){var r=Bt(),o=ct;if(o!==null)return h0(r,o,i);Bt(),r=r.memoizedState,o=Bt();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function No(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Pe.updateQueue,r===null&&(r=Gm(),Pe.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Nh(){return{destroy:void 0,resource:void 0}}function d0(){return Bt().memoizedState}function Dh(i,r,o,u){var f=Pn();u=u===void 0?null:u,Pe.flags|=i,f.memoizedState=No(1|r,Nh(),o,u)}function yu(i,r,o,u){var f=Bt();u=u===void 0?null:u;var m=f.memoizedState.inst;ct!==null&&u!==null&&zm(u,ct.memoizedState.deps)?f.memoizedState=No(r,m,o,u):(Pe.flags|=i,f.memoizedState=No(1|r,m,o,u))}function m0(i,r){Dh(8390656,8,i,r)}function p0(i,r){yu(2048,8,i,r)}function g0(i,r){return yu(4,2,i,r)}function _0(i,r){return yu(4,4,i,r)}function y0(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function v0(i,r,o){o=o!=null?o.concat([i]):null,yu(4,4,y0.bind(null,r,i),o)}function Wm(){}function E0(i,r){var o=Bt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&zm(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function T0(i,r){var o=Bt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&zm(r,u[1]))return u[0];if(u=i(),ba){jt(!0);try{i()}finally{jt(!1)}}return o.memoizedState=[u,r],u}function Zm(i,r,o){return o===void 0||(ar&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=SE(),Pe.lanes|=i,dr|=i,o)}function b0(i,r,o,u){return Hn(o,r)?o:xo.current!==null?(i=Zm(i,o,u),Hn(i,r)||(nn=!0),i):(ar&42)===0?(nn=!0,i.memoizedState=o):(i=SE(),Pe.lanes|=i,dr|=i,r)}function w0(i,r,o,u,f){var m=ne.p;ne.p=m!==0&&8>m?m:8;var E=Y.T,S={};Y.T=S,tp(i,!1,r,o);try{var I=f(),q=Y.S;if(q!==null&&q(S,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var K=$C(I,u);vu(i,r,K,$n(i))}else vu(i,r,u,$n(i))}catch(Z){vu(i,r,{then:function(){},status:"rejected",reason:Z},$n())}finally{ne.p=m,Y.T=E}}function ex(){}function Jm(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=S0(i).queue;w0(i,f,r,te,o===null?ex:function(){return A0(i),o(u)})}function S0(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:te},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function A0(i){var r=S0(i).next.queue;vu(i,r,{},$n())}function ep(){return En(Lu)}function C0(){return Bt().memoizedState}function x0(){return Bt().memoizedState}function tx(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=$n();i=sr(o);var u=rr(r,i,o);u!==null&&(Xn(u,r,o),du(u,r,o)),r={cache:Nm()},i.payload=r;return}r=r.return}}function nx(i,r,o){var u=$n();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},kh(i)?I0(r,o):(o=Em(i,r,o,u),o!==null&&(Xn(o,i,u),N0(o,r,u)))}function R0(i,r,o){var u=$n();vu(i,r,o,u)}function vu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(kh(i))I0(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,Hn(S,E))return ph(i,r,f,0),pt===null&&mh(),!1}catch{}finally{}if(o=Em(i,r,f,u),o!==null)return Xn(o,i,u),N0(o,r,u),!0}return!1}function tp(i,r,o,u){if(u={lane:2,revertLane:Mp(),action:u,hasEagerState:!1,eagerState:null,next:null},kh(i)){if(r)throw Error(s(479))}else r=Em(i,o,u,2),r!==null&&Xn(r,i,2)}function kh(i){var r=i.alternate;return i===Pe||r!==null&&r===Pe}function I0(i,r){Ro=Ch=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function N0(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Fl(i,o)}}var Mh={readContext:En,use:Rh,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},D0={readContext:En,use:Rh,useCallback:function(i,r){return Pn().memoizedState=[i,r===void 0?null:r],i},useContext:En,useEffect:m0,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Dh(4194308,4,y0.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Dh(4194308,4,i,r)},useInsertionEffect:function(i,r){Dh(4,2,i,r)},useMemo:function(i,r){var o=Pn();r=r===void 0?null:r;var u=i();if(ba){jt(!0);try{i()}finally{jt(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Pn();if(o!==void 0){var f=o(r);if(ba){jt(!0);try{o(r)}finally{jt(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=nx.bind(null,Pe,i),[u.memoizedState,i]},useRef:function(i){var r=Pn();return i={current:i},r.memoizedState=i},useState:function(i){i=$m(i);var r=i.queue,o=R0.bind(null,Pe,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Wm,useDeferredValue:function(i,r){var o=Pn();return Zm(o,i,r)},useTransition:function(){var i=$m(!1);return i=w0.bind(null,Pe,i.queue,!0,!1),Pn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Pe,f=Pn();if(tt){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),pt===null)throw Error(s(349));(We&124)!==0||Zv(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,m0(e0.bind(null,u,m,i),[i]),u.flags|=2048,No(9,Nh(),Jv.bind(null,u,m,o,r),null),o},useId:function(){var i=Pn(),r=pt.identifierPrefix;if(tt){var o=bs,u=Ts;o=(u&~(1<<32-Ct(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=xh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=XC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:ep,useFormState:u0,useActionState:u0,useOptimistic:function(i){var r=Pn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=tp.bind(null,Pe,!0,o),o.dispatch=r,[i,r]},useMemoCache:Qm,useCacheRefresh:function(){return Pn().memoizedState=tx.bind(null,Pe)}},k0={readContext:En,use:Rh,useCallback:E0,useContext:En,useEffect:p0,useImperativeHandle:v0,useInsertionEffect:g0,useLayoutEffect:_0,useMemo:T0,useReducer:Ih,useRef:d0,useState:function(){return Ih(As)},useDebugValue:Wm,useDeferredValue:function(i,r){var o=Bt();return b0(o,ct.memoizedState,i,r)},useTransition:function(){var i=Ih(As)[0],r=Bt().memoizedState;return[typeof i=="boolean"?i:_u(i),r]},useSyncExternalStore:Wv,useId:C0,useHostTransitionStatus:ep,useFormState:c0,useActionState:c0,useOptimistic:function(i,r){var o=Bt();return i0(o,ct,i,r)},useMemoCache:Qm,useCacheRefresh:x0},ix={readContext:En,use:Rh,useCallback:E0,useContext:En,useEffect:p0,useImperativeHandle:v0,useInsertionEffect:g0,useLayoutEffect:_0,useMemo:T0,useReducer:Km,useRef:d0,useState:function(){return Km(As)},useDebugValue:Wm,useDeferredValue:function(i,r){var o=Bt();return ct===null?Zm(o,i,r):b0(o,ct.memoizedState,i,r)},useTransition:function(){var i=Km(As)[0],r=Bt().memoizedState;return[typeof i=="boolean"?i:_u(i),r]},useSyncExternalStore:Wv,useId:C0,useHostTransitionStatus:ep,useFormState:f0,useActionState:f0,useOptimistic:function(i,r){var o=Bt();return ct!==null?i0(o,ct,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Qm,useCacheRefresh:x0},Do=null,Eu=0;function Oh(i){var r=Eu;return Eu+=1,Do===null&&(Do=[]),qv(Do,i,r)}function Tu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Ph(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function M0(i){var r=i._init;return r(i._payload)}function O0(i){function r(j,O){if(i){var F=j.deletions;F===null?(j.deletions=[O],j.flags|=16):F.push(O)}}function o(j,O){if(!i)return null;for(;O!==null;)r(j,O),O=O.sibling;return null}function u(j){for(var O=new Map;j!==null;)j.key!==null?O.set(j.key,j):O.set(j.index,j),j=j.sibling;return O}function f(j,O){return j=Es(j,O),j.index=0,j.sibling=null,j}function m(j,O,F){return j.index=F,i?(F=j.alternate,F!==null?(F=F.index,F<O?(j.flags|=67108866,O):F):(j.flags|=67108866,O)):(j.flags|=1048576,O)}function E(j){return i&&j.alternate===null&&(j.flags|=67108866),j}function S(j,O,F,W){return O===null||O.tag!==6?(O=bm(F,j.mode,W),O.return=j,O):(O=f(O,F),O.return=j,O)}function I(j,O,F,W){var pe=F.type;return pe===M?K(j,O,F.props.children,W,F.key):O!==null&&(O.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===C&&M0(pe)===O.type)?(O=f(O,F.props),Tu(O,F),O.return=j,O):(O=_h(F.type,F.key,F.props,null,j.mode,W),Tu(O,F),O.return=j,O)}function q(j,O,F,W){return O===null||O.tag!==4||O.stateNode.containerInfo!==F.containerInfo||O.stateNode.implementation!==F.implementation?(O=wm(F,j.mode,W),O.return=j,O):(O=f(O,F.children||[]),O.return=j,O)}function K(j,O,F,W,pe){return O===null||O.tag!==7?(O=ma(F,j.mode,W,pe),O.return=j,O):(O=f(O,F),O.return=j,O)}function Z(j,O,F){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=bm(""+O,j.mode,F),O.return=j,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return F=_h(O.type,O.key,O.props,null,j.mode,F),Tu(F,O),F.return=j,F;case D:return O=wm(O,j.mode,F),O.return=j,O;case C:var W=O._init;return O=W(O._payload),Z(j,O,F)}if(Ke(O)||L(O))return O=ma(O,j.mode,F,null),O.return=j,O;if(typeof O.then=="function")return Z(j,Oh(O),F);if(O.$$typeof===ue)return Z(j,Th(j,O),F);Ph(j,O)}return null}function H(j,O,F,W){var pe=O!==null?O.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return pe!==null?null:S(j,O,""+F,W);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case w:return F.key===pe?I(j,O,F,W):null;case D:return F.key===pe?q(j,O,F,W):null;case C:return pe=F._init,F=pe(F._payload),H(j,O,F,W)}if(Ke(F)||L(F))return pe!==null?null:K(j,O,F,W,null);if(typeof F.then=="function")return H(j,O,Oh(F),W);if(F.$$typeof===ue)return H(j,O,Th(j,F),W);Ph(j,F)}return null}function G(j,O,F,W,pe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return j=j.get(F)||null,S(O,j,""+W,pe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case w:return j=j.get(W.key===null?F:W.key)||null,I(O,j,W,pe);case D:return j=j.get(W.key===null?F:W.key)||null,q(O,j,W,pe);case C:var Le=W._init;return W=Le(W._payload),G(j,O,F,W,pe)}if(Ke(W)||L(W))return j=j.get(F)||null,K(O,j,W,pe,null);if(typeof W.then=="function")return G(j,O,F,Oh(W),pe);if(W.$$typeof===ue)return G(j,O,F,Th(O,W),pe);Ph(O,W)}return null}function xe(j,O,F,W){for(var pe=null,Le=null,ve=O,we=O=0,rn=null;ve!==null&&we<F.length;we++){ve.index>we?(rn=ve,ve=null):rn=ve.sibling;var et=H(j,ve,F[we],W);if(et===null){ve===null&&(ve=rn);break}i&&ve&&et.alternate===null&&r(j,ve),O=m(et,O,we),Le===null?pe=et:Le.sibling=et,Le=et,ve=rn}if(we===F.length)return o(j,ve),tt&&ga(j,we),pe;if(ve===null){for(;we<F.length;we++)ve=Z(j,F[we],W),ve!==null&&(O=m(ve,O,we),Le===null?pe=ve:Le.sibling=ve,Le=ve);return tt&&ga(j,we),pe}for(ve=u(ve);we<F.length;we++)rn=G(ve,j,we,F[we],W),rn!==null&&(i&&rn.alternate!==null&&ve.delete(rn.key===null?we:rn.key),O=m(rn,O,we),Le===null?pe=rn:Le.sibling=rn,Le=rn);return i&&ve.forEach(function(br){return r(j,br)}),tt&&ga(j,we),pe}function be(j,O,F,W){if(F==null)throw Error(s(151));for(var pe=null,Le=null,ve=O,we=O=0,rn=null,et=F.next();ve!==null&&!et.done;we++,et=F.next()){ve.index>we?(rn=ve,ve=null):rn=ve.sibling;var br=H(j,ve,et.value,W);if(br===null){ve===null&&(ve=rn);break}i&&ve&&br.alternate===null&&r(j,ve),O=m(br,O,we),Le===null?pe=br:Le.sibling=br,Le=br,ve=rn}if(et.done)return o(j,ve),tt&&ga(j,we),pe;if(ve===null){for(;!et.done;we++,et=F.next())et=Z(j,et.value,W),et!==null&&(O=m(et,O,we),Le===null?pe=et:Le.sibling=et,Le=et);return tt&&ga(j,we),pe}for(ve=u(ve);!et.done;we++,et=F.next())et=G(ve,j,we,et.value,W),et!==null&&(i&&et.alternate!==null&&ve.delete(et.key===null?we:et.key),O=m(et,O,we),Le===null?pe=et:Le.sibling=et,Le=et);return i&&ve.forEach(function(sR){return r(j,sR)}),tt&&ga(j,we),pe}function ft(j,O,F,W){if(typeof F=="object"&&F!==null&&F.type===M&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case w:e:{for(var pe=F.key;O!==null;){if(O.key===pe){if(pe=F.type,pe===M){if(O.tag===7){o(j,O.sibling),W=f(O,F.props.children),W.return=j,j=W;break e}}else if(O.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===C&&M0(pe)===O.type){o(j,O.sibling),W=f(O,F.props),Tu(W,F),W.return=j,j=W;break e}o(j,O);break}else r(j,O);O=O.sibling}F.type===M?(W=ma(F.props.children,j.mode,W,F.key),W.return=j,j=W):(W=_h(F.type,F.key,F.props,null,j.mode,W),Tu(W,F),W.return=j,j=W)}return E(j);case D:e:{for(pe=F.key;O!==null;){if(O.key===pe)if(O.tag===4&&O.stateNode.containerInfo===F.containerInfo&&O.stateNode.implementation===F.implementation){o(j,O.sibling),W=f(O,F.children||[]),W.return=j,j=W;break e}else{o(j,O);break}else r(j,O);O=O.sibling}W=wm(F,j.mode,W),W.return=j,j=W}return E(j);case C:return pe=F._init,F=pe(F._payload),ft(j,O,F,W)}if(Ke(F))return xe(j,O,F,W);if(L(F)){if(pe=L(F),typeof pe!="function")throw Error(s(150));return F=pe.call(F),be(j,O,F,W)}if(typeof F.then=="function")return ft(j,O,Oh(F),W);if(F.$$typeof===ue)return ft(j,O,Th(j,F),W);Ph(j,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,O!==null&&O.tag===6?(o(j,O.sibling),W=f(O,F),W.return=j,j=W):(o(j,O),W=bm(F,j.mode,W),W.return=j,j=W),E(j)):o(j,O)}return function(j,O,F,W){try{Eu=0;var pe=ft(j,O,F,W);return Do=null,pe}catch(ve){if(ve===hu||ve===wh)throw ve;var Le=Gn(29,ve,null,j.mode);return Le.lanes=W,Le.return=j,Le}finally{}}}var ko=O0(!0),P0=O0(!1),li=X(null),qi=null;function or(i){var r=i.alternate;se(Zt,Zt.current&1),se(li,i),qi===null&&(r===null||xo.current!==null||r.memoizedState!==null)&&(qi=i)}function V0(i){if(i.tag===22){if(se(Zt,Zt.current),se(li,i),qi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(qi=i)}}else lr()}function lr(){se(Zt,Zt.current),se(li,li.current)}function Cs(i){ie(li),qi===i&&(qi=null),ie(Zt)}var Zt=X(0);function Vh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Gp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function np(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var ip={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=$n(),f=sr(u);f.payload=r,o!=null&&(f.callback=o),r=rr(i,f,u),r!==null&&(Xn(r,i,u),du(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=$n(),f=sr(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=rr(i,f,u),r!==null&&(Xn(r,i,u),du(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=$n(),u=sr(o);u.tag=2,r!=null&&(u.callback=r),r=rr(i,u,o),r!==null&&(Xn(r,i,o),du(r,i,o))}};function L0(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!iu(o,u)||!iu(f,m):!0}function j0(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&ip.enqueueReplaceState(r,r.state,null)}function wa(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Lh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function U0(i){Lh(i)}function z0(i){console.error(i)}function F0(i){Lh(i)}function jh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function B0(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function sp(i,r,o){return o=sr(o),o.tag=3,o.payload={element:null},o.callback=function(){jh(i,r)},o}function q0(i){return i=sr(i),i.tag=3,i}function H0(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){B0(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){B0(r,o,u),typeof f!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function sx(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&lu(r,o,f,!0),o=li.current,o!==null){switch(o.tag){case 13:return qi===null?Rp():o.alternate===null&&Rt===0&&(Rt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Mm?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Np(i,u,f)),!1;case 22:return o.flags|=65536,u===Mm?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Np(i,u,f)),!1}throw Error(s(435,o.tag))}return Np(i,u,f),Rp(),!1}if(tt)return r=li.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Cm&&(i=Error(s(422),{cause:u}),ou(si(i,o)))):(u!==Cm&&(r=Error(s(423),{cause:u}),ou(si(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=si(u,o),f=sp(i.stateNode,u,f),Vm(i,f),Rt!==4&&(Rt=2)),!1;var m=Error(s(520),{cause:u});if(m=si(m,o),Ru===null?Ru=[m]:Ru.push(m),Rt!==4&&(Rt=2),r===null)return!0;u=si(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=sp(o.stateNode,u,i),Vm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mr===null||!mr.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=q0(f),H0(f,i,o,u),Vm(o,f),!1}o=o.return}while(o!==null);return!1}var G0=Error(s(461)),nn=!1;function mn(i,r,o,u){r.child=i===null?P0(r,null,o,u):ko(r,i.child,o,u)}function Q0(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return Ea(r),u=Fm(i,r,o,E,m,f),S=Bm(),i!==null&&!nn?(qm(i,r,f),xs(i,r,f)):(tt&&S&&Sm(r),r.flags|=1,mn(i,r,u,f),r.child)}function Y0(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!Tm(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,K0(i,r,m,u,f)):(i=_h(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!fp(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:iu,o(E,u)&&i.ref===r.ref)return xs(i,r,f)}return r.flags|=1,i=Es(m,u),i.ref=r.ref,i.return=r,r.child=i}function K0(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(iu(m,u)&&i.ref===r.ref)if(nn=!1,r.pendingProps=u=m,fp(i,f))(i.flags&131072)!==0&&(nn=!0);else return r.lanes=i.lanes,xs(i,r,f)}return rp(i,r,o,u,f)}function $0(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return X0(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&bh(r,m!==null?m.cachePool:null),m!==null?Kv(r,m):jm(),V0(r);else return r.lanes=r.childLanes=536870912,X0(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(bh(r,m.cachePool),Kv(r,m),lr(),r.memoizedState=null):(i!==null&&bh(r,null),jm(),lr());return mn(i,r,f,o),r.child}function X0(i,r,o,u){var f=km();return f=f===null?null:{parent:Wt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&bh(r,null),jm(),V0(r),i!==null&&lu(i,r,u,!0),null}function Uh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function rp(i,r,o,u,f){return Ea(r),o=Fm(i,r,o,u,void 0,f),u=Bm(),i!==null&&!nn?(qm(i,r,f),xs(i,r,f)):(tt&&u&&Sm(r),r.flags|=1,mn(i,r,o,f),r.child)}function W0(i,r,o,u,f,m){return Ea(r),r.updateQueue=null,o=Xv(r,u,o,f),$v(i),u=Bm(),i!==null&&!nn?(qm(i,r,m),xs(i,r,m)):(tt&&u&&Sm(r),r.flags|=1,mn(i,r,o,m),r.child)}function Z0(i,r,o,u,f){if(Ea(r),r.stateNode===null){var m=bo,E=o.contextType;typeof E=="object"&&E!==null&&(m=En(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=ip,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},Om(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?En(E):bo,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(np(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&ip.enqueueReplaceState(m,m.state,null),pu(r,u,m,f),mu(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var S=r.memoizedProps,I=wa(o,S);m.props=I;var q=m.context,K=o.contextType;E=bo,typeof K=="object"&&K!==null&&(E=En(K));var Z=o.getDerivedStateFromProps;K=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,K||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||q!==E)&&j0(r,m,u,E),ir=!1;var H=r.memoizedState;m.state=H,pu(r,u,m,f),mu(),q=r.memoizedState,S||H!==q||ir?(typeof Z=="function"&&(np(r,o,Z,u),q=r.memoizedState),(I=ir||L0(r,o,I,u,H,q,E))?(K||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=E,u=I):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Pm(i,r),E=r.memoizedProps,K=wa(o,E),m.props=K,Z=r.pendingProps,H=m.context,q=o.contextType,I=bo,typeof q=="object"&&q!==null&&(I=En(q)),S=o.getDerivedStateFromProps,(q=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Z||H!==I)&&j0(r,m,u,I),ir=!1,H=r.memoizedState,m.state=H,pu(r,u,m,f),mu();var G=r.memoizedState;E!==Z||H!==G||ir||i!==null&&i.dependencies!==null&&Eh(i.dependencies)?(typeof S=="function"&&(np(r,o,S,u),G=r.memoizedState),(K=ir||L0(r,o,K,u,H,G,I)||i!==null&&i.dependencies!==null&&Eh(i.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,G,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,G,I)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&H===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&H===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=G),m.props=u,m.state=G,m.context=I,u=K):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&H===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&H===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,Uh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=ko(r,i.child,null,f),r.child=ko(r,null,o,f)):mn(i,r,o,f),r.memoizedState=m.state,i=r.child):i=xs(i,r,f),i}function J0(i,r,o,u){return au(),r.flags|=256,mn(i,r,o,u),r.child}var ap={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function op(i){return{baseLanes:i,cachePool:zv()}}function lp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=ui),i}function eE(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(Zt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(tt){if(f?or(r):lr(),tt){var S=xt,I;if(I=S){e:{for(I=S,S=Bi;I.nodeType!==8;){if(!S){S=null;break e}if(I=Ti(I.nextSibling),I===null){S=null;break e}}S=I}S!==null?(r.memoizedState={dehydrated:S,treeContext:pa!==null?{id:Ts,overflow:bs}:null,retryLane:536870912,hydrationErrors:null},I=Gn(18,null,null,0),I.stateNode=S,I.return=r,r.child=I,Nn=r,xt=null,I=!0):I=!1}I||ya(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Gp(S)?r.lanes=32:r.lanes=536870912,null;Cs(r)}return S=u.children,u=u.fallback,f?(lr(),f=r.mode,S=zh({mode:"hidden",children:S},f),u=ma(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=op(o),f.childLanes=lp(i,E,o),r.memoizedState=ap,u):(or(r),up(r,S))}if(I=i.memoizedState,I!==null&&(S=I.dehydrated,S!==null)){if(m)r.flags&256?(or(r),r.flags&=-257,r=cp(i,r,o)):r.memoizedState!==null?(lr(),r.child=i.child,r.flags|=128,r=null):(lr(),f=u.fallback,S=r.mode,u=zh({mode:"visible",children:u.children},S),f=ma(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,ko(r,i.child,null,o),u=r.child,u.memoizedState=op(o),u.childLanes=lp(i,E,o),r.memoizedState=ap,r=f);else if(or(r),Gp(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(s(419)),u.stack="",u.digest=E,ou({value:u,source:null,stack:null}),r=cp(i,r,o)}else if(nn||lu(i,r,o,!1),E=(o&i.childLanes)!==0,nn||E){if(E=pt,E!==null&&(u=o&-o,u=(u&42)!==0?1:$s(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==I.retryLane))throw I.retryLane=u,To(i,u),Xn(E,i,u),G0;S.data==="$?"||Rp(),r=cp(i,r,o)}else S.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=I.treeContext,xt=Ti(S.nextSibling),Nn=r,tt=!0,_a=null,Bi=!1,i!==null&&(ai[oi++]=Ts,ai[oi++]=bs,ai[oi++]=pa,Ts=i.id,bs=i.overflow,pa=r),r=up(r,u.children),r.flags|=4096);return r}return f?(lr(),f=u.fallback,S=r.mode,I=i.child,q=I.sibling,u=Es(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&65011712,q!==null?f=Es(q,f):(f=ma(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=i.child.memoizedState,S===null?S=op(o):(I=S.cachePool,I!==null?(q=Wt._currentValue,I=I.parent!==q?{parent:q,pool:q}:I):I=zv(),S={baseLanes:S.baseLanes|o,cachePool:I}),f.memoizedState=S,f.childLanes=lp(i,E,o),r.memoizedState=ap,u):(or(r),o=i.child,i=o.sibling,o=Es(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function up(i,r){return r=zh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function zh(i,r){return i=Gn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function cp(i,r,o){return ko(r,i.child,null,o),i=up(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function tE(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Rm(i.return,r,o)}function hp(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function nE(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(mn(i,r,u.children,o),u=Zt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&tE(i,o,r);else if(i.tag===19)tE(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(se(Zt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Vh(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),hp(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Vh(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}hp(r,!0,o,null,m);break;case"together":hp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function xs(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),dr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(lu(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=Es(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Es(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function fp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Eh(i)))}function rx(i,r,o){switch(r.tag){case 3:lt(r,r.stateNode.containerInfo),nr(r,Wt,i.memoizedState.cache),au();break;case 27:case 5:Ri(r);break;case 4:lt(r,r.stateNode.containerInfo);break;case 10:nr(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(or(r),r.flags|=128,null):(o&r.child.childLanes)!==0?eE(i,r,o):(or(r),i=xs(i,r,o),i!==null?i.sibling:null);or(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(lu(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return nE(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Zt,Zt.current),u)break;return null;case 22:case 23:return r.lanes=0,$0(i,r,o);case 24:nr(r,Wt,i.memoizedState.cache)}return xs(i,r,o)}function iE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)nn=!0;else{if(!fp(i,o)&&(r.flags&128)===0)return nn=!1,rx(i,r,o);nn=(i.flags&131072)!==0}else nn=!1,tt&&(r.flags&1048576)!==0&&Mv(r,vh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Tm(u)?(i=wa(u,i),r.tag=1,r=Z0(null,r,u,i,o)):(r.tag=0,r=rp(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===_e){r.tag=11,r=Q0(null,r,u,i,o);break e}else if(f===k){r.tag=14,r=Y0(null,r,u,i,o);break e}}throw r=ye(u)||u,Error(s(306,r,""))}}return r;case 0:return rp(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=wa(u,r.pendingProps),Z0(i,r,u,f,o);case 3:e:{if(lt(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,Pm(i,r),pu(r,u,null,o);var E=r.memoizedState;if(u=E.cache,nr(r,Wt,u),u!==m.cache&&Im(r,[Wt],o,!0),mu(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=J0(i,r,u,o);break e}else if(u!==f){f=si(Error(s(424)),r),ou(f),r=J0(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(xt=Ti(i.firstChild),Nn=r,tt=!0,_a=null,Bi=!0,o=P0(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(au(),u===f){r=xs(i,r,o);break e}mn(i,r,u,o)}r=r.child}return r;case 26:return Uh(i,r),i===null?(o=oT(r.type,null,r.pendingProps,null))?r.memoizedState=o:tt||(o=r.type,i=r.pendingProps,u=ef(Ce.current).createElement(o),u[Kt]=r,u[Ut]=i,gn(u,o,i),Nt(u),r.stateNode=u):r.memoizedState=oT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ri(r),i===null&&tt&&(u=r.stateNode=sT(r.type,r.pendingProps,Ce.current),Nn=r,Bi=!0,f=xt,_r(r.type)?(Qp=f,xt=Ti(u.firstChild)):xt=f),mn(i,r,r.pendingProps.children,o),Uh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&tt&&((f=u=xt)&&(u=Mx(u,r.type,r.pendingProps,Bi),u!==null?(r.stateNode=u,Nn=r,xt=Ti(u.firstChild),Bi=!1,f=!0):f=!1),f||ya(r)),Ri(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Bp(f,m)?u=null:E!==null&&Bp(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=Fm(i,r,WC,null,null,o),Lu._currentValue=f),Uh(i,r),mn(i,r,u,o),r.child;case 6:return i===null&&tt&&((i=o=xt)&&(o=Ox(o,r.pendingProps,Bi),o!==null?(r.stateNode=o,Nn=r,xt=null,i=!0):i=!1),i||ya(r)),null;case 13:return eE(i,r,o);case 4:return lt(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=ko(r,null,u,o):mn(i,r,u,o),r.child;case 11:return Q0(i,r,r.type,r.pendingProps,o);case 7:return mn(i,r,r.pendingProps,o),r.child;case 8:return mn(i,r,r.pendingProps.children,o),r.child;case 12:return mn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,nr(r,r.type,u.value),mn(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,Ea(r),f=En(f),u=u(f),r.flags|=1,mn(i,r,u,o),r.child;case 14:return Y0(i,r,r.type,r.pendingProps,o);case 15:return K0(i,r,r.type,r.pendingProps,o);case 19:return nE(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=zh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=Es(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return $0(i,r,o);case 24:return Ea(r),u=En(Wt),i===null?(f=km(),f===null&&(f=pt,m=Nm(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},Om(r),nr(r,Wt,f)):((i.lanes&o)!==0&&(Pm(i,r),pu(r,null,null,o),mu()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),nr(r,Wt,u)):(u=m.cache,nr(r,Wt,u),u!==f.cache&&Im(r,[Wt],o,!0))),mn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Rs(i){i.flags|=4}function sE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!fT(r)){if(r=li.current,r!==null&&((We&4194048)===We?qi!==null:(We&62914560)!==We&&(We&536870912)===0||r!==qi))throw fu=Mm,Fv;i.flags|=8192}}function Fh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Ul():536870912,i.lanes|=r,Vo|=r)}function bu(i,r){if(!tt)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function St(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function ax(i,r,o){var u=r.pendingProps;switch(Am(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(r),null;case 1:return St(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),Ss(Wt),Zn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(ru(r)?Rs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vv())),St(r),null;case 26:return o=r.memoizedState,i===null?(Rs(r),o!==null?(St(r),sE(r,o)):(St(r),r.flags&=-16777217)):o?o!==i.memoizedState?(Rs(r),St(r),sE(r,o)):(St(r),r.flags&=-16777217):(i.memoizedProps!==u&&Rs(r),St(r),r.flags&=-16777217),null;case 27:mi(r),o=Ce.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Rs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return St(r),null}i=Ee.current,ru(r)?Ov(r):(i=sT(f,u,o),r.stateNode=i,Rs(r))}return St(r),null;case 5:if(mi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Rs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return St(r),null}if(i=Ee.current,ru(r))Ov(r);else{switch(f=ef(Ce.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Kt]=r,i[Ut]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(gn(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Rs(r)}}return St(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&Rs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=Ce.current,ru(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Kt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||WE(i.nodeValue,o)),i||ya(r)}else i=ef(i).createTextNode(u),i[Kt]=r,r.stateNode=i}return St(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=ru(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Kt]=r}else au(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;St(r),f=!1}else f=Vv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(Cs(r),r):(Cs(r),null)}if(Cs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Fh(r,r.updateQueue),St(r),null;case 4:return Zn(),i===null&&Lp(r.stateNode.containerInfo),St(r),null;case 10:return Ss(r.type),St(r),null;case 19:if(ie(Zt),f=r.memoizedState,f===null)return St(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)bu(f,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Vh(i),m!==null){for(r.flags|=128,bu(f,!1),i=m.updateQueue,r.updateQueue=i,Fh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)kv(o,i),o=o.sibling;return se(Zt,Zt.current&1|2),r.child}i=i.sibling}f.tail!==null&&On()>Hh&&(r.flags|=128,u=!0,bu(f,!1),r.lanes=4194304)}else{if(!u)if(i=Vh(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Fh(r,i),bu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!tt)return St(r),null}else 2*On()-f.renderingStartTime>Hh&&o!==536870912&&(r.flags|=128,u=!0,bu(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=On(),r.sibling=null,i=Zt.current,se(Zt,u?i&1|2:i&1),r):(St(r),null);case 22:case 23:return Cs(r),Um(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(St(r),r.subtreeFlags&6&&(r.flags|=8192)):St(r),o=r.updateQueue,o!==null&&Fh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&ie(Ta),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Ss(Wt),St(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function ox(i,r){switch(Am(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return Ss(Wt),Zn(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return mi(r),null;case 13:if(Cs(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));au()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ie(Zt),null;case 4:return Zn(),null;case 10:return Ss(r.type),null;case 22:case 23:return Cs(r),Um(),i!==null&&ie(Ta),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return Ss(Wt),null;case 25:return null;default:return null}}function rE(i,r){switch(Am(r),r.tag){case 3:Ss(Wt),Zn();break;case 26:case 27:case 5:mi(r);break;case 4:Zn();break;case 13:Cs(r);break;case 19:ie(Zt);break;case 10:Ss(r.type);break;case 22:case 23:Cs(r),Um(),i!==null&&ie(Ta);break;case 24:Ss(Wt)}}function wu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){dt(r,r.return,S)}}function ur(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var I=o,q=S;try{q()}catch(K){dt(f,I,K)}}}u=u.next}while(u!==m)}}catch(K){dt(r,r.return,K)}}function aE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Yv(r,o)}catch(u){dt(i,i.return,u)}}}function oE(i,r,o){o.props=wa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){dt(i,r,u)}}function Su(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){dt(i,r,f)}}function Hi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){dt(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){dt(i,r,f)}else o.current=null}function lE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){dt(i,i.return,f)}}function dp(i,r,o){try{var u=i.stateNode;Rx(u,i.type,o,r),u[Ut]=r}catch(f){dt(i,i.return,f)}}function uE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&_r(i.type)||i.tag===4}function mp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||uE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&_r(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function pp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Jh));else if(u!==4&&(u===27&&_r(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(pp(i,r,o),i=i.sibling;i!==null;)pp(i,r,o),i=i.sibling}function Bh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&_r(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Bh(i,r,o),i=i.sibling;i!==null;)Bh(i,r,o),i=i.sibling}function cE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);gn(r,u,o),r[Kt]=i,r[Ut]=o}catch(m){dt(i,i.return,m)}}var Is=!1,kt=!1,gp=!1,hE=typeof WeakSet=="function"?WeakSet:Set,sn=null;function lx(i,r){if(i=i.containerInfo,zp=of,i=bv(i),mm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,I=-1,q=0,K=0,Z=i,H=null;t:for(;;){for(var G;Z!==o||f!==0&&Z.nodeType!==3||(S=E+f),Z!==m||u!==0&&Z.nodeType!==3||(I=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(G=Z.firstChild)!==null;)H=Z,Z=G;for(;;){if(Z===i)break t;if(H===o&&++q===f&&(S=E),H===m&&++K===u&&(I=E),(G=Z.nextSibling)!==null)break;Z=H,H=Z.parentNode}Z=G}o=S===-1||I===-1?null:{start:S,end:I}}else o=null}o=o||{start:0,end:0}}else o=null;for(Fp={focusedElem:i,selectionRange:o},of=!1,sn=r;sn!==null;)if(r=sn,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,sn=i;else for(;sn!==null;){switch(r=sn,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var xe=wa(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(xe,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(be){dt(o,o.return,be)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Hp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Hp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,sn=i;break}sn=r.return}}function fE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:cr(i,o),u&4&&wu(5,o);break;case 1:if(cr(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){dt(o,o.return,E)}else{var f=wa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){dt(o,o.return,E)}}u&64&&aE(o),u&512&&Su(o,o.return);break;case 3:if(cr(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Yv(i,r)}catch(E){dt(o,o.return,E)}}break;case 27:r===null&&u&4&&cE(o);case 26:case 5:cr(i,o),r===null&&u&4&&lE(o),u&512&&Su(o,o.return);break;case 12:cr(i,o);break;case 13:cr(i,o),u&4&&pE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=_x.bind(null,o),Px(i,o))));break;case 22:if(u=o.memoizedState!==null||Is,!u){r=r!==null&&r.memoizedState!==null||kt,f=Is;var m=kt;Is=u,(kt=r)&&!m?hr(i,o,(o.subtreeFlags&8772)!==0):cr(i,o),Is=f,kt=m}break;case 30:break;default:cr(i,o)}}function dE(i){var r=i.alternate;r!==null&&(i.alternate=null,dE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Zs(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var wt=null,Vn=!1;function Ns(i,r,o){for(o=o.child;o!==null;)mE(i,r,o),o=o.sibling}function mE(i,r,o){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(Fe,o)}catch{}switch(o.tag){case 26:kt||Hi(o,r),Ns(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:kt||Hi(o,r);var u=wt,f=Vn;_r(o.type)&&(wt=o.stateNode,Vn=!1),Ns(i,r,o),Mu(o.stateNode),wt=u,Vn=f;break;case 5:kt||Hi(o,r);case 6:if(u=wt,f=Vn,wt=null,Ns(i,r,o),wt=u,Vn=f,wt!==null)if(Vn)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(o.stateNode)}catch(m){dt(o,r,m)}else try{wt.removeChild(o.stateNode)}catch(m){dt(o,r,m)}break;case 18:wt!==null&&(Vn?(i=wt,nT(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Fu(i)):nT(wt,o.stateNode));break;case 4:u=wt,f=Vn,wt=o.stateNode.containerInfo,Vn=!0,Ns(i,r,o),wt=u,Vn=f;break;case 0:case 11:case 14:case 15:kt||ur(2,o,r),kt||ur(4,o,r),Ns(i,r,o);break;case 1:kt||(Hi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&oE(o,r,u)),Ns(i,r,o);break;case 21:Ns(i,r,o);break;case 22:kt=(u=kt)||o.memoizedState!==null,Ns(i,r,o),kt=u;break;default:Ns(i,r,o)}}function pE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Fu(i)}catch(o){dt(r,r.return,o)}}function ux(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new hE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new hE),r;default:throw Error(s(435,i.tag))}}function _p(i,r){var o=ux(i);r.forEach(function(u){var f=yx.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Qn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(_r(S.type)){wt=S.stateNode,Vn=!1;break e}break;case 5:wt=S.stateNode,Vn=!1;break e;case 3:case 4:wt=S.stateNode.containerInfo,Vn=!0;break e}S=S.return}if(wt===null)throw Error(s(160));mE(m,E,f),wt=null,Vn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)gE(r,i),r=r.sibling}var Ei=null;function gE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Qn(r,i),Yn(i),u&4&&(ur(3,i,i.return),wu(3,i),ur(5,i,i.return));break;case 1:Qn(r,i),Yn(i),u&512&&(kt||o===null||Hi(o,o.return)),u&64&&Is&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Ei;if(Qn(r,i),Yn(i),u&512&&(kt||o===null||Hi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Zr]||m[Kt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),gn(m,u,o),m[Kt]=i,Nt(m),u=m;break e;case"link":var E=cT("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),gn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=cT("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),gn(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Kt]=i,Nt(m),u=m}i.stateNode=u}else hT(f,i.type,i.stateNode);else i.stateNode=uT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?hT(f,i.type,i.stateNode):uT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&dp(i,i.memoizedProps,o.memoizedProps)}break;case 27:Qn(r,i),Yn(i),u&512&&(kt||o===null||Hi(o,o.return)),o!==null&&u&4&&dp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Qn(r,i),Yn(i),u&512&&(kt||o===null||Hi(o,o.return)),i.flags&32){f=i.stateNode;try{ei(f,"")}catch(G){dt(i,i.return,G)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,dp(i,f,o!==null?o.memoizedProps:f)),u&1024&&(gp=!0);break;case 6:if(Qn(r,i),Yn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(G){dt(i,i.return,G)}}break;case 3:if(sf=null,f=Ei,Ei=tf(r.containerInfo),Qn(r,i),Ei=f,Yn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Fu(r.containerInfo)}catch(G){dt(i,i.return,G)}gp&&(gp=!1,_E(i));break;case 4:u=Ei,Ei=tf(i.stateNode.containerInfo),Qn(r,i),Yn(i),Ei=u;break;case 12:Qn(r,i),Yn(i);break;case 13:Qn(r,i),Yn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(wp=On()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,_p(i,u)));break;case 22:f=i.memoizedState!==null;var I=o!==null&&o.memoizedState!==null,q=Is,K=kt;if(Is=q||f,kt=K||I,Qn(r,i),kt=K,Is=q,Yn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||I||Is||kt||Sa(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){I=o=r;try{if(m=I.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=I.stateNode;var Z=I.memoizedProps.style,H=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;S.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(G){dt(I,I.return,G)}}}else if(r.tag===6){if(o===null){I=r;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(G){dt(I,I.return,G)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,_p(i,o))));break;case 19:Qn(r,i),Yn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,_p(i,u)));break;case 30:break;case 21:break;default:Qn(r,i),Yn(i)}}function Yn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(uE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=mp(i);Bh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(ei(E,""),o.flags&=-33);var S=mp(i);Bh(i,S,E);break;case 3:case 4:var I=o.stateNode.containerInfo,q=mp(i);pp(i,q,I);break;default:throw Error(s(161))}}catch(K){dt(i,i.return,K)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function _E(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;_E(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function cr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)fE(i,r.alternate,r),r=r.sibling}function Sa(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:ur(4,r,r.return),Sa(r);break;case 1:Hi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&oE(r,r.return,o),Sa(r);break;case 27:Mu(r.stateNode);case 26:case 5:Hi(r,r.return),Sa(r);break;case 22:r.memoizedState===null&&Sa(r);break;case 30:Sa(r);break;default:Sa(r)}i=i.sibling}}function hr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:hr(f,m,o),wu(4,m);break;case 1:if(hr(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){dt(u,u.return,q)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)Qv(I[f],S)}catch(q){dt(u,u.return,q)}}o&&E&64&&aE(m),Su(m,m.return);break;case 27:cE(m);case 26:case 5:hr(f,m,o),o&&u===null&&E&4&&lE(m),Su(m,m.return);break;case 12:hr(f,m,o);break;case 13:hr(f,m,o),o&&E&4&&pE(f,m);break;case 22:m.memoizedState===null&&hr(f,m,o),Su(m,m.return);break;case 30:break;default:hr(f,m,o)}r=r.sibling}}function yp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&uu(o))}function vp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&uu(i))}function Gi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)yE(i,r,o,u),r=r.sibling}function yE(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Gi(i,r,o,u),f&2048&&wu(9,r);break;case 1:Gi(i,r,o,u);break;case 3:Gi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&uu(i)));break;case 12:if(f&2048){Gi(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(I){dt(r,r.return,I)}}else Gi(i,r,o,u);break;case 13:Gi(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Gi(i,r,o,u):Au(i,r):m._visibility&2?Gi(i,r,o,u):(m._visibility|=2,Mo(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&yp(E,r);break;case 24:Gi(i,r,o,u),f&2048&&vp(r.alternate,r);break;default:Gi(i,r,o,u)}}function Mo(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,S=o,I=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:Mo(m,E,S,I,f),wu(8,E);break;case 23:break;case 22:var K=E.stateNode;E.memoizedState!==null?K._visibility&2?Mo(m,E,S,I,f):Au(m,E):(K._visibility|=2,Mo(m,E,S,I,f)),f&&q&2048&&yp(E.alternate,E);break;case 24:Mo(m,E,S,I,f),f&&q&2048&&vp(E.alternate,E);break;default:Mo(m,E,S,I,f)}r=r.sibling}}function Au(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:Au(o,u),f&2048&&yp(u.alternate,u);break;case 24:Au(o,u),f&2048&&vp(u.alternate,u);break;default:Au(o,u)}r=r.sibling}}var Cu=8192;function Oo(i){if(i.subtreeFlags&Cu)for(i=i.child;i!==null;)vE(i),i=i.sibling}function vE(i){switch(i.tag){case 26:Oo(i),i.flags&Cu&&i.memoizedState!==null&&Kx(Ei,i.memoizedState,i.memoizedProps);break;case 5:Oo(i);break;case 3:case 4:var r=Ei;Ei=tf(i.stateNode.containerInfo),Oo(i),Ei=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Cu,Cu=16777216,Oo(i),Cu=r):Oo(i));break;default:Oo(i)}}function EE(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function xu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];sn=u,bE(u,i)}EE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)TE(i),i=i.sibling}function TE(i){switch(i.tag){case 0:case 11:case 15:xu(i),i.flags&2048&&ur(9,i,i.return);break;case 3:xu(i);break;case 12:xu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,qh(i)):xu(i);break;default:xu(i)}}function qh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];sn=u,bE(u,i)}EE(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:ur(8,r,r.return),qh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,qh(r));break;default:qh(r)}i=i.sibling}}function bE(i,r){for(;sn!==null;){var o=sn;switch(o.tag){case 0:case 11:case 15:ur(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:uu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,sn=u;else e:for(o=i;sn!==null;){u=sn;var f=u.sibling,m=u.return;if(dE(u),u===o){sn=null;break e}if(f!==null){f.return=m,sn=f;break e}sn=m}}}var cx={getCacheForType:function(i){var r=En(Wt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},hx=typeof WeakMap=="function"?WeakMap:Map,rt=0,pt=null,qe=null,We=0,at=0,Kn=null,fr=!1,Po=!1,Ep=!1,Ds=0,Rt=0,dr=0,Aa=0,Tp=0,ui=0,Vo=0,Ru=null,Ln=null,bp=!1,wp=0,Hh=1/0,Gh=null,mr=null,pn=0,pr=null,Lo=null,jo=0,Sp=0,Ap=null,wE=null,Iu=0,Cp=null;function $n(){if((rt&2)!==0&&We!==0)return We&-We;if(Y.T!==null){var i=Ao;return i!==0?i:Mp()}return Xs()}function SE(){ui===0&&(ui=(We&536870912)===0||tt?jl():536870912);var i=li.current;return i!==null&&(i.flags|=32),ui}function Xn(i,r,o){(i===pt&&(at===2||at===9)||i.cancelPendingCommit!==null)&&(Uo(i,0),gr(i,We,ui,!1)),us(i,o),((rt&2)===0||i!==pt)&&(i===pt&&((rt&2)===0&&(Aa|=o),Rt===4&&gr(i,We,ui,!1)),Qi(i))}function AE(i,r,o){if((rt&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Wr(i,r),f=u?mx(i,r):Ip(i,r,!0),m=u;do{if(f===0){Po&&!u&&gr(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!fx(o)){f=Ip(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=i;f=Ru;var I=S.current.memoizedState.isDehydrated;if(I&&(Uo(S,E).flags|=256),E=Ip(S,E,!1),E!==2){if(Ep&&!I){S.errorRecoveryDisabledLanes|=m,Aa|=m,f=4;break e}m=Ln,Ln=f,m!==null&&(Ln===null?Ln=m:Ln.push.apply(Ln,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Uo(i,0),gr(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:gr(u,r,ui,!fr);break e;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=wp+300-On(),10<f)){if(gr(u,r,ui,!fr),to(u,0,!0)!==0)break e;u.timeoutHandle=eT(CE.bind(null,u,o,Ln,Gh,bp,r,ui,Aa,Vo,fr,m,2,-0,0),f);break e}CE(u,o,Ln,Gh,bp,r,ui,Aa,Vo,fr,m,0,-0,0)}}break}while(!0);Qi(i)}function CE(i,r,o,u,f,m,E,S,I,q,K,Z,H,G){if(i.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(Vu={stylesheets:null,count:0,unsuspend:Yx},vE(r),Z=$x(),Z!==null)){i.cancelPendingCommit=Z(ME.bind(null,i,r,m,o,u,f,E,S,I,K,1,H,G)),gr(i,m,E,!q);return}ME(i,r,m,o,u,f,E,S,I)}function fx(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Hn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function gr(i,r,o,u){r&=~Tp,r&=~Aa,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-Ct(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&Di(i,o,r)}function Qh(){return(rt&6)===0?(Nu(0),!1):!0}function xp(){if(qe!==null){if(at===0)var i=qe.return;else i=qe,ws=va=null,Hm(i),Do=null,Eu=0,i=qe;for(;i!==null;)rE(i.alternate,i),i=i.return;qe=null}}function Uo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,Nx(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),xp(),pt=i,qe=o=Es(i.current,null),We=r,at=0,Kn=null,fr=!1,Po=Wr(i,r),Ep=!1,Vo=ui=Tp=Aa=dr=Rt=0,Ln=Ru=null,bp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-Ct(u),m=1<<f;r|=i[f],u&=~m}return Ds=r,mh(),o}function xE(i,r){Pe=null,Y.H=Mh,r===hu||r===wh?(r=Hv(),at=3):r===Fv?(r=Hv(),at=4):at=r===G0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Kn=r,qe===null&&(Rt=1,jh(i,si(r,i.current)))}function RE(){var i=Y.H;return Y.H=Mh,i===null?Mh:i}function IE(){var i=Y.A;return Y.A=cx,i}function Rp(){Rt=4,fr||(We&4194048)!==We&&li.current!==null||(Po=!0),(dr&134217727)===0&&(Aa&134217727)===0||pt===null||gr(pt,We,ui,!1)}function Ip(i,r,o){var u=rt;rt|=2;var f=RE(),m=IE();(pt!==i||We!==r)&&(Gh=null,Uo(i,r)),r=!1;var E=Rt;e:do try{if(at!==0&&qe!==null){var S=qe,I=Kn;switch(at){case 8:xp(),E=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(r=!0);var q=at;if(at=0,Kn=null,zo(i,S,I,q),o&&Po){E=0;break e}break;default:q=at,at=0,Kn=null,zo(i,S,I,q)}}dx(),E=Rt;break}catch(K){xE(i,K)}while(!0);return r&&i.shellSuspendCounter++,ws=va=null,rt=u,Y.H=f,Y.A=m,qe===null&&(pt=null,We=0,mh()),E}function dx(){for(;qe!==null;)NE(qe)}function mx(i,r){var o=rt;rt|=2;var u=RE(),f=IE();pt!==i||We!==r?(Gh=null,Hh=On()+500,Uo(i,r)):Po=Wr(i,r);e:do try{if(at!==0&&qe!==null){r=qe;var m=Kn;t:switch(at){case 1:at=0,Kn=null,zo(i,r,m,1);break;case 2:case 9:if(Bv(m)){at=0,Kn=null,DE(r);break}r=function(){at!==2&&at!==9||pt!==i||(at=7),Qi(i)},m.then(r,r);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:Bv(m)?(at=0,Kn=null,DE(r)):(at=0,Kn=null,zo(i,r,m,7));break;case 5:var E=null;switch(qe.tag){case 26:E=qe.memoizedState;case 5:case 27:var S=qe;if(!E||fT(E)){at=0,Kn=null;var I=S.sibling;if(I!==null)qe=I;else{var q=S.return;q!==null?(qe=q,Yh(q)):qe=null}break t}}at=0,Kn=null,zo(i,r,m,5);break;case 6:at=0,Kn=null,zo(i,r,m,6);break;case 8:xp(),Rt=6;break e;default:throw Error(s(462))}}px();break}catch(K){xE(i,K)}while(!0);return ws=va=null,Y.H=u,Y.A=f,rt=o,qe!==null?0:(pt=null,We=0,mh(),Rt)}function px(){for(;qe!==null&&!Yr();)NE(qe)}function NE(i){var r=iE(i.alternate,i,Ds);i.memoizedProps=i.pendingProps,r===null?Yh(i):qe=r}function DE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=W0(o,r,r.pendingProps,r.type,void 0,We);break;case 11:r=W0(o,r,r.pendingProps,r.type.render,r.ref,We);break;case 5:Hm(r);default:rE(o,r),r=qe=kv(r,Ds),r=iE(o,r,Ds)}i.memoizedProps=i.pendingProps,r===null?Yh(i):qe=r}function zo(i,r,o,u){ws=va=null,Hm(r),Do=null,Eu=0;var f=r.return;try{if(sx(i,f,r,o,We)){Rt=1,jh(i,si(o,i.current)),qe=null;return}}catch(m){if(f!==null)throw qe=f,m;Rt=1,jh(i,si(o,i.current)),qe=null;return}r.flags&32768?(tt||u===1?i=!0:Po||(We&536870912)!==0?i=!1:(fr=i=!0,(u===2||u===9||u===3||u===6)&&(u=li.current,u!==null&&u.tag===13&&(u.flags|=16384))),kE(r,i)):Yh(r)}function Yh(i){var r=i;do{if((r.flags&32768)!==0){kE(r,fr);return}i=r.return;var o=ax(r.alternate,r,Ds);if(o!==null){qe=o;return}if(r=r.sibling,r!==null){qe=r;return}qe=r=i}while(r!==null);Rt===0&&(Rt=5)}function kE(i,r){do{var o=ox(i.alternate,i);if(o!==null){o.flags&=32767,qe=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){qe=i;return}qe=i=o}while(i!==null);Rt=6,qe=null}function ME(i,r,o,u,f,m,E,S,I){i.cancelPendingCommit=null;do Kh();while(pn!==0);if((rt&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=vm,zl(i,o,m,E,S,I),i===pt&&(qe=pt=null,We=0),Lo=r,pr=i,jo=o,Sp=m,Ap=f,wE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,vx(pi,function(){return jE(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,f=ne.p,ne.p=2,E=rt,rt|=4;try{lx(i,r,o)}finally{rt=E,ne.p=f,Y.T=u}}pn=1,OE(),PE(),VE()}}function OE(){if(pn===1){pn=0;var i=pr,r=Lo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=ne.p;ne.p=2;var f=rt;rt|=4;try{gE(r,i);var m=Fp,E=bv(i.containerInfo),S=m.focusedElem,I=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&Tv(S.ownerDocument.documentElement,S)){if(I!==null&&mm(S)){var q=I.start,K=I.end;if(K===void 0&&(K=q),"selectionStart"in S)S.selectionStart=q,S.selectionEnd=Math.min(K,S.value.length);else{var Z=S.ownerDocument||document,H=Z&&Z.defaultView||window;if(H.getSelection){var G=H.getSelection(),xe=S.textContent.length,be=Math.min(I.start,xe),ft=I.end===void 0?be:Math.min(I.end,xe);!G.extend&&be>ft&&(E=ft,ft=be,be=E);var j=Ev(S,be),O=Ev(S,ft);if(j&&O&&(G.rangeCount!==1||G.anchorNode!==j.node||G.anchorOffset!==j.offset||G.focusNode!==O.node||G.focusOffset!==O.offset)){var F=Z.createRange();F.setStart(j.node,j.offset),G.removeAllRanges(),be>ft?(G.addRange(F),G.extend(O.node,O.offset)):(F.setEnd(O.node,O.offset),G.addRange(F))}}}}for(Z=[],G=S;G=G.parentNode;)G.nodeType===1&&Z.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<Z.length;S++){var W=Z[S];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}of=!!zp,Fp=zp=null}finally{rt=f,ne.p=u,Y.T=o}}i.current=r,pn=2}}function PE(){if(pn===2){pn=0;var i=pr,r=Lo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=ne.p;ne.p=2;var f=rt;rt|=4;try{fE(i,r.alternate,r)}finally{rt=f,ne.p=u,Y.T=o}}pn=3}}function VE(){if(pn===4||pn===3){pn=0,eo();var i=pr,r=Lo,o=jo,u=wE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?pn=5:(pn=0,Lo=pr=null,LE(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(mr=null),no(o),r=r.stateNode,Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(Fe,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Y.T,f=ne.p,ne.p=2,Y.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{Y.T=r,ne.p=f}}(jo&3)!==0&&Kh(),Qi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===Cp?Iu++:(Iu=0,Cp=i):Iu=0,Nu(0)}}function LE(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,uu(r)))}function Kh(i){return OE(),PE(),VE(),jE()}function jE(){if(pn!==5)return!1;var i=pr,r=Sp;Sp=0;var o=no(jo),u=Y.T,f=ne.p;try{ne.p=32>o?32:o,Y.T=null,o=Ap,Ap=null;var m=pr,E=jo;if(pn=0,Lo=pr=null,jo=0,(rt&6)!==0)throw Error(s(331));var S=rt;if(rt|=4,TE(m.current),yE(m,m.current,E,o),rt=S,Nu(0,!1),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(Fe,m)}catch{}return!0}finally{ne.p=f,Y.T=u,LE(i,r)}}function UE(i,r,o){r=si(o,r),r=sp(i.stateNode,r,2),i=rr(i,r,2),i!==null&&(us(i,2),Qi(i))}function dt(i,r,o){if(i.tag===3)UE(i,i,o);else for(;r!==null;){if(r.tag===3){UE(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(mr===null||!mr.has(u))){i=si(o,i),o=q0(2),u=rr(r,o,2),u!==null&&(H0(o,u,r,i),us(u,2),Qi(u));break}}r=r.return}}function Np(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new hx;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Ep=!0,f.add(o),i=gx.bind(null,i,r,o),r.then(i,i))}function gx(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,pt===i&&(We&o)===o&&(Rt===4||Rt===3&&(We&62914560)===We&&300>On()-wp?(rt&2)===0&&Uo(i,0):Tp|=o,Vo===We&&(Vo=0)),Qi(i)}function zE(i,r){r===0&&(r=Ul()),i=To(i,r),i!==null&&(us(i,r),Qi(i))}function _x(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),zE(i,o)}function yx(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),zE(i,o)}function vx(i,r){return as(i,r)}var $h=null,Fo=null,Dp=!1,Xh=!1,kp=!1,Ca=0;function Qi(i){i!==Fo&&i.next===null&&(Fo===null?$h=Fo=i:Fo=Fo.next=i),Xh=!0,Dp||(Dp=!0,Tx())}function Nu(i,r){if(!kp&&Xh){kp=!0;do for(var o=!1,u=$h;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-Ct(42|i)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,HE(u,m))}else m=We,m=to(u,u===pt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Wr(u,m)||(o=!0,HE(u,m));u=u.next}while(o);kp=!1}}function Ex(){FE()}function FE(){Xh=Dp=!1;var i=0;Ca!==0&&(Ix()&&(i=Ca),Ca=0);for(var r=On(),o=null,u=$h;u!==null;){var f=u.next,m=BE(u,r);m===0?(u.next=null,o===null?$h=f:o.next=f,f===null&&(Fo=o)):(o=u,(i!==0||(m&3)!==0)&&(Xh=!0)),u=f}Nu(i)}function BE(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-Ct(m),S=1<<E,I=f[E];I===-1?((S&o)===0||(S&u)!==0)&&(f[E]=Ll(S,r)):I<=r&&(i.expiredLanes|=S),m&=~S}if(r=pt,o=We,o=to(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(at===2||at===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&os(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Wr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&os(u),no(o)){case 2:case 8:o=Ni;break;case 32:o=pi;break;case 268435456:o=ge;break;default:o=pi}return u=qE.bind(null,i),o=as(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&os(u),i.callbackPriority=2,i.callbackNode=null,2}function qE(i,r){if(pn!==0&&pn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Kh()&&i.callbackNode!==o)return null;var u=We;return u=to(i,i===pt?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(AE(i,u,r),BE(i,On()),i.callbackNode!=null&&i.callbackNode===o?qE.bind(null,i):null)}function HE(i,r){if(Kh())return null;AE(i,r,!0)}function Tx(){Dx(function(){(rt&6)!==0?as(Ii,Ex):FE()})}function Mp(){return Ca===0&&(Ca=jl()),Ca}function GE(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:lo(""+i)}function QE(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function bx(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=GE((f[Ut]||null).action),E=u.submitter;E&&(r=(r=E[Ut]||null)?GE(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var S=new uo("action","action",null,u,f);i.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ca!==0){var I=E?QE(f,E):new FormData(f);Jm(o,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(S.preventDefault(),I=E?QE(f,E):new FormData(f),Jm(o,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var Op=0;Op<ym.length;Op++){var Pp=ym[Op],wx=Pp.toLowerCase(),Sx=Pp[0].toUpperCase()+Pp.slice(1);vi(wx,"on"+Sx)}vi(Av,"onAnimationEnd"),vi(Cv,"onAnimationIteration"),vi(xv,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(FC,"onTransitionRun"),vi(BC,"onTransitionStart"),vi(qC,"onTransitionCancel"),vi(Rv,"onTransitionEnd"),hs("onMouseEnter",["mouseout","mouseover"]),hs("onMouseLeave",["mouseout","mouseover"]),hs("onPointerEnter",["pointerout","pointerover"]),hs("onPointerLeave",["pointerout","pointerover"]),_i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_i("onBeforeInput",["compositionend","keypress","textInput","paste"]),_i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Du));function YE(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],I=S.instance,q=S.currentTarget;if(S=S.listener,I!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(K){Lh(K)}f.currentTarget=null,m=I}else for(E=0;E<u.length;E++){if(S=u[E],I=S.instance,q=S.currentTarget,S=S.listener,I!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(K){Lh(K)}f.currentTarget=null,m=I}}}}function He(i,r){var o=r[Bl];o===void 0&&(o=r[Bl]=new Set);var u=i+"__bubble";o.has(u)||(KE(r,i,2,!1),o.add(u))}function Vp(i,r,o){var u=0;r&&(u|=4),KE(o,i,u,r)}var Wh="_reactListening"+Math.random().toString(36).slice(2);function Lp(i){if(!i[Wh]){i[Wh]=!0,ql.forEach(function(o){o!=="selectionchange"&&(Ax.has(o)||Vp(o,!1,i),Vp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Wh]||(r[Wh]=!0,Vp("selectionchange",!1,r))}}function KE(i,r,o,u){switch(yT(r)){case 2:var f=Zx;break;case 8:f=Jx;break;default:f=Wp}o=f.bind(null,r,o,i),f=void 0,!ni||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function jp(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=cs(S),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){u=m=E;continue e}S=S.parentNode}}u=u.return}Jc(function(){var q=m,K=ti(o),Z=[];e:{var H=Iv.get(i);if(H!==void 0){var G=uo,xe=i;switch(i){case"keypress":if(Li(o)===0)break e;case"keydown":case"keyup":G=go;break;case"focusin":xe="focus",G=fo;break;case"focusout":xe="blur",G=fo;break;case"beforeblur":case"afterblur":G=fo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=ii;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=oh;break;case Av:case Cv:case xv:G=mo;break;case Rv:G=uh;break;case"scroll":case"scrollend":G=eh;break;case"wheel":G=_o;break;case"copy":case"cut":case"paste":G=po;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=tu;break;case"toggle":case"beforetoggle":G=hh}var be=(r&4)!==0,ft=!be&&(i==="scroll"||i==="scrollend"),j=be?H!==null?H+"Capture":null:H;be=[];for(var O=q,F;O!==null;){var W=O;if(F=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||F===null||j===null||(W=ra(O,j),W!=null&&be.push(ku(O,W,F))),ft)break;O=O.return}0<be.length&&(H=new G(H,xe,null,o,K),Z.push({event:H,listeners:be}))}}if((r&7)===0){e:{if(H=i==="mouseover"||i==="pointerover",G=i==="mouseout"||i==="pointerout",H&&o!==ms&&(xe=o.relatedTarget||o.fromElement)&&(cs(xe)||xe[Jn]))break e;if((G||H)&&(H=K.window===K?K:(H=K.ownerDocument)?H.defaultView||H.parentWindow:window,G?(xe=o.relatedTarget||o.toElement,G=q,xe=xe?cs(xe):null,xe!==null&&(ft=l(xe),be=xe.tag,xe!==ft||be!==5&&be!==27&&be!==6)&&(xe=null)):(G=null,xe=q),G!==xe)){if(be=ii,W="onMouseLeave",j="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(be=tu,W="onPointerLeave",j="onPointerEnter",O="pointer"),ft=G==null?H:Mi(G),F=xe==null?H:Mi(xe),H=new be(W,O+"leave",G,o,K),H.target=ft,H.relatedTarget=F,W=null,cs(K)===q&&(be=new be(j,O+"enter",xe,o,K),be.target=F,be.relatedTarget=ft,W=be),ft=W,G&&xe)t:{for(be=G,j=xe,O=0,F=be;F;F=Bo(F))O++;for(F=0,W=j;W;W=Bo(W))F++;for(;0<O-F;)be=Bo(be),O--;for(;0<F-O;)j=Bo(j),F--;for(;O--;){if(be===j||j!==null&&be===j.alternate)break t;be=Bo(be),j=Bo(j)}be=null}else be=null;G!==null&&$E(Z,H,G,be,!1),xe!==null&&ft!==null&&$E(Z,ft,xe,be,!0)}}e:{if(H=q?Mi(q):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var pe=mv;else if(Xt(H))if(pv)pe=jC;else{pe=VC;var Le=PC}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?q&&Kl(q.elementType)&&(pe=mv):pe=LC;if(pe&&(pe=pe(i,q))){vs(Z,pe,o,K);break e}Le&&Le(i,H,q),i==="focusout"&&q&&H.type==="number"&&q.memoizedProps.value!=null&&er(H,"number",H.value)}switch(Le=q?Mi(q):window,i){case"focusin":(Xt(Le)||Le.contentEditable==="true")&&(yo=Le,pm=q,su=null);break;case"focusout":su=pm=yo=null;break;case"mousedown":gm=!0;break;case"contextmenu":case"mouseup":case"dragend":gm=!1,wv(Z,o,K);break;case"selectionchange":if(zC)break;case"keydown":case"keyup":wv(Z,o,K)}var ve;if(zi)e:{switch(i){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else $e?Q(i,o)&&(we="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(we="onCompositionStart");we&&(v&&o.locale!=="ko"&&($e||we!=="onCompositionStart"?we==="onCompositionEnd"&&$e&&(ve=Xl()):(Vi=K,tr="value"in Vi?Vi.value:Vi.textContent,$e=!0)),Le=Zh(q,we),0<Le.length&&(we=new Jl(we,i,null,o,K),Z.push({event:we,listeners:Le}),ve?we.data=ve:(ve=oe(o),ve!==null&&(we.data=ve)))),(ve=_?$t(i,o):Xe(i,o))&&(we=Zh(q,"onBeforeInput"),0<we.length&&(Le=new Jl("onBeforeInput","beforeinput",null,o,K),Z.push({event:Le,listeners:we}),Le.data=ve)),bx(Z,i,q,o,K)}YE(Z,r)})}function ku(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Zh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=ra(i,o),f!=null&&u.unshift(ku(i,f,m)),f=ra(i,r),f!=null&&u.push(ku(i,f,m))),i.tag===3)return u;i=i.return}return[]}function Bo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function $E(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var S=o,I=S.alternate,q=S.stateNode;if(S=S.tag,I!==null&&I===u)break;S!==5&&S!==26&&S!==27||q===null||(I=q,f?(q=ra(o,m),q!=null&&E.unshift(ku(o,q,I))):f||(q=ra(o,m),q!=null&&E.push(ku(o,q,I)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var Cx=/\r\n?/g,xx=/\u0000|\uFFFD/g;function XE(i){return(typeof i=="string"?i:""+i).replace(Cx,`
`).replace(xx,"")}function WE(i,r){return r=XE(r),XE(i)===r}function Jh(){}function ht(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||ei(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&ei(i,""+u);break;case"className":Oi(i,"class",u);break;case"tabIndex":Oi(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(i,o,u);break;case"style":Yl(i,u,m);break;case"data":if(r!=="object"){Oi(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=lo(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&ht(i,r,"name",f.name,f,null),ht(i,r,"formEncType",f.formEncType,f,null),ht(i,r,"formMethod",f.formMethod,f,null),ht(i,r,"formTarget",f.formTarget,f,null)):(ht(i,r,"encType",f.encType,f,null),ht(i,r,"method",f.method,f,null),ht(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=lo(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Jh);break;case"onScroll":u!=null&&He("scroll",i);break;case"onScrollEnd":u!=null&&He("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=lo(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":He("beforetoggle",i),He("toggle",i),Js(i,"popover",u);break;case"xlinkActuate":fn(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":fn(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":fn(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":fn(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":fn(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":fn(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":fn(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":fn(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":fn(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Js(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=lm.get(o)||o,Js(i,o,u))}}function Up(i,r,o,u,f,m){switch(o){case"style":Yl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?ei(i,u):(typeof u=="number"||typeof u=="bigint")&&ei(i,""+u);break;case"onScroll":u!=null&&He("scroll",i);break;case"onScrollEnd":u!=null&&He("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Jh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!io.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Ut]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):Js(i,o,u)}}}function gn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",i),He("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ht(i,r,m,E,o,null)}}f&&ht(i,r,"srcSet",o.srcSet,o,null),u&&ht(i,r,"src",o.src,o,null);return;case"input":He("invalid",i);var S=m=E=f=null,I=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":E=K;break;case"checked":I=K;break;case"defaultChecked":q=K;break;case"value":m=K;break;case"defaultValue":S=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:ht(i,r,u,K,o,null)}}na(i,m,S,I,q,E,f,!1),oo(i);return;case"select":He("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:ht(i,r,f,S,o,null)}r=m,o=E,i.multiple=!!u,r!=null?ds(i,!!u,r,!1):o!=null&&ds(i,!!u,o,!0);return;case"textarea":He("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:ht(i,r,E,S,o,null)}ia(i,u,f,m),oo(i);return;case"option":for(I in o)if(o.hasOwnProperty(I)&&(u=o[I],u!=null))switch(I){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ht(i,r,I,u,o,null)}return;case"dialog":He("beforetoggle",i),He("toggle",i),He("cancel",i),He("close",i);break;case"iframe":case"object":He("load",i);break;case"video":case"audio":for(u=0;u<Du.length;u++)He(Du[u],i);break;case"image":He("error",i),He("load",i);break;case"details":He("toggle",i);break;case"embed":case"source":case"link":He("error",i),He("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ht(i,r,q,u,o,null)}return;default:if(Kl(r)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&Up(i,r,K,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&ht(i,r,S,u,o,null))}function Rx(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,I=null,q=null,K=null;for(G in o){var Z=o[G];if(o.hasOwnProperty(G)&&Z!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":I=Z;default:u.hasOwnProperty(G)||ht(i,r,G,null,u,Z)}}for(var H in u){var G=u[H];if(Z=o[H],u.hasOwnProperty(H)&&(G!=null||Z!=null))switch(H){case"type":m=G;break;case"name":f=G;break;case"checked":q=G;break;case"defaultChecked":K=G;break;case"value":E=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:G!==Z&&ht(i,r,H,G,u,Z)}}qn(i,E,S,I,q,K,m,f);return;case"select":G=E=S=H=null;for(m in o)if(I=o[m],o.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":G=I;default:u.hasOwnProperty(m)||ht(i,r,m,null,u,I)}for(f in u)if(m=u[f],I=o[f],u.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":H=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==I&&ht(i,r,f,m,u,I)}r=S,o=E,u=G,H!=null?ds(i,!!o,H,!1):!!u!=!!o&&(r!=null?ds(i,!!o,r,!0):ds(i,!!o,o?[]:"",!1));return;case"textarea":G=H=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ht(i,r,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":H=f;break;case"defaultValue":G=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&ht(i,r,E,f,u,m)}ut(i,H,G);return;case"option":for(var xe in o)if(H=o[xe],o.hasOwnProperty(xe)&&H!=null&&!u.hasOwnProperty(xe))switch(xe){case"selected":i.selected=!1;break;default:ht(i,r,xe,null,u,H)}for(I in u)if(H=u[I],G=o[I],u.hasOwnProperty(I)&&H!==G&&(H!=null||G!=null))switch(I){case"selected":i.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:ht(i,r,I,H,u,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in o)H=o[be],o.hasOwnProperty(be)&&H!=null&&!u.hasOwnProperty(be)&&ht(i,r,be,null,u,H);for(q in u)if(H=u[q],G=o[q],u.hasOwnProperty(q)&&H!==G&&(H!=null||G!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:ht(i,r,q,H,u,G)}return;default:if(Kl(r)){for(var ft in o)H=o[ft],o.hasOwnProperty(ft)&&H!==void 0&&!u.hasOwnProperty(ft)&&Up(i,r,ft,void 0,u,H);for(K in u)H=u[K],G=o[K],!u.hasOwnProperty(K)||H===G||H===void 0&&G===void 0||Up(i,r,K,H,u,G);return}}for(var j in o)H=o[j],o.hasOwnProperty(j)&&H!=null&&!u.hasOwnProperty(j)&&ht(i,r,j,null,u,H);for(Z in u)H=u[Z],G=o[Z],!u.hasOwnProperty(Z)||H===G||H==null&&G==null||ht(i,r,Z,H,u,G)}var zp=null,Fp=null;function ef(i){return i.nodeType===9?i:i.ownerDocument}function ZE(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function JE(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Bp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var qp=null;function Ix(){var i=window.event;return i&&i.type==="popstate"?i===qp?!1:(qp=i,!0):(qp=null,!1)}var eT=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,tT=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof tT<"u"?function(i){return tT.resolve(null).then(i).catch(kx)}:eT;function kx(i){setTimeout(function(){throw i})}function _r(i){return i==="head"}function nT(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&Mu(E.documentElement),o&2&&Mu(E.body),o&4)for(o=E.head,Mu(o),E=o.firstChild;E;){var S=E.nextSibling,I=E.nodeName;E[Zr]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){i.removeChild(m),Fu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Fu(r)}function Hp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Hp(o),Zs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function Mx(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Zr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=Ti(i.nextSibling),i===null)break}return null}function Ox(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Ti(i.nextSibling),i===null))return null;return i}function Gp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function Px(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function Ti(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Qp=null;function iT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function sT(i,r,o){switch(r=ef(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Mu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Zs(i)}var ci=new Map,rT=new Set;function tf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var ks=ne.d;ne.d={f:Vx,r:Lx,D:jx,C:Ux,L:zx,m:Fx,X:qx,S:Bx,M:Hx};function Vx(){var i=ks.f(),r=Qh();return i||r}function Lx(i){var r=ki(i);r!==null&&r.tag===5&&r.type==="form"?A0(r):ks.r(i)}var qo=typeof document>"u"?null:document;function aT(i,r,o){var u=qo;if(u&&typeof r=="string"&&r){var f=zt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),rT.has(f)||(rT.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),gn(r,"link",i),Nt(r),u.head.appendChild(r)))}}function jx(i){ks.D(i),aT("dns-prefetch",i,null)}function Ux(i,r){ks.C(i,r),aT("preconnect",i,r)}function zx(i,r,o){ks.L(i,r,o);var u=qo;if(u&&i&&r){var f='link[rel="preload"][as="'+zt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+zt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+zt(o.imageSizes)+'"]')):f+='[href="'+zt(i)+'"]';var m=f;switch(r){case"style":m=Ho(i);break;case"script":m=Go(i)}ci.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),ci.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(Ou(m))||r==="script"&&u.querySelector(Pu(m))||(r=u.createElement("link"),gn(r,"link",i),Nt(r),u.head.appendChild(r)))}}function Fx(i,r){ks.m(i,r);var o=qo;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+zt(u)+'"][href="'+zt(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Go(i)}if(!ci.has(m)&&(i=y({rel:"modulepreload",href:i},r),ci.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Pu(m)))return}u=o.createElement("link"),gn(u,"link",i),Nt(u),o.head.appendChild(u)}}}function Bx(i,r,o){ks.S(i,r,o);var u=qo;if(u&&i){var f=xn(u).hoistableStyles,m=Ho(i);r=r||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(Ou(m)))S.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=ci.get(m))&&Yp(i,o);var I=E=u.createElement("link");Nt(I),gn(I,"link",i),I._p=new Promise(function(q,K){I.onload=q,I.onerror=K}),I.addEventListener("load",function(){S.loading|=1}),I.addEventListener("error",function(){S.loading|=2}),S.loading|=4,nf(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function qx(i,r){ks.X(i,r);var o=qo;if(o&&i){var u=xn(o).hoistableScripts,f=Go(i),m=u.get(f);m||(m=o.querySelector(Pu(f)),m||(i=y({src:i,async:!0},r),(r=ci.get(f))&&Kp(i,r),m=o.createElement("script"),Nt(m),gn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function Hx(i,r){ks.M(i,r);var o=qo;if(o&&i){var u=xn(o).hoistableScripts,f=Go(i),m=u.get(f);m||(m=o.querySelector(Pu(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=ci.get(f))&&Kp(i,r),m=o.createElement("script"),Nt(m),gn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function oT(i,r,o,u){var f=(f=Ce.current)?tf(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Ho(o.href),o=xn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Ho(o.href);var m=xn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(Ou(i)))&&!m._p&&(E.instance=m,E.state.loading=5),ci.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ci.set(i,o),m||Gx(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Go(o),o=xn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Ho(i){return'href="'+zt(i)+'"'}function Ou(i){return'link[rel="stylesheet"]['+i+"]"}function lT(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function Gx(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),gn(r,"link",o),Nt(r),i.head.appendChild(r))}function Go(i){return'[src="'+zt(i)+'"]'}function Pu(i){return"script[async]"+i}function uT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+zt(o.href)+'"]');if(u)return r.instance=u,Nt(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),Nt(u),gn(u,"style",f),nf(u,o.precedence,i),r.instance=u;case"stylesheet":f=Ho(o.href);var m=i.querySelector(Ou(f));if(m)return r.state.loading|=4,r.instance=m,Nt(m),m;u=lT(o),(f=ci.get(f))&&Yp(u,f),m=(i.ownerDocument||i).createElement("link"),Nt(m);var E=m;return E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),gn(m,"link",u),r.state.loading|=4,nf(m,o.precedence,i),r.instance=m;case"script":return m=Go(o.src),(f=i.querySelector(Pu(m)))?(r.instance=f,Nt(f),f):(u=o,(f=ci.get(m))&&(u=y({},o),Kp(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),Nt(f),gn(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,nf(u,o.precedence,i));return r.instance}function nf(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Yp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Kp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var sf=null;function cT(i,r,o){if(sf===null){var u=new Map,f=sf=new Map;f.set(o,u)}else f=sf,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[Zr]||m[Kt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function hT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function Qx(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function fT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Vu=null;function Yx(){}function Kx(i,r,o){if(Vu===null)throw Error(s(475));var u=Vu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Ho(o.href),m=i.querySelector(Ou(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=rf.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,Nt(m);return}m=i.ownerDocument||i,o=lT(o),(f=ci.get(f))&&Yp(o,f),m=m.createElement("link"),Nt(m);var E=m;E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),gn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=rf.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function $x(){if(Vu===null)throw Error(s(475));var i=Vu;return i.stylesheets&&i.count===0&&$p(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&$p(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function rf(){if(this.count--,this.count===0){if(this.stylesheets)$p(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var af=null;function $p(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,af=new Map,r.forEach(Xx,i),af=null,rf.call(i))}function Xx(i,r){if(!(r.state.loading&4)){var o=af.get(i);if(o)var u=o.get(null);else{o=new Map,af.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=rf.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var Lu={$$typeof:ue,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Wx(i,r,o,u,f,m,E,S){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ls(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.hiddenUpdates=ls(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function dT(i,r,o,u,f,m,E,S,I,q,K,Z){return i=new Wx(i,r,o,E,S,I,q,Z),r=1,m===!0&&(r|=24),m=Gn(3,null,null,r),i.current=m,m.stateNode=i,r=Nm(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},Om(m),i}function mT(i){return i?(i=bo,i):bo}function pT(i,r,o,u,f,m){f=mT(f),u.context===null?u.context=f:u.pendingContext=f,u=sr(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=rr(i,u,r),o!==null&&(Xn(o,i,r),du(o,i,r))}function gT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Xp(i,r){gT(i,r),(i=i.alternate)&&gT(i,r)}function _T(i){if(i.tag===13){var r=To(i,67108864);r!==null&&Xn(r,i,67108864),Xp(i,67108864)}}var of=!0;function Zx(i,r,o,u){var f=Y.T;Y.T=null;var m=ne.p;try{ne.p=2,Wp(i,r,o,u)}finally{ne.p=m,Y.T=f}}function Jx(i,r,o,u){var f=Y.T;Y.T=null;var m=ne.p;try{ne.p=8,Wp(i,r,o,u)}finally{ne.p=m,Y.T=f}}function Wp(i,r,o,u){if(of){var f=Zp(u);if(f===null)jp(i,r,u,lf,o),vT(i,u);else if(tR(f,i,r,o,u))u.stopPropagation();else if(vT(i,u),r&4&&-1<eR.indexOf(i)){for(;f!==null;){var m=ki(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=gi(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var I=1<<31-Ct(E);S.entanglements[1]|=I,E&=~I}Qi(m),(rt&6)===0&&(Hh=On()+500,Nu(0))}}break;case 13:S=To(m,2),S!==null&&Xn(S,m,2),Qh(),Xp(m,2)}if(m=Zp(u),m===null&&jp(i,r,u,lf,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else jp(i,r,u,null,o)}}function Zp(i){return i=ti(i),Jp(i)}var lf=null;function Jp(i){if(lf=null,i=cs(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return lf=i,null}function yT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pl()){case Ii:return 2;case Ni:return 8;case pi:case Vl:return 32;case ge:return 268435456;default:return 32}default:return 32}}var eg=!1,yr=null,vr=null,Er=null,ju=new Map,Uu=new Map,Tr=[],eR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vT(i,r){switch(i){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":ju.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uu.delete(r.pointerId)}}function zu(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=ki(r),r!==null&&_T(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function tR(i,r,o,u,f){switch(r){case"focusin":return yr=zu(yr,i,r,o,u,f),!0;case"dragenter":return vr=zu(vr,i,r,o,u,f),!0;case"mouseover":return Er=zu(Er,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return ju.set(m,zu(ju.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Uu.set(m,zu(Uu.get(m)||null,i,r,o,u,f)),!0}return!1}function ET(i){var r=cs(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Qc(i.priority,function(){if(o.tag===13){var u=$n();u=$s(u);var f=To(o,u);f!==null&&Xn(f,o,u),Xp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function uf(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Zp(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);ms=u,o.target.dispatchEvent(u),ms=null}else return r=ki(o),r!==null&&_T(r),i.blockedOn=o,!1;r.shift()}return!0}function TT(i,r,o){uf(i)&&o.delete(r)}function nR(){eg=!1,yr!==null&&uf(yr)&&(yr=null),vr!==null&&uf(vr)&&(vr=null),Er!==null&&uf(Er)&&(Er=null),ju.forEach(TT),Uu.forEach(TT)}function cf(i,r){i.blockedOn===r&&(i.blockedOn=null,eg||(eg=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,nR)))}var hf=null;function bT(i){hf!==i&&(hf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){hf===i&&(hf=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(Jp(u||o)===null)continue;break}var m=ki(o);m!==null&&(i.splice(r,3),r-=3,Jm(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Fu(i){function r(I){return cf(I,i)}yr!==null&&cf(yr,i),vr!==null&&cf(vr,i),Er!==null&&cf(Er,i),ju.forEach(r),Uu.forEach(r);for(var o=0;o<Tr.length;o++){var u=Tr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<Tr.length&&(o=Tr[0],o.blockedOn===null);)ET(o),o.blockedOn===null&&Tr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Ut]||null;if(typeof m=="function")E||bT(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Ut]||null)S=E.formAction;else if(Jp(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),bT(o)}}}function tg(i){this._internalRoot=i}ff.prototype.render=tg.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=$n();pT(o,u,i,r,null,null)},ff.prototype.unmount=tg.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;pT(i.current,2,null,i,null,null),Qh(),r[Jn]=null}};function ff(i){this._internalRoot=i}ff.prototype.unstable_scheduleHydration=function(i){if(i){var r=Xs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<Tr.length&&r!==0&&r<Tr[o].priority;o++);Tr.splice(o,0,i),o===0&&ET(i)}};var wT=e.version;if(wT!=="19.1.1")throw Error(s(527,wT,"19.1.1"));ne.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var iR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var df=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!df.isDisabled&&df.supportsFiber)try{Fe=df.inject(iR),Be=df}catch{}}return qu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=U0,m=z0,E=F0,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=dT(i,1,!1,null,null,o,u,f,m,E,S,null),i[Jn]=r.current,Lp(i),new tg(r)},qu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=U0,E=z0,S=F0,I=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(I=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),r=dT(i,1,!0,r,o??null,u,f,m,E,S,I,q),r.context=mT(null),o=r.current,u=$n(),u=$s(u),f=sr(u),f.callback=null,rr(o,f,u),o=u,r.current.lanes=o,us(r,o),Qi(r),i[Jn]=r.current,Lp(i),new ff(r)},qu.version="19.1.1",qu}var MT;function dR(){if(MT)return sg.exports;MT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),sg.exports=fR(),sg.exports}var mR=dR();const pR=()=>{};var OT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=function(n,e){if(!n)throw wl(e)},wl=function(n){return new Error("Firebase Database ("+X1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},gR=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},b_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,D=g&63;p||(D=64,c||(w=64)),s.push(t[y],t[T],t[w],t[D])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(W1(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new _R;const w=l<<2|d>>4;if(s.push(w),g!==64){const D=d<<4&240|g>>2;if(s.push(D),T!==64){const M=g<<6&192|T;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _R extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z1=function(n){const e=W1(n);return b_.encodeByteArray(e,!0)},Mf=function(n){return Z1(n).replace(/\./g,"")},Of=function(n){try{return b_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(n){return J1(void 0,n)}function J1(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!vR(t)||(n[t]=J1(n[t],e[t]));return n}function vR(n){return n!=="__proto__"}/**
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
 */const TR=()=>ER().__FIREBASE_DEFAULTS__,bR=()=>{if(typeof process>"u"||typeof OT>"u")return;const n=OT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Of(n[1]);return e&&JSON.parse(e)},Ed=()=>{try{return pR()||TR()||bR()||wR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ew=n=>Ed()?.emulatorHosts?.[n],tw=n=>{const e=ew(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},nw=()=>Ed()?.config,iw=n=>Ed()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function qr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function w_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function sw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Mf(JSON.stringify(t)),Mf(JSON.stringify(c)),""].join(".")}const Zu={};function SR(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zu))Zu[e]?n.emulator.push(e):n.prod.push(e);return n}function AR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let PT=!1;function S_(n,e){if(typeof window>"u"||typeof document>"u"||!qr(window.location.host)||Zu[n]===e||Zu[n]||PT)return;Zu[n]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=SR().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,D){w.setAttribute("width","24"),w.setAttribute("id",D),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{PT=!0,c()},w}function y(w,D){w.setAttribute("id",D),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=AR(s),D=t("text"),M=document.getElementById(D)||document.createElement("span"),B=t("learnmore"),U=document.getElementById(B)||document.createElement("a"),ae=t("preprendIcon"),re=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const ue=w.element;d(ue),y(U,B);const _e=g();p(re,ae),ue.append(re,M,U,_e),document.body.appendChild(ue)}l?(M.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function A_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(An())}function CR(){const n=Ed()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function rw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IR(){const n=An();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function NR(){return X1.NODE_ADMIN===!0}function DR(){return!CR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kR(){try{return typeof indexedDB=="object"}catch{return!1}}function MR(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="FirebaseError";class Ys extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=OR,Object.setPrototypeOf(this,Ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xc.prototype.create)}}class xc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?PR(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ys(a,d,s)}}function PR(n,e){return n.replace(VR,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const VR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const aw=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=cc(Of(l[0])||""),t=cc(Of(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},LR=function(n){const e=aw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},jR=function(n){const e=aw(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function al(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Pf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function es(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(VT(l)&&VT(c)){if(!es(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function VT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const w=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const w=(a<<5|a>>>27)+g+p+y+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function zR(n,e){const t=new FR(n,e);return t.subscribe.bind(t)}class FR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");BR(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=lg),a.error===void 0&&(a.error=lg),a.complete===void 0&&(a.complete=lg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lg(){}function ol(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,le(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Td=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function yt(n){return n&&n._delegate?n._delegate:n}class Or{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class HR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Os;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QR(e))try{this.getOrInitializeService({instanceIdentifier:xa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=xa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xa){return this.instances.has(e)}getOptions(e=xa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:GR(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xa){return this.component?this.component.multipleInstances?e:xa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GR(n){return n===xa?void 0:n}function QR(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var Ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ge||(Ge={}));const KR={debug:Ge.DEBUG,verbose:Ge.VERBOSE,info:Ge.INFO,warn:Ge.WARN,error:Ge.ERROR,silent:Ge.SILENT},$R=Ge.INFO,XR={[Ge.DEBUG]:"log",[Ge.VERBOSE]:"log",[Ge.INFO]:"info",[Ge.WARN]:"warn",[Ge.ERROR]:"error"},WR=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=XR[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bd{constructor(e){this.name=e,this._logLevel=$R,this._logHandler=WR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ge.DEBUG,...e),this._logHandler(this,Ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ge.VERBOSE,...e),this._logHandler(this,Ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ge.INFO,...e),this._logHandler(this,Ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ge.WARN,...e),this._logHandler(this,Ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ge.ERROR,...e),this._logHandler(this,Ge.ERROR,...e)}}const ZR=(n,e)=>e.some(t=>n instanceof t);let LT,jT;function JR(){return LT||(LT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eI(){return jT||(jT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ow=new WeakMap,kg=new WeakMap,lw=new WeakMap,ug=new WeakMap,C_=new WeakMap;function tI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Rr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&ow.set(t,n)}).catch(()=>{}),C_.set(e,n),e}function nI(n){if(kg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});kg.set(n,e)}let Mg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return kg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function iI(n){Mg=n(Mg)}function sI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(cg(this),e,...t);return lw.set(s,e.sort?e.sort():[e]),Rr(s)}:eI().includes(n)?function(...e){return n.apply(cg(this),e),Rr(ow.get(this))}:function(...e){return Rr(n.apply(cg(this),e))}}function rI(n){return typeof n=="function"?sI(n):(n instanceof IDBTransaction&&nI(n),ZR(n,JR())?new Proxy(n,Mg):n)}function Rr(n){if(n instanceof IDBRequest)return tI(n);if(ug.has(n))return ug.get(n);const e=rI(n);return e!==n&&(ug.set(n,e),C_.set(e,n)),e}const cg=n=>C_.get(n);function aI(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=Rr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Rr(c.result),p.oldVersion,p.newVersion,Rr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const oI=["get","getKey","getAll","getAllKeys","count"],lI=["put","add","delete","clear"],hg=new Map;function UT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(hg.get(e))return hg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=lI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||oI.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return hg.set(e,l),l}iI(n=>({...n,get:(e,t,s)=>UT(e,t)||n.get(e,t,s),has:(e,t)=>!!UT(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function cI(n){return n.getComponent()?.type==="VERSION"}const Og="@firebase/app",zT="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new bd("@firebase/app"),hI="@firebase/app-compat",fI="@firebase/analytics-compat",dI="@firebase/analytics",mI="@firebase/app-check-compat",pI="@firebase/app-check",gI="@firebase/auth",_I="@firebase/auth-compat",yI="@firebase/database",vI="@firebase/data-connect",EI="@firebase/database-compat",TI="@firebase/functions",bI="@firebase/functions-compat",wI="@firebase/installations",SI="@firebase/installations-compat",AI="@firebase/messaging",CI="@firebase/messaging-compat",xI="@firebase/performance",RI="@firebase/performance-compat",II="@firebase/remote-config",NI="@firebase/remote-config-compat",DI="@firebase/storage",kI="@firebase/storage-compat",MI="@firebase/firestore",OI="@firebase/ai",PI="@firebase/firestore-compat",VI="firebase",LI="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="[DEFAULT]",jI={[Og]:"fire-core",[hI]:"fire-core-compat",[dI]:"fire-analytics",[fI]:"fire-analytics-compat",[pI]:"fire-app-check",[mI]:"fire-app-check-compat",[gI]:"fire-auth",[_I]:"fire-auth-compat",[yI]:"fire-rtdb",[vI]:"fire-data-connect",[EI]:"fire-rtdb-compat",[TI]:"fire-fn",[bI]:"fire-fn-compat",[wI]:"fire-iid",[SI]:"fire-iid-compat",[AI]:"fire-fcm",[CI]:"fire-fcm-compat",[xI]:"fire-perf",[RI]:"fire-perf-compat",[II]:"fire-rc",[NI]:"fire-rc-compat",[DI]:"fire-gcs",[kI]:"fire-gcs-compat",[MI]:"fire-fst",[PI]:"fire-fst-compat",[OI]:"fire-vertex","fire-js":"fire-js",[VI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new Map,UI=new Map,Vg=new Map;function FT(n,e){try{n.container.addComponent(e)}catch(t){Fs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function za(n){const e=n.name;if(Vg.has(e))return Fs.debug(`There were multiple attempts to register component ${e}.`),!1;Vg.set(e,n);for(const t of Lf.values())FT(t,n);for(const t of UI.values())FT(t,n);return!0}function wd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function hi(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new xc("app","Firebase",zI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ka=LI;function uw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Pg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw Ir.create("bad-app-name",{appName:String(a)});if(t||(t=nw()),!t)throw Ir.create("no-options");const l=Lf.get(a);if(l){if(es(t,l.options)&&es(s,l.config))return l;throw Ir.create("duplicate-app",{appName:a})}const c=new YR(a);for(const p of Vg.values())c.addComponent(p);const d=new FI(t,s,c);return Lf.set(a,d),d}function x_(n=Pg){const e=Lf.get(n);if(!e&&n===Pg&&nw())return uw();if(!e)throw Ir.create("no-app",{appName:n});return e}function Ki(n,e,t){let s=jI[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fs.warn(c.join(" "));return}za(new Or(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const BI="firebase-heartbeat-database",qI=1,hc="firebase-heartbeat-store";let fg=null;function cw(){return fg||(fg=aI(BI,qI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hc)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ir.create("idb-open",{originalErrorMessage:n.message})})),fg}async function HI(n){try{const t=(await cw()).transaction(hc),s=await t.objectStore(hc).get(hw(n));return await t.done,s}catch(e){if(e instanceof Ys)Fs.warn(e.message);else{const t=Ir.create("idb-get",{originalErrorMessage:e?.message});Fs.warn(t.message)}}}async function BT(n,e){try{const s=(await cw()).transaction(hc,"readwrite");await s.objectStore(hc).put(e,hw(n)),await s.done}catch(t){if(t instanceof Ys)Fs.warn(t.message);else{const s=Ir.create("idb-set",{originalErrorMessage:t?.message});Fs.warn(s.message)}}}function hw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const GI=1024,QI=30;class YI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $I(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>QI){const a=XI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Fs.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qT(),{heartbeatsToSend:t,unsentEntries:s}=KI(this._heartbeatsCache.heartbeats),a=Mf(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Fs.warn(e),""}}}function qT(){return new Date().toISOString().substring(0,10)}function KI(n,e=GI){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),HT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),HT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class $I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kR()?MR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await HI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return BT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return BT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function HT(n){return Mf(JSON.stringify({version:2,heartbeats:n})).length}function XI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(n){za(new Or("platform-logger",e=>new uI(e),"PRIVATE")),za(new Or("heartbeat",e=>new YI(e),"PRIVATE")),Ki(Og,zT,n),Ki(Og,zT,"esm2020"),Ki("fire-js","")}WI("");var ZI="firebase",JI="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ki(ZI,JI,"app");function fw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eN=fw,dw=new xc("auth","Firebase",fw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new bd("@firebase/auth");function tN(n,...e){jf.logLevel<=Ge.WARN&&jf.warn(`Auth (${Ka}): ${n}`,...e)}function bf(n,...e){jf.logLevel<=Ge.ERROR&&jf.error(`Auth (${Ka}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n,...e){throw I_(n,...e)}function Ai(n,...e){return I_(n,...e)}function R_(n,e,t){const s={...eN(),[e]:t};return new xc("auth","Firebase",s).create(e,{appName:n.name})}function Oa(n){return R_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ts(n,"argument-error"),R_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return dw.create(n,...e)}function Ne(n,e,...t){if(!n)throw I_(e,...t)}function Vs(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bf(e),new Error(e)}function Bs(n,e){n||Vs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(){return typeof self<"u"&&self.location?.href||""}function iN(){return GT()==="http:"||GT()==="https:"}function GT(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bs(t>e,"Short delay should be less than long delay!"),this.isMobile=A_()||rw()}get(){return sN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n,e){Bs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const oN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lN=new Rc(3e4,6e4);function D_(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Al(n,e,t,s,a={}){return pw(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=Sl({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return xR()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&qr(n.emulatorConfig.host)&&(g.credentials="include"),mw.fetch()(await gw(n,n.config.apiHost,t,d),g)})}async function pw(n,e,t){n._canInitEmulator=!1;const s={...aN,...e};try{const a=new cN(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw mf(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw mf(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw mf(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw mf(n,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw R_(n,y,g);ts(n,y)}}catch(a){if(a instanceof Ys)throw a;ts(n,"network-request-failed",{message:String(a)})}}async function uN(n,e,t,s,a={}){const l=await Al(n,e,t,s,a);return"mfaPendingCredential"in l&&ts(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function gw(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?N_(n.config,a):`${n.config.apiScheme}://${a}`;return oN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class cN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ai(this.auth,"network-request-failed")),lN.get())})}}function mf(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Ai(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(n,e){return Al(n,"POST","/v1/accounts:delete",e)}async function Uf(n,e){return Al(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fN(n,e=!1){const t=yt(n),s=await t.getIdToken(e),a=k_(s);Ne(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Ju(dg(a.auth_time)),issuedAtTime:Ju(dg(a.iat)),expirationTime:Ju(dg(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function dg(n){return Number(n)*1e3}function k_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return bf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Of(t);return a?JSON.parse(a):(bf("Failed to decode base64 JWT payload"),null)}catch(a){return bf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function QT(n){const e=k_(n);return Ne(e,"internal-error"),Ne(typeof e.exp<"u","internal-error"),Ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ys&&dN(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function dN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ju(this.lastLoginAt),this.creationTime=Ju(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(n){const e=n.auth,t=await n.getIdToken(),s=await fc(n,Uf(e,{idToken:t}));Ne(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?_w(a.providerUserInfo):[],c=gN(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!c?.length,g=d?p:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new jg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,y)}async function pN(n){const e=yt(n);await zf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gN(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function _w(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(n,e){const t=await pw(n,{},async()=>{const s=Sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await gw(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&qr(n.emulatorConfig.host)&&(p.credentials="include"),mw.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yN(n,e){return Al(n,"POST","/v2/accounts:revokeToken",D_(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ne(e.idToken,"internal-error"),Ne(typeof e.idToken<"u","internal-error"),Ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):QT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ne(e.length!==0,"internal-error");const t=QT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await _N(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Jo;return s&&(Ne(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ne(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ne(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jo,this.toJSON())}_performRefresh(){return Vs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n,e){Ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class wi{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new mN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new jg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await fc(this,this.stsTokenManager.getToken(this.auth,e));return Ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fN(this,e)}reload(){return pN(this)}_assign(e){this!==e&&(Ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await zf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hi(this.auth.app))return Promise.reject(Oa(this.auth));const e=await this.getIdToken();return await fc(this,hN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:T,emailVerified:w,isAnonymous:D,providerData:M,stsTokenManager:B}=t;Ne(T&&B,e,"internal-error");const U=Jo.fromJSON(this.name,B);Ne(typeof T=="string",e,"internal-error"),wr(s,e.name),wr(a,e.name),Ne(typeof w=="boolean",e,"internal-error"),Ne(typeof D=="boolean",e,"internal-error"),wr(l,e.name),wr(c,e.name),wr(d,e.name),wr(p,e.name),wr(g,e.name),wr(y,e.name);const ae=new wi({uid:T,auth:e,email:a,emailVerified:w,displayName:s,isAnonymous:D,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:U,createdAt:g,lastLoginAt:y});return M&&Array.isArray(M)&&(ae.providerData=M.map(re=>({...re}))),p&&(ae._redirectEventId=p),ae}static async _fromIdTokenResponse(e,t,s=!1){const a=new Jo;a.updateFromServerResponse(t);const l=new wi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await zf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ne(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?_w(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new Jo;d.updateFromIdToken(s);const p=new wi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new jg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=new Map;function Ls(n){Bs(n instanceof Function,"Expected a class definition");let e=YT.get(n);return e?(Bs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,YT.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yw.type="NONE";const KT=yw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(n,e,t){return`firebase:${n}:${e}:${t}`}class el{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=wf(this.userKey,a.apiKey,l),this.fullPersistenceKey=wf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uf(this.auth,{idToken:e}).catch(()=>{});return t?wi._fromGetAccountInfoResponse(this.auth,t,e):null}return wi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new el(Ls(KT),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ls(KT);const c=wf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const w=await Uf(e,{idToken:y}).catch(()=>{});if(!w)break;T=await wi._fromGetAccountInfoResponse(e,w,y)}else T=wi._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new el(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new el(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sw(e))return"Blackberry";if(Aw(e))return"Webos";if(Ew(e))return"Safari";if((e.includes("chrome/")||Tw(e))&&!e.includes("edge/"))return"Chrome";if(ww(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function vw(n=An()){return/firefox\//i.test(n)}function Ew(n=An()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tw(n=An()){return/crios\//i.test(n)}function bw(n=An()){return/iemobile/i.test(n)}function ww(n=An()){return/android/i.test(n)}function Sw(n=An()){return/blackberry/i.test(n)}function Aw(n=An()){return/webos/i.test(n)}function M_(n=An()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vN(n=An()){return M_(n)&&!!window.navigator?.standalone}function EN(){return IR()&&document.documentMode===10}function Cw(n=An()){return M_(n)||ww(n)||Aw(n)||Sw(n)||/windows phone/i.test(n)||bw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(n,e=[]){let t;switch(n){case"Browser":t=$T(An());break;case"Worker":t=`${$T(An())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ka}/${s}`}/**
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
 */class TN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function bN(n,e={}){return Al(n,"GET","/v2/passwordPolicy",D_(n,e))}/**
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
 */class AN{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new XT(this),this.idTokenSubscription=new XT(this),this.beforeStateQueue=new TN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ls(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await el.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uf(this,{idToken:e}),s=await wi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(hi(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hi(this.app))return Promise.reject(Oa(this));const t=e?yt(e):null;return t&&Ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hi(this.app)?Promise.reject(Oa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hi(this.app)?Promise.reject(Oa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ls(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bN(this),t=new SN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await yN(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ls(e)||this._popupRedirectResolver;Ne(t,this,"argument-error"),this.redirectPersistenceManager=await el.create(this,[Ls(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ne(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(hi(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&tN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Sd(n){return yt(n)}class XT{constructor(e){this.auth=e,this.observer=null,this.addObserver=zR(t=>this.observer=t)}get next(){return Ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CN(n){O_=n}function xN(n){return O_.loadJS(n)}function RN(){return O_.gapiScript}function IN(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(n,e){const t=wd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(es(l,e??{}))return a;ts(a,"already-initialized")}return t.initialize({options:e})}function DN(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ls);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function kN(n,e,t){const s=Sd(n);Ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=Rw(e),{host:c,port:d}=MN(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ne(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ne(es(g,s.config.emulator)&&es(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,qr(c)?(w_(`${l}//${c}${p}`),S_("Auth",!0)):ON()}function Rw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function MN(n){const e=Rw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:WT(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:WT(c)}}}function WT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ON(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vs("not implemented")}_getIdTokenResponse(e){return Vs("not implemented")}_linkToIdToken(e,t){return Vs("not implemented")}_getReauthenticationResolver(e){return Vs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(n,e){return uN(n,"POST","/v1/accounts:signInWithIdp",D_(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN="http://localhost";class Fa extends Iw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ts("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new Fa(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return tl(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,tl(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tl(e,t)}buildRequest(){const e={requestUri:PN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Sl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends P_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Ic{constructor(){super("facebook.com")}static credential(e){return Fa._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends Ic{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Fa._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ps.credential(t,s)}catch{return null}}}Ps.GOOGLE_SIGN_IN_METHOD="google.com";Ps.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Ic{constructor(){super("github.com")}static credential(e){return Fa._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Ic{constructor(){super("twitter.com")}static credential(e,t){return Fa._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Cr.credential(t,s)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await wi._fromIdTokenResponse(e,s,a),c=ZT(s);return new ll({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=ZT(s);return new ll({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function ZT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff extends Ys{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Ff.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Ff(e,t,s,a)}}function Nw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ff._fromErrorAndOperation(n,l,e,s):l})}async function VN(n,e,t=!1){const s=await fc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ll._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(n,e,t=!1){const{auth:s}=n;if(hi(s.app))return Promise.reject(Oa(s));const a="reauthenticate";try{const l=await fc(n,Nw(s,a,e,n),t);Ne(l.idToken,s,"internal-error");const c=k_(l.idToken);Ne(c,s,"internal-error");const{sub:d}=c;return Ne(n.uid===d,s,"user-mismatch"),ll._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&ts(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(n,e,t=!1){if(hi(n.app))return Promise.reject(Oa(n));const s="signIn",a=await Nw(n,s,e),l=await ll._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}function UN(n,e,t,s){return yt(n).onIdTokenChanged(e,t,s)}function zN(n,e,t){return yt(n).beforeAuthStateChanged(e,t)}function FN(n,e,t,s){return yt(n).onAuthStateChanged(e,t,s)}function BN(n){return yt(n).signOut()}const Bf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bf,"1"),this.storage.removeItem(Bf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=1e3,HN=10;class kw extends Dw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);EN()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,HN):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kw.type="LOCAL";const GN=kw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw extends Dw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mw.type="SESSION";const Ow=Mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ad{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Ad(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await QN(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ad.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=V_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(){return window}function KN(n){$i().location.href=n}/**
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
 */function Pw(){return typeof $i().WorkerGlobalScope<"u"&&typeof $i().importScripts=="function"}async function $N(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XN(){return navigator?.serviceWorker?.controller||null}function WN(){return Pw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="firebaseLocalStorageDb",ZN=1,qf="firebaseLocalStorage",Lw="fbase_key";class Nc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Cd(n,e){return n.transaction([qf],e?"readwrite":"readonly").objectStore(qf)}function JN(){const n=indexedDB.deleteDatabase(Vw);return new Nc(n).toPromise()}function Ug(){const n=indexedDB.open(Vw,ZN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(qf,{keyPath:Lw})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(qf)?e(s):(s.close(),await JN(),e(await Ug()))})})}async function JT(n,e,t){const s=Cd(n,!0).put({[Lw]:e,value:t});return new Nc(s).toPromise()}async function e2(n,e){const t=Cd(n,!1).get(e),s=await new Nc(t).toPromise();return s===void 0?null:s.value}function eb(n,e){const t=Cd(n,!0).delete(e);return new Nc(t).toPromise()}const t2=800,n2=3;class jw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ug(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>n2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ad._getInstance(WN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await $N(),!this.activeServiceWorker)return;this.sender=new YN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ug();return await JT(e,Bf,"1"),await eb(e,Bf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>JT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>e2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>eb(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Cd(a,!1).getAll();return new Nc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jw.type="LOCAL";const i2=jw;new Rc(3e4,6e4);/**
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
 */function Uw(n,e){return e?Ls(e):(Ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_ extends Iw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function s2(n){return jN(n.auth,new L_(n),n.bypassAuthState)}function r2(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),LN(t,new L_(n),n.bypassAuthState)}async function a2(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),VN(t,new L_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return s2;case"linkViaPopup":case"linkViaRedirect":return a2;case"reauthViaPopup":case"reauthViaRedirect":return r2;default:ts(this.auth,"internal-error")}}resolve(e){Bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=new Rc(2e3,1e4);async function l2(n,e,t){if(hi(n.app))return Promise.reject(Ai(n,"operation-not-supported-in-this-environment"));const s=Sd(n);nN(n,e,P_);const a=Uw(s,t);return new Na(s,"signInViaPopup",e,a).executeNotNull()}class Na extends zw{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Na.currentPopupAction&&Na.currentPopupAction.cancel(),Na.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ne(e,this.auth,"internal-error"),e}async onExecution(){Bs(this.filter.length===1,"Popup operations only handle one event");const e=V_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ai(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ai(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Na.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ai(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o2.get())};e()}}Na.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2="pendingRedirect",Sf=new Map;class c2 extends zw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Sf.get(this.auth._key());if(!e){try{const s=await h2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Sf.set(this.auth._key(),e)}return this.bypassAuthState||Sf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h2(n,e){const t=m2(e),s=d2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function f2(n,e){Sf.set(n._key(),e)}function d2(n){return Ls(n._redirectPersistence)}function m2(n){return wf(u2,n.config.apiKey,n.name)}async function p2(n,e,t=!1){if(hi(n.app))return Promise.reject(Oa(n));const s=Sd(n),a=Uw(s,e),c=await new c2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=600*1e3;class _2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Fw(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Ai(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g2&&this.cachedEventUids.clear(),this.cachedEventUids.has(tb(e))}saveEventToCache(e){this.cachedEventUids.add(tb(e)),this.lastProcessedEventTime=Date.now()}}function tb(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function y2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(n,e={}){return Al(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T2=/^https?/;async function b2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await v2(n);for(const t of e)try{if(w2(t))return}catch{}ts(n,"unauthorized-domain")}function w2(n){const e=Lg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!T2.test(t))return!1;if(E2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const S2=new Rc(3e4,6e4);function nb(){const n=$i().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function A2(n){return new Promise((e,t)=>{function s(){nb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nb(),t(Ai(n,"network-request-failed"))},timeout:S2.get()})}if($i().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if($i().gapi?.load)s();else{const a=IN("iframefcb");return $i()[a]=()=>{gapi.load?s():t(Ai(n,"network-request-failed"))},xN(`${RN()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Af=null,e})}let Af=null;function C2(n){return Af=Af||A2(n),Af}/**
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
 */const x2=new Rc(5e3,15e3),R2="__/auth/iframe",I2="emulator/auth/iframe",N2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k2(n){const e=n.config;Ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?N_(e,I2):`https://${n.config.authDomain}/${R2}`,s={apiKey:e.apiKey,appName:n.name,v:Ka},a=D2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Sl(s).slice(1)}`}async function M2(n){const e=await C2(n),t=$i().gapi;return Ne(t,n,"internal-error"),e.open({where:document.body,url:k2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=Ai(n,"network-request-failed"),d=$i().setTimeout(()=>{l(c)},x2.get());function p(){$i().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const O2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P2=500,V2=600,L2="_blank",j2="http://localhost";class ib{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U2(n,e,t,s=P2,a=V2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...O2,width:s.toString(),height:a.toString(),top:l,left:c},g=An().toLowerCase();t&&(d=Tw(g)?L2:t),vw(g)&&(e=e||j2,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[D,M])=>`${w}${D}=${M},`,"");if(vN(g)&&d!=="_self")return z2(e||"",d),new ib(null);const T=window.open(e||"",d,y);Ne(T,n,"popup-blocked");try{T.focus()}catch{}return new ib(T)}function z2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const F2="__/auth/handler",B2="emulator/auth/handler",q2=encodeURIComponent("fac");async function sb(n,e,t,s,a,l){Ne(n.config.authDomain,n,"auth-domain-config-required"),Ne(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ka,eventId:a};if(e instanceof P_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Pf(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof Ic){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${q2}=${encodeURIComponent(p)}`:"";return`${H2(n)}?${Sl(d).slice(1)}${g}`}function H2({config:n}){return n.emulator?N_(n,B2):`https://${n.authDomain}/${F2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="webStorageSupport";class G2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ow,this._completeRedirectFn=p2,this._overrideRedirectResult=f2}async _openPopup(e,t,s,a){Bs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await sb(e,t,s,Lg(),a);return U2(e,l,V_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await sb(e,t,s,Lg(),a);return KN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Bs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await M2(e),s=new _2(e);return t.register("authEvent",a=>(Ne(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mg,{type:mg},a=>{const l=a?.[0]?.[mg];l!==void 0&&t(!!l),ts(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=b2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cw()||Ew()||M_()}}const Q2=G2;var rb="@firebase/auth",ab="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function K2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $2(n){za(new Or("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ne(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xw(n)},g=new AN(s,a,l,p);return DN(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),za(new Or("auth-internal",e=>{const t=Sd(e.getProvider("auth").getImmediate());return(s=>new Y2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ki(rb,ab,K2(n)),Ki(rb,ab,"esm2020")}/**
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
 */const X2=300,W2=iw("authIdTokenMaxAge")||X2;let ob=null;const Z2=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>W2)return;const a=t?.token;ob!==a&&(ob=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function J2(n=x_()){const e=wd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=NN(n,{popupRedirectResolver:Q2,persistence:[i2,GN,Ow]}),s=iw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=Z2(l.toString());zN(t,c,()=>c(t.currentUser)),UN(t,d=>c(d))}}const a=ew("auth");return a&&kN(t,`http://${a}`),t}function eD(){return document.getElementsByTagName("head")?.[0]??document}CN({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=Ai("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",eD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$2("Browser");var lb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nr,Bw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,C){function R(){}R.prototype=C.prototype,k.D=C.prototype,k.prototype=new R,k.prototype.constructor=k,k.C=function(P,V,L){for(var x=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)x[ye-2]=arguments[ye];return C.prototype[V].apply(P,x)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,C,R){R||(R=0);var P=Array(16);if(typeof C=="string")for(var V=0;16>V;++V)P[V]=C.charCodeAt(R++)|C.charCodeAt(R++)<<8|C.charCodeAt(R++)<<16|C.charCodeAt(R++)<<24;else for(V=0;16>V;++V)P[V]=C[R++]|C[R++]<<8|C[R++]<<16|C[R++]<<24;C=k.g[0],R=k.g[1],V=k.g[2];var L=k.g[3],x=C+(L^R&(V^L))+P[0]+3614090360&4294967295;C=R+(x<<7&4294967295|x>>>25),x=L+(V^C&(R^V))+P[1]+3905402710&4294967295,L=C+(x<<12&4294967295|x>>>20),x=V+(R^L&(C^R))+P[2]+606105819&4294967295,V=L+(x<<17&4294967295|x>>>15),x=R+(C^V&(L^C))+P[3]+3250441966&4294967295,R=V+(x<<22&4294967295|x>>>10),x=C+(L^R&(V^L))+P[4]+4118548399&4294967295,C=R+(x<<7&4294967295|x>>>25),x=L+(V^C&(R^V))+P[5]+1200080426&4294967295,L=C+(x<<12&4294967295|x>>>20),x=V+(R^L&(C^R))+P[6]+2821735955&4294967295,V=L+(x<<17&4294967295|x>>>15),x=R+(C^V&(L^C))+P[7]+4249261313&4294967295,R=V+(x<<22&4294967295|x>>>10),x=C+(L^R&(V^L))+P[8]+1770035416&4294967295,C=R+(x<<7&4294967295|x>>>25),x=L+(V^C&(R^V))+P[9]+2336552879&4294967295,L=C+(x<<12&4294967295|x>>>20),x=V+(R^L&(C^R))+P[10]+4294925233&4294967295,V=L+(x<<17&4294967295|x>>>15),x=R+(C^V&(L^C))+P[11]+2304563134&4294967295,R=V+(x<<22&4294967295|x>>>10),x=C+(L^R&(V^L))+P[12]+1804603682&4294967295,C=R+(x<<7&4294967295|x>>>25),x=L+(V^C&(R^V))+P[13]+4254626195&4294967295,L=C+(x<<12&4294967295|x>>>20),x=V+(R^L&(C^R))+P[14]+2792965006&4294967295,V=L+(x<<17&4294967295|x>>>15),x=R+(C^V&(L^C))+P[15]+1236535329&4294967295,R=V+(x<<22&4294967295|x>>>10),x=C+(V^L&(R^V))+P[1]+4129170786&4294967295,C=R+(x<<5&4294967295|x>>>27),x=L+(R^V&(C^R))+P[6]+3225465664&4294967295,L=C+(x<<9&4294967295|x>>>23),x=V+(C^R&(L^C))+P[11]+643717713&4294967295,V=L+(x<<14&4294967295|x>>>18),x=R+(L^C&(V^L))+P[0]+3921069994&4294967295,R=V+(x<<20&4294967295|x>>>12),x=C+(V^L&(R^V))+P[5]+3593408605&4294967295,C=R+(x<<5&4294967295|x>>>27),x=L+(R^V&(C^R))+P[10]+38016083&4294967295,L=C+(x<<9&4294967295|x>>>23),x=V+(C^R&(L^C))+P[15]+3634488961&4294967295,V=L+(x<<14&4294967295|x>>>18),x=R+(L^C&(V^L))+P[4]+3889429448&4294967295,R=V+(x<<20&4294967295|x>>>12),x=C+(V^L&(R^V))+P[9]+568446438&4294967295,C=R+(x<<5&4294967295|x>>>27),x=L+(R^V&(C^R))+P[14]+3275163606&4294967295,L=C+(x<<9&4294967295|x>>>23),x=V+(C^R&(L^C))+P[3]+4107603335&4294967295,V=L+(x<<14&4294967295|x>>>18),x=R+(L^C&(V^L))+P[8]+1163531501&4294967295,R=V+(x<<20&4294967295|x>>>12),x=C+(V^L&(R^V))+P[13]+2850285829&4294967295,C=R+(x<<5&4294967295|x>>>27),x=L+(R^V&(C^R))+P[2]+4243563512&4294967295,L=C+(x<<9&4294967295|x>>>23),x=V+(C^R&(L^C))+P[7]+1735328473&4294967295,V=L+(x<<14&4294967295|x>>>18),x=R+(L^C&(V^L))+P[12]+2368359562&4294967295,R=V+(x<<20&4294967295|x>>>12),x=C+(R^V^L)+P[5]+4294588738&4294967295,C=R+(x<<4&4294967295|x>>>28),x=L+(C^R^V)+P[8]+2272392833&4294967295,L=C+(x<<11&4294967295|x>>>21),x=V+(L^C^R)+P[11]+1839030562&4294967295,V=L+(x<<16&4294967295|x>>>16),x=R+(V^L^C)+P[14]+4259657740&4294967295,R=V+(x<<23&4294967295|x>>>9),x=C+(R^V^L)+P[1]+2763975236&4294967295,C=R+(x<<4&4294967295|x>>>28),x=L+(C^R^V)+P[4]+1272893353&4294967295,L=C+(x<<11&4294967295|x>>>21),x=V+(L^C^R)+P[7]+4139469664&4294967295,V=L+(x<<16&4294967295|x>>>16),x=R+(V^L^C)+P[10]+3200236656&4294967295,R=V+(x<<23&4294967295|x>>>9),x=C+(R^V^L)+P[13]+681279174&4294967295,C=R+(x<<4&4294967295|x>>>28),x=L+(C^R^V)+P[0]+3936430074&4294967295,L=C+(x<<11&4294967295|x>>>21),x=V+(L^C^R)+P[3]+3572445317&4294967295,V=L+(x<<16&4294967295|x>>>16),x=R+(V^L^C)+P[6]+76029189&4294967295,R=V+(x<<23&4294967295|x>>>9),x=C+(R^V^L)+P[9]+3654602809&4294967295,C=R+(x<<4&4294967295|x>>>28),x=L+(C^R^V)+P[12]+3873151461&4294967295,L=C+(x<<11&4294967295|x>>>21),x=V+(L^C^R)+P[15]+530742520&4294967295,V=L+(x<<16&4294967295|x>>>16),x=R+(V^L^C)+P[2]+3299628645&4294967295,R=V+(x<<23&4294967295|x>>>9),x=C+(V^(R|~L))+P[0]+4096336452&4294967295,C=R+(x<<6&4294967295|x>>>26),x=L+(R^(C|~V))+P[7]+1126891415&4294967295,L=C+(x<<10&4294967295|x>>>22),x=V+(C^(L|~R))+P[14]+2878612391&4294967295,V=L+(x<<15&4294967295|x>>>17),x=R+(L^(V|~C))+P[5]+4237533241&4294967295,R=V+(x<<21&4294967295|x>>>11),x=C+(V^(R|~L))+P[12]+1700485571&4294967295,C=R+(x<<6&4294967295|x>>>26),x=L+(R^(C|~V))+P[3]+2399980690&4294967295,L=C+(x<<10&4294967295|x>>>22),x=V+(C^(L|~R))+P[10]+4293915773&4294967295,V=L+(x<<15&4294967295|x>>>17),x=R+(L^(V|~C))+P[1]+2240044497&4294967295,R=V+(x<<21&4294967295|x>>>11),x=C+(V^(R|~L))+P[8]+1873313359&4294967295,C=R+(x<<6&4294967295|x>>>26),x=L+(R^(C|~V))+P[15]+4264355552&4294967295,L=C+(x<<10&4294967295|x>>>22),x=V+(C^(L|~R))+P[6]+2734768916&4294967295,V=L+(x<<15&4294967295|x>>>17),x=R+(L^(V|~C))+P[13]+1309151649&4294967295,R=V+(x<<21&4294967295|x>>>11),x=C+(V^(R|~L))+P[4]+4149444226&4294967295,C=R+(x<<6&4294967295|x>>>26),x=L+(R^(C|~V))+P[11]+3174756917&4294967295,L=C+(x<<10&4294967295|x>>>22),x=V+(C^(L|~R))+P[2]+718787259&4294967295,V=L+(x<<15&4294967295|x>>>17),x=R+(L^(V|~C))+P[9]+3951481745&4294967295,k.g[0]=k.g[0]+C&4294967295,k.g[1]=k.g[1]+(V+(x<<21&4294967295|x>>>11))&4294967295,k.g[2]=k.g[2]+V&4294967295,k.g[3]=k.g[3]+L&4294967295}s.prototype.u=function(k,C){C===void 0&&(C=k.length);for(var R=C-this.blockSize,P=this.B,V=this.h,L=0;L<C;){if(V==0)for(;L<=R;)a(this,k,L),L+=this.blockSize;if(typeof k=="string"){for(;L<C;)if(P[V++]=k.charCodeAt(L++),V==this.blockSize){a(this,P),V=0;break}}else for(;L<C;)if(P[V++]=k[L++],V==this.blockSize){a(this,P),V=0;break}}this.h=V,this.o+=C},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var C=1;C<k.length-8;++C)k[C]=0;var R=8*this.o;for(C=k.length-8;C<k.length;++C)k[C]=R&255,R/=256;for(this.u(k),k=Array(16),C=R=0;4>C;++C)for(var P=0;32>P;P+=8)k[R++]=this.g[C]>>>P&255;return k};function l(k,C){var R=d;return Object.prototype.hasOwnProperty.call(R,k)?R[k]:R[k]=C(k)}function c(k,C){this.h=C;for(var R=[],P=!0,V=k.length-1;0<=V;V--){var L=k[V]|0;P&&L==C||(R[V]=L,P=!1)}this.g=R}var d={};function p(k){return-128<=k&&128>k?l(k,function(C){return new c([C|0],0>C?-1:0)}):new c([k|0],0>k?-1:0)}function g(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return U(g(-k));for(var C=[],R=1,P=0;k>=R;P++)C[P]=k/R|0,R*=4294967296;return new c(C,0)}function y(k,C){if(k.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(k.charAt(0)=="-")return U(y(k.substring(1),C));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(C,8)),P=T,V=0;V<k.length;V+=8){var L=Math.min(8,k.length-V),x=parseInt(k.substring(V,V+L),C);8>L?(L=g(Math.pow(C,L)),P=P.j(L).add(g(x))):(P=P.j(R),P=P.add(g(x)))}return P}var T=p(0),w=p(1),D=p(16777216);n=c.prototype,n.m=function(){if(B(this))return-U(this).m();for(var k=0,C=1,R=0;R<this.g.length;R++){var P=this.i(R);k+=(0<=P?P:4294967296+P)*C,C*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(M(this))return"0";if(B(this))return"-"+U(this).toString(k);for(var C=g(Math.pow(k,6)),R=this,P="";;){var V=_e(R,C).g;R=ae(R,V.j(C));var L=((0<R.g.length?R.g[0]:R.h)>>>0).toString(k);if(R=V,M(R))return L+P;for(;6>L.length;)L="0"+L;P=L+P}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function M(k){if(k.h!=0)return!1;for(var C=0;C<k.g.length;C++)if(k.g[C]!=0)return!1;return!0}function B(k){return k.h==-1}n.l=function(k){return k=ae(this,k),B(k)?-1:M(k)?0:1};function U(k){for(var C=k.g.length,R=[],P=0;P<C;P++)R[P]=~k.g[P];return new c(R,~k.h).add(w)}n.abs=function(){return B(this)?U(this):this},n.add=function(k){for(var C=Math.max(this.g.length,k.g.length),R=[],P=0,V=0;V<=C;V++){var L=P+(this.i(V)&65535)+(k.i(V)&65535),x=(L>>>16)+(this.i(V)>>>16)+(k.i(V)>>>16);P=x>>>16,L&=65535,x&=65535,R[V]=x<<16|L}return new c(R,R[R.length-1]&-2147483648?-1:0)};function ae(k,C){return k.add(U(C))}n.j=function(k){if(M(this)||M(k))return T;if(B(this))return B(k)?U(this).j(U(k)):U(U(this).j(k));if(B(k))return U(this.j(U(k)));if(0>this.l(D)&&0>k.l(D))return g(this.m()*k.m());for(var C=this.g.length+k.g.length,R=[],P=0;P<2*C;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<k.g.length;V++){var L=this.i(P)>>>16,x=this.i(P)&65535,ye=k.i(V)>>>16,Ke=k.i(V)&65535;R[2*P+2*V]+=x*Ke,re(R,2*P+2*V),R[2*P+2*V+1]+=L*Ke,re(R,2*P+2*V+1),R[2*P+2*V+1]+=x*ye,re(R,2*P+2*V+1),R[2*P+2*V+2]+=L*ye,re(R,2*P+2*V+2)}for(P=0;P<C;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=C;P<2*C;P++)R[P]=0;return new c(R,0)};function re(k,C){for(;(k[C]&65535)!=k[C];)k[C+1]+=k[C]>>>16,k[C]&=65535,C++}function ue(k,C){this.g=k,this.h=C}function _e(k,C){if(M(C))throw Error("division by zero");if(M(k))return new ue(T,T);if(B(k))return C=_e(U(k),C),new ue(U(C.g),U(C.h));if(B(C))return C=_e(k,U(C)),new ue(U(C.g),C.h);if(30<k.g.length){if(B(k)||B(C))throw Error("slowDivide_ only works with positive integers.");for(var R=w,P=C;0>=P.l(k);)R=ce(R),P=ce(P);var V=me(R,1),L=me(P,1);for(P=me(P,2),R=me(R,2);!M(P);){var x=L.add(P);0>=x.l(k)&&(V=V.add(R),L=x),P=me(P,1),R=me(R,1)}return C=ae(k,V.j(C)),new ue(V,C)}for(V=T;0<=k.l(C);){for(R=Math.max(1,Math.floor(k.m()/C.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),L=g(R),x=L.j(C);B(x)||0<x.l(k);)R-=P,L=g(R),x=L.j(C);M(L)&&(L=w),V=V.add(L),k=ae(k,x)}return new ue(V,k)}n.A=function(k){return _e(this,k).h},n.and=function(k){for(var C=Math.max(this.g.length,k.g.length),R=[],P=0;P<C;P++)R[P]=this.i(P)&k.i(P);return new c(R,this.h&k.h)},n.or=function(k){for(var C=Math.max(this.g.length,k.g.length),R=[],P=0;P<C;P++)R[P]=this.i(P)|k.i(P);return new c(R,this.h|k.h)},n.xor=function(k){for(var C=Math.max(this.g.length,k.g.length),R=[],P=0;P<C;P++)R[P]=this.i(P)^k.i(P);return new c(R,this.h^k.h)};function ce(k){for(var C=k.g.length+1,R=[],P=0;P<C;P++)R[P]=k.i(P)<<1|k.i(P-1)>>>31;return new c(R,k.h)}function me(k,C){var R=C>>5;C%=32;for(var P=k.g.length-R,V=[],L=0;L<P;L++)V[L]=0<C?k.i(L+R)>>>C|k.i(L+R+1)<<32-C:k.i(L+R);return new c(V,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Bw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,Nr=c}).apply(typeof lb<"u"?lb:typeof self<"u"?self:typeof window<"u"?window:{});var pf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qw,Ku,Hw,Cf,zg,Gw,Qw,Yw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof pf=="object"&&pf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var z=h[A];if(!(z in v))break e;v=v[z]}h=h[h.length-1],A=v[h],_=_(A),_!=A&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,A=!1,z={next:function(){if(!A&&v<h.length){var Q=v++;return{value:_(Q,h[Q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,A),h.apply(_,z)}}return function(){return h.apply(_,arguments)}}function w(h,_,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,w.apply(null,arguments)}function D(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function M(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,z,Q){for(var oe=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)oe[$e-2]=arguments[$e];return _.prototype[z].apply(A,oe)}}function B(h){const _=h.length;if(0<_){const v=Array(_);for(let A=0;A<_;A++)v[A]=h[A];return v}return[]}function U(h,_){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(p(A)){const z=h.length||0,Q=A.length||0;h.length=z+Q;for(let oe=0;oe<Q;oe++)h[z+oe]=A[oe]}else h.push(A)}}class ae{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function re(h){return/^[\s\xa0]*$/.test(h)}function ue(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function _e(h){return _e[" "](h),h}_e[" "]=function(){};var ce=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function me(h,_,v){for(const A in h)_.call(v,h[A],A,h)}function k(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function C(h){const _={};for(const v in h)_[v]=h[v];return _}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,_){let v,A;for(let z=1;z<arguments.length;z++){A=arguments[z];for(v in A)h[v]=A[v];for(let Q=0;Q<R.length;Q++)v=R[Q],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function V(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function L(h){d.setTimeout(()=>{throw h},0)}function x(){var h=fe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class ye{constructor(){this.h=this.g=null}add(_,v){const A=Ke.get();A.set(_,v),this.h?this.h.next=A:this.g=A,this.h=A}}var Ke=new ae(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,te=!1,fe=new ye,N=()=>{const h=d.Promise.resolve(void 0);ne=()=>{h.then(X)}};var X=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(v){L(v)}var _=Ke;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}te=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var Ee=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h})();function Me(h,_){if(se.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ce){e:{try{_e(_.nodeName);var z=!0;break e}catch{}z=!1}z||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ce[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Me.aa.h.call(this)}}M(Me,se);var Ce={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),lt=0;function Zn(h,_,v,A,z){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!A,this.ha=z,this.key=++lt,this.da=this.fa=!1}function Ri(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function mi(h){this.src=h,this.g={},this.h=0}mi.prototype.add=function(h,_,v,A,z){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var oe=as(h,_,A,z);return-1<oe?(_=h[oe],v||(_.fa=!1)):(_=new Zn(_,this.src,Q,!!A,z),_.fa=v,h.push(_)),_};function rs(h,_){var v=_.type;if(v in h.g){var A=h.g[v],z=Array.prototype.indexOf.call(A,_,void 0),Q;(Q=0<=z)&&Array.prototype.splice.call(A,z,1),Q&&(Ri(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function as(h,_,v,A){for(var z=0;z<h.length;++z){var Q=h[z];if(!Q.da&&Q.listener==_&&Q.capture==!!v&&Q.ha==A)return z}return-1}var os="closure_lm_"+(1e6*Math.random()|0),Yr={};function eo(h,_,v,A,z){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)eo(h,_[Q],v,A,z);return null}return v=ze(v),h&&h[Lt]?h.K(_,v,g(A)?!!A.capture:!1,z):On(h,_,v,!1,A,z)}function On(h,_,v,A,z,Q){if(!_)throw Error("Invalid event type");var oe=g(z)?!!z.capture:!!z,$e=ge(h);if($e||(h[os]=$e=new mi(h)),v=$e.add(_,v,A,oe,Q),v.proxy)return v;if(A=Pl(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)Ee||(z=oe),z===void 0&&(z=!1),h.addEventListener(_.toString(),A,z);else if(h.attachEvent)h.attachEvent(pi(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Pl(){function h(v){return _.call(h.src,h.listener,v)}const _=Vl;return h}function Ii(h,_,v,A,z){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)Ii(h,_[Q],v,A,z);else A=g(A)?!!A.capture:!!A,v=ze(v),h&&h[Lt]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],v=as(Q,v,A,z),-1<v&&(Ri(Q[v]),Array.prototype.splice.call(Q,v,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=ge(h))&&(_=h.g[_.toString()],h=-1,_&&(h=as(_,v,A,z)),(v=-1<h?_[h]:null)&&Ni(v))}function Ni(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Lt])rs(_.i,h);else{var v=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(v,A,h.capture):_.detachEvent?_.detachEvent(pi(v),A):_.addListener&&_.removeListener&&_.removeListener(A),(v=ge(_))?(rs(v,h),v.h==0&&(v.src=null,_[os]=null)):Ri(h)}}}function pi(h){return h in Yr?Yr[h]:Yr[h]="on"+h}function Vl(h,_){if(h.da)h=!0;else{_=new Me(_,this);var v=h.listener,A=h.ha||h.src;h.fa&&Ni(h),h=v.call(A,_)}return h}function ge(h){return h=h[os],h instanceof mi?h:null}var Ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function ze(h){return typeof h=="function"?h:(h[Ie]||(h[Ie]=function(_){return h.handleEvent(_)}),h[Ie])}function Fe(){ie.call(this),this.i=new mi(this),this.M=this,this.F=null}M(Fe,ie),Fe.prototype[Lt]=!0,Fe.prototype.removeEventListener=function(h,_,v,A){Ii(this,h,_,v,A)};function Be(h,_){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new se(_,h);else if(_ instanceof se)_.target=_.target||h;else{var z=_;_=new se(A,h),P(_,z)}if(z=!0,v)for(var Q=v.length-1;0<=Q;Q--){var oe=_.g=v[Q];z=jt(oe,A,!0,_)&&z}if(oe=_.g=h,z=jt(oe,A,!0,_)&&z,z=jt(oe,A,!1,_)&&z,v)for(Q=0;Q<v.length;Q++)oe=_.g=v[Q],z=jt(oe,A,!1,_)&&z}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],A=0;A<v.length;A++)Ri(v[A]);delete h.g[_],h.h--}}this.F=null},Fe.prototype.K=function(h,_,v,A){return this.i.add(String(h),_,!1,v,A)},Fe.prototype.L=function(h,_,v,A){return this.i.add(String(h),_,!0,v,A)};function jt(h,_,v,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var z=!0,Q=0;Q<_.length;++Q){var oe=_[Q];if(oe&&!oe.da&&oe.capture==v){var $e=oe.listener,$t=oe.ha||oe.src;oe.fa&&rs(h.i,oe),z=$e.call($t,A)!==!1&&z}}return z&&!A.defaultPrevented}function Ct(h,_,v){if(typeof h=="function")v&&(h=w(h,v));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function hn(h){h.g=Ct(()=>{h.g=null,h.i&&(h.i=!1,hn(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Gc extends ie{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:hn(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kr(h){ie.call(this),this.h=h,this.g={}}M(Kr,ie);var $r=[];function Xr(h){me(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ni(_)},h),h.g={}}Kr.prototype.N=function(){Kr.aa.N.call(this),Xr(this)},Kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gi=d.JSON.stringify,to=d.JSON.parse,Wr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Ll(){}Ll.prototype.h=null;function jl(h){return h.h||(h.h=h.i())}function Ul(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){se.call(this,"d")}M(us,se);function zl(){se.call(this,"c")}M(zl,se);var Di={},Fl=null;function $s(){return Fl=Fl||new Fe}Di.La="serverreachability";function no(h){se.call(this,Di.La,h)}M(no,se);function Xs(h){const _=$s();Be(_,new no(_))}Di.STAT_EVENT="statevent";function Qc(h,_){se.call(this,Di.STAT_EVENT,h),this.stat=_}M(Qc,se);function bt(h){const _=$s();Be(_,new Qc(_,h))}Di.Ma="timingevent";function Kt(h,_){se.call(this,Di.Ma,h),this.size=_}M(Kt,se);function Ut(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Jn(){this.g=!0}Jn.prototype.xa=function(){this.g=!1};function Bl(h,_,v,A,z,Q){h.info(function(){if(h.g)if(Q)for(var oe="",$e=Q.split("&"),$t=0;$t<$e.length;$t++){var Xe=$e[$t].split("=");if(1<Xe.length){var tn=Xe[0];Xe=Xe[1];var Xt=tn.split("_");oe=2<=Xt.length&&Xt[1]=="type"?oe+(tn+"="+Xe+"&"):oe+(tn+"=redacted&")}}else oe=null;else oe=Q;return"XMLHTTP REQ ("+A+") [attempt "+z+"]: "+_+`
`+v+`
`+oe})}function rm(h,_,v,A,z,Q,oe){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+z+"]: "+_+`
`+v+`
`+Q+" "+oe})}function Ws(h,_,v,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Zr(h,v)+(A?" "+A:"")})}function Yc(h,_){h.info(function(){return"TIMEOUT: "+_})}Jn.prototype.info=function(){};function Zr(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var z=A[1];if(Array.isArray(z)&&!(1>z.length)){var Q=z[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var oe=1;oe<z.length;oe++)z[oe]=""}}}}return gi(v)}catch{return _}}var Zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ki;function Mi(){}M(Mi,Ll),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},ki=new Mi;function xn(h,_,v,A){this.j=h,this.i=_,this.l=v,this.R=A||1,this.U=new Kr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}var ql={},io={};function _i(h,_,v){h.L=1,h.v=ia(qn(_)),h.m=v,h.P=!0,hs(h,null)}function hs(h,_){h.F=Date.now(),Jr(h),h.A=qn(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),$l(v.i,"t",A),h.C=0,v=h.j.J,h.h=new Nt,h.g=uh(h.j,v?_:null,!h.m),0<h.O&&(h.M=new Gc(w(h.Y,h,h.g),h.O)),_=h.U,v=h.g,A=h.ca;var z="readystatechange";Array.isArray(z)||(z&&($r[0]=z.toString()),z=$r);for(var Q=0;Q<z.length;Q++){var oe=eo(v,z[Q],A||_.handleEvent,!1,_.h||_);if(!oe)break;_.g[oe.key]=oe}_=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Xs(),Bl(h.i,h.u,h.A,h.l,h.R,h.m)}xn.prototype.ca=function(h){h=h.target;const _=this.M;_&&ii(h)==3?_.j():this.Y(h)},xn.prototype.Y=function(h){try{if(h==this.g)e:{const Xt=ii(this.g);var _=this.g.Ba();const vs=this.g.Z();if(!(3>Xt)&&(Xt!=3||this.g&&(this.h.h||this.g.oa()||th(this.g)))){this.J||Xt!=4||_==7||(_==8||0>=vs?Xs(3):Xs(2)),Js(this);var v=this.g.Z();this.X=v;t:if(Kc(this)){var A=th(this.g);h="";var z=A.length,Q=ii(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),Oi(this);var oe="";break t}this.h.i=new d.TextDecoder}for(_=0;_<z;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(Q&&_==z-1)});A.length=0,this.h.g+=h,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,rm(this.i,this.u,this.A,this.l,this.R,Xt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,$t=this.g;if(($e=$t.g?$t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!re($e)){var Xe=$e;break t}}Xe=null}if(v=Xe)Ws(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ea(this,v);else{this.o=!1,this.s=3,bt(12),fn(this),Oi(this);break e}}if(this.P){v=!0;let dn;for(;!this.J&&this.C<oe.length;)if(dn=$c(this,oe),dn==io){Xt==4&&(this.s=4,bt(14),v=!1),Ws(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==ql){this.s=4,bt(15),Ws(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else Ws(this.i,this.l,dn,null),ea(this,dn);if(Kc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xt!=4||oe.length!=0||this.h.h||(this.s=1,bt(16),v=!1),this.o=this.o&&v,!v)Ws(this.i,this.l,oe,"[Invalid Chunked Response]"),fn(this),Oi(this);else if(0<oe.length&&!this.W){this.W=!0;var tn=this.j;tn.g==this&&tn.ba&&!tn.M&&(tn.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),ha(tn),tn.M=!0,bt(11))}}else Ws(this.i,this.l,oe,null),ea(this,oe);Xt==4&&fn(this),this.o&&!this.J&&(Xt==4?ah(this.j,this):(this.o=!1,Jr(this)))}else cm(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),fn(this),Oi(this)}}}catch{}finally{}};function Kc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function $c(h,_){var v=h.C,A=_.indexOf(`
`,v);return A==-1?io:(v=Number(_.substring(v,A)),isNaN(v)?ql:(A+=1,A+v>_.length?io:(_=_.slice(A,A+v),h.C=A+v,_)))}xn.prototype.cancel=function(){this.J=!0,fn(this)};function Jr(h){h.S=Date.now()+h.I,Xc(h,h.I)}function Xc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ut(w(h.ba,h),_)}function Js(h){h.B&&(d.clearTimeout(h.B),h.B=null)}xn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Yc(this.i,this.A),this.L!=2&&(Xs(),bt(17)),fn(this),this.s=2,Oi(this)):Xc(this,this.S-h)};function Oi(h){h.j.G==0||h.J||ah(h.j,h)}function fn(h){Js(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Xr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function ea(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Hl(v.h,h))){if(!h.K&&Hl(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var z=A;if(z[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)go(v),mo(v);else break e;eu(v),bt(18)}}else v.za=z[1],0<v.za-v.T&&37500>z[2]&&v.F&&v.v==0&&!v.C&&(v.C=Ut(w(v.Za,v),6e3));if(1>=ro(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else ys(v,11)}else if((h.K||v.g==h)&&go(v),!re(_))for(z=v.Da.g.parse(_),_=0;_<z.length;_++){let Xe=z[_];if(v.T=Xe[0],Xe=Xe[1],v.G==2)if(Xe[0]=="c"){v.K=Xe[1],v.ia=Xe[2];const tn=Xe[3];tn!=null&&(v.la=tn,v.j.info("VER="+v.la));const Xt=Xe[4];Xt!=null&&(v.Aa=Xt,v.j.info("SVER="+v.Aa));const vs=Xe[5];vs!=null&&typeof vs=="number"&&0<vs&&(A=1.5*vs,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const dn=h.g;if(dn){const Fi=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fi){var Q=A.h;Q.g||Fi.indexOf("spdy")==-1&&Fi.indexOf("quic")==-1&&Fi.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(ao(Q,Q.h),Q.h=null))}if(A.D){const nu=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;nu&&(A.ya=nu,ut(A.I,A.D,nu))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var oe=h;if(A.qa=lh(A,A.J?A.ia:null,A.W),oe.K){Rn(A.h,oe);var $e=oe,$t=A.L;$t&&($e.I=$t),$e.B&&(Js($e),Jr($e)),A.g=oe}else sh(A);0<v.i.length&&po(v)}else Xe[0]!="stop"&&Xe[0]!="close"||ys(v,7);else v.G==3&&(Xe[0]=="stop"||Xe[0]=="close"?Xe[0]=="stop"?ys(v,7):Zl(v):Xe[0]!="noop"&&v.l&&v.l.ta(Xe),v.v=0)}}Xs(4)}catch{}}var Wc=class{constructor(h,_){this.g=h,this.map=_}};function fs(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function so(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function ro(h){return h.h?1:h.g?h.g.size:0}function Hl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function ao(h,_){h.g?h.g.add(_):h.h=_}function Rn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}fs.prototype.cancel=function(){if(this.i=Gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Gl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return B(h.i)}function am(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,A=0;A<v;A++)_.push(h[A]);return _}_=[],v=0;for(A in h)_[v++]=h[A];return _}function oo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const A in h)_[v++]=A;return _}}}function Ql(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=oo(h),A=am(h),z=A.length,Q=0;Q<z;Q++)_.call(void 0,A[Q],v&&v[Q],h)}var ta=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function om(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),z=null;if(0<=A){var Q=h[v].substring(0,A);z=h[v].substring(A+1)}else Q=h[v];_(Q,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function zt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof zt){this.h=h.h,na(this,h.j),this.o=h.o,this.g=h.g,er(this,h.s),this.l=h.l;var _=h.i,v=new ms;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),ds(this,v),this.m=h.m}else h&&(_=String(h).match(ta))?(this.h=!1,na(this,_[1]||"",!0),this.o=ei(_[2]||""),this.g=ei(_[3]||"",!0),er(this,_[4]),this.l=ei(_[5]||"",!0),ds(this,_[6]||"",!0),this.m=ei(_[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}zt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(sa(_,Yl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(sa(_,Yl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(sa(v,v.charAt(0)=="/"?lm:Kl,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",sa(v,lo)),h.join("")};function qn(h){return new zt(h)}function na(h,_,v){h.j=v?ei(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function er(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function ds(h,_,v){_ instanceof ms?(h.i=_,Jc(h.i,h.h)):(v||(_=sa(_,um)),h.i=new ms(_,h.h))}function ut(h,_,v){h.i.set(_,v)}function ia(h){return ut(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function ei(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function sa(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Zc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Zc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Yl=/[#\/\?@]/g,Kl=/[#\?:]/g,lm=/[#\?]/g,um=/[#\?@]/g,lo=/#/g;function ms(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ti(h){h.g||(h.g=new Map,h.h=0,h.i&&om(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=ms.prototype,n.add=function(h,_){ti(this),this.i=null,h=Pi(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ps(h,_){ti(h),_=Pi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function gs(h,_){return ti(h),_=Pi(h,_),h.g.has(_)}n.forEach=function(h,_){ti(this),this.g.forEach(function(v,A){v.forEach(function(z){h.call(_,z,A,this)},this)},this)},n.na=function(){ti(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let A=0;A<_.length;A++){const z=h[A];for(let Q=0;Q<z.length;Q++)v.push(_[A])}return v},n.V=function(h){ti(this);let _=[];if(typeof h=="string")gs(this,h)&&(_=_.concat(this.g.get(Pi(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return ti(this),this.i=null,h=Pi(this,h),gs(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function $l(h,_,v){ps(h,_),0<v.length&&(h.i=null,h.g.set(Pi(h,_),B(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var A=_[v];const Q=encodeURIComponent(String(A)),oe=this.V(A);for(A=0;A<oe.length;A++){var z=Q;oe[A]!==""&&(z+="="+encodeURIComponent(String(oe[A]))),h.push(z)}}return this.i=h.join("&")};function Pi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Jc(h,_){_&&!h.j&&(ti(h),h.i=null,h.g.forEach(function(v,A){var z=A.toLowerCase();A!=z&&(ps(this,A),$l(this,z,v))},h)),h.j=_}function ra(h,_){const v=new Jn;if(d.Image){const A=new Image;A.onload=D(ni,v,"TestLoadImage: loaded",!0,_,A),A.onerror=D(ni,v,"TestLoadImage: error",!1,_,A),A.onabort=D(ni,v,"TestLoadImage: abort",!1,_,A),A.ontimeout=D(ni,v,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function yi(h,_){const v=new Jn,A=new AbortController,z=setTimeout(()=>{A.abort(),ni(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(Q=>{clearTimeout(z),Q.ok?ni(v,"TestPingServer: ok",!0,_):ni(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(z),ni(v,"TestPingServer: error",!1,_)})}function ni(h,_,v,A,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),A(v)}catch{}}function aa(){this.g=new Wr}function Vi(h,_,v){const A=v||"";try{Ql(h,function(z,Q){let oe=z;g(z)&&(oe=gi(z)),_.push(A+Q+"="+encodeURIComponent(oe))})}catch(z){throw _.push(A+"type="+encodeURIComponent("_badmap")),z}}function tr(h){this.l=h.Ub||null,this.j=h.eb||!1}M(tr,Ll),tr.prototype.g=function(){return new _s(this.l,this.j)},tr.prototype.i=(function(h){return function(){return h}})({});function _s(h,_){Fe.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(_s,Fe),n=_s.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,ji(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Li(this):ji(this),this.readyState==3&&Xl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Li(this))},n.Qa=function(h){this.g&&(this.response=h,Li(this))},n.ga=function(){this.g&&Li(this)};function Li(h){h.readyState=4,h.l=null,h.j=null,h.v=null,ji(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function ji(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Wl(h){let _="";return me(h,function(v,A){_+=A,_+=":",_+=v,_+=`\r
`}),_}function en(h,_,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Wl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):ut(h,_,v))}function it(h){Fe.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(it,Fe);var uo=/^https?$/i,oa=["POST","PUT"];n=it.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ki.g(),this.v=this.o?jl(this.o):jl(ki),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){eh(this,Q);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var z in A)v.set(z,A[z]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Q of A.keys())v.set(Q,A.get(Q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),z=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(oa,_,void 0))||A||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,oe]of v)this.g.setRequestHeader(Q,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{la(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){eh(this,Q)}};function eh(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,co(h),Ui(h)}function co(h){h.A||(h.A=!0,Be(h,"complete"),Be(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Be(this,"complete"),Be(this,"abort"),Ui(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ui(this,!0)),it.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ho(this):this.bb())},n.bb=function(){ho(this)};function ho(h){if(h.h&&typeof c<"u"&&(!h.v[1]||ii(h)!=4||h.Z()!=2)){if(h.u&&ii(h)==4)Ct(h.Ea,0,h);else if(Be(h,"readystatechange"),ii(h)==4){h.h=!1;try{const oe=h.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var A;if(A=oe===0){var z=String(h.D).match(ta)[1]||null;!z&&d.self&&d.self.location&&(z=d.self.location.protocol.slice(0,-1)),A=!uo.test(z?z.toLowerCase():"")}v=A}if(v)Be(h,"complete"),Be(h,"success");else{h.m=6;try{var Q=2<ii(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",co(h)}}finally{Ui(h)}}}}function Ui(h,_){if(h.g){la(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Be(h,"ready");try{v.onreadystatechange=A}catch{}}}function la(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ii(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ii(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),to(_)}};function th(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function cm(h){const _={};h=(h.g&&2<=ii(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(re(h[A]))continue;var v=V(h[A]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=_[z]||[];_[z]=Q,Q.push(v)}k(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ua(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function fo(h){this.Aa=0,this.i=[],this.j=new Jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ua("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ua("baseRetryDelayMs",5e3,h),this.cb=ua("retryDelaySeedMs",1e4,h),this.Wa=ua("forwardChannelMaxRetries",2,h),this.wa=ua("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new fs(h&&h.concurrentRequestLimit),this.Da=new aa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fo.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,A){bt(0),this.W=h,this.H=_||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=lh(this,null,this.W),po(this)};function Zl(h){if(nh(h),h.G==3){var _=h.U++,v=qn(h.I);if(ut(v,"SID",h.K),ut(v,"RID",_),ut(v,"TYPE","terminate"),ca(h,v),_=new xn(h,h.j,_),_.L=2,_.v=ia(qn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=uh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Jr(_)}oh(h)}function mo(h){h.g&&(ha(h),h.g.cancel(),h.g=null)}function nh(h){mo(h),h.u&&(d.clearTimeout(h.u),h.u=null),go(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function po(h){if(!so(h.h)&&!h.s){h.s=!0;var _=h.Ga;ne||N(),te||(ne(),te=!0),fe.add(_,h),h.B=0}}function hm(h,_){return ro(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ut(w(h.Ga,h,_),tu(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const z=new xn(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=C(Q),P(Q,this.S)):Q=this.S),this.m!==null||this.O||(z.H=Q,Q=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=ih(this,z,_),v=qn(this.I),ut(v,"RID",h),ut(v,"CVER",22),this.D&&ut(v,"X-HTTP-Session-Id",this.D),ca(this,v),Q&&(this.O?_="headers="+encodeURIComponent(String(Wl(Q)))+"&"+_:this.m&&en(v,this.m,Q)),ao(this.h,z),this.Ua&&ut(v,"TYPE","init"),this.P?(ut(v,"$req",_),ut(v,"SID","null"),z.T=!0,_i(z,v,null)):_i(z,v,_),this.G=2}}else this.G==3&&(h?Jl(this,h):this.i.length==0||so(this.h)||Jl(this))};function Jl(h,_){var v;_?v=_.l:v=h.U++;const A=qn(h.I);ut(A,"SID",h.K),ut(A,"RID",v),ut(A,"AID",h.T),ca(h,A),h.m&&h.o&&en(A,h.m,h.o),v=new xn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=ih(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),ao(h.h,v),_i(v,A,_)}function ca(h,_){h.H&&me(h.H,function(v,A){ut(_,A,v)}),h.l&&Ql({},function(v,A){ut(_,A,v)})}function ih(h,_,v){v=Math.min(h.i.length,v);var A=h.l?w(h.l.Na,h.l,h):null;e:{var z=h.i;let Q=-1;for(;;){const oe=["count="+v];Q==-1?0<v?(Q=z[0].g,oe.push("ofs="+Q)):Q=0:oe.push("ofs="+Q);let $e=!0;for(let $t=0;$t<v;$t++){let Xe=z[$t].g;const tn=z[$t].map;if(Xe-=Q,0>Xe)Q=Math.max(0,z[$t].g-100),$e=!1;else try{Vi(tn,oe,"req"+Xe+"_")}catch{A&&A(tn)}}if($e){A=oe.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,A}function sh(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ne||N(),te||(ne(),te=!0),fe.add(_,h),h.v=0}}function eu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ut(w(h.Fa,h),tu(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ut(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),mo(this),rh(this))};function ha(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function rh(h){h.g=new xn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=qn(h.qa);ut(_,"RID","rpc"),ut(_,"SID",h.K),ut(_,"AID",h.T),ut(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&ut(_,"TO",h.ja),ut(_,"TYPE","xmlhttp"),ca(h,_),h.m&&h.o&&en(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=ia(qn(_)),v.m=null,v.P=!0,hs(v,h)}n.Za=function(){this.C!=null&&(this.C=null,mo(this),eu(this),bt(19))};function go(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function ah(h,_){var v=null;if(h.g==_){go(h),ha(h),h.g=null;var A=2}else if(Hl(h.h,_))v=_.D,Rn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var z=h.B;A=$s(),Be(A,new Kt(A,v)),po(h)}else sh(h);else if(z=_.s,z==3||z==0&&0<_.X||!(A==1&&hm(h,_)||A==2&&eu(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),z){case 1:ys(h,5);break;case 4:ys(h,10);break;case 3:ys(h,6);break;default:ys(h,2)}}}function tu(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function ys(h,_){if(h.j.info("Error code "+_),_==2){var v=w(h.fb,h),A=h.Xa;const z=!A;A=new zt(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||na(A,"https"),ia(A),z?ra(A.toString(),v):yi(A.toString(),v)}else bt(2);h.G=0,h.l&&h.l.sa(_),oh(h),nh(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function oh(h){if(h.G=0,h.ka=[],h.l){const _=Gl(h.h);(_.length!=0||h.i.length!=0)&&(U(h.ka,_),U(h.ka,h.i),h.h.i.length=0,B(h.i),h.i.length=0),h.l.ra()}}function lh(h,_,v){var A=v instanceof zt?qn(v):new zt(v);if(A.g!="")_&&(A.g=_+"."+A.g),er(A,A.s);else{var z=d.location;A=z.protocol,_=_?_+"."+z.hostname:z.hostname,z=+z.port;var Q=new zt(null);A&&na(Q,A),_&&(Q.g=_),z&&er(Q,z),v&&(Q.l=v),A=Q}return v=h.D,_=h.ya,v&&_&&ut(A,v,_),ut(A,"VER",h.la),ca(h,A),A}function uh(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new it(new tr({eb:v})):new it(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}n=ch.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _o(){}_o.prototype.g=function(h,_){return new In(h,_)};function In(h,_){Fe.call(this),this.g=new fo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!re(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!re(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new zi(this)}M(In,Fe),In.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},In.prototype.close=function(){Zl(this.g)},In.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=gi(h),h=v);_.i.push(new Wc(_.Ya++,h)),_.G==3&&po(_)},In.prototype.N=function(){this.g.l=null,delete this.j,Zl(this.g),delete this.g,In.aa.N.call(this)};function hh(h){us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}M(hh,us);function fh(){zl.call(this),this.status=1}M(fh,zl);function zi(h){this.g=h}M(zi,ch),zi.prototype.ua=function(){Be(this.g,"a")},zi.prototype.ta=function(h){Be(this.g,new hh(h))},zi.prototype.sa=function(h){Be(this.g,new fh)},zi.prototype.ra=function(){Be(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,In.prototype.send=In.prototype.o,In.prototype.open=In.prototype.m,In.prototype.close=In.prototype.close,Yw=function(){return new _o},Qw=function(){return $s()},Gw=Di,zg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zs.NO_ERROR=0,Zs.TIMEOUT=8,Zs.HTTP_ERROR=6,Cf=Zs,cs.COMPLETE="complete",Hw=cs,Ul.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,Ku=Ul,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,qw=it}).apply(typeof pf<"u"?pf:typeof self<"u"?self:typeof window<"u"?window:{});const ub="@firebase/firestore",cb="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wn.UNAUTHENTICATED=new wn(null),wn.GOOGLE_CREDENTIALS=new wn("google-credentials-uid"),wn.FIRST_PARTY=new wn("first-party-uid"),wn.MOCK_USER=new wn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new bd("@firebase/firestore");function Yo(){return Ba.logLevel}function de(n,...e){if(Ba.logLevel<=Ge.DEBUG){const t=e.map(j_);Ba.debug(`Firestore (${Cl}): ${n}`,...t)}}function qs(n,...e){if(Ba.logLevel<=Ge.ERROR){const t=e.map(j_);Ba.error(`Firestore (${Cl}): ${n}`,...t)}}function ul(n,...e){if(Ba.logLevel<=Ge.WARN){const t=e.map(j_);Ba.warn(`Firestore (${Cl}): ${n}`,...t)}}function j_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ae(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Kw(n,s,t)}function Kw(n,e,t){let s=`FIRESTORE (${Cl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw qs(s),new Error(s)}function st(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Kw(e,a,s)}function ke(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Ys{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $w{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(wn.UNAUTHENTICATED)))}shutdown(){}}class nD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class iD{constructor(e){this.t=e,this.currentUser=wn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){st(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Us;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Us,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Us)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(st(typeof s.accessToken=="string",31837,{l:s}),new $w(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return st(e===null||typeof e=="string",2055,{h:e}),new wn(e)}}class sD{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=wn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rD{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new sD(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(wn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class hb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,hi(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){st(this.o===void 0,3512);const s=l=>{l.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,de("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new hb(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(st(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new hb(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class U_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=oD(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Qe(n,e){return n<e?-1:n>e?1:0}function Fg(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return pg(a)===pg(l)?Qe(a,l):pg(a)?1:-1}return Qe(n.length,e.length)}const lD=55296,uD=57343;function pg(n){const e=n.charCodeAt(0);return e>=lD&&e<=uD}function cl(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="__name__";class Yi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ae(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Yi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Qe(e.length,t.length)}static compareSegments(e,t){const s=Yi.isNumericId(e),a=Yi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Yi.extractNumericId(e).compare(Yi.extractNumericId(t)):Fg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nr.fromString(e.substring(4,e.length-2))}}class _t extends Yi{construct(e,t,s){return new _t(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new _t(t)}static emptyPath(){return new _t([])}}const cD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yn extends Yi{construct(e,t,s){return new yn(e,t,s)}static isValidIdentifier(e){return cD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fb}static keyField(){return new yn([fb])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new he($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new he($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new he($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new he($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yn(t)}static emptyPath(){return new yn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(_t.fromString(e))}static fromName(e){return new Te(_t.fromString(e).popFirst(5))}static empty(){return new Te(_t.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_t.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _t.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new _t(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(n,e,t){if(!t)throw new he($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hD(n,e,t,s){if(e===!0&&s===!0)throw new he($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function db(n){if(!Te.isDocumentKey(n))throw new he($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mb(n){if(Te.isDocumentKey(n))throw new he($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ww(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function xd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function Dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new he($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xd(n);throw new he($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Qt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Dc(n,e){if(!Ww(n))throw new he($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new he($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=-62135596800,gb=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*gb);return new Et(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<pb)throw new he($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gb}_compareTo(e){return this.seconds===e.seconds?Qe(this.nanoseconds,e.nanoseconds):Qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Dc(e,Et._jsonSchema))return new Et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Et._jsonSchemaVersion="firestore/timestamp/1.0",Et._jsonSchema={type:Qt("string",Et._jsonSchemaVersion),seconds:Qt("number"),nanoseconds:Qt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const dc=-1;function fD(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=De.fromTimestamp(s===1e9?new Et(t+1,0):new Et(t,s));return new Pr(a,Te.empty(),e)}function dD(n){return new Pr(n.readTime,n.key,dc)}class Pr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Pr(De.min(),Te.empty(),dc)}static max(){return new Pr(De.max(),Te.empty(),dc)}}function mD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(n.documentKey,e.documentKey),t!==0?t:Qe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function xl(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==pD)throw n;de("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.reject(t)}static resolve(e){return new ee(((t,s)=>{t(e)}))}static reject(e){return new ee(((t,s)=>{s(e)}))}static waitFor(e){return new ee(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=ee.resolve(!1);for(const s of e)t=t.next((a=>a?ee.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new ee(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((y=>{c[g]=y,++d,d===l&&s(c)}),(y=>a(y)))}}))}static doWhile(e,t){return new ee(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function _D(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Rl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Rd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Rd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=-1;function Id(n){return n==null}function Hf(n){return n===0&&1/n==-1/0}function yD(n){return typeof n=="number"&&Number.isInteger(n)&&!Hf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="";function vD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=_b(e)),e=ED(n.get(t),e);return _b(e)}function ED(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Zw:t+="";break;default:t+=l}}return t}function _b(n){return n+Zw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Jw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt=class Bg{constructor(e,t){this.comparator=e,this.root=t||Dr.EMPTY}insert(e,t){return new Bg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dr.BLACK,null,null))}remove(e){return new Bg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gf(this.root,e,this.comparator,!1)}getReverseIterator(){return new gf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gf(this.root,e,this.comparator,!0)}},gf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Dr=class Ms{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Ms.RED,this.left=a??Ms.EMPTY,this.right=l??Ms.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Ms(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ms.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Ms.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ms.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ms.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}};Dr.EMPTY=null,Dr.RED=!0,Dr.BLACK=!1;Dr.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Dr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.comparator=e,this.data=new Yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vb(this.data.getIterator())}getIteratorFrom(e){return new vb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Jt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Jt(this.comparator);return t.data=e,t}}class vb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.fields=e,e.sort(yn.comparator)}static empty(){return new Wn([])}unionWith(e){let t=new Jt(yn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return cl(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class eS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new eS("Invalid base64 string: "+l):l}})(e);return new vn(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new vn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vn.EMPTY_BYTE_STRING=new vn("");const TD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(n){if(st(!!n,39018),typeof n=="string"){let e=0;const t=TD.exec(n);if(st(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ot(n.seconds),nanos:Ot(n.nanos)}}function Ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lr(n){return typeof n=="string"?vn.fromBase64String(n):vn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="server_timestamp",nS="__type__",iS="__previous_value__",sS="__local_write_time__";function F_(n){return(n?.mapValue?.fields||{})[nS]?.stringValue===tS}function Nd(n){const e=n.mapValue.fields[iS];return F_(e)?Nd(e):e}function mc(n){const e=Vr(n.mapValue.fields[sS].timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Gf="(default)";class pc{constructor(e,t){this.projectId=e,this.database=t||Gf}static empty(){return new pc("","")}get isDefaultDatabase(){return this.database===Gf}isEqual(e){return e instanceof pc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="__type__",wD="__max__",_f={mapValue:{}},aS="__vector__",Qf="value";function jr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?F_(n)?4:AD(n)?9007199254740991:SD(n)?10:11:Ae(28295,{value:n})}function ns(n,e){if(n===e)return!0;const t=jr(n);if(t!==jr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return mc(n).isEqual(mc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Vr(a.timestampValue),d=Vr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return Lr(a.bytesValue).isEqual(Lr(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Ot(a.geoPointValue.latitude)===Ot(l.geoPointValue.latitude)&&Ot(a.geoPointValue.longitude)===Ot(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Ot(a.integerValue)===Ot(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Ot(a.doubleValue),d=Ot(l.doubleValue);return c===d?Hf(c)===Hf(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return cl(n.arrayValue.values||[],e.arrayValue.values||[],ns);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(yb(c)!==yb(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!ns(c[p],d[p])))return!1;return!0})(n,e);default:return Ae(52216,{left:n})}}function gc(n,e){return(n.values||[]).find((t=>ns(t,e)))!==void 0}function hl(n,e){if(n===e)return 0;const t=jr(n),s=jr(e);if(t!==s)return Qe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Qe(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=Ot(l.integerValue||l.doubleValue),p=Ot(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return Eb(n.timestampValue,e.timestampValue);case 4:return Eb(mc(n),mc(e));case 5:return Fg(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=Lr(l),p=Lr(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Qe(d[g],p[g]);if(y!==0)return y}return Qe(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=Qe(Ot(l.latitude),Ot(c.latitude));return d!==0?d:Qe(Ot(l.longitude),Ot(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Tb(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[Qf]?.arrayValue,y=p[Qf]?.arrayValue,T=Qe(g?.values?.length||0,y?.values?.length||0);return T!==0?T:Tb(g,y)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===_f.mapValue&&c===_f.mapValue)return 0;if(l===_f.mapValue)return 1;if(c===_f.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const w=Fg(p[T],y[T]);if(w!==0)return w;const D=hl(d[p[T]],g[y[T]]);if(D!==0)return D}return Qe(p.length,y.length)})(n.mapValue,e.mapValue);default:throw Ae(23264,{he:t})}}function Eb(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Qe(n,e);const t=Vr(n),s=Vr(e),a=Qe(t.seconds,s.seconds);return a!==0?a:Qe(t.nanos,s.nanos)}function Tb(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=hl(t[a],s[a]);if(l)return l}return Qe(t.length,s.length)}function fl(n){return qg(n)}function qg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Vr(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Lr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Te.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=qg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${qg(t.fields[c])}`;return a+"}"})(n.mapValue):Ae(61005,{value:n})}function xf(n){switch(jr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nd(n);return e?16+xf(e):16;case 5:return 2*n.stringValue.length;case 6:return Lr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+xf(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Hr(s.fields,((l,c)=>{a+=l.length+xf(c)})),a})(n.mapValue);default:throw Ae(13486,{value:n})}}function bb(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Hg(n){return!!n&&"integerValue"in n}function B_(n){return!!n&&"arrayValue"in n}function wb(n){return!!n&&"nullValue"in n}function Sb(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rf(n){return!!n&&"mapValue"in n}function SD(n){return(n?.mapValue?.fields||{})[rS]?.stringValue===aS}function ec(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Hr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ec(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ec(n.arrayValue.values[t]);return e}return{...n}}function AD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.value=e}static empty(){return new Un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Rf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ec(t)}setAll(e){let t=yn.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=ec(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Rf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ns(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Rf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Hr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new Un(ec(this.value))}}function oS(n){const e=[];return Hr(n.fields,((t,s)=>{const a=new yn([t]);if(Rf(s)){const l=oS(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Wn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Sn(e,0,De.min(),De.min(),De.min(),Un.empty(),0)}static newFoundDocument(e,t,s,a){return new Sn(e,1,t,De.min(),s,a,0)}static newNoDocument(e,t){return new Sn(e,2,t,De.min(),De.min(),Un.empty(),0)}static newUnknownDocument(e,t){return new Sn(e,3,t,De.min(),De.min(),Un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Sn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yf{constructor(e,t){this.position=e,this.inclusive=t}}function Ab(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=Te.comparator(Te.fromName(c.referenceValue),t.key):s=hl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Cb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ns(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _c{constructor(e,t="asc"){this.field=e,this.dir=t}}function CD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class lS{}class Gt extends lS{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new RD(e,t,s):t==="array-contains"?new DD(e,s):t==="in"?new kD(e,s):t==="not-in"?new MD(e,s):t==="array-contains-any"?new OD(e,s):new Gt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new ID(e,s):new ND(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(hl(t,this.value)):t!==null&&jr(this.value)===jr(t)&&this.matchesComparison(hl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xi extends lS{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new xi(e,t)}matches(e){return uS(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function uS(n){return n.op==="and"}function cS(n){return xD(n)&&uS(n)}function xD(n){for(const e of n.filters)if(e instanceof xi)return!1;return!0}function Gg(n){if(n instanceof Gt)return n.field.canonicalString()+n.op.toString()+fl(n.value);if(cS(n))return n.filters.map((e=>Gg(e))).join(",");{const e=n.filters.map((t=>Gg(t))).join(",");return`${n.op}(${e})`}}function hS(n,e){return n instanceof Gt?(function(s,a){return a instanceof Gt&&s.op===a.op&&s.field.isEqual(a.field)&&ns(s.value,a.value)})(n,e):n instanceof xi?(function(s,a){return a instanceof xi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&hS(c,a.filters[d])),!0):!1})(n,e):void Ae(19439)}function fS(n){return n instanceof Gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${fl(t.value)}`})(n):n instanceof xi?(function(t){return t.op.toString()+" {"+t.getFilters().map(fS).join(" ,")+"}"})(n):"Filter"}class RD extends Gt{constructor(e,t,s){super(e,t,s),this.key=Te.fromName(s.referenceValue)}matches(e){const t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}}class ID extends Gt{constructor(e,t){super(e,"in",t),this.keys=dS("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ND extends Gt{constructor(e,t){super(e,"not-in",t),this.keys=dS("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function dS(n,e){return(e.arrayValue?.values||[]).map((t=>Te.fromName(t.referenceValue)))}class DD extends Gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return B_(t)&&gc(t.arrayValue,this.value)}}class kD extends Gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gc(this.value.arrayValue,t)}}class MD extends Gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(gc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!gc(this.value.arrayValue,t)}}class OD extends Gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!B_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>gc(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function xb(n,e=null,t=[],s=[],a=null,l=null,c=null){return new PD(n,e,t,s,a,l,c)}function q_(n){const e=ke(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Gg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Id(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>fl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>fl(s))).join(",")),e.Te=t}return e.Te}function H_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cb(n.startAt,e.startAt)&&Cb(n.endAt,e.endAt)}function Qg(n){return Te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function VD(n,e,t,s,a,l,c,d){return new Il(n,e,t,s,a,l,c,d)}function Dd(n){return new Il(n)}function Rb(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mS(n){return n.collectionGroup!==null}function tc(n){const e=ke(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Jt(yn.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new _c(l,s))})),t.has(yn.keyField().canonicalString())||e.Ie.push(new _c(yn.keyField(),s))}return e.Ie}function Xi(n){const e=ke(n);return e.Ee||(e.Ee=LD(e,tc(n))),e.Ee}function LD(n,e){if(n.limitType==="F")return xb(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new _c(a.field,l)}));const t=n.endAt?new Yf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Yf(n.startAt.position,n.startAt.inclusive):null;return xb(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Yg(n,e){const t=n.filters.concat([e]);return new Il(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Kf(n,e,t){return new Il(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function kd(n,e){return H_(Xi(n),Xi(e))&&n.limitType===e.limitType}function pS(n){return`${q_(Xi(n))}|lt:${n.limitType}`}function Ko(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>fS(a))).join(", ")}]`),Id(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>fl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>fl(a))).join(",")),`Target(${s})`})(Xi(n))}; limitType=${n.limitType})`}function Md(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):Te.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of tc(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=Ab(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,tc(s),a)||s.endAt&&!(function(c,d,p){const g=Ab(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,tc(s),a))})(n,e)}function jD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gS(n){return(e,t)=>{let s=!1;for(const a of tc(n)){const l=UD(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function UD(n,e,t){const s=n.field.isKeyField()?Te.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?hl(p,g):Ae(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ae(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Hr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return Jw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=new Yt(Te.comparator);function Hs(){return zD}const _S=new Yt(Te.comparator);function $u(...n){let e=_S;for(const t of n)e=e.insert(t.key,t);return e}function yS(n){let e=_S;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Da(){return nc()}function vS(){return nc()}function nc(){return new $a((n=>n.toString()),((n,e)=>n.isEqual(e)))}const FD=new Yt(Te.comparator),BD=new Jt(Te.comparator);function Ye(...n){let e=BD;for(const t of n)e=e.add(t);return e}const qD=new Jt(Qe);function HD(){return qD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hf(e)?"-0":e}}function ES(n){return{integerValue:""+n}}function GD(n,e){return yD(e)?ES(e):G_(n,e)}/**
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
 */class Od{constructor(){this._=void 0}}function QD(n,e,t){return n instanceof yc?(function(a,l){const c={fields:{[nS]:{stringValue:tS},[sS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&F_(l)&&(l=Nd(l)),l&&(c.fields[iS]=l),{mapValue:c}})(t,e):n instanceof dl?bS(n,e):n instanceof ml?wS(n,e):(function(a,l){const c=TS(a,l),d=Ib(c)+Ib(a.Ae);return Hg(c)&&Hg(a.Ae)?ES(d):G_(a.serializer,d)})(n,e)}function YD(n,e,t){return n instanceof dl?bS(n,e):n instanceof ml?wS(n,e):t}function TS(n,e){return n instanceof $f?(function(s){return Hg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class yc extends Od{}class dl extends Od{constructor(e){super(),this.elements=e}}function bS(n,e){const t=SS(e);for(const s of n.elements)t.some((a=>ns(a,s)))||t.push(s);return{arrayValue:{values:t}}}class ml extends Od{constructor(e){super(),this.elements=e}}function wS(n,e){let t=SS(e);for(const s of n.elements)t=t.filter((a=>!ns(a,s)));return{arrayValue:{values:t}}}class $f extends Od{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ib(n){return Ot(n.integerValue||n.doubleValue)}function SS(n){return B_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t){this.field=e,this.transform=t}}function KD(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof dl&&a instanceof dl||s instanceof ml&&a instanceof ml?cl(s.elements,a.elements,ns):s instanceof $f&&a instanceof $f?ns(s.Ae,a.Ae):s instanceof yc&&a instanceof yc})(n.transform,e.transform)}class $D{constructor(e,t){this.version=e,this.transformResults=t}}class kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function If(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Pd{}function AS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Vd(n.key,kn.none()):new kc(n.key,n.data,kn.none());{const t=n.data,s=Un.empty();let a=new Jt(yn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Gr(n.key,s,new Wn(a.toArray()),kn.none())}}function XD(n,e,t){n instanceof kc?(function(a,l,c){const d=a.value.clone(),p=Db(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Gr?(function(a,l,c){if(!If(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=Db(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(CS(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function ic(n,e,t,s){return n instanceof kc?(function(l,c,d,p){if(!If(l.precondition,c))return d;const g=l.value.clone(),y=kb(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Gr?(function(l,c,d,p){if(!If(l.precondition,c))return d;const g=kb(l.fieldTransforms,p,c),y=c.data;return y.setAll(CS(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,s):(function(l,c,d){return If(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function WD(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=TS(s.transform,a||null);l!=null&&(t===null&&(t=Un.empty()),t.set(s.field,l))}return t||null}function Nb(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&cl(s,a,((l,c)=>KD(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class kc extends Pd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Gr extends Pd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function CS(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Db(n,e,t){const s=new Map;st(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,YD(c,d,t[a]))}return s}function kb(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,QD(l,c,e))}return s}class Vd extends Pd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZD extends Pd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&XD(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ic(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ic(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=vS();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=AS(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(De.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ye())}isEqual(e){return this.batchId===e.batchId&&cl(this.mutations,e.mutations,((t,s)=>Nb(t,s)))&&cl(this.baseMutations,e.baseMutations,((t,s)=>Nb(t,s)))}}class Y_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){st(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return FD})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new Y_(e,t,s,a)}}/**
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
 */var qt,Ze;function nk(n){switch(n){case $.OK:return Ae(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function xS(n){if(n===void 0)return qs("GRPC error has no .code"),$.UNKNOWN;switch(n){case qt.OK:return $.OK;case qt.CANCELLED:return $.CANCELLED;case qt.UNKNOWN:return $.UNKNOWN;case qt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case qt.INTERNAL:return $.INTERNAL;case qt.UNAVAILABLE:return $.UNAVAILABLE;case qt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case qt.NOT_FOUND:return $.NOT_FOUND;case qt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case qt.ABORTED:return $.ABORTED;case qt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case qt.DATA_LOSS:return $.DATA_LOSS;default:return Ae(39323,{code:n})}}(Ze=qt||(qt={}))[Ze.OK=0]="OK",Ze[Ze.CANCELLED=1]="CANCELLED",Ze[Ze.UNKNOWN=2]="UNKNOWN",Ze[Ze.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ze[Ze.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ze[Ze.NOT_FOUND=5]="NOT_FOUND",Ze[Ze.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ze[Ze.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ze[Ze.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ze[Ze.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ze[Ze.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ze[Ze.ABORTED=10]="ABORTED",Ze[Ze.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ze[Ze.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ze[Ze.INTERNAL=13]="INTERNAL",Ze[Ze.UNAVAILABLE=14]="UNAVAILABLE",Ze[Ze.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const sk=new Nr([4294967295,4294967295],0);function Mb(n){const e=ik().encode(n),t=new Bw;return t.update(e),new Uint8Array(t.digest())}function Ob(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Nr([t,s],0),new Nr([a,l],0)]}class K_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Xu(`Invalid padding: ${t}`);if(s<0)throw new Xu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Xu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Xu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Nr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(Nr.fromNumber(s)));return a.compare(sk)===1&&(a=new Nr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Mb(e),[s,a]=Ob(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new K_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=Mb(e),[s,a]=Ob(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Xu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Mc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ld(De.min(),a,new Yt(Qe),Hs(),Ye())}}class Mc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Mc(s,t,Ye(),Ye(),Ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class RS{constructor(e,t){this.targetId=e,this.Ce=t}}class IS{constructor(e,t,s=vn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class Pb{constructor(){this.ve=0,this.Fe=Vb(),this.Me=vn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ye(),t=Ye(),s=Ye();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ae(38017,{changeType:l})}})),new Mc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Vb()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,st(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class rk{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hs(),this.Je=yf(),this.He=yf(),this.Ye=new Yt(Qe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Qg(l))if(s===0){const c=new Te(l.path);this.et(t,c,Sn.newNoDocument(c,De.min()))}else st(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Lr(s).toUint8Array()}catch(p){if(p instanceof eS)return ul("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new K_(c,a,l)}catch(p){return ul(p instanceof Xu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Qg(d.target)){const p=new Te(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,Sn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=Ye();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Ld(e,t,this.Ye,this.je,s);return this.je=Hs(),this.Je=yf(),this.He=yf(),this.Ye=new Yt(Qe),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Pb,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Jt(Qe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Jt(Qe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Pb),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function yf(){return new Yt(Te.comparator)}function Vb(){return new Yt(Te.comparator)}const ak={asc:"ASCENDING",desc:"DESCENDING"},ok={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lk={and:"AND",or:"OR"};class uk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Kg(n,e){return n.useProto3Json||Id(e)?e:{value:e}}function Xf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ck(n,e){return Xf(n,e.toTimestamp())}function Wi(n){return st(!!n,49232),De.fromTimestamp((function(t){const s=Vr(t);return new Et(s.seconds,s.nanos)})(n))}function $_(n,e){return $g(n,e).canonicalString()}function $g(n,e){const t=(function(a){return new _t(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function DS(n){const e=_t.fromString(n);return st(VS(e),10190,{key:e.toString()}),e}function Xg(n,e){return $_(n.databaseId,e.path)}function gg(n,e){const t=DS(e);if(t.get(1)!==n.databaseId.projectId)throw new he($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new he($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Te(MS(t))}function kS(n,e){return $_(n.databaseId,e)}function hk(n){const e=DS(n);return e.length===4?_t.emptyPath():MS(e)}function Wg(n){return new _t(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function MS(n){return st(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Lb(n,e,t){return{name:Xg(n,e),fields:t.value.mapValue.fields}}function fk(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ae(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,y){return g.useProto3Json?(st(y===void 0||typeof y=="string",58123),vn.fromBase64String(y||"")):(st(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),vn.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const y=g.code===void 0?$.UNKNOWN:xS(g.code);return new he(y,g.message||"")})(c);t=new IS(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=gg(n,s.document.name),l=Wi(s.document.updateTime),c=s.document.createTime?Wi(s.document.createTime):De.min(),d=new Un({mapValue:{fields:s.document.fields}}),p=Sn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new Nf(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=gg(n,s.document),l=s.readTime?Wi(s.readTime):De.min(),c=Sn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Nf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=gg(n,s.document),l=s.removedTargetIds||[];t=new Nf([],l,a,null)}else{if(!("filter"in e))return Ae(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new tk(a,l),d=s.targetId;t=new RS(d,c)}}return t}function dk(n,e){let t;if(e instanceof kc)t={update:Lb(n,e.key,e.value)};else if(e instanceof Vd)t={delete:Xg(n,e.key)};else if(e instanceof Gr)t={update:Lb(n,e.key,e.data),updateMask:bk(e.fieldMask)};else{if(!(e instanceof ZD))return Ae(16599,{Vt:e.type});t={verify:Xg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof yc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof dl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof ml)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof $f)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Ae(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:ck(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ae(27497)})(n,e.precondition)),t}function mk(n,e){return n&&n.length>0?(st(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?Wi(a.updateTime):Wi(l);return c.isEqual(De.min())&&(c=Wi(l)),new $D(c,a.transformResults||[])})(t,e)))):[]}function pk(n,e){return{documents:[kS(n,e.path)]}}function gk(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=kS(n,a);const l=(function(g){if(g.length!==0)return PS(xi.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((y=>(function(w){return{field:$o(w.field),direction:vk(w.dir)}})(y)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Kg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function _k(n){let e=hk(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){st(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(T){const w=OS(T);return w instanceof xi&&cS(w)?w.getFilters():[w]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((w=>(function(M){return new _c(Xo(M.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(w)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let w;return w=typeof T=="object"?T.value:T,Id(w)?null:w})(t.limit));let p=null;t.startAt&&(p=(function(T){const w=!!T.before,D=T.values||[];return new Yf(D,w)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const w=!T.before,D=T.values||[];return new Yf(D,w)})(t.endAt)),VD(e,a,c,l,d,"F",p,g)}function yk(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function OS(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Xo(t.unaryFilter.field);return Gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Xo(t.unaryFilter.field);return Gt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Xo(t.unaryFilter.field);return Gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Xo(t.unaryFilter.field);return Gt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Gt.create(Xo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return xi.create(t.compositeFilter.filters.map((s=>OS(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(t.compositeFilter.op))})(n):Ae(30097,{filter:n})}function vk(n){return ak[n]}function Ek(n){return ok[n]}function Tk(n){return lk[n]}function $o(n){return{fieldPath:n.canonicalString()}}function Xo(n){return yn.fromServerFormat(n.fieldPath)}function PS(n){return n instanceof Gt?(function(t){if(t.op==="=="){if(Sb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NAN"}};if(wb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NAN"}};if(wb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$o(t.field),op:Ek(t.op),value:t.value}}})(n):n instanceof xi?(function(t){const s=t.getFilters().map((a=>PS(a)));return s.length===1?s[0]:{compositeFilter:{op:Tk(t.op),filters:s}}})(n):Ae(54877,{filter:n})}function bk(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function VS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t,s,a,l=De.min(),c=De.min(),d=vn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.yt=e}}function Sk(n){const e=_k({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Kf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.Cn=new Ck}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(Pr.min())}updateCollectionGroup(e,t,s){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class Ck{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Jt(_t.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Jt(_t.comparator)).toArray()}}/**
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
 */const jb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},LS=41943040;class jn{static withCacheSize(e){return new jn(e,jn.DEFAULT_COLLECTION_PERCENTILE,jn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn.DEFAULT_COLLECTION_PERCENTILE=10,jn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jn.DEFAULT=new jn(LS,jn.DEFAULT_COLLECTION_PERCENTILE,jn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jn.DISABLED=new jn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new pl(0)}static cr(){return new pl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="LruGarbageCollector",xk=1048576;function zb([n,e],[t,s]){const a=Qe(n,t);return a===0?Qe(e,s):a}class Rk{constructor(e){this.Ir=e,this.buffer=new Jt(zb),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();zb(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ik{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){de(Ub,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Rl(t)?de(Ub,"Ignoring IndexedDB error during garbage collection: ",t):await xl(t)}await this.Vr(3e5)}))}}class Nk{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(Rd.ce);const s=new Rk(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(jb)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jb):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),Yo()<=Ge.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function Dk(n,e){return new Nk(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.changes=new $a((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Sn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ee.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ok{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&ic(s.mutation,a,Wn.empty(),Et.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ye()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ye()){const a=Da();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=$u();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=Da();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ye())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=Hs();const c=nc(),d=(function(){return nc()})();return t.forEach(((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Gr)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),ic(y.mutation,g,y.mutation.getFieldMask(),Et.now())):c.set(g.key,Wn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,y)=>c.set(g,y))),t.forEach(((g,y)=>d.set(g,new Mk(y,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=nc();let a=new Yt(((c,d)=>c-d)),l=Ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||Wn.empty();y=d.applyToLocalView(g,y),s.set(p,y);const T=(a.get(d.batchId)||Ye()).add(p);a=a.insert(d.batchId,T)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,T=vS();y.forEach((w=>{if(!l.has(w)){const D=AS(t.get(w),s.get(w));D!==null&&T.set(w,D),l=l.add(w)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return ee.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return Te.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):mS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ee.resolve(Da());let d=dc,p=l;return c.next((g=>ee.forEach(g,((y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?ee.resolve():this.remoteDocumentCache.getEntry(e,y).next((w=>{p=p.insert(y,w)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Ye()))).next((y=>({batchId:d,changes:yS(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next((s=>{let a=$u();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=$u();return this.indexManager.getCollectionParents(e,l).next((d=>ee.forEach(d,(p=>{const g=(function(T,w){return new Il(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((y=>{y.forEach(((T,w)=>{c=c.insert(T,w)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,Sn.newInvalidDocument(y)))}));let d=$u();return c.forEach(((p,g)=>{const y=l.get(p);y!==void 0&&ic(y.mutation,g,Wn.empty(),Et.now()),Md(t,g)&&(d=d.insert(p,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ee.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Wi(a.createTime)}})(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:Sk(a.bundledQuery),readTime:Wi(a.readTime)}})(t)),ee.resolve()}}/**
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
 */class Vk{constructor(){this.overlays=new Yt(Te.comparator),this.qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Da();return ee.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),ee.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,t,s){const a=Da(),l=t.length+1,c=new Te(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return ee.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Yt(((g,y)=>g-y));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=Da(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=Da(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,y)=>d.set(g,y))),!(d.size()>=a)););return ee.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new ek(t,s));let l=this.qr.get(t);l===void 0&&(l=Ye(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class Lk{constructor(){this.sessionToken=vn.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.Qr=new Jt(on.$r),this.Ur=new Jt(on.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new on(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new on(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new Te(new _t([])),s=new on(t,e),a=new on(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Te(new _t([])),s=new on(t,e),a=new on(t,e+1);let l=Ye();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new on(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class on{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Te.comparator(e.key,t.key)||Qe(e.Yr,t.Yr)}static Kr(e,t){return Qe(e.Yr,t.Yr)||Te.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Jt(on.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new JD(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new on(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ee.resolve(c)}lookupMutationBatch(e,t){return ee.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return ee.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?z_:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new on(t,0),a=new on(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),ee.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Jt(Qe);return t.forEach((a=>{const l=new on(a,0),c=new on(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;Te.isDocumentKey(l)||(l=l.child(""));const c=new on(new Te(l),0);let d=new Jt(Qe);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),ee.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){st(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(t.mutations,(a=>{const l=new on(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new on(t,0),a=this.Zr.firstAfterOrEqual(s);return ee.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.ri=e,this.docs=(function(){return new Yt(Te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ee.resolve(s?s.document.mutableCopy():Sn.newInvalidDocument(t))}getEntries(e,t){let s=Hs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():Sn.newInvalidDocument(a))})),ee.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Hs();const c=t.path,d=new Te(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||mD(dD(y),s)<=0||(a.has(y.key)||Md(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return ee.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ae(9500)}ii(e,t){return ee.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new zk(this)}getSize(e){return ee.resolve(this.size)}}class zk extends kk{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),ee.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.persistence=e,this.si=new $a((t=>q_(t)),H_),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.oi=0,this._i=new X_,this.targetCount=0,this.ai=pl.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),ee.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new pl(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Pr(t),ee.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),ee.waitFor(l).next((()=>a))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return ee.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),ee.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),ee.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return ee.resolve(s)}containsKey(e,t){return ee.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,t){this.ui={},this.overlays={},this.ci=new Rd(0),this.li=!1,this.li=!0,this.hi=new Lk,this.referenceDelegate=e(this),this.Pi=new Fk(this),this.indexManager=new Ak,this.remoteDocumentCache=(function(a){return new Uk(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new wk(t),this.Ii=new Pk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new jk(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){de("MemoryPersistence","Starting transaction:",e);const a=new Bk(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return ee.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class Bk extends gD{constructor(e){super(),this.currentSequenceNumber=e}}class W_{constructor(e){this.persistence=e,this.Ri=new X_,this.Vi=null}static mi(e){return new W_(e)}get fi(){if(this.Vi)return this.Vi;throw Ae(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,(s=>{const a=Te.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,De.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return ee.or([()=>ee.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Wf{constructor(e,t){this.persistence=e,this.pi=new $a((s=>vD(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=Dk(this,t)}static mi(e,t){return new Wf(e,t)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return ee.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?ee.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,De.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xf(e.data.value)),t}br(e,t,s){return ee.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return ee.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Ye(),a=Ye();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Z_(e,t.fromCache,s,a)}}/**
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
 */class Hk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return DR()?8:_D(An())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new qk;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(Yo()<=Ge.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",Ko(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):(Yo()<=Ge.DEBUG&&de("QueryEngine","Query:",Ko(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Yo()<=Ge.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",Ko(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xi(t))):ee.resolve())}ys(e,t){if(Rb(t))return ee.resolve(null);let s=Xi(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Kf(t,null,"F"),s=Xi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=Ye(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,Kf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return Rb(t)||a.isEqual(De.min())?ee.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?ee.resolve(null):(Yo()<=Ge.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Ko(t)),this.vs(e,c,t,fD(a,dc)).next((d=>d)))}))}Ds(e,t){let s=new Jt(gS(e));return t.forEach(((a,l)=>{Md(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return Yo()<=Ge.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",Ko(t)),this.ps.getDocumentsMatchingQuery(e,t,Pr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="LocalStore",Gk=3e8;class Qk{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Yt(Qe),this.xs=new $a((l=>q_(l)),H_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ok(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Yk(n,e,t,s){return new Qk(n,e,t,s)}async function US(n,e){const t=ke(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=Ye();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function Kk(n,e){const t=ke(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,y){const T=g.batch,w=T.keys();let D=ee.resolve();return w.forEach((M=>{D=D.next((()=>y.getEntry(p,M))).next((B=>{const U=g.docVersions.get(M);st(U!==null,48541),B.version.compareTo(U)<0&&(T.applyToRemoteDocument(B,g),B.isValidDocument()&&(B.setReadTime(g.commitVersion),y.addEntry(B)))}))})),D.next((()=>d.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=Ye();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function zS(n){const e=ke(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function $k(n,e){const t=ke(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((y,T)=>{const w=a.get(T);if(!w)return;d.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,T))));let D=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?D=D.withResumeToken(vn.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):y.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(y.resumeToken,s)),a=a.insert(T,D),(function(B,U,ae){return B.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=Gk?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0})(w,D,y)&&d.push(t.Pi.updateTargetData(l,D))}));let p=Hs(),g=Ye();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),d.push(Xk(l,c,e.documentUpdates).next((y=>{p=y.ks,g=y.qs}))),!s.isEqual(De.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(y)}return ee.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function Xk(n,e,t){let s=Ye(),a=Ye();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Hs();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(De.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):de(J_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function Wk(n,e){const t=ke(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=z_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Zk(n,e){const t=ke(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,ee.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new xr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Zg(n,e,t){const s=ke(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Rl(c))throw c;de(J_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function Fb(n,e,t){const s=ke(n);let a=De.min(),l=Ye();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,y){const T=ke(p),w=T.xs.get(y);return w!==void 0?ee.resolve(T.Ms.get(w)):T.Pi.getTargetData(g,y)})(s,c,Xi(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:De.min(),t?l:Ye()))).next((d=>(Jk(s,jD(e),d),{documents:d,Qs:l})))))}function Jk(n,e,t){let s=n.Os.get(e)||De.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class Bb{constructor(){this.activeTargetIds=HD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eM{constructor(){this.Mo=new Bb,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Bb,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qb="ConnectivityMonitor";class Hb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){de(qb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){de(qb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vf=null;function Jg(){return vf===null?vf=(function(){return 268435456+Math.round(2147483648*Math.random())})():vf++,"0x"+vf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="RestConnection",nM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Gf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=Jg(),d=this.zo(e,t.toUriEncodedString());de(_g,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),y=qr(g);return this.Jo(e,d,p,s,y).then((T=>(de(_g,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw ul(_g,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Cl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=nM[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const bn="WebChannelConnection";class rM extends iM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Jg();return new Promise(((d,p)=>{const g=new qw;g.setWithCredentials(!0),g.listenOnce(Hw.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Cf.NO_ERROR:const T=g.getResponseJson();de(bn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case Cf.TIMEOUT:de(bn,`RPC '${e}' ${c} timed out`),p(new he($.DEADLINE_EXCEEDED,"Request time out"));break;case Cf.HTTP_ERROR:const w=g.getStatus();if(de(bn,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const M=D?.error;if(M&&M.status&&M.message){const B=(function(ae){const re=ae.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(re)>=0?re:$.UNKNOWN})(M.status);p(new he(B,M.message))}else p(new he($.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new he($.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{de(bn,`RPC '${e}' ${c} completed.`)}}));const y=JSON.stringify(a);de(bn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)}))}T_(e,t,s){const a=Jg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Yw(),d=Qw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");de(bn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);this.I_(T);let w=!1,D=!1;const M=new sM({Yo:U=>{D?de(bn,`Not sending because RPC '${e}' stream ${a} is closed:`,U):(w||(de(bn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),w=!0),de(bn,`RPC '${e}' stream ${a} sending:`,U),T.send(U))},Zo:()=>T.close()}),B=(U,ae,re)=>{U.listen(ae,(ue=>{try{re(ue)}catch(_e){setTimeout((()=>{throw _e}),0)}}))};return B(T,Ku.EventType.OPEN,(()=>{D||(de(bn,`RPC '${e}' stream ${a} transport opened.`),M.o_())})),B(T,Ku.EventType.CLOSE,(()=>{D||(D=!0,de(bn,`RPC '${e}' stream ${a} transport closed`),M.a_(),this.E_(T))})),B(T,Ku.EventType.ERROR,(U=>{D||(D=!0,ul(bn,`RPC '${e}' stream ${a} transport errored. Name:`,U.name,"Message:",U.message),M.a_(new he($.UNAVAILABLE,"The operation could not be completed")))})),B(T,Ku.EventType.MESSAGE,(U=>{if(!D){const ae=U.data[0];st(!!ae,16349);const re=ae,ue=re?.error||re[0]?.error;if(ue){de(bn,`RPC '${e}' stream ${a} received error:`,ue);const _e=ue.status;let ce=(function(C){const R=qt[C];if(R!==void 0)return xS(R)})(_e),me=ue.message;ce===void 0&&(ce=$.INTERNAL,me="Unknown error status: "+_e+" with message "+ue.message),D=!0,M.a_(new he(ce,me)),T.close()}else de(bn,`RPC '${e}' stream ${a} received:`,ae),M.u_(ae)}})),B(d,Gw.STAT_EVENT,(U=>{U.stat===zg.PROXY?de(bn,`RPC '${e}' stream ${a} detected buffering proxy`):U.stat===zg.NOPROXY&&de(bn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{M.__()}),0),M}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function yg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n){return new uk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&de("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="PersistentStream";class BS{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new FS(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(qs(t.toString()),qs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new he($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return de(Gb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(de(Gb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class aM extends BS{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=fk(this.serializer,e),s=(function(l){if(!("targetChange"in l))return De.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?De.min():c.readTime?Wi(c.readTime):De.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Wg(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=Qg(p)?{documents:pk(l,p)}:{query:gk(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=NS(l,c.resumeToken);const g=Kg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(De.min())>0){d.readTime=Xf(l,c.snapshotVersion.toTimestamp());const g=Kg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=yk(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Wg(this.serializer),t.removeTarget=e,this.q_(t)}}class oM extends BS{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return st(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,st(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){st(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=mk(e.writeResults,e.commitTime),s=Wi(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Wg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>dk(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{}class uM extends lM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new he($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,$g(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new he($.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,$g(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new he($.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class cM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qs(t),this.aa=!1):de("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="RemoteStore";class hM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{Xa(this)&&(de(qa,"Restarting streams for network reachability change."),await(async function(p){const g=ke(p);g.Ea.add(4),await Oc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Ud(g)})(this))}))})),this.Ra=new cM(s,a)}}async function Ud(n){if(Xa(n))for(const e of n.da)await e(!0)}async function Oc(n){for(const e of n.da)await e(!1)}function qS(n,e){const t=ke(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),iy(t)?ny(t):Nl(t).O_()&&ty(t,e))}function ey(n,e){const t=ke(n),s=Nl(t);t.Ia.delete(e),s.O_()&&HS(t,e),t.Ia.size===0&&(s.O_()?s.L_():Xa(t)&&t.Ra.set("Unknown"))}function ty(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(De.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Nl(n).Y_(e)}function HS(n,e){n.Va.Ue(e),Nl(n).Z_(e)}function ny(n){n.Va=new rk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Nl(n).start(),n.Ra.ua()}function iy(n){return Xa(n)&&!Nl(n).x_()&&n.Ia.size>0}function Xa(n){return ke(n).Ea.size===0}function GS(n){n.Va=void 0}async function fM(n){n.Ra.set("Online")}async function dM(n){n.Ia.forEach(((e,t)=>{ty(n,e)}))}async function mM(n,e){GS(n),iy(n)?(n.Ra.ha(e),ny(n)):n.Ra.set("Unknown")}async function pM(n,e,t){if(n.Ra.set("Online"),e instanceof IS&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){de(qa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Zf(n,s)}else if(e instanceof Nf?n.Va.Ze(e):e instanceof RS?n.Va.st(e):n.Va.tt(e),!t.isEqual(De.min()))try{const s=await zS(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Ia.get(g);y&&l.Ia.set(g,y.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const y=l.Ia.get(p);if(!y)return;l.Ia.set(p,y.withResumeToken(vn.EMPTY_BYTE_STRING,y.snapshotVersion)),HS(l,p);const T=new xr(y.target,p,g,y.sequenceNumber);ty(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){de(qa,"Failed to raise snapshot:",s),await Zf(n,s)}}async function Zf(n,e,t){if(!Rl(e))throw e;n.Ea.add(1),await Oc(n),n.Ra.set("Offline"),t||(t=()=>zS(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{de(qa,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ud(n)}))}function QS(n,e){return e().catch((t=>Zf(n,t,e)))}async function zd(n){const e=ke(n),t=Ur(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:z_;for(;gM(e);)try{const a=await Wk(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,_M(e,a)}catch(a){await Zf(e,a)}YS(e)&&KS(e)}function gM(n){return Xa(n)&&n.Ta.length<10}function _M(n,e){n.Ta.push(e);const t=Ur(n);t.O_()&&t.X_&&t.ea(e.mutations)}function YS(n){return Xa(n)&&!Ur(n).x_()&&n.Ta.length>0}function KS(n){Ur(n).start()}async function yM(n){Ur(n).ra()}async function vM(n){const e=Ur(n);for(const t of n.Ta)e.ea(t.mutations)}async function EM(n,e,t){const s=n.Ta.shift(),a=Y_.from(s,e,t);await QS(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await zd(n)}async function TM(n,e){e&&Ur(n).X_&&await(async function(s,a){if((function(c){return nk(c)&&c!==$.ABORTED})(a.code)){const l=s.Ta.shift();Ur(s).B_(),await QS(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await zd(s)}})(n,e),YS(n)&&KS(n)}async function Qb(n,e){const t=ke(n);t.asyncQueue.verifyOperationInProgress(),de(qa,"RemoteStore received new credentials");const s=Xa(t);t.Ea.add(3),await Oc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ud(t)}async function bM(n,e){const t=ke(n);e?(t.Ea.delete(2),await Ud(t)):e||(t.Ea.add(2),await Oc(t),t.Ra.set("Unknown"))}function Nl(n){return n.ma||(n.ma=(function(t,s,a){const l=ke(t);return l.sa(),new aM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:fM.bind(null,n),t_:dM.bind(null,n),r_:mM.bind(null,n),H_:pM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),iy(n)?ny(n):n.Ra.set("Unknown")):(await n.ma.stop(),GS(n))}))),n.ma}function Ur(n){return n.fa||(n.fa=(function(t,s,a){const l=ke(t);return l.sa(),new oM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:yM.bind(null,n),r_:TM.bind(null,n),ta:vM.bind(null,n),na:EM.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await zd(n)):(await n.fa.stop(),n.Ta.length>0&&(de(qa,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new sy(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ry(n,e){if(qs("AsyncQueue",`${e}: ${n}`),Rl(n))return new he($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{static emptySet(e){return new nl(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Te.comparator(t.key,s.key):(t,s)=>Te.comparator(t.key,s.key),this.keyedMap=$u(),this.sortedSet=new Yt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Yb{constructor(){this.ga=new Yt(Te.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ae(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class gl{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new gl(e,t,nl.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class SM{constructor(){this.queries=Kb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=ke(t),l=a.queries;a.queries=Kb(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new he($.ABORTED,"Firestore shutting down"))}}function Kb(){return new $a((n=>pS(n)),kd)}async function ay(n,e){const t=ke(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new wM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=ry(c,`Initialization of query '${Ko(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&ly(t)}async function oy(n,e){const t=ke(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function AM(n,e){const t=ke(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&ly(t)}function CM(n,e,t){const s=ke(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function ly(n){n.Ca.forEach((e=>{e.next()}))}var e_,$b;($b=e_||(e_={})).Ma="default",$b.Cache="cache";class uy{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new gl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=gl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==e_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.key=e}}class XS{constructor(e){this.key=e}}class xM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ye(),this.mutatedKeys=Ye(),this.eu=gS(e),this.tu=new nl(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Yb,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,T)=>{const w=a.get(y),D=Md(this.query,T)?T:null,M=!!w&&this.mutatedKeys.has(w.key),B=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let U=!1;w&&D?w.data.isEqual(D.data)?M!==B&&(s.track({type:3,doc:D}),U=!0):this.su(w,D)||(s.track({type:2,doc:D}),U=!0,(p&&this.eu(D,p)>0||g&&this.eu(D,g)<0)&&(d=!0)):!w&&D?(s.track({type:0,doc:D}),U=!0):w&&!D&&(s.track({type:1,doc:w}),U=!0,(p||g)&&(d=!0)),U&&(D?(c=c.add(D),l=B?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((y,T)=>(function(D,M){const B=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{Rt:U})}};return B(D)-B(M)})(y.type,T.type)||this.eu(y.doc,T.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new gl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Yb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ye(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new XS(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new $S(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ye();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return gl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const cy="SyncEngine";class RM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class IM{constructor(e){this.key=e,this.hu=!1}}class NM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new $a((d=>pS(d)),kd),this.Iu=new Map,this.Eu=new Set,this.du=new Yt(Te.comparator),this.Au=new Map,this.Ru=new X_,this.Vu={},this.mu=new Map,this.fu=pl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function DM(n,e,t=!0){const s=nA(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await WS(s,e,t,!0),a}async function kM(n,e){const t=nA(n);await WS(t,e,!0,!1)}async function WS(n,e,t,s){const a=await Zk(n.localStore,Xi(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await MM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&qS(n.remoteStore,a),d}async function MM(n,e,t,s,a){n.pu=(T,w,D)=>(async function(B,U,ae,re){let ue=U.view.ru(ae);ue.Cs&&(ue=await Fb(B.localStore,U.query,!1).then((({documents:k})=>U.view.ru(k,ue))));const _e=re&&re.targetChanges.get(U.targetId),ce=re&&re.targetMismatches.get(U.targetId)!=null,me=U.view.applyChanges(ue,B.isPrimaryClient,_e,ce);return Wb(B,U.targetId,me.au),me.snapshot})(n,T,w,D);const l=await Fb(n.localStore,e,!0),c=new xM(e,l.Qs),d=c.ru(l.documents),p=Mc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);Wb(n,t,g.au);const y=new RM(e,t,c);return n.Tu.set(e,y),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function OM(n,e,t){const s=ke(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!kd(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Zg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&ey(s.remoteStore,a.targetId),t_(s,a.targetId)})).catch(xl)):(t_(s,a.targetId),await Zg(s.localStore,a.targetId,!0))}async function PM(n,e){const t=ke(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ey(t.remoteStore,s.targetId))}async function VM(n,e,t){const s=qM(n);try{const a=await(function(c,d){const p=ke(c),g=Et.now(),y=d.reduce(((D,M)=>D.add(M.key)),Ye());let T,w;return p.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let M=Hs(),B=Ye();return p.Ns.getEntries(D,y).next((U=>{M=U,M.forEach(((ae,re)=>{re.isValidDocument()||(B=B.add(ae))}))})).next((()=>p.localDocuments.getOverlayedDocuments(D,M))).next((U=>{T=U;const ae=[];for(const re of d){const ue=WD(re,T.get(re.key).overlayedDocument);ue!=null&&ae.push(new Gr(re.key,ue,oS(ue.value.mapValue),kn.exists(!0)))}return p.mutationQueue.addMutationBatch(D,g,ae,d)})).next((U=>{w=U;const ae=U.applyToLocalDocumentSet(T,B);return p.documentOverlayCache.saveOverlays(D,U.batchId,ae)}))})).then((()=>({batchId:w.batchId,changes:yS(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Yt(Qe)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await Pc(s,a.changes),await zd(s.remoteStore)}catch(a){const l=ry(a,"Failed to persist write");t.reject(l)}}async function ZS(n,e){const t=ke(n);try{const s=await $k(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(st(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?st(c.hu,14607):a.removedDocuments.size>0&&(st(c.hu,42227),c.hu=!1))})),await Pc(t,s,e)}catch(s){await xl(s)}}function Xb(n,e,t){const s=ke(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=ke(c);p.onlineState=d;let g=!1;p.queries.forEach(((y,T)=>{for(const w of T.Sa)w.va(d)&&(g=!0)})),g&&ly(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function LM(n,e,t){const s=ke(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new Yt(Te.comparator);c=c.insert(l,Sn.newNoDocument(l,De.min()));const d=Ye().add(l),p=new Ld(De.min(),new Map,new Yt(Qe),c,d);await ZS(s,p),s.du=s.du.remove(l),s.Au.delete(e),hy(s)}else await Zg(s.localStore,e,!1).then((()=>t_(s,e,t))).catch(xl)}async function jM(n,e){const t=ke(n),s=e.batch.batchId;try{const a=await Kk(t.localStore,e);eA(t,s,null),JS(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Pc(t,a)}catch(a){await xl(a)}}async function UM(n,e,t){const s=ke(n);try{const a=await(function(c,d){const p=ke(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next((T=>(st(T!==null,37113),y=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y))).next((()=>p.localDocuments.getDocuments(g,y)))}))})(s.localStore,e);eA(s,e,t),JS(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Pc(s,a)}catch(a){await xl(a)}}function JS(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function eA(n,e,t){const s=ke(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function t_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||tA(n,s)}))}function tA(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ey(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),hy(n))}function Wb(n,e,t){for(const s of t)s instanceof $S?(n.Ru.addReference(s.key,e),zM(n,s)):s instanceof XS?(de(cy,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||tA(n,s.key)):Ae(19791,{wu:s})}function zM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(de(cy,"New document in limbo: "+t),n.Eu.add(s),hy(n))}function hy(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Te(_t.fromString(e)),s=n.fu.next();n.Au.set(s,new IM(t)),n.du=n.du.insert(t,s),qS(n.remoteStore,new xr(Xi(Dd(t.path)),s,"TargetPurposeLimboResolution",Rd.ce))}}async function Pc(n,e,t){const s=ke(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const y=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,y?"current":"not-current")}if(g){a.push(g);const y=Z_.As(p.targetId,g);l.push(y)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const y=ke(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>ee.forEach(g,(w=>ee.forEach(w.Es,(D=>y.persistence.referenceDelegate.addReference(T,w.targetId,D))).next((()=>ee.forEach(w.ds,(D=>y.persistence.referenceDelegate.removeReference(T,w.targetId,D)))))))))}catch(T){if(!Rl(T))throw T;de(J_,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const D=y.Ms.get(w),M=D.snapshotVersion,B=D.withLastLimboFreeSnapshotVersion(M);y.Ms=y.Ms.insert(w,B)}}})(s.localStore,l))}async function FM(n,e){const t=ke(n);if(!t.currentUser.isEqual(e)){de(cy,"User change. New user:",e.toKey());const s=await US(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new he($.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Pc(t,s.Ls)}}function BM(n,e){const t=ke(n),s=t.Au.get(e);if(s&&s.hu)return Ye().add(s.key);{let a=Ye();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function nA(n){const e=ke(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LM.bind(null,e),e.Pu.H_=AM.bind(null,e.eventManager),e.Pu.yu=CM.bind(null,e.eventManager),e}function qM(n){const e=ke(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UM.bind(null,e),e}class Jf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Yk(this.persistence,new Hk,e.initialUser,this.serializer)}Cu(e){return new jS(W_.mi,this.serializer)}Du(e){return new eM}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jf.provider={build:()=>new Jf};class HM extends Jf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){st(this.persistence.referenceDelegate instanceof Wf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Ik(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?jn.withCacheSize(this.cacheSizeBytes):jn.DEFAULT;return new jS((s=>Wf.mi(s,t)),this.serializer)}}class n_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xb(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=FM.bind(null,this.syncEngine),await bM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new SM})()}createDatastore(e){const t=jd(e.databaseInfo.databaseId),s=(function(l){return new rM(l)})(e.databaseInfo);return(function(l,c,d,p){return new uM(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new hM(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Xb(this.syncEngine,t,0)),(function(){return Hb.v()?new Hb:new tM})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,y){const T=new NM(a,l,c,d,p,g);return y&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=ke(t);de(qa,"RemoteStore shutting down."),s.Ea.add(5),await Oc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}n_.provider={build:()=>new n_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):qs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="FirestoreClient";class GM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=wn.UNAUTHENTICATED,this.clientId=U_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{de(zr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(de(zr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ry(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function vg(n,e){n.asyncQueue.verifyOperationInProgress(),de(zr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await US(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Zb(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QM(n);de(zr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Qb(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>Qb(e.remoteStore,a))),n._onlineComponents=e}async function QM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){de(zr,"Using user provided OfflineComponentProvider");try{await vg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===$.FAILED_PRECONDITION||a.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;ul("Error using user provided cache. Falling back to memory cache: "+t),await vg(n,new Jf)}}else de(zr,"Using default OfflineComponentProvider"),await vg(n,new HM(void 0));return n._offlineComponents}async function iA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(de(zr,"Using user provided OnlineComponentProvider"),await Zb(n,n._uninitializedComponentsProvider._online)):(de(zr,"Using default OnlineComponentProvider"),await Zb(n,new n_))),n._onlineComponents}function YM(n){return iA(n).then((e=>e.syncEngine))}async function ed(n){const e=await iA(n),t=e.eventManager;return t.onListen=DM.bind(null,e.syncEngine),t.onUnlisten=OM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=PM.bind(null,e.syncEngine),t}function KM(n,e,t={}){const s=new Us;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new fy({next:w=>{y.Nu(),c.enqueueAndForget((()=>oy(l,T)));const D=w.docs.has(d);!D&&w.fromCache?g.reject(new he($.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&w.fromCache&&p&&p.source==="server"?g.reject(new he($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new uy(Dd(d.path),y,{includeMetadataChanges:!0,qa:!0});return ay(l,T)})(await ed(n),n.asyncQueue,e,t,s))),s.promise}function $M(n,e,t={}){const s=new Us;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new fy({next:w=>{y.Nu(),c.enqueueAndForget((()=>oy(l,T))),w.fromCache&&p.source==="server"?g.reject(new he($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new uy(d,y,{includeMetadataChanges:!0,qa:!0});return ay(l,T)})(await ed(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */const Jb=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="firestore.googleapis.com",e1=!0;class t1{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rA,this.ssl=e1}else this.host=e.host,this.ssl=e.ssl??e1;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=LS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xk)throw new he($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t1({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t1(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new tD;switch(s.type){case"firstParty":return new rD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Jb.get(t);s&&(de("ComponentProvider","Removing Datastore"),Jb.delete(t),s.terminate())})(this),Promise.resolve()}}function XM(n,e,t,s={}){n=Dn(n,Fd);const a=qr(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(w_(`https://${d}`),S_("Firestore",!0)),l.host!==rA&&l.host!==d&&ul("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!es(p,c)&&(n._setSettings(p),s.mockUserToken)){let g,y;if(typeof s.mockUserToken=="string")g=s.mockUserToken,y=wn.MOCK_USER;else{g=sw(s.mockUserToken,n._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new he($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new wn(T)}n._authCredentials=new nD(new $w(g,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ks(this.firestore,e,this._query)}}class It{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}toJSON(){return{type:It._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Dc(t,It._jsonSchema))return new It(e,s||null,new Te(_t.fromString(t.referencePath)))}}It._jsonSchemaVersion="firestore/documentReference/1.0",It._jsonSchema={type:Qt("string",It._jsonSchemaVersion),referencePath:Qt("string")};class kr extends Ks{constructor(e,t,s){super(e,t,Dd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new Te(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function Pt(n,e,...t){if(n=yt(n),Xw("collection","path",e),n instanceof Fd){const s=_t.fromString(e,...t);return mb(s),new kr(n,null,s)}{if(!(n instanceof It||n instanceof kr))throw new he($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(_t.fromString(e,...t));return mb(s),new kr(n.firestore,null,s)}}function gt(n,e,...t){if(n=yt(n),arguments.length===1&&(e=U_.newId()),Xw("doc","path",e),n instanceof Fd){const s=_t.fromString(e,...t);return db(s),new It(n,null,new Te(s))}{if(!(n instanceof It||n instanceof kr))throw new he($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(_t.fromString(e,...t));return db(s),new It(n.firestore,n instanceof kr?n.converter:null,new Te(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="AsyncQueue";class i1{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new FS(this,"async_queue_retry"),this._c=()=>{const s=yg();s&&de(n1,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=yg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=yg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Us;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Rl(e))throw e;de(n1,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,qs("INTERNAL UNHANDLED ERROR: ",s1(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=sy.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&Ae(47125,{Pc:s1(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function s1(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function r1(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class is extends Fd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new i1,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new i1(e),this._firestoreClient=void 0,await e}}}function WM(n,e){const t=typeof n=="object"?n:x_(),s=typeof n=="string"?n:Gf,a=wd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=tw("firestore");l&&XM(a,...l)}return a}function Vc(n){if(n._terminated)throw new he($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ZM(n),n._firestoreClient}function ZM(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new bD(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,sA(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new GM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(vn.fromBase64String(e))}catch(t){throw new he($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fi(vn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Dc(e,fi._jsonSchema))return fi.fromBase64String(e.bytes)}}fi._jsonSchemaVersion="firestore/bytes/1.0",fi._jsonSchema={type:Qt("string",fi._jsonSchemaVersion),bytes:Qt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Qe(this._lat,e._lat)||Qe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zi._jsonSchemaVersion}}static fromJSON(e){if(Dc(e,Zi._jsonSchema))return new Zi(e.latitude,e.longitude)}}Zi._jsonSchemaVersion="firestore/geoPoint/1.0",Zi._jsonSchema={type:Qt("string",Zi._jsonSchemaVersion),latitude:Qt("number"),longitude:Qt("number")};/**
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
 */class Ji{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ji._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Dc(e,Ji._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ji(e.vectorValues);throw new he($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ji._jsonSchemaVersion="firestore/vectorValue/1.0",Ji._jsonSchema={type:Qt("string",Ji._jsonSchemaVersion),vectorValues:Qt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=/^__.*__$/;class eO{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Gr(e,this.data,this.fieldMask,t,this.fieldTransforms):new kc(e,this.data,t,this.fieldTransforms)}}class aA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Gr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ac:n})}}class Bd{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Bd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return td(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(oA(this.Ac)&&JM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class tO{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||jd(e)}Cc(e,t,s,a=!1){return new Bd({Ac:e,methodName:t,Dc:s,path:yn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jc(n){const e=n._freezeSettings(),t=jd(n._databaseId);return new tO(n._databaseId,!!e.ignoreUndefinedProperties,t)}function dy(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);_y("Data must be an object, but it was:",c,s);const d=hA(s,c);let p,g;if(l.merge)p=new Wn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const w=i_(e,T,t);if(!c.contains(w))throw new he($.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);dA(y,w)||y.push(w)}p=new Wn(y),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new eO(new Un(d),p,g)}class qd extends Dl{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qd}}function lA(n,e,t){return new Bd({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class my extends Dl{_toFieldTransform(e){return new Q_(e.path,new yc)}isEqual(e){return e instanceof my}}class py extends Dl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=lA(this,e,!0),s=this.vc.map((l=>Wa(l,t))),a=new dl(s);return new Q_(e.path,a)}isEqual(e){return e instanceof py&&es(this.vc,e.vc)}}class gy extends Dl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=lA(this,e,!0),s=this.vc.map((l=>Wa(l,t))),a=new ml(s);return new Q_(e.path,a)}isEqual(e){return e instanceof gy&&es(this.vc,e.vc)}}function uA(n,e,t,s){const a=n.Cc(1,e,t);_y("Data must be an object, but it was:",a,s);const l=[],c=Un.empty();Hr(s,((p,g)=>{const y=yy(e,p,t);g=yt(g);const T=a.yc(y);if(g instanceof qd)l.push(y);else{const w=Wa(g,T);w!=null&&(l.push(y),c.set(y,w))}}));const d=new Wn(l);return new aA(c,d,a.fieldTransforms)}function cA(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[i_(e,s,t)],p=[a];if(l.length%2!=0)throw new he($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(i_(e,l[w])),p.push(l[w+1]);const g=[],y=Un.empty();for(let w=d.length-1;w>=0;--w)if(!dA(g,d[w])){const D=d[w];let M=p[w];M=yt(M);const B=c.yc(D);if(M instanceof qd)g.push(D);else{const U=Wa(M,B);U!=null&&(g.push(D),y.set(D,U))}}const T=new Wn(g);return new aA(y,T,c.fieldTransforms)}function nO(n,e,t,s=!1){return Wa(t,n.Cc(s?4:3,e))}function Wa(n,e){if(fA(n=yt(n)))return _y("Unsupported field value:",e,n),hA(n,e);if(n instanceof Dl)return(function(s,a){if(!oA(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=Wa(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return GD(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Et.fromDate(s);return{timestampValue:Xf(a.serializer,l)}}if(s instanceof Et){const l=new Et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Xf(a.serializer,l)}}if(s instanceof Zi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof fi)return{bytesValue:NS(a.serializer,s._byteString)};if(s instanceof It){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:$_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Ji)return(function(c,d){return{mapValue:{fields:{[rS]:{stringValue:aS},[Qf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return G_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${xd(s)}`)})(n,e)}function hA(n,e){const t={};return Jw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hr(n,((s,a)=>{const l=Wa(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function fA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Et||n instanceof Zi||n instanceof fi||n instanceof It||n instanceof Dl||n instanceof Ji)}function _y(n,e,t){if(!fA(t)||!Ww(t)){const s=xd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function i_(n,e,t){if((e=yt(e))instanceof Lc)return e._internalPath;if(typeof e=="string")return yy(n,e);throw td("Field path arguments must be of type string or ",n,!1,void 0,t)}const iO=new RegExp("[~\\*/\\[\\]]");function yy(n,e,t){if(e.search(iO)>=0)throw td(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Lc(...e.split("."))._internalPath}catch{throw td(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function td(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new he($.INVALID_ARGUMENT,d+n+p)}function dA(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sO extends mA{data(){return super.data()}}function Hd(n,e){return typeof e=="string"?yy(n,e):e instanceof Lc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new he($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vy{}class Ey extends vy{}function cn(n,e,...t){let s=[];e instanceof vy&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof Ty)).length,d=l.filter((p=>p instanceof Gd)).length;if(c>1||c>0&&d>0)throw new he($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Gd extends Ey{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Gd(e,t,s)}_apply(e){const t=this._parse(e);return yA(e._query,t),new Ks(e.firestore,e.converter,Yg(e._query,t))}_parse(e){const t=jc(e.firestore);return(function(l,c,d,p,g,y,T){let w;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new he($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){o1(T,y);const M=[];for(const B of T)M.push(a1(p,l,B));w={arrayValue:{values:M}}}else w=a1(p,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||o1(T,y),w=nO(d,c,T,y==="in"||y==="not-in");return Gt.create(g,y,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tt(n,e,t){const s=e,a=Hd("where",n);return Gd._create(a,s,t)}class Ty extends vy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ty(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:xi.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)yA(c,p),c=Yg(c,p)})(e._query,t),new Ks(e.firestore,e.converter,Yg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class by extends Ey{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new by(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new he($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new he($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _c(l,c)})(e._query,this._field,this._direction);return new Ks(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new Il(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function gA(n,e="asc"){const t=e,s=Hd("orderBy",n);return by._create(s,t)}class wy extends Ey{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new wy(e,t,s)}_apply(e){return new Ks(e.firestore,e.converter,Kf(e._query,this._limit,this._limitType))}}function _A(n){return wy._create("limit",n,"F")}function a1(n,e,t){if(typeof(t=yt(t))=="string"){if(t==="")throw new he($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mS(e)&&t.indexOf("/")!==-1)throw new he($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(_t.fromString(t));if(!Te.isDocumentKey(s))throw new he($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return bb(n,new Te(s))}if(t instanceof It)return bb(n,t._key);throw new he($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xd(t)}.`)}function o1(n,e){if(!Array.isArray(n)||n.length===0)throw new he($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yA(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new he($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class rO{convertValue(e,t="none"){switch(jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Hr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Qf].arrayValue?.values?.map((s=>Ot(s.doubleValue)));return new Ji(t)}convertGeoPoint(e){return new Zi(Ot(e.latitude),Ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Nd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(mc(e));default:return null}}convertTimestamp(e){const t=Vr(e);return new Et(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=_t.fromString(e);st(VS(s),9688,{name:e});const a=new pc(s.get(1),s.get(3)),l=new Te(s.popFirst(5));return a.isEqual(t)||qs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Wu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pa extends mA{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Df(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Hd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pa._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Pa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pa._jsonSchema={type:Qt("string",Pa._jsonSchemaVersion),bundleSource:Qt("string","DocumentSnapshot"),bundleName:Qt("string"),bundle:Qt("string")};class Df extends Pa{data(e={}){return super.data(e)}}class Va{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Wu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Df(this._firestore,this._userDataWriter,s.key,s,new Wu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new Df(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Wu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new Df(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Wu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:aO(d.type),doc:p,oldIndex:g,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Va._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=U_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function aO(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n){n=Dn(n,It);const e=Dn(n.firestore,is);return KM(Vc(e),n._key).then((t=>EA(e,n,t)))}Va._jsonSchemaVersion="firestore/querySnapshot/1.0",Va._jsonSchema={type:Qt("string",Va._jsonSchemaVersion),bundleSource:Qt("string","QuerySnapshot"),bundleName:Qt("string"),bundle:Qt("string")};class Ay extends rO{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,t)}}function sc(n){n=Dn(n,Ks);const e=Dn(n.firestore,is),t=Vc(e),s=new Ay(e);return pA(n._query),$M(t,n._query).then((a=>new Va(e,s,n,a)))}function vA(n,e,t){n=Dn(n,It);const s=Dn(n.firestore,is),a=Sy(n.converter,e,t);return Uc(s,[dy(jc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,kn.none())])}function Mt(n,e,t,...s){n=Dn(n,It);const a=Dn(n.firestore,is),l=jc(a);let c;return c=typeof(e=yt(e))=="string"||e instanceof Lc?cA(l,"updateDoc",n._key,e,t,s):uA(l,"updateDoc",n._key,e),Uc(a,[c.toMutation(n._key,kn.exists(!0))])}function nd(n){return Uc(Dn(n.firestore,is),[new Vd(n._key,kn.none())])}function Cy(n,e){const t=Dn(n.firestore,is),s=gt(n),a=Sy(n.converter,e);return Uc(t,[dy(jc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,kn.exists(!1))]).then((()=>s))}function Mn(n,...e){n=yt(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||r1(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(r1(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(n instanceof It)c=Dn(n.firestore,is),d=Dd(n._key.path),l={next:p=>{e[s]&&e[s](EA(c,n,p))},error:e[s+1],complete:e[s+2]};else{const p=Dn(n,Ks);c=Dn(p.firestore,is),d=p._query;const g=new Ay(c);l={next:y=>{e[s]&&e[s](new Va(c,g,p,y))},error:e[s+1],complete:e[s+2]},pA(n._query)}return(function(g,y,T,w){const D=new fy(w),M=new uy(y,D,T);return g.asyncQueue.enqueueAndForget((async()=>ay(await ed(g),M))),()=>{D.Nu(),g.asyncQueue.enqueueAndForget((async()=>oy(await ed(g),M)))}})(Vc(c),d,a,l)}function Uc(n,e){return(function(s,a){const l=new Us;return s.asyncQueue.enqueueAndForget((async()=>VM(await YM(s),a,l))),l.promise})(Vc(n),e)}function EA(n,e,t){const s=t.docs.get(e._key),a=new Ay(n);return new Pa(n,a,e._key,s,new Wu(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=jc(e)}set(e,t,s){this._verifyNotCommitted();const a=Eg(e,this._firestore),l=Sy(a.converter,t,s),c=dy(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,kn.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=Eg(e,this._firestore);let c;return c=typeof(t=yt(t))=="string"||t instanceof Lc?cA(this._dataReader,"WriteBatch.update",l._key,t,s,a):uA(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,kn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Eg(e,this._firestore);return this._mutations=this._mutations.concat(new Vd(t._key,kn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new he($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Eg(n,e){if((n=yt(n)).firestore!==e)throw new he($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function _l(){return new my("serverTimestamp")}function La(...n){return new py("arrayUnion",n)}function Ia(...n){return new gy("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(n){return Vc(n=Dn(n,is)),new oO(n,(e=>Uc(n,e)))}(function(e,t=!0){(function(a){Cl=a})(Ka),za(new Or("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new is(new iD(s.getProvider("auth-internal")),new aD(c,s.getProvider("app-check-internal")),(function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new he($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pc(g.options.projectId,y)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Ki(ub,cb,e),Ki(ub,cb,"esm2020")})();var l1={};const u1="@firebase/database",c1="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TA="";function lO(n){TA=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),un(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:cc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ss(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uO(e)}}catch{}return new cO},ka=bA("localStorage"),hO=bA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new bd("@firebase/database"),fO=(function(){let n=1;return function(){return n++}})(),wA=function(n){const e=qR(n),t=new UR;t.update(e);const s=t.digest();return b_.encodeByteArray(s)},zc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=zc.apply(null,s):typeof s=="object"?e+=un(s):e+=s,e+=" "}return e};let rc=null,h1=!0;const dO=function(n,e){le(!0,"Can't turn on custom loggers persistently."),il.logLevel=Ge.VERBOSE,rc=il.log.bind(il)},_n=function(...n){if(h1===!0&&(h1=!1,rc===null&&hO.get("logging_enabled")===!0&&dO()),rc){const e=zc.apply(null,n);rc(e)}},Fc=function(n){return function(...e){_n(n,...e)}},s_=function(...n){const e="FIREBASE INTERNAL ERROR: "+zc(...n);il.error(e)},Gs=function(...n){const e=`FIREBASE FATAL ERROR: ${zc(...n)}`;throw il.error(e),new Error(e)},Bn=function(...n){const e="FIREBASE WARNING: "+zc(...n);il.warn(e)},mO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},pO=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},yl="[MIN_NAME]",Ha="[MAX_NAME]",Za=function(n,e){if(n===e)return 0;if(n===yl||e===Ha)return-1;if(e===yl||n===Ha)return 1;{const t=f1(n),s=f1(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},gO=function(n,e){return n===e?0:n<e?-1:1},Hu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+un(e))},xy=function(n){if(typeof n!="object"||n===null)return un(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=un(e[s]),t+=":",t+=xy(n[e[s]]);return t+="}",t},SA=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Cn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const AA=function(n){le(!Qd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(p=0;p<64;p+=8){let w=parseInt(y.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),T=T+w}return T.toLowerCase()},_O=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vO(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const EO=new RegExp("^-?(0*)\\d{1,10}$"),TO=-2147483648,bO=2147483647,f1=function(n){if(EO.test(n)){const e=Number(n);if(e>=TO&&e<=bO)return e}return null},kl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Bn("Exception was thrown by user callback.",t),e},Math.floor(0))}},wO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ac=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class SO{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,hi(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Bn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(_n("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bn(e)}}class kf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}kf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="5",CA="v",xA="s",RA="r",IA="f",NA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,DA="ls",kA="p",r_="ac",MA="websocket",OA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ka.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ka.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function CO(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function VA(n,e,t){le(typeof e=="string","typeof type must == string"),le(typeof t=="object","typeof params must == object");let s;if(e===MA)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===OA)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CO(n)&&(t.ns=n.namespace);const a=[];return Cn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(){this.counters_={}}incrementCounter(e,t=1){ss(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return yR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={},wg={};function Iy(n){const e=n.toString();return bg[e]||(bg[e]=new xO),bg[e]}function RO(n,e){const t=n.toString();return wg[t]||(wg[t]=e()),wg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&kl(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="start",NO="close",DO="pLPCommand",kO="pRTLPCB",LA="id",jA="pw",UA="ser",MO="cb",OO="seg",PO="ts",VO="d",LO="dframe",zA=1870,FA=30,jO=zA-FA,UO=25e3,zO=3e4;class Wo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fc(e),this.stats_=Iy(t),this.urlFn=p=>(this.appCheckToken&&(p[r_]=this.appCheckToken),VA(t,OA,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new IO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zO)),pO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ny((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===d1)this.id=d,this.password=p;else if(c===NO)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[d1]="t",s[UA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[MO]=this.scriptTagHolder.uniqueCallbackIdentifier),s[CA]=Ry,this.transportSessionId&&(s[xA]=this.transportSessionId),this.lastSessionId&&(s[DA]=this.lastSessionId),this.applicationId&&(s[kA]=this.applicationId),this.appCheckToken&&(s[r_]=this.appCheckToken),typeof location<"u"&&location.hostname&&NA.test(location.hostname)&&(s[RA]=IA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wo.forceAllow_=!0}static forceDisallow(){Wo.forceDisallow_=!0}static isAvailable(){return Wo.forceAllow_?!0:!Wo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_O()&&!yO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=un(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Z1(t),a=SA(s,jO);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[LO]="t",s[LA]=e,s[jA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=un(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ny{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fO(),window[DO+this.uniqueCallbackIdentifier]=e,window[kO+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ny.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){_n("frame writing exception"),d.stack&&_n(d.stack),_n(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_n("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[LA]=this.myID,e[jA]=this.myPW,e[UA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+FA+s.length<=zA;){const c=this.pendingSegs.shift();s=s+"&"+OO+a+"="+c.seg+"&"+PO+a+"="+c.ts+"&"+VO+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(UO)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{_n("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=16384,BO=45e3;let id=null;typeof MozWebSocket<"u"?id=MozWebSocket:typeof WebSocket<"u"&&(id=WebSocket);class bi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fc(this.connId),this.stats_=Iy(t),this.connURL=bi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[CA]=Ry,typeof location<"u"&&location.hostname&&NA.test(location.hostname)&&(c[RA]=IA),t&&(c[xA]=t),s&&(c[DA]=s),a&&(c[r_]=a),l&&(c[kA]=l),VA(e,MA,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ka.set("previous_websocket_failure",!0);try{let s;NR(),this.mySock=new id(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){bi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&id!==null&&!bi.forceDisallow_}static previouslyFailed(){return ka.isInMemoryStorage||ka.get("previous_websocket_failure")===!0}markConnectionHealthy(){ka.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=cc(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(le(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=un(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=SA(t,FO);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bi.responsesRequiredToBeHealthy=2;bi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{static get ALL_TRANSPORTS(){return[Wo,bi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=bi&&bi.isAvailable();let s=t&&!bi.previouslyFailed();if(e.webSocketOnly&&(t||Bn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[bi];else{const a=this.transports_=[];for(const l of Ec.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Ec.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ec.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=6e4,HO=5e3,GO=10*1024,QO=100*1024,Sg="t",m1="d",YO="s",p1="r",KO="e",g1="o",_1="a",y1="n",v1="p",$O="h";class XO{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fc("c:"+this.id+":"),this.transportManager_=new Ec(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=ac(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sg in e){const t=e[Sg];t===_1?this.upgradeIfSecondaryHealthy_():t===p1?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===g1&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Hu("t",e),s=Hu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:v1,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_1,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:y1,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Hu("t",e),s=Hu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Hu(Sg,e);if(m1 in e){const s=e[m1];if(t===$O){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===y1){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===YO?this.onConnectionShutdown_(s):t===p1?this.onReset_(s):t===KO?s_("Server Error: "+s):t===g1?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):s_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ry!==s&&Bn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),ac(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ac(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:v1,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ka.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qA{constructor(e){this.allowedEvents_=e,this.listeners_={},le(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){le(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends qA{static getInstance(){return new sd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!A_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return le(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=32,T1=768;class ot{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function nt(){return new ot("")}function Ve(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Fr(n){return n.pieces_.length-n.pieceNum_}function mt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ot(n.pieces_,e)}function Dy(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function WO(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Tc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function HA(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ot(e,0)}function Vt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ot)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new ot(t,0)}function je(n){return n.pieceNum_>=n.pieces_.length}function zn(n,e){const t=Ve(n),s=Ve(e);if(t===null)return e;if(t===s)return zn(mt(n),mt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ZO(n,e){const t=Tc(n,0),s=Tc(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Za(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function ky(n,e){if(Fr(n)!==Fr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function di(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Fr(n)>Fr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class JO{constructor(e,t){this.errorPrefix_=t,this.parts_=Tc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Td(this.parts_[s]);GA(this)}}function e4(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Td(e),GA(n)}function t4(n){const e=n.parts_.pop();n.byteLength_-=Td(e),n.parts_.length>0&&(n.byteLength_-=1)}function GA(n){if(n.byteLength_>T1)throw new Error(n.errorPrefix_+"has a key path longer than "+T1+" bytes ("+n.byteLength_+").");if(n.parts_.length>E1)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+E1+") or object contains a cycle "+Ra(n))}function Ra(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My extends qA{static getInstance(){return new My}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return le(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=1e3,n4=300*1e3,b1=30*1e3,i4=1.3,s4=3e4,r4="server_kill",w1=3;class zs extends BA{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=zs.nextPersistentConnectionId_++,this.log_=Fc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gu,this.maxReconnectDelay_=n4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");My.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&sd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(un(l)),le(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Os,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),le(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;zs.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ss(e,"w")){const s=al(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Bn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=b1)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=LR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+un(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):s_("Unrecognized action received from server: "+un(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){le(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>s4&&(this.reconnectDelay_=Gu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*i4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+zs.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){le(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?_n("getToken() completed but was canceled"):(_n("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=w&&w.token,d=new XO(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,D=>{Bn(D+" ("+this.repoInfo_.toString()+")"),this.interrupt(r4)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Bn(T),p())}}}interrupt(e){_n("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_n("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pf(this.interruptReasons_)&&(this.reconnectDelay_=Gu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>xy(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new ot(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){_n("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=w1&&(this.reconnectDelay_=b1,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){_n("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=w1&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+TA.replace(/\./g,"-")]=1,A_()?e["framework.cordova"]=1:rw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=sd.getInstance().currentlyOnline();return Pf(this.interruptReasons_)&&e}}zs.nextPersistentConnectionId_=0;zs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ue(yl,e),a=new Ue(yl,t);return this.compare(s,a)!==0}minPost(){return Ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ef;class QA extends Yd{static get __EMPTY_NODE(){return Ef}static set __EMPTY_NODE(e){Ef=e}compare(e,t){return Za(e.name,t.name)}isDefinedOn(e){throw wl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ue.MIN}maxPost(){return new Ue(Ha,Ef)}makePost(e,t){return le(typeof e=="string","KeyIndex indexValue must always be a string."),new Ue(e,Ef)}toString(){return".key"}}const sl=new QA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ln{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??ln.RED,this.left=a??Fn.EMPTY_NODE,this.right=l??Fn.EMPTY_NODE}copy(e,t,s,a,l){return new ln(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Fn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ln.RED=!0;ln.BLACK=!1;class a4{copy(e,t,s,a,l){return this}insert(e,t,s){return new ln(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fn{constructor(e,t=Fn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Fn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ln.BLACK,null,null))}remove(e){return new Fn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ln.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Tf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Tf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Tf(this.root_,null,this.comparator_,!0,e)}}Fn.EMPTY_NODE=new a4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o4(n,e){return Za(n.name,e.name)}function Oy(n,e){return Za(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a_;function l4(n){a_=n}const YA=function(n){return typeof n=="number"?"number:"+AA(n):"string:"+n},KA=function(n){if(n.isLeafNode()){const e=n.val();le(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ss(e,".sv"),"Priority must be a string or number.")}else le(n===a_||n.isEmpty(),"priority of unexpected type.");le(n===a_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S1;class an{static set __childrenNodeConstructor(e){S1=e}static get __childrenNodeConstructor(){return S1}constructor(e,t=an.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,le(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),KA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new an(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return je(e)?this:Ve(e)===".priority"?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:an.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ve(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(le(s!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,an.__childrenNodeConstructor.EMPTY_NODE.updateChild(mt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+YA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=AA(this.value_):e+=this.value_,this.lazyHash_=wA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===an.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof an.__childrenNodeConstructor?-1:(le(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=an.VALUE_TYPE_ORDER.indexOf(t),l=an.VALUE_TYPE_ORDER.indexOf(s);return le(a>=0,"Unknown leaf type: "+t),le(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}an.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $A,XA;function u4(n){$A=n}function c4(n){XA=n}class h4 extends Yd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Za(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ue.MIN}maxPost(){return new Ue(Ha,new an("[PRIORITY-POST]",XA))}makePost(e,t){const s=$A(e);return new Ue(t,new an("[PRIORITY-POST]",s))}toString(){return".priority"}}const At=new h4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=Math.log(2);class d4{constructor(e){const t=l=>parseInt(Math.log(l)/f4,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rd=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let T,w;if(y===0)return null;if(y===1)return T=n[p],w=t?t(T):T,new ln(w,T.node,ln.BLACK,null,null);{const D=parseInt(y/2,10)+p,M=a(p,D),B=a(D+1,g);return T=n[D],w=t?t(T):T,new ln(w,T.node,ln.BLACK,M,B)}},l=function(p){let g=null,y=null,T=n.length;const w=function(M,B){const U=T-M,ae=T;T-=M;const re=a(U+1,ae),ue=n[U],_e=t?t(ue):ue;D(new ln(_e,ue.node,B,null,re))},D=function(M){g?(g.left=M,g=M):(y=M,g=M)};for(let M=0;M<p.count;++M){const B=p.nextBitIsOne(),U=Math.pow(2,p.count-(M+1));B?w(U,ln.BLACK):(w(U,ln.BLACK),w(U,ln.RED))}return y},c=new d4(n.length),d=l(c);return new Fn(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ag;const Qo={};class js{static get Default(){return le(Qo&&At,"ChildrenNode.ts has not been loaded"),Ag=Ag||new js({".priority":Qo},{".priority":At}),Ag}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=al(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Fn?t:null}hasIndex(e){return ss(this.indexSet_,e.toString())}addIndex(e,t){le(e!==sl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Ue.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=rd(s,e.getCompare()):d=Qo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const y={...this.indexes_};return y[p]=d,new js(y,g)}addToIndexes(e,t){const s=Vf(this.indexes_,(a,l)=>{const c=al(this.indexSet_,l);if(le(c,"Missing index implementation for "+l),a===Qo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Ue.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),rd(d,c.getCompare())}else return Qo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Ue(e.name,d))),p.insert(e,e.node)}});return new js(s,this.indexSet_)}removeFromIndexes(e,t){const s=Vf(this.indexes_,a=>{if(a===Qo)return a;{const l=t.get(e.name);return l?a.remove(new Ue(e.name,l)):a}});return new js(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu;class Re{static get EMPTY_NODE(){return Qu||(Qu=new Re(new Fn(Oy),null,js.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&KA(this.priorityNode_),this.children_.isEmpty()&&le(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qu}updatePriority(e){return this.children_.isEmpty()?this:new Re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Qu:t}}getChild(e){const t=Ve(e);return t===null?this:this.getImmediateChild(t).getChild(mt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(le(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ue(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Qu:this.priorityNode_;return new Re(a,c,l)}}updateChild(e,t){const s=Ve(e);if(s===null)return t;{le(Ve(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(mt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(At,(c,d)=>{t[c]=d.val(e),s++,l&&Re.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+YA(this.getPriority().val())+":"),this.forEachChild(At,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":wA(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Ue(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ue(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ue(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Ue.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Ue.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bc?-1:0}withIndex(e){if(e===sl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Re(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===sl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(At),a=t.getIterator(At);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===sl?null:this.indexMap_.get(e.toString())}}Re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class m4 extends Re{constructor(){super(new Fn(Oy),Re.EMPTY_NODE,js.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Re.EMPTY_NODE}isEmpty(){return!1}}const Bc=new m4;Object.defineProperties(Ue,{MIN:{value:new Ue(yl,Re.EMPTY_NODE)},MAX:{value:new Ue(Ha,Bc)}});QA.__EMPTY_NODE=Re.EMPTY_NODE;an.__childrenNodeConstructor=Re;l4(Bc);c4(Bc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p4=!0;function Ht(n,e=null){if(n===null)return Re.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),le(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new an(t,Ht(e))}if(!(n instanceof Array)&&p4){const t=[];let s=!1;if(Cn(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=Ht(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Ue(c,p)))}}),t.length===0)return Re.EMPTY_NODE;const l=rd(t,o4,c=>c.name,Oy);if(s){const c=rd(t,At.getCompare());return new Re(l,Ht(e),new js({".priority":c},{".priority":At}))}else return new Re(l,Ht(e),js.Default)}else{let t=Re.EMPTY_NODE;return Cn(n,(s,a)=>{if(ss(n,s)&&s.substring(0,1)!=="."){const l=Ht(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Ht(e))}}u4(Ht);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4 extends Yd{constructor(e){super(),this.indexPath_=e,le(!je(e)&&Ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Za(e.name,t.name):l}makePost(e,t){const s=Ht(e),a=Re.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ue(t,a)}maxPost(){const e=Re.EMPTY_NODE.updateChild(this.indexPath_,Bc);return new Ue(Ha,e)}toString(){return Tc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4 extends Yd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Za(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ue.MIN}maxPost(){return Ue.MAX}makePost(e,t){const s=Ht(e);return new Ue(t,s)}toString(){return".value"}}const y4=new _4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(n){return{type:"value",snapshotNode:n}}function vl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function bc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function wc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function v4(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){le(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(bc(t,d)):le(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(vl(t,s)):c.trackChildChange(wc(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(At,(a,l)=>{t.hasChild(a)||s.trackChildChange(bc(a,l))}),t.isLeafNode()||t.forEachChild(At,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(wc(a,l,c))}else s.trackChildChange(vl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Re.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.indexedFilter_=new Py(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Sc.getStartPost_(e),this.endPost_=Sc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new Ue(t,s))||(s=Re.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Re.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Re.EMPTY_NODE);const l=this;return t.forEachChild(At,(c,d)=>{l.matches(new Ue(c,d))||(a=a.updateImmediateChild(c,Re.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Sc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new Ue(t,s))||(s=Re.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=Re.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Re.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Re.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,Re.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(w,D)=>T(D,w)}else c=this.index_.getCompare();const d=e;le(d.numChildren()===this.limit_,"");const p=new Ue(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(d.hasChild(t)){const T=d.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===t||d.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const D=w==null?1:c(w,p);if(y&&!s.isEmpty()&&D>=0)return l?.trackChildChange(wc(t,s,T)),d.updateImmediateChild(t,s);{l?.trackChildChange(bc(t,T));const B=d.updateImmediateChild(t,Re.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l?.trackChildChange(vl(w.name,w.node)),B.updateImmediateChild(w.name,w.node)):B}}else return s.isEmpty()?e:y&&c(g,p)>=0?(l!=null&&(l.trackChildChange(bc(g.name,g.node)),l.trackChildChange(vl(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,Re.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return le(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return le(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yl}hasEnd(){return this.endSet_}getIndexEndValue(){return le(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return le(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ha}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return le(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const e=new Vy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function T4(n){return n.loadsAllData()?new Py(n.getIndex()):n.hasLimit()?new E4(n):new Sc(n)}function A1(n){const e={};if(n.isDefault())return e;let t;if(n.index_===At?t="$priority":n.index_===y4?t="$value":n.index_===sl?t="$key":(le(n.index_ instanceof g4,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=un(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=un(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+un(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=un(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+un(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function C1(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==At&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends BA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(le(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Fc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=ad.getListenId_(e,s),d={};this.listens_[c]=d;const p=A1(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),al(this.listens_,c)===d){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=ad.getListenId_(e,t);delete this.listens_[s]}get(e){const t=A1(e._queryParams),s=e._path.toString(),a=new Os;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Sl(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=cc(d.responseText)}catch{Bn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Bn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(){this.rootNode_=Re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){return{value:null,children:new Map}}function Ml(n,e,t){if(je(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Ve(e);n.children.has(s)||n.children.set(s,od());const a=n.children.get(s);e=mt(e),Ml(a,e,t)}}function o_(n,e){if(je(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(At,(s,a)=>{Ml(n,new ot(s),a)}),o_(n,e)}}else if(n.children.size>0){const t=Ve(e);return e=mt(e),n.children.has(t)&&o_(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function l_(n,e,t){n.value!==null?t(e,n.value):w4(n,(s,a)=>{const l=new ot(e.toString()+"/"+s);l_(a,l,t)})}function w4(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const x1=10*1e3,A4=30*1e3,C4=300*1e3;class x4{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new S4(e);const s=x1+(A4-x1)*Math.random();ac(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Cn(e,(a,l)=>{l>0&&ss(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),ac(this.reportStats_.bind(this),Math.floor(Math.random()*2*C4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Si;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Si||(Si={}));function ZA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ly(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jy(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Si.ACK_USER_WRITE,this.source=ZA()}operationForChild(e){if(je(this.path)){if(this.affectedTree.value!=null)return le(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ot(e));return new ld(nt(),t,this.revert)}}else return le(Ve(this.path)===e,"operationForChild called for unrelated child."),new ld(mt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t){this.source=e,this.path=t,this.type=Si.LISTEN_COMPLETE}operationForChild(e){return je(this.path)?new Ac(this.source,nt()):new Ac(this.source,mt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Si.OVERWRITE}operationForChild(e){return je(this.path)?new Ga(this.source,nt(),this.snap.getImmediateChild(e)):new Ga(this.source,mt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Si.MERGE}operationForChild(e){if(je(this.path)){const t=this.children.subtree(new ot(e));return t.isEmpty()?null:t.value?new Ga(this.source,nt(),t.value):new Cc(this.source,nt(),t)}else return le(Ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cc(this.source,mt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(je(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ve(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function I4(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(v4(c.childName,c.snapshotNode))}),Yu(n,a,"child_removed",e,s,t),Yu(n,a,"child_added",e,s,t),Yu(n,a,"child_moved",l,s,t),Yu(n,a,"child_changed",e,s,t),Yu(n,a,"value",e,s,t),a}function Yu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>D4(n,d,p)),c.forEach(d=>{const p=N4(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function N4(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function D4(n,e,t){if(e.childName==null||t.childName==null)throw wl("Should only compare child_ events.");const s=new Ue(e.childName,e.snapshotNode),a=new Ue(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,e){return{eventCache:n,serverCache:e}}function oc(n,e,t,s){return Kd(new Qa(e,t,s),n.serverCache)}function JA(n,e,t,s){return Kd(n.eventCache,new Qa(e,t,s))}function u_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ya(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cg;const k4=()=>(Cg||(Cg=new Fn(gO)),Cg);class vt{static fromObject(e){let t=new vt(null);return Cn(e,(s,a)=>{t=t.set(new ot(s),a)}),t}constructor(e,t=k4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:nt(),value:this.value};if(je(e))return null;{const s=Ve(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(mt(e),t);return l!=null?{path:Vt(new ot(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(je(e))return this;{const t=Ve(e),s=this.children.get(t);return s!==null?s.subtree(mt(e)):new vt(null)}}set(e,t){if(je(e))return new vt(t,this.children);{const s=Ve(e),l=(this.children.get(s)||new vt(null)).set(mt(e),t),c=this.children.insert(s,l);return new vt(this.value,c)}}remove(e){if(je(e))return this.children.isEmpty()?new vt(null):new vt(null,this.children);{const t=Ve(e),s=this.children.get(t);if(s){const a=s.remove(mt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new vt(null):new vt(this.value,l)}else return this}}get(e){if(je(e))return this.value;{const t=Ve(e),s=this.children.get(t);return s?s.get(mt(e)):null}}setTree(e,t){if(je(e))return t;{const s=Ve(e),l=(this.children.get(s)||new vt(null)).setTree(mt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new vt(this.value,c)}}fold(e){return this.fold_(nt(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Vt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,nt(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(je(e))return null;{const l=Ve(e),c=this.children.get(l);return c?c.findOnPath_(mt(e),Vt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,nt(),t)}foreachOnPath_(e,t,s){if(je(e))return this;{this.value&&s(t,this.value);const a=Ve(e),l=this.children.get(a);return l?l.foreachOnPath_(mt(e),Vt(t,a),s):new vt(null)}}foreach(e){this.foreach_(nt(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Vt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.writeTree_=e}static empty(){return new Ci(new vt(null))}}function lc(n,e,t){if(je(e))return new Ci(new vt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=zn(a,e);return l=l.updateChild(c,t),new Ci(n.writeTree_.set(a,l))}else{const a=new vt(t),l=n.writeTree_.setTree(e,a);return new Ci(l)}}}function R1(n,e,t){let s=n;return Cn(t,(a,l)=>{s=lc(s,Vt(e,a),l)}),s}function I1(n,e){if(je(e))return Ci.empty();{const t=n.writeTree_.setTree(e,new vt(null));return new Ci(t)}}function c_(n,e){return Ja(n,e)!=null}function Ja(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(zn(t.path,e)):null}function N1(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(At,(s,a)=>{e.push(new Ue(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Ue(s,a.value))}),e}function Mr(n,e){if(je(e))return n;{const t=Ja(n,e);return t!=null?new Ci(new vt(t)):new Ci(n.writeTree_.subtree(e))}}function h_(n){return n.writeTree_.isEmpty()}function El(n,e){return eC(nt(),n.writeTree_,e)}function eC(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(le(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=eC(Vt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Vt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(n,e){return sC(e,n)}function M4(n,e,t,s,a){le(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=lc(n.visibleWrites,e,t)),n.lastWriteId=s}function O4(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function P4(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);le(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&V4(d,s.path)?a=!1:di(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return L4(n),!0;if(s.snap)n.visibleWrites=I1(n.visibleWrites,s.path);else{const d=s.children;Cn(d,p=>{n.visibleWrites=I1(n.visibleWrites,Vt(s.path,p))})}return!0}else return!1}function V4(n,e){if(n.snap)return di(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&di(Vt(n.path,t),e))return!0;return!1}function L4(n){n.visibleWrites=tC(n.allWrites,j4,nt()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function j4(n){return n.visible}function tC(n,e,t){let s=Ci.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)di(t,c)?(d=zn(t,c),s=lc(s,d,l.snap)):di(c,t)&&(d=zn(c,t),s=lc(s,nt(),l.snap.getChild(d)));else if(l.children){if(di(t,c))d=zn(t,c),s=R1(s,d,l.children);else if(di(c,t))if(d=zn(c,t),je(d))s=R1(s,nt(),l.children);else{const p=al(l.children,Ve(d));if(p){const g=p.getChild(mt(d));s=lc(s,nt(),g)}}}else throw wl("WriteRecord should have .snap or .children")}}return s}function nC(n,e,t,s,a){if(!s&&!a){const l=Ja(n.visibleWrites,e);if(l!=null)return l;{const c=Mr(n.visibleWrites,e);if(h_(c))return t;if(t==null&&!c_(c,nt()))return null;{const d=t||Re.EMPTY_NODE;return El(c,d)}}}else{const l=Mr(n.visibleWrites,e);if(!a&&h_(l))return t;if(!a&&t==null&&!c_(l,nt()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(di(g.path,e)||di(e,g.path))},d=tC(n.allWrites,c,e),p=t||Re.EMPTY_NODE;return El(d,p)}}}function U4(n,e,t){let s=Re.EMPTY_NODE;const a=Ja(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(At,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Mr(n.visibleWrites,e);return t.forEachChild(At,(c,d)=>{const p=El(Mr(l,new ot(c)),d);s=s.updateImmediateChild(c,p)}),N1(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Mr(n.visibleWrites,e);return N1(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function z4(n,e,t,s,a){le(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Vt(e,t);if(c_(n.visibleWrites,l))return null;{const c=Mr(n.visibleWrites,l);return h_(c)?a.getChild(t):El(c,a.getChild(t))}}function F4(n,e,t,s){const a=Vt(e,t),l=Ja(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Mr(n.visibleWrites,a);return El(c,s.getNode().getImmediateChild(t))}else return null}function B4(n,e){return Ja(n.visibleWrites,e)}function q4(n,e,t,s,a,l,c){let d;const p=Mr(n.visibleWrites,e),g=Ja(p,nt());if(g!=null)d=g;else if(t!=null)d=El(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),w=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let D=w.getNext();for(;D&&y.length<a;)T(D,s)!==0&&y.push(D),D=w.getNext();return y}else return[]}function H4(){return{visibleWrites:Ci.empty(),allWrites:[],lastWriteId:-1}}function ud(n,e,t,s){return nC(n.writeTree,n.treePath,e,t,s)}function zy(n,e){return U4(n.writeTree,n.treePath,e)}function D1(n,e,t,s){return z4(n.writeTree,n.treePath,e,t,s)}function cd(n,e){return B4(n.writeTree,Vt(n.treePath,e))}function G4(n,e,t,s,a,l){return q4(n.writeTree,n.treePath,e,t,s,a,l)}function Fy(n,e,t){return F4(n.writeTree,n.treePath,e,t)}function iC(n,e){return sC(Vt(n.treePath,e),n.writeTree)}function sC(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;le(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),le(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,wc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,bc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,vl(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,wc(s,e.snapshotNode,a.oldSnap));else throw wl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const rC=new Y4;class By{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qa(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fy(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ya(this.viewCache_),l=G4(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(n){return{filter:n}}function $4(n,e){le(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),le(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function X4(n,e,t,s,a){const l=new Q4;let c,d;if(t.type===Si.OVERWRITE){const g=t;g.source.fromUser?c=f_(n,e,g.path,g.snap,s,a,l):(le(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!je(g.path),c=hd(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===Si.MERGE){const g=t;g.source.fromUser?c=Z4(n,e,g.path,g.children,s,a,l):(le(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=d_(n,e,g.path,g.children,s,a,d,l))}else if(t.type===Si.ACK_USER_WRITE){const g=t;g.revert?c=tP(n,e,g.path,s,a,l):c=J4(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Si.LISTEN_COMPLETE)c=eP(n,e,t.path,s,l);else throw wl("Unknown operation type: "+t.type);const p=l.getChanges();return W4(e,c,p),{viewCache:c,changes:p}}function W4(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=u_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(WA(u_(e)))}}function aC(n,e,t,s,a,l){const c=e.eventCache;if(cd(s,t)!=null)return e;{let d,p;if(je(t))if(le(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ya(e),y=g instanceof Re?g:Re.EMPTY_NODE,T=zy(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=ud(s,Ya(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Ve(t);if(g===".priority"){le(Fr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=D1(s,t,y,p);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=mt(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const w=D1(s,t,c.getNode(),p);w!=null?T=c.getNode().getImmediateChild(g).updateChild(y,w):T=c.getNode().getImmediateChild(g)}else T=Fy(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return oc(e,d,c.isFullyInitialized()||je(t),n.filter.filtersNodes())}}function hd(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(je(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const D=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),D,null)}else{const D=Ve(t);if(!p.isCompleteForPath(t)&&Fr(t)>1)return e;const M=mt(t),U=p.getNode().getImmediateChild(D).updateChild(M,s);D===".priority"?g=y.updatePriority(p.getNode(),U):g=y.updateChild(p.getNode(),D,U,M,rC,null)}const T=JA(e,g,p.isFullyInitialized()||je(t),y.filtersNodes()),w=new By(a,T,l);return aC(n,T,t,a,w,d)}function f_(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new By(a,e,l);if(je(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=oc(e,g,!0,n.filter.filtersNodes());else{const T=Ve(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=oc(e,g,d.isFullyInitialized(),d.isFiltered());else{const w=mt(t),D=d.getNode().getImmediateChild(T);let M;if(je(w))M=s;else{const B=y.getCompleteChild(T);B!=null?Dy(w)===".priority"&&B.getChild(HA(w)).isEmpty()?M=B:M=B.updateChild(w,s):M=Re.EMPTY_NODE}if(D.equals(M))p=e;else{const B=n.filter.updateChild(d.getNode(),T,M,w,y,c);p=oc(e,B,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function k1(n,e){return n.eventCache.isCompleteForChild(e)}function Z4(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Vt(t,p);k1(e,Ve(y))&&(d=f_(n,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Vt(t,p);k1(e,Ve(y))||(d=f_(n,d,y,g,a,l,c))}),d}function M1(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function d_(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;je(t)?g=s:g=new vt(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,w)=>{if(y.hasChild(T)){const D=e.serverCache.getNode().getImmediateChild(T),M=M1(n,D,w);p=hd(n,p,new ot(T),M,a,l,c,d)}}),g.children.inorderTraversal((T,w)=>{const D=!e.serverCache.isCompleteForChild(T)&&w.value===null;if(!y.hasChild(T)&&!D){const M=e.serverCache.getNode().getImmediateChild(T),B=M1(n,M,w);p=hd(n,p,new ot(T),B,a,l,c,d)}}),p}function J4(n,e,t,s,a,l,c){if(cd(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(je(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return hd(n,e,t,p.getNode().getChild(t),a,l,d,c);if(je(t)){let g=new vt(null);return p.getNode().forEachChild(sl,(y,T)=>{g=g.set(new ot(y),T)}),d_(n,e,t,g,a,l,d,c)}else return e}else{let g=new vt(null);return s.foreach((y,T)=>{const w=Vt(t,y);p.isCompleteForPath(w)&&(g=g.set(y,p.getNode().getChild(w)))}),d_(n,e,t,g,a,l,d,c)}}function eP(n,e,t,s,a){const l=e.serverCache,c=JA(e,l.getNode(),l.isFullyInitialized()||je(t),l.isFiltered());return aC(n,c,t,s,rC,a)}function tP(n,e,t,s,a,l){let c;if(cd(s,t)!=null)return e;{const d=new By(s,e,a),p=e.eventCache.getNode();let g;if(je(t)||Ve(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=ud(s,Ya(e));else{const T=e.serverCache.getNode();le(T instanceof Re,"serverChildren would be complete if leaf node"),y=zy(s,T)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=Ve(t);let T=Fy(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?g=n.filter.updateChild(p,y,T,mt(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,Re.EMPTY_NODE,mt(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=ud(s,Ya(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||cd(s,nt())!=null,oc(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new Py(s.getIndex()),l=T4(s);this.processor_=K4(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(Re.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(Re.EMPTY_NODE,d.getNode(),null),y=new Qa(p,c.isFullyInitialized(),a.filtersNodes()),T=new Qa(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Kd(T,y),this.eventGenerator_=new R4(this.query_)}get query(){return this.query_}}function iP(n){return n.viewCache_.serverCache.getNode()}function sP(n,e){const t=Ya(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!je(e)&&!t.getImmediateChild(Ve(e)).isEmpty())?t.getChild(e):null}function O1(n){return n.eventRegistrations_.length===0}function rP(n,e){n.eventRegistrations_.push(e)}function P1(n,e,t){const s=[];if(t){le(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function V1(n,e,t,s){e.type===Si.MERGE&&e.source.queryId!==null&&(le(Ya(n.viewCache_),"We should always have a full cache before handling merges"),le(u_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=X4(n.processor_,a,e,t,s);return $4(n.processor_,l.viewCache),le(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,oC(n,l.changes,l.viewCache.eventCache.getNode(),null)}function aP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(At,(l,c)=>{s.push(vl(l,c))}),t.isFullyInitialized()&&s.push(WA(t.getNode())),oC(n,s,t.getNode(),e)}function oC(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return I4(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fd;class oP{constructor(){this.views=new Map}}function lP(n){le(!fd,"__referenceConstructor has already been defined"),fd=n}function uP(){return le(fd,"Reference.ts has not been loaded"),fd}function cP(n){return n.views.size===0}function qy(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return le(l!=null,"SyncTree gave us an op for an invalid query."),V1(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(V1(c,e,t,s));return l}}function hP(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=ud(t,a?s:null),p=!1;d?p=!0:s instanceof Re?(d=zy(t,s),p=!1):(d=Re.EMPTY_NODE,p=!1);const g=Kd(new Qa(d,p,!1),new Qa(s,a,!1));return new nP(e,g)}return c}function fP(n,e,t,s,a,l){const c=hP(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),rP(c,t),aP(c,t)}function dP(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=Br(n);if(a==="default")for(const[p,g]of n.views.entries())c=c.concat(P1(g,t,s)),O1(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(c=c.concat(P1(p,t,s)),O1(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Br(n)&&l.push(new(uP())(e._repo,e._path)),{removed:l,events:c}}function lC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function rl(n,e){let t=null;for(const s of n.views.values())t=t||sP(s,e);return t}function uC(n,e){if(e._queryParams.loadsAllData())return $d(n);{const s=e._queryIdentifier;return n.views.get(s)}}function cC(n,e){return uC(n,e)!=null}function Br(n){return $d(n)!=null}function $d(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd;function mP(n){le(!dd,"__referenceConstructor has already been defined"),dd=n}function pP(){return le(dd,"Reference.ts has not been loaded"),dd}let gP=1;class L1{constructor(e){this.listenProvider_=e,this.syncPointTree_=new vt(null),this.pendingWriteTree_=H4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hC(n,e,t,s,a){return M4(n.pendingWriteTree_,e,t,s,a),a?qc(n,new Ga(ZA(),e,t)):[]}function Ma(n,e,t=!1){const s=O4(n.pendingWriteTree_,e);if(P4(n.pendingWriteTree_,e)){let l=new vt(null);return s.snap!=null?l=l.set(nt(),!0):Cn(s.children,c=>{l=l.set(new ot(c),!0)}),qc(n,new ld(s.path,l,t))}else return[]}function Xd(n,e,t){return qc(n,new Ga(Ly(),e,t))}function _P(n,e,t){const s=vt.fromObject(t);return qc(n,new Cc(Ly(),e,s))}function yP(n,e){return qc(n,new Ac(Ly(),e))}function vP(n,e,t){const s=Gy(n,t);if(s){const a=Qy(s),l=a.path,c=a.queryId,d=zn(l,e),p=new Ac(jy(c),d);return Yy(n,l,p)}else return[]}function m_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||cC(c,e))){const p=dP(c,e,t,s);cP(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const y=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(w,D)=>Br(D));if(y&&!T){const w=n.syncPointTree_.subtree(l);if(!w.isEmpty()){const D=bP(w);for(let M=0;M<D.length;++M){const B=D[M],U=B.query,ae=mC(n,B);n.listenProvider_.startListening(uc(U),md(n,U),ae.hashFn,ae.onComplete)}}}!T&&g.length>0&&!s&&(y?n.listenProvider_.stopListening(uc(e),null):g.forEach(w=>{const D=n.queryToTagMap.get(Wd(w));n.listenProvider_.stopListening(uc(w),D)}))}wP(n,g)}return d}function EP(n,e,t,s){const a=Gy(n,s);if(a!=null){const l=Qy(a),c=l.path,d=l.queryId,p=zn(c,e),g=new Ga(jy(d),p,t);return Yy(n,c,g)}else return[]}function TP(n,e,t,s){const a=Gy(n,s);if(a){const l=Qy(a),c=l.path,d=l.queryId,p=zn(c,e),g=vt.fromObject(t),y=new Cc(jy(d),p,g);return Yy(n,c,y)}else return[]}function j1(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(w,D)=>{const M=zn(w,a);l=l||rl(D,M),c=c||Br(D)});let d=n.syncPointTree_.get(a);d?(c=c||Br(d),l=l||rl(d,nt())):(d=new oP,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=Re.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((D,M)=>{const B=rl(M,nt());B&&(l=l.updateImmediateChild(D,B))}));const g=cC(d,e);if(!g&&!e._queryParams.loadsAllData()){const w=Wd(e);le(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const D=SP();n.queryToTagMap.set(w,D),n.tagToQueryMap.set(D,w)}const y=Uy(n.pendingWriteTree_,a);let T=fP(d,e,t,y,l,p);if(!g&&!c&&!s){const w=uC(d,e);T=T.concat(AP(n,e,w))}return T}function Hy(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=zn(c,e),g=rl(d,p);if(g)return g});return nC(a,e,l,t,!0)}function qc(n,e){return fC(e,n.syncPointTree_,null,Uy(n.pendingWriteTree_,nt()))}function fC(n,e,t,s){if(je(n.path))return dC(n,e,t,s);{const a=e.get(nt());t==null&&a!=null&&(t=rl(a,nt()));let l=[];const c=Ve(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=iC(s,c);l=l.concat(fC(d,p,g,y))}return a&&(l=l.concat(qy(a,n,s,t))),l}}function dC(n,e,t,s){const a=e.get(nt());t==null&&a!=null&&(t=rl(a,nt()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=iC(s,c),y=n.operationForChild(c);y&&(l=l.concat(dC(y,d,p,g)))}),a&&(l=l.concat(qy(a,n,s,t))),l}function mC(n,e){const t=e.query,s=md(n,t);return{hashFn:()=>(iP(e)||Re.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?vP(n,t._path,s):yP(n,t._path);{const l=vO(a,t);return m_(n,t,null,l)}}}}function md(n,e){const t=Wd(e);return n.queryToTagMap.get(t)}function Wd(n){return n._path.toString()+"$"+n._queryIdentifier}function Gy(n,e){return n.tagToQueryMap.get(e)}function Qy(n){const e=n.indexOf("$");return le(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ot(n.substr(0,e))}}function Yy(n,e,t){const s=n.syncPointTree_.get(e);le(s,"Missing sync point for query tag that we're tracking");const a=Uy(n.pendingWriteTree_,e);return qy(s,t,a,null)}function bP(n){return n.fold((e,t,s)=>{if(t&&Br(t))return[$d(t)];{let a=[];return t&&(a=lC(t)),Cn(s,(l,c)=>{a=a.concat(c)}),a}})}function uc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(pP())(n._repo,n._path):n}function wP(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Wd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function SP(){return gP++}function AP(n,e,t){const s=e._path,a=md(n,e),l=mC(n,t),c=n.listenProvider_.startListening(uc(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)le(!Br(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,y,T)=>{if(!je(g)&&y&&Br(y))return[$d(y).query];{let w=[];return y&&(w=w.concat(lC(y).map(D=>D.query))),Cn(T,(D,M)=>{w=w.concat(M)}),w}});for(let g=0;g<p.length;++g){const y=p[g];n.listenProvider_.stopListening(uc(y),md(n,y))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ky(t)}node(){return this.node_}}class $y{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Vt(this.path_,e);return new $y(this.syncTree_,t)}node(){return Hy(this.syncTree_,this.path_)}}const CP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},U1=function(n,e,t){if(!n||typeof n!="object")return n;if(le(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return xP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return RP(n[".sv"],e);le(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},xP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:le(!1,"Unexpected server value: "+n)}},RP=function(n,e,t){n.hasOwnProperty("increment")||le(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&le(!1,"Unexpected increment value: "+s);const a=e.node();if(le(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},IP=function(n,e,t,s){return Xy(e,new $y(t,n),s)},pC=function(n,e,t){return Xy(n,new Ky(e),t)};function Xy(n,e,t){const s=n.getPriority().val(),a=U1(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=U1(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new an(d,Ht(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new an(a))),c.forEachChild(At,(d,p)=>{const g=Xy(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Zy(n,e){let t=e instanceof ot?e:new ot(e),s=n,a=Ve(t);for(;a!==null;){const l=al(s.node.children,a)||{children:{},childCount:0};s=new Wy(a,s,l),t=mt(t),a=Ve(t)}return s}function Ol(n){return n.node.value}function gC(n,e){n.node.value=e,p_(n)}function _C(n){return n.node.childCount>0}function NP(n){return Ol(n)===void 0&&!_C(n)}function Zd(n,e){Cn(n.node.children,(t,s)=>{e(new Wy(t,n,s))})}function yC(n,e,t,s){t&&e(n),Zd(n,a=>{yC(a,e,!0)})}function DP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Hc(n){return new ot(n.parent===null?n.name:Hc(n.parent)+"/"+n.name)}function p_(n){n.parent!==null&&kP(n.parent,n.name,n)}function kP(n,e,t){const s=NP(t),a=ss(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,p_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,p_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=/[\[\].#$\/\u0000-\u001F\u007F]/,OP=/[\[\].#$\u0000-\u001F\u007F]/,xg=10*1024*1024,Jy=function(n){return typeof n=="string"&&n.length!==0&&!MP.test(n)},vC=function(n){return typeof n=="string"&&n.length!==0&&!OP.test(n)},PP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vC(n)},EC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Qd(n)||n&&typeof n=="object"&&ss(n,".sv")},g_=function(n,e,t,s){Jd(ol(n,"value"),e,t)},Jd=function(n,e,t){const s=t instanceof ot?new JO(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ra(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ra(s)+" with contents = "+e.toString());if(Qd(e))throw new Error(n+"contains "+e.toString()+" "+Ra(s));if(typeof e=="string"&&e.length>xg/3&&Td(e)>xg)throw new Error(n+"contains a string greater than "+xg+" utf8 bytes "+Ra(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Cn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Jy(c)))throw new Error(n+" contains an invalid key ("+c+") "+Ra(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);e4(s,c),Jd(n,d,s),t4(s)}),a&&l)throw new Error(n+' contains ".value" child '+Ra(s)+" in addition to actual children.")}},VP=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=Tc(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Jy(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ZO);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&di(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},LP=function(n,e,t,s){const a=ol(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];Cn(e,(c,d)=>{const p=new ot(c);if(Jd(a,d,Vt(t,p)),Dy(p)===".priority"&&!EC(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),VP(a,l)},jP=function(n,e,t){if(Qd(e))throw new Error(ol(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!EC(e))throw new Error(ol(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},TC=function(n,e,t,s){if(!vC(t))throw new Error(ol(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},UP=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),TC(n,e,t)},Zo=function(n,e){if(Ve(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},zP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!PP(t))throw new Error(ol(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ev(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!ky(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function bC(n,e,t){ev(n,t),wC(n,s=>ky(s,e))}function Qs(n,e,t){ev(n,t),wC(n,s=>di(s,e)||di(e,s))}function wC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(BP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function BP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();rc&&_n("event: "+t.toString()),kl(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="repo_interrupt",HP=25;class GP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new FP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=od(),this.transactionQueueTree_=new Wy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QP(n,e,t){if(n.stats_=Iy(n.repoInfo_),n.forceRestClient_||wO())n.server_=new ad(n.repoInfo_,(s,a,l,c)=>{z1(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>F1(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{un(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new zs(n.repoInfo_,e,(s,a,l,c)=>{z1(n,s,a,l,c)},s=>{F1(n,s)},s=>{KP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=RO(n.repoInfo_,()=>new x4(n.stats_,n.server_)),n.infoData_=new b4,n.infoSyncTree_=new L1({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=Xd(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),nv(n,"connected",!1),n.serverSyncTree_=new L1({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Qs(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function YP(n){const t=n.infoData_.getNode(new ot(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function tv(n){return CP({timestamp:YP(n)})}function z1(n,e,t,s,a){n.dataUpdateCount++;const l=new ot(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Vf(t,g=>Ht(g));c=TP(n.serverSyncTree_,l,p,a)}else{const p=Ht(t);c=EP(n.serverSyncTree_,l,p,a)}else if(s){const p=Vf(t,g=>Ht(g));c=_P(n.serverSyncTree_,l,p)}else{const p=Ht(t);c=Xd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=em(n,l)),Qs(n.eventQueue_,d,c)}function F1(n,e){nv(n,"connected",e),e===!1&&XP(n)}function KP(n,e){Cn(e,(t,s)=>{nv(n,t,s)})}function nv(n,e,t){const s=new ot("/.info/"+e),a=Ht(t);n.infoData_.updateSnapshot(s,a);const l=Xd(n.infoSyncTree_,s,a);Qs(n.eventQueue_,s,l)}function SC(n){return n.nextWriteId_++}function $P(n,e,t,s,a){iv(n,"set",{path:e.toString(),value:t,priority:s});const l=tv(n),c=Ht(t,s),d=Hy(n.serverSyncTree_,e),p=pC(c,d,l),g=SC(n),y=hC(n.serverSyncTree_,e,p,g,!0);ev(n.eventQueue_,y),n.server_.put(e.toString(),c.val(!0),(w,D)=>{const M=w==="ok";M||Bn("set at "+e+" failed: "+w);const B=Ma(n.serverSyncTree_,g,!M);Qs(n.eventQueue_,e,B),Tl(n,a,w,D)});const T=IC(n,e);em(n,T),Qs(n.eventQueue_,T,[])}function XP(n){iv(n,"onDisconnectEvents");const e=tv(n),t=od();l_(n.onDisconnect_,nt(),(a,l)=>{const c=IP(a,l,n.serverSyncTree_,e);Ml(t,a,c)});let s=[];l_(t,nt(),(a,l)=>{s=s.concat(Xd(n.serverSyncTree_,a,l));const c=IC(n,a);em(n,c)}),n.onDisconnect_=od(),Qs(n.eventQueue_,nt(),s)}function WP(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&o_(n.onDisconnect_,e),Tl(n,t,s,a)})}function B1(n,e,t,s){const a=Ht(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&Ml(n.onDisconnect_,e,a),Tl(n,s,l,c)})}function ZP(n,e,t,s,a){const l=Ht(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&Ml(n.onDisconnect_,e,l),Tl(n,a,c,d)})}function JP(n,e,t,s){if(Pf(t)){_n("onDisconnect().update() called with empty data.  Don't do anything."),Tl(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&Cn(t,(c,d)=>{const p=Ht(d);Ml(n.onDisconnect_,Vt(e,c),p)}),Tl(n,s,a,l)})}function eV(n,e,t){let s;Ve(e._path)===".info"?s=j1(n.infoSyncTree_,e,t):s=j1(n.serverSyncTree_,e,t),bC(n.eventQueue_,e._path,s)}function tV(n,e,t){let s;Ve(e._path)===".info"?s=m_(n.infoSyncTree_,e,t):s=m_(n.serverSyncTree_,e,t),bC(n.eventQueue_,e._path,s)}function nV(n){n.persistentConnection_&&n.persistentConnection_.interrupt(qP)}function iv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),_n(t,...e)}function Tl(n,e,t,s){e&&kl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function AC(n,e,t){return Hy(n.serverSyncTree_,e,t)||Re.EMPTY_NODE}function sv(n,e=n.transactionQueueTree_){if(e||tm(n,e),Ol(e)){const t=xC(n,e);le(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&iV(n,Hc(e),t)}else _C(e)&&Zd(e,t=>{sv(n,t)})}function iV(n,e,t){const s=t.map(g=>g.currentWriteId),a=AC(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];le(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=zn(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{iv(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(Ma(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&T.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();tm(n,Zy(n.transactionQueueTree_,e)),sv(n,n.transactionQueueTree_),Qs(n.eventQueue_,e,y);for(let w=0;w<T.length;w++)kl(T[w])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Bn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}em(n,e)}},c)}function em(n,e){const t=CC(n,e),s=Hc(t),a=xC(n,t);return sV(n,a,s),s}function sV(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=zn(t,p.path);let y=!1,T;if(le(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(Ma(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=HP)y=!0,T="maxretry",a=a.concat(Ma(n.serverSyncTree_,p.currentWriteId,!0));else{const w=AC(n,p.path,c);p.currentInputSnapshot=w;const D=e[d].update(w.val());if(D!==void 0){Jd("transaction failed: Data returned ",D,p.path);let M=Ht(D);typeof D=="object"&&D!=null&&ss(D,".priority")||(M=M.updatePriority(w.getPriority()));const U=p.currentWriteId,ae=tv(n),re=pC(M,w,ae);p.currentOutputSnapshotRaw=M,p.currentOutputSnapshotResolved=re,p.currentWriteId=SC(n),c.splice(c.indexOf(U),1),a=a.concat(hC(n.serverSyncTree_,p.path,re,p.currentWriteId,p.applyLocally)),a=a.concat(Ma(n.serverSyncTree_,U,!0))}else y=!0,T="nodata",a=a.concat(Ma(n.serverSyncTree_,p.currentWriteId,!0))}Qs(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}tm(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)kl(s[d]);sv(n,n.transactionQueueTree_)}function CC(n,e){let t,s=n.transactionQueueTree_;for(t=Ve(e);t!==null&&Ol(s)===void 0;)s=Zy(s,t),e=mt(e),t=Ve(e);return s}function xC(n,e){const t=[];return RC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function RC(n,e,t){const s=Ol(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Zd(e,a=>{RC(n,a,t)})}function tm(n,e){const t=Ol(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,gC(e,t.length>0?t:void 0)}Zd(e,s=>{tm(n,s)})}function IC(n,e){const t=Hc(CC(n,e)),s=Zy(n.transactionQueueTree_,e);return DP(s,a=>{Rg(n,a)}),Rg(n,s),yC(s,a=>{Rg(n,a)}),t}function Rg(n,e){const t=Ol(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(le(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(le(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Ma(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?gC(e,void 0):t.length=l+1,Qs(n.eventQueue_,Hc(e),a);for(let c=0;c<s.length;c++)kl(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function aV(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Bn(`Invalid query segment '${t}' in query '${n}'`)}return e}const q1=function(n,e){const t=oV(n),s=t.namespace;t.domain==="firebase.com"&&Gs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Gs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||mO();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new PA(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new ot(t.pathString)}},oV=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=rV(n.substring(y,T)));const w=aV(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const D=e.slice(0,g);if(D.toLowerCase()==="localhost")t="localhost";else if(D.split(".").length<=2)t=D;else{const M=e.indexOf(".");s=e.substring(0,M).toLowerCase(),t=e.substring(M+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cV{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return le(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class hV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Os;return WP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Zo("OnDisconnect.remove",this._path);const e=new Os;return B1(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Zo("OnDisconnect.set",this._path),g_("OnDisconnect.set",e,this._path);const t=new Os;return B1(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Zo("OnDisconnect.setWithPriority",this._path),g_("OnDisconnect.setWithPriority",e,this._path),jP("OnDisconnect.setWithPriority",t);const s=new Os;return ZP(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Zo("OnDisconnect.update",this._path),LP("OnDisconnect.update",e,this._path);const t=new Os;return JP(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return je(this._path)?null:Dy(this._path)}get ref(){return new Qr(this._repo,this._path)}get _queryIdentifier(){const e=C1(this._queryParams),t=xy(e);return t==="{}"?"default":t}get _queryObject(){return C1(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof rv))return!1;const t=this._repo===e._repo,s=ky(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+WO(this._path)}}class Qr extends rv{constructor(e,t){super(e,t,new Vy,!1)}get parent(){const e=HA(this._path);return e===null?null:new Qr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class pd{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ot(e),s=__(this.ref,e);return new pd(this._node.getChild(t),s,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new pd(a,__(this.ref,s),At)))}hasChild(e){const t=new ot(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ja(n,e){return n=yt(n),n._checkNotDeleted("ref"),e!==void 0?__(n._root,e):n._root}function __(n,e){return n=yt(n),Ve(n._path)===null?UP("child","path",e):TC("child","path",e),new Qr(n._repo,Vt(n._path,e))}function fV(n){return n=yt(n),new hV(n._repo,n._path)}function Ig(n){return Zo("remove",n._path),nm(n,null)}function nm(n,e){n=yt(n),Zo("set",n._path),g_("set",e,n._path);const t=new Os;return $P(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class av{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new lV("value",this,new pd(e.snapshotNode,new Qr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new uV(this,e,t):null}matches(e){return e instanceof av?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function dV(n,e,t,s,a){const l=new cV(t,void 0),c=new av(l);return eV(n._repo,n,c),()=>tV(n._repo,n,c)}function ov(n,e,t,s){return dV(n,"value",e)}lP(Qr);mP(Qr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV="FIREBASE_DATABASE_EMULATOR_HOST",y_={};let pV=!1;function gV(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=qr(l);n.repoInfo_=new PA(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function _V(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Gs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_n("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=q1(l,a),d=c.repoInfo,p;typeof process<"u"&&l1&&(p=l1[mV]),p?(l=`http://${p}?ns=${d.namespace}`,c=q1(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new AO(n.name,n.options,e);zP("Invalid Firebase Database URL",c),je(c.path)||Gs("Database URL must point to the root of a Firebase Database (not including a child path).");const y=vV(d,n,g,new SO(n,t));return new EV(y,n)}function yV(n,e){const t=y_[e];(!t||t[n.key]!==n)&&Gs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),nV(n),delete t[n.key]}function vV(n,e,t,s){let a=y_[e.name];a||(a={},y_[e.name]=a);let l=a[n.toURLString()];return l&&Gs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new GP(n,pV,t,s),a[n.toURLString()]=l,l}class EV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qr(this._repo,nt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gs("Cannot call "+e+" on a deleted database.")}}function TV(n=x_(),e){const t=wd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=tw("database");s&&bV(t,...s)}return t}function bV(n,e,t,s={}){n=yt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&es(s,l.repoInfo_.emulatorOptions))return;Gs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Gs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new kf(kf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:sw(s.mockUserToken,n.app.options.projectId);c=new kf(d)}qr(e)&&(w_(e),S_("Database",!0)),gV(l,a,s,c)}/**
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
 */function wV(n){lO(Ka),za(new Or("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return _V(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Ki(u1,c1,n),Ki(u1,c1,"esm2020")}zs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};zs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};wV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),AV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),H1=n=>{const e=AV(n);return e.charAt(0).toUpperCase()+e.slice(1)},NC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),CV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=J.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>J.createElement("svg",{ref:p,...xV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:NC("lucide",a),...!l&&!CV(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,y])=>J.createElement(g,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=(n,e)=>{const t=J.forwardRef(({className:s,...a},l)=>J.createElement(RV,{ref:l,iconNode:e,className:NC(`lucide-${SV(H1(n))}`,`lucide-${n}`,s),...a}));return t.displayName=H1(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],DC=Je("arrow-left",IV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],DV=Je("ban",NV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],G1=Je("bell",kV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],OV=Je("check-check",MV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],lv=Je("check",PV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],LV=Je("circle-check-big",VV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],UV=Je("copy",jV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],Ng=Je("corner-up-left",zV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],BV=Je("crown",FV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],kC=Je("ellipsis-vertical",qV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],GV=Je("eraser",HV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],v_=Je("gamepad-2",QV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],KV=Je("hand",YV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],uv=Je("loader-circle",$V);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Q1=Je("log-out",XV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Y1=Je("message-circle",WV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],cv=Je("message-square",ZV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],e6=Je("newspaper",JV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],n6=Je("palette",t6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],s6=Je("pin-off",i6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],im=Je("pin",r6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],hv=Je("rotate-cw",a6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],l6=Je("save",o6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],c6=Je("scissors",u6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],f6=Je("send",h6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],m6=Je("shield-check",d6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],g6=Je("shield",p6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],y6=Je("smile",_6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],fv=Je("square-pen",v6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],gd=Je("trash-2",E6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],E_=Je("user-plus",T6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],MC=Je("user-x",b6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],_d=Je("users",w6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yd=Je("x",S6),A6=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},dv=uw(A6),vd=J2(dv),Se=WM(dv),Ua=TV(dv),C6=n=>{J.useEffect(()=>{if(!n)return;const e=ja(Ua,`/status/${n.uid}`),t=gt(Se,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=ja(Ua,".info/connected"),c=ov(l,d=>{if(d.val()===!1){Mt(t,{state:"offline",last_changed:_l()});return}fV(e).set(s).then(()=>{nm(e,a),Mt(t,{state:"online",last_changed:_l()})})});return()=>c()},[n])},sm=(n,e)=>{const[t,s]=J.useState(null),a=vd.currentUser;return J.useEffect(()=>{if(!n||!a){s(null);return}const l=Mn(gt(Se,"users",n),p=>{if(p.exists()){const g=p.data(),y=e?.customNames?.[a.uid];s(T=>({...T||{},...g,displayName:y||g.displayName}))}else s(null)}),c=ja(Ua,`/status/${n}`),d=ov(c,p=>{const g=p.val();s(y=>({...y||{},presence:g?.state,last_changed:g?.last_changed}))});return()=>{l(),d()}},[n,e,a]),t},x6=n=>{const[e,t]=J.useState(0);return J.useEffect(()=>{if(!n?.uid)return;const s=cn(Pt(Se,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","pending")),a=Mn(s,l=>{const c=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(c.length)});return()=>a()},[n]),e},R6=n=>{const[e,t]=J.useState(0);return J.useEffect(()=>{if(!n?.uid)return;const s=cn(Pt(Se,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),a=Mn(s,l=>{const c=l.docs.filter(g=>!g.data().chatDeletedFor?.includes(n.uid)).map(g=>g.data().users.find(y=>y!==n.uid));if(c.length===0){t(0);return}const d={},p=c.map(g=>{const y=[n.uid,g].sort().join("_"),T=cn(Pt(Se,`conversations/${y}/messages`),Tt("receiverId","==",n.uid),Tt("status","!=","read"));return Mn(T,w=>{d[y]=w.size;const D=Object.values(d).reduce((M,B)=>M+B,0);t(D)})});return()=>p.forEach(g=>g())});return()=>a()},[n]),e},I6=n=>{const e=J.useRef(n);J.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),J.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>0&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=CD"}),e.current=n},[n])},N6=(n,e)=>{const[t,s]=J.useState(null);return J.useEffect(()=>{if(!n||!e||e.isGroup){s(null);return}const a=cn(Pt(Se,"friendships"),Tt("users","in",[[n.uid,e.uid],[e.uid,n.uid]])),l=Mn(a,c=>{if(c.empty)s(null);else{const d=c.docs[0];s({id:d.id,...d.data()})}});return()=>l()},[n,e]),t},D6=({text:n="Preparando seu bate-papo..."})=>b.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:b.jsxs("div",{className:"p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[b.jsx(cv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),b.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),b.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center",children:[b.jsx(uv,{className:"animate-spin h-10 w-10 text-blue-400"}),b.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]})]})}),k6=()=>{const[n,e]=J.useState(!1),t=async()=>{if(n)return;e(!0);const s=new Ps;try{const l=(await l2(vd,s)).user,c=gt(Se,"users",l.uid);(await vc(c)).exists()||await vA(c,{uid:l.uid,displayName:l.displayName,email:l.email,photoURL:l.photoURL,recado:"Olá! Estou usando o ChatD."})}catch(a){console.error("Erro ao fazer login com Google:",a),e(!1)}};return b.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:b.jsxs("div",{className:"flex flex-col items-center p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[b.jsx(cv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),b.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),b.jsx("p",{className:"text-gray-300 mb-8 max-w-sm",children:"Uma experiência de mensagens segura e minimalista. Conecte-se para começar."}),b.jsxs("button",{onClick:t,disabled:n,className:"flex items-center justify-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-wait",children:[n?b.jsx(uv,{className:"animate-spin w-6 h-6"}):b.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),n?"Entrando...":"Fazer Login com Google"]})]})})},M6=({user:n,onClose:e})=>n?b.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:b.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:t=>t.stopPropagation(),children:[b.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),b.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),b.jsx("p",{className:"text-gray-400 mb-4",children:n.email}),b.jsxs("p",{className:"text-gray-300 italic",children:['"',n.recado||"Sem recado.",'"']}),b.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Fechar"})]})}):null,O6=({user:n,onClose:e})=>{const[t,s]=J.useState(n.recado||""),a=async()=>{const l=gt(Se,"users",n.uid);await Mt(l,{recado:t}),e()};return b.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:b.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[b.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),b.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),b.jsx("textarea",{value:t,onChange:l=>s(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Escreva seu recado...",rows:"3"}),b.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[b.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),b.jsx("button",{onClick:a,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},bl=({isOpen:n,onClose:e,onConfirm:t,title:s,message:a})=>n?b.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:b.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-red-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[b.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:s}),b.jsx("p",{className:"text-gray-400 mb-6",children:a}),b.jsxs("div",{className:"flex justify-center gap-4",children:[b.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),b.jsx("button",{onClick:t,className:"bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Confirmar"})]})]})}):null,P6=({currentUser:n})=>{const[e,t]=J.useState(""),[s,a]=J.useState([]),[l,c]=J.useState({}),[d,p]=J.useState(!1),[g,y]=J.useState(""),[T,w]=J.useState(""),D=async B=>{if(B.preventDefault(),e.trim()!==""){p(!0),y(""),w(""),a([]);try{const U=cn(Pt(Se,"users"),Tt("email","==",e.trim()),_A(1)),re=(await sc(U)).docs.map(ue=>ue.data())[0];if(re&&re.uid!==n.uid){a([re]);const ue=cn(Pt(Se,"friendships"),Tt("users","in",[[n.uid,re.uid],[re.uid,n.uid]])),ce=(await sc(ue)).docs[0];c({[re.uid]:ce?ce.data().status:"not_friends"})}else re&&re.uid===n.uid?w("Você não pode adicionar a si mesmo."):w("Nenhum usuário encontrado com este e-mail.")}catch(U){y("Erro ao buscar. Tente novamente."),console.error(U)}finally{p(!1)}}},M=async B=>{try{const U=cn(Pt(Se,"friendships"),Tt("users","in",[[n.uid,B.uid],[B.uid,n.uid]])),ae=await sc(U);if(!ae.empty){const re=ae.docs[0];re.data().status==="declined"&&await nd(gt(Se,"friendships",re.id))}await Cy(Pt(Se,"friendships"),{users:[n.uid,B.uid],status:"pending",requestedBy:n.uid,createdAt:_l()}),c(re=>({...re,[B.uid]:"pending"}))}catch(U){y("Falha ao enviar pedido."),console.error(U)}};return b.jsxs("div",{className:"p-4",children:[b.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),b.jsxs("form",{onSubmit:D,className:"flex gap-2",children:[b.jsx("input",{type:"email",value:e,onChange:B=>t(B.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),b.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?b.jsx(uv,{className:"animate-spin"}):"Buscar"})]}),b.jsxs("div",{className:"mt-4 h-24",children:[g&&b.jsx("p",{className:"text-red-400",children:g}),T&&b.jsx("p",{className:"text-yellow-400",children:T}),s.map(B=>b.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("img",{src:B.photoURL,alt:B.displayName,className:"w-10 h-10 rounded-full"}),b.jsx("span",{className:"text-white",children:B.displayName})]}),b.jsxs("div",{children:[(l[B.uid]==="not_friends"||l[B.uid]==="declined")&&b.jsx("button",{onClick:()=>M(B),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[B.uid]==="pending"&&b.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[B.uid]==="accepted"&&b.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"})]})]},B.uid))]})]})},V6=({currentUser:n})=>{const[e,t]=J.useState([]);J.useEffect(()=>{if(!n?.uid)return;const a=cn(Pt(Se,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","pending")),l=Mn(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==n.uid){const y=g.users.find(w=>w!==n.uid),T=await vc(gt(Se,"users",y));T.exists()&&d.push({id:p.id,...T.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await Mt(gt(Se,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return b.jsxs("div",{className:"p-4",children:[b.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?b.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):b.jsx("ul",{className:"space-y-2",children:e.map(a=>b.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),b.jsx("span",{className:"text-white",children:a.displayName})]}),b.jsxs("div",{className:"flex gap-2",children:[b.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:b.jsx(lv,{size:16})}),b.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:b.jsx(yd,{size:16})})]})]},a.id))})]})},L6=({friendship:n,onSelectUser:e,onDeleteContact:t})=>{const s=sm(n.friendId,n);return s?b.jsxs("li",{onClick:()=>e(s),onContextMenu:a=>{a.preventDefault(),t()},className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 group",children:[b.jsxs("div",{className:"flex items-center gap-4 relative",children:[b.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),b.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName})]}),b.jsx("button",{onClick:a=>{a.stopPropagation(),t()},className:"p-2 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:b.jsx(gd,{size:18,className:"text-red-500"})})]}):b.jsx("div",{className:"p-4 h-[69px] bg-gray-800 animate-pulse"})},j6=({currentUser:n,onSelectUser:e})=>{const[t,s]=J.useState([]),[a,l]=J.useState(null);J.useEffect(()=>{if(!n?.uid)return;const d=cn(Pt(Se,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),p=Mn(d,g=>{const y=g.docs.map(T=>({id:T.id,...T.data(),friendId:T.data().users.find(w=>w!==n.uid)}));s(y)});return()=>p()},[n.uid]);const c=async()=>{if(!a)return;const d=gt(Se,"friendships",a.id);try{await nd(d)}catch(p){console.error("Error deleting friendship: ",p)}l(null)};return b.jsxs("div",{className:"flex-grow overflow-y-auto",children:[b.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Todos os Contatos"}),t.length===0?b.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):b.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(d=>b.jsx(L6,{friendship:d,onSelectUser:e,onDeleteContact:()=>l(d)},d.id))}),b.jsx(bl,{isOpen:!!a,onClose:()=>l(null),onConfirm:c,title:"Remover Contato?",message:"Você tem certeza que quer remover este contato? A amizade será desfeita para ambos."})]})},Dg=({currentUser:n,onSelectUser:e,onCreateGroup:t})=>{const[s,a]=J.useState([]),[l,c]=J.useState([]),[d,p]=J.useState(null),[g,y]=J.useState({show:!1,x:0,y:0,chat:null});J.useEffect(()=>{if(!n?.uid)return;const U=cn(Pt(Se,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),ae=Mn(U,_e=>{let ce=_e.docs.map(me=>({id:me.id,...me.data(),friendId:me.data().users.find(k=>k!==n.uid),isGroup:!1})).filter(me=>!me.chatDeletedFor?.includes(n.uid));ce.sort((me,k)=>{const C=me.pinnedBy?.includes(n.uid),R=k.pinnedBy?.includes(n.uid);return C&&!R?-1:!C&&R?1:0}),a(ce)}),re=cn(Pt(Se,"groups"),Tt("members","array-contains",n.uid)),ue=Mn(re,_e=>{const ce=_e.docs.map(me=>{const k=me.data();return{id:me.id,...k,isGroup:!0,displayName:k.name,photoURL:`https://placehold.co/96x96/${k.photoColor?.replace("#","")||"7c3aed"}/FFFFFF?text=${k.name.charAt(0).toUpperCase()}`}});c(ce)});return()=>{ae(),ue()}},[n.uid]);const T=async U=>{if(!U||U.isGroup)return;const ae=U.pinnedBy?.includes(n.uid),re=gt(Se,"friendships",U.id);await Mt(re,{pinnedBy:ae?Ia(n.uid):La(n.uid)})},w=async()=>{if(!d)return;const U=gt(Se,"friendships",d.id);await Mt(U,{chatDeletedFor:La(n.uid)}),p(null)},D=(U,ae)=>{U.preventDefault(),y({show:!0,x:U.pageX,y:U.pageY,chat:ae})},M=()=>y({...g,show:!1}),B=[...s,...l];return b.jsxs("div",{className:"flex-grow overflow-y-auto",onClick:M,children:[b.jsxs("div",{className:"flex justify-between items-center p-4",children:[b.jsx("h3",{className:"text-lg font-bold text-white",children:"Conversas"}),b.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm",children:[b.jsx(_d,{size:16})," Criar Grupo"]})]}),B.length===0?b.jsx("p",{className:"text-gray-400 text-center px-4",children:"Nenhuma conversa encontrada."}):b.jsx("ul",{className:"divide-y divide-gray-700/50",children:B.map(U=>b.jsx(z6,{chat:U,currentUser:n,onSelectUser:e,onContextMenu:ae=>D(ae,U)},U.id))}),g.show&&b.jsx(U6,{x:g.x,y:g.y,onClose:M,chat:g.chat,currentUser:n,onTogglePin:()=>{T(g.chat),M()},onDeleteChat:()=>{p(g.chat),M()}}),b.jsx(bl,{isOpen:!!d,onClose:()=>p(null),onConfirm:w,title:"Deletar Conversa?",message:"Esta conversa será removida da sua lista, mas as mensagens não serão apagadas para o seu contato."})]})},U6=({x:n,y:e,onClose:t,chat:s,currentUser:a,onTogglePin:l,onDeleteChat:c})=>{const d=J.useRef(null),p=!s.isGroup&&s.pinnedBy?.includes(a.uid);return J.useEffect(()=>{const g=y=>{d.current&&!d.current.contains(y.target)&&t()};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[t]),b.jsxs("div",{ref:d,style:{top:e,left:n},className:"absolute w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20",children:[!s.isGroup&&b.jsxs("button",{onClick:l,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[p?b.jsx(s6,{size:14}):b.jsx(im,{size:14})," ",p?"Desafixar":"Fixar Conversa"]}),b.jsxs("button",{onClick:c,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[b.jsx(gd,{size:14})," Apagar Conversa"]})]})},z6=({chat:n,currentUser:e,onSelectUser:t,onContextMenu:s})=>{const a=sm(n.friendId,n),[l,c]=J.useState(0),d=!n.isGroup&&n.pinnedBy?.includes(e.uid),[p,g]=J.useState(null),y=n.blockedBy?.includes(e.uid)||n.blockedBy?.includes(n.friendId);J.useEffect(()=>{if(!e)return;const B=`conversations/${n.isGroup?n.id:[e.uid,n.friendId].sort().join("_")}/messages`,U=cn(Pt(Se,B),Tt("receiverId","==",e.uid),Tt("status","!=","read")),ae=Mn(U,_e=>c(_e.size)),re=cn(Pt(Se,B),gA("createdAt","desc"),_A(1)),ue=Mn(re,_e=>{g(_e.empty?null:_e.docs[0].data())});return()=>{ae(),ue()}},[n,e]);const T=n.isGroup?n:a;if(!T)return b.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const w=M=>{if(!M)return"Offline";const B=new Date(M.seconds?M.seconds*1e3:M),U=new Date,ae=new Date(U.getFullYear(),U.getMonth(),U.getDate()),re=new Date(U.getFullYear(),U.getMonth(),U.getDate()-1),ue={hour:"2-digit",minute:"2-digit"},_e=B.toLocaleTimeString("pt-BR",ue);if(B>=ae)return`Visto por último hoje às ${_e}`;if(B>=re)return`Visto por último ontem às ${_e}`;const ce={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${B.toLocaleDateString("pt-BR",ce)}`},D=({data:M})=>b.jsxs("div",{className:"relative flex-shrink-0",children:[M.photoURL?b.jsx("img",{src:M.photoURL,alt:M.displayName,className:"w-12 h-12 rounded-full"}):b.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold",style:{backgroundColor:M.photoColor||"#7c3aed"},children:M.displayName?.charAt(0).toUpperCase()}),y&&b.jsx("div",{className:"absolute inset-0 bg-black/50 rounded-full flex items-center justify-center",children:b.jsx(DV,{size:20,className:"text-white"})})]});return b.jsxs("li",{onClick:()=>t(T),onContextMenu:s,className:`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${d?"bg-blue-900/20":""}`,children:[b.jsxs("div",{className:"flex items-center gap-4 relative flex-grow min-w-0",children:[b.jsx(D,{data:T}),!n.isGroup&&b.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${a?.presence==="online"?"bg-green-500":"bg-gray-500"}`}),b.jsxs("div",{className:"flex-grow min-w-0",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[d&&b.jsx(im,{size:14,className:"text-blue-400 flex-shrink-0"}),b.jsx("span",{className:"font-semibold text-white text-lg truncate block",children:T.displayName})]}),b.jsx("p",{className:"text-sm text-gray-400 truncate",children:p?p.isDeleted?"Mensagem apagada":p.text:n.isGroup?"Nenhuma mensagem ainda":a?.presence==="online"?"Online":w(a?.last_changed)})]})]}),b.jsx("div",{className:"flex items-center gap-2 flex-shrink-0 ml-2",children:l>0&&b.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:l})})]})},F6=({msg:n,isCurrentUser:e,onReply:t,onDelete:s,onEdit:a,onPin:l})=>{const[c,d]=J.useState(!1),p=J.useRef(null),g=J.useRef(),[y,T]=J.useState("bottom"),[w,D]=J.useState("Copiar"),M=ce=>{const me=/(https?:\/\/[^\s]+)/g;return ce.split(me).map((k,C)=>k.match(me)?b.jsx("a",{href:k,target:"_blank",rel:"noopener noreferrer",className:"text-blue-300 underline hover:text-blue-200",children:k},C):k)},B=()=>{navigator.clipboard.writeText(n.text).then(()=>{D("Copiado!"),setTimeout(()=>{D("Copiar"),d(!1)},1e3)}).catch(ce=>{console.error("Falha ao copiar texto: ",ce),D("Falhou!"),setTimeout(()=>{D("Copiar"),d(!1)},1e3)})};J.useEffect(()=>{c&&p.current&&(p.current.getBoundingClientRect().top<150?T("top"):T("bottom"))},[c]),J.useEffect(()=>{const ce=me=>{p.current&&!p.current.contains(me.target)&&d(!1)};return document.addEventListener("mousedown",ce),()=>document.removeEventListener("mousedown",ce)},[]);const U=ce=>{ce.preventDefault(),navigator.vibrate&&navigator.vibrate(50),d(!0)},ae=ce=>{g.current=setTimeout(()=>U(ce),500)},re=()=>{clearTimeout(g.current)},ue=()=>{clearTimeout(g.current)},_e=({msg:ce})=>{if(!e||!ce.status)return null;const me=ce.status==="read";return b.jsx(OV,{size:16,className:me?"text-blue-300":"text-gray-400"})};return b.jsxs("div",{className:`w-full flex items-end gap-2 group ${e?"justify-end":"justify-start"}`,children:[!e&&b.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:b.jsx(Ng,{size:16})}),b.jsxs("div",{className:"relative",ref:p,onTouchStart:ae,onTouchEnd:re,onTouchMove:ue,onContextMenu:ce=>{ce.preventDefault(),d(!0)},children:[b.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${n.isDeleted?"bg-gray-700/50 italic text-gray-400":e?"bg-blue-600 text-white":"bg-gray-700 text-white"} ${e?"rounded-br-lg":"rounded-bl-lg"}`,children:[n.replyTo&&!n.isDeleted&&b.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[b.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),b.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),b.jsx("p",{className:"break-words",style:{userSelect:"text"},children:n.isDeleted?"Esta mensagem foi apagada":M(n.text)}),!n.isDeleted&&b.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[n.edited&&b.jsx("span",{className:"text-xs opacity-60 mr-1",children:"(editado)"}),b.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),b.jsx(_e,{msg:n})]})]}),c&&b.jsxs("div",{className:`absolute left-1/2 -translate-x-1/2 ${y==="bottom"?"bottom-full mb-1":"top-full mt-1"} w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10`,children:[b.jsxs("button",{onClick:B,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[b.jsx(UV,{size:14})," ",w]}),b.jsxs("button",{onClick:()=>{l(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[b.jsx(im,{size:14})," Fixar"]}),b.jsxs("button",{onClick:()=>{t(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[b.jsx(Ng,{size:14})," Responder"]}),e&&!n.isDeleted&&b.jsxs(b.Fragment,{children:[b.jsxs("button",{onClick:()=>{a(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[b.jsx(fv,{size:14})," Editar"]}),b.jsxs("button",{onClick:()=>{s("self"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[b.jsx(gd,{size:14})," Apagar para mim"]}),b.jsxs("button",{onClick:()=>{s("all"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[b.jsx(gd,{size:14})," Apagar para todos"]})]})]})]}),e&&b.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:b.jsx(Ng,{size:16})})]})},B6=({onEmojiSelect:n,onClose:e})=>{const t=J.useRef(null);J.useEffect(()=>{const a=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e]);const s=["😂","❤️","🤣","👍","😭","🙏","😘","🥰","😍","😊","🎉","😅","😎","💕","😋","😏","😜","🤔","😆","💪","👏","💖","😢","😇","😍‍🔥","🥳","🌹","✨","🔥","💯","🤗","😚","🥺","👀","💔","💜","😴","😈","🤩","😒"];return b.jsx("div",{ref:t,className:"absolute bottom-full mb-2 w-72 h-auto max-h-60 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col emoji-picker",children:b.jsx("div",{className:"p-2 overflow-y-auto",children:b.jsx("div",{className:"grid grid-cols-8 gap-1",children:s.map(a=>b.jsx("button",{onClick:()=>n(a),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:a},a))})})})},q6=({onClose:n,onSelectTheme:e,currentTheme:t})=>{const s=[{id:"default",name:"Padrão",style:{backgroundColor:"#1f2937"}},{id:"ocean",name:"Oceano",style:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"}},{id:"sunset",name:"Pôr do Sol",style:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"}},{id:"forest",name:"Floresta",style:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"}},{id:"galaxy",name:"Galáxia",style:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"}},{id:"rose",name:"Rosa",style:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"}},{id:"night",name:"Noite",style:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}}];return b.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:b.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg",onClick:a=>a.stopPropagation(),children:[b.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Escolha um Tema"}),b.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:s.map(a=>b.jsxs("div",{onClick:()=>e(a.id),className:"cursor-pointer group",children:[b.jsx("div",{style:a.style,className:"h-24 rounded-lg flex items-center justify-center border-2 border-transparent group-hover:border-blue-500 transition-all relative",children:t===a.id&&b.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg",children:b.jsx(LV,{className:"text-white"})})}),b.jsx("p",{className:"text-center text-sm mt-2 text-gray-300",children:a.name})]},a.id))})]})})},H6=({onClose:n,onSave:e,currentName:t})=>{const[s,a]=J.useState(t);return b.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:b.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-sm w-full border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[b.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Alterar Nome do Contato"}),b.jsx("input",{type:"text",value:s,onChange:l=>a(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Digite o novo nome"}),b.jsxs("div",{className:"flex justify-end gap-4 mt-6",children:[b.jsx("button",{onClick:n,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),b.jsx("button",{onClick:()=>e(s),className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},G6=({groupData:n,friendships:e,onClose:t})=>{const[s,a]=J.useState([]),[l,c]=J.useState([]);J.useEffect(()=>{const g=e.filter(y=>!n.members.includes(y.friendId));c(g)},[e,n.members]);const d=g=>{a(y=>y.includes(g)?y.filter(T=>T!==g):[...y,g])},p=async()=>{if(s.length===0)return;const g=gt(Se,"groups",n.id);await Mt(g,{members:La(...s)}),t()};return b.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:t,children:b.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col h-4/5",onClick:g=>g.stopPropagation(),children:[b.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Adicionar Membros"}),b.jsx("div",{className:"flex-grow overflow-y-auto pr-2 mb-4",children:l.length>0?l.map(g=>b.jsx(OC,{friendship:g,onToggle:d,isSelected:s.includes(g.friendId)},g.id)):b.jsx("p",{className:"text-gray-400 text-center",children:"Todos os seus amigos já estão neste grupo."})}),b.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[b.jsx("button",{onClick:t,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),b.jsx("button",{onClick:p,disabled:s.length===0,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-500",children:"Adicionar"})]})]})})},Q6=({groupData:n,currentUser:e,onClose:t,onLeaveChat:s,friendships:a})=>{const[l,c]=J.useState([]),[d,p]=J.useState(!1),[g,y]=J.useState(!1),[T,w]=J.useState(!1),[D,M]=J.useState(!1),[B,U]=J.useState(n.name),[ae,re]=J.useState(n.description||""),[ue,_e]=J.useState(n.photoColor),ce=n.admins?.includes(e.uid),me=gt(Se,"groups",n.id),k=["#7c3aed","#db2777","#0284c7","#16a34a","#f97316","#ca8a04"];J.useEffect(()=>{(async()=>{const Ke=n.members.map(te=>vc(gt(Se,"users",te))),ne=(await Promise.all(Ke)).filter(te=>te.exists()).map(te=>te.data());c(ne)})()},[n.members]);const C=async()=>{if(B.trim())try{await Mt(me,{name:B,description:ae,photoColor:ue}),M(!1)}catch(ye){console.error("Erro ao salvar alterações do grupo:",ye)}},R=async()=>{const ye={members:Ia(e.uid)};if(ce)if(n.admins.filter(ne=>ne!==e.uid).length===0&&n.members.length-1>0){const ne=n.members.find(te=>te!==e.uid);ne&&(ye.admins=[ne])}else ye.admins=Ia(e.uid);await Mt(me,ye);const Ke=await vc(me);Ke.exists()&&Ke.data().members.length===0&&await nd(me),s(),t()},P=async()=>{await nd(me),s(),t()},V=async ye=>{await Mt(me,{members:Ia(ye),admins:Ia(ye)})},L=async ye=>{const Ke=n.admins.includes(ye);await Mt(me,{admins:Ke?Ia(ye):La(ye)})},x=({member:ye})=>{const[Ke,Y]=J.useState(!1),ne=n.admins?.includes(ye.uid),te=ce&&ye.uid!==e.uid;return b.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700/50 rounded-lg",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("img",{src:ye.photoURL,alt:ye.displayName,className:"w-10 h-10 rounded-full"}),b.jsx("span",{className:"text-white",children:ye.displayName})]}),b.jsxs("div",{className:"flex items-center gap-2",children:[ne&&b.jsx(BV,{size:16,className:"text-yellow-400"}),te&&b.jsxs("div",{className:"relative",children:[b.jsx("button",{onClick:()=>Y(fe=>!fe),children:b.jsx(kC,{size:20})}),Ke&&b.jsxs("div",{className:"absolute top-full right-0 mt-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20",children:[b.jsxs("button",{onClick:()=>{L(ye.uid),Y(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[ne?b.jsx(g6,{size:14}):b.jsx(m6,{size:14})," ",ne?"Rebaixar":"Promover a Admin"]}),b.jsxs("button",{onClick:()=>{V(ye.uid),Y(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[b.jsx(MC,{size:14})," Remover do Grupo"]})]})]})]})]})};return b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:t,children:b.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-lg w-full border border-blue-500/50 shadow-lg flex flex-col h-5/6",onClick:ye=>ye.stopPropagation(),children:[b.jsxs("div",{className:"flex flex-col items-center mb-4 relative",children:[ce&&!D&&b.jsx("button",{onClick:()=>M(!0),className:"absolute top-0 right-0 p-2 text-gray-400 hover:text-white",children:b.jsx(fv,{size:18})}),b.jsxs("div",{className:"relative",children:[b.jsx("div",{className:"w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4",style:{backgroundColor:ue},children:B?.charAt(0).toUpperCase()}),D&&b.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/80 p-1 rounded-full flex gap-1",children:k.map(ye=>b.jsx("button",{onClick:()=>_e(ye),className:`w-5 h-5 rounded-full transition-transform hover:scale-110 ${ue===ye?"ring-2 ring-white":""}`,style:{backgroundColor:ye}},ye))})]}),D?b.jsxs(b.Fragment,{children:[b.jsx("input",{type:"text",value:B,onChange:ye=>U(ye.target.value),className:"w-full bg-gray-700 text-white text-center text-2xl font-bold rounded-lg p-1 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"}),b.jsx("textarea",{value:ae,onChange:ye=>re(ye.target.value),placeholder:"Descrição do grupo...",className:"w-full bg-gray-700 text-white text-center text-sm rounded-lg p-1 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",rows:2})]}):b.jsxs(b.Fragment,{children:[b.jsx("h2",{className:"text-2xl font-bold text-white mt-4",children:n.name}),b.jsx("p",{className:"text-gray-400 text-sm",children:n.description||`${n.members?.length} membros`})]})]}),b.jsxs("div",{className:"flex-grow overflow-y-auto pr-2",children:[b.jsxs("div",{className:"flex justify-between items-center mb-2",children:[b.jsx("h3",{className:"text-lg font-semibold text-white",children:"Membros"}),ce&&b.jsxs("button",{onClick:()=>w(!0),className:"flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300",children:[b.jsx(E_,{size:16})," Adicionar"]})]}),b.jsx("ul",{className:"space-y-2",children:l.map(ye=>b.jsx(x,{member:ye},ye.uid))})]}),b.jsx("div",{className:"mt-6 flex flex-col gap-2",children:D?b.jsxs("div",{className:"flex gap-2",children:[b.jsx("button",{onClick:()=>M(!1),className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),b.jsxs("button",{onClick:C,className:"w-full flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:[b.jsx(l6,{size:16})," Salvar"]})]}):b.jsxs(b.Fragment,{children:[ce&&b.jsx("button",{onClick:()=>y(!0),className:"w-full bg-gray-700/50 px-4 py-2 rounded-lg text-red-500 font-semibold hover:bg-red-900/50 transition-colors",children:"Deletar Grupo"}),b.jsx("button",{onClick:()=>p(!0),className:"w-full bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Sair do Grupo"}),b.jsx("button",{onClick:t,className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Fechar"})]})})]})}),T&&b.jsx(G6,{groupData:n,friendships:a,onClose:()=>w(!1)}),b.jsx(bl,{isOpen:d,onClose:()=>p(!1),onConfirm:R,title:"Sair do Grupo?",message:"Você tem certeza que quer sair deste grupo?"}),b.jsx(bl,{isOpen:g,onClose:()=>y(!1),onConfirm:P,title:"Deletar Grupo?",message:"Esta ação é irreversível e deletará o grupo para todos os membros."})]})},K1=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=J.useState([]),[l,c]=J.useState(""),[d,p]=J.useState(!1),[g,y]=J.useState(!1),[T,w]=J.useState(!1),[D,M]=J.useState(null),[B,U]=J.useState(null),[ae,re]=J.useState(!1),[ue,_e]=J.useState(!1),[ce,me]=J.useState(!1),[k,C]=J.useState(!1),[R,P]=J.useState(!1),[V,L]=J.useState(null),[x,ye]=J.useState(e),[Ke,Y]=J.useState([]),ne=J.useRef(null),te=e.isGroup,fe=N6(n,e),N=sm(e.uid,fe),X=J.useRef(),ie=te?e.id:[n.uid,e.uid].sort().join("_"),se=fe?.themes?.[n.uid]||"default",Ee=te?x.pinnedMessage:fe?.pinnedMessage,Me={default:{backgroundColor:"#1f2937"},ocean:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"},sunset:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"},forest:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"},galaxy:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"},rose:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"},night:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}};J.useEffect(()=>{if(!n?.uid)return;const ge=cn(Pt(Se,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),Ie=Mn(ge,ze=>{const Fe=ze.docs.map(Be=>({id:Be.id,...Be.data(),friendId:Be.data().users.find(jt=>jt!==n.uid)}));Y(Fe)});return()=>Ie()},[n.uid]);const Ce=ge=>{if(!ge)return"";const Ie=new Date(ge.seconds?ge.seconds*1e3:ge),ze=new Date,Fe=new Date(ze.getFullYear(),ze.getMonth(),ze.getDate()),Be=new Date(ze.getFullYear(),ze.getMonth(),ze.getDate()-1),jt={hour:"2-digit",minute:"2-digit"},Ct=Ie.toLocaleTimeString("pt-BR",jt);if(Ie>=Fe)return`Visto por último hoje às ${Ct}`;if(Ie>=Be)return`Visto por último ontem às ${Ct}`;const hn={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${Ie.toLocaleDateString("pt-BR",hn)}`};J.useEffect(()=>{if(te){const ge=gt(Se,"groups",e.id),Ie=Mn(ge,ze=>{ze.exists()?ye({...ze.data(),id:ze.id,isGroup:!0}):t()});return()=>Ie()}},[te,e.id,t]),J.useEffect(()=>{X.current=N?.presence},[N?.presence]),J.useEffect(()=>{if(te||X.current==="online"||N?.presence!=="online")return;const ge=cn(Pt(Se,`conversations/${ie}/messages`),Tt("receiverId","==",n.uid),Tt("status","==","sent"));sc(ge).then(Ie=>{const ze=Tg(Se);Ie.docs.forEach(Fe=>ze.update(Fe.ref,{status:"delivered"})),ze.commit()})},[N?.presence,ie,n.uid,te]),J.useEffect(()=>{const ge=`conversations/${ie}/messages`,Ie=cn(Pt(Se,ge),gA("createdAt","asc")),ze=Mn(Ie,Fe=>{const Be=Fe.docs.map(hn=>({id:hn.id,...hn.data()})).filter(hn=>!hn.deletedFor?.includes(n.uid));if(a(Be),te)return;const jt=Tg(Se);let Ct=!1;Fe.docs.forEach(hn=>{hn.data().receiverId===n.uid&&hn.data().status!=="read"&&(jt.update(hn.ref,{status:"read"}),Ct=!0)}),Ct&&jt.commit().catch(hn=>console.error("Erro ao marcar mensagens como lidas:",hn))});return()=>ze()},[ie,n.uid,te]),J.useEffect(()=>{if(te)return;const ge=ja(Ua,`typing/${ie}/${e.uid}`),Ie=ov(ge,ze=>p(ze.val()===!0));return()=>Ie()},[ie,e.uid,te]);const Lt=ge=>{if(c(ge.target.value),te)return;const Ie=ja(Ua,`typing/${ie}/${n.uid}`);ge.target.value.trim().length>0?(nm(Ie,!0),ne.current&&clearTimeout(ne.current),ne.current=setTimeout(()=>Ig(Ie),3e3)):Ig(Ie)},lt=async ge=>{if(ge.preventDefault(),l.trim()===""||!te&&(fe?.blockedBy?.includes(e.uid)||fe?.blockedBy?.includes(n.uid)))return;const Ie=l;c(""),te||(Ig(ja(Ua,`typing/${ie}/${n.uid}`)),ne.current&&clearTimeout(ne.current));const ze={text:Ie,createdAt:_l(),senderId:n.uid,senderName:n.displayName};te||(ze.receiverId=e.uid,ze.status=N?.presence==="online"?"delivered":"sent"),D&&(ze.replyTo={id:D.id,text:D.text,senderName:D.senderId===n.uid?"Você":te?D.senderName:e.displayName});try{await Cy(Pt(Se,`conversations/${ie}/messages`),ze),M(null)}catch(Fe){console.error("Falha ao enviar mensagem:",Fe),c(Ie)}},Zn=async ge=>{if(ge.preventDefault(),!B||l.trim()==="")return;const Ie=gt(Se,`conversations/${ie}/messages`,B.id);await Mt(Ie,{text:l,edited:!0}),U(null),c("")},Ri=async()=>{if(!V)return;const{id:ge,type:Ie}=V,ze=gt(Se,`conversations/${ie}/messages`,ge);Ie==="self"?await Mt(ze,{deletedFor:La(n.uid)}):Ie==="all"&&await Mt(ze,{text:"",isDeleted:!0,replyTo:null}),L(null)},mi=async()=>{const ge=cn(Pt(Se,`conversations/${ie}/messages`)),Ie=await sc(ge),ze=Tg(Se);Ie.docs.forEach(Fe=>{ze.update(Fe.ref,{deletedFor:La(n.uid)})}),await ze.commit(),me(!1)},rs=async()=>{if(!fe)return;const ge=gt(Se,"friendships",fe.id);fe.blockedBy?.includes(n.uid)?await Mt(ge,{blockedBy:Ia(n.uid)}):await Mt(ge,{blockedBy:La(n.uid)}),_e(!1)},as=async ge=>{if(!fe)return;const Ie=gt(Se,"friendships",fe.id);await Mt(Ie,{[`themes.${n.uid}`]:ge}),C(!1)},os=async ge=>{if(!fe||!ge.trim())return;const Ie=gt(Se,"friendships",fe.id);await Mt(Ie,{[`customNames.${n.uid}`]:ge.trim()}),P(!1)},Yr=async ge=>{const Ie=te&&x.admins.includes(n.uid);if(te&&!Ie)return;const ze=te?gt(Se,"groups",x.id):gt(Se,"friendships",fe.id),Fe={id:ge.id,text:ge.text,senderName:ge.senderName};await Mt(ze,{pinnedMessage:Fe})},eo=async()=>{const ge=te&&x.admins.includes(n.uid);if(te&&!ge)return;const Ie=te?gt(Se,"groups",x.id):gt(Se,"friendships",fe.id);await Mt(Ie,{pinnedMessage:null})},On=ge=>{U(ge),c(ge.text),M(null)},Pl=()=>{U(null),c("")},Ii=!te&&fe?.blockedBy?.includes(n.uid),Ni=!te&&fe?.blockedBy?.includes(e.uid),pi=te?x.name:N?.displayName,Vl=te?x.photoColor?"":x.photoURL:e.photoURL;return b.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[b.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md flex-shrink-0",children:[b.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:b.jsx(DC,{size:24})}),b.jsxs("div",{className:"flex items-center cursor-pointer flex-grow min-w-0",onClick:()=>te?w(!0):y(!0),children:[te?b.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold mr-4",style:{backgroundColor:x.photoColor||"#7c3aed"},children:pi?.charAt(0).toUpperCase()}):b.jsx("img",{src:Vl,alt:pi,className:"w-10 h-10 rounded-full mr-4 flex-shrink-0"}),b.jsxs("div",{className:"min-w-0",children:[b.jsx("h2",{className:"text-xl font-bold text-white truncate",children:pi}),b.jsx("p",{className:"text-sm text-blue-300 h-4",children:te?`${x.members?.length||0} membros`:d?"Digitando...":N?.presence==="online"?"Online":Ce(N?.last_changed)})]})]}),b.jsxs("div",{className:"relative",children:[b.jsx("button",{onClick:()=>_e(ge=>!ge),className:"p-2 text-gray-400 hover:text-white",children:b.jsx(kC,{})}),ue&&b.jsxs("div",{className:"absolute top-full right-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:[te?b.jsxs("button",{onClick:()=>{w(!0),_e(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[b.jsx(_d,{size:14})," Perfil do Grupo"]}):b.jsxs(b.Fragment,{children:[b.jsxs("button",{onClick:()=>{P(!0),_e(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[b.jsx(fv,{size:14})," Alterar nome do contato"]}),b.jsxs("button",{onClick:()=>{C(!0),_e(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[b.jsx(n6,{size:14})," Alterar tema da conversa"]})]}),b.jsxs("button",{onClick:()=>{me(!0),_e(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[b.jsx(GV,{size:14})," Limpar conversa"]}),!te&&b.jsxs("button",{onClick:rs,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[b.jsx(MC,{size:14})," ",Ii?"Desbloquear":"Bloquear"]})]})]})]}),b.jsxs("main",{className:"flex-grow p-4 overflow-y-auto chat-main transition-all duration-500 flex flex-col-reverse",style:te?Me.default:Me[se],children:[b.jsx("div",{className:"space-y-2",children:s.slice().reverse().map(ge=>b.jsx(F6,{msg:ge,isCurrentUser:ge.senderId===n.uid,onReply:()=>M(ge),onDelete:Ie=>L({id:ge.id,type:Ie}),onEdit:()=>On(ge),onPin:()=>Yr(ge)},ge.id))}),Ee&&b.jsx("div",{className:"bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg mb-4 border border-blue-500/50 animate-fade-in w-full",children:b.jsxs("div",{className:"flex justify-between items-center",children:[b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center gap-2 text-blue-400 text-xs font-bold",children:[b.jsx(im,{size:12})," MENSAGEM FIXADA"]}),b.jsx("p",{className:"text-sm text-white truncate",children:Ee.text})]}),(te?x.admins.includes(n.uid):!0)&&b.jsx("button",{onClick:eo,className:"p-1 text-gray-400 hover:text-white",children:b.jsx(yd,{size:16})})]})})]}),b.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[(D||B)&&b.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative",children:[b.jsxs("div",{className:"flex justify-between items-center text-sm",children:[b.jsx("p",{className:"font-bold",children:B?"Editando mensagem":`Respondendo a ${D.senderId===n.uid?"Você":te?D.senderName:N?.displayName}`}),b.jsx("button",{onClick:B?Pl:()=>M(null),className:"p-1",children:b.jsx(yd,{size:16})})]}),b.jsx("p",{className:"text-xs text-gray-400 truncate",children:B?B.text:D.text})]}),b.jsxs("div",{className:"relative flex items-center gap-2",children:[ae&&b.jsx(B6,{onEmojiSelect:ge=>c(Ie=>Ie+ge),onClose:()=>re(!1)}),b.jsx("button",{type:"button",onClick:()=>re(ge=>!ge),className:"p-2 text-gray-400 hover:text-white",children:b.jsx(y6,{})}),b.jsxs("form",{onSubmit:B?Zn:lt,className:"flex-grow flex items-center gap-2",children:[b.jsx("input",{type:"text",value:l,onChange:Lt,placeholder:Ii?"Você bloqueou este contato.":Ni?"Você não pode responder a esta conversa":"Digite sua mensagem...",disabled:Ni||Ii,className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"}),b.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim()||Ni||Ii,children:B?b.jsx(lv,{size:20}):b.jsx(f6,{size:20})})]})]})]}),g&&b.jsx(M6,{user:e,onClose:()=>y(!1)}),T&&b.jsx(Q6,{groupData:x,currentUser:n,onClose:()=>w(!1),onLeaveChat:t,friendships:Ke}),k&&b.jsx(q6,{onClose:()=>C(!1),onSelectTheme:as,currentTheme:se}),R&&b.jsx(H6,{onClose:()=>P(!1),onSave:os,currentName:N?.displayName}),b.jsx(bl,{isOpen:ce,onClose:()=>me(!1),onConfirm:mi,title:"Limpar Conversa?",message:"Isso irá apagar todas as mensagens desta conversa apenas para você. Esta ação não pode ser desfeita."}),b.jsx(bl,{isOpen:!!V,onClose:()=>L(null),onConfirm:Ri,title:"Apagar Mensagem?",message:`Você tem certeza que quer apagar esta mensagem ${V?.type==="all"?"para todos":"para você"}?`})]})},Y6=({currentUser:n,onClose:e,friendships:t})=>{const[s,a]=J.useState(""),[l,c]=J.useState([n.uid]),[d,p]=J.useState(""),g=T=>{c(w=>w.includes(T)?w.filter(D=>D!==T):[...w,T])},y=async()=>{if(!s.trim()){p("O nome do grupo é obrigatório.");return}if(l.length<2){p("Selecione pelo menos um amigo para criar um grupo.");return}try{await Cy(Pt(Se,"groups"),{name:s.trim(),description:"",members:l,admins:[n.uid],createdAt:_l(),createdBy:n.uid,photoColor:"#7c3aed",pinnedMessage:null}),e()}catch(T){console.error("Erro ao criar grupo:",T),p(`Erro: ${T.message}`)}};return b.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:b.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col",onClick:T=>T.stopPropagation(),children:[b.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Criar Novo Grupo"}),b.jsx("input",{type:"text",value:s,onChange:T=>a(T.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Nome do Grupo"}),b.jsx("h3",{className:"text-md font-semibold text-white mb-2",children:"Selecionar Membros"}),b.jsx("div",{className:"overflow-y-auto max-h-60 mb-4 pr-2",children:t.map(T=>b.jsx(OC,{friendship:T,onToggle:g,isSelected:l.includes(T.friendId)},T.id))}),d&&b.jsx("p",{className:"text-red-400 text-sm mb-4",children:d}),b.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[b.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),b.jsx("button",{onClick:y,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Criar Grupo"})]})]})})},OC=({friendship:n,onToggle:e,isSelected:t})=>{const s=sm(n.friendId,n);return s?b.jsxs("div",{onClick:()=>e(s.uid),className:`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${t?"bg-blue-900/50":"hover:bg-gray-700"}`,children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-10 h-10 rounded-full"}),b.jsx("span",{className:"text-white",children:s.displayName})]}),b.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center ${t?"bg-blue-500 border-blue-400":"border-gray-500"}`,children:t&&b.jsx(lv,{size:16,className:"text-white"})})]}):null},K6=({user:n,onLogout:e})=>{const[t,s]=J.useState(null),[a,l]=J.useState("chats"),[c,d]=J.useState("list"),[p,g]=J.useState(!1),[y,T]=J.useState(!1),[w,D]=J.useState([]),M=x6(n),B=R6(n);I6(B),J.useEffect(()=>{if(!n?.uid)return;const k=cn(Pt(Se,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),C=Mn(k,R=>{const P=R.docs.map(V=>({id:V.id,...V.data(),friendId:V.data().users.find(L=>L!==n.uid)}));D(P)});return()=>C()},[n.uid]),J.useEffect(()=>{t?(d("chat"),l("chats")):d("list")},[t]);const U=k=>{l(k),s(null)},ae=k=>{s(k)},re=()=>{s(null)},ue=({count:k})=>k===0?null:b.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:k}),_e=({count:k})=>k===0?null:b.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[b.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),b.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]}),ce=()=>{switch(a){case"chats":return b.jsx(Dg,{currentUser:n,onSelectUser:ae,onCreateGroup:()=>T(!0)});case"contacts":return b.jsx(j6,{currentUser:n,onSelectUser:ae});case"add":return b.jsx(P6,{currentUser:n});case"requests":return b.jsx(V6,{currentUser:n});case"game":return b.jsx(Dg,{currentUser:n,onSelectUser:ae,onCreateGroup:()=>T(!0)});default:return b.jsx(Dg,{currentUser:n,onSelectUser:ae,onCreateGroup:()=>T(!0)})}},me=()=>t?b.jsx(K1,{currentUser:n,otherUser:t,onLeave:re}):a==="game"?b.jsx($1,{}):b.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[b.jsx(cv,{size:60,className:"mb-4"}),b.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione uma conversa"}),b.jsx("p",{children:"Ou experimente os jogos na aba de controle!"})]});return b.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[p&&b.jsx(O6,{user:n,onClose:()=>g(!1)}),y&&b.jsx(Y6,{currentUser:n,onClose:()=>T(!1),friendships:w}),b.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[b.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[b.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[b.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),b.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),b.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:b.jsx(Q1,{size:20})})]}),b.jsxs("div",{className:"flex border-b border-gray-700/50",children:[b.jsxs("button",{onClick:()=>U("chats"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="chats"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[b.jsx(Y1,{className:"mx-auto"}),b.jsx(_e,{count:B})]}),b.jsx("button",{onClick:()=>U("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:b.jsx(_d,{className:"mx-auto"})}),b.jsx("button",{onClick:()=>U("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:b.jsx(E_,{className:"mx-auto"})}),b.jsxs("button",{onClick:()=>U("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[b.jsx(G1,{className:"mx-auto"}),b.jsx(ue,{count:M})]}),b.jsx("button",{onClick:()=>U("game"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="game"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:b.jsx(v_,{className:"mx-auto"})})]}),b.jsx("div",{className:"flex-grow overflow-y-auto",children:ce()})]}),b.jsxs("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:[b.jsxs("div",{className:`flex-col h-full ${c==="list"?"flex":"hidden"}`,children:[b.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[b.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[b.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),b.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),b.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:b.jsx(Q1,{size:20})})]}),b.jsx("div",{className:"flex-grow overflow-y-auto",children:a==="game"?b.jsx($1,{}):ce()}),b.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[b.jsxs("button",{onClick:()=>U("chats"),className:`relative p-3 rounded-lg ${a==="chats"?"text-blue-500":"text-gray-400"}`,children:[b.jsx(Y1,{}),b.jsx(_e,{count:B})]}),b.jsx("button",{onClick:()=>U("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:b.jsx(_d,{})}),b.jsx("button",{onClick:()=>U("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:b.jsx(E_,{})}),b.jsxs("button",{onClick:()=>U("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[b.jsx(G1,{}),b.jsx(ue,{count:M})]}),b.jsx("button",{onClick:()=>U("game"),className:`relative p-3 rounded-lg ${a==="game"?"text-blue-500":"text-gray-400"}`,children:b.jsx(v_,{})})]})]}),c==="chat"&&t&&b.jsx(K1,{currentUser:n,otherUser:t,onLeave:re})]}),b.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:me()})]})},$1=()=>{const[n,e]=J.useState(null),t=[{id:"tictactoe",name:"Jogo da Velha",component:b.jsx($6,{})},{id:"rps",name:"Jokempô",component:b.jsx(X6,{})},{id:"breakout",name:"Break Bricks",component:b.jsx(W6,{})},{id:"snake",name:"Snake",component:b.jsx(Z6,{})},{id:"pong",name:"Pong",component:b.jsx(J6,{})},{id:"flappy",name:"Flappy Bird",component:b.jsx(e3,{})}];if(n){const s=t.find(a=>a.id===n);return b.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-800",children:[b.jsx("header",{className:"p-2 bg-gray-900 flex items-center flex-shrink-0",children:b.jsxs("button",{onClick:()=>e(null),className:"flex items-center gap-2 px-3 py-1.5 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm",children:[b.jsx(DC,{size:16})," Voltar para os Jogos"]})}),b.jsx("div",{className:"flex-grow flex items-center justify-center overflow-hidden p-2",children:s.component})]})}return b.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 bg-gray-800",children:[b.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-8 text-white",children:"Jogos"}),b.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl",children:t.map(s=>b.jsxs("button",{onClick:()=>e(s.id),className:"p-6 bg-gray-700 rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center aspect-square",children:[b.jsx(v_,{size:48,className:"mb-4 text-blue-400"}),b.jsx("span",{className:"text-lg font-semibold text-white text-center",children:s.name})]},s.id))})]})},$6=()=>{const[n,e]=J.useState(Array(9).fill(null)),[t,s]=J.useState(!0),l=(w=>{const D=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let M=0;M<D.length;M++){const[B,U,ae]=D[M];if(w[B]&&w[B]===w[U]&&w[B]===w[ae])return w[B]}return null})(n),c=!l&&n.every(w=>w!==null),d=w=>{if(l||n[w])return;const D=n.slice();D[w]=t?"X":"O",e(D),s(!t)},p=()=>{e(Array(9).fill(null)),s(!0)},g=({className:w})=>b.jsx("div",{className:`w-12 h-12 rounded-full border-8 ${w}`}),y=w=>b.jsx("button",{onClick:()=>d(w),className:"w-20 h-20 sm:w-24 sm:h-24 bg-gray-700 rounded-lg text-4xl sm:text-5xl font-bold flex items-center justify-center transition-colors hover:bg-gray-600",children:n[w]==="X"?b.jsx(yd,{className:"text-blue-400",size:48}):n[w]==="O"?b.jsx(g,{className:"text-pink-400 border-pink-400"}):null});let T;return l?T=`Vencedor: ${l}`:c?T="Empate!":T=`Próximo jogador: ${t?"X":"O"}`,b.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[b.jsx("h3",{className:"text-2xl font-bold mb-4",children:T}),b.jsx("div",{className:"grid grid-cols-3 gap-2 mb-4",children:Array(9).fill(null).map((w,D)=>y(D))}),b.jsxs("button",{onClick:p,className:"flex items-center gap-2 mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",children:[b.jsx(hv,{size:18})," Reiniciar"]})]})},X6=()=>{const[n,e]=J.useState(null),[t,s]=J.useState(null),[a,l]=J.useState(""),c=["rock","paper","scissors"],d={rock:b.jsx(KV,{size:48}),paper:b.jsx(e6,{size:48}),scissors:b.jsx(c6,{size:48})},p=y=>{const T=c[Math.floor(Math.random()*c.length)];e(y),s(T),l(y===T?"Empate!":y==="rock"&&T==="scissors"||y==="scissors"&&T==="paper"||y==="paper"&&T==="rock"?"Você Venceu!":"Você Perdeu!")},g=()=>{e(null),s(null),l("")};return b.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[b.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Jokempô"}),b.jsx("div",{className:"flex gap-4 sm:gap-8 mb-6",children:c.map(y=>b.jsx("button",{onClick:()=>p(y),className:"p-4 bg-gray-700 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-110",children:d[y]},y))}),n&&b.jsxs("div",{className:"text-center animate-fade-in",children:[b.jsxs("div",{className:"flex items-center justify-center gap-8 text-lg mb-4",children:[b.jsxs("div",{className:"flex flex-col items-center",children:[b.jsx("span",{children:"Você"}),d[n]]}),b.jsx("span",{className:"text-2xl",children:"vs"}),b.jsxs("div",{className:"flex flex-col items-center",children:[b.jsx("span",{children:"PC"}),d[t]]})]}),b.jsx("h3",{className:"text-2xl font-bold",children:a})]}),b.jsxs("button",{onClick:g,className:"flex items-center gap-2 mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",children:[b.jsx(hv,{size:18})," Jogar Novamente"]})]})},W6=()=>{const n=J.useRef(null),[e,t]=J.useState({score:0,lives:3,level:1,isOver:!1,message:""}),s=J.useCallback(()=>{const l=n.current;if(!l)return;const c=l.getContext("2d");if(!c)return;const d=l.parentElement;l.width=d.clientWidth,l.height=d.clientHeight;let p=0,g=3;const y=Math.min(l.width,l.height)*.02;let T=l.width/2,w=l.height-30,D=4,M=-4;const B=10,U=l.width*.2;let ae=(l.width-U)/2;const re=5,ue=7,_e=10,ce=30,me=30,k=(l.width-2*me-(ue-1)*_e)/ue,C=20,R=[],P=["#0284c7","#f97316","#16a34a","#db2777","#ca8a04"];for(let fe=0;fe<ue;fe++){R[fe]=[];for(let N=0;N<re;N++)R[fe][N]={x:0,y:0,status:1,color:P[N%P.length]}}const V=()=>{T=l.width/2,w=l.height-30,D=4*(Math.random()>.5?1:-1),M=-4,ae=(l.width-U)/2},L=()=>{for(let fe=0;fe<ue;fe++)for(let N=0;N<re;N++){const X=R[fe][N];X.status===1&&T>X.x&&T<X.x+k&&w>X.y&&w<X.y+C&&(M=-M,X.status=0,p++,t(ie=>({...ie,score:ie.score+1})),p===re*ue&&t(ie=>({...ie,isOver:!0,message:"VOCÊ VENCEU!"})))}},x=()=>{c.beginPath(),c.arc(T,w,y,0,Math.PI*2),c.fillStyle="#FFFFFF",c.fill(),c.closePath()},ye=()=>{c.beginPath(),c.rect(ae,l.height-B,U,B),c.fillStyle="#38bdf8",c.fill(),c.closePath()},Ke=()=>{for(let fe=0;fe<ue;fe++)for(let N=0;N<re;N++)if(R[fe][N].status===1){const X=fe*(k+_e)+me,ie=N*(C+_e)+ce;R[fe][N].x=X,R[fe][N].y=ie,c.beginPath(),c.rect(X,ie,k,C),c.fillStyle=R[fe][N].color,c.fill(),c.closePath()}},Y=()=>{c.font="16px Arial",c.fillStyle="#FFFFFF",c.fillText("Pontos: "+p,8,20),c.fillText("Vidas: "+g,l.width-65,20)};let ne;const te=()=>{if(c.clearRect(0,0,l.width,l.height),Ke(),x(),ye(),Y(),L(),(T+D>l.width-y||T+D<y)&&(D=-D),w+M<y)M=-M;else if(w+M>l.height-y)if(T>ae&&T<ae+U)M=-M;else if(g--,t(fe=>({...fe,lives:fe.lives-1})),g)V();else{t(fe=>({...fe,isOver:!0,message:"GAME OVER"})),cancelAnimationFrame(ne);return}T+=D,w+=M,ne=requestAnimationFrame(te)};return te(),()=>{cancelAnimationFrame(ne)}},[]),a=()=>{t({score:0,lives:3,level:1,isOver:!1,message:""}),s()};return J.useEffect(()=>{const l=n.current;if(!l)return;const c=s(),d=T=>{T.key==="Right"||T.key==="ArrowRight"||T.key==="Left"||T.key},p=T=>{T.key==="Right"||T.key==="ArrowRight"||T.key==="Left"||T.key},g=T=>{const w=T.clientX-l.offsetLeft;w>0&&w<l.width},y=T=>{const w=T.touches[0].clientX-l.offsetLeft;w>0&&w<l.width};return(l.width-l.width*.2)/2,l.width*.2,document.addEventListener("keydown",d,!1),document.addEventListener("keyup",p,!1),l.addEventListener("mousemove",g,!1),l.addEventListener("touchmove",y,!1),()=>{c&&c(),document.removeEventListener("keydown",d),document.removeEventListener("keyup",p),l.removeEventListener("mousemove",g),l.removeEventListener("touchmove",y)}},[s,e.isOver]),b.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center relative",children:[e.isOver&&b.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10",children:[b.jsx("h2",{className:"text-4xl font-bold mb-4",children:e.message}),b.jsxs("p",{className:"text-xl mb-6",children:["Pontuação Final: ",e.score]}),b.jsxs("button",{onClick:a,className:"flex items-center gap-2 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",children:[b.jsx(hv,{size:18})," Jogar Novamente"]})]}),b.jsx("canvas",{ref:n,className:"bg-gray-900 rounded-lg w-full h-full"})]})},Z6=()=>b.jsx("div",{className:"flex items-center justify-center h-full text-white",children:b.jsx("p",{children:"Snake em breve!"})}),J6=()=>b.jsx("div",{className:"flex items-center justify-center h-full text-white",children:b.jsx("p",{children:"Pong em breve!"})}),e3=()=>b.jsx("div",{className:"flex items-center justify-center h-full text-white",children:b.jsx("p",{children:"Flappy Bird em breve!"})});function t3(){return b.jsxs(b.Fragment,{children:[b.jsx("style",{children:`
                .emoji-picker-header::-webkit-scrollbar, .chat-main::-webkit-scrollbar, .emoji-picker .overflow-y-auto::-webkit-scrollbar, .overflow-y-auto::-webkit-scrollbar {
                    display: none;
                }
                .emoji-picker-header, .chat-main, .emoji-picker .overflow-y-auto, .overflow-y-auto {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}),b.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:b.jsx(n3,{})})]})}const n3=()=>{const[n,e]=J.useState(null),[t,s]=J.useState(!0);C6(n),J.useEffect(()=>{const l=FN(vd,async c=>{if(c){const d=gt(Se,"users",c.uid),p=await vc(d);if(p.exists())e({...c,...p.data()});else{const g={uid:c.uid,displayName:c.displayName,email:c.email,photoURL:c.photoURL,recado:"Olá! Estou usando o ChatD."};await vA(d,g),e({...c,...g})}}else e(null);s(!1)});return()=>l()},[]);const a=async()=>{if(n)try{const l=ja(Ua,`/status/${n.uid}`);await nm(l,{state:"offline",last_changed:Date.now()}),await Mt(gt(Se,`/users/${n.uid}`),{state:"offline",last_changed:_l()}),await BN(vd),e(null)}catch(l){console.error("Erro ao fazer logout:",l)}};return t?b.jsx(D6,{}):n?b.jsx(K6,{user:n,onLogout:a}):b.jsx(k6,{})};mR.createRoot(document.getElementById("root")).render(b.jsx(J.StrictMode,{children:b.jsx(t3,{})}));
