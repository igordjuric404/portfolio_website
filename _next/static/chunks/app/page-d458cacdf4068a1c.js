(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5156:function(e,t,s){Promise.resolve().then(s.bind(s,8896))},8896:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return U}});var a=s(3827),i=s(4090),o=s(9164),r=s(3462),l=s(4923),n=s(8378),m=s(9916),c=s(3167),x=s(1367);function d(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,x.m6)((0,c.W)(t))}let p=e=>{let{children:t,className:s,observeRef:c}=e,x=(0,i.useRef)(null),{scrollYProgress:p}=(0,o.v)({target:x,offset:["start start","end start"]}),g=(0,r.T)(p),[f,u]=(0,i.useState)(0),[b,h]=(0,i.useState)(0),w=(0,i.useRef)(null),[_,y]=(0,i.useState)(0);(0,i.useEffect)(()=>{let e=(null==c?void 0:c.current)||w.current;if(!e){console.warn("Observed element is not defined");return}let t=()=>{h(window.innerHeight)},s=()=>{y(e.offsetHeight)};t(),s();let a=new ResizeObserver(e=>{for(let t of e)s()});return a.observe(e),window.addEventListener("resize",t),()=>{a.unobserve(e),window.removeEventListener("resize",t)}},[c]),(0,i.useEffect)(()=>g.onChange(e=>{u(e)}),[g]);let v=(0,l.q)((0,n.H)(p,[0,1],[0,_+1.27*b]),{stiffness:400,damping:120}),j=(0,l.q)((0,n.H)(p,[0,1],[0,_]),{stiffness:400,damping:120});return(0,a.jsxs)(m.E.div,{ref:x,className:d("relative ml-[10px] w-[40px] h-full",s),children:[(0,a.jsxs)("svg",{viewBox:"0 0 40 ".concat(_),width:"40",height:_,className:"hidden lg:block md:block sm:block xs:block absolute left-0 top-0","aria-hidden":"true",children:[(0,a.jsx)(m.E.path,{d:"M 1 0 L 1 ".concat(.8*_," l 18 24 L 19 ").concat(_," L 19 ").concat(_),fill:"none",stroke:"#9091A0",strokeOpacity:"0.16",transition:{duration:10}}),(0,a.jsx)(m.E.path,{d:"M 1 0 L 1 ".concat(.8*_," l 18 24 L 19 ").concat(_," L 19 ").concat(_),fill:"none",stroke:"url(#gradient)",strokeWidth:"1.55",className:"motion-reduce:hidden",transition:{duration:10}}),(0,a.jsx)(m.E.path,{d:"M 6 -2 L 6 ".concat(.8*_-2," l 18 24 L 24 ").concat(_," L 24 ").concat(_),fill:"none",stroke:"#9091A0",strokeOpacity:"0.16",transition:{duration:10}}),(0,a.jsx)(m.E.path,{d:"M 6 -2 L 6 ".concat(.8*_-2," l 18 24 L 24 ").concat(_," L 24 ").concat(_),fill:"none",stroke:"url(#gradient)",strokeWidth:"1.55",className:"motion-reduce:hidden",transition:{duration:10}}),(0,a.jsx)("defs",{children:(0,a.jsxs)(m.E.linearGradient,{id:"gradient",gradientUnits:"userSpaceOnUse",x1:"0",x2:"0",y1:v,y2:j,children:[(0,a.jsx)("stop",{stopColor:"#ffe800",stopOpacity:"0"}),(0,a.jsx)("stop",{stopColor:"#ffe800"}),(0,a.jsx)("stop",{offset:"0.5",stopColor:"#f30000"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#f30000",stopOpacity:"0"})]})})]}),(0,a.jsx)("div",{ref:w,children:t})]})},g=e=>{let{gradientBackgroundStart:t="rgb(0, 0, 0)",gradientBackgroundEnd:s="rgb(0, 0, 0)",firstColor:o="76, 3, 11",secondColor:r="158, 0, 0",thirdColor:l="253, 154, 14",fourthColor:n="210, 167, 8",fifthColor:m="209, 137, 6",pointerColor:c="190, 16, 16",size:x="85%",blendingValue:p="hard",children:g,className:f,interactive:u=!0,containerClassName:b}=e,h=(0,i.useRef)(null),w=window.innerWidth/2,_=window.innerHeight/2,[y,v]=(0,i.useState)(w),[j,P]=(0,i.useState)(_),[N,k]=(0,i.useState)(w),[G,J]=(0,i.useState)(_);(0,i.useEffect)(()=>{v(window.innerWidth/2),P(window.innerHeight/2),k(window.innerWidth/2),J(window.innerHeight/2)},[]),(0,i.useEffect)(()=>{document.body.style.setProperty("--gradient-background-start",t),document.body.style.setProperty("--gradient-background-end",s),document.body.style.setProperty("--first-color",o),document.body.style.setProperty("--second-color",r),document.body.style.setProperty("--third-color",l),document.body.style.setProperty("--fourth-color",n),document.body.style.setProperty("--fifth-color",m),document.body.style.setProperty("--pointer-color",c),document.body.style.setProperty("--size",x),document.body.style.setProperty("--blending-value",p)},[t,s,o,r,l,n,m,c,x,p]),(0,i.useEffect)(()=>{h.current&&(v(y+(N-y)/20),P(j+(G-j)/20),h.current.style.transform="translate(".concat(Math.round(y),"px, ").concat(Math.round(j),"px)"))},[N,G]);let[z,Z]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{Z(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))},[]),(0,a.jsxs)("div",{className:d("h-screen w-screen  relative overflow-hidden top-0 left-0 bg-[#060606]",b),children:[(0,a.jsx)("svg",{className:"hidden",children:(0,a.jsx)("defs",{children:(0,a.jsxs)("filter",{id:"blurMe",children:[(0,a.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),(0,a.jsx)("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8",result:"goo"}),(0,a.jsx)("feBlend",{in:"SourceGraphic",in2:"goo"})]})})}),(0,a.jsx)("div",{className:d("",f),children:g}),(0,a.jsxs)("div",{className:d("gradients-container h-full w-full blur-lg",z?"blur-2xl":"[filter:url(#blurMe)_blur(40px)]"),children:[(0,a.jsx)("div",{className:d("absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]","[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]","[transform-origin:center_center]","animate-first","opacity-100")}),(0,a.jsx)("div",{className:d("absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]","[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]","[transform-origin:calc(50%-400px)]","animate-second","opacity-100")}),(0,a.jsx)("div",{className:d("absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]","[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]","[transform-origin:calc(50%+400px)]","animate-third","opacity-100")}),(0,a.jsx)("div",{className:d("absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]","[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]","[transform-origin:calc(50%-200px)]","animate-fourth","opacity-70")}),(0,a.jsx)("div",{className:d("absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]","[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]","[transform-origin:calc(50%-800px)_calc(50%+800px)]","animate-fifth","opacity-100")}),u&&(0,a.jsx)("div",{ref:h,onMouseMove:e=>{k(e.clientX),J(e.clientY)},className:d("absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]","[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2","opacity-70")})]})]})};var f=s(4023),u=s(8745),b=s(6696),h=s(8792);let w=e=>{let{items:t,desktopClassName:s,mobileClassName:i}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y,{items:t,className:s}),(0,a.jsx)(_,{items:t,className:i})]})},_=e=>{let{items:t,className:s}=e,[o,r]=(0,i.useState)(!1);return(0,a.jsxs)("div",{className:d("relative block md:hidden",s),children:[(0,a.jsx)(u.M,{children:o&&(0,a.jsx)(m.E.div,{layoutId:"nav",className:"absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2",children:t.map((e,s)=>(0,a.jsx)(m.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10,transition:{delay:.05*s}},transition:{delay:(t.length-1-s)*.05},children:(0,a.jsx)(h.default,{href:e.href,className:"h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center",children:(0,a.jsx)("div",{className:"h-4 w-4",children:e.icon})},e.title)},e.title))})}),(0,a.jsx)("button",{onClick:()=>r(!o),className:"h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center",children:(0,a.jsx)(f.Z,{className:"h-5 w-5 text-neutral-500 dark:text-neutral-400"})})]})},y=e=>{let{items:t,className:s}=e,i=(0,b.c)(1/0);return(0,a.jsx)(m.E.div,{onMouseMove:e=>i.set(e.pageX),onMouseLeave:()=>i.set(1/0),className:d("mx-auto hidden md:flex h-16 gap-4 items-end mb-2 rounded-2xl dark:bg-neutral-900 px-4",s),children:t.map(e=>(0,a.jsx)(v,{mouseX:i,...e},e.title))})};function v(e){let{mouseX:t,title:s,icon:o,href:r}=e,c=(0,i.useRef)(null),x=(0,n.H)(t,e=>{var t,s;let a=null!==(s=null===(t=c.current)||void 0===t?void 0:t.getBoundingClientRect())&&void 0!==s?s:{x:0,width:0};return e-a.x-a.width/2}),d=(0,n.H)(x,[-150,0,150],[60,100,60]),p=(0,n.H)(x,[-150,0,150],[60,100,60]),g=(0,n.H)(x,[-150,0,150],[30,50,30]),f=(0,n.H)(x,[-150,0,150],[30,50,30]),b=(0,l.q)(d,{mass:.1,stiffness:150,damping:12}),w=(0,l.q)(p,{mass:.1,stiffness:150,damping:12}),_=(0,l.q)(g,{mass:.1,stiffness:150,damping:12}),y=(0,l.q)(f,{mass:.1,stiffness:150,damping:12}),[v,j]=(0,i.useState)(!1);return(0,a.jsx)(h.default,{href:r,scroll:!0,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)(m.E.div,{ref:c,onClick:e=>{"#"===r&&(e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},style:{width:b,height:w},onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),className:"aspect-square rounded-full bg-neutral-800 flex items-center justify-center relative",children:[(0,a.jsx)(u.M,{children:v&&(0,a.jsx)(m.E.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:2,x:"-50%"},className:"px-2 py-0.5 whitespace-pre rounded-md  dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs",children:s})}),(0,a.jsx)(m.E.div,{style:{width:_,height:y},className:"flex items-center justify-center",children:o})]})})}s(2614);var j=s(951),P=s(7399),N=()=>{let[e,t]=(0,i.useState)({}),[s,o]=(0,i.useState)(!1),r=(0,i.useRef)({}),l=[{id:1,date:"2021-10-01",displayDate:"2021 - 2024",title:"Računarski fakultet",content:(0,a.jsx)("p",{className:"timeline__item-p",children:"Completed my studies of information technologies with a focus on software development and web technologies."})},{id:2,date:"2023-8-15",displayDate:"Aug. 2023 ‑ Jan. 2024",title:"Serbian Judicial Academy",content:(0,a.jsx)("p",{className:"timeline__item-p",children:"Collaborated on a web application for managing a database of judicial practices from the European Court of Human Rights, enabling judges to efficiently search, filter, add, and edit court sentences relevant to Serbian law."})},{id:3,date:"2023-11-15",displayDate:"Oct. 2023 ‑ Mar. 2024",title:"Serbian Judicial Academy",content:(0,a.jsx)("p",{className:"timeline__item-p",children:"Created responsive web interfaces using HTML and CSS based on design mockups, ensuring a smooth user experience across various devices, while implementing small features and fixing JavaScript bugs."})},{id:4,date:"2023-12-13",displayDate:"Dec. 2023 ‑ May 2024",title:"Register of National Internet Domains of Serbia",content:(0,a.jsx)("p",{className:"timeline__item-p",children:"Collaborated with two colleagues to develop a web application that was accepted as the official solution and later implemented. Led the research to identify project requirements, allocated tasks to the team, helped with database modeling and backend issues."})},{id:5,date:"2023-10-18",displayDate:"Oct. 2023 - Jan. 2024",title:"Coinsnap",content:(0,a.jsx)("p",{className:"timeline__item-p",children:"As a freelance UI developer, I focused on creating responsive web interfaces that adhered to design mockups, utilizing HTML and CSS to ensure a seamless user experience across various devices and screen sizes. My work aimed to align closely with client specifications while prioritizing usability and aesthetic appeal."})}],n=e=>{s||(o(!0),t(t=>{let s=t[e];return{...t,[e]:!s}}),setTimeout(()=>o(!1),300))};return(0,i.useEffect)(()=>{l.forEach(t=>{let s=r.current[t.id];s&&(e[t.id]?(s.style.height="".concat(s.scrollHeight,"px"),s.style.opacity="1",s.style.visibility="visible"):(s.style.height="0px",s.style.opacity="0",s.style.visibility="hidden"))})},[e,l]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("svg",{style:{display:"none"},children:(0,a.jsx)("symbol",{id:"arrow",children:(0,a.jsx)("polyline",{points:"7 10,12 15,17 10",fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})}),(0,a.jsxs)("div",{id:"timeline",className:"timeline",children:[(0,a.jsxs)("div",{className:"btn-group",children:[(0,a.jsx)("button",{className:"btn",type:"button",onClick:()=>{t(l.reduce((e,t)=>(e[t.id]=!0,e),{}))},children:(0,a.jsx)(j.Z,{})}),(0,a.jsx)("button",{className:"btn",type:"button",onClick:()=>{t(l.reduce((e,t)=>(e[t.id]=!1,e),{}))},children:(0,a.jsx)(P.Z,{})})]}),l.map(t=>(0,a.jsxs)("div",{className:"timeline__item monument",children:[(0,a.jsxs)("div",{className:"timeline__item-header",children:[(0,a.jsx)("button",{className:"timeline__arrow",type:"button",id:"item".concat(t.id),"aria-labelledby":"item".concat(t.id,"-name"),"aria-expanded":e[t.id]?"true":"false","aria-controls":"item".concat(t.id,"-ctrld"),"aria-haspopup":"true","data-item":t.id,onClick:()=>n(t.id),children:(0,a.jsx)("svg",{className:"timeline__arrow-icon",viewBox:"0 0 24 24",width:"24px",height:"24px",children:(0,a.jsx)("use",{href:"#arrow"})})}),(0,a.jsx)("span",{className:"timeline__dot"}),(0,a.jsxs)("span",{id:"item".concat(t.id,"-name"),className:"timeline__meta",children:[(0,a.jsx)("time",{className:"timeline__date",dateTime:t.date,children:t.displayDate}),(0,a.jsx)("br",{}),(0,a.jsx)("strong",{className:"timeline__title",children:t.title})]})]}),(0,a.jsx)("div",{className:"timeline__item-body ".concat(e[t.id]?"timeline__item-body--expanded":""),id:"item".concat(t.id,"-ctrld"),role:"region","aria-labelledby":"item".concat(t.id),"aria-hidden":!e[t.id],ref:e=>{r.current[t.id]=e},children:(0,a.jsx)("div",{className:"timeline__item-body-content dark:bg-neutral-800",children:t.content})})]},t.id))]})]})},k=s(703);let G=e=>{let{products:t}=e,s=t.slice(0,5),r=t.slice(5,10);t.slice(10,15);let c=i.useRef(null),{scrollYProgress:x}=(0,o.v)({target:c,offset:["start start","end start"]}),d={stiffness:300,damping:30,bounce:100},p=(0,l.q)((0,n.H)(x,[0,1],[0,1e3]),d),g=(0,l.q)((0,n.H)(x,[0,1],[0,-1e3]),d),f=(0,l.q)((0,n.H)(x,[0,.2],[15,0]),d),u=(0,l.q)((0,n.H)(x,[0,.2],[.2,1]),d),b=(0,l.q)((0,n.H)(x,[0,.2],[20,0]),d),h=(0,l.q)((0,n.H)(x,[0,.2],[-300,100]),d);return(0,a.jsxs)("div",{ref:c,className:"h-[auto] pt-40 mb-10 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]",children:[(0,a.jsx)(J,{}),(0,a.jsxs)(m.E.div,{style:{rotateX:f,rotateZ:b,translateY:h,opacity:u},className:"",children:[(0,a.jsx)(m.E.div,{className:"flex flex-row-reverse space-x-reverse space-x-14 mb-14",children:s.map(e=>(0,a.jsx)(z,{product:e,translate:p},e.title))}),(0,a.jsx)(m.E.div,{className:"flex flex-row  mb-16 space-x-14 ",children:r.map(e=>(0,a.jsx)(z,{product:e,translate:g},e.title))})]})]})},J=()=>(0,a.jsxs)("div",{className:"max-w-7xl relative mx-auto py-10 md:py-10 px-4 w-full  left-0 top-0",children:[(0,a.jsx)("h1",{className:"text-2xl md:text-5xl font-bold dark:text-white monument-bold",children:"My Projects"}),(0,a.jsx)("p",{className:"max-w-4xl text-base md:text-xl mt-8 dark:text-neutral-200 monument",children:"My projects vary from real-world applications for Serbian government organizations to personal development projects and creative solutions built during hackathons"})]}),z=e=>{let{product:t,translate:s}=e;return(0,a.jsxs)(m.E.div,{style:{x:s},whileHover:{y:-20},className:"group/product h-[20rem] w-[34rem] relative flex-shrink-0",children:[(0,a.jsx)(h.default,{target:"_blank",rel:"noopener noreferrer",href:t.link,className:"block group-hover/product:shadow-2xl ",children:(0,a.jsx)(k.default,{src:t.thumbnail,height:"1079",width:"1920",className:"object-cover object-center absolute h-full w-full inset-0 ",alt:t.title})}),(0,a.jsx)("div",{className:"absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"}),(0,a.jsx)("h2",{className:"absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white monument",children:t.title})]},t.title)};var Z=s(9102),E=s.n(Z),M=s(750),B=s(2542),R=s(3857),S=s(3184),C=s(9754),H=s(6576),L=s(511),q=s(6604),O=s(5682),D=()=>{let[e,t]=(0,i.useState)(!1),s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=s.current,a=new IntersectionObserver(e=>{e[0].isIntersecting&&t(!0)},{rootMargin:"200px 0px",threshold:.5});return e&&a.observe(e),()=>{e&&a.unobserve(e)}},[]),(0,a.jsxs)("div",{className:"jsx-6fd8b8e580196a33 navbar",children:[(0,a.jsx)("div",{ref:s,className:"jsx-6fd8b8e580196a33 wrapper",children:e&&(0,a.jsxs)("div",{className:"jsx-6fd8b8e580196a33 slider",children:[(0,a.jsxs)("div",{className:"jsx-6fd8b8e580196a33 slide",children:[(0,a.jsx)(M.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#8c3416]"}),(0,a.jsx)(B.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#192f7a]"}),(0,a.jsx)(R.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#3b2853]"}),(0,a.jsx)(S.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#3178c6]"}),(0,a.jsx)(C.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#a79737]"}),(0,a.jsx)(H.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#40909d]"}),(0,a.jsx)(L.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#800020]"}),(0,a.jsx)(q.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#6a4993]"}),(0,a.jsx)(O.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#993d2a]"}),(0,a.jsx)(M.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#8c3416]"}),(0,a.jsx)(B.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#192f7a]"}),(0,a.jsx)(R.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#3b2853]"}),(0,a.jsx)(S.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#3178c6]"}),(0,a.jsx)(C.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#a79737]"}),(0,a.jsx)(H.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#40909d]"}),(0,a.jsx)(L.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#800020]"}),(0,a.jsx)(q.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#6a4993]"}),(0,a.jsx)(O.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#993d2a]"})]}),(0,a.jsxs)("div",{className:"jsx-6fd8b8e580196a33 slide",children:[(0,a.jsx)(M.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#8c3416]"}),(0,a.jsx)(B.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#192f7a]"}),(0,a.jsx)(R.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#3b2853]"}),(0,a.jsx)(S.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#3178c6]"}),(0,a.jsx)(C.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#a79737]"}),(0,a.jsx)(H.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#40909d]"}),(0,a.jsx)(L.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#800020]"}),(0,a.jsx)(q.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#6a4993]"}),(0,a.jsx)(O.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#993d2a]"}),(0,a.jsx)(M.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#8c3416]"}),(0,a.jsx)(B.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#192f7a]"}),(0,a.jsx)(R.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#3b2853]"}),(0,a.jsx)(S.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#3178c6]"}),(0,a.jsx)(C.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#a79737]"}),(0,a.jsx)(H.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#40909d]"}),(0,a.jsx)(L.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#800020]"}),(0,a.jsx)(q.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#6a4993]"}),(0,a.jsx)(O.Z,{className:"h-[70px] w-[70px] mx-[24px] text-[#993d2a]"})]})]})}),(0,a.jsx)(E(),{id:"6fd8b8e580196a33",children:'.wrapper.jsx-6fd8b8e580196a33{width:100vw;height:100px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.slider.jsx-6fd8b8e580196a33{width:1200px;height:100px;position:relative;background:#060606;-webkit-box-shadow:0 10px 20px -10px rgba(0,0,0,.2);-moz-box-shadow:0 10px 20px -10px rgba(0,0,0,.2);box-shadow:0 10px 20px -10px rgba(0,0,0,.2);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden}.slide.jsx-6fd8b8e580196a33{height:100px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-animation:slideshow 25s linear infinite;-moz-animation:slideshow 25s linear infinite;-o-animation:slideshow 25s linear infinite;animation:slideshow 25s linear infinite}.slide.jsx-6fd8b8e580196a33 *.jsx-6fd8b8e580196a33{padding:0 30px}@-webkit-keyframes slideshow{0%{-webkit-transform:translatex(0);transform:translatex(0)}100%{-webkit-transform:translatex(-100%);transform:translatex(-100%)}}@-moz-keyframes slideshow{0%{-moz-transform:translatex(0);transform:translatex(0)}100%{-moz-transform:translatex(-100%);transform:translatex(-100%)}}@-o-keyframes slideshow{0%{-o-transform:translatex(0);transform:translatex(0)}100%{-o-transform:translatex(-100%);transform:translatex(-100%)}}@keyframes slideshow{0%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}100%{-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}}.slider.jsx-6fd8b8e580196a33::before,.slider.jsx-6fd8b8e580196a33::after{height:100px;width:200px;position:absolute;content:"";background:-webkit-linear-gradient(left,#060606 0%,rgba(6,6,6,0)100%);background:-moz-linear-gradient(left,#060606 0%,rgba(6,6,6,0)100%);background:-o-linear-gradient(left,#060606 0%,rgba(6,6,6,0)100%);background:linear-gradient(to right,#060606 0%,rgba(6,6,6,0)100%);z-index:2}.slider.jsx-6fd8b8e580196a33::before{top:0;left:0}.slider.jsx-6fd8b8e580196a33::after{top:0;right:0;-webkit-transform:rotatez(180deg);-moz-transform:rotatez(180deg);-ms-transform:rotatez(180deg);-o-transform:rotatez(180deg);transform:rotatez(180deg)}'})]})},I=s(5247),A=s(7246),T=s(8884),W=s(9650);let F=["/portfolio_website/assets/img/my_images/Barcelona/04.JPG","/portfolio_website/assets/img/my_images/Barcelona/05.JPG","/portfolio_website/assets/img/my_images/Barcelona/10.JPG","/portfolio_website/assets/img/my_images/Barcelona/14.JPG","/portfolio_website/assets/img/my_images/Barcelona/15.JPG","/portfolio_website/assets/img/my_images/Barcelona/16.JPG","/portfolio_website/assets/img/my_images/Barcelona/17.JPG","/portfolio_website/assets/img/my_images/Barcelona/19.JPG","/portfolio_website/assets/img/my_images/Barcelona/20.JPG","/portfolio_website/assets/img/my_images/Barcelona/21.JPG","/portfolio_website/assets/img/my_images/Barcelona/23.JPG","/portfolio_website/assets/img/my_images/Barcelona/24.JPG","/portfolio_website/assets/img/my_images/Barcelona/27.JPG","/portfolio_website/assets/img/my_images/Barcelona/30.JPG","/portfolio_website/assets/img/my_images/Barcelona/34.JPG","/portfolio_website/assets/img/my_images/Barcelona/38.JPG","/portfolio_website/assets/img/my_images/Barcelona/43.JPG","/portfolio_website/assets/img/my_images/Barcelona/48.JPG","/portfolio_website/assets/img/my_images/Barcelona/49.JPG","/portfolio_website/assets/img/my_images/Barcelona/52.JPG","/portfolio_website/assets/img/my_images/Barcelona/53.JPG","/portfolio_website/assets/img/my_images/Barcelona/54.JPG","/portfolio_website/assets/img/my_images/Barcelona/57.JPG","/portfolio_website/assets/img/my_images/Barcelona/60.JPG","/portfolio_website/assets/img/my_images/Paris/04.JPG","/portfolio_website/assets/img/my_images/Paris/06.JPG","/portfolio_website/assets/img/my_images/Paris/08.JPG","/portfolio_website/assets/img/my_images/Paris/09.JPG","/portfolio_website/assets/img/my_images/Paris/10.JPG","/portfolio_website/assets/img/my_images/Paris/12.JPG","/portfolio_website/assets/img/my_images/Paris/14.JPG","/portfolio_website/assets/img/my_images/Paris/15.JPG","/portfolio_website/assets/img/my_images/Paris/16.JPG","/portfolio_website/assets/img/my_images/Paris/17.JPG","/portfolio_website/assets/img/my_images/Paris/18.JPG","/portfolio_website/assets/img/my_images/Paris/19.JPG","/portfolio_website/assets/img/my_images/Paris/21.JPG","/portfolio_website/assets/img/my_images/Paris/24.JPG","/portfolio_website/assets/img/my_images/Paris/28.JPG","/portfolio_website/assets/img/my_images/Paris/31.JPG","/portfolio_website/assets/img/my_images/Paris/33.JPG","/portfolio_website/assets/img/my_images/Paris/36.JPG","/portfolio_website/assets/img/my_images/Paris/37.JPG","/portfolio_website/assets/img/my_images/Paris/38.JPG","/portfolio_website/assets/img/my_images/Paris/46.JPG","/portfolio_website/assets/img/my_images/Paris/49.JPG","/portfolio_website/assets/img/my_images/Paris/54.JPG","/portfolio_website/assets/img/my_images/Paris/55.JPG","/portfolio_website/assets/img/my_images/Paris/56.JPG","/portfolio_website/assets/img/my_images/Paris/57.JPG","/portfolio_website/assets/img/my_images/Paris/59.JPG","/portfolio_website/assets/img/my_images/Paris/61.JPG","/portfolio_website/assets/img/my_images/Paris/63.JPG","/portfolio_website/assets/img/my_images/Paris/65.JPG","/portfolio_website/assets/img/my_images/Prague/15.JPG","/portfolio_website/assets/img/my_images/Prague/16.JPG","/portfolio_website/assets/img/my_images/Prague/18.JPG","/portfolio_website/assets/img/my_images/Prague/19.JPG","/portfolio_website/assets/img/my_images/Prague/20.JPG","/portfolio_website/assets/img/my_images/Prague/21.JPG","/portfolio_website/assets/img/my_images/Prague/22.JPG","/portfolio_website/assets/img/my_images/Prague/23.JPG","/portfolio_website/assets/img/my_images/Prague/24.JPG","/portfolio_website/assets/img/my_images/Prague/25.JPG","/portfolio_website/assets/img/my_images/Prague/26.JPG","/portfolio_website/assets/img/my_images/Prague/27.JPG","/portfolio_website/assets/img/my_images/Prague/28.JPG","/portfolio_website/assets/img/my_images/Prague/30.JPG","/portfolio_website/assets/img/my_images/Prague/31.JPG","/portfolio_website/assets/img/my_images/Prague/32.JPG","/portfolio_website/assets/img/my_images/Prague/33.JPG","/portfolio_website/assets/img/my_images/Prague/36.JPG","/portfolio_website/assets/img/my_images/Prague/37.JPG","/portfolio_website/assets/img/my_images/Prague/38.JPG","/portfolio_website/assets/img/my_images/Prague/39.JPG","/portfolio_website/assets/img/my_images/Rome/06.JPG","/portfolio_website/assets/img/my_images/Rome/38.JPG","/portfolio_website/assets/img/my_images/Rome/41.JPG","/portfolio_website/assets/img/my_images/Rome/42.JPG","/portfolio_website/assets/img/my_images/Rome/44.JPG","/portfolio_website/assets/img/my_images/Rome/45.JPG","/portfolio_website/assets/img/my_images/Rome/48.JPG","/portfolio_website/assets/img/my_images/Rome/49.JPG","/portfolio_website/assets/img/my_images/Rome/51.JPG","/portfolio_website/assets/img/my_images/Rome/52.JPG","/portfolio_website/assets/img/my_images/Rome/59.JPG","/portfolio_website/assets/img/my_images/Rome/60.JPG","/portfolio_website/assets/img/my_images/Rome/64.JPG","/portfolio_website/assets/img/my_images/Rome/66.JPG"];var X=()=>{let[e,t]=(0,i.useState)(F.map(e=>({src:e,status:"inactive",x:0,y:0,order:-1}))),[s,o]=(0,i.useState)(0),[r,l]=(0,i.useState)({x:0,y:0}),[n,m]=(0,i.useState)(!1),c=(e,a,i)=>{t(t=>t.map((t,o)=>o===e?{...t,status:"active",x:a,y:i,order:s}:t)),l({x:a,y:i})},x=(e,t)=>Math.hypot(e-r.x,t-r.y),d=(a,i)=>{if(x(a,i)>window.innerWidth/20){let r=s%e.length,l=(s-5+e.length)%e.length;c(r,a,i),t(e=>e.map((e,t)=>t===l?{...e,status:"inactive",order:-1}:e)),o(e=>e+1)}};return(0,a.jsx)("div",{style:{position:"relative",height:"100vh",width:"100vw",overflow:"hidden"},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),onMouseMove:e=>{if(n){let t=e.currentTarget.getBoundingClientRect();d(e.clientX-t.left,e.clientY-t.top)}},onTouchMove:e=>{if(n){let t=e.currentTarget.getBoundingClientRect();d(e.touches[0].clientX-t.left,e.touches[0].clientY-t.top)}},children:e.map((e,t)=>(0,a.jsx)(k.default,{src:e.src,alt:"slider-".concat(t),width:500,height:500,style:{position:"absolute",display:"active"===e.status?"block":"none",left:"".concat(e.x,"px"),top:"".concat(e.y,"px"),width:"40vmin",transform:"translate(-50%, -50%)",transition:"opacity 400ms ease, left 100ms, top 100ms",zIndex:e.order}},t))})},U=()=>{let e=(0,i.useRef)(null),t=[{title:"Home",icon:(0,a.jsx)(I.Z,{className:"h-full w-full text-neutral-500 dark:text-neutral-300"}),href:"#"},{title:"LinkedIn",icon:(0,a.jsx)(A.Z,{className:"h-full w-full text-neutral-500 dark:text-neutral-300"}),href:"https://www.linkedin.com/in/igordjuric404/"},{title:"GitHub",icon:(0,a.jsx)(T.Z,{className:"h-full w-full text-neutral-500 dark:text-neutral-300"}),href:"https://github.com/igordjuric404?tab=repositories"},{title:"Email",icon:(0,a.jsx)(W.Z,{className:"h-full w-full text-neutral-500 dark:text-neutral-300"}),href:"https://mail.google.com/mail/u/0/?fs=1&to=igordjuric404@gmail.com&tf=cm"}];return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"scroll main flex-grow flex flex-col items-start justify-center relative",style:{width:"100vw"},ref:e,children:[(0,a.jsx)(g,{children:(0,a.jsxs)("div",{className:"absolute z-50 inset-0 flex flex-col items-left justify-center text-white font-bold px-4 pointer-events-none",children:[(0,a.jsx)("p",{className:"text-black h-[200px] text-3xl text-left md:text-4xl lg:text-9xl ml-[50px] glow-text integral-bold",children:"Igor Djuric"}),(0,a.jsx)("p",{className:"text-black h-[100px] text-3xl text-left md:text-4xl lg:text-2xl ml-[57px] mt-[10px] glow-text-stronger integral-bold",children:"Frontend developer"})]})}),(0,a.jsx)("div",{className:"relative top-[-300px] bg-gradient-to-b from-transparent z-100 to-[#060606] h-[300px] w-[100vw] pointer-events-none"}),(0,a.jsxs)("div",{className:"w-[100vw] h-[auto] pt-[10px] mt-[-300px] bg-[#060606]",children:[(0,a.jsx)("h1",{className:"text-2xl md:text-5xl font-bold dark:text-white pb-[50px] monument-bold",children:"My career path"}),(0,a.jsx)(N,{})]}),(0,a.jsx)("div",{className:"flex flex-col items-center justify-center w-[100vw] h-[400px] bg-[#060606]",children:(0,a.jsx)(D,{})}),(0,a.jsx)("div",{className:"w-[100vw] h-[auto] pt-[10px] mt-[-300px] bg-[#060606]",children:(0,a.jsx)(G,{products:[{title:"CREF",link:"https://cref.eakademija.com/",thumbnail:"/portfolio_website/assets/img/cref.png"},{title:"Има на ћирилици",link:"https://xn--80aawcaaawel9a5e7n.xn--90a3ac/public/",thumbnail:"/portfolio_website/assets/img/rnids.png"},{title:"CoinSnap",link:"https://coinsnap.io/en/",thumbnail:"/portfolio_website/assets/img/coinsnap.png"},{title:"empty1",link:"#",thumbnail:"/portfolio_website/assets/img/empty.png"},{title:"empty2",link:"#",thumbnail:"/portfolio_website/assets/img/empty.png"},{title:"Plagiarsm detector",link:"https://github.com/igordjuric404/Plagiarism_Detector",thumbnail:"/portfolio_website/assets/img/plagiarism.png"},{title:"E-Case",link:"https://e-case.eakademija.com/",thumbnail:"/portfolio_website/assets/img/ecase.png"},{title:"Against violence hackaton",link:"https://github.com/igordjuric404/Against_Violence",thumbnail:"/portfolio_website/assets/img/against_violence.png"}]})}),(0,a.jsxs)("div",{className:"w-[100vw] h-[auto] pt-[10px] bg-[#060606] images",children:[(0,a.jsxs)("div",{className:"max-w-7xl relative mx-auto px-4 w-full left-0 top-0",children:[(0,a.jsx)("h1",{className:"text-2xl md:text-5xl font-bold dark:text-white monument-bold",children:"My hobbies"}),(0,a.jsx)("p",{className:"max-w-5xl text-base md:text-xl mt-8 pb-[20px] dark:text-neutral-200 monument",children:"Outside of coding, I enjoy sports, cooking, video games, and capturing photos with my 1969 analog camera when I travel."})]}),(0,a.jsx)(X,{})]}),(0,a.jsx)(p,{className:"absolute sidebar z-1000 left-0 top-0",observeRef:e,children:(0,a.jsx)("div",{className:"scroll beam w-[5vw] h-[502vh] z-1000 "})}),(0,a.jsx)("div",{className:"fixed bottom-0 w-[100vw] h-[90px] dock flex items-center justify-center",children:(0,a.jsx)(w,{mobileClassName:"translate-y-20",items:t})})]})})}},2614:function(){}},function(e){e.O(0,[671,971,69,744],function(){return e(e.s=5156)}),_N_E=e.O()}]);