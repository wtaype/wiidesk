import{t as e}from"./wii-DZzdzbZC.js";import{A as t,E as n,O as r,b as i,o as a,s as o,y as s}from"./widev-DCNhLI3Q.js";import{r as c}from"./main-pQv_1tkP.js";import{a as l,g as u,h as d,n as f}from"./firebase-_L-ceeDf.js";import{n as p}from"./firebase--f4B31o7.js";var m=null,h=[],g=`todos`,_=``,v=null,y=`blog`,b=e=>e?(e.seconds?new Date(e.seconds*1e3):new Date(e)).toLocaleDateString(`es-ES`,{day:`numeric`,month:`short`,year:`numeric`}):`—`,x=()=>h.filter(e=>{if(g===`activo`){if(e.activo!==!0)return!1}else if(g===`borrador`&&e.activo===!0)return!1;if(_.trim()){let t=_.toLowerCase().trim();if(!(e.titulo||``).toLowerCase().includes(t))return!1}return!0}),S=()=>{let e=h.length,t=h.filter(e=>e.activo===!0).length,n=h.filter(e=>e.activo!==!0).length,r=h.filter(e=>!!e.pin).length,i=document.getElementById(`kpi_total`),a=document.getElementById(`kpi_active`),o=document.getElementById(`kpi_drafts`),s=document.getElementById(`kpi_pins`);i&&(i.textContent=String(e)),a&&(a.textContent=String(t)),o&&(o.textContent=String(n)),s&&(s.textContent=String(r))},C=()=>{let e=x(),t=document.getElementById(`ed_table_body`),n=document.getElementById(`ed_mobile_list`),i=document.getElementById(`ed_empty`),a=document.getElementById(`list_count_lbl`);if(a&&(a.textContent=`${e.length} artículo${e.length===1?``:`s`} encontrado${e.length===1?``:`s`}`),e.length===0){if(t&&(t.innerHTML=``),n&&(n.innerHTML=``),i){i.classList.remove(`dpn`);let e=document.getElementById(`ed_empty_desc`);e&&(_.trim()?e.textContent=`Ninguna de tus historias coincide con la búsqueda.`:e.textContent=`Aún no has redactado ninguna historia en CumpleWii. ¡Crea tu primer post!`)}return}i&&i.classList.add(`dpn`),t&&(t.innerHTML=e.map(e=>{let t=e.imagen||`https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300`,n=b(e.creado),r=``;return r=e.pin?`<span class="ed_badge_status pinned"><i class="fas fa-thumbtack"></i> Pin</span>`:e.activo?`<span class="ed_badge_status public"><i class="fas fa-globe"></i> Público</span>`:`<span class="ed_badge_status draft"><i class="fas fa-file"></i> Borrador</span>`,`
        <tr id="row_${e.id}">
          <td>
            <div class="ed_post_cell">
              <div class="ed_post_thumb" style="background-image: url('${t}')"></div>
              <div class="ed_post_title_info">
                <a href="/${e.slug||e.id}" class="ed_post_title nv_item" data-page="${e.slug||e.id}">${e.titulo||`Sin título`}</a>
                <span class="ed_post_url">/${e.slug||e.id}</span>
              </div>
            </div>
          </td>
          <td>
            <span class="ed_badge_cat">${e.categoria||`General`}</span>
          </td>
          <td>
            ${r}
          </td>
          <td>
            <span style="font-size:0.85rem;color:var(--tx3);font-weight:600">${n}</span>
          </td>
          <td>
            <div class="ed_actions_col">
              <a href="/nuevo?edit=${e.slug||e.id}" class="ed_btn_icon btn_edit nv_item" data-page="nuevo" title="Editar historia"><i class="fas fa-pen"></i></a>
              <button class="ed_btn_icon btn_delete" data-id="${e.id}" title="Eliminar historia"><i class="fas fa-trash"></i></button>
            </div>
          </td>
        </tr>
      `}).join(``)),n&&(n.innerHTML=e.map(e=>{let t=e.imagen||`https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300`,n=b(e.creado),r=``;return r=e.pin?`<span class="ed_badge_status pinned"><i class="fas fa-thumbtack"></i> Pin</span>`:e.activo?`<span class="ed_badge_status public"><i class="fas fa-globe"></i> Público</span>`:`<span class="ed_badge_status draft"><i class="fas fa-file"></i> Borrador</span>`,`
        <div class="ed_card_item" id="row_mob_${e.id}">
          <div class="ed_mob_header">
            <div class="ed_mob_thumb" style="background-image: url('${t}')"></div>
            <div class="ed_mob_title_box">
              <a href="/${e.slug||e.id}" class="ed_mob_title nv_item" data-page="${e.slug||e.id}">${e.titulo||`Sin título`}</a>
              <span class="ed_badge_cat" style="display:inline-block;margin-top:0.25rem">${e.categoria||`General`}</span>
            </div>
          </div>
          <div class="ed_mob_meta">
            <div>
              ${r}
              <small style="font-size:0.75rem;color:var(--tx3);display:block;margin-top:0.25rem">${n}</small>
            </div>
            <div class="ed_actions_col">
              <a href="/nuevo?edit=${e.slug||e.id}" class="ed_btn_icon btn_edit nv_item" data-page="nuevo"><i class="fas fa-pen"></i></a>
              <button class="ed_btn_icon btn_delete" data-id="${e.id}"><i class="fas fa-trash"></i></button>
            </div>
          </div>
        </div>
      `}).join(``)),r(`[data-showi]`)},w=async(e=!1)=>{let t=document.getElementById(`ed_loader`),r=document.getElementById(`ed_card`),o=`wi_editor_posts_${m.usuario.trim().toLowerCase()}`;if(!e){let e=i(o);if(e&&Array.isArray(e)){h=e,t&&(t.style.display=`none`),r&&(r.style.display=`flex`),S(),C();return}}try{let i=document.getElementById(`ed_btn_refresh`);i&&(i.disabled=!0,i.innerHTML=`<i class="fas fa-sync-alt fa-spin"></i> Actualizando...`);let s=(await l(d(p,y))).docs.map(e=>({id:e.id,...e.data()}));h=m.rol===`admin`?s:s.filter(e=>e.usuario===m.usuario||e.email===m.email),h.sort((e,t)=>{let n=e.creado?.seconds||0;return(t.creado?.seconds||0)-n}),n(o,h,168),t&&(t.style.display=`none`),r&&(r.style.display=`flex`),S(),C(),e&&a(`Historias actualizadas con éxito`,`success`)}catch(e){console.error(e),t&&(t.style.display=`none`),r&&(r.style.display=`flex`),a(`Error cargando base de datos`,`error`)}finally{let e=document.getElementById(`ed_btn_refresh`);e&&(e.disabled=!1,e.innerHTML=`<i class="fas fa-sync-alt"></i> Actualizar`)}},T=async()=>{if(!v)return;let e=v,t=document.getElementById(`delete_modal`);t&&t.classList.add(`dpn`);try{await f(u(p,y,e.id)),typeof localStorage<`u`&&(localStorage.removeItem(`wi_post_${e.slug||e.id}`),Object.keys(localStorage).filter(t=>t.startsWith(`wi_blogs`)||t.startsWith(`wi_draft_edit_`+(e.slug||e.id))).forEach(e=>localStorage.removeItem(e))),h=h.filter(t=>t.id!==e.id),n(`wi_editor_posts_${m.usuario.trim().toLowerCase()}`,h,168),S(),C(),a(`Artículo eliminado permanentemente`,`success`)}catch(e){console.error(e),a(`Error al intentar eliminar el artículo`,`error`)}finally{v=null}},E=e=>{let t=e.target,n=t.closest(`.btn_delete`);if(n){let e=n.getAttribute(`data-id`),t=h.find(t=>t.id===e);if(t){v=t;let e=document.getElementById(`delete_post_title`),n=document.getElementById(`delete_modal`);e&&(e.textContent=`"${t.titulo||`Sin título`}"`),n&&n.classList.remove(`dpn`)}return}let r=t.closest(`.btn_edit`);if(r){e.preventDefault();let t=r.getAttribute(`href`);t&&(history.pushState({ruta:t},``,t),c.navigate(`/nuevo`,!1));return}},D=()=>(t.user?.usuario?t.user:i(`wiSmile`)||{}).email?`
    <div class="ed_container" data-showi="80">
      
      <!-- Loader inicial de Firestore -->
      <div id="ed_loader" style="text-align: center; display: flex; flex-direction: column; gap: 1rem; align-items: center; margin: 8vh auto;">
        <i class="fas fa-circle-notch fa-spin" style="font-size: 3rem; color: var(--mco);"></i>
        <h3 style="color: var(--tx3); font-weight: 600;">Cargando tu espacio de trabajo...</h3>
      </div>

      <div id="ed_card" style="display: none; flex-direction: column; gap: 3vh;">
        
        <!-- ══ ENCABEZADO ══ -->
        <header class="ed_header">
          <div class="ed_header_glow"></div>
          <div class="ed_header_content">
            <div class="ed_welcome_box">
              <div class="ed_welcome_av" id="ed_av">?</div>
              <div class="ed_welcome_txt">
                <h1 id="ed_saludo">Cargando...</h1>
                <p id="ed_role_lbl"><i class="fas fa-pen-nib"></i> Escritor</p>
              </div>
            </div>
            <div class="ed_header_actions">
              <button type="button" class="ed_btn btn_sec" id="ed_btn_refresh" title="Actualizar historias"><i class="fas fa-sync-alt"></i> Actualizar</button>
              <a href="/nuevo" class="ed_btn btn_pri nv_item" data-page="nuevo"><i class="fas fa-plus"></i> Nueva Historia</a>
              <a href="/gestor" class="ed_btn btn_sec nv_item dpn" id="ed_btn_gestor" data-page="gestor"><i class="fas fa-shield-alt"></i> Panel Gestor</a>
            </div>
          </div>
        </header>

        <!-- ══ KPIS REDACCIÓN ══ -->
        <div class="ed_kpi_grid">
          <div class="ed_kpi_card">
            <div class="ed_kpi_icon total"><i class="fas fa-book"></i></div>
            <div class="ed_kpi_info">
              <span class="ed_kpi_label">Mis Historias</span>
              <span class="ed_kpi_val" id="kpi_total">0</span>
            </div>
          </div>
          <div class="ed_kpi_card">
            <div class="ed_kpi_icon active"><i class="fas fa-globe"></i></div>
            <div class="ed_kpi_info">
              <span class="ed_kpi_label">Públicas</span>
              <span class="ed_kpi_val" id="kpi_active">0</span>
            </div>
          </div>
          <div class="ed_kpi_card">
            <div class="ed_kpi_icon drafts"><i class="fas fa-file-signature"></i></div>
            <div class="ed_kpi_info">
              <span class="ed_kpi_label">Borradores</span>
              <span class="ed_kpi_val" id="kpi_drafts">0</span>
            </div>
          </div>
          <div class="ed_kpi_card">
            <div class="ed_kpi_icon pins"><i class="fas fa-thumbtack"></i></div>
            <div class="ed_kpi_info">
              <span class="ed_kpi_label">Fijados (Pins)</span>
              <span class="ed_kpi_val" id="kpi_pins">0</span>
            </div>
          </div>
        </div>

        <!-- ══ TABLA DE PUBLICACIONES ══ -->
        <div class="ed_card_main">
          <div class="ed_card_title_row">
            <h2><i class="fas fa-align-left"></i> Administrar Contenido</h2>
            <span style="font-size: var(--fz_s3); color:var(--tx3); font-weight: 500;" id="list_count_lbl">0 artículos encontrados</span>
          </div>

          <!-- Controles de búsqueda y filtros -->
          <div class="ed_filters_row">
            <div class="ed_search_wrapper">
              <i class="fas fa-search"></i>
              <input 
                type="text" 
                id="ed_search" 
                class="ed_search_input" 
                placeholder="Buscar por título..." 
                autocomplete="off"
              />
            </div>
            <div class="ed_filter_tags">
              <button class="ed_filter_btn active" data-filter="todos">Todos</button>
              <button class="ed_filter_btn" data-filter="activo">Públicos</button>
              <button class="ed_filter_btn" data-filter="borrador">Borradores</button>
            </div>
          </div>

          <!-- LISTADOS (Desktop Table / Mobile Cards) -->
          <div id="ed_list_container">
            
            <!-- Vista Desktop -->
            <div class="ed_table_wrapper">
              <table class="ed_table">
                <thead>
                  <tr>
                    <th>Artículo</th>
                    <th>Categoría</th>
                    <th>Estado</th>
                    <th>Publicado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody id="ed_table_body">
                  <!-- Inyectado con JS -->
                </tbody>
              </table>
            </div>

            <!-- Vista Móvil -->
            <div class="ed_mobile_list" id="ed_mobile_list" data-showi="60">
              <!-- Inyectado con JS -->
            </div>

            <!-- Estado Vacío -->
            <div class="ed_empty_state dpn" id="ed_empty">
              <i class="fas fa-feather"></i>
              <h3>Sin resultados</h3>
              <p id="ed_empty_desc">Aún no has redactado ninguna historia. ¡Crea tu primer post!</p>
            </div>

          </div>

        </div>

      </div>

      <!-- ══ MODAL DE CONFIRMACIÓN DE BORRADO ══ -->
      <div class="ed_modal_overlay dpn" id="delete_modal">
        <div class="ed_modal_card">
          <h3 class="ed_modal_title">¿Eliminar artículo?</h3>
          <p class="ed_modal_text">
            ¿Estás seguro de que deseas eliminar la historia <strong id="delete_post_title">historia</strong>?
            <br /><br />
            Esta acción es permanente y no se podrá deshacer. El artículo será retirado inmediatamente del blog público.
          </p>
          <div class="ed_modal_actions">
            <button class="ed_btn btn_sec" id="delete_btn_cancel">Cancelar</button>
            <button class="ed_btn btn_danger" id="delete_btn_confirm">Sí, Eliminar</button>
          </div>
        </div>
      </div>

    </div>
  `:(setTimeout(()=>c.navigate(`/login`),100),``),O=async()=>{if(m=t.user?.usuario?t.user:i(`wiSmile`)||{},!m.email)return setTimeout(()=>c.navigate(`/login`),100);let n=`${(m.nombre||`?`)[0]}${(m.apellidos||``)[0]||``}`.toUpperCase(),r=document.getElementById(`ed_av`);r&&(r.textContent=n);let a=document.getElementById(`ed_saludo`);a&&(a.innerHTML=`${o()} <strong>${s(m.nombre||m.usuario||``)}</strong>`);let l=document.getElementById(`ed_role_lbl`);l&&(m.rol===`admin`?l.innerHTML=`<i class="fas fa-crown"></i> Administrador`:m.rol===`gestor`?l.innerHTML=`<i class="fas fa-shield-alt"></i> Gestor Editorial`:l.innerHTML=`<i class="fas fa-pen-fancy"></i> Editor`);let u=document.getElementById(`ed_btn_gestor`);u&&(m.rol===`gestor`||m.rol===`admin`)&&u.classList.remove(`dpn`),document.getElementById(`ed_loader`),document.getElementById(`ed_card`),document.addEventListener(`click`,E);let d=document.getElementById(`delete_btn_cancel`),f=document.getElementById(`delete_btn_confirm`),p=document.getElementById(`delete_modal`);d&&p&&d.addEventListener(`click`,()=>{p.classList.add(`dpn`),v=null}),f&&f.addEventListener(`click`,T);let h=document.getElementById(`ed_search`);h&&h.addEventListener(`input`,e=>{_=e.target.value,C()});let y=document.querySelectorAll(`.ed_filter_btn`);y.forEach(e=>{e.addEventListener(`click`,e=>{y.forEach(e=>e.classList.remove(`active`));let t=e.currentTarget;t.classList.add(`active`),g=t.getAttribute(`data-filter`)||`todos`,C()})});let b=document.getElementById(`ed_btn_refresh`);b&&b.addEventListener(`click`,()=>{w(!0)}),await w(!1),console.log(`🏜️ ${e} Dashboard de redacción cargado`),window.__WIREADY__=!0},k=()=>{document.removeEventListener(`click`,E)};export{k as cleanup,O as init,D as render};