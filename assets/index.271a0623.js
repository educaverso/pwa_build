import{d as p,r as y,o as f,c as _,a as o,t as g,F as v,p as w,b,e as c,f as k,v as S,n as E,g as V}from"./vendor.f16e4887.js";const I=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};I();var L="/assets/logo.03d6d6da.png";var N=(n,r)=>{const a=n.__vccOpts||n;for(const[l,e]of r)a[l]=e;return a};const u=n=>(w("data-v-8203a322"),n=n(),b(),n),W=u(()=>o("p",null,[c(" Recommended IDE setup: "),o("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),c(" + "),o("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),x=u(()=>o("p",null,[c("See "),o("code",null,"README.md"),c(" for more information.")],-1)),O=u(()=>o("p",null,[o("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),c(" | "),o("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),R=u(()=>o("p",null,[c(" Edit "),o("code",null,"components/HelloWorld.vue"),c(" to test hot module replacement. ")],-1)),j=p({props:{msg:null},setup(n){const r=y(0);return(a,l)=>(f(),_(v,null,[o("h1",null,g(n.msg),1),W,x,O,o("button",{type:"button",onClick:l[0]||(l[0]=e=>r.value++)},"count is: "+g(r.value),1),R],64))}});var A=N(j,[["__scopeId","data-v-8203a322"]]);const D=o("img",{alt:"Vue logo",src:L},null,-1),H=p({setup(n){return(r,a)=>(f(),_(v,null,[D,k(A,{msg:"Hello Vue 3 + TypeScript + Vite"})],64))}});function P(n={}){const{immediate:r=!1,onNeedRefresh:a,onOfflineReady:l,onRegistered:e,onRegisterError:t}=n;let s,d;const m=async(i=!0)=>{i&&(s==null||s.addEventListener("controlling",h=>{h.isUpdate&&window.location.reload()})),d&&d.waiting&&await E(d.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){s=new S("/sw.js",{scope:"/",type:"classic"}),s.addEventListener("activated",i=>{i.isUpdate||l==null||l()});{const i=()=>{a==null||a()};s.addEventListener("waiting",i),s.addEventListener("externalwaiting",i)}s.register({immediate:r}).then(i=>{d=i,e==null||e(i)}).catch(i=>{t==null||t(i)})}return m}P({onOfflineReady(){}});V(H).mount("#app");