import{t as e}from"./wii-DZzdzbZC.js";import{V as t,b as n,o as r,s as i}from"./widev-V_5yEuMT.js";import{r as a}from"./main-DgxnGiA0.js";import{a as o,g as s,h as c,l,n as u,o as d,p as f,u as p,y as m}from"./firebase-_L-ceeDf.js";import{n as h,t as g}from"./firebase--f4B31o7.js";var _=[],v=null,y=null,b=null,x=`wi_notas_cache`,S=`wi_notas_cache_time`,C=100,w=1200,T=300*1e3,E=()=>n(`wiSmile`)||{},D=e=>{try{localStorage.setItem(x,JSON.stringify(e)),localStorage.setItem(S,Date.now().toString())}catch{}},O=()=>{try{return JSON.parse(localStorage.getItem(x)||`[]`)}catch{return[]}},k=()=>{let e=parseInt(localStorage.getItem(S)||`0`);return Date.now()-e<T},A=()=>{localStorage.removeItem(x),localStorage.removeItem(S)},j=[{id:`Cielo`,hex:`#0EBEFF`,bg:`rgba(14,190,255,.12)`,tx:`var(--tx)`,rgb:`14,190,255`},{id:`Dulce`,hex:`#FF5C93`,bg:`rgba(255,92,147,.12)`,tx:`var(--tx)`,rgb:`255,92,147`},{id:`Paz`,hex:`#10B981`,bg:`rgba(16,185,129,.12)`,tx:`var(--tx)`,rgb:`16,185,129`},{id:`Mora`,hex:`#8B5CF6`,bg:`rgba(139,92,246,.12)`,tx:`var(--tx)`,rgb:`139,92,246`},{id:`Sol`,hex:`#F59E0B`,bg:`rgba(245,158,11,.12)`,tx:`var(--tx)`,rgb:`245,158,11`}],M=()=>{let n=E();if(!n.email)return location.replace(`/`),``;let r=n.nombre||n.usuario||n.email||g.currentUser?.email||``;return`
  <div class="wn_container">
    <div class="wn_header">
      <div class="wn_info">
        <img src="/smile.avif" alt="${e}" class="wn_avatar" />
        <div class="wn_text">
          <h1><i class="fas fa-sticky-note"></i> Mis Notas</h1>
          <p>${i()} <strong>${r}</strong></p>
        </div>
      </div>
      <div class="wn_actions">
        <button class="wn_btn_new" id="wnNueva" ${t(`Nueva nota`)}>
          <i class="fas fa-plus"></i> <span>Nueva</span>
        </button>
        <div class="wn_status_wrap">
          <div class="wn_status">
            <span class="wn_dot"></span>
            <span class="wn_dotxt">Cargando...</span>
          </div>
          <button class="wn_btn_sync" id="wnSync" ${t(`Sincronizar`)}>
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="wn_grid" id="wnGrid">${X(O())}</div>

    <div class="wn_modal" id="wnEliminar">
      <div class="wn_modal_body">
        <i class="fas fa-trash-alt"></i>
        <h3>¿Eliminar nota?</h3>
        <p>Esta acción no se puede deshacer</p>
        <div class="wn_modal_acts">
          <button class="wn_cancel" id="wnCancel">Cancelar</button>
          <button class="wn_confirm" id="wnConfirm">Eliminar</button>
        </div>
      </div>
    </div>
  </div>`},N=[],P=(e,t,n)=>{let r=e=>{if(!t)n.call(document,e);else{let r=e.target.closest(t);r&&n.call(r,e)}};document.addEventListener(e,r),N.push({type:e,wrapper:r})},F=()=>{$();let e=E();if(!e.email)return a.navigate(`/`);let t=e.email||g.currentUser?.email;P(`click`,`#wnNueva`,()=>B(t)),P(`click`,`#wnSync`,()=>L(t)),P(`click`,`.wn_card`,function(e){e.target.closest(`.wn_toolbar, .wn_colors`)||V(this.getAttribute(`data-id`))}),P(`input`,`.wn_titulo, .wn_contenido`,function(){let e=this.closest(`.wn_card`);e&&H(e.getAttribute(`data-id`),t)}),P(`click`,`.wn_pin`,function(e){e.stopPropagation();let n=this.closest(`.wn_card`);n&&W(n.getAttribute(`data-id`),t)}),P(`click`,`.wn_color`,function(e){e.stopPropagation();let t=this.closest(`.wn_card`);if(t){let e=t.querySelector(`.wn_colors`);e&&e.classList.toggle(`show`)}}),P(`click`,`.wn_color_opt`,function(e){e.stopPropagation();let n=this.closest(`.wn_card`);if(n){G(n.getAttribute(`data-id`),this.getAttribute(`data-color`),t);let e=n.querySelector(`.wn_colors`);e&&e.classList.remove(`show`)}}),P(`click`,`.wn_del`,function(e){e.stopPropagation();let t=this.closest(`.wn_card`);t&&(v=t.getAttribute(`data-id`));let n=document.getElementById(`wnEliminar`);n&&n.classList.add(`show`)}),P(`click`,`#wnCancel, #wnEliminar`,e=>{if(e.target.id===`wnCancel`||e.target.id===`wnEliminar`){let e=document.getElementById(`wnEliminar`);e&&e.classList.remove(`show`),v=null}}),P(`click`,`#wnConfirm`,()=>K(t)),P(`click`,null,e=>{e.target.closest(`.wn_colors, .wn_color`)||document.querySelectorAll(`.wn_colors`).forEach(e=>e.classList.remove(`show`))}),I(t),b=()=>{!document.hidden&&!k()&&R(t,!0)},document.addEventListener(`visibilitychange`,b)},I=e=>{let t=O();if(t.length&&k()){_=t,z();let e=document.getElementById(`wnGrid`);e&&(e.innerHTML=X(_)),q(!0,`Cache`)}else R(e,!1)},L=async e=>{let t=document.getElementById(`wnSync`);t&&t.classList.add(`spinning`),A(),await R(e,!1),t&&t.classList.remove(`spinning`),r(`Sincronizado ✓`,`success`,1500)},R=async(e,t=!1)=>{try{q(!1,`Cargando...`),_=(await o(l(c(h,`wiNotas`),f(`email`,`==`,e),d(C)))).docs.map(e=>({id:e.id,...e.data()})),z(),D(_);let t=document.getElementById(`wnGrid`);t&&(t.innerHTML=X(_)),q(!0)}catch(e){if(console.error(`❌ Notas:`,e),q(!1,`Offline`),!t){let e=O(),t=document.getElementById(`wnGrid`);e.length?(_=e,t&&(t.innerHTML=X(_)),r(`Usando caché local 📦`,`warning`,2e3)):t&&(t.innerHTML=Z(`fa-wifi-slash`,`Sin conexión`,`Verifica tu internet`))}}},z=()=>{_.sort((e,t)=>e.pin===t.pin?(t.fecha?.seconds||0)-(e.fecha?.seconds||0):t.pin?1:-1)},B=async e=>{let t=`nota_${Date.now()}`,{usuario:n=``,nombre:i=``}=E(),a={id:t,titulo:``,contenido:``,color:`Cielo`,pin:!1,email:e,usuario:i||n||e,fecha:{seconds:Date.now()/1e3}};_.unshift(a),D(_);let o=document.getElementById(`wnGrid`);o&&(o.innerHTML=X(_)),setTimeout(()=>{let e=document.querySelector(`.wn_card[data-id="${t}"]`);if(e){e.classList.add(`editing`);let t=e.querySelector(`.wn_titulo`);t&&t.focus()}},50);try{await p(s(h,`wiNotas`,t),{...a,fecha:m()}),q(!0),r(`Nueva nota ✨`,`success`,1200)}catch(e){console.error(`❌`,e),_=_.filter(e=>e.id!==t),D(_);let n=document.getElementById(`wnGrid`);n&&(n.innerHTML=X(_)),r(`Error al crear`,`error`)}},V=e=>{let t=document.querySelector(`.wn_card[data-id="${e}"]`);if(t&&(document.querySelectorAll(`.wn_card.editing`).forEach(e=>{e!==t&&e.classList.remove(`editing`)}),t.classList.toggle(`editing`),t.classList.contains(`editing`))){let e=t.querySelector(`.wn_titulo`);e&&e.focus()}},H=(e,t)=>{clearTimeout(y),y=setTimeout(()=>U(e,t),w)},U=async(e,t)=>{let n=document.querySelector(`.wn_card[data-id="${e}"]`);if(!n)return;let i=n.querySelector(`.wn_titulo`),a=n.querySelector(`.wn_contenido`),o=i?i.textContent.trim():``,c=a?a.textContent.trim():``,l=_.find(t=>t.id===e);if(l&&!(l.titulo===o&&l.contenido===c)){l.titulo=o,l.contenido=c,D(_),n.classList.add(`saving`);try{await p(s(h,`wiNotas`,e),{id:e,titulo:o,contenido:c,color:l.color,pin:l.pin,email:t,usuario:l.usuario,fecha:m()}),q(!0),n.classList.remove(`saving`),n.classList.add(`saved`),setTimeout(()=>n.classList.remove(`saved`),800)}catch(e){console.error(`❌`,e),n.classList.remove(`saving`),r(`Error al guardar`,`error`)}}},W=async(e,t)=>{let n=_.find(t=>t.id===e);if(!n)return;n.pin=!n.pin,z(),D(_);let i=document.getElementById(`wnGrid`);i&&(i.innerHTML=X(_));try{await p(s(h,`wiNotas`,e),{...n,fecha:m()}),q(!0),r(n.pin?`Fijada 📌`:`Desanclada`,`success`,1e3)}catch(e){console.error(`❌`,e),n.pin=!n.pin,z(),D(_);let t=document.getElementById(`wnGrid`);t&&(t.innerHTML=X(_))}},G=async(e,t,n)=>{let r=_.find(t=>t.id===e);if(!r||r.color===t)return;let i=r.color;r.color=t,D(_);let a=document.getElementById(`wnGrid`);a&&(a.innerHTML=X(_));try{await p(s(h,`wiNotas`,e),{...r,fecha:m()}),q(!0)}catch(e){console.error(`❌`,e),r.color=i,D(_);let t=document.getElementById(`wnGrid`);t&&(t.innerHTML=X(_))}},K=async()=>{if(!v)return;let e=v;v=null;let t=document.getElementById(`wnEliminar`);t&&t.classList.remove(`show`);let n=[..._];_=_.filter(t=>t.id!==e),D(_);let i=document.querySelector(`.wn_card[data-id="${e}"]`);i&&i.classList.add(`deleting`);let a=document.getElementById(`wnGrid`);setTimeout(()=>{a&&(a.innerHTML=X(_))},250);try{await u(s(h,`wiNotas`,e)),r(`Eliminada 🗑️`,`success`,1e3)}catch(e){console.error(`❌`,e),_=n,D(_);let t=document.getElementById(`wnGrid`);t&&(t.innerHTML=X(_)),r(`Error al eliminar`,`error`)}},q=(e,t)=>{let n=document.querySelector(`.wn_dot`);n&&(n.classList.remove(`active`,`error`),n.classList.add(e?`active`:`error`));let r=document.querySelector(`.wn_dotxt`);r&&(r.textContent=t||(e?`Online`:`Offline`))},J=e=>j.find(t=>t.id===e)||j[0],Y=e=>{if(!e)return`Ahora`;let t=e.toDate?.()||new Date((e.seconds||0)*1e3),n=new Date;n.setHours(0,0,0,0);let r=new Date(n);return r.setDate(r.getDate()-1),t>=n?t.toLocaleTimeString(`es`,{hour:`2-digit`,minute:`2-digit`}):t>=r?`Ayer`:t.toLocaleDateString(`es`,{day:`numeric`,month:`short`})},X=e=>e?.length?e.map(e=>{let n=J(e.color);return`
    <div class="wn_card${e.pin?` pinned`:``}" data-id="${e.id}" style="--c-bg:${n.bg};--c-tx:${n.tx};--c-accent:${n.hex}">
      <div class="wn_card_inner">
        ${e.pin?`<span class="wn_pin_badge"><i class="fas fa-thumbtack"></i></span>`:``}
        <div class="wn_titulo" contenteditable="true" data-placeholder="Título" spellcheck="false">${Q(e.titulo)}</div>
        <div class="wn_contenido" contenteditable="true" data-placeholder="Escribe aquí..." spellcheck="false">${Q(e.contenido).replace(/\n/g,`<br>`)}</div>
        <div class="wn_footer">
          <span class="wn_fecha">${Y(e.fecha)}</span>
          <span class="wn_saved"><i class="fas fa-check"></i></span>
        </div>
        <div class="wn_toolbar">
          <button class="wn_pin${e.pin?` active`:``}" ${t(`Fijar`)}><i class="fas fa-thumbtack"></i></button>
          <button class="wn_color" ${t(`Color`)}><i class="fas fa-palette"></i></button>
          <button class="wn_del" ${t(`Eliminar`)}><i class="fas fa-trash"></i></button>
        </div>
        <div class="wn_colors">${j.map(t=>`<span class="wn_color_opt${t.id===e.color?` active`:``}" data-color="${t.id}" style="--cc:${t.hex}"></span>`).join(``)}</div>
      </div>
    </div>`}).join(``):Z(`fa-sticky-note`,`Sin notas aún`,`Crea tu primera nota 👆`),Z=(e,t,n)=>`<div class="wn_empty"><i class="fas ${e}"></i><p>${t}</p><span>${n}</span></div>`,Q=e=>String(e||``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]),$=()=>{clearTimeout(y),b&&=(document.removeEventListener(`visibilitychange`,b),null),N.forEach(({type:e,wrapper:t})=>{document.removeEventListener(e,t)}),N=[],_=[],v=null,y=null};export{$ as cleanup,F as init,M as render};