import{t as e}from"./wii-DZzdzbZC.js";import{U as t,V as n,b as r,o as i}from"./widev-V_5yEuMT.js";import{r as a}from"./main-Br4xgtk5.js";import{a as o,g as s,h as c,l,n as u,o as d,p as f,u as p,y as m}from"./firebase-_L-ceeDf.js";import{n as h,t as g}from"./firebase--f4B31o7.js";var _=[],v=null,y=!1,b=null,x=null,S=`wi_mensajes_cache`,C=50,w=()=>r(`wiSmile`)||{},T=e=>{try{localStorage.setItem(S,JSON.stringify(e))}catch{}},E=()=>{try{return JSON.parse(localStorage.getItem(S)||`[]`)}catch{return[]}},D=()=>{let e=document.getElementById(`wmChat`);e&&requestAnimationFrame(()=>e.scrollTop=e.scrollHeight)},O=()=>{let t=w();return t.email?`
  <div class="wm_container">
    <div class="wm_header">
      <div class="wm_info">
        <img src="/smile.avif" alt="${e}" class="wm_avatar" />
        <div class="wm_text">
          <h1>Mis Mensajes</h1>
          <p>Hola, <strong>${t.nombre||t.usuario||t.email||g.currentUser?.email||``}</strong></p>
        </div>
      </div>
      <div class="wm_status">
        <span class="wm_dot"></span>
        <span class="wm_dotxt">Conectando...</span>
      </div>
    </div>

    <div class="wm_chat" id="wmChat">${R(E())}</div>

    <div class="wm_input">
      <div class="wm_wrap">
        <textarea id="wmNuevo" placeholder="Escribe un mensaje." rows="1" maxlength="500"></textarea>
        <span class="wm_count" id="wmCount">0/500</span>
      </div>
      <button id="wmEnviar" disabled ${n(`Enviar · Enter`)}><i class="fas fa-paper-plane"></i></button>
    </div>

    <div class="wm_modal" id="wmEliminar">
      <div class="wm_modal_body">
        <i class="fas fa-trash-alt"></i>
        <h3>¿Eliminar mensaje?</h3>
        <p>Esta acción no se puede deshacer</p>
        <div class="wm_modal_acts">
          <button class="wm_cancel" id="wmCancel">Cancelar</button>
          <button class="wm_confirm" id="wmConfirm">Eliminar</button>
        </div>
      </div>
    </div>
  </div>`:(location.replace(`/`),``)},k=[],A=(e,t,n)=>{let r=e=>{let r=e.target.closest(t);r&&n.call(r,e)};document.addEventListener(e,r),k.push({type:e,wrapper:r})},j=()=>{V();let e=w();if(!e.email)return a.navigate(`/`);let n=e.email||g.currentUser?.email;A(`input`,`#wmNuevo`,function(){let e=document.getElementById(`wmCount`);e&&(e.textContent=`${this.value.length}/500`);let t=document.getElementById(`wmEnviar`);t&&(t.disabled=!this.value.trim()),this.style.height=`auto`,this.style.height=Math.min(this.scrollHeight,150)+`px`}),A(`keydown`,`#wmNuevo`,e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),N(n))}),A(`click`,`#wmEnviar`,()=>N(n)),A(`click`,`.wm_item`,function(e){if(e.target.closest(`.wm_del`))return;let n=this.getAttribute(`data-id`),r=_.find(e=>e.id===n);r&&(t(r.mensaje,this,`¡Copiado! <i class="fas fa-check-circle"></i>`),this.classList.add(`copied`),setTimeout(()=>this.classList.remove(`copied`),800))}),A(`click`,`.wm_del`,function(e){e.stopPropagation(),v=this.getAttribute(`data-id`);let t=document.getElementById(`wmEliminar`);t&&t.classList.add(`show`)}),A(`click`,`#wmCancel, #wmEliminar`,e=>{if(e.target.id===`wmCancel`||e.target.id===`wmEliminar`){let e=document.getElementById(`wmEliminar`);e&&e.classList.remove(`show`),v=null}}),A(`click`,`#wmConfirm`,P),M(n,!0),b=setInterval(()=>!document.hidden&&M(n,!0),3e4),x=()=>{!document.hidden&&M(n,!0)},document.addEventListener(`visibilitychange`,x),D()},M=async(e,t=!1)=>{try{_=(await o(l(c(h,`wiMensajes`),f(`email`,`==`,e),d(C)))).docs.map(e=>({id:e.id,...e.data()})).sort((e,t)=>(e.fecha?.seconds||0)-(t.fecha?.seconds||0)),T(_);let t=document.getElementById(`wmChat`);t&&(t.innerHTML=R(_)),F(!0),D()}catch(e){if(console.error(`❌`,e),F(!1),!t){let e=E(),t=document.getElementById(`wmChat`);e.length?(_=e,t&&(t.innerHTML=R(_)),i(`Caché local 📦`,`warning`,2e3)):t&&(t.innerHTML=z(`fa-wifi-slash`,`Sin conexión`,`Verifica tu internet`))}}},N=e=>{if(y)return;let t=document.getElementById(`wmNuevo`);if(!t)return;let n=t.value.trim();if(!n)return;y=!0;let{usuario:r=``,nombre:a=``}=w(),o=`m${Date.now()}`,c={id:o,mensaje:n,email:e,usuario:a||r||e,fecha:{seconds:Date.now()/1e3}};_.push(c),T(_);let l=document.getElementById(`wmChat`);l&&(l.innerHTML=R(_)),D(),t.value=``,t.style.height=`auto`,t.focus();let u=document.getElementById(`wmCount`);u&&(u.textContent=`0/500`);let d=document.getElementById(`wmEnviar`);d&&(d.disabled=!0),p(s(h,`wiMensajes`,o),{id:o,mensaje:n,email:e,usuario:a||r||e,fecha:m()}).then(()=>{F(!0)}).catch(e=>{console.error(`❌`,e),_=_.filter(e=>e.id!==o),T(_);let t=document.getElementById(`wmChat`);t&&(t.innerHTML=R(_)),i(`Error al guardar`,`error`)}).finally(()=>{y=!1})},P=()=>{if(!v)return;let e=v;v=null;let t=document.getElementById(`wmEliminar`);t&&t.classList.remove(`show`);let n=[..._];_=_.filter(t=>t.id!==e),T(_);let r=document.querySelector(`.wm_item[data-id="${e}"]`);r&&r.classList.add(`deleting`),setTimeout(()=>{let e=document.getElementById(`wmChat`);e&&(e.innerHTML=R(_))},250),u(s(h,`wiMensajes`,e)).then(()=>i(`Eliminado 🗑️`,`success`,1200)).catch(e=>{console.error(`❌`,e),_=n,T(_);let t=document.getElementById(`wmChat`);t&&(t.innerHTML=R(_)),i(`Error al eliminar`,`error`)})},F=e=>{let t=document.querySelector(`.wm_dot`);t&&(t.classList.remove(`active`,`error`),t.classList.add(e?`active`:`error`));let n=document.querySelector(`.wm_dotxt`);n&&(n.textContent=e?`Online`:`Offline`)},I=e=>{if(!e)return`Hoy`;let t=e.toDate?.()||new Date((e.seconds||0)*1e3),n=new Date,r=new Date(n);return n.setHours(0,0,0,0),r.setDate(r.getDate()-1),r.setHours(0,0,0,0),t>=n?`Hoy`:t>=r?`Ayer`:t.toLocaleDateString(`es`,{day:`numeric`,month:`long`})},L=e=>e?(e.toDate?.()||new Date((e.seconds||0)*1e3)).toLocaleTimeString(`es`,{hour:`2-digit`,minute:`2-digit`}):`Ahora`,R=e=>{if(!e?.length)return z(`fa-comment-dots`,`Sin mensajes aún`,`Escribe tu primer mensaje 👇`);let t=``;return e.map(e=>{let r=I(e.fecha),i=r===t?``:`<div class="wm_sep"><span>${r}</span></div>`;return t=r,`${i}<div class="wm_item" data-id="${e.id}" ${n(`Click para copiar`)}>
      <div class="wm_bubble">
        <p class="wm_txt">${B(e.mensaje).replace(/\n/g,`<br>`)}</p>
        <div class="wm_foot"><span class="wm_time">${L(e.fecha)}</span><i class="fas fa-check-double wm_check"></i></div>
      </div>
      <button class="wm_del" data-id="${e.id}" ${n(`Eliminar`)}><i class="fas fa-trash"></i></button>
    </div>`}).join(``)},z=(e,t,n)=>`<div class="wm_empty"><i class="fas ${e}"></i><p>${t}</p><span>${n}</span></div>`,B=e=>String(e||``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]),V=()=>{clearInterval(b),b=null,x&&=(document.removeEventListener(`visibilitychange`,x),null),k.forEach(({type:e,wrapper:t})=>{document.removeEventListener(e,t)}),k=[],_=[],v=null,y=!1};export{V as cleanup,j as init,O as render};