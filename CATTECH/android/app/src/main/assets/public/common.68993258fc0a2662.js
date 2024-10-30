"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(b,h,i)=>{i.d(h,{c:()=>o});var v=i(4261),a=i(1086),c=i(8607);const o=(e,r)=>{let n,t;const m=(l,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(l,p);E&&r(E)&&!E.disabled?E!==n&&(s(),_(E,w)):s()},_=(l,p)=>{n=l,t||(t=n);const w=n;(0,v.w)(()=>w.classList.add("ion-activated")),p()},s=(l=!1)=>{if(!n)return;const p=n;(0,v.w)(()=>p.classList.remove("ion-activated")),l&&t!==n&&n.click(),n=void 0};return(0,c.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>m(l.currentX,l.currentY,a.a),onMove:l=>m(l.currentX,l.currentY,a.b),onEnd:()=>{s(!0),(0,a.h)(),t=void 0}})}},8438:(b,h,i)=>{i.d(h,{g:()=>a});var v=i(8476);const a=()=>{if(void 0!==v.w)return v.w.Capacitor}},5572:(b,h,i)=>{i.d(h,{c:()=>v,i:()=>a});const v=(c,o,e)=>"function"==typeof e?e(c,o):"string"==typeof e?c[e]===o[e]:Array.isArray(o)?o.includes(c):c===o,a=(c,o,e)=>void 0!==c&&(Array.isArray(c)?c.some(r=>v(r,o,e)):v(c,o,e))},5083:(b,h,i)=>{i.d(h,{i:()=>v});const v=a=>a&&""!==a.dir?"rtl"===a.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(b,h,i)=>{i.r(h),i.d(h,{startFocusVisible:()=>o});const v="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],o=e=>{let r=[],n=!0;const t=e?e.shadowRoot:document,m=e||document.body,_=y=>{r.forEach(u=>u.classList.remove(v)),y.forEach(u=>u.classList.add(v)),r=y},s=()=>{n=!1,_([])},l=y=>{n=c.includes(y.key),n||_([])},p=y=>{if(n&&void 0!==y.composedPath){const u=y.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));_(u)}},w=()=>{t.activeElement===m&&_([])};return t.addEventListener("keydown",l),t.addEventListener("focusin",p),t.addEventListener("focusout",w),t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("mousedown",s),{destroy:()=>{t.removeEventListener("keydown",l),t.removeEventListener("focusin",p),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",s),t.removeEventListener("mousedown",s)},setFocus:_}}},1086:(b,h,i)=>{i.d(h,{I:()=>a,a:()=>n,b:()=>t,c:()=>r,d:()=>_,h:()=>m});var v=i(8438),a=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(a||{});const o={getEngine(){const s=(0,v.g)();if(null!=s&&s.isPluginAvailable("Haptics"))return s.Plugins.Haptics},available(){if(!this.getEngine())return!1;const l=(0,v.g)();return"web"!==(null==l?void 0:l.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(s){const l=this.getEngine();l&&l.impact({style:s.style})},notification(s){const l=this.getEngine();l&&l.notification({type:s.type})},selection(){this.impact({style:a.Light})},selectionStart(){const s=this.getEngine();s&&s.selectionStart()},selectionChanged(){const s=this.getEngine();s&&s.selectionChanged()},selectionEnd(){const s=this.getEngine();s&&s.selectionEnd()}},e=()=>o.available(),r=()=>{e()&&o.selection()},n=()=>{e()&&o.selectionStart()},t=()=>{e()&&o.selectionChanged()},m=()=>{e()&&o.selectionEnd()},_=s=>{e()&&o.impact(s)}},909:(b,h,i)=>{i.d(h,{I:()=>r,a:()=>_,b:()=>e,c:()=>p,d:()=>E,f:()=>s,g:()=>m,i:()=>t,p:()=>w,r:()=>y,s:()=>l});var v=i(467),a=i(4920),c=i(4929);const e="ion-content",r=".ion-content-scroll-host",n=`${e}, ${r}`,t=u=>"ION-CONTENT"===u.tagName,m=function(){var u=(0,v.A)(function*(f){return t(f)?(yield new Promise(g=>(0,a.c)(f,g)),f.getScrollElement()):f});return function(g){return u.apply(this,arguments)}}(),_=u=>u.querySelector(r)||u.querySelector(n),s=u=>u.closest(n),l=(u,f)=>t(u)?u.scrollToTop(f):Promise.resolve(u.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),p=(u,f,g,M)=>t(u)?u.scrollByPoint(f,g,M):Promise.resolve(u.scrollBy({top:g,left:f,behavior:M>0?"smooth":"auto"})),w=u=>(0,c.b)(u,e),E=u=>{if(t(u)){const g=u.scrollY;return u.scrollY=!1,g}return u.style.setProperty("overflow","hidden"),!0},y=(u,f)=>{t(u)?u.scrollY=f:u.style.removeProperty("overflow")}},3992:(b,h,i)=>{i.d(h,{a:()=>v,b:()=>p,c:()=>n,d:()=>w,e:()=>D,f:()=>r,g:()=>E,h:()=>c,i:()=>a,j:()=>d,k:()=>C,l:()=>t,m:()=>s,n:()=>y,o:()=>_,p:()=>e,q:()=>o,r:()=>O,s:()=>L,t:()=>l,u:()=>g,v:()=>M,w:()=>m,x:()=>u,y:()=>f});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(b,h,i)=>{i.d(h,{c:()=>o,g:()=>e});var v=i(8476),a=i(4920),c=i(4929);const o=(n,t,m)=>{let _,s;if(void 0!==v.w&&"MutationObserver"in v.w){const E=Array.isArray(t)?t:[t];_=new MutationObserver(y=>{for(const u of y)for(const f of u.addedNodes)if(f.nodeType===Node.ELEMENT_NODE&&E.includes(f.slot))return m(),void(0,a.r)(()=>l(f))}),_.observe(n,{childList:!0,subtree:!0})}const l=E=>{var y;s&&(s.disconnect(),s=void 0),s=new MutationObserver(u=>{m();for(const f of u)for(const g of f.removedNodes)g.nodeType===Node.ELEMENT_NODE&&g.slot===t&&w()}),s.observe(null!==(y=E.parentElement)&&void 0!==y?y:E,{subtree:!0,childList:!0})},w=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{_&&(_.disconnect(),_=void 0),w()}}},e=(n,t,m)=>{const _=null==n?0:n.toString().length,s=r(_,t);if(void 0===m)return s;try{return m(_,t)}catch(l){return(0,c.a)("Exception in provided `counterFormatter`.",l),s}},r=(n,t)=>`${n} / ${t}`},1622:(b,h,i)=>{i.r(h),i.d(h,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>O,keyboardDidClose:()=>u,keyboardDidOpen:()=>E,keyboardDidResize:()=>y,resetKeyboardAssist:()=>_,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>s,trackViewportChanges:()=>M});var v=i(4379);i(8438),i(8476);const o="ionKeyboardDidShow",e="ionKeyboardDidHide";let n={},t={},m=!1;const _=()=>{n={},t={},m=!1},s=d=>{if(v.K.getEngine())l(d);else{if(!d.visualViewport)return;t=O(d.visualViewport),d.visualViewport.onresize=()=>{M(d),E()||y(d)?p(d):u(d)&&w(d)}}},l=d=>{d.addEventListener("keyboardDidShow",C=>p(d,C)),d.addEventListener("keyboardDidHide",()=>w(d))},p=(d,C)=>{f(d,C),m=!0},w=d=>{g(d),m=!1},E=()=>!m&&n.width===t.width&&(n.height-t.height)*t.scale>150,y=d=>m&&!u(d),u=d=>m&&t.height===d.innerHeight,f=(d,C)=>{const D=new CustomEvent(o,{detail:{keyboardHeight:C?C.keyboardHeight:d.innerHeight-t.height}});d.dispatchEvent(D)},g=d=>{const C=new CustomEvent(e);d.dispatchEvent(C)},M=d=>{n=Object.assign({},t),t=O(d.visualViewport)},O=d=>({width:Math.round(d.width),height:Math.round(d.height),offsetTop:d.offsetTop,offsetLeft:d.offsetLeft,pageTop:d.pageTop,pageLeft:d.pageLeft,scale:d.scale})},4379:(b,h,i)=>{i.d(h,{K:()=>o,a:()=>c});var v=i(8438),a=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(a||{}),c=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(c||{});const o={getEngine(){const e=(0,v.g)();if(null!=e&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return null!=e&&e.getResizeMode?e.getResizeMode().catch(r=>{if(r.code!==a.Unimplemented)throw r}):Promise.resolve(void 0)}}},4731:(b,h,i)=>{i.d(h,{c:()=>r});var v=i(467),a=i(8476),c=i(4379);const o=n=>{if(void 0===a.d||n===c.a.None||void 0===n)return null;const t=a.d.querySelector("ion-app");return null!=t?t:a.d.body},e=n=>{const t=o(n);return null===t?0:t.clientHeight},r=function(){var n=(0,v.A)(function*(t){let m,_,s,l;const p=function(){var f=(0,v.A)(function*(){const g=yield c.K.getResizeMode(),M=void 0===g?void 0:g.mode;m=()=>{void 0===l&&(l=e(M)),s=!0,w(s,M)},_=()=>{s=!1,w(s,M)},null==a.w||a.w.addEventListener("keyboardWillShow",m),null==a.w||a.w.addEventListener("keyboardWillHide",_)});return function(){return f.apply(this,arguments)}}(),w=(f,g)=>{t&&t(f,E(g))},E=f=>{if(0===l||l===e(f))return;const g=o(f);return null!==g?new Promise(M=>{const d=new ResizeObserver(()=>{g.clientHeight===l&&(d.disconnect(),M())});d.observe(g)}):void 0};return yield p(),{init:p,destroy:()=>{null==a.w||a.w.removeEventListener("keyboardWillShow",m),null==a.w||a.w.removeEventListener("keyboardWillHide",_),m=_=void 0},isKeyboardVisible:()=>s}});return function(m){return n.apply(this,arguments)}}()},7838:(b,h,i)=>{i.d(h,{c:()=>a});var v=i(467);const a=()=>{let c;return{lock:function(){var e=(0,v.A)(function*(){const r=c;let n;return c=new Promise(t=>n=t),void 0!==r&&(yield r),n});return function(){return e.apply(this,arguments)}}()}}},9001:(b,h,i)=>{i.d(h,{c:()=>c});var v=i(8476),a=i(4920);const c=(o,e,r)=>{let n;const t=()=>!(void 0===e()||void 0!==o.label||null===r()),_=()=>{const l=e();if(void 0===l)return;if(!t())return void l.style.removeProperty("width");const p=r().scrollWidth;if(0===p&&null===l.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==n)return;const w=n=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(_(),w.disconnect(),n=void 0)},{threshold:.01,root:o});w.observe(l)}else l.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{t()&&(0,a.r)(()=>{_()})},destroy:()=>{n&&(n.disconnect(),n=void 0)}}}},7895:(b,h,i)=>{i.d(h,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(c,o,e)=>{const r=c*o/e-c+"ms",n=2*Math.PI*o/e;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(c,o,e)=>{const r=o/e,n=c*r-c+"ms",t=2*Math.PI*r;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,o)=>({r:6,style:{left:32-32*o+"%","animation-delay":-110*o+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,o,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*o+(o<e/2?180:-180)}deg)`,"animation-delay":c*o/e-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,o,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*o+(o<e/2?180:-180)}deg)`,"animation-delay":c*o/e-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,o,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":c*o/e-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,o,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":c*o/e-c+"ms"}})}}},7166:(b,h,i)=>{i.r(h),i.d(h,{createSwipeBackGesture:()=>e});var v=i(4920),a=i(5083),c=i(8607);i(1970);const e=(r,n,t,m,_)=>{const s=r.ownerDocument.defaultView;let l=(0,a.i)(r);const w=g=>l?-g.deltaX:g.deltaX;return(0,c.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:g=>(l=(0,a.i)(r),(g=>{const{startX:O}=g;return l?O>=s.innerWidth-50:O<=50})(g)&&n()),onStart:t,onMove:g=>{const O=w(g)/s.innerWidth;m(O)},onEnd:g=>{const M=w(g),O=s.innerWidth,d=M/O,C=(g=>l?-g.velocityX:g.velocityX)(g),D=C>=0&&(C>.2||M>O/2),P=(D?1-d:d)*O;let x=0;if(P>5){const A=P/Math.abs(C);x=Math.min(A,540)}_(D,d<=0?.01:(0,v.j)(0,d,.9999),x)}})}},2935:(b,h,i)=>{i.d(h,{w:()=>v});const v=(o,e,r)=>{if(typeof MutationObserver>"u")return;const n=new MutationObserver(t=>{r(a(t,e))});return n.observe(o,{childList:!0,subtree:!0}),n},a=(o,e)=>{let r;return o.forEach(n=>{for(let t=0;t<n.addedNodes.length;t++)r=c(n.addedNodes[t],e)||r}),r},c=(o,e)=>{if(1!==o.nodeType)return;const r=o;return(r.tagName===e.toUpperCase()?[r]:Array.from(r.querySelectorAll(e))).find(t=>t.value===r.value)}},3839:(b,h,i)=>{i.d(h,{o:()=>a});var v=i(3953);let a=(()=>{var c;class o{constructor(){this.cards=[{title:"Mantenci\xf3n",subtitle:"04/09/2024",content:"Listo",color:"success"},{title:"Reparaci\xf3n",subtitle:"03/09/2024",content:"trabajando",color:"danger"},{title:"Revici\xf3n",subtitle:"02/09/2024",content:"problemas",color:"primary"},{title:"reciclaje",subtitle:"01/09/2024",content:"Listo",color:"success"},{title:"Mantenci\xf3n",subtitle:"31/08/2024",content:"Listo",color:"success"},{title:"Mantenci\xf3n",subtitle:"30/08/2024",content:"Listo",color:"success"},{title:"Mantenci\xf3n",subtitle:"29/08/2024",content:"Listo",color:"success"},{title:"Mantenci\xf3n",subtitle:"28/08/2024",content:"Listo",color:"success"},{title:"Mantenci\xf3n",subtitle:"27/08/2024",content:"Listo",color:"success"},{title:"Mantenci\xf3n",subtitle:"26/08/2024",content:"Listo",color:"success"},{title:"Mantenci\xf3n",subtitle:"25/08/2024",content:"Listo",color:"success"}],this.devices=[{device:"Laptop",brand:"Dell",model:"XPS 13",date:"04/09/2024"},{device:"Smartphone",brand:"Apple",model:"iPhone 14",date:"04/09/2024"},{device:"Tablet",brand:"Samsung",model:"Galaxy Tab S8",date:"02/09/2024"},{device:"Laptop",brand:"HP",model:"Spectre x360",date:"02/09/2024"},{device:"Smartphone",brand:"Google",model:"Pixel 7",date:"31/08/2024"},{device:"Smartwatch",brand:"Apple",model:"Apple Watch Series 8",date:"30/08/2024"},{device:"Laptop",brand:"Lenovo",model:"ThinkPad X1 Carbon",date:"29/08/2024"},{device:"Smartphone",brand:"Samsung",model:"Galaxy S22",date:"29/08/2024"},{device:"Tablet",brand:"Apple",model:"iPad Pro",date:"27/08/2024"},{device:"Laptop",brand:"Asus",model:"ZenBook 14",date:"27/08/2024"},{device:"Smartphone",brand:"OnePlus",model:"OnePlus 10 Pro",date:"25/08/2024"}]}getCards(){return this.cards}getDevices(){return this.devices}getCardsWithDevices(){return this.cards.map(r=>{const n=this.devices.filter(t=>t.date===r.subtitle);return{card:r,devices:n}})}}return(c=o).\u0275fac=function(r){return new(r||c)},c.\u0275prov=v.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),o})()}}]);