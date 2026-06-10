import{A as e,B as t,E as n,R as r,b as i,n as a,o}from"./widev-V_5yEuMT.js";import{a as s,c,d as l,g as u,h as d,l as f,n as p,o as m,p as h,t as g,y as _}from"./firebase-_L-ceeDf.js";import{n as v}from"./firebase--f4B31o7.js";var y=`chatSmileMsgs`,b=.1,x=7,S=5,ee=3e4,C=500,w=[],T=[],E=``,D=null,O=!1,k=``,A=``,j=!1,M=!0,N=null,P=()=>`
  <div class="chat_wrap wi_fadeUp">
    <div class="chat_container" id="chatContainer">

      <!-- ═══ SIDEBAR (LEFT COLUMN) ═══ -->
      <aside class="chat_sidebar">
        <div class="chat_sidebar_header">
          <div class="chat_sidebar_title">
            <i class="fas fa-users-viewfinder"></i>
            <h2>Mi Equipo</h2>
            <span class="chat_sidebar_count" id="sidebarCount">0</span>
          </div>
          <button class="chat_sidebar_close_btn" id="chatSidebarClose" title="Cerrar">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="chat_sidebar_search">
          <div class="chat_search_box">
            <i class="fas fa-search"></i>
            <input
              type="text"
              id="chatSearchInput"
              placeholder="Buscar compañero…"
              autocomplete="off"
            >
          </div>
        </div>

        <div class="chat_sidebar_list" id="chatSidebarList">
          ${F()}
        </div>
      </aside>

      <!-- ═══ MAIN CHAT (RIGHT COLUMN) ═══ -->
      <main class="chat_main">
        <!-- ══ HEADER ══ -->
        <div class="chat_header smw_loading" id="chatHeader">
          <div class="chat_header_left">
            <button class="chat_sidebar_toggle_btn" id="chatSidebarToggle" title="Ver colaboradores">
              <i class="fas fa-users"></i>
              <span class="chat_sidebar_indicator"></span>
            </button>
            <div class="chat_header_icon">
              <i class="fas fa-comments"></i>
            </div>
            <div class="chat_header_text">
              <h1 class="chat_title">Chat del Equipo</h1>
              <p class="chat_subtitle">Canal interno de <em>Usuarios</em></p>
            </div>
          </div>
          <div class="chat_header_actions">
            <div class="chat_online_badge" id="chatOnline">
              <span class="chat_online_dot"></span>
              <span id="chatOnlineCount">—</span> activos
            </div>
            <button class="chat_refresh_btn" id="chatRefresh" title="Actualizar mensajes">
              <i class="fas fa-sync-alt"></i>
            </button>
          </div>
        </div>

        <!-- ══ MESSAGES AREA ══ -->
        <div class="chat_messages" id="chatMessages">
          ${I()}
        </div>

        <!-- ══ INPUT AREA ══ -->
        <div class="chat_input_area" id="chatInputArea">
          <div class="chat_input_card">
            <div class="chat_textarea_wrap">
              <textarea
                id="chatTextarea"
                class="chat_textarea"
                placeholder="Escribe un mensaje…"
                rows="1"
                maxlength="${C}"
              ></textarea>
            </div>
            <button class="chat_send_btn" id="chatSendBtn" title="Enviar mensaje">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
          <div class="chat_blocked_msg" id="chatBlockedMsg" style="display:none;">
            <i class="fas fa-lock"></i>
            Solo los colaboradores activos pueden enviar mensajes.
          </div>
        </div>
      </main>

    </div>

    <!-- CHAT DELETION MODAL -->
    <div class="chat_modal" id="chatEliminarModal">
      <div class="chat_modal_body">
        <i class="fas fa-trash-alt"></i>
        <h3>¿Eliminar mensaje?</h3>
        <p>Esta acción no se puede deshacer y se borrará para todos.</p>
        <div class="chat_modal_acts">
          <button class="chat_cancel" id="chatCancelDeleteBtn">Cancelar</button>
          <button class="chat_confirm" id="chatConfirmDeleteBtn">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
`;function F(){return[,,,,,].fill(0).map(()=>`
    <div class="chat_sidebar_sk_item">
      <div class="chat_sidebar_sk_avatar smw_sk_el"></div>
      <div class="chat_sidebar_sk_info">
        <div class="chat_sidebar_sk_name smw_sk_el"></div>
        <div class="chat_sidebar_sk_sub smw_sk_el"></div>
      </div>
    </div>
  `).join(``)}function I(){return[{mine:!1,w:`62%`},{mine:!0,w:`48%`},{mine:!1,w:`75%`},{mine:!0,w:`55%`},{mine:!1,w:`68%`}].map(({mine:e,w:t})=>`
    <div class="chat_bubble_wrap ${e?`mine`:`other`}">
      ${e?``:`<div class="chat_sk_avatar smw_sk_el"></div>`}
      <div class="chat_sk_block">
        <div class="chat_sk_name smw_sk_el" style="width:90px;"></div>
        <div class="chat_sk_bubble smw_sk_el" style="width:${t};"></div>
      </div>
      ${e?`<div class="chat_sk_avatar smw_sk_el"></div>`:``}
    </div>
  `).join(``)}var L=(e=``)=>{let t=e.trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0][0].toUpperCase():(t[0][0]+t[t.length-1][0]).toUpperCase():`?`},R=[`#3b82f6`,`#f97316`,`#a855f7`,`#22c55e`,`#ef4444`,`#0ea5e9`,`#eab308`,`#ec4899`],z=(e=``)=>{let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return R[Math.abs(t)%R.length]},B=n=>{if(n.tipo===`snapshot`)return V(n);let r=n.usuario||n.autor||``,i=r&&k&&r.toLowerCase().trim()===k.toLowerCase().trim(),o=z(r),s=L(n.nombre||r||`?`),c=t(n.creado||n.ts),l=H(n.texto||``).replace(/\n/g,`<br>`),u=e.user?.rol===`gestor`||e.user?.rol===`admin`,d=i||u,f=n.imagen,p=`
    <div class="chat_avatar_wrap" title="${a(n.nombre||r||``)}">
      ${f?`<img class="chat_avatar_img" src="${n.imagen}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`:``}
      <div class="chat_avatar_fallback" style="background:${o}; ${f?`display:none;`:``}">
        ${s}
      </div>
    </div>
  `;return`
    <div class="chat_bubble_wrap ${i?`mine`:`other`} chat_msg_in ${n.temp?`chat_msg_pending`:``}" data-id="${n.id||``}">
      ${i?``:p}
      <div class="chat_bubble_col">
        <div class="chat_bubble_meta ${i?`right`:``}">
          <span class="chat_bubble_name">${a(n.nombre||r||`Colaborador`)}</span>
          <span class="chat_bubble_time">${c}</span>
          ${d?`<button class="chat_msg_delete_btn" data-id="${n.id||``}" title="Eliminar mensaje"><i class="fas fa-trash-alt"></i></button>`:``}
        </div>
        <div class="chat_bubble ${i?`mine`:`other`}">
          <span>${l}</span>
        </div>
      </div>
      ${i?p:``}
    </div>
  `},V=e=>`
    <div class="chat_snapshot_card chat_msg_in">
      <div class="chat_snapshot_icon">📊</div>
      <div class="chat_snapshot_body">
        <div class="chat_snapshot_label">
          <i class="fas fa-chart-bar"></i> Snapshot del equipo
          <span class="chat_snapshot_time">${t(e.creado||e.ts)}</span>
        </div>
        <div class="chat_snapshot_text">${H(e.texto||``)}</div>
      </div>
    </div>
  `,H=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),te=e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),U=()=>{let e=document.getElementById(`chatTextarea`),t=e?e.value:``;document.querySelectorAll(`.chat_sidebar_item`).forEach(e=>{let n=(e.getAttribute(`data-nombre`)||``).trim();n&&(RegExp(`@`+te(n)+`(?![a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ])`,`i`).test(t)?e.classList.add(`active`):e.classList.remove(`active`))})},W=(e=!1)=>{let t=document.getElementById(`chatMessages`);if(!t)return;if(!w.length){t.innerHTML=`
      <div class="chat_empty">
        <div class="chat_empty_icon">💬</div>
        <p class="chat_empty_title">Sin mensajes aún</p>
        <p class="chat_empty_sub">¡Sé el primero en escribir!</p>
      </div>
    `;return}let n=w.map(B).join(``);M&&w.length>=x&&(n=`<div class="chat_paginate_container"><button class="chat_paginate_btn" id="chatPaginateBtn"><i class="fas fa-history"></i> Cargar anteriores (+5)</button></div>`+n),t.innerHTML=n,t.querySelectorAll(`.chat_msg_in`).forEach((e,t)=>{e.style.animationDelay=`${t*.02}s`}),e||K()},G=()=>{let e=document.getElementById(`chatSidebarList`);if(!e)return;let t=T.filter(e=>{let t=E.toLowerCase().trim(),n=(e.nombre||``).toLowerCase(),r=(e.apellidos||``).toLowerCase(),i=(e.usuario||``).toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)}),n=document.getElementById(`sidebarCount`);if(n&&(n.textContent=t.length),!t.length){e.innerHTML=`
      <div class="chat_sidebar_empty">
        <i class="fas fa-search-minus"></i>
        <p class="chat_sidebar_empty_title">Sin resultados</p>
        <p class="chat_sidebar_empty_sub">Intenta buscar otra palabra</p>
      </div>
    `;return}e.innerHTML=t.map(e=>{let t=e.usuario===k,n=L(e.nombre||`?`),r=z(e.usuario||``),i=e.estado===`activo`,o=e.imagen||e.avatar,s=o?`<img class="chat_sidebar_avatar_img" src="${o}" alt="${e.nombre}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`:``;return`
      <div class="chat_sidebar_item ${t?`chat_sidebar_item_me`:``}" data-usuario="${e.usuario}" data-nombre="${e.usuario}">
        <div class="chat_sidebar_avatar_wrap">
          ${s}
          <div class="chat_sidebar_avatar_fallback" style="background:${r}; ${o?`display:none;`:``}">
            ${n}
          </div>
          <span class="chat_sidebar_avatar_dot ${i?`online`:`offline`}"></span>
        </div>
        <div class="chat_sidebar_info">
          <div class="chat_sidebar_name_row">
            <span class="chat_sidebar_name">${a(e.nombre)} ${a(e.apellidos||``)}</span>
            ${t?`<span class="chat_sidebar_me_badge">Tú</span>`:``}
          </div>
          <div class="chat_sidebar_status_row">
            <span class="chat_sidebar_role chat_badge_${e.rol||`usuario`}">
              ${e.rol===`gestor`?`Gestor`:e.rol===`admin`?`Admin`:e.rol===`editor`?`Editor`:`Usuario`}
            </span>
            <span class="chat_sidebar_username">@${e.usuario}</span>
          </div>
        </div>
        <div class="chat_sidebar_action" title="Mencionar">
          <i class="fas fa-at"></i>
        </div>
      </div>
    `}).join(``),U()},K=(e=!1)=>{let t=document.getElementById(`chatMessages`);t&&t.scrollTo({top:t.scrollHeight,behavior:e?`smooth`:`auto`})},ne=e=>{let t=document.getElementById(`chatOnlineCount`);t&&(t.textContent=e)},q=async(e=!1)=>{if(j)return;if(j=!0,!e){let e=i(y);if(e&&Array.isArray(e)){w=e,M=!0,W(),j=!1;return}}let t=document.getElementById(`chatRefresh`);e&&t&&t.classList.add(`chat_spinning`);let r=document.getElementById(`chatHeader`);r&&r.classList.add(`smw_loading`);try{let e=await s(f(d(v,`chatGrupal`),c(`creado`,`desc`),m(x)));w=e.docs.reverse().map(e=>({id:e.id,...e.data()})),M=e.size>=x,n(y,w,b),W(),ne(new Set(w.map(e=>e.usuario||e.autor).filter(Boolean)).size)}catch(e){if(console.error(`[Chat] loadMensajes error:`,e),!w.length){let e=document.getElementById(`chatMessages`);e&&(e.innerHTML=`
          <div class="chat_empty chat_empty_error">
            <div class="chat_empty_icon">⚠️</div>
            <p class="chat_empty_title">Error al cargar</p>
            <p class="chat_empty_sub">Revisa tu conexión e intenta de nuevo.</p>
            <button class="chat_retry_btn" id="chatRetry">
              <i class="fas fa-redo"></i> Reintentar
            </button>
          </div>
        `)}o(`No se pudieron cargar los mensajes`,`error`)}finally{j=!1,r&&r.classList.remove(`smw_loading`),t&&t.classList.remove(`chat_spinning`)}},re=async()=>{if(j||!M||!w.length)return;let e=document.getElementById(`chatMessages`);if(!e)return;let t=w[0].creado||w[0].ts;if(!t){o(`No se puede paginar: falta cursor de tiempo`,`warning`);return}j=!0;let n=document.getElementById(`chatPaginateBtn`);n&&(n.disabled=!0,n.innerHTML=`<i class="fas fa-circle-notch fa-spin"></i> Cargando anteriores...`);try{let n=await s(f(d(v,`chatGrupal`),c(`creado`,`desc`),l(t),m(S)));if(n.empty){M=!1,W(!0),o(`No hay más mensajes anteriores`,`info`);return}let r=n.docs.reverse().map(e=>({id:e.id,...e.data()}));r.length<S&&(M=!1);let i=e.scrollHeight,a=e.scrollTop;w=[...r,...w],W(!0),e.scrollTop=a+(e.scrollHeight-i),o(`Cargados ${r.length} mensajes anteriores`,`success`)}catch(e){console.error(`[Chat] loadAnteriores error:`,e),o(`Error al cargar anteriores`,`error`)}finally{j=!1}},J=async()=>{try{T=(await s(f(d(v,`smiles`),h(`estado`,`==`,`activo`)))).docs.map(e=>{let t=e.data();return{usuario:e.id,nombre:t.nombre||``,apellidos:t.apellidos||``,imagen:t.avatar||t.imagen||``,avatar:t.avatar||``,rol:t.rol||`usuario`,estado:t.estado||`activo`,...t}}),G()}catch(e){console.error(`[Chat] _loadColaboradores error:`,e)}},Y=async()=>{if(!O)return;let t=document.getElementById(`chatTextarea`);if(!t)return;let r=t.value.trim();if(!r)return;if(r.length>C){o(`El mensaje excede ${C} caracteres`,`warning`);return}t.value=``,t.dispatchEvent(new Event(`input`,{bubbles:!0})),X(t);let i=`temp_`+Date.now()+Math.random().toString(36).substr(2,5),a=e.user,s=a?.imagen||a?.avatar||``,c={id:i,texto:r,usuario:k,email:a?.email||``,nombre:A,imagen:s,creado:new Date,ts:new Date,tipo:`texto`,temp:!0};w.push(c),W(!1),g(d(v,`chatGrupal`),{texto:r,usuario:k,email:a?.email||``,nombre:A,imagen:s,creado:_(),ts:_(),tipo:`texto`}).then(e=>{let t=w.findIndex(e=>e.id===i);t!==-1&&(w[t].id=e.id,delete w[t].temp,n(y,w,b),W(!0))}).catch(e=>{console.error(`[Chat] Background send error:`,e),o(`No se pudo entregar el mensaje`,`error`),w=w.filter(e=>e.id!==i),n(y,w,b),W(!0)})},X=e=>{e&&(e.style.height=`auto`,e.style.height=Math.min(e.scrollHeight,96)+`px`,e.style.overflowY=e.scrollHeight>96?`auto`:`hidden`)},ie=()=>{let e=document.getElementById(`chatTextarea`),t=document.getElementById(`chatSendBtn`),n=document.getElementById(`chatBlockedMsg`);O?(e&&(e.disabled=!1,e.setAttribute(`placeholder`,`Escribe un mensaje…`)),t&&(t.disabled=!1,t.classList.remove(`chat_send_disabled`)),n&&(n.style.display=`none`)):(e&&(e.disabled=!0,e.setAttribute(`placeholder`,`No puedes enviar mensajes (cuenta inactiva o sin permisos)`)),t&&(t.disabled=!0,t.classList.add(`chat_send_disabled`)),n&&(n.style.display=`block`))},Z=[],Q=(e,t,n)=>{let r=e=>{if(!t)n.call(document,e);else{let r=e.target.closest(t);r&&n.call(r,e)}};document.addEventListener(e,r),Z.push({type:e,wrapper:r})},ae=async()=>{$();let t=document.querySelector(`.chat_wrap`);t&&t.classList.add(`visible`),window.__WIREADY__=!0;let i=e.user;i&&(k=i.usuario||i.email||``,A=i.nombre||i.usuario||`Colaborador`,O=i.estado===`activo`&&(i.rol===`editor`||i.rol===`gestor`||i.rol===`admin`)),ie(),q(!1),J(),D=setInterval(()=>{n(y,null,0),q(!0),J()},ee),Q(`input`,`#chatTextarea`,function(){X(this),U()}),Q(`keydown`,`#chatTextarea`,function(e){e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),Y())}),Q(`click`,`#chatSendBtn`,()=>Y()),Q(`click`,`#chatRefresh`,async function(){n(y,null,0),M=!0,await q(!0),await J(),o(`Mensajes actualizados`,`success`)}),Q(`click`,`#chatPaginateBtn`,()=>re()),Q(`click`,`.chat_msg_delete_btn`,function(){let e=this.getAttribute(`data-id`);if(!e)return;N=e;let t=document.getElementById(`chatEliminarModal`);t&&t.classList.add(`show`)}),Q(`click`,`#chatCancelDeleteBtn, #chatEliminarModal`,function(e){if(e.target.id===`chatCancelDeleteBtn`||e.target.id===`chatEliminarModal`){let e=document.getElementById(`chatEliminarModal`);e&&e.classList.remove(`show`),N=null}}),Q(`click`,`#chatConfirmDeleteBtn`,async function(){if(!N)return;let e=this;r(e,!0,`Eliminando...`);try{let e=N;await p(u(v,`chatGrupal`,e)),o(`Mensaje eliminado permanentemente`,`success`);let t=document.getElementById(`chatEliminarModal`);t&&t.classList.remove(`show`),N=null;let r=document.querySelector(`.chat_bubble_wrap[data-id="${e}"]`);r?(r.style.transition=`opacity 0.3s`,r.style.opacity=`0`,setTimeout(()=>{r.remove(),w=w.filter(t=>t.id!==e),n(y,w,b)},300)):(w=w.filter(t=>t.id!==e),n(y,w,b),W(!0))}catch(e){console.error(`[Chat] deleteDoc error:`,e),o(`Error al eliminar mensaje`,`error`)}finally{r(e,!1,`Eliminar`)}}),Q(`input`,`#chatSearchInput`,function(){E=this.value,G()}),Q(`click`,`.chat_sidebar_item`,function(e){if(!O)return;let t=(this.getAttribute(`data-nombre`)||``).trim(),n=document.getElementById(`chatTextarea`);if(!n)return;let r=this.classList.contains(`active`),i=n.value,a=`@${t}`;if(r){let e=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),r=RegExp(`@`+e+`(?![a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ])\\s*`,`gi`);i=i.replace(r,``),i=i.replace(/\s+/g,` `).trim(),n.value=i?i+` `:``}else{let e=i?i.endsWith(` `)?``:` `:``;n.value=i+e+a+` `}n.dispatchEvent(new Event(`input`,{bubbles:!0})),n.focus(),X(n);let o=document.getElementById(`chatContainer`);o&&o.classList.remove(`chat_sidebar_active`)}),Q(`click`,`#chatSidebarToggle`,function(){let e=document.getElementById(`chatContainer`);e&&e.classList.add(`chat_sidebar_active`)}),Q(`click`,`#chatSidebarClose`,function(){let e=document.getElementById(`chatContainer`);e&&e.classList.remove(`chat_sidebar_active`)}),Q(`click`,`#chatRetry`,()=>{let e=document.getElementById(`chatMessages`);e&&(e.innerHTML=I());let t=document.getElementById(`chatSidebarList`);t&&(t.innerHTML=F()),q(!0),J()}),Q(`focus`,`#chatTextarea`,function(){setTimeout(()=>K(!0),350)})},$=()=>{Z.forEach(({type:e,wrapper:t})=>{document.removeEventListener(e,t)}),Z=[],clearInterval(D),D=null,w=[],T=[],E=``,O=!1,k=``,A=``,j=!1,M=!0,N=null};export{$ as cleanup,ae as init,P as render};