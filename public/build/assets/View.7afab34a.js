import{g as te,am as ae,i as u,u as se,C as oe,j as ne,k as h,D as re,l as le,r as d,o as i,c as B,b as a,s as f,w as n,t as c,y as s,v as k,x as v,A as p,F as R,H as ie,z as de}from"./vendor.d8bc4b48.js";import{_ as ce}from"./InvoiceIndexDropdown.2607ca46.js";import{g as ue,f as me,u as fe,d as pe,i as _e,e as V}from"./main.90d606cc.js";import{_ as ve}from"./SendInvoiceModal.1fc085a2.js";import{L as ye}from"./LoadingIcon.73dcffb3.js";const be={class:"text-sm mr-3"},ge={class:"fixed top-0 left-0 hidden h-full pt-16 pb-4 ml-56 bg-white xl:ml-64 w-88 xl:block"},he={class:"flex items-center justify-between px-4 pt-8 pb-2 border border-gray-200 border-solid height-full"},Be={class:"mb-6"},xe={class:"flex mb-6 ml-3",role:"group","aria-label":"First group"},Ie={class:"px-2 py-1 pb-2 mb-1 mb-2 text-sm border-b border-gray-200 border-solid"},ke={key:0,class:"h-full pb-32 overflow-y-scroll border-l border-gray-200 border-solid base-scroll"},Ee={class:"flex-2"},Se={class:"mt-1 mb-2 text-xs not-italic font-medium leading-5 text-gray-600"},we={class:"flex-1 whitespace-nowrap right"},Te={class:"text-sm not-italic font-normal leading-5 text-right text-gray-600 est-date"},De={class:"flex justify-center p-4 items-center"},Ve={key:0,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},$e={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},Fe=["src"],Me={setup(Ae){const z=ue(),m=me();fe();const E=pe(),L=_e(),{t:y}=te();ae("$utils"),u(null),u(null);const r=u(null);u(null);const x=se();oe(),u(["DRAFT","SENT","VIEWED","EXPIRED","ACCEPTED","REJECTED"]);const S=u(!1),M=u(!1);u(!1);const $=u(!1),b=u(!1),t=ne({orderBy:null,orderByField:null,searchText:null}),P=h(()=>r.value.invoice_number),F=h(()=>t.orderBy==="asc"||t.orderBy==null);h(()=>F.value?y("general.ascending"):y("general.descending"));const U=h(()=>`/invoices/pdf/${r.value.unique_hash}`);h(()=>r.value&&r.value.id?invoice.value.id:null),re(x,(e,l)=>{e.name==="invoices.view"&&N()});async function j(){L.openDialog({title:y("general.are_you_sure"),message:y("invoices.invoice_mark_as_sent"),yesLabel:y("general.ok"),noLabel:y("general.cancel"),variant:"primary",hideNoButton:!1,size:"lg"}).then(async e=>{S.value=!1,e&&(await m.markAsSent({id:r.value.id,status:"SENT"}),r.value.status="SENT",S.value=!0)})}async function O(e){z.openModal({title:y("invoices.send_invoice"),componentName:"SendInvoiceModal",id:r.value.id,data:r.value})}function H(e){return x.params.id==e}async function A(){b.value=!0,await m.fetchInvoices(),b.value=!1,setTimeout(()=>{G()},500)}function G(){const e=document.getElementById(`invoice-${x.params.id}`);e&&(e.scrollIntoView({behavior:"smooth"}),e.classList.add("shake"))}async function N(){let e=await m.fetchInvoice(x.params.id);e.data&&(r.value={...e.data.data})}async function _(){let e="";t.searchText!==""&&t.searchText!==null&&t.searchText!==void 0&&(e+=`search=${t.searchText}&`),t.orderBy!==null&&t.orderBy!==void 0&&(e+=`orderBy=${t.orderBy}&`),t.orderByField!==null&&t.orderByField!==void 0&&(e+=`orderByField=${t.orderByField}`),$.value=!0;let l=await m.searchInvoice(e);$.value=!1,l.data&&(m.invoices=l.data.data)}function W(){return t.orderBy==="asc"?(t.orderBy="desc",_(),!0):(t.orderBy="asc",_(),!0)}return A(),N(),_=le.exports.debounce(_,500),(e,l)=>{const g=d("BaseButton"),C=d("router-link"),q=d("BasePageHeader"),I=d("BaseIcon"),J=d("BaseInput"),w=d("BaseRadio"),T=d("BaseInputGroup"),D=d("BaseDropdownItem"),X=d("BaseDropdown"),Y=d("BaseText"),K=d("BaseEstimateStatusBadge"),Q=d("BaseFormatMoney"),Z=d("BasePage");return i(),B(R,null,[a(ve),r.value?(i(),f(Z,{key:0,class:"xl:pl-96 xl:ml-8"},{default:n(()=>[a(q,{title:s(P)},{actions:n(()=>[c("div",be,[r.value.status==="DRAFT"&&s(E).hasAbilities(s(V).EDIT_INVOICE)?(i(),f(g,{key:0,disabled:S.value,variant:"primary-outline",onClick:j},{default:n(()=>[k(v(e.$t("invoices.mark_as_sent")),1)]),_:1},8,["disabled"])):p("",!0)]),r.value.status==="DRAFT"&&s(E).hasAbilities(s(V).SEND_INVOICE)?(i(),f(g,{key:0,disabled:M.value,variant:"primary",class:"text-sm",onClick:O},{default:n(()=>[k(v(e.$t("invoices.send_invoice")),1)]),_:1},8,["disabled"])):p("",!0),s(E).hasAbilities(s(V).CREATE_PAYMENT)?(i(),f(C,{key:1,to:`/admin/payments/${e.$route.params.id}/create`},{default:n(()=>[r.value.status==="SENT"||r.value.status==="OVERDUE"||r.value.status==="VIEWED"?(i(),f(g,{key:0,variant:"primary"},{default:n(()=>[k(v(e.$t("invoices.record_payment")),1)]),_:1})):p("",!0)]),_:1},8,["to"])):p("",!0),a(ce,{class:"ml-3",row:r.value,"load-data":A},null,8,["row"])]),_:1},8,["title"]),c("div",ge,[c("div",he,[c("div",Be,[a(J,{modelValue:s(t).searchText,"onUpdate:modelValue":l[0]||(l[0]=o=>s(t).searchText=o),placeholder:e.$t("general.search"),type:"text",variant:"gray",onInput:l[1]||(l[1]=o=>_())},{right:n(()=>[a(I,{name:"SearchIcon",class:"h-5 text-gray-400"})]),_:1},8,["modelValue","placeholder"])]),c("div",xe,[a(X,{class:"ml-3",position:"bottom-start"},{activator:n(()=>[a(g,{size:"md",variant:"gray"},{default:n(()=>[a(I,{name:"FilterIcon"})]),_:1})]),default:n(()=>[c("div",Ie,v(e.$t("general.sort_by")),1),a(D,{class:"flex px-1 py-2 cursor-pointer"},{default:n(()=>[a(T,{class:"-mt-3 font-normal"},{default:n(()=>[a(w,{id:"filter_invoice_date",modelValue:s(t).orderByField,"onUpdate:modelValue":[l[2]||(l[2]=o=>s(t).orderByField=o),_],label:e.$t("reports.invoices.invoice_date"),size:"sm",name:"filter",value:"invoice_date"},null,8,["modelValue","label"])]),_:1})]),_:1}),a(D,{class:"flex px-1 py-2 cursor-pointer"},{default:n(()=>[a(T,{class:"-mt-3 font-normal"},{default:n(()=>[a(w,{id:"filter_due_date",modelValue:s(t).orderByField,"onUpdate:modelValue":[l[3]||(l[3]=o=>s(t).orderByField=o),_],label:e.$t("invoices.due_date"),value:"due_date",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1}),a(D,{class:"flex px-1 py-2 cursor-pointer"},{default:n(()=>[a(T,{class:"-mt-3 font-normal"},{default:n(()=>[a(w,{id:"filter_invoice_number",modelValue:s(t).orderByField,"onUpdate:modelValue":[l[4]||(l[4]=o=>s(t).orderByField=o),_],label:e.$t("invoices.invoice_number"),value:"invoice_number",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),a(g,{class:"ml-1",size:"md",variant:"gray",onClick:W},{default:n(()=>[s(F)?(i(),f(I,{key:0,name:"SortAscendingIcon"})):(i(),f(I,{key:1,name:"SortDescendingIcon"}))]),_:1})])]),s(m)&&s(m).invoices?(i(),B("div",ke,[(i(!0),B(R,null,ie(s(m).invoices,(o,ee)=>(i(),B("div",{key:ee},[o&&!b.value?(i(),f(C,{key:0,id:"invoice-"+o.id,to:`/admin/invoices/${o.id}/view`,class:de(["flex justify-between side-invoice p-4 cursor-pointer hover:bg-gray-100 items-center border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":H(o.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:n(()=>[c("div",Ee,[a(Y,{text:o.customer.name,length:30,class:"pr-2 mb-2 text-sm not-italic font-normal leading-5 text-black capitalize truncate"},null,8,["text"]),c("div",Se,v(o.invoice_number),1),a(K,{status:o.status,class:"px-1 text-xs"},{default:n(()=>[k(v(o.status),1)]),_:2},1032,["status"])]),c("div",we,[a(Q,{class:"mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900 block",amount:o.total,currency:o.customer.currency},null,8,["amount","currency"]),c("div",Te,v(o.formatted_invoice_date),1)])]),_:2},1032,["id","to","class"])):p("",!0)]))),128)),c("div",De,[b.value?(i(),f(ye,{key:0,class:"h-6 m-1 animate-spin text-primary-400"})):p("",!0)]),!s(m).invoices.length&&!b.value?(i(),B("p",Ve,v(e.$t("invoices.no_matching_invoices")),1)):p("",!0)])):p("",!0)]),c("div",$e,[c("iframe",{src:`${s(U)}`,class:"flex-1 border border-gray-400 border-solid bg-white rounded-md frame-style"},null,8,Fe)])]),_:1})):p("",!0)],64)}}};export{Me as default};