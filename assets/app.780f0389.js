import{d as f,h as v,g as C,$ as ee,H as u,a as ae,E as te,a0 as P,U as q,Z as w,M as G,j as $,z as j,x as B,a1 as ne,C as oe,o as I,c as x,F as le,D as re,l as V,k as se,t as ue,e as ce,_ as ie,a2 as Z,s as L,a3 as de,a4 as pe,a5 as me,a6 as ve,a7 as fe,a8 as he,a9 as ye,aa as _e,ab as ge,ac as Ce,ad as be,u as Ie,y as xe,ae as ke,af as Ne,ag as Ae}from"./chunks/framework.91745c05.js";import{t as z}from"./chunks/theme.788608f7.js";function b(e){const a=`er-${e}`;return[a,(...n)=>{const s=[];return n&&n.forEach(l=>{if(l)return/^__/.test(l)?s.push(`${a}${l}`):s.push(`${a}--${l}`)}),s.join(" ")}]}function we(e){return typeof e=="number"||/^\d+(\.\d+)?$/.test(e)}const[$e,E]=b("area"),Se={fullLocation:{type:String,default:""},placeholder:{type:String,default:"请选择地区"}},D={provinceCode:"",provinceName:"",cityCode:"",cityName:"",countyCode:"",countyName:"",fullLocation:""},Ee="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json",Pe=f({name:"ErArea",props:Se,emits:{change:e=>!0},setup(e,{emit:a}){const t=v([]),n=v(!1),s=()=>{n.value=!0,window&&window.areaData?(t.value=window.areaData,n.value):fetch(Ee).then(c=>c.json()).then(c=>{window.areaData=c,t.value=c}).finally(()=>{n.value=!1})},l=v(!1),r=()=>{l.value=!l.value,l.value&&(o.value={...D},t.value.length||s())},o=v({...D}),d=C(()=>{var c,h;let p=t.value;return o.value.provinceCode&&o.value.provinceName&&(p=((c=p.find(g=>g.code===o.value.provinceCode))==null?void 0:c.areaList)||[]),o.value.cityCode&&o.value.cityName&&(p=((h=p.find(g=>g.code===o.value.cityCode))==null?void 0:h.areaList)||[]),p}),i=c=>{c.level===0&&(o.value.provinceCode=c.code,o.value.provinceName=c.name),c.level===1&&(o.value.cityCode=c.code,o.value.cityName=c.name),c.level===2&&(o.value.countyCode=c.code,o.value.countyName=c.name,o.value.fullLocation=`${o.value.provinceName} ${o.value.cityName} ${o.value.countyName}`,l.value=!1,a("change",o.value))},y=v(null);return ee(y,()=>{l.value=!1}),()=>u("div",{class:$e,ref:y},[u("div",{class:E("__input"),onClick:r},[e.fullLocation?u("span",null,[e.fullLocation]):null,e.fullLocation?null:u("span",null,[e.placeholder]),u("span",{class:E("__arrow")},[ae(" ▼")])]),l.value?u("div",{class:E("__popper")},[n.value?u("div",{class:"loading"},[u("div",{class:"er-loader"},null)]):null,d.value.map(c=>u("span",{class:"ellipsis",onClick:()=>i(c)},[c.name]))]):null])}}),R=Pe,Be={type:{type:String,default:"default"},size:{type:String,default:"middle"}},[Le,je]=b("button"),Ve=f({name:"ErButton",props:Be,setup(e,{slots:a}){return()=>{var t;return u("button",{class:[Le,"ellipsis",je(e.size,e.type)]},[(t=a.default)==null?void 0:t.call(a)])}}}),T=Ve;function N(e){const a=Array.isArray(e)?e:[e],t=[];return a.forEach(n=>{var s;Array.isArray(n)?t.push(...N(n)):P(n)&&Array.isArray(n.children)?t.push(...N(n.children)):(t.push(n),P(n)&&((s=n.component)!=null&&s.subTree)&&t.push(...N(n.component.subTree)))}),t}const ze=(e,a,t)=>N(e.subTree.children).filter(l=>{var r;return P(l)&&((r=l.type)==null?void 0:r.name)===a&&!!l.component}).map(l=>l.component.uid).map(l=>t[l]).filter(l=>!!l),J=(e,a)=>{const t={},n=te([]);return{children:n,addChild:r=>{t[r.uid]=r,n.value=ze(e,a,t)},removeChild:r=>{delete t[r],n.value=n.value.filter(o=>o.uid!==r)}}},Q=Symbol("carouselContextKey"),De={separator:{type:String,default:"/"}},Re=f({name:"ErBreadcrumb",props:De,setup(e,{slots:a}){const{children:t,addChild:n,removeChild:s}=J(w(),"ErBreadcrumbItem");return q(Q,{items:t,addItem:n,removeItem:s,props:e}),()=>{var l;return u("div",{class:"er-breadcrumb"},[(l=a.default)==null?void 0:l.call(a)])}}}),Te={to:{type:[String,Object],default:""},replace:{type:Boolean,default:!1}},[Oe,Fe]=b("breadcrumb-item"),Me=f({name:"ErBreadcrumbItem",props:Te,setup(e,{slots:a}){const{items:t,addItem:n,removeItem:s,props:l}=G(Q),r=w(),o=C(()=>t.value.findIndex(h=>h.uid===(r==null?void 0:r.uid)));$(()=>{n({uid:r.uid})}),j(()=>{s(r.uid)});const d=r.appContext.config.globalProperties.$router,i=()=>{!e.to||!d||(e.replace?d.replace(e.to):d.push(e.to))},y=()=>{var h,p;return e.to?u("a",{href:"javascript:;",onClick:i},[(h=a.default)==null?void 0:h.call(a)]):u("span",null,[(p=a.default)==null?void 0:p.call(a)])},c=()=>{if(o.value<t.value.length-1)return u("i",{class:Fe("__separator")},[l.separator])};return()=>u("div",{class:Oe},[y(),c()])}}),O=Re,F=Me,[Ke,He]=b("icon"),Ue={name:{type:String,default:""},size:{type:[Number,String],default:"1em"},color:{type:String,default:""}},qe=f({name:"ErIcon",props:Ue,setup(e){return()=>{const a=C(()=>({fontSize:we(e.size)?`${e.size}px`:e.size,color:e.color||void 0}));return u("i",{class:[Ke,He(e.name)],style:a.value},null)}}}),A=qe,W=Symbol("carouselContextKey"),Ge={duration:{type:Number,default:3e3},autoPlay:{type:Boolean,default:!0},height:{type:String,default:"auto"}},Ze=f({name:"ErCarousel",props:Ge,emits:["change"],setup(e,{slots:a,emit:t,expose:n}){const{children:s,addChild:l,removeChild:r}=J(w(),"ErCarouselItem"),o=v(0);q(W,{items:s,addItem:l,removeItem:r,index:o});let d;const i=()=>{d&&clearInterval(d),d=setInterval(()=>{o.value++,o.value>=s.value.length&&(o.value=0)},e.duration)},y=()=>{d&&clearInterval(d)};B(s,()=>p()),$(()=>p());const c=m=>{if(m>s.value.length-1){o.value=0;return}if(m<0){o.value=s.value.length-1;return}o.value=m,t("change",o.value)},h=()=>y(),p=()=>{s.value.length!==0&&e.autoPlay&&i()};j(()=>y());const g={prev:()=>{c(o.value-1)},next:()=>{c(o.value+1)},setActiveItem:m=>{c(m)}},Y=C(()=>Math.max(...s.value.map(m=>m.height)));return n(g),()=>{var m;return u("div",{class:"er-carousel",onMouseenter:h,onMouseleave:p},[u("div",{class:"carousel-body",style:{height:e.height==="auto"?Y.value+"px":e.height}},[(m=a.default)==null?void 0:m.call(a)]),u("a",{onClick:()=>c(o.value-1),href:"javascript:;",class:"carousel-btn prev"},[u(A,{name:"angle-left",color:"#fff",size:"18px"},null)]),u("a",{onClick:()=>c(o.value+1),href:"javascript:;",class:"carousel-btn next"},[u(A,{name:"angle-right",color:"#fff",size:"18px"},null)]),u("div",{class:"carousel-indicator"},[s.value.map((ca,S)=>u("span",{onClick:()=>c(S),key:S,class:{active:o.value===S}},null))])])}}}),Je=f({name:"ErCarouselItem",setup(e,{slots:a}){const{index:t,items:n,addItem:s,removeItem:l}=G(W),r=w(),o=C(()=>n.value.findIndex(i=>i.uid===(r==null?void 0:r.uid))),d=v();return $(()=>{var i;s({uid:r.uid,height:(i=d.value)==null?void 0:i.offsetHeight})}),j(()=>{l(r.uid)}),()=>{var i;return u("div",{class:{"carousel-item":!0,fade:t.value===o.value},ref:d},[(i=a.default)==null?void 0:i.call(a)])}}}),M=Ze,K=Je,[Qe,k]=b("checkbox"),We={modelValue:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1}},Xe=f({name:"ErCheckbox",props:We,emits:["update:modelValue","change"],setup(e,{slots:a,emit:t}){const n=v(e.modelValue);B(()=>e.modelValue,r=>{n.value=r});const s=v(e.indeterminate);B(()=>e.indeterminate,r=>{s.value=r});const l=()=>{if(s.value){t("update:modelValue",!0),t("change",!0),s.value=!1;return}t("update:modelValue",!n.value),t("change",!n.value)};return()=>{var r;return u("label",{class:[Qe,n.value&&"is_checked",s.value&&"is_indeterminate"]},[u("span",{class:k("__input")},[u("input",{class:k("__origin"),type:"checkbox",onChange:l},null),u("span",{class:k("__inner")},null)]),u("span",{class:k("__label")},[(r=a.default)==null?void 0:r.call(a)])])}}}),H=Xe;const Ye={name:"erabbit-icon",basic:["angle-left","angle-right","arrow-down","arrow-up","back-top","cart","clock","close","comment","customer","lamp","location","lock","marker","phone","question","remove","search","weibo","weixin","wind","yuan","zan"],outlined:["checked-o","heart-o","star-o","safe-o","see-o","warn-o"],filled:["checked","heart","star","safe","see","warn"]},ea={class:"demo"},aa=["onClick"],ta={key:0,class:"tip"},na=f({name:"IconCollection",__name:"IconCollection",props:{type:{}},setup(e){const a=v(""),{copy:t,copied:n,isSupported:s}=ne({source:a}),l=r=>{s.value&&(a.value=r,t(r))};return(r,o)=>{const d=oe("er-icon");return I(),x("div",ea,[(I(!0),x(le,null,re(V(Ye)[r.type],i=>(I(),x("div",{class:"icon-box",key:i,onClick:y=>l(i)},[u(d,{name:i},null,8,["name"]),se("p",null,ue(i),1),V(n)&&a.value===i?(I(),x("p",ta,"copied")):ce("",!0)],8,aa))),128))])}}});const U=ie(na,[["__scopeId","data-v-1179b212"]]),oa={extends:z,Layout:()=>Z(z.Layout,null,{}),enhanceApp({app:e,router:a,siteData:t}){e.component(T.name,T),e.component(M.name,M),e.component(K.name,K),e.component(O.name,O),e.component(F.name,F),e.component(H.name,H),e.component(R.name,R),e.component(A.name,A),e.component(U.name,U)}};function X(e){if(e.extends){const a=X(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const _=X(oa),la=f({name:"VitePressApp",setup(){const{site:e}=Ie();return $(()=>{xe(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),ke(),Ne(),Ae(),_.setup&&_.setup(),()=>Z(_.Layout)}});async function ra(){const e=ua(),a=sa();a.provide(pe,e);const t=me(e.route);return a.provide(ve,t),a.component("Content",fe),a.component("ClientOnly",he),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),_.enhanceApp&&await _.enhanceApp({app:a,router:e,siteData:ye}),{app:a,router:e,data:t}}function sa(){return _e(la)}function ua(){let e=L,a;return ge(t=>{let n=Ce(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),L&&(e=!1),be(()=>import(n),[])):null},_.NotFound)}L&&ra().then(({app:e,router:a,data:t})=>{a.go().then(()=>{de(a.route,t.site),e.mount("#app")})});export{ra as createApp};
