import{r as c,v,n as m,R as g,d as y,T as R,a as w,b as S,c as k,e as L,f as u,t as E,u as d,o as b,g as h}from"./vendor.c72630ca.js";const I=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const e of n.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&a(e)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};I();function N(l={}){const{immediate:r=!1,onNeedRefresh:o,onOfflineReady:a,onRegistered:t,onRegisterError:n}=l;let e,i;const f=async(s=!0)=>{s&&(e==null||e.addEventListener("controlling",p=>{p.isUpdate&&window.location.reload()})),i&&i.waiting&&await m(i.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){e=new v("/sw.js",{scope:"/",type:"classic"}),e.addEventListener("activated",s=>{s.isUpdate||a==null||a()});{const s=()=>{o==null||o()};e.addEventListener("waiting",s),e.addEventListener("externalwaiting",s)}e.register({immediate:r}).then(s=>{i=s,t==null||t(s)}).catch(s=>{n==null||n(s)})}return f}function W(l={}){const{immediate:r=!0,onNeedRefresh:o,onOfflineReady:a,onRegistered:t,onRegisterError:n}=l,e=c(!1),i=c(!1);return{updateServiceWorker:N({immediate:r,onNeedRefresh(){e.value=!0,o==null||o()},onOfflineReady(){i.value=!0,a==null||a()},onRegistered:t,onRegisterError:n}),offlineReady:i,needRefresh:e}}g.DEFAULT_BASE_URL="https://localhost:5000/api";const A=y({teste:new R}),O=w({setup(l){W();const r=c(0),o=S({count:1}),a=k(()=>({counter1:r,counter2:o}));return A().teste.find(),(n,e)=>(b(),L("div",null,[u("pre",null,E(d(a)),1),u("button",{onClick:e[0]||(e[0]=i=>r.value++)},"Incrementar 1"),u("button",{onClick:e[1]||(e[1]=i=>d(o).count++)},"Incrementar 2"),u("button",{onClick:e[2]||(e[2]=i=>r.value=10)},"Definir 1 para 10"),u("button",{onClick:e[3]||(e[3]=i=>d(o).count=10)},"Definir 2 para 10")]))}});h(O).mount("#app");
