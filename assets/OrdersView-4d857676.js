import{Y as f,x as V,A as h,a0 as l,a2 as k,a3 as t,ab as y,c as o,a8 as b,aa as c,an as d,a1 as i,a6 as w,a5 as x}from"./index-5b5c431a.js";import{V as A}from"./VContainer-cc2120fe.js";import{V as u}from"./VCol-e5039cc5.js";import{V as g}from"./VDataTable-f3840a2e.js";import{V as B}from"./VRow-3b5bff26.js";import"./VList-139f26da.js";import"./VDivider-ca637ede.js";const C=d("h1",null,"訂單",-1),F={__name:"OrdersView",setup(v){const{apiAuth:m}=y(),p=f(),n=V([]),_=[{title:"訂單編號",key:"_id"},{title:"日期",key:"createdAt"},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:a=>a.cart.reduce((r,e)=>r+e.quantity*e.product.price,0)}];return h(async()=>{var a,r;try{const{data:e}=await m.get("/orders");n.value.push(...e.result)}catch(e){const s=((r=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";p({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(a,r)=>(l(),k(A,null,{default:t(()=>[o(B,null,{default:t(()=>[o(u,{cols:"12"},{default:t(()=>[C]),_:1}),o(u,{cols:"12"},{default:t(()=>[o(g,{items:n.value,headers:_},{"item.createdAt":t(({item:e})=>[b(c(new Date(e.createdAt).toLocaleString()),1)]),"item.cart":t(({item:e})=>[d("ul",null,[(l(!0),i(x,null,w(e.cart,s=>(l(),i("li",{key:s._id},c(s.product.name)+" * "+c(s.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};export{F as default};
