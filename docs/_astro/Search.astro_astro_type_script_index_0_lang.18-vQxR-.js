const y="modulepreload",w=function(h){return"/"+h},g={},S=function(u,i,c){let m=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),t=r?.nonce||r?.getAttribute("nonce");m=Promise.allSettled(i.map(n=>{if(n=w(n),n in g)return;g[n]=!0;const d=n.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${f}`))return;const o=document.createElement("link");if(o.rel=d?"stylesheet":y,d||(o.as="script"),o.crossOrigin="",o.href=n,t&&o.setAttribute("nonce",t),document.head.appendChild(o),d)return new Promise((e,s)=>{o.addEventListener("load",e),o.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${n}`)))})}))}function l(r){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=r,window.dispatchEvent(t),!t.defaultPrevented)throw r}return m.then(r=>{for(const t of r||[])t.status==="rejected"&&l(t.reason);return u().catch(l)})},E={ranking:{pageLength:.1,termFrequency:.1,termSaturation:2,termSimilarity:9}};class v extends HTMLElement{constructor(){super();const u=this.querySelector("button[data-open-modal]"),i=this.querySelector("button[data-close-modal]"),c=this.querySelector("dialog"),m=this.querySelector(".dialog-frame"),l=e=>{("href"in(e.target||{})||document.body.contains(e.target)&&!m.contains(e.target))&&t()},r=e=>{c.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),e?.stopPropagation(),window.addEventListener("click",l)},t=()=>c.close();u.addEventListener("click",r),u.disabled=!1,i.addEventListener("click",t),c.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",l)}),window.addEventListener("keydown",e=>{(e.metaKey===!0||e.ctrlKey===!0)&&e.key==="k"&&(c.open?t():r(),e.preventDefault())});let n={};try{n=JSON.parse(this.dataset.translations||"{}")}catch{}const o=this.dataset.stripTrailingSlash!==void 0?e=>e.replace(/(.)\/(#.*)?$/,"$1$2"):e=>e;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(s=>setTimeout(s,1)))(async()=>{const{PagefindUI:s}=await S(async()=>{const{PagefindUI:a}=await import("./ui-core.DklwHuoF.js");return{PagefindUI:a}},[]);new s({...E,element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:n,showSubResults:!0,processResult:a=>{a.url=o(a.url),a.sub_results=a.sub_results.map(p=>(p.url=o(p.url),p))}})})})}}customElements.define("site-search",v);export{S as _};
