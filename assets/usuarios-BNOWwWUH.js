import{E as e,T as t,b as n,n as r,o as i,t as a}from"./widev-V_5yEuMT.js";import{a as o,f as s,g as c,h as l,n as u,y as d}from"./firebase-_L-ceeDf.js";import{n as f}from"./firebase--f4B31o7.js";var p=()=>n(`wiSmile`),m=()=>p()?.rol===`admin`,h=[],g=`todos`,_=``,v=null,y=!1,b=`aduUsuarios`,x=30,S=e=>((e.nombre||``)+` `+(e.apellidos||``)||e.usuario||`?`).trim().split(/\s+/).slice(0,2).map(e=>(e[0]||``).toUpperCase()).join(``),C=(e,t=42)=>{if(e.avatar)return`<div class="adu_avatar" style="width:${t}px;height:${t}px"><img src="${e.avatar}" alt="${a(e.nombre||e.usuario||`?`)}" loading="lazy"/></div>`;let n=S(e);return`<div class="adu_avatar adu_avatar_ini" data-rol="${(e.rol||`usuario`).toLowerCase()}" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.36)}px">${n}</div>`},w=e=>{let t=(e||`usuario`).toLowerCase();return`<span class="adu_rol_badge adu_rol_${t}">${a(t)}</span>`},T=e=>{let t=(e||`free`).toLowerCase();return`<span class="adu_plan_badge adu_plan_${t}">${t.toUpperCase()}</span>`},E=e=>{let t=(e||`activo`).toLowerCase();return`<span class="adu_status adu_status_${t}">${a(t)}</span>`},D=(e,t)=>`<label class="adu_toggle" title="${t?`Activo`:`Inactivo`}">
    <input type="checkbox" class="adu_toggle_activo" data-id="${e}" ${t?`checked`:``}/>
    <span class="adu_toggle_slider" style="--c:#22c55e"></span>
  </label>`,O=()=>{let e=_.toLowerCase().trim();return h.filter(t=>!(g===`activos`&&!t.activo||g===`pendientes`&&(t.estado||`activo`)!==`pendiente`||g===`suspendidos`&&(t.estado||`activo`)!==`suspendido`||g===`inactivos`&&t.activo!==!1&&(t.estado||`activo`)!==`inactivo`||e&&![t.nombre,t.apellidos,t.usuario,t.email,t.id].join(` `).toLowerCase().includes(e)))},k=()=>{let e=h.length,t=h.filter(e=>e.activo===!0).length,n=h.filter(e=>(e.estado||``)===`pendiente`).length,r=h.filter(e=>e.activo===!1||(e.estado||``)===`inactivo`).length,i=document.getElementById(`adu_stat_total`);i&&(i.textContent=e);let a=document.getElementById(`adu_stat_activos`);a&&(a.textContent=t);let o=document.getElementById(`adu_stat_pendientes`);o&&(o.textContent=n);let s=document.getElementById(`adu_stat_inactivos`);s&&(s.textContent=r)},A=()=>m()?`
  <div class="adu_wrap" id="adu_wrap">

    <!-- ══ HEADER CARD ══ -->
    <div class="adu_header_card" id="adu_header_card">
      <div class="adu_header_card_stripe"></div>
      <div class="adu_header_inner">
        <div class="adu_header_text">
          <h1 class="adu_title">
            <i class="fas fa-users-cog"></i>
            Gestión de Usuarios
          </h1>
          <p class="adu_subtitle">Administra cuentas, roles, planes y estado de cada usuario de la plataforma</p>
        </div>
        <div class="adu_header_actions">
          <button class="adu_refresh_btn" id="adu_refresh" title="Actualizar lista">
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- ══ STATS BAR ══ -->
    <div class="adu_stats_bar" id="adu_stats">
      <div class="adu_stat_chip adu_stat_total">
        <span class="adu_stat_num" id="adu_stat_total">—</span>
        <span class="adu_stat_label">Total</span>
      </div>
      <div class="adu_stat_chip adu_stat_activos">
        <span class="adu_stat_num" id="adu_stat_activos">—</span>
        <span class="adu_stat_label">Activos</span>
      </div>
      <div class="adu_stat_chip adu_stat_pendientes">
        <span class="adu_stat_num" id="adu_stat_pendientes">—</span>
        <span class="adu_stat_label">Pendientes</span>
      </div>
      <div class="adu_stat_chip adu_stat_inactivos">
        <span class="adu_stat_num" id="adu_stat_inactivos">—</span>
        <span class="adu_stat_label">Inactivos</span>
      </div>
    </div>

    <!-- ══ SEARCH BAR ══ -->
    <div class="adu_search_bar">
      <i class="fas fa-search adu_search_icon"></i>
      <input
        type="text"
        id="adu_search"
        class="adu_search_input"
        placeholder="Buscar por nombre, usuario o email…"
        autocomplete="off"
      />
    </div>

    <!-- ══ FILTER TABS ══ -->
    <div class="adu_tabs" id="adu_tabs">
      <button class="adu_tab active" data-tab="todos">
        <i class="fas fa-list"></i> Todos
      </button>
      <button class="adu_tab" data-tab="activos">
        <i class="fas fa-circle-check"></i> Activos
      </button>
      <button class="adu_tab" data-tab="pendientes">
        <i class="fas fa-clock"></i> Pendientes
      </button>
      <button class="adu_tab" data-tab="suspendidos">
        <i class="fas fa-ban"></i> Suspendidos
      </button>
      <button class="adu_tab" data-tab="inactivos">
        <i class="fas fa-circle-xmark"></i> Inactivos
      </button>
    </div>

    <!-- ══ TABLE ══ -->
    <div class="adu_table_outer">
      <table class="adu_table" id="adu_table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Plan</th>
            <th>Activo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="adu_tbody">
          <tr><td colspan="9" class="adu_loading_cell">
            <div class="adu_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando usuarios…</div>
          </td></tr>
        </tbody>
      </table>
    </div>

  </div>

  <!-- ══ OVERLAY ══ -->
  <div class="adu_overlay" id="adu_overlay"></div>

  <!-- ══ SIDE PANEL ══ -->
  <aside class="adu_panel" id="adu_panel" aria-hidden="true">
    <div class="adu_panel_header">
      <div class="adu_panel_avatar_wrap" id="adu_panel_avatar"></div>
      <div class="adu_panel_title_wrap">
        <h2 class="adu_panel_name" id="adu_panel_name">Usuario</h2>
        <span class="adu_panel_user" id="adu_panel_user">@usuario</span>
      </div>
      <button class="adu_panel_close" id="adu_panel_close" aria-label="Cerrar panel">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="adu_panel_body">
      <form id="adu_edit_form" autocomplete="off">
        <input type="hidden" id="edit_uid"/>

        <!-- Datos Personales -->
        <div class="adu_form_section">
          <div class="adu_form_section_title"><i class="fas fa-id-card"></i> Datos Personales</div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_nombre">Nombre</label>
            <input class="adu_form_input" id="edit_nombre" type="text" placeholder="Nombre"/>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_apellidos">Apellidos</label>
            <input class="adu_form_input" id="edit_apellidos" type="text" placeholder="Apellidos"/>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_usuario">Usuario (ID)</label>
            <input class="adu_form_input adu_input_locked" id="edit_usuario" type="text" disabled/>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_email">Email</label>
            <input class="adu_form_input adu_input_locked" id="edit_email" type="email" disabled/>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_bio">Bio</label>
            <textarea class="adu_form_input adu_form_textarea" id="edit_bio" placeholder="Descripción breve del usuario…" rows="2"></textarea>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_avatar">Avatar (URL)</label>
            <input class="adu_form_input" id="edit_avatar" type="url" placeholder="https://tu-foto.com/imagen.jpg"/>
          </div>
        </div>

        <!-- Datos de Cuenta -->
        <div class="adu_form_section">
          <div class="adu_form_section_title"><i class="fas fa-shield-halved"></i> Cuenta y Acceso</div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_rol">Rol de acceso</label>
            <select class="adu_form_select" id="edit_rol">
              <option value="usuario">Usuario</option>
              <option value="smile">Smile</option>
              <option value="gestor">Gestor</option>
              <option value="empresa">Empresa</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_plan">Plan de acceso</label>
            <select class="adu_form_select" id="edit_plan">
              <option value="free">Free</option>
              <option value="pro">Pro</option>
              <option value="vip">Vip</option>
            </select>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_estado">Estado</label>
            <select class="adu_form_select" id="edit_estado">
              <option value="activo">Activo</option>
              <option value="pendiente">Pendiente</option>
              <option value="suspendido">Suspendido</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>
          <div class="adu_form_row adu_form_row_inline">
            <label class="adu_form_label">Cuenta activa</label>
            <label class="adu_toggle" id="edit_activo_toggle">
              <input type="checkbox" id="edit_activo"/>
              <span class="adu_toggle_slider" style="--c:#22c55e"></span>
            </label>
          </div>
        </div>

        <div class="adu_panel_footer">
          <button type="submit" class="adu_btn_save" id="adu_btn_save">
            <i class="fas fa-save"></i>
            <span>Guardar cambios</span>
          </button>
        </div>
      </form>
    </div>
  </aside>
`:`<div class="adu_wrap"><div class="adu_empty"><i class="fas fa-ban"></i><p>Acceso denegado.</p></div></div>`,j=()=>{k();let e=O();e.sort((e,t)=>{let n=+!e.activo,r=+!t.activo;return n===r?(e.nombre||e.usuario||``).localeCompare(t.nombre||t.usuario||``,`es`):n-r});let t=document.getElementById(`adu_tbody`);if(t){if(!e.length){let e=_.trim();t.innerHTML=`
      <tr><td colspan="9">
        <div class="adu_empty">
          <i class="fas fa-user-slash"></i>
          <p>${e?`Sin resultados para "<strong>${e}</strong>"`:`No hay usuarios en esta categoría`}</p>
        </div>
      </td></tr>`;return}t.innerHTML=e.map(e=>{let t=(e.estado||``)===`pendiente`,n=r((e.nombre||``)+` `+(e.apellidos||``)).trim()||`—`;return`
      <tr data-id="${e.id}" class="${e.activo?``:`adu_row_inactive`}">
        <td>${C(e,40)}</td>
        <td class="adu_nombre">${n}</td>
        <td class="adu_usuario">@${e.usuario||e.id||`—`}</td>
        <td class="adu_email">${e.email||`—`}</td>
        <td>${w(e.rol)}</td>
        <td>${T(e.plan)}</td>
        <td>${D(e.id,e.activo)}</td>
        <td>${E(e.estado)}</td>
        <td class="adu_actions_cell">
          <button class="adu_btn_editar" data-id="${e.id}" title="Editar usuario">
            <i class="fas fa-pen-to-square"></i> Editar
          </button>
          ${t?`
            <button class="adu_btn_approve" data-id="${e.id}" title="Aprobar cuenta">
              <i class="fas fa-check"></i>
            </button>
            <button class="adu_btn_reject" data-id="${e.id}" title="Rechazar solicitud">
              <i class="fas fa-times"></i>
            </button>`:``}
          <button class="adu_btn_delete" data-id="${e.id}" title="Eliminar usuario">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>`}).join(``)}},M=e=>{let t=h.find(t=>t.id===e);if(!t)return;v=e;let n=r((t.nombre||``)+` `+(t.apellidos||``)).trim()||t.usuario||`—`,i=document.getElementById(`adu_panel_avatar`);i&&(i.innerHTML=C(t,52));let a=document.getElementById(`adu_panel_name`);a&&(a.textContent=n);let o=document.getElementById(`adu_panel_user`);o&&(o.textContent=`@`+(t.usuario||t.id||`—`));let s=document.getElementById(`edit_uid`);s&&(s.value=e);let c=document.getElementById(`edit_nombre`);c&&(c.value=t.nombre||``);let l=document.getElementById(`edit_apellidos`);l&&(l.value=t.apellidos||``);let u=document.getElementById(`edit_usuario`);u&&(u.value=t.usuario||t.id||``);let d=document.getElementById(`edit_email`);d&&(d.value=t.email||``);let f=document.getElementById(`edit_bio`);f&&(f.value=t.bio||``);let p=document.getElementById(`edit_avatar`);p&&(p.value=t.avatar||``);let m=document.getElementById(`edit_rol`);m&&(m.value=t.rol||`usuario`);let g=document.getElementById(`edit_plan`);g&&(g.value=t.plan||`free`);let _=document.getElementById(`edit_estado`);_&&(_.value=t.estado||`activo`);let y=document.getElementById(`edit_activo`);y&&(y.checked=t.activo!==!1);let b=document.getElementById(`adu_panel`);b&&(b.classList.add(`open`),b.setAttribute(`aria-hidden`,`false`));let x=document.getElementById(`adu_overlay`);x&&x.classList.add(`visible`),document.body.classList.add(`adu_no_scroll`)},N=()=>{v=null;let e=document.getElementById(`adu_panel`);e&&(e.classList.remove(`open`),e.setAttribute(`aria-hidden`,`true`));let t=document.getElementById(`adu_overlay`);t&&t.classList.remove(`visible`),document.body.classList.remove(`adu_no_scroll`)},P=async n=>{let r=h.findIndex(e=>e.id===n);if(r===-1)return;let o=!h[r].activo,l=a(h[r].nombre||h[r].usuario||n);try{await s(c(f,`smiles`,n),{activo:o}),h[r].activo=o,t(b),e(b,h,x),j(),i(`${l} ${o?`activado ✅`:`desactivado ❌`}`,o?`success`:`warning`)}catch(e){console.error(`[adu] toggleActivo:`,e),i(`Error al cambiar estado`,`error`),j()}},F=async n=>{let r=h.findIndex(e=>e.id===n);if(r===-1)return;let o=a(h[r].nombre||h[r].usuario||n);try{await s(c(f,`smiles`,n),{estado:`activo`,activo:!0}),h[r].estado=`activo`,h[r].activo=!0,t(b),e(b,h,x),j(),i(`${o} aprobado ✅`,`success`)}catch{i(`Error al aprobar`,`error`)}},I=async n=>{let r=h.findIndex(e=>e.id===n);if(r===-1)return;let o=a(h[r].nombre||h[r].usuario||n);try{await s(c(f,`smiles`,n),{estado:`inactivo`,activo:!1}),h[r].estado=`inactivo`,h[r].activo=!1,t(b),e(b,h,x),j(),i(`Solicitud de ${o} rechazada`,`warning`)}catch{i(`Error al rechazar`,`error`)}},L=async n=>{let r=h.find(e=>e.id===n),o=a(r?.nombre||r?.usuario||n);if(confirm(`¿Eliminar al usuario "${o}"? Esta acción es permanente.`))try{await u(c(f,`smiles`,n)),h=h.filter(e=>e.id!==n),t(b),e(b,h,x),j(),i(`${o} eliminado`,`info`)}catch{i(`Error al eliminar`,`error`)}},R=async()=>{if(y||!v)return;y=!0;let n=document.getElementById(`adu_btn_save`);n&&(n.classList.add(`loading`),n.disabled=!0);let r=document.getElementById(`adu_header_card`);r&&r.classList.add(`adu_loading`);let a=document.getElementById(`edit_nombre`),o=document.getElementById(`edit_apellidos`),l=document.getElementById(`edit_bio`),u=document.getElementById(`edit_avatar`),p=document.getElementById(`edit_rol`),m=document.getElementById(`edit_plan`),g=document.getElementById(`edit_estado`),_=document.getElementById(`edit_activo`),S={nombre:a?a.value.trim():``,apellidos:o?o.value.trim():``,bio:l?l.value.trim():``,avatar:u?u.value.trim():``,rol:p?p.value:`usuario`,plan:m?m.value:`free`,estado:g?g.value:`activo`,activo:_?_.checked:!1,actualizado:d()};Object.keys(S).forEach(e=>{S[e]===``&&e!==`activo`&&delete S[e]});try{await s(c(f,`smiles`,v),S);let n=h.findIndex(e=>e.id===v);n!==-1&&Object.assign(h[n],S),t(b),e(b,h,x),j(),N(),i(`Usuario actualizado ✅`,`success`)}catch(e){console.error(`[adu] saveEdit:`,e),i(`Error al guardar cambios`,`error`)}finally{y=!1,n&&(n.classList.remove(`loading`),n.disabled=!1),r&&r.classList.remove(`adu_loading`)}},z=async(t=!1)=>{if(!t){let e=n(b);if(e){h=e,j();return}}let r=document.getElementById(`adu_tbody`);r&&(r.innerHTML=`
      <tr><td colspan="9" class="adu_loading_cell">
        <div class="adu_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando usuarios…</div>
      </td></tr>`);try{h=(await o(l(f,`smiles`))).docs.map(e=>({id:e.id,usuario:e.id,...e.data()})),h.sort((e,t)=>(e.nombre||e.usuario||``).localeCompare(t.nombre||t.usuario||``,`es`)),e(b,h,x),j()}catch(e){console.error(`[adu] loadUsuarios:`,e),r&&(r.innerHTML=`
        <tr><td colspan="9">
          <div class="adu_empty adu_empty_error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Error al cargar usuarios. Intenta de nuevo.</p>
          </div>
        </td></tr>`),i(`Error al cargar usuarios`,`error`)}},B=[],V=(e,t,n)=>{let r=e=>{if(!t)n.call(document,e);else{let r=e.target.closest(t);r&&n.call(r,e)}};document.addEventListener(e,r),B.push({type:e,wrapper:r})},H=async()=>{if(!m())return;g=`todos`,_=``,v=null;let e=document.getElementById(`adu_wrap`);e&&e.classList.add(`visible`),z(!1),V(`input`,`#adu_search`,function(){_=this.value,j()}),V(`click`,`.adu_tab`,function(){g=this.getAttribute(`data-tab`),document.querySelectorAll(`.adu_tab`).forEach(e=>e.classList.remove(`active`)),this.classList.add(`active`),j()}),V(`click`,`#adu_refresh`,async function(){let e=this;e.classList.add(`adu_spinning`),_=``,g=`todos`;let t=document.getElementById(`adu_search`);t&&(t.value=``),document.querySelectorAll(`.adu_tab`).forEach(e=>e.classList.remove(`active`));let n=document.querySelector(`.adu_tab[data-tab="todos"]`);n&&n.classList.add(`active`),await z(!0),e.classList.remove(`adu_spinning`),i(`Lista actualizada`,`success`)}),V(`change`,`.adu_toggle_activo`,function(){P(this.getAttribute(`data-id`))}),V(`click`,`.adu_btn_editar`,function(e){e.stopPropagation(),M(this.getAttribute(`data-id`))}),V(`click`,`#adu_panel_close`,N),V(`click`,`#adu_overlay`,N),V(`keydown`,null,function(e){e.key===`Escape`&&N()}),V(`submit`,`#adu_edit_form`,function(e){e.preventDefault(),R()}),V(`click`,`.adu_btn_approve`,function(e){e.stopPropagation(),F(this.getAttribute(`data-id`))}),V(`click`,`.adu_btn_reject`,function(e){e.stopPropagation(),I(this.getAttribute(`data-id`))}),V(`click`,`.adu_btn_delete`,function(e){e.stopPropagation(),L(this.getAttribute(`data-id`))})},U=()=>{B.forEach(({type:e,wrapper:t})=>{document.removeEventListener(e,t)}),B=[],document.body.classList.remove(`adu_no_scroll`),h=[],g=`todos`,_=``,v=null,y=!1};export{U as cleanup,H as init,A as render};