import{s as M,A as Ke,o as f,aY as Ue,aZ as G,aG as j,bN as _,x as P,p as L,D as ne,B as ce,bv as qe,aD as He,bO as We,K as O,m as N,a as $,g as F,t as S,u as R,c as v,r as z,S as ze,w as Qe,T as de,U as Ye,bP as ve,ba as ae,b as fe,b0 as me,bu as ye,d as ge,e as be,bc as Ze,f as he,b8 as pe,b2 as Je,bh as Xe,z as et,l as Se,i as Ce,be as tt,b4 as ke,bw as we,j as Ve,k as Ie,bQ as nt,aL as at,bi as lt,a5 as le,bk as se,W as ie,O as st,G as re,a$ as it,bB as w,aB as Pe,h as rt,q as ut,bq as ot}from"./index-5b5c431a.js";import{V as ct}from"./VDivider-ca637ede.js";function dt(){const e=M(!1);return Ke(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:f(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ue(e)}}const Q=Symbol.for("vuetify:list");function Ae(){const e=G(Q,{hasPrepend:M(!1),updateHasPrepend:()=>null}),l={hasPrepend:M(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return j(Q,l),e}function Le(){return G(Q,null)}const vt={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},Be={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},ft={open:Be.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},Z=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=_(n),e&&!s){const i=Array.from(a.entries()).reduce((r,h)=>{let[y,g]=h;return g==="on"?[...r,y]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},Oe=e=>{const l=Z(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=_(a);const r=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:r})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},mt=e=>{const l=Z(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=_(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},yt=e=>{const l=Oe(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=_(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},gt=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:r}=t;n=_(n);const h=new Map(a),y=[n];for(;y.length;){const u=y.shift();a.set(u,s?"on":"off"),i.has(u)&&y.push(...i.get(u))}let g=r.get(n);for(;g;){const u=i.get(g),o=u.every(c=>a.get(c)==="on"),d=u.every(c=>!a.has(c)||a.get(c)==="off");a.set(g,o?"on":d?"off":"indeterminate"),g=r.get(g)}return e&&!s&&Array.from(a.entries()).reduce((o,d)=>{let[c,m]=d;return m==="on"?[...o,c]:o},[]).length===0?h:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},x=Symbol.for("vuetify:nested"),Me={id:M(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:P(new Set),selected:P(new Map),selectedValues:P([])}},bt=L({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),ht=e=>{let l=!1;const t=P(new Map),n=P(new Map),s=ne(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return yt(e.mandatory);case"leaf":return mt(e.mandatory);case"independent":return Z(e.mandatory);case"single-independent":return Oe(e.mandatory);case"classic":default:return gt(e.mandatory)}}),i=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ft;case"single":return vt;case"multiple":default:return Be}}),r=ne(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));ce(()=>{l=!0});function h(u){const o=[];let d=u;for(;d!=null;)o.unshift(d),d=n.value.get(d);return o}const y=qe("nested"),g={id:M(),root:{opened:s,selected:r,selectedValues:f(()=>{const u=[];for(const[o,d]of r.value.entries())d==="on"&&u.push(o);return u}),register:(u,o,d)=>{o&&u!==o&&n.value.set(u,o),d&&t.value.set(u,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],u])},unregister:u=>{if(l)return;t.value.delete(u);const o=n.value.get(u);if(o){const d=t.value.get(o)??[];t.value.set(o,d.filter(c=>c!==u))}n.value.delete(u),s.value.delete(u)},open:(u,o,d)=>{y.emit("click:open",{id:u,value:o,path:h(u),event:d});const c=i.value.open({id:u,value:o,opened:new Set(s.value),children:t.value,parents:n.value,event:d});c&&(s.value=c)},openOnSelect:(u,o,d)=>{const c=i.value.select({id:u,value:o,selected:new Map(r.value),opened:new Set(s.value),children:t.value,parents:n.value,event:d});c&&(s.value=c)},select:(u,o,d)=>{y.emit("click:select",{id:u,value:o,path:h(u),event:d});const c=a.value.select({id:u,value:o,selected:new Map(r.value),children:t.value,parents:n.value,event:d});c&&(r.value=c),g.root.openOnSelect(u,o,d)},children:t,parents:n}};return j(x,g),g.root},_e=(e,l)=>{const t=G(x,Me),n=Symbol(He()),s=f(()=>e.value!==void 0?e.value:n),a={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:f(()=>t.root.opened.value.has(s.value)),parent:f(()=>t.root.parents.value.get(s.value)),select:(i,r)=>t.root.select(s.value,i,r),isSelected:f(()=>t.root.selected.value.get(_(s.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),ce(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&j(x,a),a},pt=()=>{const e=G(x,Me);j(x,{...e,isGroupActivator:!0})},St=We({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return pt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Ct=L({activeColor:String,baseColor:String,color:String,collapseIcon:{type:O,default:"$collapse"},expandIcon:{type:O,default:"$expand"},prependIcon:O,appendIcon:O,fluid:Boolean,subgroup:Boolean,title:String,value:null,...N(),...$()},"VListGroup"),ue=F()({name:"VListGroup",props:Ct(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=_e(S(e,"value"),!0),i=f(()=>`v-list-group--id-${String(a.value)}`),r=Le(),{isBooted:h}=dt();function y(d){s(!n.value,d)}const g=f(()=>({onClick:y,class:"v-list-group__header",id:i.value})),u=f(()=>n.value?e.collapseIcon:e.expandIcon),o=f(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return R(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&v(z,{defaults:o.value},{default:()=>[v(St,null,{default:()=>[t.activator({props:g.value,isOpen:n.value})]})]}),v(ze,{transition:{component:Qe},disabled:!h.value},{default:()=>{var d;return[de(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(d=t.default)==null?void 0:d.call(t)]),[[Ye,n.value]])]}})]})),{}}});const kt=ve("v-list-item-subtitle"),wt=ve("v-list-item-title"),Vt=L({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:O,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:ae(),onClickOnce:ae(),...fe(),...N(),...me(),...ye(),...ge(),...be(),...Ze(),...$(),...he(),...pe({variant:"text"})},"VListItem"),oe=F()({name:"VListItem",directives:{Ripple:Je},props:Vt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=Xe(e,t),i=f(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:h,isIndeterminate:y,isGroupActivator:g,root:u,parent:o,openOnSelect:d}=_e(i,!1),c=Le(),m=f(()=>{var b;return e.active!==!1&&(e.active||((b=a.isActive)==null?void 0:b.value)||h.value)}),V=f(()=>e.link!==!1&&a.isLink.value),k=f(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!c)),B=f(()=>e.rounded||e.nav),A=f(()=>e.color??e.activeColor),E=f(()=>({color:m.value?A.value??e.baseColor:e.baseColor,variant:e.variant}));et(()=>{var b;return(b=a.isActive)==null?void 0:b.value},b=>{b&&o.value!=null&&u.open(o.value,!0),b&&d(b)},{immediate:!0});const{themeClasses:K}=Se(e),{borderClasses:U}=Ce(e),{colorClasses:q,colorStyles:I,variantClasses:p}=tt(E),{densityClasses:T}=ke(e),{dimensionStyles:De}=we(e),{elevationClasses:Ge}=Ve(e),{roundedClasses:je}=Ie(B),Ne=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),H=f(()=>({isActive:m.value,select:r,isSelected:h.value,isIndeterminate:y.value}));function J(b){var D;s("click",b),!(g||!k.value)&&((D=a.navigate)==null||D.call(a,b),e.value!=null&&r(!h.value,b))}function $e(b){(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),J(b))}return R(()=>{const b=V.value?"a":e.tag,D=n.title||e.title!=null,Re=n.subtitle||e.subtitle!=null,X=!!(e.appendAvatar||e.appendIcon),Ee=!!(X||n.append),ee=!!(e.prependAvatar||e.prependIcon),W=!!(ee||n.prepend);return c==null||c.updateHasPrepend(W),e.activeColor&&nt("active-color",["color","base-color"]),de(v(b,{class:["v-list-item",{"v-list-item--active":m.value,"v-list-item--disabled":e.disabled,"v-list-item--link":k.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!W&&(c==null?void 0:c.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&m.value},K.value,U.value,q.value,T.value,Ge.value,Ne.value,je.value,p.value,e.class],style:[I.value,De.value,e.style],href:a.href.value,tabindex:k.value?c?-2:0:void 0,onClick:J,onKeydown:k.value&&!V.value&&$e},{default:()=>{var te;return[lt(k.value||m.value,"v-list-item"),W&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(z,{key:"prepend-defaults",disabled:!ee,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var C;return[(C=n.prepend)==null?void 0:C.call(n,H.value)]}}):v(le,null,[e.prependAvatar&&v(se,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(ie,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),v("div",{class:"v-list-item__spacer"},null)]),v("div",{class:"v-list-item__content","data-no-activator":""},[D&&v(wt,{key:"title"},{default:()=>{var C;return[((C=n.title)==null?void 0:C.call(n,{title:e.title}))??e.title]}}),Re&&v(kt,{key:"subtitle"},{default:()=>{var C;return[((C=n.subtitle)==null?void 0:C.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(te=n.default)==null?void 0:te.call(n,H.value)]),Ee&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(z,{key:"append-defaults",disabled:!X,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var C;return[(C=n.append)==null?void 0:C.call(n,H.value)]}}):v(le,null,[e.appendIcon&&v(ie,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(se,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),v("div",{class:"v-list-item__spacer"},null)])]}}),[[at("ripple"),k.value&&e.ripple]])}),{}}}),It=L({color:String,inset:Boolean,sticky:Boolean,title:String,...N(),...$()},"VListSubheader"),Pt=F()({name:"VListSubheader",props:It(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=st(S(e,"color"));return R(()=>{const a=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&v("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),At=L({items:Array,returnObject:Boolean},"VListChildren"),xe=F()({name:"VListChildren",props:At(),setup(e,l){let{slots:t}=l;return Ae(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var o,d;let{children:i,props:r,type:h,raw:y}=a;if(h==="divider")return((o=t.divider)==null?void 0:o.call(t,{props:r}))??v(ct,r,null);if(h==="subheader")return((d=t.subheader)==null?void 0:d.call(t,{props:r}))??v(Pt,r,null);const g={subtitle:t.subtitle?c=>{var m;return(m=t.subtitle)==null?void 0:m.call(t,{...c,item:y})}:void 0,prepend:t.prepend?c=>{var m;return(m=t.prepend)==null?void 0:m.call(t,{...c,item:y})}:void 0,append:t.append?c=>{var m;return(m=t.append)==null?void 0:m.call(t,{...c,item:y})}:void 0,title:t.title?c=>{var m;return(m=t.title)==null?void 0:m.call(t,{...c,item:y})}:void 0},u=ue.filterProps(r);return i?v(ue,re({value:r==null?void 0:r.value},u),{activator:c=>{let{props:m}=c;const V={...r,...m,value:e.returnObject?y:r.value};return t.header?t.header({props:V}):v(oe,V,g)},default:()=>v(xe,{items:i},t)}):t.item?t.item({props:r}):v(oe,re(r,{value:e.returnObject?y:r.value}),g)}))}}}),Lt=L({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:it}},"list-items");function Y(e,l){const t=w(l,e.itemTitle,l),n=w(l,e.itemValue,t),s=w(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?Pe(l,["children"]):l:void 0:w(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?Fe(e,s):void 0,raw:l}}function Fe(e,l){const t=[];for(const n of l)t.push(Y(e,n));return t}function Tt(e){const l=f(()=>Fe(e,e.items)),t=f(()=>l.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(i=>i!==null)),a.map(i=>e.returnObject&&typeof i=="string"?Y(e,i):l.value.find(r=>e.valueComparator(i,r.value))||Y(e,i))}function s(a){return e.returnObject?a.map(i=>{let{raw:r}=i;return r}):a.map(i=>{let{value:r}=i;return r})}return{items:l,transformIn:n,transformOut:s}}function Bt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ot(e,l){const t=w(l,e.itemType,"item"),n=Bt(l)?l:w(l,e.itemTitle),s=w(l,e.itemValue,void 0),a=w(l,e.itemChildren),i=e.itemProps===!0?Pe(l,["children"]):w(l,e.itemProps),r={title:n,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?Te(e,a):void 0,raw:l}}function Te(e,l){const t=[];for(const n of l)t.push(Ot(e,n));return t}function Mt(e){return{items:f(()=>Te(e,e.items))}}const _t=L({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...bt({selectStrategy:"single-leaf",openStrategy:"list"}),...fe(),...N(),...me(),...ye(),...ge(),itemType:{type:String,default:"type"},...Lt(),...be(),...$(),...he(),...pe({variant:"text"})},"VList"),Dt=F()({name:"VList",props:_t(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=Mt(e),{themeClasses:s}=Se(e),{backgroundColorClasses:a,backgroundColorStyles:i}=rt(S(e,"bgColor")),{borderClasses:r}=Ce(e),{densityClasses:h}=ke(e),{dimensionStyles:y}=we(e),{elevationClasses:g}=Ve(e),{roundedClasses:u}=Ie(e),{open:o,select:d}=ht(e),c=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),m=S(e,"activeColor"),V=S(e,"baseColor"),k=S(e,"color");Ae(),ut({VListGroup:{activeColor:m,baseColor:V,color:k},VListItem:{activeClass:S(e,"activeClass"),activeColor:m,baseColor:V,color:k,density:S(e,"density"),disabled:S(e,"disabled"),lines:S(e,"lines"),nav:S(e,"nav"),slim:S(e,"slim"),variant:S(e,"variant")}});const B=M(!1),A=P();function E(p){B.value=!0}function K(p){B.value=!1}function U(p){var T;!B.value&&!(p.relatedTarget&&((T=A.value)!=null&&T.contains(p.relatedTarget)))&&I()}function q(p){if(A.value){if(p.key==="ArrowDown")I("next");else if(p.key==="ArrowUp")I("prev");else if(p.key==="Home")I("first");else if(p.key==="End")I("last");else return;p.preventDefault()}}function I(p){if(A.value)return ot(A.value,p)}return R(()=>v(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,a.value,r.value,h.value,g.value,c.value,u.value,e.class],style:[i.value,y.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:E,onFocusout:K,onFocus:U,onKeydown:q},{default:()=>[v(xe,{items:n.value,returnObject:e.returnObject},t)]})),{open:o,select:d,focus:I}}});export{oe as V,wt as a,Dt as b,Tt as c,Lt as m,dt as u};
