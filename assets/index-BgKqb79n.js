(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Yp={exports:{}},Mu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oT;function $R(){if(oT)return Mu;oT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Mu.Fragment=e,Mu.jsx=t,Mu.jsxs=t,Mu}var lT;function WR(){return lT||(lT=1,Yp.exports=$R()),Yp.exports}var I=WR(),Kp={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uT;function ZR(){if(uT)return Re;uT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,Q={};function G(D,ee,ie){this.props=D,this.context=ee,this.refs=Q,this.updater=ie||x}G.prototype.isReactComponent={},G.prototype.setState=function(D,ee){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ee,"setState")},G.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ge(){}ge.prototype=G.prototype;function ue(D,ee,ie){this.props=D,this.context=ee,this.refs=Q,this.updater=ie||x}var he=ue.prototype=new ge;he.constructor=ue,j(he,G.prototype),he.isPureReactComponent=!0;var Ve=Array.isArray,ye={H:null,A:null,T:null,S:null,V:null},Le=Object.prototype.hasOwnProperty;function P(D,ee,ie,Y,re,_e){return ie=_e.ref,{$$typeof:n,type:D,key:ee,ref:ie!==void 0?ie:null,props:_e}}function A(D,ee){return P(D.type,ee,void 0,void 0,void 0,D.props)}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function M(D){var ee={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ie){return ee[ie]})}var k=/\/+/g;function V(D,ee){return typeof D=="object"&&D!==null&&D.key!=null?M(""+D.key):ee.toString(36)}function N(){}function Ut(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(N,N):(D.status="pending",D.then(function(ee){D.status==="pending"&&(D.status="fulfilled",D.value=ee)},function(ee){D.status==="pending"&&(D.status="rejected",D.reason=ee)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function dt(D,ee,ie,Y,re){var _e=typeof D;(_e==="undefined"||_e==="boolean")&&(D=null);var me=!1;if(D===null)me=!0;else switch(_e){case"bigint":case"string":case"number":me=!0;break;case"object":switch(D.$$typeof){case n:case e:me=!0;break;case v:return me=D._init,dt(me(D._payload),ee,ie,Y,re)}}if(me)return re=re(D),me=Y===""?"."+V(D,0):Y,Ve(re)?(ie="",me!=null&&(ie=me.replace(k,"$&/")+"/"),dt(re,ee,ie,"",function(jt){return jt})):re!=null&&(C(re)&&(re=A(re,ie+(re.key==null||D&&D.key===re.key?"":(""+re.key).replace(k,"$&/")+"/")+me)),ee.push(re)),1;me=0;var It=Y===""?".":Y+":";if(Ve(D))for(var We=0;We<D.length;We++)Y=D[We],_e=It+V(Y,We),me+=dt(Y,ee,ie,_e,re);else if(We=S(D),typeof We=="function")for(D=We.call(D),We=0;!(Y=D.next()).done;)Y=Y.value,_e=It+V(Y,We++),me+=dt(Y,ee,ie,_e,re);else if(_e==="object"){if(typeof D.then=="function")return dt(Ut(D),ee,ie,Y,re);throw ee=String(D),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return me}function K(D,ee,ie){if(D==null)return D;var Y=[],re=0;return dt(D,Y,"","",function(_e){return ee.call(ie,_e,re++)}),Y}function se(D){if(D._status===-1){var ee=D._result;ee=ee(),ee.then(function(ie){(D._status===0||D._status===-1)&&(D._status=1,D._result=ie)},function(ie){(D._status===0||D._status===-1)&&(D._status=2,D._result=ie)}),D._status===-1&&(D._status=0,D._result=ee)}if(D._status===1)return D._result.default;throw D._result}var fe=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function He(){}return Re.Children={map:K,forEach:function(D,ee,ie){K(D,function(){ee.apply(this,arguments)},ie)},count:function(D){var ee=0;return K(D,function(){ee++}),ee},toArray:function(D){return K(D,function(ee){return ee})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Re.Component=G,Re.Fragment=t,Re.Profiler=a,Re.PureComponent=ue,Re.StrictMode=s,Re.Suspense=p,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ye,Re.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ye.H.useMemoCache(D)}},Re.cache=function(D){return function(){return D.apply(null,arguments)}},Re.cloneElement=function(D,ee,ie){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Y=j({},D.props),re=D.key,_e=void 0;if(ee!=null)for(me in ee.ref!==void 0&&(_e=void 0),ee.key!==void 0&&(re=""+ee.key),ee)!Le.call(ee,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&ee.ref===void 0||(Y[me]=ee[me]);var me=arguments.length-2;if(me===1)Y.children=ie;else if(1<me){for(var It=Array(me),We=0;We<me;We++)It[We]=arguments[We+2];Y.children=It}return P(D.type,re,void 0,void 0,_e,Y)},Re.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},Re.createElement=function(D,ee,ie){var Y,re={},_e=null;if(ee!=null)for(Y in ee.key!==void 0&&(_e=""+ee.key),ee)Le.call(ee,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(re[Y]=ee[Y]);var me=arguments.length-2;if(me===1)re.children=ie;else if(1<me){for(var It=Array(me),We=0;We<me;We++)It[We]=arguments[We+2];re.children=It}if(D&&D.defaultProps)for(Y in me=D.defaultProps,me)re[Y]===void 0&&(re[Y]=me[Y]);return P(D,_e,void 0,void 0,null,re)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(D){return{$$typeof:d,render:D}},Re.isValidElement=C,Re.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:se}},Re.memo=function(D,ee){return{$$typeof:g,type:D,compare:ee===void 0?null:ee}},Re.startTransition=function(D){var ee=ye.T,ie={};ye.T=ie;try{var Y=D(),re=ye.S;re!==null&&re(ie,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(He,fe)}catch(_e){fe(_e)}finally{ye.T=ee}},Re.unstable_useCacheRefresh=function(){return ye.H.useCacheRefresh()},Re.use=function(D){return ye.H.use(D)},Re.useActionState=function(D,ee,ie){return ye.H.useActionState(D,ee,ie)},Re.useCallback=function(D,ee){return ye.H.useCallback(D,ee)},Re.useContext=function(D){return ye.H.useContext(D)},Re.useDebugValue=function(){},Re.useDeferredValue=function(D,ee){return ye.H.useDeferredValue(D,ee)},Re.useEffect=function(D,ee,ie){var Y=ye.H;if(typeof ie=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Y.useEffect(D,ee)},Re.useId=function(){return ye.H.useId()},Re.useImperativeHandle=function(D,ee,ie){return ye.H.useImperativeHandle(D,ee,ie)},Re.useInsertionEffect=function(D,ee){return ye.H.useInsertionEffect(D,ee)},Re.useLayoutEffect=function(D,ee){return ye.H.useLayoutEffect(D,ee)},Re.useMemo=function(D,ee){return ye.H.useMemo(D,ee)},Re.useOptimistic=function(D,ee){return ye.H.useOptimistic(D,ee)},Re.useReducer=function(D,ee,ie){return ye.H.useReducer(D,ee,ie)},Re.useRef=function(D){return ye.H.useRef(D)},Re.useState=function(D){return ye.H.useState(D)},Re.useSyncExternalStore=function(D,ee,ie){return ye.H.useSyncExternalStore(D,ee,ie)},Re.useTransition=function(){return ye.H.useTransition()},Re.version="19.1.1",Re}var cT;function l_(){return cT||(cT=1,Kp.exports=ZR()),Kp.exports}var oe=l_(),Xp={exports:{}},ku={},$p={exports:{}},Wp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hT;function JR(){return hT||(hT=1,(function(n){function e(K,se){var fe=K.length;K.push(se);e:for(;0<fe;){var He=fe-1>>>1,D=K[He];if(0<a(D,se))K[He]=se,K[fe]=D,fe=He;else break e}}function t(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var se=K[0],fe=K.pop();if(fe!==se){K[0]=fe;e:for(var He=0,D=K.length,ee=D>>>1;He<ee;){var ie=2*(He+1)-1,Y=K[ie],re=ie+1,_e=K[re];if(0>a(Y,fe))re<D&&0>a(_e,Y)?(K[He]=_e,K[re]=fe,He=re):(K[He]=Y,K[ie]=fe,He=ie);else if(re<D&&0>a(_e,fe))K[He]=_e,K[re]=fe,He=re;else break e}}return se}function a(K,se){var fe=K.sortIndex-se.sortIndex;return fe!==0?fe:K.id-se.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,T=null,S=3,x=!1,j=!1,Q=!1,G=!1,ge=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;function Ve(K){for(var se=t(g);se!==null;){if(se.callback===null)s(g);else if(se.startTime<=K)s(g),se.sortIndex=se.expirationTime,e(p,se);else break;se=t(g)}}function ye(K){if(Q=!1,Ve(K),!j)if(t(p)!==null)j=!0,Le||(Le=!0,V());else{var se=t(g);se!==null&&dt(ye,se.startTime-K)}}var Le=!1,P=-1,A=5,C=-1;function M(){return G?!0:!(n.unstable_now()-C<A)}function k(){if(G=!1,Le){var K=n.unstable_now();C=K;var se=!0;try{e:{j=!1,Q&&(Q=!1,ue(P),P=-1),x=!0;var fe=S;try{t:{for(Ve(K),T=t(p);T!==null&&!(T.expirationTime>K&&M());){var He=T.callback;if(typeof He=="function"){T.callback=null,S=T.priorityLevel;var D=He(T.expirationTime<=K);if(K=n.unstable_now(),typeof D=="function"){T.callback=D,Ve(K),se=!0;break t}T===t(p)&&s(p),Ve(K)}else s(p);T=t(p)}if(T!==null)se=!0;else{var ee=t(g);ee!==null&&dt(ye,ee.startTime-K),se=!1}}break e}finally{T=null,S=fe,x=!1}se=void 0}}finally{se?V():Le=!1}}}var V;if(typeof he=="function")V=function(){he(k)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,Ut=N.port2;N.port1.onmessage=k,V=function(){Ut.postMessage(null)}}else V=function(){ge(k,0)};function dt(K,se){P=ge(function(){K(n.unstable_now())},se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(K){switch(S){case 1:case 2:case 3:var se=3;break;default:se=S}var fe=S;S=se;try{return K()}finally{S=fe}},n.unstable_requestPaint=function(){G=!0},n.unstable_runWithPriority=function(K,se){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var fe=S;S=K;try{return se()}finally{S=fe}},n.unstable_scheduleCallback=function(K,se,fe){var He=n.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?He+fe:He):fe=He,K){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=fe+D,K={id:v++,callback:se,priorityLevel:K,startTime:fe,expirationTime:D,sortIndex:-1},fe>He?(K.sortIndex=fe,e(g,K),t(p)===null&&K===t(g)&&(Q?(ue(P),P=-1):Q=!0,dt(ye,fe-He))):(K.sortIndex=D,e(p,K),j||x||(j=!0,Le||(Le=!0,V()))),K},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(K){var se=S;return function(){var fe=S;S=se;try{return K.apply(this,arguments)}finally{S=fe}}}})(Wp)),Wp}var fT;function eI(){return fT||(fT=1,$p.exports=JR()),$p.exports}var Zp={exports:{}},dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dT;function tI(){if(dT)return dn;dT=1;var n=l_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:v}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,dn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},dn.flushSync=function(p){var g=c.T,v=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=v,s.d.f()}},dn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},dn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},dn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:x}):v==="script"&&s.d.X(p,{crossOrigin:T,integrity:S,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},dn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},dn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin);s.d.L(p,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},dn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},dn.requestFormReset=function(p){s.d.r(p)},dn.unstable_batchedUpdates=function(p,g){return p(g)},dn.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},dn.useFormStatus=function(){return c.H.useHostTransitionStatus()},dn.version="19.1.1",dn}var mT;function nI(){if(mT)return Zp.exports;mT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Zp.exports=tI(),Zp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pT;function iI(){if(pT)return ku;pT=1;var n=eI(),e=l_(),t=nI();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,w=f.child;w;){if(w===o){E=!0,o=f,u=m;break}if(w===u){E=!0,u=f,o=m;break}w=w.sibling}if(!E){for(w=m.child;w;){if(w===o){E=!0,o=m,u=f;break}if(w===u){E=!0,u=m,o=f;break}w=w.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var v=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),ue=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Ve=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function V(i){return i===null||typeof i!="object"?null:(i=k&&i[k]||i["@@iterator"],typeof i=="function"?i:null)}var N=Symbol.for("react.client.reference");function Ut(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===N?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case j:return"Fragment";case G:return"Profiler";case Q:return"StrictMode";case ye:return"Suspense";case Le:return"SuspenseList";case C:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case x:return"Portal";case he:return(i.displayName||"Context")+".Provider";case ue:return(i._context.displayName||"Context")+".Consumer";case Ve:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case P:return r=i.displayName||null,r!==null?r:Ut(i.type)||"Memo";case A:r=i._payload,i=i._init;try{return Ut(i(r))}catch{}}return null}var dt=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},He=[],D=-1;function ee(i){return{current:i}}function ie(i){0>D||(i.current=He[D],He[D]=null,D--)}function Y(i,r){D++,He[D]=i.current,i.current=r}var re=ee(null),_e=ee(null),me=ee(null),It=ee(null);function We(i,r){switch(Y(me,r),Y(_e,i),Y(re,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?P0(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=P0(r),i=V0(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ie(re),Y(re,i)}function jt(){ie(re),ie(_e),ie(me)}function Us(i){i.memoizedState!==null&&Y(It,i);var r=re.current,o=V0(r,i.type);r!==o&&(Y(_e,i),Y(re,o))}function Xi(i){_e.current===i&&(ie(re),ie(_e)),It.current===i&&(ie(It),Iu._currentValue=fe)}var Ur=Object.prototype.hasOwnProperty,jr=n.unstable_scheduleCallback,zr=n.unstable_cancelCallback,Al=n.unstable_shouldYield,Pc=n.unstable_requestPaint,Yn=n.unstable_now,Yd=n.unstable_getCurrentPriorityLevel,Cl=n.unstable_ImmediatePriority,Qa=n.unstable_UserBlockingPriority,qr=n.unstable_NormalPriority,Kd=n.unstable_LowPriority,Ya=n.unstable_IdlePriority,Rl=n.log,Vc=n.unstable_setDisableYieldValue,yt=null,Ze=null;function kn(i){if(typeof Rl=="function"&&Vc(i),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(yt,i)}catch{}}var hn=Math.clz32?Math.clz32:Br,Lc=Math.log,Xd=Math.LN2;function Br(i){return i>>>=0,i===0?32:31-(Lc(i)/Xd|0)|0}var Fr=256,Hr=4194304;function ui(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Ka(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var w=u&134217727;return w!==0?(u=w&~m,u!==0?f=ui(u):(E&=w,E!==0?f=ui(E):o||(o=w&~i,o!==0&&(f=ui(o))))):(w=u&~m,w!==0?f=ui(w):E!==0?f=ui(E):o||(o=u&~i,o!==0&&(f=ui(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Gr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Il(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nl(){var i=Fr;return Fr<<=1,(Fr&4194048)===0&&(Fr=256),i}function xl(){var i=Hr;return Hr<<=1,(Hr&62914560)===0&&(Hr=4194304),i}function $i(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Wi(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Dl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var w=i.entanglements,R=i.expirationTimes,q=i.hiddenUpdates;for(o=E&~o;0<o;){var X=31-hn(o),Z=1<<X;w[X]=0,R[X]=-1;var B=q[X];if(B!==null)for(q[X]=null,X=0;X<B.length;X++){var F=B[X];F!==null&&(F.lane&=-536870913)}o&=~Z}u!==0&&Si(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function Si(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-hn(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Ol(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-hn(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function js(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Xa(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function zs(){var i=se.p;return i!==0?i:(i=window.event,i===void 0?32:tT(i.type))}function Uc(i,r){var o=se.p;try{return se.p=i,r()}finally{se.p=o}}var mt=Math.random().toString(36).slice(2),zt="__reactFiber$"+mt,Nt="__reactProps$"+mt,Kn="__reactContainer$"+mt,Ml="__reactEvents$"+mt,$d="__reactListeners$"+mt,qs="__reactHandles$"+mt,jc="__reactResources$"+mt,Qr="__reactMarker$"+mt;function Bs(i){delete i[zt],delete i[Nt],delete i[Ml],delete i[$d],delete i[qs]}function Zi(i){var r=i[zt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Kn]||o[zt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=z0(i);i!==null;){if(o=i[zt])return o;i=z0(i)}return r}i=o,o=i.parentNode}return null}function wi(i){if(i=i[zt]||i[Kn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function bi(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function vn(i){var r=i[jc];return r||(r=i[jc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function St(i){i[Qr]=!0}var kl=new Set,$a={};function ci(i,r){Ji(i,r),Ji(i+"Capture",r)}function Ji(i,r){for($a[i]=r,i=0;i<r.length;i++)kl.add(r[i])}var zc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qc={},Yr={};function Bc(i){return Ur.call(Yr,i)?!0:Ur.call(qc,i)?!1:zc.test(i)?Yr[i]=!0:(qc[i]=!0,!1)}function Fs(i,r,o){if(Bc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Ai(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function nn(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var Kr,Fc;function es(i){if(Kr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Kr=r&&r[1]||"",Fc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kr+i+Fc}var Wa=!1;function Za(i,r){if(!i||Wa)return"";Wa=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(F){var B=F}Reflect.construct(i,[],Z)}else{try{Z.call()}catch(F){B=F}i.call(Z.prototype)}}else{try{throw Error()}catch(F){B=F}(Z=i())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(F){if(F&&B&&typeof F.stack=="string")return[F.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],w=m[1];if(E&&w){var R=E.split(`
`),q=w.split(`
`);for(f=u=0;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(u===R.length||f===q.length)for(u=R.length-1,f=q.length-1;1<=u&&0<=f&&R[u]!==q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(R[u]!==q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||R[u]!==q[f]){var X=`
`+R[u].replace(" at new "," at ");return i.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",i.displayName)),X}while(1<=u&&0<=f);break}}}finally{Wa=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?es(o):""}function Pl(i){switch(i.tag){case 26:case 27:case 5:return es(i.type);case 16:return es("Lazy");case 13:return es("Suspense");case 19:return es("SuspenseList");case 0:case 15:return Za(i.type,!1);case 11:return Za(i.type.render,!1);case 1:return Za(i.type,!0);case 31:return es("Activity");default:return""}}function Ja(i){try{var r="";do r+=Pl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function En(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Vl(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Wd(i){var r=Vl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function eo(i){i._valueTracker||(i._valueTracker=Wd(i))}function Ll(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=Vl(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Xr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Zd=/[\n"\\]/g;function xt(i){return i.replace(Zd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Pn(i,r,o,u,f,m,E,w){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+En(r)):i.value!==""+En(r)&&(i.value=""+En(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?Hs(i,E,En(r)):o!=null?Hs(i,E,En(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?i.name=""+En(w):i.removeAttribute("name")}function $r(i,r,o,u,f,m,E,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+En(o):"",r=r!=null?""+En(r):o,w||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=w?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function Hs(i,r,o){r==="number"&&Xr(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function ts(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+En(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function nt(i,r,o){if(r!=null&&(r=""+En(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+En(o):""}function Wr(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(dt(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=En(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function Xn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var Zr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||Zr.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Ul(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Hc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Hc(i,m,r[m])}function jl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),em=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function to(i){return em.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var ns=null;function $n(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var is=null,ss=null;function zl(i){var r=wi(i);if(r&&(i=r.stateNode)){var o=i[Nt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Pn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+xt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Nt]||null;if(!f)throw Error(s(90));Pn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Ll(u)}break e;case"textarea":nt(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&ts(i,!!o.multiple,r,!1)}}}var Ci=!1;function Gc(i,r,o){if(Ci)return i(r,o);Ci=!0;try{var u=i(r);return u}finally{if(Ci=!1,(is!==null||ss!==null)&&(Uh(),is&&(r=is,i=ss,ss=is=null,zl(r),i)))for(r=0;r<i.length;r++)zl(i[r])}}function Jr(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Nt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wn=!1;if(hi)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){Wn=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Wn=!1}var Ri=null,Gs=null,rs=null;function ql(){if(rs)return rs;var i,r=Gs,o=r.length,u,f="value"in Ri?Ri.value:Ri.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return rs=f.slice(i,1<u?1-u:void 0)}function Ii(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Ni(){return!0}function Bl(){return!1}function Yt(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var w in i)i.hasOwnProperty(w)&&(o=i[w],this[w]=o?o(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ni:Bl,this.isPropagationStopped=Bl,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),r}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=Yt(Ke),ta=v({},Ke,{view:0,detail:0}),Qc=Yt(ta),io,so,xi,na=v({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==xi&&(xi&&i.type==="mousemove"?(io=i.screenX-xi.screenX,so=i.screenY-xi.screenY):so=io=0,xi=i),io)},movementY:function(i){return"movementY"in i?i.movementY:so}}),Zn=Yt(na),Yc=v({},na,{dataTransfer:0}),tm=Yt(Yc),ia=v({},ta,{relatedTarget:0}),ro=Yt(ia),Fl=v({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),ao=Yt(Fl),Kc=v({},Ke,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),oo=Yt(Kc),nm=v({},Ke,{data:0}),Hl=Yt(nm),sa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$c={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=$c[i])?!!r[i]:!1}function ra(){return Gl}var Wc=v({},ta,{key:function(i){if(i.key){var r=sa[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Ii(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Xc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(i){return i.type==="keypress"?Ii(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ii(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),lo=Yt(Wc),Zc=v({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ql=Yt(Zc),as=v({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),Jc=Yt(as),eh=v({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),th=Yt(eh),nh=v({},na,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),uo=Yt(nh),Tn=v({},Ke,{newState:0,oldState:0}),ih=Yt(Tn),sh=[9,13,27,32],Di=hi&&"CompositionEvent"in window,h=null;hi&&"documentMode"in document&&(h=document.documentMode);var _=hi&&"TextEvent"in window&&!h,y=hi&&(!Di||h&&8<h&&11>=h),b=" ",U=!1;function H(i,r){switch(i){case"keyup":return sh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function te(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ze=!1;function qt(i,r){switch(i){case"compositionend":return te(r);case"keypress":return r.which!==32?null:(U=!0,b);case"textInput":return i=r.data,i===b&&U?null:i;default:return null}}function qe(i,r){if(ze)return i==="compositionend"||!Di&&H(i,r)?(i=ql(),rs=Gs=Ri=null,ze=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Kt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Kt[i.type]:r==="textarea"}function os(i,r,o,u){is?ss?ss.push(u):ss=[u]:is=u,r=Hh(r,"onChange"),0<r.length&&(o=new no("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var sn=null,Oi=null;function Yl(i){x0(i,0)}function rh(i){var r=bi(i);if(Ll(r))return i}function Wy(i,r){if(i==="change")return r}var Zy=!1;if(hi){var im;if(hi){var sm="oninput"in document;if(!sm){var Jy=document.createElement("div");Jy.setAttribute("oninput","return;"),sm=typeof Jy.oninput=="function"}im=sm}else im=!1;Zy=im&&(!document.documentMode||9<document.documentMode)}function ev(){sn&&(sn.detachEvent("onpropertychange",tv),Oi=sn=null)}function tv(i){if(i.propertyName==="value"&&rh(Oi)){var r=[];os(r,Oi,i,$n(i)),Gc(Yl,r)}}function CC(i,r,o){i==="focusin"?(ev(),sn=r,Oi=o,sn.attachEvent("onpropertychange",tv)):i==="focusout"&&ev()}function RC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return rh(Oi)}function IC(i,r){if(i==="click")return rh(r)}function NC(i,r){if(i==="input"||i==="change")return rh(r)}function xC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Vn=typeof Object.is=="function"?Object.is:xC;function Kl(i,r){if(Vn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Ur.call(r,f)||!Vn(i[f],r[f]))return!1}return!0}function nv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function iv(i,r){var o=nv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=nv(o)}}function sv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?sv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function rv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Xr(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Xr(i.document)}return r}function rm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var DC=hi&&"documentMode"in document&&11>=document.documentMode,co=null,am=null,Xl=null,om=!1;function av(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;om||co==null||co!==Xr(u)||(u=co,"selectionStart"in u&&rm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Xl&&Kl(Xl,u)||(Xl=u,u=Hh(am,"onSelect"),0<u.length&&(r=new no("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=co)))}function aa(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var ho={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionrun:aa("Transition","TransitionRun"),transitionstart:aa("Transition","TransitionStart"),transitioncancel:aa("Transition","TransitionCancel"),transitionend:aa("Transition","TransitionEnd")},lm={},ov={};hi&&(ov=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function oa(i){if(lm[i])return lm[i];if(!ho[i])return i;var r=ho[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in ov)return lm[i]=r[o];return i}var lv=oa("animationend"),uv=oa("animationiteration"),cv=oa("animationstart"),OC=oa("transitionrun"),MC=oa("transitionstart"),kC=oa("transitioncancel"),hv=oa("transitionend"),fv=new Map,um="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");um.push("scrollEnd");function fi(i,r){fv.set(i,r),ci(r,[i])}var dv=new WeakMap;function Jn(i,r){if(typeof i=="object"&&i!==null){var o=dv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:Ja(r)},dv.set(i,r),r)}return{value:i,source:r,stack:Ja(r)}}var ei=[],fo=0,cm=0;function ah(){for(var i=fo,r=cm=fo=0;r<i;){var o=ei[r];ei[r++]=null;var u=ei[r];ei[r++]=null;var f=ei[r];ei[r++]=null;var m=ei[r];if(ei[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&mv(o,f,m)}}function oh(i,r,o,u){ei[fo++]=i,ei[fo++]=r,ei[fo++]=o,ei[fo++]=u,cm|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function hm(i,r,o,u){return oh(i,r,o,u),lh(i)}function mo(i,r){return oh(i,null,null,r),lh(i)}function mv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-hn(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function lh(i){if(50<Eu)throw Eu=0,_p=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var po={};function PC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(i,r,o,u){return new PC(i,r,o,u)}function fm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ls(i,r){var o=i.alternate;return o===null?(o=Ln(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function pv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function uh(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")fm(i)&&(E=1);else if(typeof i=="string")E=LR(i,o,re.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case C:return i=Ln(31,o,r,f),i.elementType=C,i.lanes=m,i;case j:return la(o.children,f,m,r);case Q:E=8,f|=24;break;case G:return i=Ln(12,o,r,f|2),i.elementType=G,i.lanes=m,i;case ye:return i=Ln(13,o,r,f),i.elementType=ye,i.lanes=m,i;case Le:return i=Ln(19,o,r,f),i.elementType=Le,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ge:case he:E=10;break e;case ue:E=9;break e;case Ve:E=11;break e;case P:E=14;break e;case A:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Ln(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function la(i,r,o,u){return i=Ln(7,i,u,r),i.lanes=o,i}function dm(i,r,o){return i=Ln(6,i,null,r),i.lanes=o,i}function mm(i,r,o){return r=Ln(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var go=[],_o=0,ch=null,hh=0,ti=[],ni=0,ua=null,us=1,cs="";function ca(i,r){go[_o++]=hh,go[_o++]=ch,ch=i,hh=r}function gv(i,r,o){ti[ni++]=us,ti[ni++]=cs,ti[ni++]=ua,ua=i;var u=us;i=cs;var f=32-hn(u)-1;u&=~(1<<f),o+=1;var m=32-hn(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,us=1<<32-hn(r)+f|o<<f|u,cs=m+i}else us=1<<m|o<<f|u,cs=i}function pm(i){i.return!==null&&(ca(i,1),gv(i,1,0))}function gm(i){for(;i===ch;)ch=go[--_o],go[_o]=null,hh=go[--_o],go[_o]=null;for(;i===ua;)ua=ti[--ni],ti[ni]=null,cs=ti[--ni],ti[ni]=null,us=ti[--ni],ti[ni]=null}var Sn=null,vt=null,Qe=!1,ha=null,Mi=!1,_m=Error(s(519));function fa(i){var r=Error(s(418,""));throw Zl(Jn(r,i)),_m}function _v(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[zt]=i,r[Nt]=u,o){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(o=0;o<Su.length;o++)ke(Su[o],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ke("invalid",r),$r(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),eo(r);break;case"select":ke("invalid",r);break;case"textarea":ke("invalid",r),Wr(r,u.value,u.defaultValue,u.children),eo(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||k0(r.textContent,o)?(u.popover!=null&&(ke("beforetoggle",r),ke("toggle",r)),u.onScroll!=null&&ke("scroll",r),u.onScrollEnd!=null&&ke("scrollend",r),u.onClick!=null&&(r.onclick=Gh),r=!0):r=!1,r||fa(i)}function yv(i){for(Sn=i.return;Sn;)switch(Sn.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Sn=Sn.return}}function $l(i){if(i!==Sn)return!1;if(!Qe)return yv(i),Qe=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Mp(i.type,i.memoizedProps)),o=!o),o&&vt&&fa(i),yv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){vt=mi(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}vt=null}}else r===27?(r=vt,or(i.type)?(i=Lp,Lp=null,vt=i):vt=r):vt=Sn?mi(i.stateNode.nextSibling):null;return!0}function Wl(){vt=Sn=null,Qe=!1}function vv(){var i=ha;return i!==null&&(Cn===null?Cn=i:Cn.push.apply(Cn,i),ha=null),i}function Zl(i){ha===null?ha=[i]:ha.push(i)}var ym=ee(null),da=null,hs=null;function Qs(i,r,o){Y(ym,r._currentValue),r._currentValue=o}function fs(i){i._currentValue=ym.current,ie(ym)}function vm(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function Em(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=f;for(var R=0;R<r.length;R++)if(w.context===r[R]){m.lanes|=o,w=m.alternate,w!==null&&(w.lanes|=o),vm(m.return,o,i),u||(E=null);break e}m=w.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),vm(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Jl(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var w=f.type;Vn(f.pendingProps.value,E.value)||(i!==null?i.push(w):i=[w])}}else if(f===It.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Iu):i=[Iu])}f=f.return}i!==null&&Em(r,i,o,u),r.flags|=262144}function fh(i){for(i=i.firstContext;i!==null;){if(!Vn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ma(i){da=i,hs=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function fn(i){return Ev(da,i)}function dh(i,r){return da===null&&ma(i),Ev(i,r)}function Ev(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},hs===null){if(i===null)throw Error(s(308));hs=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else hs=hs.next=r;return o}var VC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},LC=n.unstable_scheduleCallback,UC=n.unstable_NormalPriority,Ft={$$typeof:he,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tm(){return{controller:new VC,data:new Map,refCount:0}}function eu(i){i.refCount--,i.refCount===0&&LC(UC,function(){i.controller.abort()})}var tu=null,Sm=0,yo=0,vo=null;function jC(i,r){if(tu===null){var o=tu=[];Sm=0,yo=bp(),vo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Sm++,r.then(Tv,Tv),r}function Tv(){if(--Sm===0&&tu!==null){vo!==null&&(vo.status="fulfilled");var i=tu;tu=null,yo=0,vo=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function zC(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Sv=K.S;K.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&jC(i,r),Sv!==null&&Sv(i,r)};var pa=ee(null);function wm(){var i=pa.current;return i!==null?i:lt.pooledCache}function mh(i,r){r===null?Y(pa,pa.current):Y(pa,r.pool)}function wv(){var i=wm();return i===null?null:{parent:Ft._currentValue,pool:i}}var nu=Error(s(460)),bv=Error(s(474)),ph=Error(s(542)),bm={then:function(){}};function Av(i){return i=i.status,i==="fulfilled"||i==="rejected"}function gh(){}function Cv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(gh,gh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Iv(i),i;default:if(typeof r.status=="string")r.then(gh,gh);else{if(i=lt,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Iv(i),i}throw iu=r,nu}}var iu=null;function Rv(){if(iu===null)throw Error(s(459));var i=iu;return iu=null,i}function Iv(i){if(i===nu||i===ph)throw Error(s(483))}var Ys=!1;function Am(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ks(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Xs(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(Je&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=lh(i),mv(i,null,o),r}return oh(i,u,r,o),lh(i)}function su(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Ol(i,o)}}function Rm(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Im=!1;function ru(){if(Im){var i=vo;if(i!==null)throw i}}function au(i,r,o,u){Im=!1;var f=i.updateQueue;Ys=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var R=w,q=R.next;R.next=null,E===null?m=q:E.next=q,E=R;var X=i.alternate;X!==null&&(X=X.updateQueue,w=X.lastBaseUpdate,w!==E&&(w===null?X.firstBaseUpdate=q:w.next=q,X.lastBaseUpdate=R))}if(m!==null){var Z=f.baseState;E=0,X=q=R=null,w=m;do{var B=w.lane&-536870913,F=B!==w.lane;if(F?(Be&B)===B:(u&B)===B){B!==0&&B===yo&&(Im=!0),X!==null&&(X=X.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Se=i,ve=w;B=r;var rt=o;switch(ve.tag){case 1:if(Se=ve.payload,typeof Se=="function"){Z=Se.call(rt,Z,B);break e}Z=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=ve.payload,B=typeof Se=="function"?Se.call(rt,Z,B):Se,B==null)break e;Z=v({},Z,B);break e;case 2:Ys=!0}}B=w.callback,B!==null&&(i.flags|=64,F&&(i.flags|=8192),F=f.callbacks,F===null?f.callbacks=[B]:F.push(B))}else F={lane:B,tag:w.tag,payload:w.payload,callback:w.callback,next:null},X===null?(q=X=F,R=Z):X=X.next=F,E|=B;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;F=w,w=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);X===null&&(R=Z),f.baseState=R,f.firstBaseUpdate=q,f.lastBaseUpdate=X,m===null&&(f.shared.lanes=0),ir|=E,i.lanes=E,i.memoizedState=Z}}function Nv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function xv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Nv(o[i],r)}var Eo=ee(null),_h=ee(0);function Dv(i,r){i=vs,Y(_h,i),Y(Eo,r),vs=i|r.baseLanes}function Nm(){Y(_h,vs),Y(Eo,Eo.current)}function xm(){vs=_h.current,ie(Eo),ie(_h)}var $s=0,Ie=null,it=null,Dt=null,yh=!1,To=!1,ga=!1,vh=0,ou=0,So=null,qC=0;function wt(){throw Error(s(321))}function Dm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Vn(i[o],r[o]))return!1;return!0}function Om(i,r,o,u,f,m){return $s=m,Ie=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,K.H=i===null||i.memoizedState===null?mE:pE,ga=!1,m=o(u,f),ga=!1,To&&(m=Mv(r,o,u,f)),Ov(i),m}function Ov(i){K.H=Ah;var r=it!==null&&it.next!==null;if($s=0,Dt=it=Ie=null,yh=!1,ou=0,So=null,r)throw Error(s(300));i===null||Xt||(i=i.dependencies,i!==null&&fh(i)&&(Xt=!0))}function Mv(i,r,o,u){Ie=i;var f=0;do{if(To&&(So=null),ou=0,To=!1,25<=f)throw Error(s(301));if(f+=1,Dt=it=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}K.H=KC,m=r(o,u)}while(To);return m}function BC(){var i=K.H,r=i.useState()[0];return r=typeof r.then=="function"?lu(r):r,i=i.useState()[0],(it!==null?it.memoizedState:null)!==i&&(Ie.flags|=1024),r}function Mm(){var i=vh!==0;return vh=0,i}function km(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Pm(i){if(yh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yh=!1}$s=0,Dt=it=Ie=null,To=!1,ou=vh=0,So=null}function bn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?Ie.memoizedState=Dt=i:Dt=Dt.next=i,Dt}function Ot(){if(it===null){var i=Ie.alternate;i=i!==null?i.memoizedState:null}else i=it.next;var r=Dt===null?Ie.memoizedState:Dt.next;if(r!==null)Dt=r,it=i;else{if(i===null)throw Ie.alternate===null?Error(s(467)):Error(s(310));it=i,i={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Dt===null?Ie.memoizedState=Dt=i:Dt=Dt.next=i}return Dt}function Vm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lu(i){var r=ou;return ou+=1,So===null&&(So=[]),i=Cv(So,i,r),r=Ie,(Dt===null?r.memoizedState:Dt.next)===null&&(r=r.alternate,K.H=r===null||r.memoizedState===null?mE:pE),i}function Eh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return lu(i);if(i.$$typeof===he)return fn(i)}throw Error(s(438,String(i)))}function Lm(i){var r=null,o=Ie.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ie.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Vm(),Ie.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=M;return r.index++,o}function ds(i,r){return typeof r=="function"?r(i):r}function Th(i){var r=Ot();return Um(r,it,i)}function Um(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var w=E=null,R=null,q=r,X=!1;do{var Z=q.lane&-536870913;if(Z!==q.lane?(Be&Z)===Z:($s&Z)===Z){var B=q.revertLane;if(B===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),Z===yo&&(X=!0);else if(($s&B)===B){q=q.next,B===yo&&(X=!0);continue}else Z={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},R===null?(w=R=Z,E=m):R=R.next=Z,Ie.lanes|=B,ir|=B;Z=q.action,ga&&o(m,Z),m=q.hasEagerState?q.eagerState:o(m,Z)}else B={lane:Z,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},R===null?(w=R=B,E=m):R=R.next=B,Ie.lanes|=Z,ir|=Z;q=q.next}while(q!==null&&q!==r);if(R===null?E=m:R.next=w,!Vn(m,i.memoizedState)&&(Xt=!0,X&&(o=vo,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=R,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function jm(i){var r=Ot(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Vn(m,r.memoizedState)||(Xt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function kv(i,r,o){var u=Ie,f=Ot(),m=Qe;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Vn((it||f).memoizedState,o);E&&(f.memoizedState=o,Xt=!0),f=f.queue;var w=Lv.bind(null,u,f,i);if(uu(2048,8,w,[i]),f.getSnapshot!==r||E||Dt!==null&&Dt.memoizedState.tag&1){if(u.flags|=2048,wo(9,Sh(),Vv.bind(null,u,f,o,r),null),lt===null)throw Error(s(349));m||($s&124)!==0||Pv(u,r,o)}return o}function Pv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ie.updateQueue,r===null?(r=Vm(),Ie.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Vv(i,r,o,u){r.value=o,r.getSnapshot=u,Uv(r)&&jv(i)}function Lv(i,r,o){return o(function(){Uv(r)&&jv(i)})}function Uv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Vn(i,o)}catch{return!0}}function jv(i){var r=mo(i,2);r!==null&&Bn(r,i,2)}function zm(i){var r=bn();if(typeof i=="function"){var o=i;if(i=o(),ga){kn(!0);try{o()}finally{kn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:i},r}function zv(i,r,o,u){return i.baseState=o,Um(i,it,typeof u=="function"?u:ds)}function FC(i,r,o,u,f){if(bh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};K.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,qv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function qv(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=K.T,E={};K.T=E;try{var w=o(f,u),R=K.S;R!==null&&R(E,w),Bv(i,r,w)}catch(q){qm(i,r,q)}finally{K.T=m}}else try{m=o(f,u),Bv(i,r,m)}catch(q){qm(i,r,q)}}function Bv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Fv(i,r,u)},function(u){return qm(i,r,u)}):Fv(i,r,o)}function Fv(i,r,o){r.status="fulfilled",r.value=o,Hv(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,qv(i,o)))}function qm(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Hv(r),r=r.next;while(r!==u)}i.action=null}function Hv(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function Gv(i,r){return r}function Qv(i,r){if(Qe){var o=lt.formState;if(o!==null){e:{var u=Ie;if(Qe){if(vt){t:{for(var f=vt,m=Mi;f.nodeType!==8;){if(!m){f=null;break t}if(f=mi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){vt=mi(f.nextSibling),u=f.data==="F!";break e}}fa(u)}u=!1}u&&(r=o[0])}}return o=bn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gv,lastRenderedState:r},o.queue=u,o=hE.bind(null,Ie,u),u.dispatch=o,u=zm(!1),m=Qm.bind(null,Ie,!1,u.queue),u=bn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=FC.bind(null,Ie,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function Yv(i){var r=Ot();return Kv(r,it,i)}function Kv(i,r,o){if(r=Um(i,r,Gv)[0],i=Th(ds)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=lu(r)}catch(E){throw E===nu?ph:E}else u=r;r=Ot();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Ie.flags|=2048,wo(9,Sh(),HC.bind(null,f,o),null)),[u,m,i]}function HC(i,r){i.action=r}function Xv(i){var r=Ot(),o=it;if(o!==null)return Kv(r,o,i);Ot(),r=r.memoizedState,o=Ot();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function wo(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Ie.updateQueue,r===null&&(r=Vm(),Ie.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Sh(){return{destroy:void 0,resource:void 0}}function $v(){return Ot().memoizedState}function wh(i,r,o,u){var f=bn();u=u===void 0?null:u,Ie.flags|=i,f.memoizedState=wo(1|r,Sh(),o,u)}function uu(i,r,o,u){var f=Ot();u=u===void 0?null:u;var m=f.memoizedState.inst;it!==null&&u!==null&&Dm(u,it.memoizedState.deps)?f.memoizedState=wo(r,m,o,u):(Ie.flags|=i,f.memoizedState=wo(1|r,m,o,u))}function Wv(i,r){wh(8390656,8,i,r)}function Zv(i,r){uu(2048,8,i,r)}function Jv(i,r){return uu(4,2,i,r)}function eE(i,r){return uu(4,4,i,r)}function tE(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function nE(i,r,o){o=o!=null?o.concat([i]):null,uu(4,4,tE.bind(null,r,i),o)}function Bm(){}function iE(i,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Dm(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function sE(i,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Dm(r,u[1]))return u[0];if(u=i(),ga){kn(!0);try{i()}finally{kn(!1)}}return o.memoizedState=[u,r],u}function Fm(i,r,o){return o===void 0||($s&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=o0(),Ie.lanes|=i,ir|=i,o)}function rE(i,r,o,u){return Vn(o,r)?o:Eo.current!==null?(i=Fm(i,o,u),Vn(i,r)||(Xt=!0),i):($s&42)===0?(Xt=!0,i.memoizedState=o):(i=o0(),Ie.lanes|=i,ir|=i,r)}function aE(i,r,o,u,f){var m=se.p;se.p=m!==0&&8>m?m:8;var E=K.T,w={};K.T=w,Qm(i,!1,r,o);try{var R=f(),q=K.S;if(q!==null&&q(w,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var X=zC(R,u);cu(i,r,X,qn(i))}else cu(i,r,u,qn(i))}catch(Z){cu(i,r,{then:function(){},status:"rejected",reason:Z},qn())}finally{se.p=m,K.T=E}}function GC(){}function Hm(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=oE(i).queue;aE(i,f,r,fe,o===null?GC:function(){return lE(i),o(u)})}function oE(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:fe},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function lE(i){var r=oE(i).next.queue;cu(i,r,{},qn())}function Gm(){return fn(Iu)}function uE(){return Ot().memoizedState}function cE(){return Ot().memoizedState}function QC(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=qn();i=Ks(o);var u=Xs(r,i,o);u!==null&&(Bn(u,r,o),su(u,r,o)),r={cache:Tm()},i.payload=r;return}r=r.return}}function YC(i,r,o){var u=qn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},bh(i)?fE(r,o):(o=hm(i,r,o,u),o!==null&&(Bn(o,i,u),dE(o,r,u)))}function hE(i,r,o){var u=qn();cu(i,r,o,u)}function cu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(bh(i))fE(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,w=m(E,o);if(f.hasEagerState=!0,f.eagerState=w,Vn(w,E))return oh(i,r,f,0),lt===null&&ah(),!1}catch{}finally{}if(o=hm(i,r,f,u),o!==null)return Bn(o,i,u),dE(o,r,u),!0}return!1}function Qm(i,r,o,u){if(u={lane:2,revertLane:bp(),action:u,hasEagerState:!1,eagerState:null,next:null},bh(i)){if(r)throw Error(s(479))}else r=hm(i,o,u,2),r!==null&&Bn(r,i,2)}function bh(i){var r=i.alternate;return i===Ie||r!==null&&r===Ie}function fE(i,r){To=yh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function dE(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Ol(i,o)}}var Ah={readContext:fn,use:Eh,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt},mE={readContext:fn,use:Eh,useCallback:function(i,r){return bn().memoizedState=[i,r===void 0?null:r],i},useContext:fn,useEffect:Wv,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,wh(4194308,4,tE.bind(null,r,i),o)},useLayoutEffect:function(i,r){return wh(4194308,4,i,r)},useInsertionEffect:function(i,r){wh(4,2,i,r)},useMemo:function(i,r){var o=bn();r=r===void 0?null:r;var u=i();if(ga){kn(!0);try{i()}finally{kn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=bn();if(o!==void 0){var f=o(r);if(ga){kn(!0);try{o(r)}finally{kn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=YC.bind(null,Ie,i),[u.memoizedState,i]},useRef:function(i){var r=bn();return i={current:i},r.memoizedState=i},useState:function(i){i=zm(i);var r=i.queue,o=hE.bind(null,Ie,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Bm,useDeferredValue:function(i,r){var o=bn();return Fm(o,i,r)},useTransition:function(){var i=zm(!1);return i=aE.bind(null,Ie,i.queue,!0,!1),bn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Ie,f=bn();if(Qe){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),lt===null)throw Error(s(349));(Be&124)!==0||Pv(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,Wv(Lv.bind(null,u,m,i),[i]),u.flags|=2048,wo(9,Sh(),Vv.bind(null,u,m,o,r),null),o},useId:function(){var i=bn(),r=lt.identifierPrefix;if(Qe){var o=cs,u=us;o=(u&~(1<<32-hn(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=vh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=qC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Gm,useFormState:Qv,useActionState:Qv,useOptimistic:function(i){var r=bn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Qm.bind(null,Ie,!0,o),o.dispatch=r,[i,r]},useMemoCache:Lm,useCacheRefresh:function(){return bn().memoizedState=QC.bind(null,Ie)}},pE={readContext:fn,use:Eh,useCallback:iE,useContext:fn,useEffect:Zv,useImperativeHandle:nE,useInsertionEffect:Jv,useLayoutEffect:eE,useMemo:sE,useReducer:Th,useRef:$v,useState:function(){return Th(ds)},useDebugValue:Bm,useDeferredValue:function(i,r){var o=Ot();return rE(o,it.memoizedState,i,r)},useTransition:function(){var i=Th(ds)[0],r=Ot().memoizedState;return[typeof i=="boolean"?i:lu(i),r]},useSyncExternalStore:kv,useId:uE,useHostTransitionStatus:Gm,useFormState:Yv,useActionState:Yv,useOptimistic:function(i,r){var o=Ot();return zv(o,it,i,r)},useMemoCache:Lm,useCacheRefresh:cE},KC={readContext:fn,use:Eh,useCallback:iE,useContext:fn,useEffect:Zv,useImperativeHandle:nE,useInsertionEffect:Jv,useLayoutEffect:eE,useMemo:sE,useReducer:jm,useRef:$v,useState:function(){return jm(ds)},useDebugValue:Bm,useDeferredValue:function(i,r){var o=Ot();return it===null?Fm(o,i,r):rE(o,it.memoizedState,i,r)},useTransition:function(){var i=jm(ds)[0],r=Ot().memoizedState;return[typeof i=="boolean"?i:lu(i),r]},useSyncExternalStore:kv,useId:uE,useHostTransitionStatus:Gm,useFormState:Xv,useActionState:Xv,useOptimistic:function(i,r){var o=Ot();return it!==null?zv(o,it,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Lm,useCacheRefresh:cE},bo=null,hu=0;function Ch(i){var r=hu;return hu+=1,bo===null&&(bo=[]),Cv(bo,i,r)}function fu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Rh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function gE(i){var r=i._init;return r(i._payload)}function _E(i){function r(L,O){if(i){var z=L.deletions;z===null?(L.deletions=[O],L.flags|=16):z.push(O)}}function o(L,O){if(!i)return null;for(;O!==null;)r(L,O),O=O.sibling;return null}function u(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function f(L,O){return L=ls(L,O),L.index=0,L.sibling=null,L}function m(L,O,z){return L.index=z,i?(z=L.alternate,z!==null?(z=z.index,z<O?(L.flags|=67108866,O):z):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function E(L){return i&&L.alternate===null&&(L.flags|=67108866),L}function w(L,O,z,W){return O===null||O.tag!==6?(O=dm(z,L.mode,W),O.return=L,O):(O=f(O,z),O.return=L,O)}function R(L,O,z,W){var ce=z.type;return ce===j?X(L,O,z.props.children,W,z.key):O!==null&&(O.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===A&&gE(ce)===O.type)?(O=f(O,z.props),fu(O,z),O.return=L,O):(O=uh(z.type,z.key,z.props,null,L.mode,W),fu(O,z),O.return=L,O)}function q(L,O,z,W){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=mm(z,L.mode,W),O.return=L,O):(O=f(O,z.children||[]),O.return=L,O)}function X(L,O,z,W,ce){return O===null||O.tag!==7?(O=la(z,L.mode,W,ce),O.return=L,O):(O=f(O,z),O.return=L,O)}function Z(L,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=dm(""+O,L.mode,z),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case S:return z=uh(O.type,O.key,O.props,null,L.mode,z),fu(z,O),z.return=L,z;case x:return O=mm(O,L.mode,z),O.return=L,O;case A:var W=O._init;return O=W(O._payload),Z(L,O,z)}if(dt(O)||V(O))return O=la(O,L.mode,z,null),O.return=L,O;if(typeof O.then=="function")return Z(L,Ch(O),z);if(O.$$typeof===he)return Z(L,dh(L,O),z);Rh(L,O)}return null}function B(L,O,z,W){var ce=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ce!==null?null:w(L,O,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===ce?R(L,O,z,W):null;case x:return z.key===ce?q(L,O,z,W):null;case A:return ce=z._init,z=ce(z._payload),B(L,O,z,W)}if(dt(z)||V(z))return ce!==null?null:X(L,O,z,W,null);if(typeof z.then=="function")return B(L,O,Ch(z),W);if(z.$$typeof===he)return B(L,O,dh(L,z),W);Rh(L,z)}return null}function F(L,O,z,W,ce){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return L=L.get(z)||null,w(O,L,""+W,ce);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return L=L.get(W.key===null?z:W.key)||null,R(O,L,W,ce);case x:return L=L.get(W.key===null?z:W.key)||null,q(O,L,W,ce);case A:var xe=W._init;return W=xe(W._payload),F(L,O,z,W,ce)}if(dt(W)||V(W))return L=L.get(z)||null,X(O,L,W,ce,null);if(typeof W.then=="function")return F(L,O,z,Ch(W),ce);if(W.$$typeof===he)return F(L,O,z,dh(O,W),ce);Rh(O,W)}return null}function Se(L,O,z,W){for(var ce=null,xe=null,de=O,Ee=O=0,Wt=null;de!==null&&Ee<z.length;Ee++){de.index>Ee?(Wt=de,de=null):Wt=de.sibling;var Ge=B(L,de,z[Ee],W);if(Ge===null){de===null&&(de=Wt);break}i&&de&&Ge.alternate===null&&r(L,de),O=m(Ge,O,Ee),xe===null?ce=Ge:xe.sibling=Ge,xe=Ge,de=Wt}if(Ee===z.length)return o(L,de),Qe&&ca(L,Ee),ce;if(de===null){for(;Ee<z.length;Ee++)de=Z(L,z[Ee],W),de!==null&&(O=m(de,O,Ee),xe===null?ce=de:xe.sibling=de,xe=de);return Qe&&ca(L,Ee),ce}for(de=u(de);Ee<z.length;Ee++)Wt=F(de,L,Ee,z[Ee],W),Wt!==null&&(i&&Wt.alternate!==null&&de.delete(Wt.key===null?Ee:Wt.key),O=m(Wt,O,Ee),xe===null?ce=Wt:xe.sibling=Wt,xe=Wt);return i&&de.forEach(function(fr){return r(L,fr)}),Qe&&ca(L,Ee),ce}function ve(L,O,z,W){if(z==null)throw Error(s(151));for(var ce=null,xe=null,de=O,Ee=O=0,Wt=null,Ge=z.next();de!==null&&!Ge.done;Ee++,Ge=z.next()){de.index>Ee?(Wt=de,de=null):Wt=de.sibling;var fr=B(L,de,Ge.value,W);if(fr===null){de===null&&(de=Wt);break}i&&de&&fr.alternate===null&&r(L,de),O=m(fr,O,Ee),xe===null?ce=fr:xe.sibling=fr,xe=fr,de=Wt}if(Ge.done)return o(L,de),Qe&&ca(L,Ee),ce;if(de===null){for(;!Ge.done;Ee++,Ge=z.next())Ge=Z(L,Ge.value,W),Ge!==null&&(O=m(Ge,O,Ee),xe===null?ce=Ge:xe.sibling=Ge,xe=Ge);return Qe&&ca(L,Ee),ce}for(de=u(de);!Ge.done;Ee++,Ge=z.next())Ge=F(de,L,Ee,Ge.value,W),Ge!==null&&(i&&Ge.alternate!==null&&de.delete(Ge.key===null?Ee:Ge.key),O=m(Ge,O,Ee),xe===null?ce=Ge:xe.sibling=Ge,xe=Ge);return i&&de.forEach(function(XR){return r(L,XR)}),Qe&&ca(L,Ee),ce}function rt(L,O,z,W){if(typeof z=="object"&&z!==null&&z.type===j&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var ce=z.key;O!==null;){if(O.key===ce){if(ce=z.type,ce===j){if(O.tag===7){o(L,O.sibling),W=f(O,z.props.children),W.return=L,L=W;break e}}else if(O.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===A&&gE(ce)===O.type){o(L,O.sibling),W=f(O,z.props),fu(W,z),W.return=L,L=W;break e}o(L,O);break}else r(L,O);O=O.sibling}z.type===j?(W=la(z.props.children,L.mode,W,z.key),W.return=L,L=W):(W=uh(z.type,z.key,z.props,null,L.mode,W),fu(W,z),W.return=L,L=W)}return E(L);case x:e:{for(ce=z.key;O!==null;){if(O.key===ce)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){o(L,O.sibling),W=f(O,z.children||[]),W.return=L,L=W;break e}else{o(L,O);break}else r(L,O);O=O.sibling}W=mm(z,L.mode,W),W.return=L,L=W}return E(L);case A:return ce=z._init,z=ce(z._payload),rt(L,O,z,W)}if(dt(z))return Se(L,O,z,W);if(V(z)){if(ce=V(z),typeof ce!="function")throw Error(s(150));return z=ce.call(z),ve(L,O,z,W)}if(typeof z.then=="function")return rt(L,O,Ch(z),W);if(z.$$typeof===he)return rt(L,O,dh(L,z),W);Rh(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(o(L,O.sibling),W=f(O,z),W.return=L,L=W):(o(L,O),W=dm(z,L.mode,W),W.return=L,L=W),E(L)):o(L,O)}return function(L,O,z,W){try{hu=0;var ce=rt(L,O,z,W);return bo=null,ce}catch(de){if(de===nu||de===ph)throw de;var xe=Ln(29,de,null,L.mode);return xe.lanes=W,xe.return=L,xe}finally{}}}var Ao=_E(!0),yE=_E(!1),ii=ee(null),ki=null;function Ws(i){var r=i.alternate;Y(Ht,Ht.current&1),Y(ii,i),ki===null&&(r===null||Eo.current!==null||r.memoizedState!==null)&&(ki=i)}function vE(i){if(i.tag===22){if(Y(Ht,Ht.current),Y(ii,i),ki===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(ki=i)}}else Zs()}function Zs(){Y(Ht,Ht.current),Y(ii,ii.current)}function ms(i){ie(ii),ki===i&&(ki=null),ie(Ht)}var Ht=ee(0);function Ih(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Vp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Ym(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:v({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Km={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=qn(),f=Ks(u);f.payload=r,o!=null&&(f.callback=o),r=Xs(i,f,u),r!==null&&(Bn(r,i,u),su(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=qn(),f=Ks(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Xs(i,f,u),r!==null&&(Bn(r,i,u),su(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=qn(),u=Ks(o);u.tag=2,r!=null&&(u.callback=r),r=Xs(i,u,o),r!==null&&(Bn(r,i,o),su(r,i,o))}};function EE(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Kl(o,u)||!Kl(f,m):!0}function TE(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Km.enqueueReplaceState(r,r.state,null)}function _a(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=v({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Nh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function SE(i){Nh(i)}function wE(i){console.error(i)}function bE(i){Nh(i)}function xh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function AE(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Xm(i,r,o){return o=Ks(o),o.tag=3,o.payload={element:null},o.callback=function(){xh(i,r)},o}function CE(i){return i=Ks(i),i.tag=3,i}function RE(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){AE(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){AE(r,o,u),typeof f!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function XC(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Jl(r,o,f,!0),o=ii.current,o!==null){switch(o.tag){case 13:return ki===null?vp():o.alternate===null&&Et===0&&(Et=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===bm?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Tp(i,u,f)),!1;case 22:return o.flags|=65536,u===bm?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Tp(i,u,f)),!1}throw Error(s(435,o.tag))}return Tp(i,u,f),vp(),!1}if(Qe)return r=ii.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==_m&&(i=Error(s(422),{cause:u}),Zl(Jn(i,o)))):(u!==_m&&(r=Error(s(423),{cause:u}),Zl(Jn(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=Jn(u,o),f=Xm(i.stateNode,u,f),Rm(i,f),Et!==4&&(Et=2)),!1;var m=Error(s(520),{cause:u});if(m=Jn(m,o),vu===null?vu=[m]:vu.push(m),Et!==4&&(Et=2),r===null)return!0;u=Jn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Xm(o.stateNode,u,i),Rm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(sr===null||!sr.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=CE(f),RE(f,i,o,u),Rm(o,f),!1}o=o.return}while(o!==null);return!1}var IE=Error(s(461)),Xt=!1;function rn(i,r,o,u){r.child=i===null?yE(r,null,o,u):Ao(r,i.child,o,u)}function NE(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var w in u)w!=="ref"&&(E[w]=u[w])}else E=u;return ma(r),u=Om(i,r,o,E,m,f),w=Mm(),i!==null&&!Xt?(km(i,r,f),ps(i,r,f)):(Qe&&w&&pm(r),r.flags|=1,rn(i,r,u,f),r.child)}function xE(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!fm(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,DE(i,r,m,u,f)):(i=uh(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!ip(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Kl,o(E,u)&&i.ref===r.ref)return ps(i,r,f)}return r.flags|=1,i=ls(m,u),i.ref=r.ref,i.return=r,r.child=i}function DE(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(Kl(m,u)&&i.ref===r.ref)if(Xt=!1,r.pendingProps=u=m,ip(i,f))(i.flags&131072)!==0&&(Xt=!0);else return r.lanes=i.lanes,ps(i,r,f)}return $m(i,r,o,u,f)}function OE(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return ME(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&mh(r,m!==null?m.cachePool:null),m!==null?Dv(r,m):Nm(),vE(r);else return r.lanes=r.childLanes=536870912,ME(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(mh(r,m.cachePool),Dv(r,m),Zs(),r.memoizedState=null):(i!==null&&mh(r,null),Nm(),Zs());return rn(i,r,f,o),r.child}function ME(i,r,o,u){var f=wm();return f=f===null?null:{parent:Ft._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&mh(r,null),Nm(),vE(r),i!==null&&Jl(i,r,u,!0),null}function Dh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function $m(i,r,o,u,f){return ma(r),o=Om(i,r,o,u,void 0,f),u=Mm(),i!==null&&!Xt?(km(i,r,f),ps(i,r,f)):(Qe&&u&&pm(r),r.flags|=1,rn(i,r,o,f),r.child)}function kE(i,r,o,u,f,m){return ma(r),r.updateQueue=null,o=Mv(r,u,o,f),Ov(i),u=Mm(),i!==null&&!Xt?(km(i,r,m),ps(i,r,m)):(Qe&&u&&pm(r),r.flags|=1,rn(i,r,o,m),r.child)}function PE(i,r,o,u,f){if(ma(r),r.stateNode===null){var m=po,E=o.contextType;typeof E=="object"&&E!==null&&(m=fn(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Km,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},Am(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?fn(E):po,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Ym(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Km.enqueueReplaceState(m,m.state,null),au(r,u,m,f),ru(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var w=r.memoizedProps,R=_a(o,w);m.props=R;var q=m.context,X=o.contextType;E=po,typeof X=="object"&&X!==null&&(E=fn(X));var Z=o.getDerivedStateFromProps;X=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,X||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||q!==E)&&TE(r,m,u,E),Ys=!1;var B=r.memoizedState;m.state=B,au(r,u,m,f),ru(),q=r.memoizedState,w||B!==q||Ys?(typeof Z=="function"&&(Ym(r,o,Z,u),q=r.memoizedState),(R=Ys||EE(r,o,R,u,B,q,E))?(X||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=E,u=R):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Cm(i,r),E=r.memoizedProps,X=_a(o,E),m.props=X,Z=r.pendingProps,B=m.context,q=o.contextType,R=po,typeof q=="object"&&q!==null&&(R=fn(q)),w=o.getDerivedStateFromProps,(q=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Z||B!==R)&&TE(r,m,u,R),Ys=!1,B=r.memoizedState,m.state=B,au(r,u,m,f),ru();var F=r.memoizedState;E!==Z||B!==F||Ys||i!==null&&i.dependencies!==null&&fh(i.dependencies)?(typeof w=="function"&&(Ym(r,o,w,u),F=r.memoizedState),(X=Ys||EE(r,o,X,u,B,F,R)||i!==null&&i.dependencies!==null&&fh(i.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,F,R),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,F,R)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=F),m.props=u,m.state=F,m.context=R,u=X):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,Dh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=Ao(r,i.child,null,f),r.child=Ao(r,null,o,f)):rn(i,r,o,f),r.memoizedState=m.state,i=r.child):i=ps(i,r,f),i}function VE(i,r,o,u){return Wl(),r.flags|=256,rn(i,r,o,u),r.child}var Wm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zm(i){return{baseLanes:i,cachePool:wv()}}function Jm(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=si),i}function LE(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(Ht.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Qe){if(f?Ws(r):Zs(),Qe){var w=vt,R;if(R=w){e:{for(R=w,w=Mi;R.nodeType!==8;){if(!w){w=null;break e}if(R=mi(R.nextSibling),R===null){w=null;break e}}w=R}w!==null?(r.memoizedState={dehydrated:w,treeContext:ua!==null?{id:us,overflow:cs}:null,retryLane:536870912,hydrationErrors:null},R=Ln(18,null,null,0),R.stateNode=w,R.return=r,r.child=R,Sn=r,vt=null,R=!0):R=!1}R||fa(r)}if(w=r.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Vp(w)?r.lanes=32:r.lanes=536870912,null;ms(r)}return w=u.children,u=u.fallback,f?(Zs(),f=r.mode,w=Oh({mode:"hidden",children:w},f),u=la(u,f,o,null),w.return=r,u.return=r,w.sibling=u,r.child=w,f=r.child,f.memoizedState=Zm(o),f.childLanes=Jm(i,E,o),r.memoizedState=Wm,u):(Ws(r),ep(r,w))}if(R=i.memoizedState,R!==null&&(w=R.dehydrated,w!==null)){if(m)r.flags&256?(Ws(r),r.flags&=-257,r=tp(i,r,o)):r.memoizedState!==null?(Zs(),r.child=i.child,r.flags|=128,r=null):(Zs(),f=u.fallback,w=r.mode,u=Oh({mode:"visible",children:u.children},w),f=la(f,w,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,Ao(r,i.child,null,o),u=r.child,u.memoizedState=Zm(o),u.childLanes=Jm(i,E,o),r.memoizedState=Wm,r=f);else if(Ws(r),Vp(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(s(419)),u.stack="",u.digest=E,Zl({value:u,source:null,stack:null}),r=tp(i,r,o)}else if(Xt||Jl(i,r,o,!1),E=(o&i.childLanes)!==0,Xt||E){if(E=lt,E!==null&&(u=o&-o,u=(u&42)!==0?1:js(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==R.retryLane))throw R.retryLane=u,mo(i,u),Bn(E,i,u),IE;w.data==="$?"||vp(),r=tp(i,r,o)}else w.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=R.treeContext,vt=mi(w.nextSibling),Sn=r,Qe=!0,ha=null,Mi=!1,i!==null&&(ti[ni++]=us,ti[ni++]=cs,ti[ni++]=ua,us=i.id,cs=i.overflow,ua=r),r=ep(r,u.children),r.flags|=4096);return r}return f?(Zs(),f=u.fallback,w=r.mode,R=i.child,q=R.sibling,u=ls(R,{mode:"hidden",children:u.children}),u.subtreeFlags=R.subtreeFlags&65011712,q!==null?f=ls(q,f):(f=la(f,w,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,w=i.child.memoizedState,w===null?w=Zm(o):(R=w.cachePool,R!==null?(q=Ft._currentValue,R=R.parent!==q?{parent:q,pool:q}:R):R=wv(),w={baseLanes:w.baseLanes|o,cachePool:R}),f.memoizedState=w,f.childLanes=Jm(i,E,o),r.memoizedState=Wm,u):(Ws(r),o=i.child,i=o.sibling,o=ls(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function ep(i,r){return r=Oh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Oh(i,r){return i=Ln(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function tp(i,r,o){return Ao(r,i.child,null,o),i=ep(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function UE(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),vm(i.return,r,o)}function np(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function jE(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(rn(i,r,u.children,o),u=Ht.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&UE(i,o,r);else if(i.tag===19)UE(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(Y(Ht,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Ih(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),np(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Ih(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}np(r,!0,o,null,m);break;case"together":np(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ps(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),ir|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Jl(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ls(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ls(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function ip(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&fh(i)))}function $C(i,r,o){switch(r.tag){case 3:We(r,r.stateNode.containerInfo),Qs(r,Ft,i.memoizedState.cache),Wl();break;case 27:case 5:Us(r);break;case 4:We(r,r.stateNode.containerInfo);break;case 10:Qs(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Ws(r),r.flags|=128,null):(o&r.child.childLanes)!==0?LE(i,r,o):(Ws(r),i=ps(i,r,o),i!==null?i.sibling:null);Ws(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Jl(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return jE(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Y(Ht,Ht.current),u)break;return null;case 22:case 23:return r.lanes=0,OE(i,r,o);case 24:Qs(r,Ft,i.memoizedState.cache)}return ps(i,r,o)}function zE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Xt=!0;else{if(!ip(i,o)&&(r.flags&128)===0)return Xt=!1,$C(i,r,o);Xt=(i.flags&131072)!==0}else Xt=!1,Qe&&(r.flags&1048576)!==0&&gv(r,hh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")fm(u)?(i=_a(u,i),r.tag=1,r=PE(null,r,u,i,o)):(r.tag=0,r=$m(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===Ve){r.tag=11,r=NE(null,r,u,i,o);break e}else if(f===P){r.tag=14,r=xE(null,r,u,i,o);break e}}throw r=Ut(u)||u,Error(s(306,r,""))}}return r;case 0:return $m(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=_a(u,r.pendingProps),PE(i,r,u,f,o);case 3:e:{if(We(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,Cm(i,r),au(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Qs(r,Ft,u),u!==m.cache&&Em(r,[Ft],o,!0),ru(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=VE(i,r,u,o);break e}else if(u!==f){f=Jn(Error(s(424)),r),Zl(f),r=VE(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(vt=mi(i.firstChild),Sn=r,Qe=!0,ha=null,Mi=!0,o=yE(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Wl(),u===f){r=ps(i,r,o);break e}rn(i,r,u,o)}r=r.child}return r;case 26:return Dh(i,r),i===null?(o=H0(r.type,null,r.pendingProps,null))?r.memoizedState=o:Qe||(o=r.type,i=r.pendingProps,u=Qh(me.current).createElement(o),u[zt]=r,u[Nt]=i,on(u,o,i),St(u),r.stateNode=u):r.memoizedState=H0(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Us(r),i===null&&Qe&&(u=r.stateNode=q0(r.type,r.pendingProps,me.current),Sn=r,Mi=!0,f=vt,or(r.type)?(Lp=f,vt=mi(u.firstChild)):vt=f),rn(i,r,r.pendingProps.children,o),Dh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Qe&&((f=u=vt)&&(u=bR(u,r.type,r.pendingProps,Mi),u!==null?(r.stateNode=u,Sn=r,vt=mi(u.firstChild),Mi=!1,f=!0):f=!1),f||fa(r)),Us(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Mp(f,m)?u=null:E!==null&&Mp(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=Om(i,r,BC,null,null,o),Iu._currentValue=f),Dh(i,r),rn(i,r,u,o),r.child;case 6:return i===null&&Qe&&((i=o=vt)&&(o=AR(o,r.pendingProps,Mi),o!==null?(r.stateNode=o,Sn=r,vt=null,i=!0):i=!1),i||fa(r)),null;case 13:return LE(i,r,o);case 4:return We(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=Ao(r,null,u,o):rn(i,r,u,o),r.child;case 11:return NE(i,r,r.type,r.pendingProps,o);case 7:return rn(i,r,r.pendingProps,o),r.child;case 8:return rn(i,r,r.pendingProps.children,o),r.child;case 12:return rn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Qs(r,r.type,u.value),rn(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ma(r),f=fn(f),u=u(f),r.flags|=1,rn(i,r,u,o),r.child;case 14:return xE(i,r,r.type,r.pendingProps,o);case 15:return DE(i,r,r.type,r.pendingProps,o);case 19:return jE(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=Oh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ls(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return OE(i,r,o);case 24:return ma(r),u=fn(Ft),i===null?(f=wm(),f===null&&(f=lt,m=Tm(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},Am(r),Qs(r,Ft,f)):((i.lanes&o)!==0&&(Cm(i,r),au(r,null,null,o),ru()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Qs(r,Ft,u)):(u=m.cache,Qs(r,Ft,u),u!==f.cache&&Em(r,[Ft],o,!0))),rn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function gs(i){i.flags|=4}function qE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!X0(r)){if(r=ii.current,r!==null&&((Be&4194048)===Be?ki!==null:(Be&62914560)!==Be&&(Be&536870912)===0||r!==ki))throw iu=bm,bv;i.flags|=8192}}function Mh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?xl():536870912,i.lanes|=r,No|=r)}function du(i,r){if(!Qe)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function gt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function WC(i,r,o){var u=r.pendingProps;switch(gm(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(r),null;case 1:return gt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),fs(Ft),jt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&($l(r)?gs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,vv())),gt(r),null;case 26:return o=r.memoizedState,i===null?(gs(r),o!==null?(gt(r),qE(r,o)):(gt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(gs(r),gt(r),qE(r,o)):(gt(r),r.flags&=-16777217):(i.memoizedProps!==u&&gs(r),gt(r),r.flags&=-16777217),null;case 27:Xi(r),o=me.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&gs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return gt(r),null}i=re.current,$l(r)?_v(r):(i=q0(f,u,o),r.stateNode=i,gs(r))}return gt(r),null;case 5:if(Xi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&gs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return gt(r),null}if(i=re.current,$l(r))_v(r);else{switch(f=Qh(me.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[zt]=r,i[Nt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(on(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&gs(r)}}return gt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&gs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=me.current,$l(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=Sn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[zt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||k0(i.nodeValue,o)),i||fa(r)}else i=Qh(i).createTextNode(u),i[zt]=r,r.stateNode=i}return gt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=$l(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[zt]=r}else Wl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;gt(r),f=!1}else f=vv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(ms(r),r):(ms(r),null)}if(ms(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Mh(r,r.updateQueue),gt(r),null;case 4:return jt(),i===null&&Ip(r.stateNode.containerInfo),gt(r),null;case 10:return fs(r.type),gt(r),null;case 19:if(ie(Ht),f=r.memoizedState,f===null)return gt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)du(f,!1);else{if(Et!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Ih(i),m!==null){for(r.flags|=128,du(f,!1),i=m.updateQueue,r.updateQueue=i,Mh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)pv(o,i),o=o.sibling;return Y(Ht,Ht.current&1|2),r.child}i=i.sibling}f.tail!==null&&Yn()>Vh&&(r.flags|=128,u=!0,du(f,!1),r.lanes=4194304)}else{if(!u)if(i=Ih(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Mh(r,i),du(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Qe)return gt(r),null}else 2*Yn()-f.renderingStartTime>Vh&&o!==536870912&&(r.flags|=128,u=!0,du(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Yn(),r.sibling=null,i=Ht.current,Y(Ht,u?i&1|2:i&1),r):(gt(r),null);case 22:case 23:return ms(r),xm(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(gt(r),r.subtreeFlags&6&&(r.flags|=8192)):gt(r),o=r.updateQueue,o!==null&&Mh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&ie(pa),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),fs(Ft),gt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function ZC(i,r){switch(gm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return fs(Ft),jt(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Xi(r),null;case 13:if(ms(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Wl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ie(Ht),null;case 4:return jt(),null;case 10:return fs(r.type),null;case 22:case 23:return ms(r),xm(),i!==null&&ie(pa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return fs(Ft),null;case 25:return null;default:return null}}function BE(i,r){switch(gm(r),r.tag){case 3:fs(Ft),jt();break;case 26:case 27:case 5:Xi(r);break;case 4:jt();break;case 13:ms(r);break;case 19:ie(Ht);break;case 10:fs(r.type);break;case 22:case 23:ms(r),xm(),i!==null&&ie(pa);break;case 24:fs(Ft)}}function mu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(w){at(r,r.return,w)}}function Js(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,f=r;var R=o,q=w;try{q()}catch(X){at(f,R,X)}}}u=u.next}while(u!==m)}}catch(X){at(r,r.return,X)}}function FE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{xv(r,o)}catch(u){at(i,i.return,u)}}}function HE(i,r,o){o.props=_a(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){at(i,r,u)}}function pu(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){at(i,r,f)}}function Pi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){at(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){at(i,r,f)}else o.current=null}function GE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){at(i,i.return,f)}}function sp(i,r,o){try{var u=i.stateNode;vR(u,i.type,o,r),u[Nt]=r}catch(f){at(i,i.return,f)}}function QE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&or(i.type)||i.tag===4}function rp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||QE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&or(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ap(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Gh));else if(u!==4&&(u===27&&or(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(ap(i,r,o),i=i.sibling;i!==null;)ap(i,r,o),i=i.sibling}function kh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&or(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(kh(i,r,o),i=i.sibling;i!==null;)kh(i,r,o),i=i.sibling}function YE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);on(r,u,o),r[zt]=i,r[Nt]=o}catch(m){at(i,i.return,m)}}var _s=!1,bt=!1,op=!1,KE=typeof WeakSet=="function"?WeakSet:Set,$t=null;function JC(i,r){if(i=i.containerInfo,Dp=Zh,i=rv(i),rm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,w=-1,R=-1,q=0,X=0,Z=i,B=null;t:for(;;){for(var F;Z!==o||f!==0&&Z.nodeType!==3||(w=E+f),Z!==m||u!==0&&Z.nodeType!==3||(R=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(F=Z.firstChild)!==null;)B=Z,Z=F;for(;;){if(Z===i)break t;if(B===o&&++q===f&&(w=E),B===m&&++X===u&&(R=E),(F=Z.nextSibling)!==null)break;Z=B,B=Z.parentNode}Z=F}o=w===-1||R===-1?null:{start:w,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(Op={focusedElem:i,selectionRange:o},Zh=!1,$t=r;$t!==null;)if(r=$t,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,$t=i;else for(;$t!==null;){switch(r=$t,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Se=_a(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(Se,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(ve){at(o,o.return,ve)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Pp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Pp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,$t=i;break}$t=r.return}}function XE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:er(i,o),u&4&&mu(5,o);break;case 1:if(er(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){at(o,o.return,E)}else{var f=_a(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){at(o,o.return,E)}}u&64&&FE(o),u&512&&pu(o,o.return);break;case 3:if(er(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{xv(i,r)}catch(E){at(o,o.return,E)}}break;case 27:r===null&&u&4&&YE(o);case 26:case 5:er(i,o),r===null&&u&4&&GE(o),u&512&&pu(o,o.return);break;case 12:er(i,o);break;case 13:er(i,o),u&4&&ZE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=lR.bind(null,o),CR(i,o))));break;case 22:if(u=o.memoizedState!==null||_s,!u){r=r!==null&&r.memoizedState!==null||bt,f=_s;var m=bt;_s=u,(bt=r)&&!m?tr(i,o,(o.subtreeFlags&8772)!==0):er(i,o),_s=f,bt=m}break;case 30:break;default:er(i,o)}}function $E(i){var r=i.alternate;r!==null&&(i.alternate=null,$E(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Bs(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var pt=null,An=!1;function ys(i,r,o){for(o=o.child;o!==null;)WE(i,r,o),o=o.sibling}function WE(i,r,o){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(yt,o)}catch{}switch(o.tag){case 26:bt||Pi(o,r),ys(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:bt||Pi(o,r);var u=pt,f=An;or(o.type)&&(pt=o.stateNode,An=!1),ys(i,r,o),bu(o.stateNode),pt=u,An=f;break;case 5:bt||Pi(o,r);case 6:if(u=pt,f=An,pt=null,ys(i,r,o),pt=u,An=f,pt!==null)if(An)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(o.stateNode)}catch(m){at(o,r,m)}else try{pt.removeChild(o.stateNode)}catch(m){at(o,r,m)}break;case 18:pt!==null&&(An?(i=pt,j0(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Ou(i)):j0(pt,o.stateNode));break;case 4:u=pt,f=An,pt=o.stateNode.containerInfo,An=!0,ys(i,r,o),pt=u,An=f;break;case 0:case 11:case 14:case 15:bt||Js(2,o,r),bt||Js(4,o,r),ys(i,r,o);break;case 1:bt||(Pi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&HE(o,r,u)),ys(i,r,o);break;case 21:ys(i,r,o);break;case 22:bt=(u=bt)||o.memoizedState!==null,ys(i,r,o),bt=u;break;default:ys(i,r,o)}}function ZE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Ou(i)}catch(o){at(r,r.return,o)}}function eR(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new KE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new KE),r;default:throw Error(s(435,i.tag))}}function lp(i,r){var o=eR(i);r.forEach(function(u){var f=uR.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Un(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(or(w.type)){pt=w.stateNode,An=!1;break e}break;case 5:pt=w.stateNode,An=!1;break e;case 3:case 4:pt=w.stateNode.containerInfo,An=!0;break e}w=w.return}if(pt===null)throw Error(s(160));WE(m,E,f),pt=null,An=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)JE(r,i),r=r.sibling}var di=null;function JE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Un(r,i),jn(i),u&4&&(Js(3,i,i.return),mu(3,i),Js(5,i,i.return));break;case 1:Un(r,i),jn(i),u&512&&(bt||o===null||Pi(o,o.return)),u&64&&_s&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=di;if(Un(r,i),jn(i),u&512&&(bt||o===null||Pi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Qr]||m[zt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),on(m,u,o),m[zt]=i,St(m),u=m;break e;case"link":var E=Y0("link","href",f).get(u+(o.href||""));if(E){for(var w=0;w<E.length;w++)if(m=E[w],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(w,1);break t}}m=f.createElement(u),on(m,u,o),f.head.appendChild(m);break;case"meta":if(E=Y0("meta","content",f).get(u+(o.content||""))){for(w=0;w<E.length;w++)if(m=E[w],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(w,1);break t}}m=f.createElement(u),on(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[zt]=i,St(m),u=m}i.stateNode=u}else K0(f,i.type,i.stateNode);else i.stateNode=Q0(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?K0(f,i.type,i.stateNode):Q0(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&sp(i,i.memoizedProps,o.memoizedProps)}break;case 27:Un(r,i),jn(i),u&512&&(bt||o===null||Pi(o,o.return)),o!==null&&u&4&&sp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Un(r,i),jn(i),u&512&&(bt||o===null||Pi(o,o.return)),i.flags&32){f=i.stateNode;try{Xn(f,"")}catch(F){at(i,i.return,F)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,sp(i,f,o!==null?o.memoizedProps:f)),u&1024&&(op=!0);break;case 6:if(Un(r,i),jn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(F){at(i,i.return,F)}}break;case 3:if(Xh=null,f=di,di=Yh(r.containerInfo),Un(r,i),di=f,jn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ou(r.containerInfo)}catch(F){at(i,i.return,F)}op&&(op=!1,e0(i));break;case 4:u=di,di=Yh(i.stateNode.containerInfo),Un(r,i),jn(i),di=u;break;case 12:Un(r,i),jn(i);break;case 13:Un(r,i),jn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(mp=Yn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,lp(i,u)));break;case 22:f=i.memoizedState!==null;var R=o!==null&&o.memoizedState!==null,q=_s,X=bt;if(_s=q||f,bt=X||R,Un(r,i),bt=X,_s=q,jn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||R||_s||bt||ya(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){R=o=r;try{if(m=R.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=R.stateNode;var Z=R.memoizedProps.style,B=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;w.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(F){at(R,R.return,F)}}}else if(r.tag===6){if(o===null){R=r;try{R.stateNode.nodeValue=f?"":R.memoizedProps}catch(F){at(R,R.return,F)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,lp(i,o))));break;case 19:Un(r,i),jn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,lp(i,u)));break;case 30:break;case 21:break;default:Un(r,i),jn(i)}}function jn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(QE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=rp(i);kh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(Xn(E,""),o.flags&=-33);var w=rp(i);kh(i,w,E);break;case 3:case 4:var R=o.stateNode.containerInfo,q=rp(i);ap(i,q,R);break;default:throw Error(s(161))}}catch(X){at(i,i.return,X)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function e0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;e0(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function er(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)XE(i,r.alternate,r),r=r.sibling}function ya(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Js(4,r,r.return),ya(r);break;case 1:Pi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&HE(r,r.return,o),ya(r);break;case 27:bu(r.stateNode);case 26:case 5:Pi(r,r.return),ya(r);break;case 22:r.memoizedState===null&&ya(r);break;case 30:ya(r);break;default:ya(r)}i=i.sibling}}function tr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:tr(f,m,o),mu(4,m);break;case 1:if(tr(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){at(u,u.return,q)}if(u=m,f=u.updateQueue,f!==null){var w=u.stateNode;try{var R=f.shared.hiddenCallbacks;if(R!==null)for(f.shared.hiddenCallbacks=null,f=0;f<R.length;f++)Nv(R[f],w)}catch(q){at(u,u.return,q)}}o&&E&64&&FE(m),pu(m,m.return);break;case 27:YE(m);case 26:case 5:tr(f,m,o),o&&u===null&&E&4&&GE(m),pu(m,m.return);break;case 12:tr(f,m,o);break;case 13:tr(f,m,o),o&&E&4&&ZE(f,m);break;case 22:m.memoizedState===null&&tr(f,m,o),pu(m,m.return);break;case 30:break;default:tr(f,m,o)}r=r.sibling}}function up(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&eu(o))}function cp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&eu(i))}function Vi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)t0(i,r,o,u),r=r.sibling}function t0(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Vi(i,r,o,u),f&2048&&mu(9,r);break;case 1:Vi(i,r,o,u);break;case 3:Vi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&eu(i)));break;case 12:if(f&2048){Vi(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,w=m.onPostCommit;typeof w=="function"&&w(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(R){at(r,r.return,R)}}else Vi(i,r,o,u);break;case 13:Vi(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Vi(i,r,o,u):gu(i,r):m._visibility&2?Vi(i,r,o,u):(m._visibility|=2,Co(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&up(E,r);break;case 24:Vi(i,r,o,u),f&2048&&cp(r.alternate,r);break;default:Vi(i,r,o,u)}}function Co(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,w=o,R=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:Co(m,E,w,R,f),mu(8,E);break;case 23:break;case 22:var X=E.stateNode;E.memoizedState!==null?X._visibility&2?Co(m,E,w,R,f):gu(m,E):(X._visibility|=2,Co(m,E,w,R,f)),f&&q&2048&&up(E.alternate,E);break;case 24:Co(m,E,w,R,f),f&&q&2048&&cp(E.alternate,E);break;default:Co(m,E,w,R,f)}r=r.sibling}}function gu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:gu(o,u),f&2048&&up(u.alternate,u);break;case 24:gu(o,u),f&2048&&cp(u.alternate,u);break;default:gu(o,u)}r=r.sibling}}var _u=8192;function Ro(i){if(i.subtreeFlags&_u)for(i=i.child;i!==null;)n0(i),i=i.sibling}function n0(i){switch(i.tag){case 26:Ro(i),i.flags&_u&&i.memoizedState!==null&&jR(di,i.memoizedState,i.memoizedProps);break;case 5:Ro(i);break;case 3:case 4:var r=di;di=Yh(i.stateNode.containerInfo),Ro(i),di=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=_u,_u=16777216,Ro(i),_u=r):Ro(i));break;default:Ro(i)}}function i0(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function yu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];$t=u,r0(u,i)}i0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)s0(i),i=i.sibling}function s0(i){switch(i.tag){case 0:case 11:case 15:yu(i),i.flags&2048&&Js(9,i,i.return);break;case 3:yu(i);break;case 12:yu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Ph(i)):yu(i);break;default:yu(i)}}function Ph(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];$t=u,r0(u,i)}i0(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Js(8,r,r.return),Ph(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Ph(r));break;default:Ph(r)}i=i.sibling}}function r0(i,r){for(;$t!==null;){var o=$t;switch(o.tag){case 0:case 11:case 15:Js(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:eu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,$t=u;else e:for(o=i;$t!==null;){u=$t;var f=u.sibling,m=u.return;if($E(u),u===o){$t=null;break e}if(f!==null){f.return=m,$t=f;break e}$t=m}}}var tR={getCacheForType:function(i){var r=fn(Ft),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},nR=typeof WeakMap=="function"?WeakMap:Map,Je=0,lt=null,Me=null,Be=0,et=0,zn=null,nr=!1,Io=!1,hp=!1,vs=0,Et=0,ir=0,va=0,fp=0,si=0,No=0,vu=null,Cn=null,dp=!1,mp=0,Vh=1/0,Lh=null,sr=null,an=0,rr=null,xo=null,Do=0,pp=0,gp=null,a0=null,Eu=0,_p=null;function qn(){if((Je&2)!==0&&Be!==0)return Be&-Be;if(K.T!==null){var i=yo;return i!==0?i:bp()}return zs()}function o0(){si===0&&(si=(Be&536870912)===0||Qe?Nl():536870912);var i=ii.current;return i!==null&&(i.flags|=32),si}function Bn(i,r,o){(i===lt&&(et===2||et===9)||i.cancelPendingCommit!==null)&&(Oo(i,0),ar(i,Be,si,!1)),Wi(i,o),((Je&2)===0||i!==lt)&&(i===lt&&((Je&2)===0&&(va|=o),Et===4&&ar(i,Be,si,!1)),Li(i))}function l0(i,r,o){if((Je&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Gr(i,r),f=u?rR(i,r):Ep(i,r,!0),m=u;do{if(f===0){Io&&!u&&ar(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!iR(o)){f=Ep(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var w=i;f=vu;var R=w.current.memoizedState.isDehydrated;if(R&&(Oo(w,E).flags|=256),E=Ep(w,E,!1),E!==2){if(hp&&!R){w.errorRecoveryDisabledLanes|=m,va|=m,f=4;break e}m=Cn,Cn=f,m!==null&&(Cn===null?Cn=m:Cn.push.apply(Cn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Oo(i,0),ar(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:ar(u,r,si,!nr);break e;case 2:Cn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=mp+300-Yn(),10<f)){if(ar(u,r,si,!nr),Ka(u,0,!0)!==0)break e;u.timeoutHandle=L0(u0.bind(null,u,o,Cn,Lh,dp,r,si,va,No,nr,m,2,-0,0),f);break e}u0(u,o,Cn,Lh,dp,r,si,va,No,nr,m,0,-0,0)}}break}while(!0);Li(i)}function u0(i,r,o,u,f,m,E,w,R,q,X,Z,B,F){if(i.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(Ru={stylesheets:null,count:0,unsuspend:UR},n0(r),Z=zR(),Z!==null)){i.cancelPendingCommit=Z(g0.bind(null,i,r,m,o,u,f,E,w,R,X,1,B,F)),ar(i,m,E,!q);return}g0(i,r,m,o,u,f,E,w,R)}function iR(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Vn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ar(i,r,o,u){r&=~fp,r&=~va,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-hn(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&Si(i,o,r)}function Uh(){return(Je&6)===0?(Tu(0),!1):!0}function yp(){if(Me!==null){if(et===0)var i=Me.return;else i=Me,hs=da=null,Pm(i),bo=null,hu=0,i=Me;for(;i!==null;)BE(i.alternate,i),i=i.return;Me=null}}function Oo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,TR(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),yp(),lt=i,Me=o=ls(i.current,null),Be=r,et=0,zn=null,nr=!1,Io=Gr(i,r),hp=!1,No=si=fp=va=ir=Et=0,Cn=vu=null,dp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-hn(u),m=1<<f;r|=i[f],u&=~m}return vs=r,ah(),o}function c0(i,r){Ie=null,K.H=Ah,r===nu||r===ph?(r=Rv(),et=3):r===bv?(r=Rv(),et=4):et=r===IE?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,zn=r,Me===null&&(Et=1,xh(i,Jn(r,i.current)))}function h0(){var i=K.H;return K.H=Ah,i===null?Ah:i}function f0(){var i=K.A;return K.A=tR,i}function vp(){Et=4,nr||(Be&4194048)!==Be&&ii.current!==null||(Io=!0),(ir&134217727)===0&&(va&134217727)===0||lt===null||ar(lt,Be,si,!1)}function Ep(i,r,o){var u=Je;Je|=2;var f=h0(),m=f0();(lt!==i||Be!==r)&&(Lh=null,Oo(i,r)),r=!1;var E=Et;e:do try{if(et!==0&&Me!==null){var w=Me,R=zn;switch(et){case 8:yp(),E=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(r=!0);var q=et;if(et=0,zn=null,Mo(i,w,R,q),o&&Io){E=0;break e}break;default:q=et,et=0,zn=null,Mo(i,w,R,q)}}sR(),E=Et;break}catch(X){c0(i,X)}while(!0);return r&&i.shellSuspendCounter++,hs=da=null,Je=u,K.H=f,K.A=m,Me===null&&(lt=null,Be=0,ah()),E}function sR(){for(;Me!==null;)d0(Me)}function rR(i,r){var o=Je;Je|=2;var u=h0(),f=f0();lt!==i||Be!==r?(Lh=null,Vh=Yn()+500,Oo(i,r)):Io=Gr(i,r);e:do try{if(et!==0&&Me!==null){r=Me;var m=zn;t:switch(et){case 1:et=0,zn=null,Mo(i,r,m,1);break;case 2:case 9:if(Av(m)){et=0,zn=null,m0(r);break}r=function(){et!==2&&et!==9||lt!==i||(et=7),Li(i)},m.then(r,r);break e;case 3:et=7;break e;case 4:et=5;break e;case 7:Av(m)?(et=0,zn=null,m0(r)):(et=0,zn=null,Mo(i,r,m,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var w=Me;if(!E||X0(E)){et=0,zn=null;var R=w.sibling;if(R!==null)Me=R;else{var q=w.return;q!==null?(Me=q,jh(q)):Me=null}break t}}et=0,zn=null,Mo(i,r,m,5);break;case 6:et=0,zn=null,Mo(i,r,m,6);break;case 8:yp(),Et=6;break e;default:throw Error(s(462))}}aR();break}catch(X){c0(i,X)}while(!0);return hs=da=null,K.H=u,K.A=f,Je=o,Me!==null?0:(lt=null,Be=0,ah(),Et)}function aR(){for(;Me!==null&&!Al();)d0(Me)}function d0(i){var r=zE(i.alternate,i,vs);i.memoizedProps=i.pendingProps,r===null?jh(i):Me=r}function m0(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=kE(o,r,r.pendingProps,r.type,void 0,Be);break;case 11:r=kE(o,r,r.pendingProps,r.type.render,r.ref,Be);break;case 5:Pm(r);default:BE(o,r),r=Me=pv(r,vs),r=zE(o,r,vs)}i.memoizedProps=i.pendingProps,r===null?jh(i):Me=r}function Mo(i,r,o,u){hs=da=null,Pm(r),bo=null,hu=0;var f=r.return;try{if(XC(i,f,r,o,Be)){Et=1,xh(i,Jn(o,i.current)),Me=null;return}}catch(m){if(f!==null)throw Me=f,m;Et=1,xh(i,Jn(o,i.current)),Me=null;return}r.flags&32768?(Qe||u===1?i=!0:Io||(Be&536870912)!==0?i=!1:(nr=i=!0,(u===2||u===9||u===3||u===6)&&(u=ii.current,u!==null&&u.tag===13&&(u.flags|=16384))),p0(r,i)):jh(r)}function jh(i){var r=i;do{if((r.flags&32768)!==0){p0(r,nr);return}i=r.return;var o=WC(r.alternate,r,vs);if(o!==null){Me=o;return}if(r=r.sibling,r!==null){Me=r;return}Me=r=i}while(r!==null);Et===0&&(Et=5)}function p0(i,r){do{var o=ZC(i.alternate,i);if(o!==null){o.flags&=32767,Me=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){Me=i;return}Me=i=o}while(i!==null);Et=6,Me=null}function g0(i,r,o,u,f,m,E,w,R){i.cancelPendingCommit=null;do zh();while(an!==0);if((Je&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=cm,Dl(i,o,m,E,w,R),i===lt&&(Me=lt=null,Be=0),xo=r,rr=i,Do=o,pp=m,gp=f,a0=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,cR(qr,function(){return T0(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=K.T,K.T=null,f=se.p,se.p=2,E=Je,Je|=4;try{JC(i,r,o)}finally{Je=E,se.p=f,K.T=u}}an=1,_0(),y0(),v0()}}function _0(){if(an===1){an=0;var i=rr,r=xo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=K.T,K.T=null;var u=se.p;se.p=2;var f=Je;Je|=4;try{JE(r,i);var m=Op,E=rv(i.containerInfo),w=m.focusedElem,R=m.selectionRange;if(E!==w&&w&&w.ownerDocument&&sv(w.ownerDocument.documentElement,w)){if(R!==null&&rm(w)){var q=R.start,X=R.end;if(X===void 0&&(X=q),"selectionStart"in w)w.selectionStart=q,w.selectionEnd=Math.min(X,w.value.length);else{var Z=w.ownerDocument||document,B=Z&&Z.defaultView||window;if(B.getSelection){var F=B.getSelection(),Se=w.textContent.length,ve=Math.min(R.start,Se),rt=R.end===void 0?ve:Math.min(R.end,Se);!F.extend&&ve>rt&&(E=rt,rt=ve,ve=E);var L=iv(w,ve),O=iv(w,rt);if(L&&O&&(F.rangeCount!==1||F.anchorNode!==L.node||F.anchorOffset!==L.offset||F.focusNode!==O.node||F.focusOffset!==O.offset)){var z=Z.createRange();z.setStart(L.node,L.offset),F.removeAllRanges(),ve>rt?(F.addRange(z),F.extend(O.node,O.offset)):(z.setEnd(O.node,O.offset),F.addRange(z))}}}}for(Z=[],F=w;F=F.parentNode;)F.nodeType===1&&Z.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Z.length;w++){var W=Z[w];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Zh=!!Dp,Op=Dp=null}finally{Je=f,se.p=u,K.T=o}}i.current=r,an=2}}function y0(){if(an===2){an=0;var i=rr,r=xo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=K.T,K.T=null;var u=se.p;se.p=2;var f=Je;Je|=4;try{XE(i,r.alternate,r)}finally{Je=f,se.p=u,K.T=o}}an=3}}function v0(){if(an===4||an===3){an=0,Pc();var i=rr,r=xo,o=Do,u=a0;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?an=5:(an=0,xo=rr=null,E0(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(sr=null),Xa(o),r=r.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(yt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=K.T,f=se.p,se.p=2,K.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var w=u[E];m(w.value,{componentStack:w.stack})}}finally{K.T=r,se.p=f}}(Do&3)!==0&&zh(),Li(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===_p?Eu++:(Eu=0,_p=i):Eu=0,Tu(0)}}function E0(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,eu(r)))}function zh(i){return _0(),y0(),v0(),T0()}function T0(){if(an!==5)return!1;var i=rr,r=pp;pp=0;var o=Xa(Do),u=K.T,f=se.p;try{se.p=32>o?32:o,K.T=null,o=gp,gp=null;var m=rr,E=Do;if(an=0,xo=rr=null,Do=0,(Je&6)!==0)throw Error(s(331));var w=Je;if(Je|=4,s0(m.current),t0(m,m.current,E,o),Je=w,Tu(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(yt,m)}catch{}return!0}finally{se.p=f,K.T=u,E0(i,r)}}function S0(i,r,o){r=Jn(o,r),r=Xm(i.stateNode,r,2),i=Xs(i,r,2),i!==null&&(Wi(i,2),Li(i))}function at(i,r,o){if(i.tag===3)S0(i,i,o);else for(;r!==null;){if(r.tag===3){S0(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(sr===null||!sr.has(u))){i=Jn(o,i),o=CE(2),u=Xs(r,o,2),u!==null&&(RE(o,u,r,i),Wi(u,2),Li(u));break}}r=r.return}}function Tp(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new nR;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(hp=!0,f.add(o),i=oR.bind(null,i,r,o),r.then(i,i))}function oR(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,lt===i&&(Be&o)===o&&(Et===4||Et===3&&(Be&62914560)===Be&&300>Yn()-mp?(Je&2)===0&&Oo(i,0):fp|=o,No===Be&&(No=0)),Li(i)}function w0(i,r){r===0&&(r=xl()),i=mo(i,r),i!==null&&(Wi(i,r),Li(i))}function lR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),w0(i,o)}function uR(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),w0(i,o)}function cR(i,r){return jr(i,r)}var qh=null,ko=null,Sp=!1,Bh=!1,wp=!1,Ea=0;function Li(i){i!==ko&&i.next===null&&(ko===null?qh=ko=i:ko=ko.next=i),Bh=!0,Sp||(Sp=!0,fR())}function Tu(i,r){if(!wp&&Bh){wp=!0;do for(var o=!1,u=qh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,w=u.pingedLanes;m=(1<<31-hn(42|i)+1)-1,m&=f&~(E&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,R0(u,m))}else m=Be,m=Ka(u,u===lt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Gr(u,m)||(o=!0,R0(u,m));u=u.next}while(o);wp=!1}}function hR(){b0()}function b0(){Bh=Sp=!1;var i=0;Ea!==0&&(ER()&&(i=Ea),Ea=0);for(var r=Yn(),o=null,u=qh;u!==null;){var f=u.next,m=A0(u,r);m===0?(u.next=null,o===null?qh=f:o.next=f,f===null&&(ko=o)):(o=u,(i!==0||(m&3)!==0)&&(Bh=!0)),u=f}Tu(i)}function A0(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-hn(m),w=1<<E,R=f[E];R===-1?((w&o)===0||(w&u)!==0)&&(f[E]=Il(w,r)):R<=r&&(i.expiredLanes|=w),m&=~w}if(r=lt,o=Be,o=Ka(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(et===2||et===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&zr(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Gr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&zr(u),Xa(o)){case 2:case 8:o=Qa;break;case 32:o=qr;break;case 268435456:o=Ya;break;default:o=qr}return u=C0.bind(null,i),o=jr(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&zr(u),i.callbackPriority=2,i.callbackNode=null,2}function C0(i,r){if(an!==0&&an!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(zh()&&i.callbackNode!==o)return null;var u=Be;return u=Ka(i,i===lt?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(l0(i,u,r),A0(i,Yn()),i.callbackNode!=null&&i.callbackNode===o?C0.bind(null,i):null)}function R0(i,r){if(zh())return null;l0(i,r,!0)}function fR(){SR(function(){(Je&6)!==0?jr(Cl,hR):b0()})}function bp(){return Ea===0&&(Ea=Nl()),Ea}function I0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:to(""+i)}function N0(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function dR(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=I0((f[Nt]||null).action),E=u.submitter;E&&(r=(r=E[Nt]||null)?I0(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var w=new no("action","action",null,u,f);i.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ea!==0){var R=E?N0(f,E):new FormData(f);Hm(o,{pending:!0,data:R,method:f.method,action:m},null,R)}}else typeof m=="function"&&(w.preventDefault(),R=E?N0(f,E):new FormData(f),Hm(o,{pending:!0,data:R,method:f.method,action:m},m,R))},currentTarget:f}]})}}for(var Ap=0;Ap<um.length;Ap++){var Cp=um[Ap],mR=Cp.toLowerCase(),pR=Cp[0].toUpperCase()+Cp.slice(1);fi(mR,"on"+pR)}fi(lv,"onAnimationEnd"),fi(uv,"onAnimationIteration"),fi(cv,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(OC,"onTransitionRun"),fi(MC,"onTransitionStart"),fi(kC,"onTransitionCancel"),fi(hv,"onTransitionEnd"),Ji("onMouseEnter",["mouseout","mouseover"]),Ji("onMouseLeave",["mouseout","mouseover"]),Ji("onPointerEnter",["pointerout","pointerover"]),Ji("onPointerLeave",["pointerout","pointerover"]),ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ci("onBeforeInput",["compositionend","keypress","textInput","paste"]),ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Su));function x0(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var w=u[E],R=w.instance,q=w.currentTarget;if(w=w.listener,R!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=q;try{m(f)}catch(X){Nh(X)}f.currentTarget=null,m=R}else for(E=0;E<u.length;E++){if(w=u[E],R=w.instance,q=w.currentTarget,w=w.listener,R!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=q;try{m(f)}catch(X){Nh(X)}f.currentTarget=null,m=R}}}}function ke(i,r){var o=r[Ml];o===void 0&&(o=r[Ml]=new Set);var u=i+"__bubble";o.has(u)||(D0(r,i,2,!1),o.add(u))}function Rp(i,r,o){var u=0;r&&(u|=4),D0(o,i,u,r)}var Fh="_reactListening"+Math.random().toString(36).slice(2);function Ip(i){if(!i[Fh]){i[Fh]=!0,kl.forEach(function(o){o!=="selectionchange"&&(gR.has(o)||Rp(o,!1,i),Rp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Fh]||(r[Fh]=!0,Rp("selectionchange",!1,r))}}function D0(i,r,o,u){switch(tT(r)){case 2:var f=FR;break;case 8:f=HR;break;default:f=Bp}o=f.bind(null,r,o,i),f=void 0,!Wn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function Np(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var w=u.stateNode.containerInfo;if(w===f)break;if(E===4)for(E=u.return;E!==null;){var R=E.tag;if((R===3||R===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;w!==null;){if(E=Zi(w),E===null)return;if(R=E.tag,R===5||R===6||R===26||R===27){u=m=E;continue e}w=w.parentNode}}u=u.return}Gc(function(){var q=m,X=$n(o),Z=[];e:{var B=fv.get(i);if(B!==void 0){var F=no,Se=i;switch(i){case"keypress":if(Ii(o)===0)break e;case"keydown":case"keyup":F=lo;break;case"focusin":Se="focus",F=ro;break;case"focusout":Se="blur",F=ro;break;case"beforeblur":case"afterblur":F=ro;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Zn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Jc;break;case lv:case uv:case cv:F=ao;break;case hv:F=th;break;case"scroll":case"scrollend":F=Qc;break;case"wheel":F=uo;break;case"copy":case"cut":case"paste":F=oo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Ql;break;case"toggle":case"beforetoggle":F=ih}var ve=(r&4)!==0,rt=!ve&&(i==="scroll"||i==="scrollend"),L=ve?B!==null?B+"Capture":null:B;ve=[];for(var O=q,z;O!==null;){var W=O;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||L===null||(W=Jr(O,L),W!=null&&ve.push(wu(O,W,z))),rt)break;O=O.return}0<ve.length&&(B=new F(B,Se,null,o,X),Z.push({event:B,listeners:ve}))}}if((r&7)===0){e:{if(B=i==="mouseover"||i==="pointerover",F=i==="mouseout"||i==="pointerout",B&&o!==ns&&(Se=o.relatedTarget||o.fromElement)&&(Zi(Se)||Se[Kn]))break e;if((F||B)&&(B=X.window===X?X:(B=X.ownerDocument)?B.defaultView||B.parentWindow:window,F?(Se=o.relatedTarget||o.toElement,F=q,Se=Se?Zi(Se):null,Se!==null&&(rt=l(Se),ve=Se.tag,Se!==rt||ve!==5&&ve!==27&&ve!==6)&&(Se=null)):(F=null,Se=q),F!==Se)){if(ve=Zn,W="onMouseLeave",L="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(ve=Ql,W="onPointerLeave",L="onPointerEnter",O="pointer"),rt=F==null?B:bi(F),z=Se==null?B:bi(Se),B=new ve(W,O+"leave",F,o,X),B.target=rt,B.relatedTarget=z,W=null,Zi(X)===q&&(ve=new ve(L,O+"enter",Se,o,X),ve.target=z,ve.relatedTarget=rt,W=ve),rt=W,F&&Se)t:{for(ve=F,L=Se,O=0,z=ve;z;z=Po(z))O++;for(z=0,W=L;W;W=Po(W))z++;for(;0<O-z;)ve=Po(ve),O--;for(;0<z-O;)L=Po(L),z--;for(;O--;){if(ve===L||L!==null&&ve===L.alternate)break t;ve=Po(ve),L=Po(L)}ve=null}else ve=null;F!==null&&O0(Z,B,F,ve,!1),Se!==null&&rt!==null&&O0(Z,rt,Se,ve,!0)}}e:{if(B=q?bi(q):window,F=B.nodeName&&B.nodeName.toLowerCase(),F==="select"||F==="input"&&B.type==="file")var ce=Wy;else if(Bt(B))if(Zy)ce=NC;else{ce=RC;var xe=CC}else F=B.nodeName,!F||F.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?q&&jl(q.elementType)&&(ce=Wy):ce=IC;if(ce&&(ce=ce(i,q))){os(Z,ce,o,X);break e}xe&&xe(i,B,q),i==="focusout"&&q&&B.type==="number"&&q.memoizedProps.value!=null&&Hs(B,"number",B.value)}switch(xe=q?bi(q):window,i){case"focusin":(Bt(xe)||xe.contentEditable==="true")&&(co=xe,am=q,Xl=null);break;case"focusout":Xl=am=co=null;break;case"mousedown":om=!0;break;case"contextmenu":case"mouseup":case"dragend":om=!1,av(Z,o,X);break;case"selectionchange":if(DC)break;case"keydown":case"keyup":av(Z,o,X)}var de;if(Di)e:{switch(i){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else ze?H(i,o)&&(Ee="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(y&&o.locale!=="ko"&&(ze||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&ze&&(de=ql()):(Ri=X,Gs="value"in Ri?Ri.value:Ri.textContent,ze=!0)),xe=Hh(q,Ee),0<xe.length&&(Ee=new Hl(Ee,i,null,o,X),Z.push({event:Ee,listeners:xe}),de?Ee.data=de:(de=te(o),de!==null&&(Ee.data=de)))),(de=_?qt(i,o):qe(i,o))&&(Ee=Hh(q,"onBeforeInput"),0<Ee.length&&(xe=new Hl("onBeforeInput","beforeinput",null,o,X),Z.push({event:xe,listeners:Ee}),xe.data=de)),dR(Z,i,q,o,X)}x0(Z,r)})}function wu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Hh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Jr(i,o),f!=null&&u.unshift(wu(i,f,m)),f=Jr(i,r),f!=null&&u.push(wu(i,f,m))),i.tag===3)return u;i=i.return}return[]}function Po(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function O0(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var w=o,R=w.alternate,q=w.stateNode;if(w=w.tag,R!==null&&R===u)break;w!==5&&w!==26&&w!==27||q===null||(R=q,f?(q=Jr(o,m),q!=null&&E.unshift(wu(o,q,R))):f||(q=Jr(o,m),q!=null&&E.push(wu(o,q,R)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var _R=/\r\n?/g,yR=/\u0000|\uFFFD/g;function M0(i){return(typeof i=="string"?i:""+i).replace(_R,`
`).replace(yR,"")}function k0(i,r){return r=M0(r),M0(i)===r}function Gh(){}function st(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Xn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Xn(i,""+u);break;case"className":Ai(i,"class",u);break;case"tabIndex":Ai(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ai(i,o,u);break;case"style":Ul(i,u,m);break;case"data":if(r!=="object"){Ai(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=to(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&st(i,r,"name",f.name,f,null),st(i,r,"formEncType",f.formEncType,f,null),st(i,r,"formMethod",f.formMethod,f,null),st(i,r,"formTarget",f.formTarget,f,null)):(st(i,r,"encType",f.encType,f,null),st(i,r,"method",f.method,f,null),st(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=to(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Gh);break;case"onScroll":u!=null&&ke("scroll",i);break;case"onScrollEnd":u!=null&&ke("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=to(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":ke("beforetoggle",i),ke("toggle",i),Fs(i,"popover",u);break;case"xlinkActuate":nn(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":nn(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":nn(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":nn(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":nn(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":nn(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":nn(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":nn(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":nn(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Fs(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Jd.get(o)||o,Fs(i,o,u))}}function xp(i,r,o,u,f,m){switch(o){case"style":Ul(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Xn(i,u):(typeof u=="number"||typeof u=="bigint")&&Xn(i,""+u);break;case"onScroll":u!=null&&ke("scroll",i);break;case"onScrollEnd":u!=null&&ke("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Gh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$a.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Nt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):Fs(i,o,u)}}}function on(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",i),ke("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:st(i,r,m,E,o,null)}}f&&st(i,r,"srcSet",o.srcSet,o,null),u&&st(i,r,"src",o.src,o,null);return;case"input":ke("invalid",i);var w=m=E=f=null,R=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var X=o[u];if(X!=null)switch(u){case"name":f=X;break;case"type":E=X;break;case"checked":R=X;break;case"defaultChecked":q=X;break;case"value":m=X;break;case"defaultValue":w=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,r));break;default:st(i,r,u,X,o,null)}}$r(i,m,w,R,q,E,f,!1),eo(i);return;case"select":ke("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(w=o[f],w!=null))switch(f){case"value":m=w;break;case"defaultValue":E=w;break;case"multiple":u=w;default:st(i,r,f,w,o,null)}r=m,o=E,i.multiple=!!u,r!=null?ts(i,!!u,r,!1):o!=null&&ts(i,!!u,o,!0);return;case"textarea":ke("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(w=o[E],w!=null))switch(E){case"value":u=w;break;case"defaultValue":f=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:st(i,r,E,w,o,null)}Wr(i,u,f,m),eo(i);return;case"option":for(R in o)if(o.hasOwnProperty(R)&&(u=o[R],u!=null))switch(R){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:st(i,r,R,u,o,null)}return;case"dialog":ke("beforetoggle",i),ke("toggle",i),ke("cancel",i),ke("close",i);break;case"iframe":case"object":ke("load",i);break;case"video":case"audio":for(u=0;u<Su.length;u++)ke(Su[u],i);break;case"image":ke("error",i),ke("load",i);break;case"details":ke("toggle",i);break;case"embed":case"source":case"link":ke("error",i),ke("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:st(i,r,q,u,o,null)}return;default:if(jl(r)){for(X in o)o.hasOwnProperty(X)&&(u=o[X],u!==void 0&&xp(i,r,X,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&st(i,r,w,u,o,null))}function vR(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,w=null,R=null,q=null,X=null;for(F in o){var Z=o[F];if(o.hasOwnProperty(F)&&Z!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":R=Z;default:u.hasOwnProperty(F)||st(i,r,F,null,u,Z)}}for(var B in u){var F=u[B];if(Z=o[B],u.hasOwnProperty(B)&&(F!=null||Z!=null))switch(B){case"type":m=F;break;case"name":f=F;break;case"checked":q=F;break;case"defaultChecked":X=F;break;case"value":E=F;break;case"defaultValue":w=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==Z&&st(i,r,B,F,u,Z)}}Pn(i,E,w,R,q,X,m,f);return;case"select":F=E=w=B=null;for(m in o)if(R=o[m],o.hasOwnProperty(m)&&R!=null)switch(m){case"value":break;case"multiple":F=R;default:u.hasOwnProperty(m)||st(i,r,m,null,u,R)}for(f in u)if(m=u[f],R=o[f],u.hasOwnProperty(f)&&(m!=null||R!=null))switch(f){case"value":B=m;break;case"defaultValue":w=m;break;case"multiple":E=m;default:m!==R&&st(i,r,f,m,u,R)}r=w,o=E,u=F,B!=null?ts(i,!!o,B,!1):!!u!=!!o&&(r!=null?ts(i,!!o,r,!0):ts(i,!!o,o?[]:"",!1));return;case"textarea":F=B=null;for(w in o)if(f=o[w],o.hasOwnProperty(w)&&f!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:st(i,r,w,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":B=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&st(i,r,E,f,u,m)}nt(i,B,F);return;case"option":for(var Se in o)if(B=o[Se],o.hasOwnProperty(Se)&&B!=null&&!u.hasOwnProperty(Se))switch(Se){case"selected":i.selected=!1;break;default:st(i,r,Se,null,u,B)}for(R in u)if(B=u[R],F=o[R],u.hasOwnProperty(R)&&B!==F&&(B!=null||F!=null))switch(R){case"selected":i.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:st(i,r,R,B,u,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in o)B=o[ve],o.hasOwnProperty(ve)&&B!=null&&!u.hasOwnProperty(ve)&&st(i,r,ve,null,u,B);for(q in u)if(B=u[q],F=o[q],u.hasOwnProperty(q)&&B!==F&&(B!=null||F!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:st(i,r,q,B,u,F)}return;default:if(jl(r)){for(var rt in o)B=o[rt],o.hasOwnProperty(rt)&&B!==void 0&&!u.hasOwnProperty(rt)&&xp(i,r,rt,void 0,u,B);for(X in u)B=u[X],F=o[X],!u.hasOwnProperty(X)||B===F||B===void 0&&F===void 0||xp(i,r,X,B,u,F);return}}for(var L in o)B=o[L],o.hasOwnProperty(L)&&B!=null&&!u.hasOwnProperty(L)&&st(i,r,L,null,u,B);for(Z in u)B=u[Z],F=o[Z],!u.hasOwnProperty(Z)||B===F||B==null&&F==null||st(i,r,Z,B,u,F)}var Dp=null,Op=null;function Qh(i){return i.nodeType===9?i:i.ownerDocument}function P0(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function V0(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Mp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var kp=null;function ER(){var i=window.event;return i&&i.type==="popstate"?i===kp?!1:(kp=i,!0):(kp=null,!1)}var L0=typeof setTimeout=="function"?setTimeout:void 0,TR=typeof clearTimeout=="function"?clearTimeout:void 0,U0=typeof Promise=="function"?Promise:void 0,SR=typeof queueMicrotask=="function"?queueMicrotask:typeof U0<"u"?function(i){return U0.resolve(null).then(i).catch(wR)}:L0;function wR(i){setTimeout(function(){throw i})}function or(i){return i==="head"}function j0(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&bu(E.documentElement),o&2&&bu(E.body),o&4)for(o=E.head,bu(o),E=o.firstChild;E;){var w=E.nextSibling,R=E.nodeName;E[Qr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=w}}if(f===0){i.removeChild(m),Ou(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Ou(r)}function Pp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Pp(o),Bs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function bR(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Qr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=mi(i.nextSibling),i===null)break}return null}function AR(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=mi(i.nextSibling),i===null))return null;return i}function Vp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function CR(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function mi(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Lp=null;function z0(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function q0(i,r,o){switch(r=Qh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function bu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Bs(i)}var ri=new Map,B0=new Set;function Yh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Es=se.d;se.d={f:RR,r:IR,D:NR,C:xR,L:DR,m:OR,X:kR,S:MR,M:PR};function RR(){var i=Es.f(),r=Uh();return i||r}function IR(i){var r=wi(i);r!==null&&r.tag===5&&r.type==="form"?lE(r):Es.r(i)}var Vo=typeof document>"u"?null:document;function F0(i,r,o){var u=Vo;if(u&&typeof r=="string"&&r){var f=xt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),B0.has(f)||(B0.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),on(r,"link",i),St(r),u.head.appendChild(r)))}}function NR(i){Es.D(i),F0("dns-prefetch",i,null)}function xR(i,r){Es.C(i,r),F0("preconnect",i,r)}function DR(i,r,o){Es.L(i,r,o);var u=Vo;if(u&&i&&r){var f='link[rel="preload"][as="'+xt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+xt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+xt(o.imageSizes)+'"]')):f+='[href="'+xt(i)+'"]';var m=f;switch(r){case"style":m=Lo(i);break;case"script":m=Uo(i)}ri.has(m)||(i=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),ri.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(Au(m))||r==="script"&&u.querySelector(Cu(m))||(r=u.createElement("link"),on(r,"link",i),St(r),u.head.appendChild(r)))}}function OR(i,r){Es.m(i,r);var o=Vo;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+xt(u)+'"][href="'+xt(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Uo(i)}if(!ri.has(m)&&(i=v({rel:"modulepreload",href:i},r),ri.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Cu(m)))return}u=o.createElement("link"),on(u,"link",i),St(u),o.head.appendChild(u)}}}function MR(i,r,o){Es.S(i,r,o);var u=Vo;if(u&&i){var f=vn(u).hoistableStyles,m=Lo(i);r=r||"default";var E=f.get(m);if(!E){var w={loading:0,preload:null};if(E=u.querySelector(Au(m)))w.loading=5;else{i=v({rel:"stylesheet",href:i,"data-precedence":r},o),(o=ri.get(m))&&Up(i,o);var R=E=u.createElement("link");St(R),on(R,"link",i),R._p=new Promise(function(q,X){R.onload=q,R.onerror=X}),R.addEventListener("load",function(){w.loading|=1}),R.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Kh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:w},f.set(m,E)}}}function kR(i,r){Es.X(i,r);var o=Vo;if(o&&i){var u=vn(o).hoistableScripts,f=Uo(i),m=u.get(f);m||(m=o.querySelector(Cu(f)),m||(i=v({src:i,async:!0},r),(r=ri.get(f))&&jp(i,r),m=o.createElement("script"),St(m),on(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function PR(i,r){Es.M(i,r);var o=Vo;if(o&&i){var u=vn(o).hoistableScripts,f=Uo(i),m=u.get(f);m||(m=o.querySelector(Cu(f)),m||(i=v({src:i,async:!0,type:"module"},r),(r=ri.get(f))&&jp(i,r),m=o.createElement("script"),St(m),on(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function H0(i,r,o,u){var f=(f=me.current)?Yh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Lo(o.href),o=vn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Lo(o.href);var m=vn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(Au(i)))&&!m._p&&(E.instance=m,E.state.loading=5),ri.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ri.set(i,o),m||VR(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Uo(o),o=vn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Lo(i){return'href="'+xt(i)+'"'}function Au(i){return'link[rel="stylesheet"]['+i+"]"}function G0(i){return v({},i,{"data-precedence":i.precedence,precedence:null})}function VR(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),on(r,"link",o),St(r),i.head.appendChild(r))}function Uo(i){return'[src="'+xt(i)+'"]'}function Cu(i){return"script[async]"+i}function Q0(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+xt(o.href)+'"]');if(u)return r.instance=u,St(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),St(u),on(u,"style",f),Kh(u,o.precedence,i),r.instance=u;case"stylesheet":f=Lo(o.href);var m=i.querySelector(Au(f));if(m)return r.state.loading|=4,r.instance=m,St(m),m;u=G0(o),(f=ri.get(f))&&Up(u,f),m=(i.ownerDocument||i).createElement("link"),St(m);var E=m;return E._p=new Promise(function(w,R){E.onload=w,E.onerror=R}),on(m,"link",u),r.state.loading|=4,Kh(m,o.precedence,i),r.instance=m;case"script":return m=Uo(o.src),(f=i.querySelector(Cu(m)))?(r.instance=f,St(f),f):(u=o,(f=ri.get(m))&&(u=v({},o),jp(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),St(f),on(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Kh(u,o.precedence,i));return r.instance}function Kh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var w=u[E];if(w.dataset.precedence===r)m=w;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Up(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function jp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Xh=null;function Y0(i,r,o){if(Xh===null){var u=new Map,f=Xh=new Map;f.set(o,u)}else f=Xh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[Qr]||m[zt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var w=u.get(E);w?w.push(m):u.set(E,[m])}}return u}function K0(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function LR(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function X0(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Ru=null;function UR(){}function jR(i,r,o){if(Ru===null)throw Error(s(475));var u=Ru;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Lo(o.href),m=i.querySelector(Au(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=$h.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,St(m);return}m=i.ownerDocument||i,o=G0(o),(f=ri.get(f))&&Up(o,f),m=m.createElement("link"),St(m);var E=m;E._p=new Promise(function(w,R){E.onload=w,E.onerror=R}),on(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=$h.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function zR(){if(Ru===null)throw Error(s(475));var i=Ru;return i.stylesheets&&i.count===0&&zp(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&zp(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function $h(){if(this.count--,this.count===0){if(this.stylesheets)zp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Wh=null;function zp(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Wh=new Map,r.forEach(qR,i),Wh=null,$h.call(i))}function qR(i,r){if(!(r.state.loading&4)){var o=Wh.get(i);if(o)var u=o.get(null);else{o=new Map,Wh.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=$h.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var Iu={$$typeof:he,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function BR(i,r,o,u,f,m,E,w){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$i(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.hiddenUpdates=$i(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function $0(i,r,o,u,f,m,E,w,R,q,X,Z){return i=new BR(i,r,o,E,w,R,q,Z),r=1,m===!0&&(r|=24),m=Ln(3,null,null,r),i.current=m,m.stateNode=i,r=Tm(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},Am(m),i}function W0(i){return i?(i=po,i):po}function Z0(i,r,o,u,f,m){f=W0(f),u.context===null?u.context=f:u.pendingContext=f,u=Ks(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Xs(i,u,r),o!==null&&(Bn(o,i,r),su(o,i,r))}function J0(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function qp(i,r){J0(i,r),(i=i.alternate)&&J0(i,r)}function eT(i){if(i.tag===13){var r=mo(i,67108864);r!==null&&Bn(r,i,67108864),qp(i,67108864)}}var Zh=!0;function FR(i,r,o,u){var f=K.T;K.T=null;var m=se.p;try{se.p=2,Bp(i,r,o,u)}finally{se.p=m,K.T=f}}function HR(i,r,o,u){var f=K.T;K.T=null;var m=se.p;try{se.p=8,Bp(i,r,o,u)}finally{se.p=m,K.T=f}}function Bp(i,r,o,u){if(Zh){var f=Fp(u);if(f===null)Np(i,r,u,Jh,o),nT(i,u);else if(QR(f,i,r,o,u))u.stopPropagation();else if(nT(i,u),r&4&&-1<GR.indexOf(i)){for(;f!==null;){var m=wi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=ui(m.pendingLanes);if(E!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var R=1<<31-hn(E);w.entanglements[1]|=R,E&=~R}Li(m),(Je&6)===0&&(Vh=Yn()+500,Tu(0))}}break;case 13:w=mo(m,2),w!==null&&Bn(w,m,2),Uh(),qp(m,2)}if(m=Fp(u),m===null&&Np(i,r,u,Jh,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Np(i,r,u,null,o)}}function Fp(i){return i=$n(i),Hp(i)}var Jh=null;function Hp(i){if(Jh=null,i=Zi(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return Jh=i,null}function tT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yd()){case Cl:return 2;case Qa:return 8;case qr:case Kd:return 32;case Ya:return 268435456;default:return 32}default:return 32}}var Gp=!1,lr=null,ur=null,cr=null,Nu=new Map,xu=new Map,hr=[],GR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nT(i,r){switch(i){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Nu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":xu.delete(r.pointerId)}}function Du(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=wi(r),r!==null&&eT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function QR(i,r,o,u,f){switch(r){case"focusin":return lr=Du(lr,i,r,o,u,f),!0;case"dragenter":return ur=Du(ur,i,r,o,u,f),!0;case"mouseover":return cr=Du(cr,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return Nu.set(m,Du(Nu.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,xu.set(m,Du(xu.get(m)||null,i,r,o,u,f)),!0}return!1}function iT(i){var r=Zi(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Uc(i.priority,function(){if(o.tag===13){var u=qn();u=js(u);var f=mo(o,u);f!==null&&Bn(f,o,u),qp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ef(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Fp(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);ns=u,o.target.dispatchEvent(u),ns=null}else return r=wi(o),r!==null&&eT(r),i.blockedOn=o,!1;r.shift()}return!0}function sT(i,r,o){ef(i)&&o.delete(r)}function YR(){Gp=!1,lr!==null&&ef(lr)&&(lr=null),ur!==null&&ef(ur)&&(ur=null),cr!==null&&ef(cr)&&(cr=null),Nu.forEach(sT),xu.forEach(sT)}function tf(i,r){i.blockedOn===r&&(i.blockedOn=null,Gp||(Gp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,YR)))}var nf=null;function rT(i){nf!==i&&(nf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){nf===i&&(nf=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(Hp(u||o)===null)continue;break}var m=wi(o);m!==null&&(i.splice(r,3),r-=3,Hm(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Ou(i){function r(R){return tf(R,i)}lr!==null&&tf(lr,i),ur!==null&&tf(ur,i),cr!==null&&tf(cr,i),Nu.forEach(r),xu.forEach(r);for(var o=0;o<hr.length;o++){var u=hr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<hr.length&&(o=hr[0],o.blockedOn===null);)iT(o),o.blockedOn===null&&hr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Nt]||null;if(typeof m=="function")E||rT(o);else if(E){var w=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Nt]||null)w=E.formAction;else if(Hp(f)!==null)continue}else w=E.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),rT(o)}}}function Qp(i){this._internalRoot=i}sf.prototype.render=Qp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=qn();Z0(o,u,i,r,null,null)},sf.prototype.unmount=Qp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;Z0(i.current,2,null,i,null,null),Uh(),r[Kn]=null}};function sf(i){this._internalRoot=i}sf.prototype.unstable_scheduleHydration=function(i){if(i){var r=zs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<hr.length&&r!==0&&r<hr[o].priority;o++);hr.splice(o,0,i),o===0&&iT(i)}};var aT=e.version;if(aT!=="19.1.1")throw Error(s(527,aT,"19.1.1"));se.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var KR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rf.isDisabled&&rf.supportsFiber)try{yt=rf.inject(KR),Ze=rf}catch{}}return ku.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=SE,m=wE,E=bE,w=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks)),r=$0(i,1,!1,null,null,o,u,f,m,E,w,null),i[Kn]=r.current,Ip(i),new Qp(r)},ku.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=SE,E=wE,w=bE,R=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(R=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),r=$0(i,1,!0,r,o??null,u,f,m,E,w,R,q),r.context=W0(null),o=r.current,u=qn(),u=js(u),f=Ks(u),f.callback=null,Xs(o,f,u),o=u,r.current.lanes=o,Wi(r,o),Li(r),i[Kn]=r.current,Ip(i),new sf(r)},ku.version="19.1.1",ku}var gT;function sI(){if(gT)return Xp.exports;gT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Xp.exports=iI(),Xp.exports}var rI=sI();const aI=()=>{};var _T={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw dl(e)},dl=function(n){return new Error("Firebase Database ("+qw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},oI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},u_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,v=l>>2,T=(l&3)<<4|d>>4;let S=(d&15)<<2|g>>6,x=g&63;p||(x=64,c||(S=64)),s.push(t[v],t[T],t[S],t[x])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):oI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new lI;const S=l<<2|d>>4;if(s.push(S),g!==64){const x=d<<4&240|g>>2;if(s.push(x),T!==64){const j=g<<6&192|T;s.push(j)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class lI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fw=function(n){const e=Bw(n);return u_.encodeByteArray(e,!0)},Rf=function(n){return Fw(n).replace(/\./g,"")},If=function(n){try{return u_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(n){return Hw(void 0,n)}function Hw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!cI(t)||(n[t]=Hw(n[t],e[t]));return n}function cI(n){return n!=="__proto__"}/**
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
 */function hI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fI=()=>hI().__FIREBASE_DEFAULTS__,dI=()=>{if(typeof process>"u"||typeof _T>"u")return;const n=_T.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},mI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&If(n[1]);return e&&JSON.parse(e)},cd=()=>{try{return aI()||fI()||dI()||mI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gw=n=>cd()?.emulatorHosts?.[n],Qw=n=>{const e=Gw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Yw=()=>cd()?.config,Kw=n=>cd()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Xw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Rf(JSON.stringify(t)),Rf(JSON.stringify(c)),""].join(".")}const Fu={};function pI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Fu))Fu[e]?n.emulator.push(e):n.prod.push(e);return n}function gI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let yT=!1;function h_(n,e){if(typeof window>"u"||typeof document>"u"||!kr(window.location.host)||Fu[n]===e||Fu[n]||yT)return;Fu[n]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=pI().prod.length>0;function c(){const S=document.getElementById(s);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,x){S.setAttribute("width","24"),S.setAttribute("id",x),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{yT=!0,c()},S}function v(S,x){S.setAttribute("id",x),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=gI(s),x=t("text"),j=document.getElementById(x)||document.createElement("span"),Q=t("learnmore"),G=document.getElementById(Q)||document.createElement("a"),ge=t("preprendIcon"),ue=document.getElementById(ge)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const he=S.element;d(he),v(G,Q);const Ve=g();p(ue,ge),he.append(ue,j,G,Ve),document.body.appendChild(he)}l?(j.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function f_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_n())}function _I(){const n=cd()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $w(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EI(){const n=_n();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function TI(){return qw.NODE_ADMIN===!0}function SI(){return!_I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wI(){try{return typeof indexedDB=="object"}catch{return!1}}function bI(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="FirebaseError";class Vs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=AI,Object.setPrototypeOf(this,Vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_c.prototype.create)}}class _c{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?CI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Vs(a,d,s)}}function CI(n,e){return n.replace(RI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const RI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n){return JSON.parse(n)}function tn(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=ec(If(l[0])||""),t=ec(If(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},II=function(n){const e=Ww(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},NI=function(n){const e=Ww(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Jo(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Nf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Gi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(vT(l)&&vT(c)){if(!Gi(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function vT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const S=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,v;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),v=1518500249):(g=l^c^d,v=1859775393):T<60?(g=l&c|d&(l|c),v=2400959708):(g=l^c^d,v=3395469782);const S=(a<<5|a>>>27)+g+p+v+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function DI(n,e){const t=new OI(n,e);return t.subscribe.bind(t)}class OI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");MI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Jp),a.error===void 0&&(a.error=Jp),a.complete===void 0&&(a.complete=Jp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Jp(){}function el(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ne(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},hd=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ct(n){return n&&n._delegate?n._delegate:n}class Ar{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class PI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ss;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LI(e))try{this.getOrInitializeService({instanceIdentifier:Ta})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Ta){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ta){return this.instances.has(e)}getOptions(e=Ta){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:VI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ta){return this.component?this.component.multipleInstances?e:Ta:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VI(n){return n===Ta?void 0:n}function LI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new PI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const jI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},zI=Pe.INFO,qI={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},BI=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=qI[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fd{constructor(e){this.name=e,this._logLevel=zI,this._logHandler=BI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const FI=(n,e)=>e.some(t=>n instanceof t);let ET,TT;function HI(){return ET||(ET=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GI(){return TT||(TT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zw=new WeakMap,Tg=new WeakMap,Jw=new WeakMap,eg=new WeakMap,d_=new WeakMap;function QI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(yr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Zw.set(t,n)}).catch(()=>{}),d_.set(e,n),e}function YI(n){if(Tg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Tg.set(n,e)}let Sg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Jw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function KI(n){Sg=n(Sg)}function XI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(tg(this),e,...t);return Jw.set(s,e.sort?e.sort():[e]),yr(s)}:GI().includes(n)?function(...e){return n.apply(tg(this),e),yr(Zw.get(this))}:function(...e){return yr(n.apply(tg(this),e))}}function $I(n){return typeof n=="function"?XI(n):(n instanceof IDBTransaction&&YI(n),FI(n,HI())?new Proxy(n,Sg):n)}function yr(n){if(n instanceof IDBRequest)return QI(n);if(eg.has(n))return eg.get(n);const e=$I(n);return e!==n&&(eg.set(n,e),d_.set(e,n)),e}const tg=n=>d_.get(n);function WI(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=yr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(yr(c.result),p.oldVersion,p.newVersion,yr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const ZI=["get","getKey","getAll","getAllKeys","count"],JI=["put","add","delete","clear"],ng=new Map;function ST(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ng.get(e))return ng.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=JI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||ZI.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return ng.set(e,l),l}KI(n=>({...n,get:(e,t,s)=>ST(e,t)||n.get(e,t,s),has:(e,t)=>!!ST(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function tN(n){return n.getComponent()?.type==="VERSION"}const wg="@firebase/app",wT="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new fd("@firebase/app"),nN="@firebase/app-compat",iN="@firebase/analytics-compat",sN="@firebase/analytics",rN="@firebase/app-check-compat",aN="@firebase/app-check",oN="@firebase/auth",lN="@firebase/auth-compat",uN="@firebase/database",cN="@firebase/data-connect",hN="@firebase/database-compat",fN="@firebase/functions",dN="@firebase/functions-compat",mN="@firebase/installations",pN="@firebase/installations-compat",gN="@firebase/messaging",_N="@firebase/messaging-compat",yN="@firebase/performance",vN="@firebase/performance-compat",EN="@firebase/remote-config",TN="@firebase/remote-config-compat",SN="@firebase/storage",wN="@firebase/storage-compat",bN="@firebase/firestore",AN="@firebase/ai",CN="@firebase/firestore-compat",RN="firebase",IN="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="[DEFAULT]",NN={[wg]:"fire-core",[nN]:"fire-core-compat",[sN]:"fire-analytics",[iN]:"fire-analytics-compat",[aN]:"fire-app-check",[rN]:"fire-app-check-compat",[oN]:"fire-auth",[lN]:"fire-auth-compat",[uN]:"fire-rtdb",[cN]:"fire-data-connect",[hN]:"fire-rtdb-compat",[fN]:"fire-fn",[dN]:"fire-fn-compat",[mN]:"fire-iid",[pN]:"fire-iid-compat",[gN]:"fire-fcm",[_N]:"fire-fcm-compat",[yN]:"fire-perf",[vN]:"fire-perf-compat",[EN]:"fire-rc",[TN]:"fire-rc-compat",[SN]:"fire-gcs",[wN]:"fire-gcs-compat",[bN]:"fire-fst",[CN]:"fire-fst-compat",[AN]:"fire-vertex","fire-js":"fire-js",[RN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new Map,xN=new Map,Ag=new Map;function bT(n,e){try{n.container.addComponent(e)}catch(t){Ns.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Da(n){const e=n.name;if(Ag.has(e))return Ns.debug(`There were multiple attempts to register component ${e}.`),!1;Ag.set(e,n);for(const t of Df.values())bT(t,n);for(const t of xN.values())bT(t,n);return!0}function dd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Fn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new _c("app","Firebase",DN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=IN;function eb(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:bg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw vr.create("bad-app-name",{appName:String(a)});if(t||(t=Yw()),!t)throw vr.create("no-options");const l=Df.get(a);if(l){if(Gi(t,l.options)&&Gi(s,l.config))return l;throw vr.create("duplicate-app",{appName:a})}const c=new UI(a);for(const p of Ag.values())c.addComponent(p);const d=new ON(t,s,c);return Df.set(a,d),d}function m_(n=bg){const e=Df.get(n);if(!e&&n===bg&&Yw())return eb();if(!e)throw vr.create("no-app",{appName:n});return e}function ji(n,e,t){let s=NN[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ns.warn(c.join(" "));return}Da(new Ar(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const MN="firebase-heartbeat-database",kN=1,tc="firebase-heartbeat-store";let ig=null;function tb(){return ig||(ig=WI(MN,kN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tc)}catch(t){console.warn(t)}}}}).catch(n=>{throw vr.create("idb-open",{originalErrorMessage:n.message})})),ig}async function PN(n){try{const t=(await tb()).transaction(tc),s=await t.objectStore(tc).get(nb(n));return await t.done,s}catch(e){if(e instanceof Vs)Ns.warn(e.message);else{const t=vr.create("idb-get",{originalErrorMessage:e?.message});Ns.warn(t.message)}}}async function AT(n,e){try{const s=(await tb()).transaction(tc,"readwrite");await s.objectStore(tc).put(e,nb(n)),await s.done}catch(t){if(t instanceof Vs)Ns.warn(t.message);else{const s=vr.create("idb-set",{originalErrorMessage:t?.message});Ns.warn(s.message)}}}function nb(n){return`${n.name}!${n.options.appId}`}/**
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
 */const VN=1024,LN=30;class UN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zN(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=CT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>LN){const a=qN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ns.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=CT(),{heartbeatsToSend:t,unsentEntries:s}=jN(this._heartbeatsCache.heartbeats),a=Rf(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Ns.warn(e),""}}}function CT(){return new Date().toISOString().substring(0,10)}function jN(n,e=VN){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),RT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),RT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class zN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wI()?bI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await PN(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return AT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return AT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function RT(n){return Rf(JSON.stringify({version:2,heartbeats:n})).length}function qN(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(n){Da(new Ar("platform-logger",e=>new eN(e),"PRIVATE")),Da(new Ar("heartbeat",e=>new UN(e),"PRIVATE")),ji(wg,wT,n),ji(wg,wT,"esm2020"),ji("fire-js","")}BN("");var FN="firebase",HN="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ji(FN,HN,"app");function ib(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GN=ib,sb=new _c("auth","Firebase",ib());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=new fd("@firebase/auth");function QN(n,...e){Of.logLevel<=Pe.WARN&&Of.warn(`Auth (${za}): ${n}`,...e)}function mf(n,...e){Of.logLevel<=Pe.ERROR&&Of.error(`Auth (${za}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n,...e){throw g_(n,...e)}function yi(n,...e){return g_(n,...e)}function p_(n,e,t){const s={...GN(),[e]:t};return new _c("auth","Firebase",s).create(e,{appName:n.name})}function Er(n){return p_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function YN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Qi(n,"argument-error"),p_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function g_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return sb.create(n,...e)}function be(n,e,...t){if(!n)throw g_(e,...t)}function bs(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mf(e),new Error(e)}function xs(n,e){n||bs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(){return typeof self<"u"&&self.location?.href||""}function KN(){return IT()==="http:"||IT()==="https:"}function IT(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KN()||vI()||"connection"in navigator)?navigator.onLine:!0}function $N(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.shortDelay=e,this.longDelay=t,xs(t>e,"Short delay should be less than long delay!"),this.isMobile=f_()||$w()}get(){return XN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n,e){xs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JN=new yc(3e4,6e4);function md(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function pl(n,e,t,s,a={}){return ab(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=ml({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return yI()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&kr(n.emulatorConfig.host)&&(g.credentials="include"),rb.fetch()(await lb(n,n.config.apiHost,t,d),g)})}async function ab(n,e,t){n._canInitEmulator=!1;const s={...WN,...e};try{const a=new ex(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw af(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw af(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw af(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw af(n,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw p_(n,v,g);Qi(n,v)}}catch(a){if(a instanceof Vs)throw a;Qi(n,"network-request-failed",{message:String(a)})}}async function ob(n,e,t,s,a={}){const l=await pl(n,e,t,s,a);return"mfaPendingCredential"in l&&Qi(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function lb(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?__(n.config,a):`${n.config.apiScheme}://${a}`;return ZN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class ex{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(yi(this.auth,"network-request-failed")),JN.get())})}}function af(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=yi(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(n,e){return pl(n,"POST","/v1/accounts:delete",e)}async function Mf(n,e){return pl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nx(n,e=!1){const t=ct(n),s=await t.getIdToken(e),a=y_(s);be(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Hu(sg(a.auth_time)),issuedAtTime:Hu(sg(a.iat)),expirationTime:Hu(sg(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function sg(n){return Number(n)*1e3}function y_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return mf("JWT malformed, contained fewer than 3 sections"),null;try{const a=If(t);return a?JSON.parse(a):(mf("Failed to decode base64 JWT payload"),null)}catch(a){return mf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function NT(n){const e=y_(n);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Vs&&ix(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function ix({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hu(this.lastLoginAt),this.creationTime=Hu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kf(n){const e=n.auth,t=await n.getIdToken(),s=await nc(n,Mf(e,{idToken:t}));be(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?ub(a.providerUserInfo):[],c=ax(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!c?.length,g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Rg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,v)}async function rx(n){const e=ct(n);await kf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ax(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function ub(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(n,e){const t=await ab(n,{},async()=>{const s=ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await lb(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&kr(n.emulatorConfig.host)&&(p.credentials="include"),rb.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lx(n,e){return pl(n,"POST","/v2/accounts:revokeToken",md(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):NT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=NT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await ox(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Qo;return s&&(be(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(be(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(be(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qo,this.toJSON())}_performRefresh(){return bs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(n,e){be(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gi{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new sx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Rg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await nc(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nx(this,e)}reload(){return rx(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await kf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fn(this.auth.app))return Promise.reject(Er(this.auth));const e=await this.getIdToken();return await nc(this,tx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:S,isAnonymous:x,providerData:j,stsTokenManager:Q}=t;be(T&&Q,e,"internal-error");const G=Qo.fromJSON(this.name,Q);be(typeof T=="string",e,"internal-error"),dr(s,e.name),dr(a,e.name),be(typeof S=="boolean",e,"internal-error"),be(typeof x=="boolean",e,"internal-error"),dr(l,e.name),dr(c,e.name),dr(d,e.name),dr(p,e.name),dr(g,e.name),dr(v,e.name);const ge=new gi({uid:T,auth:e,email:a,emailVerified:S,displayName:s,isAnonymous:x,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:G,createdAt:g,lastLoginAt:v});return j&&Array.isArray(j)&&(ge.providerData=j.map(ue=>({...ue}))),p&&(ge._redirectEventId=p),ge}static async _fromIdTokenResponse(e,t,s=!1){const a=new Qo;a.updateFromServerResponse(t);const l=new gi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await kf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];be(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?ub(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new Qo;d.updateFromIdToken(s);const p=new gi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Rg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=new Map;function As(n){xs(n instanceof Function,"Expected a class definition");let e=xT.get(n);return e?(xs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xT.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cb.type="NONE";const DT=cb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(n,e,t){return`firebase:${n}:${e}:${t}`}class Yo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=pf(this.userKey,a.apiKey,l),this.fullPersistenceKey=pf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Mf(this.auth,{idToken:e}).catch(()=>{});return t?gi._fromGetAccountInfoResponse(this.auth,t,e):null}return gi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Yo(As(DT),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||As(DT);const c=pf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const S=await Mf(e,{idToken:v}).catch(()=>{});if(!S)break;T=await gi._fromGetAccountInfoResponse(e,S,v)}else T=gi._fromJSON(e,v);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Yo(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Yo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gb(e))return"Blackberry";if(_b(e))return"Webos";if(fb(e))return"Safari";if((e.includes("chrome/")||db(e))&&!e.includes("edge/"))return"Chrome";if(pb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function hb(n=_n()){return/firefox\//i.test(n)}function fb(n=_n()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function db(n=_n()){return/crios\//i.test(n)}function mb(n=_n()){return/iemobile/i.test(n)}function pb(n=_n()){return/android/i.test(n)}function gb(n=_n()){return/blackberry/i.test(n)}function _b(n=_n()){return/webos/i.test(n)}function v_(n=_n()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ux(n=_n()){return v_(n)&&!!window.navigator?.standalone}function cx(){return EI()&&document.documentMode===10}function yb(n=_n()){return v_(n)||pb(n)||_b(n)||gb(n)||/windows phone/i.test(n)||mb(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(n,e=[]){let t;switch(n){case"Browser":t=OT(_n());break;case"Worker":t=`${OT(_n())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${za}/${s}`}/**
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
 */class hx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function fx(n,e={}){return pl(n,"GET","/v2/passwordPolicy",md(n,e))}/**
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
 */const dx=6;class mx{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??dx,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new MT(this),this.idTokenSubscription=new MT(this),this.beforeStateQueue=new hx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=As(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Yo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Mf(this,{idToken:e}),s=await gi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Fn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fn(this.app))return Promise.reject(Er(this));const t=e?ct(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fn(this.app)?Promise.reject(Er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fn(this.app)?Promise.reject(Er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(As(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fx(this),t=new mx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _c("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await lx(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&As(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await Yo.create(this,[As(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&QN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function vc(n){return ct(n)}class MT{constructor(e){this.auth=e,this.observer=null,this.addObserver=DI(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gx(n){E_=n}function _x(n){return E_.loadJS(n)}function yx(){return E_.gapiScript}function vx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(n,e){const t=dd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Gi(l,e??{}))return a;Qi(a,"already-initialized")}return t.initialize({options:e})}function Tx(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(As);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function Sx(n,e,t){const s=vc(n);be(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=Eb(e),{host:c,port:d}=wx(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){be(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),be(Gi(g,s.config.emulator)&&Gi(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,kr(c)?(c_(`${l}//${c}${p}`),h_("Auth",!0)):bx()}function Eb(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function wx(n){const e=Eb(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:kT(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:kT(c)}}}function kT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function bx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bs("not implemented")}_getIdTokenResponse(e){return bs("not implemented")}_linkToIdToken(e,t){return bs("not implemented")}_getReauthenticationResolver(e){return bs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(n,e){return ob(n,"POST","/v1/accounts:signInWithIdp",md(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax="http://localhost";class Oa extends Tb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Oa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new Oa(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Ko(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ko(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ko(e,t)}buildRequest(){const e={requestUri:Ax,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ml(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mr extends Ec{constructor(){super("facebook.com")}static credential(e){return Oa._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Oa._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ws.credentialFromTaggedObject(e)}static credentialFromError(e){return ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ws.credential(t,s)}catch{return null}}}ws.GOOGLE_SIGN_IN_METHOD="google.com";ws.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ec{constructor(){super("github.com")}static credential(e){return Oa._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ec{constructor(){super("twitter.com")}static credential(e,t){return Oa._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return gr.credential(t,s)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await gi._fromIdTokenResponse(e,s,a),c=PT(s);return new Ma({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=PT(s);return new Ma({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function PT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf extends Vs{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Pf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Pf(e,t,s,a)}}function Sb(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Pf._fromErrorAndOperation(n,l,e,s):l})}async function Cx(n,e,t=!1){const s=await nc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ma._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rx(n,e,t=!1){const{auth:s}=n;if(Fn(s.app))return Promise.reject(Er(s));const a="reauthenticate";try{const l=await nc(n,Sb(s,a,e,n),t);be(l.idToken,s,"internal-error");const c=y_(l.idToken);be(c,s,"internal-error");const{sub:d}=c;return be(n.uid===d,s,"user-mismatch"),Ma._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Qi(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ix(n,e,t=!1){if(Fn(n.app))return Promise.reject(Er(n));const s="signIn",a=await Sb(n,s,e),l=await Ma._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nx(n,e){return ob(n,"POST","/v1/accounts:signInWithCustomToken",md(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(n,e){if(Fn(n.app))return Promise.reject(Er(n));const t=vc(n),s=await Nx(t,{token:e,returnSecureToken:!0}),a=await Ma._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(a.user),a}function Dx(n,e,t,s){return ct(n).onIdTokenChanged(e,t,s)}function Ox(n,e,t){return ct(n).beforeAuthStateChanged(e,t)}function Mx(n,e,t,s){return ct(n).onAuthStateChanged(e,t,s)}function kx(n){return ct(n).signOut()}const Vf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vf,"1"),this.storage.removeItem(Vf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=1e3,Vx=10;class bb extends wb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);cx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,Vx):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Px)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bb.type="LOCAL";const Lx=bb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab extends wb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ab.type="SESSION";const Cb=Ab;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new pd(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await Ux(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=S_("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const S=T;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return window}function zx(n){zi().location.href=n}/**
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
 */function Rb(){return typeof zi().WorkerGlobalScope<"u"&&typeof zi().importScripts=="function"}async function qx(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bx(){return navigator?.serviceWorker?.controller||null}function Fx(){return Rb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="firebaseLocalStorageDb",Hx=1,Lf="firebaseLocalStorage",Nb="fbase_key";class Tc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gd(n,e){return n.transaction([Lf],e?"readwrite":"readonly").objectStore(Lf)}function Gx(){const n=indexedDB.deleteDatabase(Ib);return new Tc(n).toPromise()}function Ig(){const n=indexedDB.open(Ib,Hx);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Lf,{keyPath:Nb})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Lf)?e(s):(s.close(),await Gx(),e(await Ig()))})})}async function VT(n,e,t){const s=gd(n,!0).put({[Nb]:e,value:t});return new Tc(s).toPromise()}async function Qx(n,e){const t=gd(n,!1).get(e),s=await new Tc(t).toPromise();return s===void 0?null:s.value}function LT(n,e){const t=gd(n,!0).delete(e);return new Tc(t).toPromise()}const Yx=800,Kx=3;class xb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ig(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Kx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pd._getInstance(Fx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await qx(),!this.activeServiceWorker)return;this.sender=new jx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ig();return await VT(e,Vf,"1"),await LT(e,Vf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>VT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Qx(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>LT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=gd(a,!1).getAll();return new Tc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xb.type="LOCAL";const Xx=xb;new yc(3e4,6e4);/**
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
 */function Db(n,e){return e?As(e):(be(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_ extends Tb{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ko(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ko(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $x(n){return Ix(n.auth,new w_(n),n.bypassAuthState)}function Wx(n){const{auth:e,user:t}=n;return be(t,e,"internal-error"),Rx(t,new w_(n),n.bypassAuthState)}async function Zx(n){const{auth:e,user:t}=n;return be(t,e,"internal-error"),Cx(t,new w_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $x;case"linkViaPopup":case"linkViaRedirect":return Zx;case"reauthViaPopup":case"reauthViaRedirect":return Wx;default:Qi(this.auth,"internal-error")}}resolve(e){xs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=new yc(2e3,1e4);async function e2(n,e,t){if(Fn(n.app))return Promise.reject(yi(n,"operation-not-supported-in-this-environment"));const s=vc(n);YN(n,e,T_);const a=Db(s,t);return new wa(s,"signInViaPopup",e,a).executeNotNull()}class wa extends Ob{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,wa.currentPopupAction&&wa.currentPopupAction.cancel(),wa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){xs(this.filter.length===1,"Popup operations only handle one event");const e=S_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(yi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wa.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jx.get())};e()}}wa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2="pendingRedirect",gf=new Map;class n2 extends Ob{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=gf.get(this.auth._key());if(!e){try{const s=await i2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}gf.set(this.auth._key(),e)}return this.bypassAuthState||gf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function i2(n,e){const t=a2(e),s=r2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function s2(n,e){gf.set(n._key(),e)}function r2(n){return As(n._redirectPersistence)}function a2(n){return pf(t2,n.config.apiKey,n.name)}async function o2(n,e,t=!1){if(Fn(n.app))return Promise.reject(Er(n));const s=vc(n),a=Db(s,e),c=await new n2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=600*1e3;class u2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!c2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Mb(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(yi(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l2&&this.cachedEventUids.clear(),this.cachedEventUids.has(UT(e))}saveEventToCache(e){this.cachedEventUids.add(UT(e)),this.lastProcessedEventTime=Date.now()}}function UT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Mb({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function c2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mb(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h2(n,e={}){return pl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d2=/^https?/;async function m2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await h2(n);for(const t of e)try{if(p2(t))return}catch{}Qi(n,"unauthorized-domain")}function p2(n){const e=Cg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!d2.test(t))return!1;if(f2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const g2=new yc(3e4,6e4);function jT(){const n=zi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _2(n){return new Promise((e,t)=>{function s(){jT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jT(),t(yi(n,"network-request-failed"))},timeout:g2.get()})}if(zi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(zi().gapi?.load)s();else{const a=vx("iframefcb");return zi()[a]=()=>{gapi.load?s():t(yi(n,"network-request-failed"))},_x(`${yx()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw _f=null,e})}let _f=null;function y2(n){return _f=_f||_2(n),_f}/**
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
 */const v2=new yc(5e3,15e3),E2="__/auth/iframe",T2="emulator/auth/iframe",S2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},w2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b2(n){const e=n.config;be(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?__(e,T2):`https://${n.config.authDomain}/${E2}`,s={apiKey:e.apiKey,appName:n.name,v:za},a=w2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ml(s).slice(1)}`}async function A2(n){const e=await y2(n),t=zi().gapi;return be(t,n,"internal-error"),e.open({where:document.body,url:b2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=yi(n,"network-request-failed"),d=zi().setTimeout(()=>{l(c)},v2.get());function p(){zi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const C2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},R2=500,I2=600,N2="_blank",x2="http://localhost";class zT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D2(n,e,t,s=R2,a=I2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...C2,width:s.toString(),height:a.toString(),top:l,left:c},g=_n().toLowerCase();t&&(d=db(g)?N2:t),hb(g)&&(e=e||x2,p.scrollbars="yes");const v=Object.entries(p).reduce((S,[x,j])=>`${S}${x}=${j},`,"");if(ux(g)&&d!=="_self")return O2(e||"",d),new zT(null);const T=window.open(e||"",d,v);be(T,n,"popup-blocked");try{T.focus()}catch{}return new zT(T)}function O2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const M2="__/auth/handler",k2="emulator/auth/handler",P2=encodeURIComponent("fac");async function qT(n,e,t,s,a,l){be(n.config.authDomain,n,"auth-domain-config-required"),be(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:za,eventId:a};if(e instanceof T_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Nf(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof Ec){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),g=p?`#${P2}=${encodeURIComponent(p)}`:"";return`${V2(n)}?${ml(d).slice(1)}${g}`}function V2({config:n}){return n.emulator?__(n,k2):`https://${n.authDomain}/${M2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="webStorageSupport";class L2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cb,this._completeRedirectFn=o2,this._overrideRedirectResult=s2}async _openPopup(e,t,s,a){xs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await qT(e,t,s,Cg(),a);return D2(e,l,S_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await qT(e,t,s,Cg(),a);return zx(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(xs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await A2(e),s=new u2(e);return t.register("authEvent",a=>(be(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rg,{type:rg},a=>{const l=a?.[0]?.[rg];l!==void 0&&t(!!l),Qi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=m2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yb()||fb()||v_()}}const U2=L2;var BT="@firebase/auth",FT="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function q2(n){Da(new Ar("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;be(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vb(n)},g=new px(s,a,l,p);return Tx(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Da(new Ar("auth-internal",e=>{const t=vc(e.getProvider("auth").getImmediate());return(s=>new j2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ji(BT,FT,z2(n)),ji(BT,FT,"esm2020")}/**
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
 */const B2=300,F2=Kw("authIdTokenMaxAge")||B2;let HT=null;const H2=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>F2)return;const a=t?.token;HT!==a&&(HT=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function G2(n=m_()){const e=dd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ex(n,{popupRedirectResolver:U2,persistence:[Xx,Lx,Cb]}),s=Kw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=H2(l.toString());Ox(t,c,()=>c(t.currentUser)),Dx(t,d=>c(d))}}const a=Gw("auth");return a&&Sx(t,`http://${a}`),t}function Q2(){return document.getElementsByTagName("head")?.[0]??document}gx({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=yi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",Q2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});q2("Browser");var GT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,kb;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,A){function C(){}C.prototype=A.prototype,P.D=A.prototype,P.prototype=new C,P.prototype.constructor=P,P.C=function(M,k,V){for(var N=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)N[Ut-2]=arguments[Ut];return A.prototype[k].apply(M,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,A,C){C||(C=0);var M=Array(16);if(typeof A=="string")for(var k=0;16>k;++k)M[k]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(k=0;16>k;++k)M[k]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=P.g[0],C=P.g[1],k=P.g[2];var V=P.g[3],N=A+(V^C&(k^V))+M[0]+3614090360&4294967295;A=C+(N<<7&4294967295|N>>>25),N=V+(k^A&(C^k))+M[1]+3905402710&4294967295,V=A+(N<<12&4294967295|N>>>20),N=k+(C^V&(A^C))+M[2]+606105819&4294967295,k=V+(N<<17&4294967295|N>>>15),N=C+(A^k&(V^A))+M[3]+3250441966&4294967295,C=k+(N<<22&4294967295|N>>>10),N=A+(V^C&(k^V))+M[4]+4118548399&4294967295,A=C+(N<<7&4294967295|N>>>25),N=V+(k^A&(C^k))+M[5]+1200080426&4294967295,V=A+(N<<12&4294967295|N>>>20),N=k+(C^V&(A^C))+M[6]+2821735955&4294967295,k=V+(N<<17&4294967295|N>>>15),N=C+(A^k&(V^A))+M[7]+4249261313&4294967295,C=k+(N<<22&4294967295|N>>>10),N=A+(V^C&(k^V))+M[8]+1770035416&4294967295,A=C+(N<<7&4294967295|N>>>25),N=V+(k^A&(C^k))+M[9]+2336552879&4294967295,V=A+(N<<12&4294967295|N>>>20),N=k+(C^V&(A^C))+M[10]+4294925233&4294967295,k=V+(N<<17&4294967295|N>>>15),N=C+(A^k&(V^A))+M[11]+2304563134&4294967295,C=k+(N<<22&4294967295|N>>>10),N=A+(V^C&(k^V))+M[12]+1804603682&4294967295,A=C+(N<<7&4294967295|N>>>25),N=V+(k^A&(C^k))+M[13]+4254626195&4294967295,V=A+(N<<12&4294967295|N>>>20),N=k+(C^V&(A^C))+M[14]+2792965006&4294967295,k=V+(N<<17&4294967295|N>>>15),N=C+(A^k&(V^A))+M[15]+1236535329&4294967295,C=k+(N<<22&4294967295|N>>>10),N=A+(k^V&(C^k))+M[1]+4129170786&4294967295,A=C+(N<<5&4294967295|N>>>27),N=V+(C^k&(A^C))+M[6]+3225465664&4294967295,V=A+(N<<9&4294967295|N>>>23),N=k+(A^C&(V^A))+M[11]+643717713&4294967295,k=V+(N<<14&4294967295|N>>>18),N=C+(V^A&(k^V))+M[0]+3921069994&4294967295,C=k+(N<<20&4294967295|N>>>12),N=A+(k^V&(C^k))+M[5]+3593408605&4294967295,A=C+(N<<5&4294967295|N>>>27),N=V+(C^k&(A^C))+M[10]+38016083&4294967295,V=A+(N<<9&4294967295|N>>>23),N=k+(A^C&(V^A))+M[15]+3634488961&4294967295,k=V+(N<<14&4294967295|N>>>18),N=C+(V^A&(k^V))+M[4]+3889429448&4294967295,C=k+(N<<20&4294967295|N>>>12),N=A+(k^V&(C^k))+M[9]+568446438&4294967295,A=C+(N<<5&4294967295|N>>>27),N=V+(C^k&(A^C))+M[14]+3275163606&4294967295,V=A+(N<<9&4294967295|N>>>23),N=k+(A^C&(V^A))+M[3]+4107603335&4294967295,k=V+(N<<14&4294967295|N>>>18),N=C+(V^A&(k^V))+M[8]+1163531501&4294967295,C=k+(N<<20&4294967295|N>>>12),N=A+(k^V&(C^k))+M[13]+2850285829&4294967295,A=C+(N<<5&4294967295|N>>>27),N=V+(C^k&(A^C))+M[2]+4243563512&4294967295,V=A+(N<<9&4294967295|N>>>23),N=k+(A^C&(V^A))+M[7]+1735328473&4294967295,k=V+(N<<14&4294967295|N>>>18),N=C+(V^A&(k^V))+M[12]+2368359562&4294967295,C=k+(N<<20&4294967295|N>>>12),N=A+(C^k^V)+M[5]+4294588738&4294967295,A=C+(N<<4&4294967295|N>>>28),N=V+(A^C^k)+M[8]+2272392833&4294967295,V=A+(N<<11&4294967295|N>>>21),N=k+(V^A^C)+M[11]+1839030562&4294967295,k=V+(N<<16&4294967295|N>>>16),N=C+(k^V^A)+M[14]+4259657740&4294967295,C=k+(N<<23&4294967295|N>>>9),N=A+(C^k^V)+M[1]+2763975236&4294967295,A=C+(N<<4&4294967295|N>>>28),N=V+(A^C^k)+M[4]+1272893353&4294967295,V=A+(N<<11&4294967295|N>>>21),N=k+(V^A^C)+M[7]+4139469664&4294967295,k=V+(N<<16&4294967295|N>>>16),N=C+(k^V^A)+M[10]+3200236656&4294967295,C=k+(N<<23&4294967295|N>>>9),N=A+(C^k^V)+M[13]+681279174&4294967295,A=C+(N<<4&4294967295|N>>>28),N=V+(A^C^k)+M[0]+3936430074&4294967295,V=A+(N<<11&4294967295|N>>>21),N=k+(V^A^C)+M[3]+3572445317&4294967295,k=V+(N<<16&4294967295|N>>>16),N=C+(k^V^A)+M[6]+76029189&4294967295,C=k+(N<<23&4294967295|N>>>9),N=A+(C^k^V)+M[9]+3654602809&4294967295,A=C+(N<<4&4294967295|N>>>28),N=V+(A^C^k)+M[12]+3873151461&4294967295,V=A+(N<<11&4294967295|N>>>21),N=k+(V^A^C)+M[15]+530742520&4294967295,k=V+(N<<16&4294967295|N>>>16),N=C+(k^V^A)+M[2]+3299628645&4294967295,C=k+(N<<23&4294967295|N>>>9),N=A+(k^(C|~V))+M[0]+4096336452&4294967295,A=C+(N<<6&4294967295|N>>>26),N=V+(C^(A|~k))+M[7]+1126891415&4294967295,V=A+(N<<10&4294967295|N>>>22),N=k+(A^(V|~C))+M[14]+2878612391&4294967295,k=V+(N<<15&4294967295|N>>>17),N=C+(V^(k|~A))+M[5]+4237533241&4294967295,C=k+(N<<21&4294967295|N>>>11),N=A+(k^(C|~V))+M[12]+1700485571&4294967295,A=C+(N<<6&4294967295|N>>>26),N=V+(C^(A|~k))+M[3]+2399980690&4294967295,V=A+(N<<10&4294967295|N>>>22),N=k+(A^(V|~C))+M[10]+4293915773&4294967295,k=V+(N<<15&4294967295|N>>>17),N=C+(V^(k|~A))+M[1]+2240044497&4294967295,C=k+(N<<21&4294967295|N>>>11),N=A+(k^(C|~V))+M[8]+1873313359&4294967295,A=C+(N<<6&4294967295|N>>>26),N=V+(C^(A|~k))+M[15]+4264355552&4294967295,V=A+(N<<10&4294967295|N>>>22),N=k+(A^(V|~C))+M[6]+2734768916&4294967295,k=V+(N<<15&4294967295|N>>>17),N=C+(V^(k|~A))+M[13]+1309151649&4294967295,C=k+(N<<21&4294967295|N>>>11),N=A+(k^(C|~V))+M[4]+4149444226&4294967295,A=C+(N<<6&4294967295|N>>>26),N=V+(C^(A|~k))+M[11]+3174756917&4294967295,V=A+(N<<10&4294967295|N>>>22),N=k+(A^(V|~C))+M[2]+718787259&4294967295,k=V+(N<<15&4294967295|N>>>17),N=C+(V^(k|~A))+M[9]+3951481745&4294967295,P.g[0]=P.g[0]+A&4294967295,P.g[1]=P.g[1]+(k+(N<<21&4294967295|N>>>11))&4294967295,P.g[2]=P.g[2]+k&4294967295,P.g[3]=P.g[3]+V&4294967295}s.prototype.u=function(P,A){A===void 0&&(A=P.length);for(var C=A-this.blockSize,M=this.B,k=this.h,V=0;V<A;){if(k==0)for(;V<=C;)a(this,P,V),V+=this.blockSize;if(typeof P=="string"){for(;V<A;)if(M[k++]=P.charCodeAt(V++),k==this.blockSize){a(this,M),k=0;break}}else for(;V<A;)if(M[k++]=P[V++],k==this.blockSize){a(this,M),k=0;break}}this.h=k,this.o+=A},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var A=1;A<P.length-8;++A)P[A]=0;var C=8*this.o;for(A=P.length-8;A<P.length;++A)P[A]=C&255,C/=256;for(this.u(P),P=Array(16),A=C=0;4>A;++A)for(var M=0;32>M;M+=8)P[C++]=this.g[A]>>>M&255;return P};function l(P,A){var C=d;return Object.prototype.hasOwnProperty.call(C,P)?C[P]:C[P]=A(P)}function c(P,A){this.h=A;for(var C=[],M=!0,k=P.length-1;0<=k;k--){var V=P[k]|0;M&&V==A||(C[k]=V,M=!1)}this.g=C}var d={};function p(P){return-128<=P&&128>P?l(P,function(A){return new c([A|0],0>A?-1:0)}):new c([P|0],0>P?-1:0)}function g(P){if(isNaN(P)||!isFinite(P))return T;if(0>P)return G(g(-P));for(var A=[],C=1,M=0;P>=C;M++)A[M]=P/C|0,C*=4294967296;return new c(A,0)}function v(P,A){if(P.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P.charAt(0)=="-")return G(v(P.substring(1),A));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(A,8)),M=T,k=0;k<P.length;k+=8){var V=Math.min(8,P.length-k),N=parseInt(P.substring(k,k+V),A);8>V?(V=g(Math.pow(A,V)),M=M.j(V).add(g(N))):(M=M.j(C),M=M.add(g(N)))}return M}var T=p(0),S=p(1),x=p(16777216);n=c.prototype,n.m=function(){if(Q(this))return-G(this).m();for(var P=0,A=1,C=0;C<this.g.length;C++){var M=this.i(C);P+=(0<=M?M:4294967296+M)*A,A*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(j(this))return"0";if(Q(this))return"-"+G(this).toString(P);for(var A=g(Math.pow(P,6)),C=this,M="";;){var k=Ve(C,A).g;C=ge(C,k.j(A));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(P);if(C=k,j(C))return V+M;for(;6>V.length;)V="0"+V;M=V+M}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function j(P){if(P.h!=0)return!1;for(var A=0;A<P.g.length;A++)if(P.g[A]!=0)return!1;return!0}function Q(P){return P.h==-1}n.l=function(P){return P=ge(this,P),Q(P)?-1:j(P)?0:1};function G(P){for(var A=P.g.length,C=[],M=0;M<A;M++)C[M]=~P.g[M];return new c(C,~P.h).add(S)}n.abs=function(){return Q(this)?G(this):this},n.add=function(P){for(var A=Math.max(this.g.length,P.g.length),C=[],M=0,k=0;k<=A;k++){var V=M+(this.i(k)&65535)+(P.i(k)&65535),N=(V>>>16)+(this.i(k)>>>16)+(P.i(k)>>>16);M=N>>>16,V&=65535,N&=65535,C[k]=N<<16|V}return new c(C,C[C.length-1]&-2147483648?-1:0)};function ge(P,A){return P.add(G(A))}n.j=function(P){if(j(this)||j(P))return T;if(Q(this))return Q(P)?G(this).j(G(P)):G(G(this).j(P));if(Q(P))return G(this.j(G(P)));if(0>this.l(x)&&0>P.l(x))return g(this.m()*P.m());for(var A=this.g.length+P.g.length,C=[],M=0;M<2*A;M++)C[M]=0;for(M=0;M<this.g.length;M++)for(var k=0;k<P.g.length;k++){var V=this.i(M)>>>16,N=this.i(M)&65535,Ut=P.i(k)>>>16,dt=P.i(k)&65535;C[2*M+2*k]+=N*dt,ue(C,2*M+2*k),C[2*M+2*k+1]+=V*dt,ue(C,2*M+2*k+1),C[2*M+2*k+1]+=N*Ut,ue(C,2*M+2*k+1),C[2*M+2*k+2]+=V*Ut,ue(C,2*M+2*k+2)}for(M=0;M<A;M++)C[M]=C[2*M+1]<<16|C[2*M];for(M=A;M<2*A;M++)C[M]=0;return new c(C,0)};function ue(P,A){for(;(P[A]&65535)!=P[A];)P[A+1]+=P[A]>>>16,P[A]&=65535,A++}function he(P,A){this.g=P,this.h=A}function Ve(P,A){if(j(A))throw Error("division by zero");if(j(P))return new he(T,T);if(Q(P))return A=Ve(G(P),A),new he(G(A.g),G(A.h));if(Q(A))return A=Ve(P,G(A)),new he(G(A.g),A.h);if(30<P.g.length){if(Q(P)||Q(A))throw Error("slowDivide_ only works with positive integers.");for(var C=S,M=A;0>=M.l(P);)C=ye(C),M=ye(M);var k=Le(C,1),V=Le(M,1);for(M=Le(M,2),C=Le(C,2);!j(M);){var N=V.add(M);0>=N.l(P)&&(k=k.add(C),V=N),M=Le(M,1),C=Le(C,1)}return A=ge(P,k.j(A)),new he(k,A)}for(k=T;0<=P.l(A);){for(C=Math.max(1,Math.floor(P.m()/A.m())),M=Math.ceil(Math.log(C)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),V=g(C),N=V.j(A);Q(N)||0<N.l(P);)C-=M,V=g(C),N=V.j(A);j(V)&&(V=S),k=k.add(V),P=ge(P,N)}return new he(k,P)}n.A=function(P){return Ve(this,P).h},n.and=function(P){for(var A=Math.max(this.g.length,P.g.length),C=[],M=0;M<A;M++)C[M]=this.i(M)&P.i(M);return new c(C,this.h&P.h)},n.or=function(P){for(var A=Math.max(this.g.length,P.g.length),C=[],M=0;M<A;M++)C[M]=this.i(M)|P.i(M);return new c(C,this.h|P.h)},n.xor=function(P){for(var A=Math.max(this.g.length,P.g.length),C=[],M=0;M<A;M++)C[M]=this.i(M)^P.i(M);return new c(C,this.h^P.h)};function ye(P){for(var A=P.g.length+1,C=[],M=0;M<A;M++)C[M]=P.i(M)<<1|P.i(M-1)>>>31;return new c(C,P.h)}function Le(P,A){var C=A>>5;A%=32;for(var M=P.g.length-C,k=[],V=0;V<M;V++)k[V]=0<A?P.i(V+C)>>>A|P.i(V+C+1)<<32-A:P.i(V+C);return new c(k,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,kb=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,Tr=c}).apply(typeof GT<"u"?GT:typeof self<"u"?self:typeof window<"u"?window:{});var of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pb,ju,Vb,yf,Ng,Lb,Ub,jb;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,y){return h==Array.prototype||h==Object.prototype||(h[_]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof of=="object"&&of];for(var _=0;_<h.length;++_){var y=h[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var y=s;h=h.split(".");for(var b=0;b<h.length-1;b++){var U=h[b];if(!(U in y))break e;y=y[U]}h=h[h.length-1],b=y[h],_=_(b),_!=b&&_!=null&&e(y,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var y=0,b=!1,U={next:function(){if(!b&&y<h.length){var H=y++;return{value:_(H,h[H]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function v(h,_,y){return h.call.apply(h.bind,arguments)}function T(h,_,y){if(!h)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function S(h,_,y){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,S.apply(null,arguments)}function x(h,_){var y=Array.prototype.slice.call(arguments,1);return function(){var b=y.slice();return b.push.apply(b,arguments),h.apply(this,b)}}function j(h,_){function y(){}y.prototype=_.prototype,h.aa=_.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(b,U,H){for(var te=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)te[ze-2]=arguments[ze];return _.prototype[U].apply(b,te)}}function Q(h){const _=h.length;if(0<_){const y=Array(_);for(let b=0;b<_;b++)y[b]=h[b];return y}return[]}function G(h,_){for(let y=1;y<arguments.length;y++){const b=arguments[y];if(p(b)){const U=h.length||0,H=b.length||0;h.length=U+H;for(let te=0;te<H;te++)h[U+te]=b[te]}else h.push(b)}}class ge{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ue(h){return/^[\s\xa0]*$/.test(h)}function he(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function Ve(h){return Ve[" "](h),h}Ve[" "]=function(){};var ye=he().indexOf("Gecko")!=-1&&!(he().toLowerCase().indexOf("webkit")!=-1&&he().indexOf("Edge")==-1)&&!(he().indexOf("Trident")!=-1||he().indexOf("MSIE")!=-1)&&he().indexOf("Edge")==-1;function Le(h,_,y){for(const b in h)_.call(y,h[b],b,h)}function P(h,_){for(const y in h)_.call(void 0,h[y],y,h)}function A(h){const _={};for(const y in h)_[y]=h[y];return _}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let y,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(y in b)h[y]=b[y];for(let H=0;H<C.length;H++)y=C[H],Object.prototype.hasOwnProperty.call(b,y)&&(h[y]=b[y])}}function k(h){var _=1;h=h.split(":");const y=[];for(;0<_&&h.length;)y.push(h.shift()),_--;return h.length&&y.push(h.join(":")),y}function V(h){d.setTimeout(()=>{throw h},0)}function N(){var h=He;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Ut{constructor(){this.h=this.g=null}add(_,y){const b=dt.get();b.set(_,y),this.h?this.h.next=b:this.g=b,this.h=b}}var dt=new ge(()=>new K,h=>h.reset());class K{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let se,fe=!1,He=new Ut,D=()=>{const h=d.Promise.resolve(void 0);se=()=>{h.then(ee)}};var ee=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(y){V(y)}var _=dt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}fe=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Y(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var re=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,_),d.removeEventListener("test",y,_)}catch{}return h})();function _e(h,_){if(Y.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,b=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ye){e:{try{Ve(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else y=="mouseover"?_=h.fromElement:y=="mouseout"&&(_=h.toElement);this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:me[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&_e.aa.h.call(this)}}j(_e,Y);var me={2:"touch",3:"pen",4:"mouse"};_e.prototype.h=function(){_e.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var It="closure_listenable_"+(1e6*Math.random()|0),We=0;function jt(h,_,y,b,U){this.listener=h,this.proxy=null,this.src=_,this.type=y,this.capture=!!b,this.ha=U,this.key=++We,this.da=this.fa=!1}function Us(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Xi(h){this.src=h,this.g={},this.h=0}Xi.prototype.add=function(h,_,y,b,U){var H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);var te=jr(h,_,b,U);return-1<te?(_=h[te],y||(_.fa=!1)):(_=new jt(_,this.src,H,!!b,U),_.fa=y,h.push(_)),_};function Ur(h,_){var y=_.type;if(y in h.g){var b=h.g[y],U=Array.prototype.indexOf.call(b,_,void 0),H;(H=0<=U)&&Array.prototype.splice.call(b,U,1),H&&(Us(_),h.g[y].length==0&&(delete h.g[y],h.h--))}}function jr(h,_,y,b){for(var U=0;U<h.length;++U){var H=h[U];if(!H.da&&H.listener==_&&H.capture==!!y&&H.ha==b)return U}return-1}var zr="closure_lm_"+(1e6*Math.random()|0),Al={};function Pc(h,_,y,b,U){if(Array.isArray(_)){for(var H=0;H<_.length;H++)Pc(h,_[H],y,b,U);return null}return y=Vc(y),h&&h[It]?h.K(_,y,g(b)?!!b.capture:!1,U):Yn(h,_,y,!1,b,U)}function Yn(h,_,y,b,U,H){if(!_)throw Error("Invalid event type");var te=g(U)?!!U.capture:!!U,ze=Ya(h);if(ze||(h[zr]=ze=new Xi(h)),y=ze.add(_,y,b,te,H),y.proxy)return y;if(b=Yd(),y.proxy=b,b.src=h,b.listener=y,h.addEventListener)re||(U=te),U===void 0&&(U=!1),h.addEventListener(_.toString(),b,U);else if(h.attachEvent)h.attachEvent(qr(_.toString()),b);else if(h.addListener&&h.removeListener)h.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Yd(){function h(y){return _.call(h.src,h.listener,y)}const _=Kd;return h}function Cl(h,_,y,b,U){if(Array.isArray(_))for(var H=0;H<_.length;H++)Cl(h,_[H],y,b,U);else b=g(b)?!!b.capture:!!b,y=Vc(y),h&&h[It]?(h=h.i,_=String(_).toString(),_ in h.g&&(H=h.g[_],y=jr(H,y,b,U),-1<y&&(Us(H[y]),Array.prototype.splice.call(H,y,1),H.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ya(h))&&(_=h.g[_.toString()],h=-1,_&&(h=jr(_,y,b,U)),(y=-1<h?_[h]:null)&&Qa(y))}function Qa(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[It])Ur(_.i,h);else{var y=h.type,b=h.proxy;_.removeEventListener?_.removeEventListener(y,b,h.capture):_.detachEvent?_.detachEvent(qr(y),b):_.addListener&&_.removeListener&&_.removeListener(b),(y=Ya(_))?(Ur(y,h),y.h==0&&(y.src=null,_[zr]=null)):Us(h)}}}function qr(h){return h in Al?Al[h]:Al[h]="on"+h}function Kd(h,_){if(h.da)h=!0;else{_=new _e(_,this);var y=h.listener,b=h.ha||h.src;h.fa&&Qa(h),h=y.call(b,_)}return h}function Ya(h){return h=h[zr],h instanceof Xi?h:null}var Rl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vc(h){return typeof h=="function"?h:(h[Rl]||(h[Rl]=function(_){return h.handleEvent(_)}),h[Rl])}function yt(){ie.call(this),this.i=new Xi(this),this.M=this,this.F=null}j(yt,ie),yt.prototype[It]=!0,yt.prototype.removeEventListener=function(h,_,y,b){Cl(this,h,_,y,b)};function Ze(h,_){var y,b=h.F;if(b)for(y=[];b;b=b.F)y.push(b);if(h=h.M,b=_.type||_,typeof _=="string")_=new Y(_,h);else if(_ instanceof Y)_.target=_.target||h;else{var U=_;_=new Y(b,h),M(_,U)}if(U=!0,y)for(var H=y.length-1;0<=H;H--){var te=_.g=y[H];U=kn(te,b,!0,_)&&U}if(te=_.g=h,U=kn(te,b,!0,_)&&U,U=kn(te,b,!1,_)&&U,y)for(H=0;H<y.length;H++)te=_.g=y[H],U=kn(te,b,!1,_)&&U}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var y=h.g[_],b=0;b<y.length;b++)Us(y[b]);delete h.g[_],h.h--}}this.F=null},yt.prototype.K=function(h,_,y,b){return this.i.add(String(h),_,!1,y,b)},yt.prototype.L=function(h,_,y,b){return this.i.add(String(h),_,!0,y,b)};function kn(h,_,y,b){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,H=0;H<_.length;++H){var te=_[H];if(te&&!te.da&&te.capture==y){var ze=te.listener,qt=te.ha||te.src;te.fa&&Ur(h.i,te),U=ze.call(qt,b)!==!1&&U}}return U&&!b.defaultPrevented}function hn(h,_,y){if(typeof h=="function")y&&(h=S(h,y));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Lc(h){h.g=hn(()=>{h.g=null,h.i&&(h.i=!1,Lc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Xd extends ie{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Lc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(h){ie.call(this),this.h=h,this.g={}}j(Br,ie);var Fr=[];function Hr(h){Le(h.g,function(_,y){this.g.hasOwnProperty(y)&&Qa(_)},h),h.g={}}Br.prototype.N=function(){Br.aa.N.call(this),Hr(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ui=d.JSON.stringify,Ka=d.JSON.parse,Gr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Il(){}Il.prototype.h=null;function Nl(h){return h.h||(h.h=h.i())}function xl(){}var $i={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wi(){Y.call(this,"d")}j(Wi,Y);function Dl(){Y.call(this,"c")}j(Dl,Y);var Si={},Ol=null;function js(){return Ol=Ol||new yt}Si.La="serverreachability";function Xa(h){Y.call(this,Si.La,h)}j(Xa,Y);function zs(h){const _=js();Ze(_,new Xa(_))}Si.STAT_EVENT="statevent";function Uc(h,_){Y.call(this,Si.STAT_EVENT,h),this.stat=_}j(Uc,Y);function mt(h){const _=js();Ze(_,new Uc(_,h))}Si.Ma="timingevent";function zt(h,_){Y.call(this,Si.Ma,h),this.size=_}j(zt,Y);function Nt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Kn(){this.g=!0}Kn.prototype.xa=function(){this.g=!1};function Ml(h,_,y,b,U,H){h.info(function(){if(h.g)if(H)for(var te="",ze=H.split("&"),qt=0;qt<ze.length;qt++){var qe=ze[qt].split("=");if(1<qe.length){var Kt=qe[0];qe=qe[1];var Bt=Kt.split("_");te=2<=Bt.length&&Bt[1]=="type"?te+(Kt+"="+qe+"&"):te+(Kt+"=redacted&")}}else te=null;else te=H;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+_+`
`+y+`
`+te})}function $d(h,_,y,b,U,H,te){h.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+_+`
`+y+`
`+H+" "+te})}function qs(h,_,y,b){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Qr(h,y)+(b?" "+b:"")})}function jc(h,_){h.info(function(){return"TIMEOUT: "+_})}Kn.prototype.info=function(){};function Qr(h,_){if(!h.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var b=y[h];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var te=1;te<U.length;te++)U[te]=""}}}}return ui(y)}catch{return _}}var Bs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wi;function bi(){}j(bi,Il),bi.prototype.g=function(){return new XMLHttpRequest},bi.prototype.i=function(){return{}},wi=new bi;function vn(h,_,y,b){this.j=h,this.i=_,this.l=y,this.R=b||1,this.U=new Br(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new St}function St(){this.i=null,this.g="",this.h=!1}var kl={},$a={};function ci(h,_,y){h.L=1,h.v=Wr(Pn(_)),h.m=y,h.P=!0,Ji(h,null)}function Ji(h,_){h.F=Date.now(),Yr(h),h.A=Pn(h.v);var y=h.A,b=h.R;Array.isArray(b)||(b=[String(b)]),zl(y.i,"t",b),h.C=0,y=h.j.J,h.h=new St,h.g=th(h.j,y?_:null,!h.m),0<h.O&&(h.M=new Xd(S(h.Y,h,h.g),h.O)),_=h.U,y=h.g,b=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(Fr[0]=U.toString()),U=Fr);for(var H=0;H<U.length;H++){var te=Pc(y,U[H],b||_.handleEvent,!1,_.h||_);if(!te)break;_.g[te.key]=te}_=h.H?A(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),zs(),Ml(h.i,h.u,h.A,h.l,h.R,h.m)}vn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Zn(h)==3?_.j():this.Y(h)},vn.prototype.Y=function(h){try{if(h==this.g)e:{const Bt=Zn(this.g);var _=this.g.Ba();const os=this.g.Z();if(!(3>Bt)&&(Bt!=3||this.g&&(this.h.h||this.g.oa()||Yc(this.g)))){this.J||Bt!=4||_==7||(_==8||0>=os?zs(3):zs(2)),Fs(this);var y=this.g.Z();this.X=y;t:if(zc(this)){var b=Yc(this.g);h="";var U=b.length,H=Zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),Ai(this);var te="";break t}this.h.i=new d.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(b[_],{stream:!(H&&_==U-1)});b.length=0,this.h.g+=h,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,$d(this.i,this.u,this.A,this.l,this.R,Bt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,qt=this.g;if((ze=qt.g?qt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ue(ze)){var qe=ze;break t}}qe=null}if(y=qe)qs(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kr(this,y);else{this.o=!1,this.s=3,mt(12),nn(this),Ai(this);break e}}if(this.P){y=!0;let sn;for(;!this.J&&this.C<te.length;)if(sn=qc(this,te),sn==$a){Bt==4&&(this.s=4,mt(14),y=!1),qs(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==kl){this.s=4,mt(15),qs(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else qs(this.i,this.l,sn,null),Kr(this,sn);if(zc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Bt!=4||te.length!=0||this.h.h||(this.s=1,mt(16),y=!1),this.o=this.o&&y,!y)qs(this.i,this.l,te,"[Invalid Chunked Response]"),nn(this),Ai(this);else if(0<te.length&&!this.W){this.W=!0;var Kt=this.j;Kt.g==this&&Kt.ba&&!Kt.M&&(Kt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),ra(Kt),Kt.M=!0,mt(11))}}else qs(this.i,this.l,te,null),Kr(this,te);Bt==4&&nn(this),this.o&&!this.J&&(Bt==4?Zc(this.j,this):(this.o=!1,Yr(this)))}else tm(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),nn(this),Ai(this)}}}catch{}finally{}};function zc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function qc(h,_){var y=h.C,b=_.indexOf(`
`,y);return b==-1?$a:(y=Number(_.substring(y,b)),isNaN(y)?kl:(b+=1,b+y>_.length?$a:(_=_.slice(b,b+y),h.C=b+y,_)))}vn.prototype.cancel=function(){this.J=!0,nn(this)};function Yr(h){h.S=Date.now()+h.I,Bc(h,h.I)}function Bc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Nt(S(h.ba,h),_)}function Fs(h){h.B&&(d.clearTimeout(h.B),h.B=null)}vn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(jc(this.i,this.A),this.L!=2&&(zs(),mt(17)),nn(this),this.s=2,Ai(this)):Bc(this,this.S-h)};function Ai(h){h.j.G==0||h.J||Zc(h.j,h)}function nn(h){Fs(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Hr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Kr(h,_){try{var y=h.j;if(y.G!=0&&(y.g==h||Pl(y.h,h))){if(!h.K&&Pl(y.h,h)&&y.G==3){try{var b=y.Da.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)lo(y),ao(y);else break e;Gl(y),mt(18)}}else y.za=U[1],0<y.za-y.T&&37500>U[2]&&y.F&&y.v==0&&!y.C&&(y.C=Nt(S(y.Za,y),6e3));if(1>=Za(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else as(y,11)}else if((h.K||y.g==h)&&lo(y),!ue(_))for(U=y.Da.g.parse(_),_=0;_<U.length;_++){let qe=U[_];if(y.T=qe[0],qe=qe[1],y.G==2)if(qe[0]=="c"){y.K=qe[1],y.ia=qe[2];const Kt=qe[3];Kt!=null&&(y.la=Kt,y.j.info("VER="+y.la));const Bt=qe[4];Bt!=null&&(y.Aa=Bt,y.j.info("SVER="+y.Aa));const os=qe[5];os!=null&&typeof os=="number"&&0<os&&(b=1.5*os,y.L=b,y.j.info("backChannelRequestTimeoutMs_="+b)),b=y;const sn=h.g;if(sn){const Oi=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oi){var H=b.h;H.g||Oi.indexOf("spdy")==-1&&Oi.indexOf("quic")==-1&&Oi.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Ja(H,H.h),H.h=null))}if(b.D){const Yl=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Yl&&(b.ya=Yl,nt(b.I,b.D,Yl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),b=y;var te=h;if(b.qa=eh(b,b.J?b.ia:null,b.W),te.K){En(b.h,te);var ze=te,qt=b.L;qt&&(ze.I=qt),ze.B&&(Fs(ze),Yr(ze)),b.g=te}else $c(b);0<y.i.length&&oo(y)}else qe[0]!="stop"&&qe[0]!="close"||as(y,7);else y.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?as(y,7):Fl(y):qe[0]!="noop"&&y.l&&y.l.ta(qe),y.v=0)}}zs(4)}catch{}}var Fc=class{constructor(h,_){this.g=h,this.map=_}};function es(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wa(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Za(h){return h.h?1:h.g?h.g.size:0}function Pl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Ja(h,_){h.g?h.g.add(_):h.h=_}function En(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}es.prototype.cancel=function(){if(this.i=Vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Vl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const y of h.g.values())_=_.concat(y.D);return _}return Q(h.i)}function Wd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],y=h.length,b=0;b<y;b++)_.push(h[b]);return _}_=[],y=0;for(b in h)_[y++]=h[b];return _}function eo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var y=0;y<h;y++)_.push(y);return _}_=[],y=0;for(const b in h)_[y++]=b;return _}}}function Ll(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var y=eo(h),b=Wd(h),U=b.length,H=0;H<U;H++)_.call(void 0,b[H],y&&y[H],h)}var Xr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zd(h,_){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var b=h[y].indexOf("="),U=null;if(0<=b){var H=h[y].substring(0,b);U=h[y].substring(b+1)}else H=h[y];_(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function xt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof xt){this.h=h.h,$r(this,h.j),this.o=h.o,this.g=h.g,Hs(this,h.s),this.l=h.l;var _=h.i,y=new ns;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),ts(this,y),this.m=h.m}else h&&(_=String(h).match(Xr))?(this.h=!1,$r(this,_[1]||"",!0),this.o=Xn(_[2]||""),this.g=Xn(_[3]||"",!0),Hs(this,_[4]),this.l=Xn(_[5]||"",!0),ts(this,_[6]||"",!0),this.m=Xn(_[7]||"")):(this.h=!1,this.i=new ns(null,this.h))}xt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Zr(_,Ul,!0),":");var y=this.g;return(y||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Zr(_,Ul,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(Zr(y,y.charAt(0)=="/"?Jd:jl,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",Zr(y,to)),h.join("")};function Pn(h){return new xt(h)}function $r(h,_,y){h.j=y?Xn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Hs(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function ts(h,_,y){_ instanceof ns?(h.i=_,Gc(h.i,h.h)):(y||(_=Zr(_,em)),h.i=new ns(_,h.h))}function nt(h,_,y){h.i.set(_,y)}function Wr(h){return nt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Xn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Zr(h,_,y){return typeof h=="string"?(h=encodeURI(h).replace(_,Hc),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Hc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Ul=/[#\/\?@]/g,jl=/[#\?:]/g,Jd=/[#\?]/g,em=/[#\?@]/g,to=/#/g;function ns(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function $n(h){h.g||(h.g=new Map,h.h=0,h.i&&Zd(h.i,function(_,y){h.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}n=ns.prototype,n.add=function(h,_){$n(this),this.i=null,h=Ci(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(_),this.h+=1,this};function is(h,_){$n(h),_=Ci(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function ss(h,_){return $n(h),_=Ci(h,_),h.g.has(_)}n.forEach=function(h,_){$n(this),this.g.forEach(function(y,b){y.forEach(function(U){h.call(_,U,b,this)},this)},this)},n.na=function(){$n(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let b=0;b<_.length;b++){const U=h[b];for(let H=0;H<U.length;H++)y.push(_[b])}return y},n.V=function(h){$n(this);let _=[];if(typeof h=="string")ss(this,h)&&(_=_.concat(this.g.get(Ci(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)_=_.concat(h[y])}return _},n.set=function(h,_){return $n(this),this.i=null,h=Ci(this,h),ss(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function zl(h,_,y){is(h,_),0<y.length&&(h.i=null,h.g.set(Ci(h,_),Q(y)),h.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var b=_[y];const H=encodeURIComponent(String(b)),te=this.V(b);for(b=0;b<te.length;b++){var U=H;te[b]!==""&&(U+="="+encodeURIComponent(String(te[b]))),h.push(U)}}return this.i=h.join("&")};function Ci(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Gc(h,_){_&&!h.j&&($n(h),h.i=null,h.g.forEach(function(y,b){var U=b.toLowerCase();b!=U&&(is(this,b),zl(this,U,y))},h)),h.j=_}function Jr(h,_){const y=new Kn;if(d.Image){const b=new Image;b.onload=x(Wn,y,"TestLoadImage: loaded",!0,_,b),b.onerror=x(Wn,y,"TestLoadImage: error",!1,_,b),b.onabort=x(Wn,y,"TestLoadImage: abort",!1,_,b),b.ontimeout=x(Wn,y,"TestLoadImage: timeout",!1,_,b),d.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=h}else _(!1)}function hi(h,_){const y=new Kn,b=new AbortController,U=setTimeout(()=>{b.abort(),Wn(y,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:b.signal}).then(H=>{clearTimeout(U),H.ok?Wn(y,"TestPingServer: ok",!0,_):Wn(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),Wn(y,"TestPingServer: error",!1,_)})}function Wn(h,_,y,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(y)}catch{}}function ea(){this.g=new Gr}function Ri(h,_,y){const b=y||"";try{Ll(h,function(U,H){let te=U;g(U)&&(te=ui(U)),_.push(b+H+"="+encodeURIComponent(te))})}catch(U){throw _.push(b+"type="+encodeURIComponent("_badmap")),U}}function Gs(h){this.l=h.Ub||null,this.j=h.eb||!1}j(Gs,Il),Gs.prototype.g=function(){return new rs(this.l,this.j)},Gs.prototype.i=(function(h){return function(){return h}})({});function rs(h,_){yt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(rs,yt),n=rs.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ni(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ii(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ni(this)),this.g&&(this.readyState=3,Ni(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ql(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function ql(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ii(this):Ni(this),this.readyState==3&&ql(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ii(this))},n.Qa=function(h){this.g&&(this.response=h,Ii(this))},n.ga=function(){this.g&&Ii(this)};function Ii(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ni(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=_.next();return h.join(`\r
`)};function Ni(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Bl(h){let _="";return Le(h,function(y,b){_+=b,_+=":",_+=y,_+=`\r
`}),_}function Yt(h,_,y){e:{for(b in y){var b=!1;break e}b=!0}b||(y=Bl(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):nt(h,_,y))}function Ke(h){yt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Ke,yt);var no=/^https?$/i,ta=["POST","PUT"];n=Ke.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,y,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wi.g(),this.v=this.o?Nl(this.o):Nl(wi),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(H){Qc(this,H);return}if(h=y||"",y=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)y.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const H of b.keys())y.set(H,b.get(H));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(y.keys()).find(H=>H.toLowerCase()=="content-type"),U=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ta,_,void 0))||b||U||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,te]of y)this.g.setRequestHeader(H,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{na(this),this.u=!0,this.g.send(h),this.u=!1}catch(H){Qc(this,H)}};function Qc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,io(h),xi(h)}function io(h){h.A||(h.A=!0,Ze(h,"complete"),Ze(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ze(this,"complete"),Ze(this,"abort"),xi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xi(this,!0)),Ke.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?so(this):this.bb())},n.bb=function(){so(this)};function so(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Zn(h)!=4||h.Z()!=2)){if(h.u&&Zn(h)==4)hn(h.Ea,0,h);else if(Ze(h,"readystatechange"),Zn(h)==4){h.h=!1;try{const te=h.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var b;if(b=te===0){var U=String(h.D).match(Xr)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),b=!no.test(U?U.toLowerCase():"")}y=b}if(y)Ze(h,"complete"),Ze(h,"success");else{h.m=6;try{var H=2<Zn(h)?h.g.statusText:""}catch{H=""}h.l=H+" ["+h.Z()+"]",io(h)}}finally{xi(h)}}}}function xi(h,_){if(h.g){na(h);const y=h.g,b=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Ze(h,"ready");try{y.onreadystatechange=b}catch{}}}function na(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Zn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Zn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Ka(_)}};function Yc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function tm(h){const _={};h=(h.g&&2<=Zn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<h.length;b++){if(ue(h[b]))continue;var y=k(h[b]);const U=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const H=_[U]||[];_[U]=H,H.push(y)}P(_,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ia(h,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||_}function ro(h){this.Aa=0,this.i=[],this.j=new Kn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ia("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ia("baseRetryDelayMs",5e3,h),this.cb=ia("retryDelaySeedMs",1e4,h),this.Wa=ia("forwardChannelMaxRetries",2,h),this.wa=ia("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new es(h&&h.concurrentRequestLimit),this.Da=new ea,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ro.prototype,n.la=8,n.G=1,n.connect=function(h,_,y,b){mt(0),this.W=h,this.H=_||{},y&&b!==void 0&&(this.H.OSID=y,this.H.OAID=b),this.F=this.X,this.I=eh(this,null,this.W),oo(this)};function Fl(h){if(Kc(h),h.G==3){var _=h.U++,y=Pn(h.I);if(nt(y,"SID",h.K),nt(y,"RID",_),nt(y,"TYPE","terminate"),sa(h,y),_=new vn(h,h.j,_),_.L=2,_.v=Wr(Pn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=_.v,y=!0),y||(_.g=th(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Yr(_)}Jc(h)}function ao(h){h.g&&(ra(h),h.g.cancel(),h.g=null)}function Kc(h){ao(h),h.u&&(d.clearTimeout(h.u),h.u=null),lo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function oo(h){if(!Wa(h.h)&&!h.s){h.s=!0;var _=h.Ga;se||D(),fe||(se(),fe=!0),He.add(_,h),h.B=0}}function nm(h,_){return Za(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Nt(S(h.Ga,h,_),Ql(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new vn(this,this.j,h);let H=this.o;if(this.S&&(H?(H=A(H),M(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var b=this.i[y];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=Xc(this,U,_),y=Pn(this.I),nt(y,"RID",h),nt(y,"CVER",22),this.D&&nt(y,"X-HTTP-Session-Id",this.D),sa(this,y),H&&(this.O?_="headers="+encodeURIComponent(String(Bl(H)))+"&"+_:this.m&&Yt(y,this.m,H)),Ja(this.h,U),this.Ua&&nt(y,"TYPE","init"),this.P?(nt(y,"$req",_),nt(y,"SID","null"),U.T=!0,ci(U,y,null)):ci(U,y,_),this.G=2}}else this.G==3&&(h?Hl(this,h):this.i.length==0||Wa(this.h)||Hl(this))};function Hl(h,_){var y;_?y=_.l:y=h.U++;const b=Pn(h.I);nt(b,"SID",h.K),nt(b,"RID",y),nt(b,"AID",h.T),sa(h,b),h.m&&h.o&&Yt(b,h.m,h.o),y=new vn(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Xc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Ja(h.h,y),ci(y,b,_)}function sa(h,_){h.H&&Le(h.H,function(y,b){nt(_,b,y)}),h.l&&Ll({},function(y,b){nt(_,b,y)})}function Xc(h,_,y){y=Math.min(h.i.length,y);var b=h.l?S(h.l.Na,h.l,h):null;e:{var U=h.i;let H=-1;for(;;){const te=["count="+y];H==-1?0<y?(H=U[0].g,te.push("ofs="+H)):H=0:te.push("ofs="+H);let ze=!0;for(let qt=0;qt<y;qt++){let qe=U[qt].g;const Kt=U[qt].map;if(qe-=H,0>qe)H=Math.max(0,U[qt].g-100),ze=!1;else try{Ri(Kt,te,"req"+qe+"_")}catch{b&&b(Kt)}}if(ze){b=te.join("&");break e}}}return h=h.i.splice(0,y),_.D=h,b}function $c(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;se||D(),fe||(se(),fe=!0),He.add(_,h),h.v=0}}function Gl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Nt(S(h.Fa,h),Ql(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Wc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Nt(S(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),ao(this),Wc(this))};function ra(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Wc(h){h.g=new vn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Pn(h.qa);nt(_,"RID","rpc"),nt(_,"SID",h.K),nt(_,"AID",h.T),nt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&nt(_,"TO",h.ja),nt(_,"TYPE","xmlhttp"),sa(h,_),h.m&&h.o&&Yt(_,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=Wr(Pn(_)),y.m=null,y.P=!0,Ji(y,h)}n.Za=function(){this.C!=null&&(this.C=null,ao(this),Gl(this),mt(19))};function lo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Zc(h,_){var y=null;if(h.g==_){lo(h),ra(h),h.g=null;var b=2}else if(Pl(h.h,_))y=_.D,En(h.h,_),b=1;else return;if(h.G!=0){if(_.o)if(b==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;b=js(),Ze(b,new zt(b,y)),oo(h)}else $c(h);else if(U=_.s,U==3||U==0&&0<_.X||!(b==1&&nm(h,_)||b==2&&Gl(h)))switch(y&&0<y.length&&(_=h.h,_.i=_.i.concat(y)),U){case 1:as(h,5);break;case 4:as(h,10);break;case 3:as(h,6);break;default:as(h,2)}}}function Ql(h,_){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*_}function as(h,_){if(h.j.info("Error code "+_),_==2){var y=S(h.fb,h),b=h.Xa;const U=!b;b=new xt(b||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||$r(b,"https"),Wr(b),U?Jr(b.toString(),y):hi(b.toString(),y)}else mt(2);h.G=0,h.l&&h.l.sa(_),Jc(h),Kc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Jc(h){if(h.G=0,h.ka=[],h.l){const _=Vl(h.h);(_.length!=0||h.i.length!=0)&&(G(h.ka,_),G(h.ka,h.i),h.h.i.length=0,Q(h.i),h.i.length=0),h.l.ra()}}function eh(h,_,y){var b=y instanceof xt?Pn(y):new xt(y);if(b.g!="")_&&(b.g=_+"."+b.g),Hs(b,b.s);else{var U=d.location;b=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var H=new xt(null);b&&$r(H,b),_&&(H.g=_),U&&Hs(H,U),y&&(H.l=y),b=H}return y=h.D,_=h.ya,y&&_&&nt(b,y,_),nt(b,"VER",h.la),sa(h,b),b}function th(h,_,y){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ke(new Gs({eb:y})):new Ke(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function nh(){}n=nh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function uo(){}uo.prototype.g=function(h,_){return new Tn(h,_)};function Tn(h,_){yt.call(this),this.g=new ro(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!ue(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ue(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Di(this)}j(Tn,yt),Tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tn.prototype.close=function(){Fl(this.g)},Tn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=ui(h),h=y);_.i.push(new Fc(_.Ya++,h)),_.G==3&&oo(_)},Tn.prototype.N=function(){this.g.l=null,delete this.j,Fl(this.g),delete this.g,Tn.aa.N.call(this)};function ih(h){Wi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const y in _){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}j(ih,Wi);function sh(){Dl.call(this),this.status=1}j(sh,Dl);function Di(h){this.g=h}j(Di,nh),Di.prototype.ua=function(){Ze(this.g,"a")},Di.prototype.ta=function(h){Ze(this.g,new ih(h))},Di.prototype.sa=function(h){Ze(this.g,new sh)},Di.prototype.ra=function(){Ze(this.g,"b")},uo.prototype.createWebChannel=uo.prototype.g,Tn.prototype.send=Tn.prototype.o,Tn.prototype.open=Tn.prototype.m,Tn.prototype.close=Tn.prototype.close,jb=function(){return new uo},Ub=function(){return js()},Lb=Si,Ng={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bs.NO_ERROR=0,Bs.TIMEOUT=8,Bs.HTTP_ERROR=6,yf=Bs,Zi.COMPLETE="complete",Vb=Zi,xl.EventType=$i,$i.OPEN="a",$i.CLOSE="b",$i.ERROR="c",$i.MESSAGE="d",yt.prototype.listen=yt.prototype.K,ju=xl,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Pb=Ke}).apply(typeof of<"u"?of:typeof self<"u"?self:typeof window<"u"?window:{});const QT="@firebase/firestore",YT="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pn.UNAUTHENTICATED=new pn(null),pn.GOOGLE_CREDENTIALS=new pn("google-credentials-uid"),pn.FIRST_PARTY=new pn("first-party-uid"),pn.MOCK_USER=new pn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ka=new fd("@firebase/firestore");function zo(){return ka.logLevel}function le(n,...e){if(ka.logLevel<=Pe.DEBUG){const t=e.map(b_);ka.debug(`Firestore (${gl}): ${n}`,...t)}}function Ds(n,...e){if(ka.logLevel<=Pe.ERROR){const t=e.map(b_);ka.error(`Firestore (${gl}): ${n}`,...t)}}function tl(n,...e){if(ka.logLevel<=Pe.WARN){const t=e.map(b_);ka.warn(`Firestore (${gl}): ${n}`,...t)}}function b_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Te(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,zb(n,s,t)}function zb(n,e,t){let s=`FIRESTORE (${gl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ds(s),new Error(s)}function $e(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||zb(e,a,s)}function Ce(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Vs{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Y2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(pn.UNAUTHENTICATED)))}shutdown(){}}class K2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class X2{constructor(e){this.t=e,this.currentUser=pn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Rs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Rs,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Rs)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($e(typeof s.accessToken=="string",31837,{l:s}),new qb(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new pn(e)}}class $2{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=pn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class W2{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new $2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(pn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class KT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0,3512);const s=l=>{l.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,le("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new KT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new KT(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=J2(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ue(n,e){return n<e?-1:n>e?1:0}function xg(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return ag(a)===ag(l)?Ue(a,l):ag(a)?1:-1}return Ue(n.length,e.length)}const eD=55296,tD=57343;function ag(n){const e=n.charCodeAt(0);return e>=eD&&e<=tD}function nl(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT="__name__";class Ui{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Te(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ui.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ui?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Ui.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ue(e.length,t.length)}static compareSegments(e,t){const s=Ui.isNumericId(e),a=Ui.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Ui.extractNumericId(e).compare(Ui.extractNumericId(t)):xg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tr.fromString(e.substring(4,e.length-2))}}class ut extends Ui{construct(e,t,s){return new ut(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new ut(t)}static emptyPath(){return new ut([])}}const nD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class un extends Ui{construct(e,t,s){return new un(e,t,s)}static isValidIdentifier(e){return nD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),un.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===XT}static keyField(){return new un([XT])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ae($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ae($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ae($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new ae($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new un(t)}static emptyPath(){return new un([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(ut.fromString(e))}static fromName(e){return new pe(ut.fromString(e).popFirst(5))}static empty(){return new pe(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ut.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new ut(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(n,e,t){if(!t)throw new ae($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function iD(n,e,t,s){if(e===!0&&s===!0)throw new ae($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $T(n){if(!pe.isDocumentKey(n))throw new ae($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function WT(n){if(pe.isDocumentKey(n))throw new ae($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fb(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function _d(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te(12329,{type:typeof n})}function Dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_d(n);throw new ae($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Vt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Sc(n,e){if(!Fb(n))throw new ae($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ae($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=-62135596800,JT=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*JT);return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ZT)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/JT}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sc(e,ft._jsonSchema))return new ft(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ZT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ft._jsonSchemaVersion="firestore/timestamp/1.0",ft._jsonSchema={type:Vt("string",ft._jsonSchemaVersion),seconds:Vt("number"),nanoseconds:Vt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new ft(0,0))}static max(){return new Ae(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ic=-1;function sD(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Ae.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new Cr(a,pe.empty(),e)}function rD(n){return new Cr(n.readTime,n.key,ic)}class Cr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Cr(Ae.min(),pe.empty(),ic)}static max(){return new Cr(Ae.max(),pe.empty(),ic)}}function aD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==oD)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):J.reject(t)}static resolve(e){return new J(((t,s)=>{t(e)}))}static reject(e){return new J(((t,s)=>{s(e)}))}static waitFor(e){return new J(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=J.resolve(!1);for(const s of e)t=t.next((a=>a?J.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new J(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((v=>{c[g]=v,++d,d===l&&s(c)}),(v=>a(v)))}}))}static doWhile(e,t){return new J(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function uD(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class yd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}yd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=-1;function vd(n){return n==null}function Uf(n){return n===0&&1/n==-1/0}function cD(n){return typeof n=="number"&&Number.isInteger(n)&&!Uf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="";function hD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=eS(e)),e=fD(n.get(t),e);return eS(e)}function fD(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Hb:t+="";break;default:t+=l}}return t}function eS(n){return n+Hb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Pr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Gb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt=class Dg{constructor(e,t){this.comparator=e,this.root=t||Sr.EMPTY}insert(e,t){return new Dg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Sr.BLACK,null,null))}remove(e){return new Dg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Sr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lf(this.root,e,this.comparator,!1)}getReverseIterator(){return new lf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lf(this.root,e,this.comparator,!0)}},lf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Sr=class Ts{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Ts.RED,this.left=a??Ts.EMPTY,this.right=l??Ts.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Ts(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ts.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Ts.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ts.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ts.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}};Sr.EMPTY=null,Sr.RED=!0,Sr.BLACK=!1;Sr.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Sr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.comparator=e,this.data=new Lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nS(this.data.getIterator())}getIteratorFrom(e){return new nS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Qt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Qt(this.comparator);return t.data=e,t}}class nS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.fields=e,e.sort(un.comparator)}static empty(){return new Hn([])}unionWith(e){let t=new Qt(un.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nl(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Qb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Qb("Invalid base64 string: "+l):l}})(e);return new cn(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new cn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}cn.EMPTY_BYTE_STRING=new cn("");const dD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(n){if($e(!!n,39018),typeof n=="string"){let e=0;const t=dD.exec(n);if($e(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ir(n){return typeof n=="string"?cn.fromBase64String(n):cn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="server_timestamp",Kb="__type__",Xb="__previous_value__",$b="__local_write_time__";function R_(n){return(n?.mapValue?.fields||{})[Kb]?.stringValue===Yb}function Ed(n){const e=n.mapValue.fields[Xb];return R_(e)?Ed(e):e}function sc(n){const e=Rr(n.mapValue.fields[$b].timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,t,s,a,l,c,d,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const jf="(default)";class rc{constructor(e,t){this.projectId=e,this.database=t||jf}static empty(){return new rc("","")}get isDefaultDatabase(){return this.database===jf}isEqual(e){return e instanceof rc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="__type__",pD="__max__",uf={mapValue:{}},Zb="__vector__",zf="value";function Nr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?R_(n)?4:_D(n)?9007199254740991:gD(n)?10:11:Te(28295,{value:n})}function Yi(n,e){if(n===e)return!0;const t=Nr(n);if(t!==Nr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sc(n).isEqual(sc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Rr(a.timestampValue),d=Rr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return Ir(a.bytesValue).isEqual(Ir(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return At(a.geoPointValue.latitude)===At(l.geoPointValue.latitude)&&At(a.geoPointValue.longitude)===At(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return At(a.integerValue)===At(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=At(a.doubleValue),d=At(l.doubleValue);return c===d?Uf(c)===Uf(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return nl(n.arrayValue.values||[],e.arrayValue.values||[],Yi);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(tS(c)!==tS(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Yi(c[p],d[p])))return!1;return!0})(n,e);default:return Te(52216,{left:n})}}function ac(n,e){return(n.values||[]).find((t=>Yi(t,e)))!==void 0}function il(n,e){if(n===e)return 0;const t=Nr(n),s=Nr(e);if(t!==s)return Ue(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ue(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=At(l.integerValue||l.doubleValue),p=At(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return iS(n.timestampValue,e.timestampValue);case 4:return iS(sc(n),sc(e));case 5:return xg(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=Ir(l),p=Ir(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=Ue(d[g],p[g]);if(v!==0)return v}return Ue(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=Ue(At(l.latitude),At(c.latitude));return d!==0?d:Ue(At(l.longitude),At(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return sS(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[zf]?.arrayValue,v=p[zf]?.arrayValue,T=Ue(g?.values?.length||0,v?.values?.length||0);return T!==0?T:sS(g,v)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===uf.mapValue&&c===uf.mapValue)return 0;if(l===uf.mapValue)return 1;if(c===uf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const S=xg(p[T],v[T]);if(S!==0)return S;const x=il(d[p[T]],g[v[T]]);if(x!==0)return x}return Ue(p.length,v.length)})(n.mapValue,e.mapValue);default:throw Te(23264,{he:t})}}function iS(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ue(n,e);const t=Rr(n),s=Rr(e),a=Ue(t.seconds,s.seconds);return a!==0?a:Ue(t.nanos,s.nanos)}function sS(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=il(t[a],s[a]);if(l)return l}return Ue(t.length,s.length)}function sl(n){return Og(n)}function Og(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Rr(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ir(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return pe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Og(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Og(t.fields[c])}`;return a+"}"})(n.mapValue):Te(61005,{value:n})}function vf(n){switch(Nr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ed(n);return e?16+vf(e):16;case 5:return 2*n.stringValue.length;case 6:return Ir(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+vf(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Pr(s.fields,((l,c)=>{a+=l.length+vf(c)})),a})(n.mapValue);default:throw Te(13486,{value:n})}}function rS(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Mg(n){return!!n&&"integerValue"in n}function I_(n){return!!n&&"arrayValue"in n}function aS(n){return!!n&&"nullValue"in n}function oS(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ef(n){return!!n&&"mapValue"in n}function gD(n){return(n?.mapValue?.fields||{})[Wb]?.stringValue===Zb}function Gu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Pr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Gu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gu(n.arrayValue.values[t]);return e}return{...n}}function _D(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===pD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ef(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gu(t)}setAll(e){let t=un.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Gu(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Ef(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Yi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Ef(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Pr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new In(Gu(this.value))}}function Jb(n){const e=[];return Pr(n.fields,((t,s)=>{const a=new un([t]);if(Ef(s)){const l=Jb(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new gn(e,0,Ae.min(),Ae.min(),Ae.min(),In.empty(),0)}static newFoundDocument(e,t,s,a){return new gn(e,1,t,Ae.min(),s,a,0)}static newNoDocument(e,t){return new gn(e,2,t,Ae.min(),Ae.min(),In.empty(),0)}static newUnknownDocument(e,t){return new gn(e,3,t,Ae.min(),Ae.min(),In.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qf{constructor(e,t){this.position=e,this.inclusive=t}}function lS(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=pe.comparator(pe.fromName(c.referenceValue),t.key):s=il(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function uS(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Yi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class oc{constructor(e,t="asc"){this.field=e,this.dir=t}}function yD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class eA{}class Pt extends eA{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new ED(e,t,s):t==="array-contains"?new wD(e,s):t==="in"?new bD(e,s):t==="not-in"?new AD(e,s):t==="array-contains-any"?new CD(e,s):new Pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new TD(e,s):new SD(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(il(t,this.value)):t!==null&&Nr(this.value)===Nr(t)&&this.matchesComparison(il(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ei extends eA{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ei(e,t)}matches(e){return tA(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function tA(n){return n.op==="and"}function nA(n){return vD(n)&&tA(n)}function vD(n){for(const e of n.filters)if(e instanceof Ei)return!1;return!0}function kg(n){if(n instanceof Pt)return n.field.canonicalString()+n.op.toString()+sl(n.value);if(nA(n))return n.filters.map((e=>kg(e))).join(",");{const e=n.filters.map((t=>kg(t))).join(",");return`${n.op}(${e})`}}function iA(n,e){return n instanceof Pt?(function(s,a){return a instanceof Pt&&s.op===a.op&&s.field.isEqual(a.field)&&Yi(s.value,a.value)})(n,e):n instanceof Ei?(function(s,a){return a instanceof Ei&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&iA(c,a.filters[d])),!0):!1})(n,e):void Te(19439)}function sA(n){return n instanceof Pt?(function(t){return`${t.field.canonicalString()} ${t.op} ${sl(t.value)}`})(n):n instanceof Ei?(function(t){return t.op.toString()+" {"+t.getFilters().map(sA).join(" ,")+"}"})(n):"Filter"}class ED extends Pt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class TD extends Pt{constructor(e,t){super(e,"in",t),this.keys=rA("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class SD extends Pt{constructor(e,t){super(e,"not-in",t),this.keys=rA("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function rA(n,e){return(e.arrayValue?.values||[]).map((t=>pe.fromName(t.referenceValue)))}class wD extends Pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return I_(t)&&ac(t.arrayValue,this.value)}}class bD extends Pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ac(this.value.arrayValue,t)}}class AD extends Pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ac(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ac(this.value.arrayValue,t)}}class CD extends Pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!I_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ac(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function cS(n,e=null,t=[],s=[],a=null,l=null,c=null){return new RD(n,e,t,s,a,l,c)}function N_(n){const e=Ce(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>kg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),vd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>sl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>sl(s))).join(",")),e.Te=t}return e.Te}function x_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!yD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!iA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!uS(n.startAt,e.startAt)&&uS(n.endAt,e.endAt)}function Pg(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ID(n,e,t,s,a,l,c,d){return new vl(n,e,t,s,a,l,c,d)}function Td(n){return new vl(n)}function hS(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function aA(n){return n.collectionGroup!==null}function Qu(n){const e=Ce(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Qt(un.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new oc(l,s))})),t.has(un.keyField().canonicalString())||e.Ie.push(new oc(un.keyField(),s))}return e.Ie}function qi(n){const e=Ce(n);return e.Ee||(e.Ee=ND(e,Qu(n))),e.Ee}function ND(n,e){if(n.limitType==="F")return cS(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new oc(a.field,l)}));const t=n.endAt?new qf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new qf(n.startAt.position,n.startAt.inclusive):null;return cS(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Vg(n,e){const t=n.filters.concat([e]);return new vl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Bf(n,e,t){return new vl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Sd(n,e){return x_(qi(n),qi(e))&&n.limitType===e.limitType}function oA(n){return`${N_(qi(n))}|lt:${n.limitType}`}function qo(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>sA(a))).join(", ")}]`),vd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>sl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>sl(a))).join(",")),`Target(${s})`})(qi(n))}; limitType=${n.limitType})`}function wd(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):pe.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of Qu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=lS(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,Qu(s),a)||s.endAt&&!(function(c,d,p){const g=lS(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,Qu(s),a))})(n,e)}function xD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lA(n){return(e,t)=>{let s=!1;for(const a of Qu(n)){const l=DD(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function DD(n,e,t){const s=n.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?il(p,g):Te(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Pr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return Gb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=new Lt(pe.comparator);function Os(){return OD}const uA=new Lt(pe.comparator);function zu(...n){let e=uA;for(const t of n)e=e.insert(t.key,t);return e}function cA(n){let e=uA;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ba(){return Yu()}function hA(){return Yu()}function Yu(){return new qa((n=>n.toString()),((n,e)=>n.isEqual(e)))}const MD=new Lt(pe.comparator),kD=new Qt(pe.comparator);function je(...n){let e=kD;for(const t of n)e=e.add(t);return e}const PD=new Qt(Ue);function VD(){return PD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uf(e)?"-0":e}}function fA(n){return{integerValue:""+n}}function LD(n,e){return cD(e)?fA(e):D_(n,e)}/**
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
 */class bd{constructor(){this._=void 0}}function UD(n,e,t){return n instanceof lc?(function(a,l){const c={fields:{[Kb]:{stringValue:Yb},[$b]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&R_(l)&&(l=Ed(l)),l&&(c.fields[Xb]=l),{mapValue:c}})(t,e):n instanceof rl?mA(n,e):n instanceof al?pA(n,e):(function(a,l){const c=dA(a,l),d=fS(c)+fS(a.Ae);return Mg(c)&&Mg(a.Ae)?fA(d):D_(a.serializer,d)})(n,e)}function jD(n,e,t){return n instanceof rl?mA(n,e):n instanceof al?pA(n,e):t}function dA(n,e){return n instanceof Ff?(function(s){return Mg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class lc extends bd{}class rl extends bd{constructor(e){super(),this.elements=e}}function mA(n,e){const t=gA(e);for(const s of n.elements)t.some((a=>Yi(a,s)))||t.push(s);return{arrayValue:{values:t}}}class al extends bd{constructor(e){super(),this.elements=e}}function pA(n,e){let t=gA(e);for(const s of n.elements)t=t.filter((a=>!Yi(a,s)));return{arrayValue:{values:t}}}class Ff extends bd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function fS(n){return At(n.integerValue||n.doubleValue)}function gA(n){return I_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t){this.field=e,this.transform=t}}function zD(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof rl&&a instanceof rl||s instanceof al&&a instanceof al?nl(s.elements,a.elements,Yi):s instanceof Ff&&a instanceof Ff?Yi(s.Ae,a.Ae):s instanceof lc&&a instanceof lc})(n.transform,e.transform)}class qD{constructor(e,t){this.version=e,this.transformResults=t}}class On{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ad{}function _A(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new M_(n.key,On.none()):new wc(n.key,n.data,On.none());{const t=n.data,s=In.empty();let a=new Qt(un.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Vr(n.key,s,new Hn(a.toArray()),On.none())}}function BD(n,e,t){n instanceof wc?(function(a,l,c){const d=a.value.clone(),p=mS(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Vr?(function(a,l,c){if(!Tf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=mS(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(yA(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Ku(n,e,t,s){return n instanceof wc?(function(l,c,d,p){if(!Tf(l.precondition,c))return d;const g=l.value.clone(),v=pS(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Vr?(function(l,c,d,p){if(!Tf(l.precondition,c))return d;const g=pS(l.fieldTransforms,p,c),v=c.data;return v.setAll(yA(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,s):(function(l,c,d){return Tf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function FD(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=dA(s.transform,a||null);l!=null&&(t===null&&(t=In.empty()),t.set(s.field,l))}return t||null}function dS(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&nl(s,a,((l,c)=>zD(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wc extends Ad{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Vr extends Ad{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function yA(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function mS(n,e,t){const s=new Map;$e(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,jD(c,d,t[a]))}return s}function pS(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,UD(l,c,e))}return s}class M_ extends Ad{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HD extends Ad{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&BD(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ku(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ku(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=hA();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=_A(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ae.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),je())}isEqual(e){return this.batchId===e.batchId&&nl(this.mutations,e.mutations,((t,s)=>dS(t,s)))&&nl(this.baseMutations,e.baseMutations,((t,s)=>dS(t,s)))}}class k_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){$e(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return MD})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new k_(e,t,s,a)}}/**
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
 */class QD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class YD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt,Fe;function KD(n){switch(n){case $.OK:return Te(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return Te(15467,{code:n})}}function vA(n){if(n===void 0)return Ds("GRPC error has no .code"),$.UNKNOWN;switch(n){case Mt.OK:return $.OK;case Mt.CANCELLED:return $.CANCELLED;case Mt.UNKNOWN:return $.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return $.INTERNAL;case Mt.UNAVAILABLE:return $.UNAVAILABLE;case Mt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Mt.NOT_FOUND:return $.NOT_FOUND;case Mt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Mt.ABORTED:return $.ABORTED;case Mt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Mt.DATA_LOSS:return $.DATA_LOSS;default:return Te(39323,{code:n})}}(Fe=Mt||(Mt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function XD(){return new TextEncoder}/**
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
 */const $D=new Tr([4294967295,4294967295],0);function gS(n){const e=XD().encode(n),t=new kb;return t.update(e),new Uint8Array(t.digest())}function _S(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Tr([t,s],0),new Tr([a,l],0)]}class P_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new qu(`Invalid padding: ${t}`);if(s<0)throw new qu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new qu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new qu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Tr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(Tr.fromNumber(s)));return a.compare($D)===1&&(a=new Tr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=gS(e),[s,a]=_S(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new P_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=gS(e),[s,a]=_S(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class qu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,bc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Cd(Ae.min(),a,new Lt(Ue),Os(),je())}}class bc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new bc(s,t,je(),je(),je())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class EA{constructor(e,t){this.targetId=e,this.Ce=t}}class TA{constructor(e,t,s=cn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class yS{constructor(){this.ve=0,this.Fe=vS(),this.Me=cn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=je(),t=je(),s=je();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Te(38017,{changeType:l})}})),new bc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=vS()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,$e(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class WD{constructor(e){this.Ge=e,this.ze=new Map,this.je=Os(),this.Je=cf(),this.He=cf(),this.Ye=new Lt(Ue)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Pg(l))if(s===0){const c=new pe(l.path);this.et(t,c,gn.newNoDocument(c,Ae.min()))}else $e(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Ir(s).toUint8Array()}catch(p){if(p instanceof Qb)return tl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new P_(c,a,l)}catch(p){return tl(p instanceof qu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Pg(d.target)){const p=new pe(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,gn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=je();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Cd(e,t,this.Ye,this.je,s);return this.je=Os(),this.Je=cf(),this.He=cf(),this.Ye=new Lt(Ue),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new yS,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Qt(Ue),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Qt(Ue),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new yS),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function cf(){return new Lt(pe.comparator)}function vS(){return new Lt(pe.comparator)}const ZD={asc:"ASCENDING",desc:"DESCENDING"},JD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eO={and:"AND",or:"OR"};class tO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Lg(n,e){return n.useProto3Json||vd(e)?e:{value:e}}function Hf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SA(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function nO(n,e){return Hf(n,e.toTimestamp())}function Bi(n){return $e(!!n,49232),Ae.fromTimestamp((function(t){const s=Rr(t);return new ft(s.seconds,s.nanos)})(n))}function V_(n,e){return Ug(n,e).canonicalString()}function Ug(n,e){const t=(function(a){return new ut(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function wA(n){const e=ut.fromString(n);return $e(IA(e),10190,{key:e.toString()}),e}function jg(n,e){return V_(n.databaseId,e.path)}function og(n,e){const t=wA(e);if(t.get(1)!==n.databaseId.projectId)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(AA(t))}function bA(n,e){return V_(n.databaseId,e)}function iO(n){const e=wA(n);return e.length===4?ut.emptyPath():AA(e)}function zg(n){return new ut(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function AA(n){return $e(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ES(n,e,t){return{name:jg(n,e),fields:t.value.mapValue.fields}}function sO(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,v){return g.useProto3Json?($e(v===void 0||typeof v=="string",58123),cn.fromBase64String(v||"")):($e(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),cn.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const v=g.code===void 0?$.UNKNOWN:vA(g.code);return new ae(v,g.message||"")})(c);t=new TA(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=og(n,s.document.name),l=Bi(s.document.updateTime),c=s.document.createTime?Bi(s.document.createTime):Ae.min(),d=new In({mapValue:{fields:s.document.fields}}),p=gn.newFoundDocument(a,l,c,d),g=s.targetIds||[],v=s.removedTargetIds||[];t=new Sf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=og(n,s.document),l=s.readTime?Bi(s.readTime):Ae.min(),c=gn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Sf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=og(n,s.document),l=s.removedTargetIds||[];t=new Sf([],l,a,null)}else{if(!("filter"in e))return Te(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new YD(a,l),d=s.targetId;t=new EA(d,c)}}return t}function rO(n,e){let t;if(e instanceof wc)t={update:ES(n,e.key,e.value)};else if(e instanceof M_)t={delete:jg(n,e.key)};else if(e instanceof Vr)t={update:ES(n,e.key,e.data),updateMask:mO(e.fieldMask)};else{if(!(e instanceof HD))return Te(16599,{Vt:e.type});t={verify:jg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof lc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof rl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof al)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Ff)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Te(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:nO(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)})(n,e.precondition)),t}function aO(n,e){return n&&n.length>0?($e(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?Bi(a.updateTime):Bi(l);return c.isEqual(Ae.min())&&(c=Bi(l)),new qD(c,a.transformResults||[])})(t,e)))):[]}function oO(n,e){return{documents:[bA(n,e.path)]}}function lO(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=bA(n,a);const l=(function(g){if(g.length!==0)return RA(Ei.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((v=>(function(S){return{field:Bo(S.field),direction:hO(S.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Lg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function uO(n){let e=iO(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){$e(s===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const S=CA(T);return S instanceof Ei&&nA(S)?S.getFilters():[S]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((S=>(function(j){return new oc(Fo(j.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(j.direction))})(S)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let S;return S=typeof T=="object"?T.value:T,vd(S)?null:S})(t.limit));let p=null;t.startAt&&(p=(function(T){const S=!!T.before,x=T.values||[];return new qf(x,S)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const S=!T.before,x=T.values||[];return new qf(x,S)})(t.endAt)),ID(e,a,c,l,d,"F",p,g)}function cO(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function CA(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Fo(t.unaryFilter.field);return Pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Fo(t.unaryFilter.field);return Pt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Fo(t.unaryFilter.field);return Pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Fo(t.unaryFilter.field);return Pt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Pt.create(Fo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ei.create(t.compositeFilter.filters.map((s=>CA(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(t.compositeFilter.op))})(n):Te(30097,{filter:n})}function hO(n){return ZD[n]}function fO(n){return JD[n]}function dO(n){return eO[n]}function Bo(n){return{fieldPath:n.canonicalString()}}function Fo(n){return un.fromServerFormat(n.fieldPath)}function RA(n){return n instanceof Pt?(function(t){if(t.op==="=="){if(oS(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NAN"}};if(aS(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(oS(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NOT_NAN"}};if(aS(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bo(t.field),op:fO(t.op),value:t.value}}})(n):n instanceof Ei?(function(t){const s=t.getFilters().map((a=>RA(a)));return s.length===1?s[0]:{compositeFilter:{op:dO(t.op),filters:s}}})(n):Te(54877,{filter:n})}function mO(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function IA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t,s,a,l=Ae.min(),c=Ae.min(),d=cn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.yt=e}}function gO(n){const e=uO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Bf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(){this.Cn=new yO}addToCollectionParentIndex(e,t){return this.Cn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(Cr.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(Cr.min())}updateCollectionGroup(e,t,s){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class yO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Qt(ut.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Qt(ut.comparator)).toArray()}}/**
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
 */const TS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},NA=41943040;class Rn{static withCacheSize(e){return new Rn(e,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn.DEFAULT_COLLECTION_PERCENTILE=10,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rn.DEFAULT=new Rn(NA,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rn.DISABLED=new Rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const SS="LruGarbageCollector",vO=1048576;function wS([n,e],[t,s]){const a=Ue(n,t);return a===0?Ue(e,s):a}class EO{constructor(e){this.Ir=e,this.buffer=new Qt(wS),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();wS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class TO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){le(SS,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yl(t)?le(SS,"Ignoring IndexedDB error during garbage collection: ",t):await _l(t)}await this.Vr(3e5)}))}}class SO{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return J.resolve(yd.ce);const s=new EO(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(TS)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),TS):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),zo()<=Pe.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function wO(n,e){return new SO(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.changes=new qa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?J.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class AO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Ku(s.mutation,a,Hn.empty(),ft.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,je()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=je()){const a=ba();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=zu();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=ba();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,je())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=Os();const c=Yu(),d=(function(){return Yu()})();return t.forEach(((p,g)=>{const v=s.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof Vr)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),Ku(v.mutation,g,v.mutation.getFieldMask(),ft.now())):c.set(g.key,Hn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>d.set(g,new AO(v,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=Yu();let a=new Lt(((c,d)=>c-d)),l=je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let v=s.get(p)||Hn.empty();v=d.applyToLocalView(g,v),s.set(p,v);const T=(a.get(d.batchId)||je()).add(p);a=a.insert(d.batchId,T)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,T=hA();v.forEach((S=>{if(!l.has(S)){const x=_A(t.get(S),s.get(S));x!==null&&T.set(S,x),l=l.add(S)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return J.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return pe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):aA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):J.resolve(ba());let d=ic,p=l;return c.next((g=>J.forEach(g,((v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(v)?J.resolve():this.remoteDocumentCache.getEntry(e,v).next((S=>{p=p.insert(v,S)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,je()))).next((v=>({batchId:d,changes:cA(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let a=zu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=zu();return this.indexManager.getCollectionParents(e,l).next((d=>J.forEach(d,(p=>{const g=(function(T,S){return new vl(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((v=>{v.forEach(((T,S)=>{c=c.insert(T,S)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,gn.newInvalidDocument(v)))}));let d=zu();return c.forEach(((p,g)=>{const v=l.get(p);v!==void 0&&Ku(v.mutation,g,Hn.empty(),ft.now()),wd(t,g)&&(d=d.insert(p,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return J.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Bi(a.createTime)}})(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:gO(a.bundledQuery),readTime:Bi(a.readTime)}})(t)),J.resolve()}}/**
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
 */class IO{constructor(){this.overlays=new Lt(pe.comparator),this.qr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ba();return J.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),J.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),J.resolve()}getOverlaysForCollection(e,t,s){const a=ba(),l=t.length+1,c=new pe(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return J.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Lt(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let v=l.get(g.largestBatchId);v===null&&(v=ba(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=ba(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>d.set(g,v))),!(d.size()>=a)););return J.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new QD(t,s));let l=this.qr.get(t);l===void 0&&(l=je(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class NO{constructor(){this.sessionToken=cn.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.Qr=new Qt(Jt.$r),this.Ur=new Qt(Jt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Jt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Jt(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new pe(new ut([])),s=new Jt(t,e),a=new Jt(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new pe(new ut([])),s=new Jt(t,e),a=new Jt(t,e+1);let l=je();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Jt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Jt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return pe.comparator(e.key,t.key)||Ue(e.Yr,t.Yr)}static Kr(e,t){return Ue(e.Yr,t.Yr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Qt(Jt.$r)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new GD(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new Jt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?C_:this.tr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Jt(t,0),a=new Jt(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Qt(Ue);return t.forEach((a=>{const l=new Jt(a,0),c=new Jt(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),J.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;pe.isDocumentKey(l)||(l=l.child(""));const c=new Jt(new pe(l),0);let d=new Qt(Ue);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),J.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){$e(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return J.forEach(t.mutations,(a=>{const l=new Jt(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Jt(t,0),a=this.Zr.firstAfterOrEqual(s);return J.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.ri=e,this.docs=(function(){return new Lt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return J.resolve(s?s.document.mutableCopy():gn.newInvalidDocument(t))}getEntries(e,t){let s=Os();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():gn.newInvalidDocument(a))})),J.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Os();const c=t.path,d=new pe(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||aD(rD(v),s)<=0||(a.has(v.key)||wd(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Te(9500)}ii(e,t){return J.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new OO(this)}getSize(e){return J.resolve(this.size)}}class OO extends bO{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),J.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e){this.persistence=e,this.si=new qa((t=>N_(t)),x_),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new L_,this.targetCount=0,this.ai=ol.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),J.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ol(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.Pr(t),J.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),J.waitFor(l).next((()=>a))}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return J.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),J.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return J.resolve(s)}containsKey(e,t){return J.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,t){this.ui={},this.overlays={},this.ci=new yd(0),this.li=!1,this.li=!0,this.hi=new NO,this.referenceDelegate=e(this),this.Pi=new MO(this),this.indexManager=new _O,this.remoteDocumentCache=(function(a){return new DO(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new pO(t),this.Ii=new RO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new IO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new xO(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){le("MemoryPersistence","Starting transaction:",e);const a=new kO(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return J.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class kO extends lD{constructor(e){super(),this.currentSequenceNumber=e}}class U_{constructor(e){this.persistence=e,this.Ri=new L_,this.Vi=null}static mi(e){return new U_(e)}get fi(){if(this.Vi)return this.Vi;throw Te(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),J.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),J.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.fi,(s=>{const a=pe.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,Ae.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return J.or([()=>J.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Gf{constructor(e,t){this.persistence=e,this.pi=new qa((s=>hD(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=wO(this,t)}static mi(e,t){return new Gf(e,t)}Ei(){}di(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return J.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?J.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,Ae.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),J.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=vf(e.data.value)),t}br(e,t,s){return J.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return J.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=je(),a=je();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new j_(e,t.fromCache,s,a)}}/**
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
 */class PO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return SI()?8:uD(_n())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new PO;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(zo()<=Pe.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",qo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),J.resolve()):(zo()<=Pe.DEBUG&&le("QueryEngine","Query:",qo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(zo()<=Pe.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",qo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qi(t))):J.resolve())}ys(e,t){if(hS(t))return J.resolve(null);let s=qi(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Bf(t,null,"F"),s=qi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=je(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,Bf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return hS(t)||a.isEqual(Ae.min())?J.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?J.resolve(null):(zo()<=Pe.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),qo(t)),this.vs(e,c,t,sD(a,ic)).next((d=>d)))}))}Ds(e,t){let s=new Qt(lA(e));return t.forEach(((a,l)=>{wd(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return zo()<=Pe.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",qo(t)),this.ps.getDocumentsMatchingQuery(e,t,Cr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="LocalStore",LO=3e8;class UO{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Lt(Ue),this.xs=new qa((l=>N_(l)),x_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function jO(n,e,t,s){return new UO(n,e,t,s)}async function DA(n,e){const t=Ce(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=je();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function zO(n,e){const t=Ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,v){const T=g.batch,S=T.keys();let x=J.resolve();return S.forEach((j=>{x=x.next((()=>v.getEntry(p,j))).next((Q=>{const G=g.docVersions.get(j);$e(G!==null,48541),Q.version.compareTo(G)<0&&(T.applyToRemoteDocument(Q,g),Q.isValidDocument()&&(Q.setReadTime(g.commitVersion),v.addEntry(Q)))}))})),x.next((()=>d.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=je();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function OA(n){const e=Ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function qO(n,e){const t=Ce(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((v,T)=>{const S=a.get(T);if(!S)return;d.push(t.Pi.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,v.addedDocuments,T))));let x=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(cn.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):v.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(v.resumeToken,s)),a=a.insert(T,x),(function(Q,G,ge){return Q.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=LO?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0})(S,x,v)&&d.push(t.Pi.updateTargetData(l,x))}));let p=Os(),g=je();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),d.push(BO(l,c,e.documentUpdates).next((v=>{p=v.ks,g=v.qs}))),!s.isEqual(Ae.min())){const v=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(v)}return J.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function BO(n,e,t){let s=je(),a=je();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Os();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):le(z_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function FO(n,e){const t=Ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=C_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function HO(n,e){const t=Ce(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,J.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new _r(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function qg(n,e,t){const s=Ce(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!yl(c))throw c;le(z_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function bS(n,e,t){const s=Ce(n);let a=Ae.min(),l=je();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,v){const T=Ce(p),S=T.xs.get(v);return S!==void 0?J.resolve(T.Ms.get(S)):T.Pi.getTargetData(g,v)})(s,c,qi(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:Ae.min(),t?l:je()))).next((d=>(GO(s,xD(e),d),{documents:d,Qs:l})))))}function GO(n,e,t){let s=n.Os.get(e)||Ae.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class AS{constructor(){this.activeTargetIds=VD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QO{constructor(){this.Mo=new AS,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new AS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="ConnectivityMonitor";class RS{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){le(CS,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){le(CS,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hf=null;function Bg(){return hf===null?hf=(function(){return 268435456+Math.round(2147483648*Math.random())})():hf++,"0x"+hf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="RestConnection",KO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class XO{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===jf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=Bg(),d=this.zo(e,t.toUriEncodedString());le(lg,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=kr(g);return this.Jo(e,d,p,s,v).then((T=>(le(lg,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw tl(lg,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+gl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=KO[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="WebChannelConnection";class WO extends XO{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Bg();return new Promise(((d,p)=>{const g=new Pb;g.setWithCredentials(!0),g.listenOnce(Vb.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case yf.NO_ERROR:const T=g.getResponseJson();le(mn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case yf.TIMEOUT:le(mn,`RPC '${e}' ${c} timed out`),p(new ae($.DEADLINE_EXCEEDED,"Request time out"));break;case yf.HTTP_ERROR:const S=g.getStatus();if(le(mn,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let x=g.getResponseJson();Array.isArray(x)&&(x=x[0]);const j=x?.error;if(j&&j.status&&j.message){const Q=(function(ge){const ue=ge.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ue)>=0?ue:$.UNKNOWN})(j.status);p(new ae(Q,j.message))}else p(new ae($.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ae($.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{le(mn,`RPC '${e}' ${c} completed.`)}}));const v=JSON.stringify(a);le(mn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,s,15)}))}T_(e,t,s){const a=Bg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=jb(),d=Ub(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const v=l.join("");le(mn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const T=c.createWebChannel(v,p);this.I_(T);let S=!1,x=!1;const j=new $O({Yo:G=>{x?le(mn,`Not sending because RPC '${e}' stream ${a} is closed:`,G):(S||(le(mn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),S=!0),le(mn,`RPC '${e}' stream ${a} sending:`,G),T.send(G))},Zo:()=>T.close()}),Q=(G,ge,ue)=>{G.listen(ge,(he=>{try{ue(he)}catch(Ve){setTimeout((()=>{throw Ve}),0)}}))};return Q(T,ju.EventType.OPEN,(()=>{x||(le(mn,`RPC '${e}' stream ${a} transport opened.`),j.o_())})),Q(T,ju.EventType.CLOSE,(()=>{x||(x=!0,le(mn,`RPC '${e}' stream ${a} transport closed`),j.a_(),this.E_(T))})),Q(T,ju.EventType.ERROR,(G=>{x||(x=!0,tl(mn,`RPC '${e}' stream ${a} transport errored. Name:`,G.name,"Message:",G.message),j.a_(new ae($.UNAVAILABLE,"The operation could not be completed")))})),Q(T,ju.EventType.MESSAGE,(G=>{if(!x){const ge=G.data[0];$e(!!ge,16349);const ue=ge,he=ue?.error||ue[0]?.error;if(he){le(mn,`RPC '${e}' stream ${a} received error:`,he);const Ve=he.status;let ye=(function(A){const C=Mt[A];if(C!==void 0)return vA(C)})(Ve),Le=he.message;ye===void 0&&(ye=$.INTERNAL,Le="Unknown error status: "+Ve+" with message "+he.message),x=!0,j.a_(new ae(ye,Le)),T.close()}else le(mn,`RPC '${e}' stream ${a} received:`,ge),j.u_(ge)}})),Q(d,Lb.STAT_EVENT,(G=>{G.stat===Ng.PROXY?le(mn,`RPC '${e}' stream ${a} detected buffering proxy`):G.stat===Ng.NOPROXY&&le(mn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{j.__()}),0),j}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function ug(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(n){return new tO(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&le("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS="PersistentStream";class kA{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new MA(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Ds(t.toString()),Ds("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new ae($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return le(IS,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(le(IS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ZO extends kA{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=sO(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ae.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ae.min():c.readTime?Bi(c.readTime):Ae.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=zg(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=Pg(p)?{documents:oO(l,p)}:{query:lO(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=SA(l,c.resumeToken);const g=Lg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ae.min())>0){d.readTime=Hf(l,c.snapshotVersion.toTimestamp());const g=Lg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=cO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=zg(this.serializer),t.removeTarget=e,this.q_(t)}}class JO extends kA{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=aO(e.writeResults,e.commitTime),s=Bi(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=zg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>rO(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{}class tM extends eM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Ug(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ae($.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,Ug(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ae($.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class nM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ds(t),this.aa=!1):le("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="RemoteStore";class iM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{Ba(this)&&(le(Pa,"Restarting streams for network reachability change."),await(async function(p){const g=Ce(p);g.Ea.add(4),await Ac(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Id(g)})(this))}))})),this.Ra=new nM(s,a)}}async function Id(n){if(Ba(n))for(const e of n.da)await e(!0)}async function Ac(n){for(const e of n.da)await e(!1)}function PA(n,e){const t=Ce(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),H_(t)?F_(t):El(t).O_()&&B_(t,e))}function q_(n,e){const t=Ce(n),s=El(t);t.Ia.delete(e),s.O_()&&VA(t,e),t.Ia.size===0&&(s.O_()?s.L_():Ba(t)&&t.Ra.set("Unknown"))}function B_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}El(n).Y_(e)}function VA(n,e){n.Va.Ue(e),El(n).Z_(e)}function F_(n){n.Va=new WD({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),El(n).start(),n.Ra.ua()}function H_(n){return Ba(n)&&!El(n).x_()&&n.Ia.size>0}function Ba(n){return Ce(n).Ea.size===0}function LA(n){n.Va=void 0}async function sM(n){n.Ra.set("Online")}async function rM(n){n.Ia.forEach(((e,t)=>{B_(n,e)}))}async function aM(n,e){LA(n),H_(n)?(n.Ra.ha(e),F_(n)):n.Ra.set("Unknown")}async function oM(n,e,t){if(n.Ra.set("Online"),e instanceof TA&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){le(Pa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Qf(n,s)}else if(e instanceof Sf?n.Va.Ze(e):e instanceof EA?n.Va.st(e):n.Va.tt(e),!t.isEqual(Ae.min()))try{const s=await OA(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(cn.EMPTY_BYTE_STRING,v.snapshotVersion)),VA(l,p);const T=new _r(v.target,p,g,v.sequenceNumber);B_(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){le(Pa,"Failed to raise snapshot:",s),await Qf(n,s)}}async function Qf(n,e,t){if(!yl(e))throw e;n.Ea.add(1),await Ac(n),n.Ra.set("Offline"),t||(t=()=>OA(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{le(Pa,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Id(n)}))}function UA(n,e){return e().catch((t=>Qf(n,t,e)))}async function Nd(n){const e=Ce(n),t=xr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:C_;for(;lM(e);)try{const a=await FO(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,uM(e,a)}catch(a){await Qf(e,a)}jA(e)&&zA(e)}function lM(n){return Ba(n)&&n.Ta.length<10}function uM(n,e){n.Ta.push(e);const t=xr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function jA(n){return Ba(n)&&!xr(n).x_()&&n.Ta.length>0}function zA(n){xr(n).start()}async function cM(n){xr(n).ra()}async function hM(n){const e=xr(n);for(const t of n.Ta)e.ea(t.mutations)}async function fM(n,e,t){const s=n.Ta.shift(),a=k_.from(s,e,t);await UA(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Nd(n)}async function dM(n,e){e&&xr(n).X_&&await(async function(s,a){if((function(c){return KD(c)&&c!==$.ABORTED})(a.code)){const l=s.Ta.shift();xr(s).B_(),await UA(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Nd(s)}})(n,e),jA(n)&&zA(n)}async function NS(n,e){const t=Ce(n);t.asyncQueue.verifyOperationInProgress(),le(Pa,"RemoteStore received new credentials");const s=Ba(t);t.Ea.add(3),await Ac(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Id(t)}async function mM(n,e){const t=Ce(n);e?(t.Ea.delete(2),await Id(t)):e||(t.Ea.add(2),await Ac(t),t.Ra.set("Unknown"))}function El(n){return n.ma||(n.ma=(function(t,s,a){const l=Ce(t);return l.sa(),new ZO(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:sM.bind(null,n),t_:rM.bind(null,n),r_:aM.bind(null,n),H_:oM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),H_(n)?F_(n):n.Ra.set("Unknown")):(await n.ma.stop(),LA(n))}))),n.ma}function xr(n){return n.fa||(n.fa=(function(t,s,a){const l=Ce(t);return l.sa(),new JO(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:cM.bind(null,n),r_:dM.bind(null,n),ta:hM.bind(null,n),na:fM.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Nd(n)):(await n.fa.stop(),n.Ta.length>0&&(le(Pa,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new G_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Q_(n,e){if(Ds("AsyncQueue",`${e}: ${n}`),yl(n))return new ae($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{static emptySet(e){return new Xo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=zu(),this.sortedSet=new Lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class xS{constructor(){this.ga=new Lt(pe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Te(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ll{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new ll(e,t,Xo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class gM{constructor(){this.queries=DS(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Ce(t),l=a.queries;a.queries=DS(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new ae($.ABORTED,"Firestore shutting down"))}}function DS(){return new qa((n=>oA(n)),Sd)}async function Y_(n,e){const t=Ce(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new pM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=Q_(c,`Initialization of query '${qo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&X_(t)}async function K_(n,e){const t=Ce(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function _M(n,e){const t=Ce(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&X_(t)}function yM(n,e,t){const s=Ce(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function X_(n){n.Ca.forEach((e=>{e.next()}))}var Fg,OS;(OS=Fg||(Fg={})).Ma="default",OS.Cache="cache";class $_{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new ll(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ll.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.key=e}}class BA{constructor(e){this.key=e}}class vM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=je(),this.mutatedKeys=je(),this.eu=lA(e),this.tu=new Xo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new xS,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((v,T)=>{const S=a.get(v),x=wd(this.query,T)?T:null,j=!!S&&this.mutatedKeys.has(S.key),Q=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let G=!1;S&&x?S.data.isEqual(x.data)?j!==Q&&(s.track({type:3,doc:x}),G=!0):this.su(S,x)||(s.track({type:2,doc:x}),G=!0,(p&&this.eu(x,p)>0||g&&this.eu(x,g)<0)&&(d=!0)):!S&&x?(s.track({type:0,doc:x}),G=!0):S&&!x&&(s.track({type:1,doc:S}),G=!0,(p||g)&&(d=!0)),G&&(x?(c=c.add(x),l=Q?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),s.track({type:1,doc:v})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((v,T)=>(function(x,j){const Q=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Rt:G})}};return Q(x)-Q(j)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new ll(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new xS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=je(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new BA(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new qA(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=je();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ll.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const W_="SyncEngine";class EM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class TM{constructor(e){this.key=e,this.hu=!1}}class SM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new qa((d=>oA(d)),Sd),this.Iu=new Map,this.Eu=new Set,this.du=new Lt(pe.comparator),this.Au=new Map,this.Ru=new L_,this.Vu={},this.mu=new Map,this.fu=ol.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wM(n,e,t=!0){const s=KA(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await FA(s,e,t,!0),a}async function bM(n,e){const t=KA(n);await FA(t,e,!0,!1)}async function FA(n,e,t,s){const a=await HO(n.localStore,qi(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await AM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&PA(n.remoteStore,a),d}async function AM(n,e,t,s,a){n.pu=(T,S,x)=>(async function(Q,G,ge,ue){let he=G.view.ru(ge);he.Cs&&(he=await bS(Q.localStore,G.query,!1).then((({documents:P})=>G.view.ru(P,he))));const Ve=ue&&ue.targetChanges.get(G.targetId),ye=ue&&ue.targetMismatches.get(G.targetId)!=null,Le=G.view.applyChanges(he,Q.isPrimaryClient,Ve,ye);return kS(Q,G.targetId,Le.au),Le.snapshot})(n,T,S,x);const l=await bS(n.localStore,e,!0),c=new vM(e,l.Qs),d=c.ru(l.documents),p=bc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);kS(n,t,g.au);const v=new EM(e,t,c);return n.Tu.set(e,v),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function CM(n,e,t){const s=Ce(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!Sd(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await qg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&q_(s.remoteStore,a.targetId),Hg(s,a.targetId)})).catch(_l)):(Hg(s,a.targetId),await qg(s.localStore,a.targetId,!0))}async function RM(n,e){const t=Ce(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),q_(t.remoteStore,s.targetId))}async function IM(n,e,t){const s=PM(n);try{const a=await(function(c,d){const p=Ce(c),g=ft.now(),v=d.reduce(((x,j)=>x.add(j.key)),je());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let j=Os(),Q=je();return p.Ns.getEntries(x,v).next((G=>{j=G,j.forEach(((ge,ue)=>{ue.isValidDocument()||(Q=Q.add(ge))}))})).next((()=>p.localDocuments.getOverlayedDocuments(x,j))).next((G=>{T=G;const ge=[];for(const ue of d){const he=FD(ue,T.get(ue.key).overlayedDocument);he!=null&&ge.push(new Vr(ue.key,he,Jb(he.value.mapValue),On.exists(!0)))}return p.mutationQueue.addMutationBatch(x,g,ge,d)})).next((G=>{S=G;const ge=G.applyToLocalDocumentSet(T,Q);return p.documentOverlayCache.saveOverlays(x,G.batchId,ge)}))})).then((()=>({batchId:S.batchId,changes:cA(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Lt(Ue)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await Cc(s,a.changes),await Nd(s.remoteStore)}catch(a){const l=Q_(a,"Failed to persist write");t.reject(l)}}async function HA(n,e){const t=Ce(n);try{const s=await qO(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&($e(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?$e(c.hu,14607):a.removedDocuments.size>0&&($e(c.hu,42227),c.hu=!1))})),await Cc(t,s,e)}catch(s){await _l(s)}}function MS(n,e,t){const s=Ce(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=Ce(c);p.onlineState=d;let g=!1;p.queries.forEach(((v,T)=>{for(const S of T.Sa)S.va(d)&&(g=!0)})),g&&X_(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function NM(n,e,t){const s=Ce(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new Lt(pe.comparator);c=c.insert(l,gn.newNoDocument(l,Ae.min()));const d=je().add(l),p=new Cd(Ae.min(),new Map,new Lt(Ue),c,d);await HA(s,p),s.du=s.du.remove(l),s.Au.delete(e),Z_(s)}else await qg(s.localStore,e,!1).then((()=>Hg(s,e,t))).catch(_l)}async function xM(n,e){const t=Ce(n),s=e.batch.batchId;try{const a=await zO(t.localStore,e);QA(t,s,null),GA(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Cc(t,a)}catch(a){await _l(a)}}async function DM(n,e,t){const s=Ce(n);try{const a=await(function(c,d){const p=Ce(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next((T=>($e(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(s.localStore,e);QA(s,e,t),GA(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Cc(s,a)}catch(a){await _l(a)}}function GA(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function QA(n,e,t){const s=Ce(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function Hg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||YA(n,s)}))}function YA(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(q_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Z_(n))}function kS(n,e,t){for(const s of t)s instanceof qA?(n.Ru.addReference(s.key,e),OM(n,s)):s instanceof BA?(le(W_,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||YA(n,s.key)):Te(19791,{wu:s})}function OM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(le(W_,"New document in limbo: "+t),n.Eu.add(s),Z_(n))}function Z_(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new pe(ut.fromString(e)),s=n.fu.next();n.Au.set(s,new TM(t)),n.du=n.du.insert(t,s),PA(n.remoteStore,new _r(qi(Td(t.path)),s,"TargetPurposeLimboResolution",yd.ce))}}async function Cc(n,e,t){const s=Ce(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const v=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(g){a.push(g);const v=j_.As(p.targetId,g);l.push(v)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const v=Ce(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>J.forEach(g,(S=>J.forEach(S.Es,(x=>v.persistence.referenceDelegate.addReference(T,S.targetId,x))).next((()=>J.forEach(S.ds,(x=>v.persistence.referenceDelegate.removeReference(T,S.targetId,x)))))))))}catch(T){if(!yl(T))throw T;le(z_,"Failed to update sequence numbers: "+T)}for(const T of g){const S=T.targetId;if(!T.fromCache){const x=v.Ms.get(S),j=x.snapshotVersion,Q=x.withLastLimboFreeSnapshotVersion(j);v.Ms=v.Ms.insert(S,Q)}}})(s.localStore,l))}async function MM(n,e){const t=Ce(n);if(!t.currentUser.isEqual(e)){le(W_,"User change. New user:",e.toKey());const s=await DA(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new ae($.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Cc(t,s.Ls)}}function kM(n,e){const t=Ce(n),s=t.Au.get(e);if(s&&s.hu)return je().add(s.key);{let a=je();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function KA(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=HA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NM.bind(null,e),e.Pu.H_=_M.bind(null,e.eventManager),e.Pu.yu=yM.bind(null,e.eventManager),e}function PM(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DM.bind(null,e),e}class Yf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return jO(this.persistence,new VO,e.initialUser,this.serializer)}Cu(e){return new xA(U_.mi,this.serializer)}Du(e){return new QO}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yf.provider={build:()=>new Yf};class VM extends Yf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){$e(this.persistence.referenceDelegate instanceof Gf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new TO(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Rn.withCacheSize(this.cacheSizeBytes):Rn.DEFAULT;return new xA((s=>Gf.mi(s,t)),this.serializer)}}class Gg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>MS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=MM.bind(null,this.syncEngine),await mM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new gM})()}createDatastore(e){const t=Rd(e.databaseInfo.databaseId),s=(function(l){return new WO(l)})(e.databaseInfo);return(function(l,c,d,p){return new tM(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new iM(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>MS(this.syncEngine,t,0)),(function(){return RS.v()?new RS:new YO})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,v){const T=new SM(a,l,c,d,p,g);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Ce(t);le(Pa,"RemoteStore shutting down."),s.Ea.add(5),await Ac(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Gg.provider={build:()=>new Gg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class J_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ds("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="FirestoreClient";class LM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=pn.UNAUTHENTICATED,this.clientId=A_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{le(Dr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(le(Dr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Q_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function cg(n,e){n.asyncQueue.verifyOperationInProgress(),le(Dr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await DA(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function PS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await UM(n);le(Dr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>NS(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>NS(e.remoteStore,a))),n._onlineComponents=e}async function UM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le(Dr,"Using user provided OfflineComponentProvider");try{await cg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===$.FAILED_PRECONDITION||a.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;tl("Error using user provided cache. Falling back to memory cache: "+t),await cg(n,new Yf)}}else le(Dr,"Using default OfflineComponentProvider"),await cg(n,new VM(void 0));return n._offlineComponents}async function XA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le(Dr,"Using user provided OnlineComponentProvider"),await PS(n,n._uninitializedComponentsProvider._online)):(le(Dr,"Using default OnlineComponentProvider"),await PS(n,new Gg))),n._onlineComponents}function jM(n){return XA(n).then((e=>e.syncEngine))}async function Kf(n){const e=await XA(n),t=e.eventManager;return t.onListen=wM.bind(null,e.syncEngine),t.onUnlisten=CM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=RM.bind(null,e.syncEngine),t}function zM(n,e,t={}){const s=new Rs;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const v=new J_({next:S=>{v.Nu(),c.enqueueAndForget((()=>K_(l,T)));const x=S.docs.has(d);!x&&S.fromCache?g.reject(new ae($.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&S.fromCache&&p&&p.source==="server"?g.reject(new ae($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new $_(Td(d.path),v,{includeMetadataChanges:!0,qa:!0});return Y_(l,T)})(await Kf(n),n.asyncQueue,e,t,s))),s.promise}function qM(n,e,t={}){const s=new Rs;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const v=new J_({next:S=>{v.Nu(),c.enqueueAndForget((()=>K_(l,T))),S.fromCache&&p.source==="server"?g.reject(new ae($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new $_(d,v,{includeMetadataChanges:!0,qa:!0});return Y_(l,T)})(await Kf(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function $A(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="firestore.googleapis.com",LS=!0;class US{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ae($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=WA,this.ssl=LS}else this.host=e.host,this.ssl=e.ssl??LS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=NA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vO)throw new ae($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$A(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new US({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new US(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Y2;switch(s.type){case"firstParty":return new W2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=VS.get(t);s&&(le("ComponentProvider","Removing Datastore"),VS.delete(t),s.terminate())})(this),Promise.resolve()}}function BM(n,e,t,s={}){n=Dn(n,xd);const a=kr(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(c_(`https://${d}`),h_("Firestore",!0)),l.host!==WA&&l.host!==d&&tl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!Gi(p,c)&&(n._setSettings(p),s.mockUserToken)){let g,v;if(typeof s.mockUserToken=="string")g=s.mockUserToken,v=pn.MOCK_USER;else{g=Xw(s.mockUserToken,n._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new ae($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new pn(T)}n._authCredentials=new K2(new qb(g,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class Tt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}toJSON(){return{type:Tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Sc(t,Tt._jsonSchema))return new Tt(e,s||null,new pe(ut.fromString(t.referencePath)))}}Tt._jsonSchemaVersion="firestore/documentReference/1.0",Tt._jsonSchema={type:Vt("string",Tt._jsonSchemaVersion),referencePath:Vt("string")};class wr extends Ls{constructor(e,t,s){super(e,t,Td(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new pe(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function wn(n,e,...t){if(n=ct(n),Bb("collection","path",e),n instanceof xd){const s=ut.fromString(e,...t);return WT(s),new wr(n,null,s)}{if(!(n instanceof Tt||n instanceof wr))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ut.fromString(e,...t));return WT(s),new wr(n.firestore,null,s)}}function Gn(n,e,...t){if(n=ct(n),arguments.length===1&&(e=A_.newId()),Bb("doc","path",e),n instanceof xd){const s=ut.fromString(e,...t);return $T(s),new Tt(n,null,new pe(s))}{if(!(n instanceof Tt||n instanceof wr))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ut.fromString(e,...t));return $T(s),new Tt(n.firestore,n instanceof wr?n.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="AsyncQueue";class zS{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new MA(this,"async_queue_retry"),this._c=()=>{const s=ug();s&&le(jS,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=ug();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ug();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Rs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!yl(e))throw e;le(jS,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Ds("INTERNAL UNHANDLED ERROR: ",qS(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=G_.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&Te(47125,{Pc:qS(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function qS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function BS(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class Ms extends xd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new zS,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zS(e),this._firestoreClient=void 0,await e}}}function FM(n,e){const t=typeof n=="object"?n:m_(),s=typeof n=="string"?n:jf,a=dd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Qw("firestore");l&&BM(a,...l)}return a}function Rc(n){if(n._terminated)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||HM(n),n._firestoreClient}function HM(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new mD(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,$A(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new LM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ai(cn.fromBase64String(e))}catch(t){throw new ae($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ai(cn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ai._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sc(e,ai._jsonSchema))return ai.fromBase64String(e.bytes)}}ai._jsonSchemaVersion="firestore/bytes/1.0",ai._jsonSchema={type:Vt("string",ai._jsonSchemaVersion),bytes:Vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new un(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fi._jsonSchemaVersion}}static fromJSON(e){if(Sc(e,Fi._jsonSchema))return new Fi(e.latitude,e.longitude)}}Fi._jsonSchemaVersion="firestore/geoPoint/1.0",Fi._jsonSchema={type:Vt("string",Fi._jsonSchemaVersion),latitude:Vt("number"),longitude:Vt("number")};/**
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
 */class Hi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Hi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sc(e,Hi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Hi(e.vectorValues);throw new ae($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Hi._jsonSchemaVersion="firestore/vectorValue/1.0",Hi._jsonSchema={type:Vt("string",Hi._jsonSchemaVersion),vectorValues:Vt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM=/^__.*__$/;class QM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,t,this.fieldTransforms):new wc(e,this.data,t,this.fieldTransforms)}}class ZA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Vr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function JA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ac:n})}}class Dd{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Dd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Xf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(JA(this.Ac)&&GM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class YM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Rd(e)}Cc(e,t,s,a=!1){return new Dd({Ac:e,methodName:t,Dc:s,path:un.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nc(n){const e=n._freezeSettings(),t=Rd(n._databaseId);return new YM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ey(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);sy("Data must be an object, but it was:",c,s);const d=i1(s,c);let p,g;if(l.merge)p=new Hn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const S=Qg(e,T,t);if(!c.contains(S))throw new ae($.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);r1(v,S)||v.push(S)}p=new Hn(v),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new QM(new In(d),p,g)}class Od extends Tl{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Od}}function e1(n,e,t){return new Dd({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ty extends Tl{_toFieldTransform(e){return new O_(e.path,new lc)}isEqual(e){return e instanceof ty}}class ny extends Tl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=e1(this,e,!0),s=this.vc.map((l=>Fa(l,t))),a=new rl(s);return new O_(e.path,a)}isEqual(e){return e instanceof ny&&Gi(this.vc,e.vc)}}class iy extends Tl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=e1(this,e,!0),s=this.vc.map((l=>Fa(l,t))),a=new al(s);return new O_(e.path,a)}isEqual(e){return e instanceof iy&&Gi(this.vc,e.vc)}}function t1(n,e,t,s){const a=n.Cc(1,e,t);sy("Data must be an object, but it was:",a,s);const l=[],c=In.empty();Pr(s,((p,g)=>{const v=ry(e,p,t);g=ct(g);const T=a.yc(v);if(g instanceof Od)l.push(v);else{const S=Fa(g,T);S!=null&&(l.push(v),c.set(v,S))}}));const d=new Hn(l);return new ZA(c,d,a.fieldTransforms)}function n1(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[Qg(e,s,t)],p=[a];if(l.length%2!=0)throw new ae($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)d.push(Qg(e,l[S])),p.push(l[S+1]);const g=[],v=In.empty();for(let S=d.length-1;S>=0;--S)if(!r1(g,d[S])){const x=d[S];let j=p[S];j=ct(j);const Q=c.yc(x);if(j instanceof Od)g.push(x);else{const G=Fa(j,Q);G!=null&&(g.push(x),v.set(x,G))}}const T=new Hn(g);return new ZA(v,T,c.fieldTransforms)}function KM(n,e,t,s=!1){return Fa(t,n.Cc(s?4:3,e))}function Fa(n,e){if(s1(n=ct(n)))return sy("Unsupported field value:",e,n),i1(n,e);if(n instanceof Tl)return(function(s,a){if(!JA(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=Fa(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return LD(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ft.fromDate(s);return{timestampValue:Hf(a.serializer,l)}}if(s instanceof ft){const l=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Hf(a.serializer,l)}}if(s instanceof Fi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ai)return{bytesValue:SA(a.serializer,s._byteString)};if(s instanceof Tt){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:V_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Hi)return(function(c,d){return{mapValue:{fields:{[Wb]:{stringValue:Zb},[zf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return D_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${_d(s)}`)})(n,e)}function i1(n,e){const t={};return Gb(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(n,((s,a)=>{const l=Fa(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function s1(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ft||n instanceof Fi||n instanceof ai||n instanceof Tt||n instanceof Tl||n instanceof Hi)}function sy(n,e,t){if(!s1(t)||!Fb(t)){const s=_d(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Qg(n,e,t){if((e=ct(e))instanceof Ic)return e._internalPath;if(typeof e=="string")return ry(n,e);throw Xf("Field path arguments must be of type string or ",n,!1,void 0,t)}const XM=new RegExp("[~\\*/\\[\\]]");function ry(n,e,t){if(e.search(XM)>=0)throw Xf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ic(...e.split("."))._internalPath}catch{throw Xf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xf(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new ae($.INVALID_ARGUMENT,d+n+p)}function r1(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $M(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Md("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $M extends a1{data(){return super.data()}}function Md(n,e){return typeof e=="string"?ry(n,e):e instanceof Ic?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ay{}class oy extends ay{}function Qn(n,e,...t){let s=[];e instanceof ay&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof ly)).length,d=l.filter((p=>p instanceof kd)).length;if(c>1||c>0&&d>0)throw new ae($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class kd extends oy{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new kd(e,t,s)}_apply(e){const t=this._parse(e);return l1(e._query,t),new Ls(e.firestore,e.converter,Vg(e._query,t))}_parse(e){const t=Nc(e.firestore);return(function(l,c,d,p,g,v,T){let S;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ae($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){HS(T,v);const j=[];for(const Q of T)j.push(FS(p,l,Q));S={arrayValue:{values:j}}}else S=FS(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||HS(T,v),S=KM(d,c,T,v==="in"||v==="not-in");return Pt.create(g,v,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Gt(n,e,t){const s=e,a=Md("where",n);return kd._create(a,s,t)}class ly extends ay{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ly(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Ei.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)l1(c,p),c=Vg(c,p)})(e._query,t),new Ls(e.firestore,e.converter,Vg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uy extends oy{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new uy(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new ae($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ae($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oc(l,c)})(e._query,this._field,this._direction);return new Ls(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new vl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function WM(n,e="asc"){const t=e,s=Md("orderBy",n);return uy._create(s,t)}class cy extends oy{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new cy(e,t,s)}_apply(e){return new Ls(e.firestore,e.converter,Bf(e._query,this._limit,this._limitType))}}function ZM(n){return cy._create("limit",n,"F")}function FS(n,e,t){if(typeof(t=ct(t))=="string"){if(t==="")throw new ae($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aA(e)&&t.indexOf("/")!==-1)throw new ae($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ut.fromString(t));if(!pe.isDocumentKey(s))throw new ae($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return rS(n,new pe(s))}if(t instanceof Tt)return rS(n,t._key);throw new ae($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_d(t)}.`)}function HS(n,e){if(!Array.isArray(n)||n.length===0)throw new ae($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function l1(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ae($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class JM{convertValue(e,t="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return At(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Pr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[zf].arrayValue?.values?.map((s=>At(s.doubleValue)));return new Hi(t)}convertGeoPoint(e){return new Fi(At(e.latitude),At(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ed(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(sc(e));default:return null}}convertTimestamp(e){const t=Rr(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ut.fromString(e);$e(IA(s),9688,{name:e});const a=new rc(s.get(1),s.get(3)),l=new pe(s.popFirst(5));return a.isEqual(t)||Ds(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Bu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ra extends a1{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Md("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ra._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ra._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ra._jsonSchema={type:Vt("string",Ra._jsonSchemaVersion),bundleSource:Vt("string","DocumentSnapshot"),bundleName:Vt("string"),bundle:Vt("string")};class wf extends Ra{data(e={}){return super.data(e)}}class Ia{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Bu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new wf(this._firestore,this._userDataWriter,s.key,s,new Bu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new wf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Bu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new wf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Bu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:ek(d.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ia._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=A_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ek(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(n){n=Dn(n,Tt);const e=Dn(n.firestore,Ms);return zM(Rc(e),n._key).then((t=>h1(e,n,t)))}Ia._jsonSchemaVersion="firestore/querySnapshot/1.0",Ia._jsonSchema={type:Vt("string",Ia._jsonSchemaVersion),bundleSource:Vt("string","QuerySnapshot"),bundleName:Vt("string"),bundle:Vt("string")};class fy extends JM{constructor(e){super(),this.firestore=e}convertBytes(e){return new ai(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function $f(n){n=Dn(n,Ls);const e=Dn(n.firestore,Ms),t=Rc(e),s=new fy(e);return o1(n._query),qM(t,n._query).then((a=>new Ia(e,s,n,a)))}function tk(n,e,t){n=Dn(n,Tt);const s=Dn(n.firestore,Ms),a=hy(n.converter,e,t);return Pd(s,[ey(Nc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,On.none())])}function oi(n,e,t,...s){n=Dn(n,Tt);const a=Dn(n.firestore,Ms),l=Nc(a);let c;return c=typeof(e=ct(e))=="string"||e instanceof Ic?n1(l,"updateDoc",n._key,e,t,s):t1(l,"updateDoc",n._key,e),Pd(a,[c.toMutation(n._key,On.exists(!0))])}function c1(n,e){const t=Dn(n.firestore,Ms),s=Gn(n),a=hy(n.converter,e);return Pd(t,[ey(Nc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,On.exists(!1))]).then((()=>s))}function Ti(n,...e){n=ct(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||BS(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(BS(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(n instanceof Tt)c=Dn(n.firestore,Ms),d=Td(n._key.path),l={next:p=>{e[s]&&e[s](h1(c,n,p))},error:e[s+1],complete:e[s+2]};else{const p=Dn(n,Ls);c=Dn(p.firestore,Ms),d=p._query;const g=new fy(c);l={next:v=>{e[s]&&e[s](new Ia(c,g,p,v))},error:e[s+1],complete:e[s+2]},o1(n._query)}return(function(g,v,T,S){const x=new J_(S),j=new $_(v,x,T);return g.asyncQueue.enqueueAndForget((async()=>Y_(await Kf(g),j))),()=>{x.Nu(),g.asyncQueue.enqueueAndForget((async()=>K_(await Kf(g),j)))}})(Rc(c),d,a,l)}function Pd(n,e){return(function(s,a){const l=new Rs;return s.asyncQueue.enqueueAndForget((async()=>IM(await jM(s),a,l))),l.promise})(Rc(n),e)}function h1(n,e,t){const s=t.docs.get(e._key),a=new fy(n);return new Ra(n,a,e._key,s,new Bu(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Nc(e)}set(e,t,s){this._verifyNotCommitted();const a=hg(e,this._firestore),l=hy(a.converter,t,s),c=ey(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,On.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=hg(e,this._firestore);let c;return c=typeof(t=ct(t))=="string"||t instanceof Ic?n1(this._dataReader,"WriteBatch.update",l._key,t,s,a):t1(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,On.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=hg(e,this._firestore);return this._mutations=this._mutations.concat(new M_(t._key,On.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ae($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hg(n,e){if((n=ct(n)).firestore!==e)throw new ae($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function uc(){return new ty("serverTimestamp")}function bf(...n){return new ny("arrayUnion",n)}function f1(...n){return new iy("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(n){return Rc(n=Dn(n,Ms)),new nk(n,(e=>Pd(n,e)))}(function(e,t=!0){(function(a){gl=a})(za),Da(new Ar("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new Ms(new X2(s.getProvider("auth-internal")),new Z2(c,s.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ae($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rc(g.options.projectId,v)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),ji(QT,YT,e),ji(QT,YT,"esm2020")})();var GS={};const QS="@firebase/database",YS="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d1="";function ik(n){d1=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ec(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ki(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sk(e)}}catch{}return new rk},Aa=m1("localStorage"),ak=m1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new fd("@firebase/database"),ok=(function(){let n=1;return function(){return n++}})(),p1=function(n){const e=kI(n),t=new xI;t.update(e);const s=t.digest();return u_.encodeByteArray(s)},xc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xc.apply(null,s):typeof s=="object"?e+=tn(s):e+=s,e+=" "}return e};let Xu=null,KS=!0;const lk=function(n,e){ne(!0,"Can't turn on custom loggers persistently."),$o.logLevel=Pe.VERBOSE,Xu=$o.log.bind($o)},ln=function(...n){if(KS===!0&&(KS=!1,Xu===null&&ak.get("logging_enabled")===!0&&lk()),Xu){const e=xc.apply(null,n);Xu(e)}},Dc=function(n){return function(...e){ln(n,...e)}},Yg=function(...n){const e="FIREBASE INTERNAL ERROR: "+xc(...n);$o.error(e)},ks=function(...n){const e=`FIREBASE FATAL ERROR: ${xc(...n)}`;throw $o.error(e),new Error(e)},Mn=function(...n){const e="FIREBASE WARNING: "+xc(...n);$o.warn(e)},uk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Mn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ck=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ul="[MIN_NAME]",Va="[MAX_NAME]",Ha=function(n,e){if(n===e)return 0;if(n===ul||e===Va)return-1;if(e===ul||n===Va)return 1;{const t=XS(n),s=XS(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},hk=function(n,e){return n===e?0:n<e?-1:1},Pu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+tn(e))},dy=function(n){if(typeof n!="object"||n===null)return tn(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=tn(e[s]),t+=":",t+=dy(n[e[s]]);return t+="}",t},g1=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function yn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const _1=function(n){ne(!Vd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const v=g.join("");let T="";for(p=0;p<64;p+=8){let S=parseInt(v.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),T=T+S}return T.toLowerCase()},fk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function mk(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const pk=new RegExp("^-?(0*)\\d{1,10}$"),gk=-2147483648,_k=2147483647,XS=function(n){if(pk.test(n)){const e=Number(n);if(e>=gk&&e<=_k)return e}return null},Sl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Mn("Exception was thrown by user callback.",t),e},Math.floor(0))}},yk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$u=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class vk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Fn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Mn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ln("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Mn(e)}}class Af{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Af.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="5",y1="v",v1="s",E1="r",T1="f",S1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,w1="ls",b1="p",Kg="ac",A1="websocket",C1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Aa.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Aa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Tk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function I1(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let s;if(e===A1)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===C1)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Tk(n)&&(t.ns=n.namespace);const a=[];return yn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(){this.counters_={}}incrementCounter(e,t=1){Ki(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return uI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg={},mg={};function py(n){const e=n.toString();return dg[e]||(dg[e]=new Sk),dg[e]}function wk(n,e){const t=n.toString();return mg[t]||(mg[t]=e()),mg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Sl(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="start",Ak="close",Ck="pLPCommand",Rk="pRTLPCB",N1="id",x1="pw",D1="ser",Ik="cb",Nk="seg",xk="ts",Dk="d",Ok="dframe",O1=1870,M1=30,Mk=O1-M1,kk=25e3,Pk=3e4;class Ho{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Dc(e),this.stats_=py(t),this.urlFn=p=>(this.appCheckToken&&(p[Kg]=this.appCheckToken),I1(t,C1,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new bk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Pk)),ck(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gy((...l)=>{const[c,d,p,g,v]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===$S)this.id=d,this.password=p;else if(c===Ak)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[$S]="t",s[D1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ik]=this.scriptTagHolder.uniqueCallbackIdentifier),s[y1]=my,this.transportSessionId&&(s[v1]=this.transportSessionId),this.lastSessionId&&(s[w1]=this.lastSessionId),this.applicationId&&(s[b1]=this.applicationId),this.appCheckToken&&(s[Kg]=this.appCheckToken),typeof location<"u"&&location.hostname&&S1.test(location.hostname)&&(s[E1]=T1);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ho.forceAllow_=!0}static forceDisallow(){Ho.forceDisallow_=!0}static isAvailable(){return Ho.forceAllow_?!0:!Ho.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fk()&&!dk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=tn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Fw(t),a=g1(s,Mk);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ok]="t",s[N1]=e,s[x1]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=tn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gy{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ok(),window[Ck+this.uniqueCallbackIdentifier]=e,window[Rk+this.uniqueCallbackIdentifier]=t,this.myIFrame=gy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){ln("frame writing exception"),d.stack&&ln(d.stack),ln(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ln("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[N1]=this.myID,e[x1]=this.myPW,e[D1]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+M1+s.length<=O1;){const c=this.pendingSegs.shift();s=s+"&"+Nk+a+"="+c.seg+"&"+xk+a+"="+c.ts+"&"+Dk+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(kk)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ln("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=16384,Lk=45e3;let Wf=null;typeof MozWebSocket<"u"?Wf=MozWebSocket:typeof WebSocket<"u"&&(Wf=WebSocket);class pi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Dc(this.connId),this.stats_=py(t),this.connURL=pi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[y1]=my,typeof location<"u"&&location.hostname&&S1.test(location.hostname)&&(c[E1]=T1),t&&(c[v1]=t),s&&(c[w1]=s),a&&(c[Kg]=a),l&&(c[b1]=l),I1(e,A1,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Aa.set("previous_websocket_failure",!0);try{let s;TI(),this.mySock=new Wf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){pi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Wf!==null&&!pi.forceDisallow_}static previouslyFailed(){return Aa.isInMemoryStorage||Aa.get("previous_websocket_failure")===!0}markConnectionHealthy(){Aa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=ec(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=tn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=g1(t,Vk);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Lk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pi.responsesRequiredToBeHealthy=2;pi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{static get ALL_TRANSPORTS(){return[Ho,pi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=pi&&pi.isAvailable();let s=t&&!pi.previouslyFailed();if(e.webSocketOnly&&(t||Mn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[pi];else{const a=this.transports_=[];for(const l of cc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);cc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=6e4,jk=5e3,zk=10*1024,qk=100*1024,pg="t",WS="d",Bk="s",ZS="r",Fk="e",JS="o",ew="a",tw="n",nw="p",Hk="h";class Gk{constructor(e,t,s,a,l,c,d,p,g,v){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Dc("c:"+this.id+":"),this.transportManager_=new cc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=$u(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pg in e){const t=e[pg];t===ew?this.upgradeIfSecondaryHealthy_():t===ZS?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===JS&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Pu("t",e),s=Pu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ew,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Pu("t",e),s=Pu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Pu(pg,e);if(WS in e){const s=e[WS];if(t===Hk){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===tw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Bk?this.onConnectionShutdown_(s):t===ZS?this.onReset_(s):t===Fk?Yg("Server Error: "+s):t===JS?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),my!==s&&Mn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),$u(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Uk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$u(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Aa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends P1{static getInstance(){return new Zf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!f_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=32,sw=768;class tt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ye(){return new tt("")}function Ne(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Or(n){return n.pieces_.length-n.pieceNum_}function ot(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new tt(n.pieces_,e)}function _y(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Qk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function hc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function V1(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new tt(e,0)}function Ct(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof tt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new tt(t,0)}function De(n){return n.pieceNum_>=n.pieces_.length}function Nn(n,e){const t=Ne(n),s=Ne(e);if(t===null)return e;if(t===s)return Nn(ot(n),ot(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Yk(n,e){const t=hc(n,0),s=hc(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Ha(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function yy(n,e){if(Or(n)!==Or(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function li(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Or(n)>Or(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Kk{constructor(e,t){this.errorPrefix_=t,this.parts_=hc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=hd(this.parts_[s]);L1(this)}}function Xk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=hd(e),L1(n)}function $k(n){const e=n.parts_.pop();n.byteLength_-=hd(e),n.parts_.length>0&&(n.byteLength_-=1)}function L1(n){if(n.byteLength_>sw)throw new Error(n.errorPrefix_+"has a key path longer than "+sw+" bytes ("+n.byteLength_+").");if(n.parts_.length>iw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+iw+") or object contains a cycle "+Sa(n))}function Sa(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy extends P1{static getInstance(){return new vy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=1e3,Wk=300*1e3,rw=30*1e3,Zk=1.3,Jk=3e4,e4="server_kill",aw=3;class Is extends k1{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Is.nextPersistentConnectionId_++,this.log_=Dc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vu,this.maxReconnectDelay_=Wk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(tn(l)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Ss,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;Is.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ki(e,"w")){const s=Jo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Mn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=II(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tn(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Yg("Unrecognized action received from server: "+tn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Jk&&(this.reconnectDelay_=Vu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Is.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){ne(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,S]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?ln("getToken() completed but was canceled"):(ln("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=S&&S.token,d=new Gk(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,x=>{Mn(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(e4)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Mn(T),p())}}}interrupt(e){ln("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ln("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nf(this.interruptReasons_)&&(this.reconnectDelay_=Vu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>dy(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new tt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){ln("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=aw&&(this.reconnectDelay_=rw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ln("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=aw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+d1.replace(/\./g,"-")]=1,f_()?e["framework.cordova"]=1:$w()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zf.getInstance().currentlyOnline();return Nf(this.interruptReasons_)&&e}}Is.nextPersistentConnectionId_=0;Is.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Oe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Oe(ul,e),a=new Oe(ul,t);return this.compare(s,a)!==0}minPost(){return Oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff;class U1 extends Ld{static get __EMPTY_NODE(){return ff}static set __EMPTY_NODE(e){ff=e}compare(e,t){return Ha(e.name,t.name)}isDefinedOn(e){throw dl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Oe.MIN}maxPost(){return new Oe(Va,ff)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Oe(e,ff)}toString(){return".key"}}const Wo=new U1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class en{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??en.RED,this.left=a??xn.EMPTY_NODE,this.right=l??xn.EMPTY_NODE}copy(e,t,s,a,l){return new en(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return xn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return xn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,en.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,en.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}en.RED=!0;en.BLACK=!1;class t4{copy(e,t,s,a,l){return this}insert(e,t,s){return new en(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xn{constructor(e,t=xn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new xn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,en.BLACK,null,null))}remove(e){return new xn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,en.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new df(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new df(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new df(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new df(this.root_,null,this.comparator_,!0,e)}}xn.EMPTY_NODE=new t4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n4(n,e){return Ha(n.name,e.name)}function Ey(n,e){return Ha(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xg;function i4(n){Xg=n}const j1=function(n){return typeof n=="number"?"number:"+_1(n):"string:"+n},z1=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ki(e,".sv"),"Priority must be a string or number.")}else ne(n===Xg||n.isEmpty(),"priority of unexpected type.");ne(n===Xg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ow;class Zt{static set __childrenNodeConstructor(e){ow=e}static get __childrenNodeConstructor(){return ow}constructor(e,t=Zt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),z1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Zt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Zt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return De(e)?this:Ne(e)===".priority"?this.priorityNode_:Zt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Zt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ne(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ne(s!==".priority"||Or(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Zt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ot(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+j1(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=_1(this.value_):e+=this.value_,this.lazyHash_=p1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Zt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Zt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Zt.VALUE_TYPE_ORDER.indexOf(t),l=Zt.VALUE_TYPE_ORDER.indexOf(s);return ne(a>=0,"Unknown leaf type: "+t),ne(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Zt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q1,B1;function s4(n){q1=n}function r4(n){B1=n}class a4 extends Ld{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Ha(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Oe.MIN}maxPost(){return new Oe(Va,new Zt("[PRIORITY-POST]",B1))}makePost(e,t){const s=q1(e);return new Oe(t,new Zt("[PRIORITY-POST]",s))}toString(){return".priority"}}const _t=new a4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4=Math.log(2);class l4{constructor(e){const t=l=>parseInt(Math.log(l)/o4,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Jf=function(n,e,t,s){n.sort(e);const a=function(p,g){const v=g-p;let T,S;if(v===0)return null;if(v===1)return T=n[p],S=t?t(T):T,new en(S,T.node,en.BLACK,null,null);{const x=parseInt(v/2,10)+p,j=a(p,x),Q=a(x+1,g);return T=n[x],S=t?t(T):T,new en(S,T.node,en.BLACK,j,Q)}},l=function(p){let g=null,v=null,T=n.length;const S=function(j,Q){const G=T-j,ge=T;T-=j;const ue=a(G+1,ge),he=n[G],Ve=t?t(he):he;x(new en(Ve,he.node,Q,null,ue))},x=function(j){g?(g.left=j,g=j):(v=j,g=j)};for(let j=0;j<p.count;++j){const Q=p.nextBitIsOne(),G=Math.pow(2,p.count-(j+1));Q?S(G,en.BLACK):(S(G,en.BLACK),S(G,en.RED))}return v},c=new l4(n.length),d=l(c);return new xn(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gg;const jo={};class Cs{static get Default(){return ne(jo&&_t,"ChildrenNode.ts has not been loaded"),gg=gg||new Cs({".priority":jo},{".priority":_t}),gg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Jo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof xn?t:null}hasIndex(e){return Ki(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==Wo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Oe.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=Jf(s,e.getCompare()):d=jo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const v={...this.indexes_};return v[p]=d,new Cs(v,g)}addToIndexes(e,t){const s=xf(this.indexes_,(a,l)=>{const c=Jo(this.indexSet_,l);if(ne(c,"Missing index implementation for "+l),a===jo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Oe.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),Jf(d,c.getCompare())}else return jo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Oe(e.name,d))),p.insert(e,e.node)}});return new Cs(s,this.indexSet_)}removeFromIndexes(e,t){const s=xf(this.indexes_,a=>{if(a===jo)return a;{const l=t.get(e.name);return l?a.remove(new Oe(e.name,l)):a}});return new Cs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu;class we{static get EMPTY_NODE(){return Lu||(Lu=new we(new xn(Ey),null,Cs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&z1(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Lu}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Lu:t}}getChild(e){const t=Ne(e);return t===null?this:this.getImmediateChild(t).getChild(ot(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Oe(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Lu:this.priorityNode_;return new we(a,c,l)}}updateChild(e,t){const s=Ne(e);if(s===null)return t;{ne(Ne(e)!==".priority"||Or(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ot(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(_t,(c,d)=>{t[c]=d.val(e),s++,l&&we.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+j1(this.getPriority().val())+":"),this.forEachChild(_t,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":p1(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Oe(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Oe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Oe(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Oe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Oe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Oc?-1:0}withIndex(e){if(e===Wo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(_t),a=t.getIterator(_t);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Wo?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class u4 extends we{constructor(){super(new xn(Ey),we.EMPTY_NODE,Cs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const Oc=new u4;Object.defineProperties(Oe,{MIN:{value:new Oe(ul,we.EMPTY_NODE)},MAX:{value:new Oe(Va,Oc)}});U1.__EMPTY_NODE=we.EMPTY_NODE;Zt.__childrenNodeConstructor=we;i4(Oc);r4(Oc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=!0;function kt(n,e=null){if(n===null)return we.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Zt(t,kt(e))}if(!(n instanceof Array)&&c4){const t=[];let s=!1;if(yn(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=kt(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Oe(c,p)))}}),t.length===0)return we.EMPTY_NODE;const l=Jf(t,n4,c=>c.name,Ey);if(s){const c=Jf(t,_t.getCompare());return new we(l,kt(e),new Cs({".priority":c},{".priority":_t}))}else return new we(l,kt(e),Cs.Default)}else{let t=we.EMPTY_NODE;return yn(n,(s,a)=>{if(Ki(n,s)&&s.substring(0,1)!=="."){const l=kt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(kt(e))}}s4(kt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4 extends Ld{constructor(e){super(),this.indexPath_=e,ne(!De(e)&&Ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Ha(e.name,t.name):l}makePost(e,t){const s=kt(e),a=we.EMPTY_NODE.updateChild(this.indexPath_,s);return new Oe(t,a)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,Oc);return new Oe(Va,e)}toString(){return hc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4 extends Ld{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ha(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Oe.MIN}maxPost(){return Oe.MAX}makePost(e,t){const s=kt(e);return new Oe(t,s)}toString(){return".value"}}const d4=new f4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(n){return{type:"value",snapshotNode:n}}function cl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function fc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function dc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function m4(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(fc(t,d)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(cl(t,s)):c.trackChildChange(dc(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_t,(a,l)=>{t.hasChild(a)||s.trackChildChange(fc(a,l))}),t.isLeafNode()||t.forEachChild(_t,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(dc(a,l,c))}else s.trackChildChange(cl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?we.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this.indexedFilter_=new Ty(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mc.getStartPost_(e),this.endPost_=mc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new Oe(t,s))||(s=we.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=we.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(we.EMPTY_NODE);const l=this;return t.forEachChild(_t,(c,d)=>{l.matches(new Oe(c,d))||(a=a.updateImmediateChild(c,we.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new mc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new Oe(t,s))||(s=we.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=we.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=we.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(we.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,we.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(S,x)=>T(x,S)}else c=this.index_.getCompare();const d=e;ne(d.numChildren()===this.limit_,"");const p=new Oe(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(d.hasChild(t)){const T=d.getImmediateChild(t);let S=a.getChildAfterChild(this.index_,g,this.reverse_);for(;S!=null&&(S.name===t||d.hasChild(S.name));)S=a.getChildAfterChild(this.index_,S,this.reverse_);const x=S==null?1:c(S,p);if(v&&!s.isEmpty()&&x>=0)return l?.trackChildChange(dc(t,s,T)),d.updateImmediateChild(t,s);{l?.trackChildChange(fc(t,T));const Q=d.updateImmediateChild(t,we.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(l?.trackChildChange(cl(S.name,S.node)),Q.updateImmediateChild(S.name,S.node)):Q}}else return s.isEmpty()?e:v&&c(g,p)>=0?(l!=null&&(l.trackChildChange(fc(g.name,g.node)),l.trackChildChange(cl(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,we.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ul}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Va}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_t}copy(){const e=new Sy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function g4(n){return n.loadsAllData()?new Ty(n.getIndex()):n.hasLimit()?new p4(n):new mc(n)}function lw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===_t?t="$priority":n.index_===d4?t="$value":n.index_===Wo?t="$key":(ne(n.index_ instanceof h4,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=tn(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=tn(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+tn(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=tn(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+tn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function uw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==_t&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends k1{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Dc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=ed.getListenId_(e,s),d={};this.listens_[c]=d;const p=lw(e._queryParams);this.restRequest_(l+".json",p,(g,v)=>{let T=v;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),Jo(this.listens_,c)===d){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",a(S,null)}})}unlisten(e,t){const s=ed.getListenId_(e,t);delete this.listens_[s]}get(e){const t=lw(e._queryParams),s=e._path.toString(),a=new Ss;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ml(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=ec(d.responseText)}catch{Mn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Mn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(){return{value:null,children:new Map}}function wl(n,e,t){if(De(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Ne(e);n.children.has(s)||n.children.set(s,td());const a=n.children.get(s);e=ot(e),wl(a,e,t)}}function $g(n,e){if(De(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(_t,(s,a)=>{wl(n,new tt(s),a)}),$g(n,e)}}else if(n.children.size>0){const t=Ne(e);return e=ot(e),n.children.has(t)&&$g(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Wg(n,e,t){n.value!==null?t(e,n.value):y4(n,(s,a)=>{const l=new tt(e.toString()+"/"+s);Wg(a,l,t)})}function y4(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&yn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=10*1e3,E4=30*1e3,T4=300*1e3;class S4{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new v4(e);const s=cw+(E4-cw)*Math.random();$u(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;yn(e,(a,l)=>{l>0&&Ki(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),$u(this.reportStats_.bind(this),Math.floor(Math.random()*2*T4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _i;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_i||(_i={}));function H1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function by(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=_i.ACK_USER_WRITE,this.source=H1()}operationForChild(e){if(De(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new tt(e));return new nd(Ye(),t,this.revert)}}else return ne(Ne(this.path)===e,"operationForChild called for unrelated child."),new nd(ot(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.source=e,this.path=t,this.type=_i.LISTEN_COMPLETE}operationForChild(e){return De(this.path)?new pc(this.source,Ye()):new pc(this.source,ot(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=_i.OVERWRITE}operationForChild(e){return De(this.path)?new La(this.source,Ye(),this.snap.getImmediateChild(e)):new La(this.source,ot(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=_i.MERGE}operationForChild(e){if(De(this.path)){const t=this.children.subtree(new tt(e));return t.isEmpty()?null:t.value?new La(this.source,Ye(),t.value):new gc(this.source,Ye(),t)}else return ne(Ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gc(this.source,ot(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(De(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ne(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function b4(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(m4(c.childName,c.snapshotNode))}),Uu(n,a,"child_removed",e,s,t),Uu(n,a,"child_added",e,s,t),Uu(n,a,"child_moved",l,s,t),Uu(n,a,"child_changed",e,s,t),Uu(n,a,"value",e,s,t),a}function Uu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>C4(n,d,p)),c.forEach(d=>{const p=A4(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function A4(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function C4(n,e,t){if(e.childName==null||t.childName==null)throw dl("Should only compare child_ events.");const s=new Oe(e.childName,e.snapshotNode),a=new Oe(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n,e){return{eventCache:n,serverCache:e}}function Wu(n,e,t,s){return Ud(new Ua(e,t,s),n.serverCache)}function G1(n,e,t,s){return Ud(n.eventCache,new Ua(e,t,s))}function Zg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ja(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _g;const R4=()=>(_g||(_g=new xn(hk)),_g);class ht{static fromObject(e){let t=new ht(null);return yn(e,(s,a)=>{t=t.set(new tt(s),a)}),t}constructor(e,t=R4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ye(),value:this.value};if(De(e))return null;{const s=Ne(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ot(e),t);return l!=null?{path:Ct(new tt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(De(e))return this;{const t=Ne(e),s=this.children.get(t);return s!==null?s.subtree(ot(e)):new ht(null)}}set(e,t){if(De(e))return new ht(t,this.children);{const s=Ne(e),l=(this.children.get(s)||new ht(null)).set(ot(e),t),c=this.children.insert(s,l);return new ht(this.value,c)}}remove(e){if(De(e))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const t=Ne(e),s=this.children.get(t);if(s){const a=s.remove(ot(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ht(null):new ht(this.value,l)}else return this}}get(e){if(De(e))return this.value;{const t=Ne(e),s=this.children.get(t);return s?s.get(ot(e)):null}}setTree(e,t){if(De(e))return t;{const s=Ne(e),l=(this.children.get(s)||new ht(null)).setTree(ot(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ht(this.value,c)}}fold(e){return this.fold_(Ye(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Ct(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ye(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(De(e))return null;{const l=Ne(e),c=this.children.get(l);return c?c.findOnPath_(ot(e),Ct(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ye(),t)}foreachOnPath_(e,t,s){if(De(e))return this;{this.value&&s(t,this.value);const a=Ne(e),l=this.children.get(a);return l?l.foreachOnPath_(ot(e),Ct(t,a),s):new ht(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Ct(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.writeTree_=e}static empty(){return new vi(new ht(null))}}function Zu(n,e,t){if(De(e))return new vi(new ht(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Nn(a,e);return l=l.updateChild(c,t),new vi(n.writeTree_.set(a,l))}else{const a=new ht(t),l=n.writeTree_.setTree(e,a);return new vi(l)}}}function hw(n,e,t){let s=n;return yn(t,(a,l)=>{s=Zu(s,Ct(e,a),l)}),s}function fw(n,e){if(De(e))return vi.empty();{const t=n.writeTree_.setTree(e,new ht(null));return new vi(t)}}function Jg(n,e){return Ga(n,e)!=null}function Ga(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Nn(t.path,e)):null}function dw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(_t,(s,a)=>{e.push(new Oe(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Oe(s,a.value))}),e}function br(n,e){if(De(e))return n;{const t=Ga(n,e);return t!=null?new vi(new ht(t)):new vi(n.writeTree_.subtree(e))}}function e_(n){return n.writeTree_.isEmpty()}function hl(n,e){return Q1(Ye(),n.writeTree_,e)}function Q1(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ne(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=Q1(Ct(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Ct(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(n,e){return $1(e,n)}function I4(n,e,t,s,a){ne(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=Zu(n.visibleWrites,e,t)),n.lastWriteId=s}function N4(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function x4(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&D4(d,s.path)?a=!1:li(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return O4(n),!0;if(s.snap)n.visibleWrites=fw(n.visibleWrites,s.path);else{const d=s.children;yn(d,p=>{n.visibleWrites=fw(n.visibleWrites,Ct(s.path,p))})}return!0}else return!1}function D4(n,e){if(n.snap)return li(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&li(Ct(n.path,t),e))return!0;return!1}function O4(n){n.visibleWrites=Y1(n.allWrites,M4,Ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function M4(n){return n.visible}function Y1(n,e,t){let s=vi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)li(t,c)?(d=Nn(t,c),s=Zu(s,d,l.snap)):li(c,t)&&(d=Nn(c,t),s=Zu(s,Ye(),l.snap.getChild(d)));else if(l.children){if(li(t,c))d=Nn(t,c),s=hw(s,d,l.children);else if(li(c,t))if(d=Nn(c,t),De(d))s=hw(s,Ye(),l.children);else{const p=Jo(l.children,Ne(d));if(p){const g=p.getChild(ot(d));s=Zu(s,Ye(),g)}}}else throw dl("WriteRecord should have .snap or .children")}}return s}function K1(n,e,t,s,a){if(!s&&!a){const l=Ga(n.visibleWrites,e);if(l!=null)return l;{const c=br(n.visibleWrites,e);if(e_(c))return t;if(t==null&&!Jg(c,Ye()))return null;{const d=t||we.EMPTY_NODE;return hl(c,d)}}}else{const l=br(n.visibleWrites,e);if(!a&&e_(l))return t;if(!a&&t==null&&!Jg(l,Ye()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(li(g.path,e)||li(e,g.path))},d=Y1(n.allWrites,c,e),p=t||we.EMPTY_NODE;return hl(d,p)}}}function k4(n,e,t){let s=we.EMPTY_NODE;const a=Ga(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(_t,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=br(n.visibleWrites,e);return t.forEachChild(_t,(c,d)=>{const p=hl(br(l,new tt(c)),d);s=s.updateImmediateChild(c,p)}),dw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=br(n.visibleWrites,e);return dw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function P4(n,e,t,s,a){ne(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Ct(e,t);if(Jg(n.visibleWrites,l))return null;{const c=br(n.visibleWrites,l);return e_(c)?a.getChild(t):hl(c,a.getChild(t))}}function V4(n,e,t,s){const a=Ct(e,t),l=Ga(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=br(n.visibleWrites,a);return hl(c,s.getNode().getImmediateChild(t))}else return null}function L4(n,e){return Ga(n.visibleWrites,e)}function U4(n,e,t,s,a,l,c){let d;const p=br(n.visibleWrites,e),g=Ga(p,Ye());if(g!=null)d=g;else if(t!=null)d=hl(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const v=[],T=c.getCompare(),S=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let x=S.getNext();for(;x&&v.length<a;)T(x,s)!==0&&v.push(x),x=S.getNext();return v}else return[]}function j4(){return{visibleWrites:vi.empty(),allWrites:[],lastWriteId:-1}}function id(n,e,t,s){return K1(n.writeTree,n.treePath,e,t,s)}function Cy(n,e){return k4(n.writeTree,n.treePath,e)}function mw(n,e,t,s){return P4(n.writeTree,n.treePath,e,t,s)}function sd(n,e){return L4(n.writeTree,Ct(n.treePath,e))}function z4(n,e,t,s,a,l){return U4(n.writeTree,n.treePath,e,t,s,a,l)}function Ry(n,e,t){return V4(n.writeTree,n.treePath,e,t)}function X1(n,e){return $1(Ct(n.treePath,e),n.writeTree)}function $1(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,dc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,fc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,cl(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,dc(s,e.snapshotNode,a.oldSnap));else throw dl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const W1=new B4;class Iy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ua(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ry(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ja(this.viewCache_),l=z4(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F4(n){return{filter:n}}function H4(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function G4(n,e,t,s,a){const l=new q4;let c,d;if(t.type===_i.OVERWRITE){const g=t;g.source.fromUser?c=t_(n,e,g.path,g.snap,s,a,l):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!De(g.path),c=rd(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===_i.MERGE){const g=t;g.source.fromUser?c=Y4(n,e,g.path,g.children,s,a,l):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=n_(n,e,g.path,g.children,s,a,d,l))}else if(t.type===_i.ACK_USER_WRITE){const g=t;g.revert?c=$4(n,e,g.path,s,a,l):c=K4(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===_i.LISTEN_COMPLETE)c=X4(n,e,t.path,s,l);else throw dl("Unknown operation type: "+t.type);const p=l.getChanges();return Q4(e,c,p),{viewCache:c,changes:p}}function Q4(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Zg(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(F1(Zg(e)))}}function Z1(n,e,t,s,a,l){const c=e.eventCache;if(sd(s,t)!=null)return e;{let d,p;if(De(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=ja(e),v=g instanceof we?g:we.EMPTY_NODE,T=Cy(s,v);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=id(s,ja(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Ne(t);if(g===".priority"){ne(Or(t)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const T=mw(s,t,v,p);T!=null?d=n.filter.updatePriority(v,T):d=c.getNode()}else{const v=ot(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const S=mw(s,t,c.getNode(),p);S!=null?T=c.getNode().getImmediateChild(g).updateChild(v,S):T=c.getNode().getImmediateChild(g)}else T=Ry(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,v,a,l):d=c.getNode()}}return Wu(e,d,c.isFullyInitialized()||De(t),n.filter.filtersNodes())}}function rd(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const v=c?n.filter:n.filter.getIndexedFilter();if(De(t))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const x=p.getNode().updateChild(t,s);g=v.updateFullNode(p.getNode(),x,null)}else{const x=Ne(t);if(!p.isCompleteForPath(t)&&Or(t)>1)return e;const j=ot(t),G=p.getNode().getImmediateChild(x).updateChild(j,s);x===".priority"?g=v.updatePriority(p.getNode(),G):g=v.updateChild(p.getNode(),x,G,j,W1,null)}const T=G1(e,g,p.isFullyInitialized()||De(t),v.filtersNodes()),S=new Iy(a,T,l);return Z1(n,T,t,a,S,d)}function t_(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const v=new Iy(a,e,l);if(De(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Wu(e,g,!0,n.filter.filtersNodes());else{const T=Ne(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=Wu(e,g,d.isFullyInitialized(),d.isFiltered());else{const S=ot(t),x=d.getNode().getImmediateChild(T);let j;if(De(S))j=s;else{const Q=v.getCompleteChild(T);Q!=null?_y(S)===".priority"&&Q.getChild(V1(S)).isEmpty()?j=Q:j=Q.updateChild(S,s):j=we.EMPTY_NODE}if(x.equals(j))p=e;else{const Q=n.filter.updateChild(d.getNode(),T,j,S,v,c);p=Wu(e,Q,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function pw(n,e){return n.eventCache.isCompleteForChild(e)}function Y4(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const v=Ct(t,p);pw(e,Ne(v))&&(d=t_(n,d,v,g,a,l,c))}),s.foreach((p,g)=>{const v=Ct(t,p);pw(e,Ne(v))||(d=t_(n,d,v,g,a,l,c))}),d}function gw(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function n_(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;De(t)?g=s:g=new ht(null).setTree(t,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((T,S)=>{if(v.hasChild(T)){const x=e.serverCache.getNode().getImmediateChild(T),j=gw(n,x,S);p=rd(n,p,new tt(T),j,a,l,c,d)}}),g.children.inorderTraversal((T,S)=>{const x=!e.serverCache.isCompleteForChild(T)&&S.value===null;if(!v.hasChild(T)&&!x){const j=e.serverCache.getNode().getImmediateChild(T),Q=gw(n,j,S);p=rd(n,p,new tt(T),Q,a,l,c,d)}}),p}function K4(n,e,t,s,a,l,c){if(sd(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(De(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return rd(n,e,t,p.getNode().getChild(t),a,l,d,c);if(De(t)){let g=new ht(null);return p.getNode().forEachChild(Wo,(v,T)=>{g=g.set(new tt(v),T)}),n_(n,e,t,g,a,l,d,c)}else return e}else{let g=new ht(null);return s.foreach((v,T)=>{const S=Ct(t,v);p.isCompleteForPath(S)&&(g=g.set(v,p.getNode().getChild(S)))}),n_(n,e,t,g,a,l,d,c)}}function X4(n,e,t,s,a){const l=e.serverCache,c=G1(e,l.getNode(),l.isFullyInitialized()||De(t),l.isFiltered());return Z1(n,c,t,s,W1,a)}function $4(n,e,t,s,a,l){let c;if(sd(s,t)!=null)return e;{const d=new Iy(s,e,a),p=e.eventCache.getNode();let g;if(De(t)||Ne(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=id(s,ja(e));else{const T=e.serverCache.getNode();ne(T instanceof we,"serverChildren would be complete if leaf node"),v=Cy(s,T)}v=v,g=n.filter.updateFullNode(p,v,l)}else{const v=Ne(t);let T=Ry(s,v,e.serverCache);T==null&&e.serverCache.isCompleteForChild(v)&&(T=p.getImmediateChild(v)),T!=null?g=n.filter.updateChild(p,v,T,ot(t),d,l):e.eventCache.getNode().hasChild(v)?g=n.filter.updateChild(p,v,we.EMPTY_NODE,ot(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=id(s,ja(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||sd(s,Ye())!=null,Wu(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new Ty(s.getIndex()),l=g4(s);this.processor_=F4(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(we.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(we.EMPTY_NODE,d.getNode(),null),v=new Ua(p,c.isFullyInitialized(),a.filtersNodes()),T=new Ua(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Ud(T,v),this.eventGenerator_=new w4(this.query_)}get query(){return this.query_}}function Z4(n){return n.viewCache_.serverCache.getNode()}function J4(n,e){const t=ja(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!De(e)&&!t.getImmediateChild(Ne(e)).isEmpty())?t.getChild(e):null}function _w(n){return n.eventRegistrations_.length===0}function eP(n,e){n.eventRegistrations_.push(e)}function yw(n,e,t){const s=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function vw(n,e,t,s){e.type===_i.MERGE&&e.source.queryId!==null&&(ne(ja(n.viewCache_),"We should always have a full cache before handling merges"),ne(Zg(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=G4(n.processor_,a,e,t,s);return H4(n.processor_,l.viewCache),ne(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,J1(n,l.changes,l.viewCache.eventCache.getNode(),null)}function tP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(_t,(l,c)=>{s.push(cl(l,c))}),t.isFullyInitialized()&&s.push(F1(t.getNode())),J1(n,s,t.getNode(),e)}function J1(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return b4(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ad;class nP{constructor(){this.views=new Map}}function iP(n){ne(!ad,"__referenceConstructor has already been defined"),ad=n}function sP(){return ne(ad,"Reference.ts has not been loaded"),ad}function rP(n){return n.views.size===0}function Ny(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ne(l!=null,"SyncTree gave us an op for an invalid query."),vw(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(vw(c,e,t,s));return l}}function aP(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=id(t,a?s:null),p=!1;d?p=!0:s instanceof we?(d=Cy(t,s),p=!1):(d=we.EMPTY_NODE,p=!1);const g=Ud(new Ua(d,p,!1),new Ua(s,a,!1));return new W4(e,g)}return c}function oP(n,e,t,s,a,l){const c=aP(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),eP(c,t),tP(c,t)}function lP(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=Mr(n);if(a==="default")for(const[p,g]of n.views.entries())c=c.concat(yw(g,t,s)),_w(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(c=c.concat(yw(p,t,s)),_w(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Mr(n)&&l.push(new(sP())(e._repo,e._path)),{removed:l,events:c}}function eC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Zo(n,e){let t=null;for(const s of n.views.values())t=t||J4(s,e);return t}function tC(n,e){if(e._queryParams.loadsAllData())return jd(n);{const s=e._queryIdentifier;return n.views.get(s)}}function nC(n,e){return tC(n,e)!=null}function Mr(n){return jd(n)!=null}function jd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let od;function uP(n){ne(!od,"__referenceConstructor has already been defined"),od=n}function cP(){return ne(od,"Reference.ts has not been loaded"),od}let hP=1;class Ew{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ht(null),this.pendingWriteTree_=j4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function iC(n,e,t,s,a){return I4(n.pendingWriteTree_,e,t,s,a),a?Mc(n,new La(H1(),e,t)):[]}function Ca(n,e,t=!1){const s=N4(n.pendingWriteTree_,e);if(x4(n.pendingWriteTree_,e)){let l=new ht(null);return s.snap!=null?l=l.set(Ye(),!0):yn(s.children,c=>{l=l.set(new tt(c),!0)}),Mc(n,new nd(s.path,l,t))}else return[]}function zd(n,e,t){return Mc(n,new La(wy(),e,t))}function fP(n,e,t){const s=ht.fromObject(t);return Mc(n,new gc(wy(),e,s))}function dP(n,e){return Mc(n,new pc(wy(),e))}function mP(n,e,t){const s=Dy(n,t);if(s){const a=Oy(s),l=a.path,c=a.queryId,d=Nn(l,e),p=new pc(by(c),d);return My(n,l,p)}else return[]}function i_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||nC(c,e))){const p=lP(c,e,t,s);rP(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const v=g.findIndex(S=>S._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(S,x)=>Mr(x));if(v&&!T){const S=n.syncPointTree_.subtree(l);if(!S.isEmpty()){const x=_P(S);for(let j=0;j<x.length;++j){const Q=x[j],G=Q.query,ge=aC(n,Q);n.listenProvider_.startListening(Ju(G),ld(n,G),ge.hashFn,ge.onComplete)}}}!T&&g.length>0&&!s&&(v?n.listenProvider_.stopListening(Ju(e),null):g.forEach(S=>{const x=n.queryToTagMap.get(qd(S));n.listenProvider_.stopListening(Ju(S),x)}))}yP(n,g)}return d}function pP(n,e,t,s){const a=Dy(n,s);if(a!=null){const l=Oy(a),c=l.path,d=l.queryId,p=Nn(c,e),g=new La(by(d),p,t);return My(n,c,g)}else return[]}function gP(n,e,t,s){const a=Dy(n,s);if(a){const l=Oy(a),c=l.path,d=l.queryId,p=Nn(c,e),g=ht.fromObject(t),v=new gc(by(d),p,g);return My(n,c,v)}else return[]}function Tw(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(S,x)=>{const j=Nn(S,a);l=l||Zo(x,j),c=c||Mr(x)});let d=n.syncPointTree_.get(a);d?(c=c||Mr(d),l=l||Zo(d,Ye())):(d=new nP,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=we.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((x,j)=>{const Q=Zo(j,Ye());Q&&(l=l.updateImmediateChild(x,Q))}));const g=nC(d,e);if(!g&&!e._queryParams.loadsAllData()){const S=qd(e);ne(!n.queryToTagMap.has(S),"View does not exist, but we have a tag");const x=vP();n.queryToTagMap.set(S,x),n.tagToQueryMap.set(x,S)}const v=Ay(n.pendingWriteTree_,a);let T=oP(d,e,t,v,l,p);if(!g&&!c&&!s){const S=tC(d,e);T=T.concat(EP(n,e,S))}return T}function xy(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=Nn(c,e),g=Zo(d,p);if(g)return g});return K1(a,e,l,t,!0)}function Mc(n,e){return sC(e,n.syncPointTree_,null,Ay(n.pendingWriteTree_,Ye()))}function sC(n,e,t,s){if(De(n.path))return rC(n,e,t,s);{const a=e.get(Ye());t==null&&a!=null&&(t=Zo(a,Ye()));let l=[];const c=Ne(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,v=X1(s,c);l=l.concat(sC(d,p,g,v))}return a&&(l=l.concat(Ny(a,n,s,t))),l}}function rC(n,e,t,s){const a=e.get(Ye());t==null&&a!=null&&(t=Zo(a,Ye()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=X1(s,c),v=n.operationForChild(c);v&&(l=l.concat(rC(v,d,p,g)))}),a&&(l=l.concat(Ny(a,n,s,t))),l}function aC(n,e){const t=e.query,s=ld(n,t);return{hashFn:()=>(Z4(e)||we.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?mP(n,t._path,s):dP(n,t._path);{const l=mk(a,t);return i_(n,t,null,l)}}}}function ld(n,e){const t=qd(e);return n.queryToTagMap.get(t)}function qd(n){return n._path.toString()+"$"+n._queryIdentifier}function Dy(n,e){return n.tagToQueryMap.get(e)}function Oy(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new tt(n.substr(0,e))}}function My(n,e,t){const s=n.syncPointTree_.get(e);ne(s,"Missing sync point for query tag that we're tracking");const a=Ay(n.pendingWriteTree_,e);return Ny(s,t,a,null)}function _P(n){return n.fold((e,t,s)=>{if(t&&Mr(t))return[jd(t)];{let a=[];return t&&(a=eC(t)),yn(s,(l,c)=>{a=a.concat(c)}),a}})}function Ju(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(cP())(n._repo,n._path):n}function yP(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=qd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function vP(){return hP++}function EP(n,e,t){const s=e._path,a=ld(n,e),l=aC(n,t),c=n.listenProvider_.startListening(Ju(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)ne(!Mr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,v,T)=>{if(!De(g)&&v&&Mr(v))return[jd(v).query];{let S=[];return v&&(S=S.concat(eC(v).map(x=>x.query))),yn(T,(x,j)=>{S=S.concat(j)}),S}});for(let g=0;g<p.length;++g){const v=p[g];n.listenProvider_.stopListening(Ju(v),ld(n,v))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ky(t)}node(){return this.node_}}class Py{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ct(this.path_,e);return new Py(this.syncTree_,t)}node(){return xy(this.syncTree_,this.path_)}}const TP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Sw=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return SP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return wP(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},SP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},wP=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ne(!1,"Unexpected increment value: "+s);const a=e.node();if(ne(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},bP=function(n,e,t,s){return Vy(e,new Py(t,n),s)},oC=function(n,e,t){return Vy(n,new ky(e),t)};function Vy(n,e,t){const s=n.getPriority().val(),a=Sw(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=Sw(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Zt(d,kt(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Zt(a))),c.forEachChild(_t,(d,p)=>{const g=Vy(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Uy(n,e){let t=e instanceof tt?e:new tt(e),s=n,a=Ne(t);for(;a!==null;){const l=Jo(s.node.children,a)||{children:{},childCount:0};s=new Ly(a,s,l),t=ot(t),a=Ne(t)}return s}function bl(n){return n.node.value}function lC(n,e){n.node.value=e,s_(n)}function uC(n){return n.node.childCount>0}function AP(n){return bl(n)===void 0&&!uC(n)}function Bd(n,e){yn(n.node.children,(t,s)=>{e(new Ly(t,n,s))})}function cC(n,e,t,s){t&&e(n),Bd(n,a=>{cC(a,e,!0)})}function CP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function kc(n){return new tt(n.parent===null?n.name:kc(n.parent)+"/"+n.name)}function s_(n){n.parent!==null&&RP(n.parent,n.name,n)}function RP(n,e,t){const s=AP(t),a=Ki(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,s_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,s_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=/[\[\].#$\/\u0000-\u001F\u007F]/,NP=/[\[\].#$\u0000-\u001F\u007F]/,yg=10*1024*1024,jy=function(n){return typeof n=="string"&&n.length!==0&&!IP.test(n)},hC=function(n){return typeof n=="string"&&n.length!==0&&!NP.test(n)},xP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hC(n)},fC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Vd(n)||n&&typeof n=="object"&&Ki(n,".sv")},r_=function(n,e,t,s){Fd(el(n,"value"),e,t)},Fd=function(n,e,t){const s=t instanceof tt?new Kk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Sa(s));if(typeof e=="function")throw new Error(n+"contains a function "+Sa(s)+" with contents = "+e.toString());if(Vd(e))throw new Error(n+"contains "+e.toString()+" "+Sa(s));if(typeof e=="string"&&e.length>yg/3&&hd(e)>yg)throw new Error(n+"contains a string greater than "+yg+" utf8 bytes "+Sa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(yn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!jy(c)))throw new Error(n+" contains an invalid key ("+c+") "+Sa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Xk(s,c),Fd(n,d,s),$k(s)}),a&&l)throw new Error(n+' contains ".value" child '+Sa(s)+" in addition to actual children.")}},DP=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=hc(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!jy(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Yk);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&li(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},OP=function(n,e,t,s){const a=el(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];yn(e,(c,d)=>{const p=new tt(c);if(Fd(a,d,Ct(t,p)),_y(p)===".priority"&&!fC(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),DP(a,l)},MP=function(n,e,t){if(Vd(e))throw new Error(el(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!fC(e))throw new Error(el(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},dC=function(n,e,t,s){if(!hC(t))throw new Error(el(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},kP=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dC(n,e,t)},Go=function(n,e){if(Ne(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},PP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!jy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!xP(t))throw new Error(el(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zy(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!yy(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function mC(n,e,t){zy(n,t),pC(n,s=>yy(s,e))}function Ps(n,e,t){zy(n,t),pC(n,s=>li(s,e)||li(e,s))}function pC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(LP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function LP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Xu&&ln("event: "+t.toString()),Sl(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP="repo_interrupt",jP=25;class zP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new VP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=td(),this.transactionQueueTree_=new Ly,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qP(n,e,t){if(n.stats_=py(n.repoInfo_),n.forceRestClient_||yk())n.server_=new ed(n.repoInfo_,(s,a,l,c)=>{ww(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>bw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tn(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Is(n.repoInfo_,e,(s,a,l,c)=>{ww(n,s,a,l,c)},s=>{bw(n,s)},s=>{FP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=wk(n.repoInfo_,()=>new S4(n.stats_,n.server_)),n.infoData_=new _4,n.infoSyncTree_=new Ew({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=zd(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),By(n,"connected",!1),n.serverSyncTree_=new Ew({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Ps(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function BP(n){const t=n.infoData_.getNode(new tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function qy(n){return TP({timestamp:BP(n)})}function ww(n,e,t,s,a){n.dataUpdateCount++;const l=new tt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=xf(t,g=>kt(g));c=gP(n.serverSyncTree_,l,p,a)}else{const p=kt(t);c=pP(n.serverSyncTree_,l,p,a)}else if(s){const p=xf(t,g=>kt(g));c=fP(n.serverSyncTree_,l,p)}else{const p=kt(t);c=zd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=Hd(n,l)),Ps(n.eventQueue_,d,c)}function bw(n,e){By(n,"connected",e),e===!1&&GP(n)}function FP(n,e){yn(e,(t,s)=>{By(n,t,s)})}function By(n,e,t){const s=new tt("/.info/"+e),a=kt(t);n.infoData_.updateSnapshot(s,a);const l=zd(n.infoSyncTree_,s,a);Ps(n.eventQueue_,s,l)}function gC(n){return n.nextWriteId_++}function HP(n,e,t,s,a){Fy(n,"set",{path:e.toString(),value:t,priority:s});const l=qy(n),c=kt(t,s),d=xy(n.serverSyncTree_,e),p=oC(c,d,l),g=gC(n),v=iC(n.serverSyncTree_,e,p,g,!0);zy(n.eventQueue_,v),n.server_.put(e.toString(),c.val(!0),(S,x)=>{const j=S==="ok";j||Mn("set at "+e+" failed: "+S);const Q=Ca(n.serverSyncTree_,g,!j);Ps(n.eventQueue_,e,Q),fl(n,a,S,x)});const T=TC(n,e);Hd(n,T),Ps(n.eventQueue_,T,[])}function GP(n){Fy(n,"onDisconnectEvents");const e=qy(n),t=td();Wg(n.onDisconnect_,Ye(),(a,l)=>{const c=bP(a,l,n.serverSyncTree_,e);wl(t,a,c)});let s=[];Wg(t,Ye(),(a,l)=>{s=s.concat(zd(n.serverSyncTree_,a,l));const c=TC(n,a);Hd(n,c)}),n.onDisconnect_=td(),Ps(n.eventQueue_,Ye(),s)}function QP(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&$g(n.onDisconnect_,e),fl(n,t,s,a)})}function Aw(n,e,t,s){const a=kt(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&wl(n.onDisconnect_,e,a),fl(n,s,l,c)})}function YP(n,e,t,s,a){const l=kt(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&wl(n.onDisconnect_,e,l),fl(n,a,c,d)})}function KP(n,e,t,s){if(Nf(t)){ln("onDisconnect().update() called with empty data.  Don't do anything."),fl(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&yn(t,(c,d)=>{const p=kt(d);wl(n.onDisconnect_,Ct(e,c),p)}),fl(n,s,a,l)})}function XP(n,e,t){let s;Ne(e._path)===".info"?s=Tw(n.infoSyncTree_,e,t):s=Tw(n.serverSyncTree_,e,t),mC(n.eventQueue_,e._path,s)}function $P(n,e,t){let s;Ne(e._path)===".info"?s=i_(n.infoSyncTree_,e,t):s=i_(n.serverSyncTree_,e,t),mC(n.eventQueue_,e._path,s)}function WP(n){n.persistentConnection_&&n.persistentConnection_.interrupt(UP)}function Fy(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ln(t,...e)}function fl(n,e,t,s){e&&Sl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function _C(n,e,t){return xy(n.serverSyncTree_,e,t)||we.EMPTY_NODE}function Hy(n,e=n.transactionQueueTree_){if(e||Gd(n,e),bl(e)){const t=vC(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&ZP(n,kc(e),t)}else uC(e)&&Bd(e,t=>{Hy(n,t)})}function ZP(n,e,t){const s=t.map(g=>g.currentWriteId),a=_C(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const v=t[g];ne(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const T=Nn(e,v.path);l=l.updateChild(T,v.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{Fy(n,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const T=[];for(let S=0;S<t.length;S++)t[S].status=2,v=v.concat(Ca(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&T.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();Gd(n,Uy(n.transactionQueueTree_,e)),Hy(n,n.transactionQueueTree_),Ps(n.eventQueue_,e,v);for(let S=0;S<T.length;S++)Sl(T[S])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Mn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}Hd(n,e)}},c)}function Hd(n,e){const t=yC(n,e),s=kc(t),a=vC(n,t);return JP(n,a,s),s}function JP(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=Nn(t,p.path);let v=!1,T;if(ne(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,T=p.abortReason,a=a.concat(Ca(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=jP)v=!0,T="maxretry",a=a.concat(Ca(n.serverSyncTree_,p.currentWriteId,!0));else{const S=_C(n,p.path,c);p.currentInputSnapshot=S;const x=e[d].update(S.val());if(x!==void 0){Fd("transaction failed: Data returned ",x,p.path);let j=kt(x);typeof x=="object"&&x!=null&&Ki(x,".priority")||(j=j.updatePriority(S.getPriority()));const G=p.currentWriteId,ge=qy(n),ue=oC(j,S,ge);p.currentOutputSnapshotRaw=j,p.currentOutputSnapshotResolved=ue,p.currentWriteId=gC(n),c.splice(c.indexOf(G),1),a=a.concat(iC(n.serverSyncTree_,p.path,ue,p.currentWriteId,p.applyLocally)),a=a.concat(Ca(n.serverSyncTree_,G,!0))}else v=!0,T="nodata",a=a.concat(Ca(n.serverSyncTree_,p.currentWriteId,!0))}Ps(n.eventQueue_,t,a),a=[],v&&(e[d].status=2,(function(S){setTimeout(S,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Gd(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)Sl(s[d]);Hy(n,n.transactionQueueTree_)}function yC(n,e){let t,s=n.transactionQueueTree_;for(t=Ne(e);t!==null&&bl(s)===void 0;)s=Uy(s,t),e=ot(e),t=Ne(e);return s}function vC(n,e){const t=[];return EC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function EC(n,e,t){const s=bl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Bd(e,a=>{EC(n,a,t)})}function Gd(n,e){const t=bl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,lC(e,t.length>0?t:void 0)}Bd(e,s=>{Gd(n,s)})}function TC(n,e){const t=kc(yC(n,e)),s=Uy(n.transactionQueueTree_,e);return CP(s,a=>{vg(n,a)}),vg(n,s),cC(s,a=>{vg(n,a)}),t}function vg(n,e){const t=bl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ne(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ne(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Ca(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?lC(e,void 0):t.length=l+1,Ps(n.eventQueue_,kc(e),a);for(let c=0;c<s.length;c++)Sl(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function tV(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Mn(`Invalid query segment '${t}' in query '${n}'`)}return e}const Cw=function(n,e){const t=nV(n),s=t.namespace;t.domain==="firebase.com"&&ks(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ks("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||uk();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new R1(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new tt(t.pathString)}},nV=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let v=n.indexOf("/");v===-1&&(v=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(v,T)),v<T&&(a=eV(n.substring(v,T)));const S=tV(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const x=e.slice(0,g);if(x.toLowerCase()==="localhost")t="localhost";else if(x.split(".").length<=2)t=x;else{const j=e.indexOf(".");s=e.substring(0,j).toLowerCase(),t=e.substring(j+1),l=s}"ns"in S&&(l=S.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+tn(this.snapshot.exportVal())}}class sV{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class aV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Ss;return QP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Go("OnDisconnect.remove",this._path);const e=new Ss;return Aw(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Go("OnDisconnect.set",this._path),r_("OnDisconnect.set",e,this._path);const t=new Ss;return Aw(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Go("OnDisconnect.setWithPriority",this._path),r_("OnDisconnect.setWithPriority",e,this._path),MP("OnDisconnect.setWithPriority",t);const s=new Ss;return YP(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Go("OnDisconnect.update",this._path),OP("OnDisconnect.update",e,this._path);const t=new Ss;return KP(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return De(this._path)?null:_y(this._path)}get ref(){return new Lr(this._repo,this._path)}get _queryIdentifier(){const e=uw(this._queryParams),t=dy(e);return t==="{}"?"default":t}get _queryObject(){return uw(this._queryParams)}isEqual(e){if(e=ct(e),!(e instanceof Gy))return!1;const t=this._repo===e._repo,s=yy(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+Qk(this._path)}}class Lr extends Gy{constructor(e,t){super(e,t,new Sy,!1)}get parent(){const e=V1(this._path);return e===null?null:new Lr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ud{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new tt(e),s=a_(this.ref,e);return new ud(this._node.getChild(t),s,_t)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new ud(a,a_(this.ref,s),_t)))}hasChild(e){const t=new tt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Na(n,e){return n=ct(n),n._checkNotDeleted("ref"),e!==void 0?a_(n._root,e):n._root}function a_(n,e){return n=ct(n),Ne(n._path)===null?kP("child","path",e):dC("child","path",e),new Lr(n._repo,Ct(n._path,e))}function oV(n){return n=ct(n),new aV(n._repo,n._path)}function Eg(n){return Go("remove",n._path),Qd(n,null)}function Qd(n,e){n=ct(n),Go("set",n._path),r_("set",e,n._path);const t=new Ss;return HP(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Qy{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new iV("value",this,new ud(e.snapshotNode,new Lr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new sV(this,e,t):null}matches(e){return e instanceof Qy?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function lV(n,e,t,s,a){const l=new rV(t,void 0),c=new Qy(l);return XP(n._repo,n,c),()=>$P(n._repo,n,c)}function Yy(n,e,t,s){return lV(n,"value",e)}iP(Lr);uP(Lr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uV="FIREBASE_DATABASE_EMULATOR_HOST",o_={};let cV=!1;function hV(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=kr(l);n.repoInfo_=new R1(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function fV(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||ks("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ln("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=Cw(l,a),d=c.repoInfo,p;typeof process<"u"&&GS&&(p=GS[uV]),p?(l=`http://${p}?ns=${d.namespace}`,c=Cw(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new Ek(n.name,n.options,e);PP("Invalid Firebase Database URL",c),De(c.path)||ks("Database URL must point to the root of a Firebase Database (not including a child path).");const v=mV(d,n,g,new vk(n,t));return new pV(v,n)}function dV(n,e){const t=o_[e];(!t||t[n.key]!==n)&&ks(`Database ${e}(${n.repoInfo_}) has already been deleted.`),WP(n),delete t[n.key]}function mV(n,e,t,s){let a=o_[e.name];a||(a={},o_[e.name]=a);let l=a[n.toURLString()];return l&&ks("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new zP(n,cV,t,s),a[n.toURLString()]=l,l}class pV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lr(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ks("Cannot call "+e+" on a deleted database.")}}function gV(n=m_(),e){const t=dd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Qw("database");s&&_V(t,...s)}return t}function _V(n,e,t,s={}){n=ct(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Gi(s,l.repoInfo_.emulatorOptions))return;ks("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&ks('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Af(Af.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:Xw(s.mockUserToken,n.app.options.projectId);c=new Af(d)}kr(e)&&(c_(e),h_("Database",!0)),hV(l,a,s,c)}/**
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
 */function yV(n){ik(za),Da(new Ar("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return fV(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),ji(QS,YS,n),ji(QS,YS,"esm2020")}Is.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Is.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};yV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),EV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Rw=n=>{const e=EV(n);return e.charAt(0).toUpperCase()+e.slice(1)},SC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),TV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=oe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>oe.createElement("svg",{ref:p,...SV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:SC("lucide",a),...!l&&!TV(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,v])=>oe.createElement(g,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=(n,e)=>{const t=oe.forwardRef(({className:s,...a},l)=>oe.createElement(wV,{ref:l,iconNode:e,className:SC(`lucide-${vV(Rw(n))}`,`lucide-${n}`,s),...a}));return t.displayName=Rw(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],AV=Rt("arrow-left",bV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Iw=Rt("bell",CV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],IV=Rt("check-check",RV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],wC=Rt("check",NV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],Nw=Rt("corner-up-left",xV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],OV=Rt("ellipsis-vertical",DV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],kV=Rt("eraser",MV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],bC=Rt("loader-circle",PV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],xw=Rt("log-out",VV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Dw=Rt("message-circle",LV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Ky=Rt("message-square",UV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],zV=Rt("pin-off",jV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],BV=Rt("pin",qV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],HV=Rt("send",FV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],QV=Rt("smile",GV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],KV=Rt("square-pen",YV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ow=Rt("trash-2",XV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Mw=Rt("user-plus",$V);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],ZV=Rt("user-x",WV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],kw=Rt("users",JV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eL=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],AC=Rt("x",eL),tL={apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},Xy=eb(tL),Cf=G2(Xy),Xe=FM(Xy),xa=gV(Xy),nL=n=>{oe.useEffect(()=>{if(!n)return;const e=Na(xa,`/status/${n.uid}`),t=Gn(Xe,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=Na(xa,".info/connected"),c=Yy(l,d=>{if(d.val()===!1){oi(t,{state:"offline",last_changed:uc()});return}oV(e).set(s).then(()=>{Qd(e,a),oi(t,{state:"online",last_changed:uc()})})});return()=>c()},[n])},$y=n=>{const[e,t]=oe.useState(null);return oe.useEffect(()=>{if(!n){t(null);return}const s=Ti(Gn(Xe,"users",n),c=>{c.exists()?t(d=>({...d,...c.data()})):t(null)}),a=Na(xa,`/status/${n}`),l=Yy(a,c=>{const d=c.val();t(p=>({...p,presence:d?.state}))});return()=>{s(),l()}},[n]),e},iL=n=>{const[e,t]=oe.useState(0);return oe.useEffect(()=>{if(!n?.uid)return;const s=Qn(wn(Xe,"friendships"),Gt("users","array-contains",n.uid),Gt("status","==","pending")),a=Ti(s,l=>{const c=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(c.length)});return()=>a()},[n]),e},sL=n=>{const[e,t]=oe.useState(0),[s,a]=oe.useState([]);return oe.useEffect(()=>{if(!n?.uid)return;const l=Qn(wn(Xe,"friendships"),Gt("users","array-contains",n.uid),Gt("status","==","accepted")),c=Ti(l,d=>{const p=d.docs.map(g=>g.data().users.find(v=>v!==n.uid));a(p)});return()=>c()},[n]),oe.useEffect(()=>{if(s.length===0){t(0);return}const l={},c=s.map(d=>{const p=[n.uid,d].sort().join("_"),g=Qn(wn(Xe,`conversations/${p}/messages`),Gt("receiverId","==",n.uid),Gt("status","in",["sent","delivered"]));return Ti(g,v=>{l[p]=v.size;const T=Object.values(l).reduce((S,x)=>S+x,0);t(T)})});return()=>c.forEach(d=>d())},[s,n]),e},rL=n=>{const e=oe.useRef(n);oe.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),oe.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=SI"}),e.current=n},[n])},aL=(n,e)=>{const[t,s]=oe.useState(null);return oe.useEffect(()=>{if(!n||!e)return;const a=Qn(wn(Xe,"friendships"),Gt("users","array-contains",n.uid)),l=Ti(a,c=>{const d=c.docs.find(p=>p.data().users.includes(e.uid));d&&s({id:d.id,...d.data()})});return()=>l()},[n,e]),t},oL=({text:n="Preparando seu bate-papo..."})=>I.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:I.jsxs("div",{className:"p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[I.jsx(Ky,{size:80,className:"text-blue-400 mb-6 mx-auto"}),I.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),I.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center",children:[I.jsx(bC,{className:"animate-spin h-10 w-10 text-blue-400"}),I.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]})]})}),lL=()=>{const n=async()=>{const e=new ws;try{const s=(await e2(Cf,e)).user,a=Gn(Xe,"users",s.uid);(await u1(a)).exists()||await tk(a,{uid:s.uid,displayName:s.displayName,email:s.email,photoURL:s.photoURL,recado:"Olá! Estou usando o ChatD."})}catch(t){console.error("Erro ao fazer login com Google:",t)}};return I.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:I.jsxs("div",{className:"flex flex-col items-center p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[I.jsx(Ky,{size:80,className:"text-blue-400 mb-6 mx-auto"}),I.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),I.jsx("p",{className:"text-gray-300 mb-8 max-w-sm",children:"Uma experiência de mensagens segura e minimalista. Conecte-se para começar."}),I.jsxs("button",{onClick:n,className:"flex items-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",children:[I.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),"Fazer Login com Google"]})]})})},uL=({user:n,onClose:e})=>n?I.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:I.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:t=>t.stopPropagation(),children:[I.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),I.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),I.jsx("p",{className:"text-gray-400 mb-4",children:n.email}),I.jsxs("p",{className:"text-gray-300 italic",children:['"',n.recado||"Sem recado.",'"']}),I.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Fechar"})]})}):null,cL=({user:n,onClose:e})=>{const[t,s]=oe.useState(n.recado||""),a=async()=>{const l=Gn(Xe,"users",n.uid);await oi(l,{recado:t}),e()};return I.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:I.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[I.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),I.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),I.jsx("textarea",{value:t,onChange:l=>s(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Escreva seu recado...",rows:"3"}),I.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[I.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),I.jsx("button",{onClick:a,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},Pw=({isOpen:n,onClose:e,onConfirm:t,title:s,message:a})=>n?I.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:I.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-red-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[I.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:s}),I.jsx("p",{className:"text-gray-400 mb-6",children:a}),I.jsxs("div",{className:"flex justify-center gap-4",children:[I.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),I.jsx("button",{onClick:t,className:"bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Confirmar"})]})]})}):null,Vw=({currentUser:n})=>{const[e,t]=oe.useState(""),[s,a]=oe.useState([]),[l,c]=oe.useState({}),[d,p]=oe.useState(!1),[g,v]=oe.useState(""),[T,S]=oe.useState(""),x=async Q=>{if(Q.preventDefault(),e.trim()!==""){p(!0),v(""),S(""),a([]);try{const G=Qn(wn(Xe,"users"),Gt("email","==",e.trim()),ZM(1)),ue=(await $f(G)).docs.map(he=>he.data())[0];if(ue&&ue.uid!==n.uid){a([ue]);const he=Qn(wn(Xe,"friendships"),Gt("users","array-contains",n.uid)),ye=(await $f(he)).docs.find(Le=>Le.data().users.includes(ue.uid));c({[ue.uid]:ye?ye.data().status:"not_friends"})}else ue&&ue.uid===n.uid?S("Você não pode adicionar a si mesmo."):S("Nenhum usuário encontrado com este e-mail.")}catch(G){v("Erro ao buscar. Verifique os seus índices do Firestore e tente novamente."),console.error(G)}finally{p(!1)}}},j=async Q=>{try{await c1(wn(Xe,"friendships"),{users:[n.uid,Q.uid],status:"pending",requestedBy:n.uid,createdAt:uc()}),c(G=>({...G,[Q.uid]:"pending"}))}catch(G){v("Falha ao enviar pedido."),console.error(G)}};return I.jsxs("div",{className:"p-4",children:[I.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),I.jsxs("form",{onSubmit:x,className:"flex gap-2",children:[I.jsx("input",{type:"email",value:e,onChange:Q=>t(Q.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),I.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?I.jsx(bC,{className:"animate-spin"}):"Buscar"})]}),I.jsxs("div",{className:"mt-4 h-24",children:[g&&I.jsx("p",{className:"text-red-400",children:g}),T&&I.jsx("p",{className:"text-yellow-400",children:T}),s.map(Q=>I.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[I.jsxs("div",{className:"flex items-center gap-3",children:[I.jsx("img",{src:Q.photoURL,alt:Q.displayName,className:"w-10 h-10 rounded-full"}),I.jsx("span",{className:"text-white",children:Q.displayName})]}),I.jsxs("div",{children:[l[Q.uid]==="not_friends"&&I.jsx("button",{onClick:()=>j(Q),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[Q.uid]==="pending"&&I.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[Q.uid]==="accepted"&&I.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"}),l[Q.uid]==="declined"&&I.jsx("span",{className:"text-red-400 text-sm",children:"Recusado"})]})]},Q.uid))]})]})},Lw=({currentUser:n})=>{const[e,t]=oe.useState([]);oe.useEffect(()=>{if(!n?.uid)return;const a=Qn(wn(Xe,"friendships"),Gt("users","array-contains",n.uid),Gt("status","==","pending")),l=Ti(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==n.uid){const v=g.users.find(S=>S!==n.uid),T=await u1(Gn(Xe,"users",v));T.exists()&&d.push({id:p.id,...T.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await oi(Gn(Xe,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return I.jsxs("div",{className:"p-4",children:[I.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?I.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):I.jsx("ul",{className:"space-y-2",children:e.map(a=>I.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[I.jsxs("div",{className:"flex items-center gap-3",children:[I.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),I.jsx("span",{className:"text-white",children:a.displayName})]}),I.jsxs("div",{className:"flex gap-2",children:[I.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:I.jsx(wC,{size:16})}),I.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:I.jsx(AC,{size:16})})]})]},a.id))})]})},hL=({friendship:n,onSelectUser:e})=>{const t=$y(n.friendId);return t?I.jsx("li",{onClick:()=>e(t),className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200",children:I.jsxs("div",{className:"flex items-center gap-4 relative",children:[I.jsx("img",{src:t.photoURL,alt:t.displayName,className:"w-12 h-12 rounded-full"}),I.jsx("span",{className:"font-semibold text-white text-lg",children:t.displayName})]})}):I.jsx("div",{className:"p-4 h-[69px] bg-gray-800 animate-pulse"})},Uw=({currentUser:n,onSelectUser:e})=>{const[t,s]=oe.useState([]);return oe.useEffect(()=>{if(!n?.uid)return;const a=Qn(wn(Xe,"friendships"),Gt("users","array-contains",n.uid),Gt("status","==","accepted")),l=Ti(a,c=>{const d=c.docs.map(p=>({id:p.id,...p.data(),friendId:p.data().users.find(g=>g!==n.uid)}));s(d)});return()=>l()},[n.uid]),I.jsxs("div",{className:"flex-grow overflow-y-auto",children:[I.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Todos os Contatos"}),t.length===0?I.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):I.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(a=>I.jsx(hL,{friendship:a,onSelectUser:e},a.id))})]})},jw=({currentUser:n,onSelectUser:e})=>{const[t,s]=oe.useState([]);oe.useEffect(()=>{if(!n?.uid)return;const l=Qn(wn(Xe,"friendships"),Gt("users","array-contains",n.uid),Gt("status","==","accepted")),c=Ti(l,d=>{const p=d.docs.map(g=>({id:g.id,...g.data(),friendId:g.data().users.find(v=>v!==n.uid)})).filter(g=>!g.chatDeletedFor?.includes(n.uid));p.sort((g,v)=>{const T=g.pinnedBy?.includes(n.uid),S=v.pinnedBy?.includes(n.uid);return T&&!S?-1:!T&&S?1:0}),s(p)});return()=>c()},[n.uid]);const a=async(l,c)=>{const d=Gn(Xe,"friendships",l);c?await oi(d,{pinnedBy:f1(n.uid)}):await oi(d,{pinnedBy:bf(n.uid)})};return I.jsxs("div",{className:"flex-grow overflow-y-auto",children:[I.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Conversas"}),t.length===0?I.jsx("p",{className:"text-gray-400 text-center px-4",children:"Nenhuma conversa encontrada."}):I.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(l=>I.jsx(fL,{friendship:l,currentUser:n,onSelectUser:e,onTogglePin:a},l.id))})]})},fL=({friendship:n,currentUser:e,onSelectUser:t,onTogglePin:s})=>{const a=$y(n.friendId),[l,c]=oe.useState(0),d=n.pinnedBy?.includes(e.uid);if(oe.useEffect(()=>{if(!n.friendId||!e)return;const g=[e.uid,n.friendId].sort().join("_"),v=Qn(wn(Xe,`conversations/${g}/messages`),Gt("receiverId","==",e.uid),Gt("status","in",["sent","delivered"])),T=Ti(v,S=>c(S.size));return()=>T()},[n.friendId,e]),!a||!a.uid)return I.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const p=g=>{if(!g||typeof g.seconds!="number")return"Offline";const v=new Date(g.seconds*1e3),T=new Date,S=new Date(T.getFullYear(),T.getMonth(),T.getDate()),x=new Date(T.getFullYear(),T.getMonth(),T.getDate()-1),j={hour:"2-digit",minute:"2-digit"},Q=v.toLocaleTimeString("pt-BR",j);if(v>=S)return`Visto por último hoje às ${Q}`;if(v>=x)return`Visto por último ontem às ${Q}`;const G={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${v.toLocaleDateString("pt-BR",G)}`};return I.jsxs("li",{onClick:()=>t(a),className:`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${d?"bg-gray-700/30":""}`,children:[I.jsxs("div",{className:"flex items-center gap-4 relative flex-grow",children:[I.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-12 h-12 rounded-full"}),I.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${a.presence==="online"?"bg-green-500":"bg-gray-500"}`}),I.jsxs("div",{children:[I.jsx("span",{className:"font-semibold text-white text-lg",children:a.displayName}),I.jsx("p",{className:"text-sm text-gray-400",children:a.presence==="online"?"Online":p(a.last_changed)})]})]}),I.jsxs("div",{className:"flex items-center gap-2",children:[l>0&&I.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:l}),I.jsx("button",{onClick:g=>{g.stopPropagation(),s(n.id,d)},className:"p-2 rounded-full hover:bg-gray-600",children:d?I.jsx(zV,{size:18,className:"text-blue-400"}):I.jsx(BV,{size:18,className:"text-gray-500"})})]})]})},dL=({msg:n,isCurrentUser:e,onReply:t,onDelete:s,onEdit:a})=>{const[l,c]=oe.useState(!1),d=oe.useRef(null),p=oe.useRef();oe.useEffect(()=>{const x=j=>{d.current&&!d.current.contains(j.target)&&c(!1)};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]);const g=()=>{e&&c(!0)},v=()=>{p.current=setTimeout(g,500)},T=()=>{clearTimeout(p.current)},S=({msg:x})=>{if(!e||!x.status)return null;const j=x.status==="read";return I.jsx(IV,{size:16,className:j?"text-blue-400":"text-gray-500"})};return I.jsxs("div",{className:`w-full flex items-center gap-2 group ${e?"justify-end":"justify-start"}`,children:[!e&&I.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:I.jsx(Nw,{size:16})}),I.jsxs("div",{className:"relative",ref:d,onTouchStart:v,onTouchEnd:T,onContextMenu:x=>{x.preventDefault(),e&&c(!0)},children:[I.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${n.isDeleted?"bg-gray-700/50 italic text-gray-400":e?"bg-blue-600 text-white":"bg-gray-700 text-white"} ${e?"rounded-br-none":"rounded-bl-none"}`,children:[n.replyTo&&!n.isDeleted&&I.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[I.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),I.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),I.jsx("p",{className:"break-words",children:n.isDeleted?"Esta mensagem foi apagada":n.text}),!n.isDeleted&&I.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[n.edited&&I.jsx("span",{className:"text-xs opacity-60 mr-1",children:"(editado)"}),I.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),I.jsx(S,{msg:n})]})]}),l&&e&&I.jsxs("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:[I.jsxs("button",{onClick:()=>{a(),c(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[I.jsx(KV,{size:14})," Editar"]}),I.jsxs("button",{onClick:()=>{s("self"),c(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[I.jsx(Ow,{size:14})," Apagar para mim"]}),I.jsxs("button",{onClick:()=>{s("all"),c(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[I.jsx(Ow,{size:14})," Apagar para todos"]})]})]}),e&&I.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:I.jsx(Nw,{size:16})})]})},mL=({onEmojiSelect:n,onClose:e})=>{const t=oe.useRef(null);oe.useEffect(()=>{const a=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e]);const s=["😂","❤️","🤣","👍","😭","🙏","😘","🥰","😍","😊","🎉","😅","😎","💕","😋","😏","😜","🤔","😆","💪","👏","💖","😢","😇","😍‍🔥","🥳","🌹","✨","🔥","💯","🤗","😚","🥺","👀","💔","💜","😴","😈","🤩","😒"];return I.jsx("div",{ref:t,className:"absolute bottom-full mb-2 w-72 h-auto max-h-60 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col emoji-picker",children:I.jsx("div",{className:"p-2 overflow-y-auto",children:I.jsx("div",{className:"grid grid-cols-8 gap-1",children:s.map(a=>I.jsx("button",{onClick:()=>n(a),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:a},a))})})})},zw=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=oe.useState([]),[l,c]=oe.useState(""),[d,p]=oe.useState(!1),[g,v]=oe.useState(!1),[T,S]=oe.useState(null),[x,j]=oe.useState(null),[Q,G]=oe.useState(!1),[ge,ue]=oe.useState(!1),[he,Ve]=oe.useState(!1),[ye,Le]=oe.useState(null),P=oe.useRef(null),A=oe.useRef(null),C=[n.uid,e.uid].sort().join("_"),M=$y(e.uid),k=oe.useRef(),V=aL(n,e);oe.useEffect(()=>{k.current=M?.presence},[M?.presence]),oe.useEffect(()=>{if(k.current!=="online"&&M?.presence==="online"){const Y=Qn(wn(Xe,`conversations/${C}/messages`),Gt("receiverId","==",n.uid),Gt("status","==","sent"));$f(Y).then(re=>{const _e=fg(Xe);re.docs.forEach(me=>_e.update(me.ref,{status:"delivered"})),_e.commit()})}},[M?.presence,C,n.uid]),oe.useEffect(()=>{const Y=`conversations/${C}/messages`,re=Qn(wn(Xe,Y),WM("createdAt","asc")),_e=Ti(re,me=>{const It=me.docs.map(jt=>({id:jt.id,...jt.data()})).filter(jt=>!jt.deletedFor?.includes(n.uid));a(It);const We=fg(Xe);me.docs.forEach(jt=>{jt.data().receiverId===n.uid&&jt.data().status!=="read"&&We.update(jt.ref,{status:"read"})}),We.commit()});return()=>_e()},[C,n.uid]),oe.useEffect(()=>{const Y=Na(xa,`typing/${C}/${e.uid}`),re=Yy(Y,_e=>p(_e.exists()));return()=>re()},[C,e.uid]),oe.useEffect(()=>{P.current?.scrollIntoView({behavior:"smooth"})},[s]);const N=Y=>{c(Y.target.value);const re=Na(xa,`typing/${C}/${n.uid}`);Y.target.value.trim().length>0?(Qd(re,!0),A.current&&clearTimeout(A.current),A.current=setTimeout(()=>Eg(re),3e3)):Eg(re)},Ut=async Y=>{if(Y.preventDefault(),l.trim()===""||V?.blockedBy?.includes(n.uid))return;const re=l;c(""),Eg(Na(xa,`typing/${C}/${n.uid}`)),A.current&&clearTimeout(A.current);const _e={text:re,createdAt:uc(),senderId:n.uid,receiverId:e.uid,status:M?.presence==="online"?"delivered":"sent"};T&&(_e.replyTo={id:T.id,text:T.text,senderName:T.senderId===n.uid?"Você":e.displayName});try{await c1(wn(Xe,`conversations/${C}/messages`),_e),S(null)}catch(me){console.error("Falha ao enviar mensagem:",me),c(re)}},dt=async Y=>{if(Y.preventDefault(),!x||l.trim()==="")return;const re=Gn(Xe,`conversations/${C}/messages`,x.id);await oi(re,{text:l,edited:!0}),j(null),c("")},K=async()=>{if(!ye)return;const{id:Y,type:re}=ye,_e=Gn(Xe,`conversations/${C}/messages`,Y);re==="self"?await oi(_e,{deletedFor:bf(n.uid)}):re==="all"&&await oi(_e,{text:"",isDeleted:!0,replyTo:null}),Le(null)},se=async()=>{const Y=Qn(wn(Xe,`conversations/${C}/messages`)),re=await $f(Y),_e=fg(Xe);re.docs.forEach(me=>{_e.update(me.ref,{deletedFor:bf(n.uid)})}),await _e.commit(),Ve(!1)},fe=async()=>{if(!V)return;const Y=Gn(Xe,"friendships",V.id);V.blockedBy?.includes(n.uid)?await oi(Y,{blockedBy:f1(n.uid)}):await oi(Y,{blockedBy:bf(n.uid)}),ue(!1)},He=Y=>{j(Y),c(Y.text),S(null)},D=()=>{j(null),c("")},ee=V?.blockedBy?.includes(n.uid),ie=V?.blockedBy?.includes(e.uid);return I.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[I.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md",children:[I.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:I.jsx(AV,{size:24})}),I.jsxs("div",{className:"flex items-center cursor-pointer flex-grow",onClick:()=>v(!0),children:[I.jsx("img",{src:e.photoURL,alt:e.displayName,className:"w-10 h-10 rounded-full mr-4"}),I.jsxs("div",{children:[I.jsx("h2",{className:"text-xl font-bold text-white",children:e.displayName}),I.jsx("p",{className:"text-sm text-blue-300 h-4",children:d?"Digitando...":M?.presence==="online"?"Online":""})]})]}),I.jsxs("div",{className:"relative",children:[I.jsx("button",{onClick:()=>ue(Y=>!Y),className:"p-2 text-gray-400 hover:text-white",children:I.jsx(OV,{})}),ge&&I.jsxs("div",{className:"absolute top-full right-0 mt-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:[I.jsxs("button",{onClick:()=>{Ve(!0),ue(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[I.jsx(kV,{size:14})," Limpar conversa"]}),I.jsxs("button",{onClick:fe,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[I.jsx(ZV,{size:14})," ",ee?"Desbloquear":"Bloquear"]})]})]})]}),I.jsxs("main",{className:"flex-grow p-4 overflow-y-auto chat-main",children:[I.jsx("div",{className:"space-y-1",children:s.map(Y=>I.jsx(dL,{msg:Y,isCurrentUser:Y.senderId===n.uid,onReply:()=>S(Y),onDelete:re=>Le({id:Y.id,type:re}),onEdit:()=>He(Y)},Y.id))}),I.jsx("div",{ref:P})]}),I.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:[(T||x)&&I.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative",children:[I.jsxs("div",{className:"flex justify-between items-center text-sm",children:[I.jsx("p",{className:"font-bold",children:x?"Editando mensagem":`Respondendo a ${T.senderId===n.uid?"Você":e.displayName}`}),I.jsx("button",{onClick:x?D:()=>S(null),className:"p-1",children:I.jsx(AC,{size:16})})]}),I.jsx("p",{className:"text-xs text-gray-400 truncate",children:x?x.text:T.text})]}),I.jsxs("div",{className:"relative flex items-center gap-2",children:[Q&&I.jsx(mL,{onEmojiSelect:Y=>c(re=>re+Y),onClose:()=>G(!1)}),I.jsx("button",{type:"button",onClick:()=>G(Y=>!Y),className:"p-2 text-gray-400 hover:text-white",children:I.jsx(QV,{})}),I.jsxs("form",{onSubmit:x?dt:Ut,className:"flex-grow flex items-center gap-2",children:[I.jsx("input",{type:"text",value:l,onChange:N,placeholder:ie?"Você não pode responder a esta conversa":"Digite sua mensagem...",disabled:ie,className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"}),I.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim()||ie,children:x?I.jsx(wC,{size:20}):I.jsx(HV,{size:20})})]})]})]}),g&&I.jsx(uL,{user:e,onClose:()=>v(!1)}),I.jsx(Pw,{isOpen:he,onClose:()=>Ve(!1),onConfirm:se,title:"Limpar Conversa?",message:"Isso irá apagar todas as mensagens desta conversa apenas para você. Esta ação não pode ser desfeita."}),I.jsx(Pw,{isOpen:!!ye,onClose:()=>Le(null),onConfirm:K,title:"Apagar Mensagem?",message:`Você tem certeza que quer apagar esta mensagem ${ye?.type==="all"?"para todos":"para você"}?`})]})},pL=({user:n,onLogout:e})=>{const[t,s]=oe.useState(null),[a,l]=oe.useState("chats"),[c,d]=oe.useState("list"),[p,g]=oe.useState(!1),v=iL(n),T=sL(n);rL(T),oe.useEffect(()=>{d(t?"chat":"list")},[t]);const S=G=>{s(G)},x=()=>{s(null)},j=({count:G})=>G===0?null:I.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:G}),Q=({count:G})=>G===0?null:I.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[I.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),I.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]});return I.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[p&&I.jsx(cL,{user:n,onClose:()=>g(!1)}),I.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[I.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[I.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[I.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),I.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),I.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:I.jsx(xw,{size:20})})]}),I.jsxs("div",{className:"flex border-b border-gray-700/50",children:[I.jsxs("button",{onClick:()=>l("chats"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="chats"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[I.jsx(Dw,{className:"mx-auto"}),I.jsx(Q,{count:T})]}),I.jsx("button",{onClick:()=>l("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:I.jsx(kw,{className:"mx-auto"})}),I.jsx("button",{onClick:()=>l("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:I.jsx(Mw,{className:"mx-auto"})}),I.jsxs("button",{onClick:()=>l("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[I.jsx(Iw,{className:"mx-auto"}),I.jsx(j,{count:v})]})]}),I.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="chats"&&I.jsx(jw,{currentUser:n,onSelectUser:S}),a==="contacts"&&I.jsx(Uw,{currentUser:n,onSelectUser:S}),a==="add"&&I.jsx(Vw,{currentUser:n}),a==="requests"&&I.jsx(Lw,{currentUser:n})]})]}),I.jsx("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:c==="list"?I.jsxs(I.Fragment,{children:[I.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[I.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[I.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),I.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),I.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:I.jsx(xw,{size:20})})]}),I.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="chats"&&I.jsx(jw,{currentUser:n,onSelectUser:S}),a==="contacts"&&I.jsx(Uw,{currentUser:n,onSelectUser:S}),a==="add"&&I.jsx(Vw,{currentUser:n}),a==="requests"&&I.jsx(Lw,{currentUser:n})]}),I.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[I.jsxs("button",{onClick:()=>l("chats"),className:`relative p-3 rounded-lg ${a==="chats"?"text-blue-500":"text-gray-400"}`,children:[I.jsx(Dw,{}),I.jsx(Q,{count:T})]}),I.jsx("button",{onClick:()=>l("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:I.jsx(kw,{})}),I.jsx("button",{onClick:()=>l("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:I.jsx(Mw,{})}),I.jsxs("button",{onClick:()=>l("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[I.jsx(Iw,{}),I.jsx(j,{count:v})]})]})]}):I.jsx(zw,{currentUser:n,otherUser:t,onLeave:x})}),I.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:t?I.jsx(zw,{currentUser:n,otherUser:t,onLeave:x}):I.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[I.jsx(Ky,{size:60,className:"mb-4"}),I.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione uma conversa"}),I.jsx("p",{children:"Escolha alguém da sua lista para iniciar uma conversa."})]})})]})};function gL(){return I.jsxs(I.Fragment,{children:[I.jsx("style",{children:`
                .emoji-picker-header::-webkit-scrollbar, .chat-main::-webkit-scrollbar, .emoji-picker .overflow-y-auto::-webkit-scrollbar {
                    display: none;
                }
                .emoji-picker-header, .chat-main, .emoji-picker .overflow-y-auto {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}),I.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:I.jsx(_L,{})})]})}const _L=()=>{const[n,e]=oe.useState(null),[t,s]=oe.useState(!0),[a,l]=oe.useState(null);nL(n),oe.useEffect(()=>{const d=Mx(Cf,async p=>{if(p)e(p);else try{typeof __initial_auth_token<"u"&&__initial_auth_token?await xx(Cf,__initial_auth_token):e(null)}catch(g){console.error("Falha na autenticação automática, mostrando tela de login.",g),e(null)}s(!1)});return()=>d()},[]),oe.useEffect(()=>{if(!n){l(null);return}const d=Gn(Xe,"users",n.uid),p=Ti(d,g=>{g.exists()&&l({...n,...g.data()})});return()=>p()},[n]);const c=async()=>{if(n)try{const d=Na(xa,`/status/${n.uid}`);await Qd(d,{state:"offline",last_changed:Date.now()}),await oi(Gn(Xe,`/users/${n.uid}`),{state:"offline",last_changed:uc()}),await kx(Cf),e(null)}catch(d){console.error("Erro ao fazer logout:",d)}};return t?I.jsx(oL,{}):a?I.jsx(pL,{user:a,onLogout:c}):I.jsx(lL,{})};rI.createRoot(document.getElementById("root")).render(I.jsx(oe.StrictMode,{children:I.jsx(gL,{})}));
