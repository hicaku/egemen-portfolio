import{d as M,n as P,p as S,s as H,r as R,o as t,c as s,a as e,t as i,u as c,F as _,b as a,q as r,f as q,i as E}from"./index-265105b6.js";const G={class:"px-5 sm:px-40"},z={class:"mt-10 text-center text-2xl font-bold mb-10 text-yellow-500"},A={class:"mt-8"},I=e("h3",{class:"text-2xl flex items-end text-yellow-500"}," Description ",-1),J=["innerHTML"],K=e("br",{class:""},null,-1),O={class:"mt-8"},Q=e("h3",{class:"text-2xl flex items-end text-yellow-500"}," Tech Stack ",-1),U={class:"flex flex-wrap gap-2 mt-4"},W={class:"mt-8"},X=e("h3",{class:"text-2xl flex items-end text-yellow-500"},"Video",-1),Y=["src"],Z={key:0,class:"mt-8"},$=e("h3",{class:"text-2xl flex items-end text-yellow-500"},"Topics",-1),tt={class:"mt-4"},st={key:0,class:"text-xl mt-4"},et={key:1},lt={class:"text-xl mt-4"},ot={key:1,class:"mt-8"},ct=e("h3",{class:"text-2xl flex items-end text-yellow-500"}," Gameplay ",-1),nt={class:"mt-4"},it={class:"my-2"},_t={key:2,class:"mt-8"},at=e("h3",{class:"text-2xl flex items-end text-yellow-500"},"Rules",-1),rt={class:"mt-4"},dt={class:"my-2"},mt={key:3,class:"mt-8"},xt=e("h3",{class:"text-2xl flex items-end text-yellow-500"}," Controls ",-1),ut={class:"mt-4"},ht={class:"my-2"},yt={key:4,class:"mt-8"},ft=e("h3",{class:"text-2xl flex items-end text-yellow-500"}," Mechanics ",-1),pt={class:"mt-4"},vt={key:0,class:"text-xl mt-4"},kt={key:1},wt={class:"text-xl mt-4"},bt={key:5,class:"mt-8"},gt=e("h3",{class:"text-2xl flex items-end text-yellow-500"}," Features ",-1),jt={class:"mt-4"},Nt={key:0,class:"text-xl mt-4"},Tt={key:1},Vt={class:"text-xl mt-4"},Ct={class:"mt-8"},Bt=e("h3",{class:"text-2xl flex items-end text-yellow-500"},"Details",-1),Dt={class:"mt-4"},Ft={class:"text-xl font-extrabold mt-4"},Lt={class:"text-xl mt-4 ml-2"},Ht=M({__name:"ProjectPage",setup(Mt){const F=P(),{projectName:u}=F.params;let o=S.find(x=>x.url===u);return o||(o=H.find(x=>x.url===u)),(x,Pt)=>{var h,y,f,p,v,k,w,b,g,j,N,T,V,C,B,D;const L=R("font-awesome-icon");return t(),s("div",null,[e("div",G,[e("h3",z,i((h=c(o))==null?void 0:h.name),1),e("div",A,[I,e("div",{class:"text-xl mt-4",innerHTML:(y=c(o))==null?void 0:y.description},null,8,J),K]),e("div",O,[Q,e("div",U,[(t(!0),s(_,null,a((f=c(o))==null?void 0:f.techStack,(l,n)=>(t(),s("div",{key:n,class:"p-1 px-4 rounded-full bg-yellow-500 font-bold text-center"},i(l),1))),128))])]),e("div",W,[X,e("iframe",{src:(p=c(o))==null?void 0:p.youtube,frameborder:"0",allowfullscreen:"",class:"mt-4 w-full max-w-2xl h-96 rounded-lg"},null,8,Y)]),(v=c(o))!=null&&v.topics?(t(),s("div",Z,[$,e("div",tt,[(t(!0),s(_,null,a((k=c(o))==null?void 0:k.topics,(l,n)=>(t(),s("ul",{key:n,class:"my-2 list-disc list-inside"},[typeof l=="string"?(t(),s("li",st,i(l),1)):typeof l=="object"?(t(),s("div",et,[(t(!0),s(_,null,a(l,(d,m)=>(t(),s("li",{key:m,class:"ml-10 my-2"},[e("span",lt,i(d),1)]))),128))])):r("",!0)]))),128))])])):r("",!0),(w=c(o))!=null&&w.gameplay?(t(),s("div",ot,[ct,e("div",nt,[e("ul",it,[(t(!0),s(_,null,a(c(o).gameplay,(l,n)=>(t(),s("li",{class:"text-xl mt-4",key:n},i(l),1))),128))])])])):r("",!0),(b=c(o))!=null&&b.rules?(t(),s("div",_t,[at,e("div",rt,[e("ul",dt,[(t(!0),s(_,null,a((g=c(o))==null?void 0:g.rules,(l,n)=>(t(),s("li",{class:"text-xl mt-4",key:n},i(l),1))),128))])])])):r("",!0),(j=c(o))!=null&&j.controls?(t(),s("div",mt,[xt,e("div",ut,[e("ul",ht,[(t(!0),s(_,null,a((N=c(o))==null?void 0:N.controls,(l,n)=>(t(),s("li",{class:"text-xl mt-4",key:n},i(l),1))),128))])])])):r("",!0),(T=c(o))!=null&&T.mechanics?(t(),s("div",yt,[ft,e("div",pt,[(t(!0),s(_,null,a((V=c(o))==null?void 0:V.mechanics,(l,n)=>(t(),s("ul",{key:n,class:"my-2 list-disc list-inside"},[typeof l=="string"?(t(),s("li",vt,i(l),1)):typeof l=="object"?(t(),s("div",kt,[(t(!0),s(_,null,a(l,(d,m)=>(t(),s("li",{key:m,class:"ml-10 my-2"},[e("span",wt,i(d),1)]))),128))])):r("",!0)]))),128))])])):r("",!0),(C=c(o))!=null&&C.features?(t(),s("div",bt,[gt,e("div",jt,[(t(!0),s(_,null,a((B=c(o))==null?void 0:B.features,(l,n)=>(t(),s("ul",{key:n,class:"my-2 list-inside"},[typeof l=="string"?(t(),s("li",Nt,i(l),1)):typeof l=="object"?(t(),s("div",Tt,[(t(!0),s(_,null,a(l,(d,m)=>(t(),s("li",{key:m,class:"ml-10 my-2 list-disc"},[e("span",Vt,i(d),1)]))),128))])):r("",!0)]))),128))])])):r("",!0),e("div",Ct,[Bt,e("div",Dt,[(t(!0),s(_,null,a((D=c(o))==null?void 0:D.details,(l,n)=>(t(),s("div",{key:n,class:"my-2"},[e("span",Ft,[q(L,{icon:l==null?void 0:l.icon,class:"mr-2 text-yellow-500"},null,8,["icon"]),E(i(l==null?void 0:l.title)+":",1)]),e("span",Lt,i(l==null?void 0:l.value),1)]))),128))])])])])}}});export{Ht as default};