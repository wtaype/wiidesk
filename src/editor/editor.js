import './editor.css';
import { db } from '../firebase.js';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { wiAuth, Notificacion, Saludar, getNombre, getls, savels, showi } from '../widev.js';
import { app } from '../wii.js';
import { rutas } from '../rutas.js';

let u = null;
let posts = [];
let filterState = 'todos';
let busqueda = '';
let activeDeletePost = null;

const COL_BLOG = 'blog';

const formatTime = (ts) => {
  if (!ts) return '—';
  const date = ts.seconds ? new Date(ts.seconds * 1000) : new Date(ts);
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
};

const getFiltered = () => {
  return posts.filter(p => {
    // 1. Filtro por Estado
    if (filterState === 'activo') {
      if (p.activo !== true) return false;
    } else if (filterState === 'borrador') {
      if (p.activo === true) return false;
    }

    // 2. Filtro por Buscador
    if (busqueda.trim()) {
      const queryStr = busqueda.toLowerCase().trim();
      const titStr = (p.titulo || '').toLowerCase();
      if (!titStr.includes(queryStr)) return false;
    }

    return true;
  });
};

const updateKPIs = () => {
  const total = posts.length;
  const active = posts.filter(p => p.activo === true).length;
  const drafts = posts.filter(p => p.activo !== true).length;
  const pins = posts.filter(p => !!p.pin).length;

  const lblTotal = document.getElementById('kpi_total');
  const lblActive = document.getElementById('kpi_active');
  const lblDrafts = document.getElementById('kpi_drafts');
  const lblPins = document.getElementById('kpi_pins');

  if (lblTotal) lblTotal.textContent = String(total);
  if (lblActive) lblActive.textContent = String(active);
  if (lblDrafts) lblDrafts.textContent = String(drafts);
  if (lblPins) lblPins.textContent = String(pins);
};

const renderPosts = () => {
  const list = getFiltered();
  const tableBody = document.getElementById('ed_table_body');
  const mobileList = document.getElementById('ed_mobile_list');
  const emptySec = document.getElementById('ed_empty');
  const countLbl = document.getElementById('list_count_lbl');

  if (countLbl) {
    countLbl.textContent = `${list.length} artículo${list.length === 1 ? '' : 's'} encontrado${list.length === 1 ? '' : 's'}`;
  }

  if (list.length === 0) {
    if (tableBody) tableBody.innerHTML = '';
    if (mobileList) mobileList.innerHTML = '';
    if (emptySec) {
      emptySec.classList.remove('dpn');
      const emptyDesc = document.getElementById('ed_empty_desc');
      if (emptyDesc) {
        if (busqueda.trim()) {
          emptyDesc.textContent = 'Ninguna de tus historias coincide con la búsqueda.';
        } else {
          emptyDesc.textContent = 'Aún no has redactado ninguna historia en CumpleWii. ¡Crea tu primer post!';
        }
      }
    }
    return;
  }

  if (emptySec) emptySec.classList.add('dpn');

  // ── VISTA DESKTOP (TABLA) ──
  if (tableBody) {
    tableBody.innerHTML = list.map(p => {
      const thumb = p.imagen || 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300';
      const dateStr = formatTime(p.creado);
      
      let statusHtml = '';
      if (p.pin) {
        statusHtml = `<span class="ed_badge_status pinned"><i class="fas fa-thumbtack"></i> Pin</span>`;
      } else if (p.activo) {
        statusHtml = `<span class="ed_badge_status public"><i class="fas fa-globe"></i> Público</span>`;
      } else {
        statusHtml = `<span class="ed_badge_status draft"><i class="fas fa-file"></i> Borrador</span>`;
      }

      return `
        <tr id="row_${p.id}">
          <td>
            <div class="ed_post_cell">
              <div class="ed_post_thumb" style="background-image: url('${thumb}')"></div>
              <div class="ed_post_title_info">
                <a href="/${p.slug || p.id}" class="ed_post_title nv_item" data-page="${p.slug || p.id}">${p.titulo || 'Sin título'}</a>
                <span class="ed_post_url">/${p.slug || p.id}</span>
              </div>
            </div>
          </td>
          <td>
            <span class="ed_badge_cat">${p.categoria || 'General'}</span>
          </td>
          <td>
            ${statusHtml}
          </td>
          <td>
            <span style="font-size:0.85rem;color:var(--tx3);font-weight:600">${dateStr}</span>
          </td>
          <td>
            <div class="ed_actions_col">
              <a href="/nuevo?edit=${p.slug || p.id}" class="ed_btn_icon btn_edit nv_item" data-page="nuevo" title="Editar historia"><i class="fas fa-pen"></i></a>
              <button class="ed_btn_icon btn_delete" data-id="${p.id}" title="Eliminar historia"><i class="fas fa-trash"></i></button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  // ── VISTA MÓVIL (TARJETAS) ──
  if (mobileList) {
    mobileList.innerHTML = list.map(p => {
      const thumb = p.imagen || 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300';
      const dateStr = formatTime(p.creado);
      
      let statusHtml = '';
      if (p.pin) {
        statusHtml = `<span class="ed_badge_status pinned"><i class="fas fa-thumbtack"></i> Pin</span>`;
      } else if (p.activo) {
        statusHtml = `<span class="ed_badge_status public"><i class="fas fa-globe"></i> Público</span>`;
      } else {
        statusHtml = `<span class="ed_badge_status draft"><i class="fas fa-file"></i> Borrador</span>`;
      }

      return `
        <div class="ed_card_item" id="row_mob_${p.id}">
          <div class="ed_mob_header">
            <div class="ed_mob_thumb" style="background-image: url('${thumb}')"></div>
            <div class="ed_mob_title_box">
              <a href="/${p.slug || p.id}" class="ed_mob_title nv_item" data-page="${p.slug || p.id}">${p.titulo || 'Sin título'}</a>
              <span class="ed_badge_cat" style="display:inline-block;margin-top:0.25rem">${p.categoria || 'General'}</span>
            </div>
          </div>
          <div class="ed_mob_meta">
            <div>
              ${statusHtml}
              <small style="font-size:0.75rem;color:var(--tx3);display:block;margin-top:0.25rem">${dateStr}</small>
            </div>
            <div class="ed_actions_col">
              <a href="/nuevo?edit=${p.slug || p.id}" class="ed_btn_icon btn_edit nv_item" data-page="nuevo"><i class="fas fa-pen"></i></a>
              <button class="ed_btn_icon btn_delete" data-id="${p.id}"><i class="fas fa-trash"></i></button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  showi('[data-showi]');
};

const fetchAndCachePosts = async (force = false) => {
  const loader = document.getElementById('ed_loader');
  const card = document.getElementById('ed_card');
  const cacheKey = `wi_editor_posts_${u.usuario.trim().toLowerCase()}`;

  if (!force) {
    const cached = getls(cacheKey);
    if (cached && Array.isArray(cached)) {
      posts = cached;
      if (loader) loader.style.display = 'none';
      if (card) card.style.display = 'flex';
      updateKPIs();
      renderPosts();
      return;
    }
  }

  try {
    const btnRefresh = document.getElementById('ed_btn_refresh');
    if (btnRefresh) {
      btnRefresh.disabled = true;
      btnRefresh.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Actualizando...';
    }

    const snap = await getDocs(collection(db, COL_BLOG));
    const allPosts = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    if (u.rol === 'admin') {
      posts = allPosts;
    } else {
      posts = allPosts.filter(p => p.usuario === u.usuario || p.email === u.email);
    }

    posts.sort((a, b) => {
      const tA = a.creado?.seconds || 0;
      const tB = b.creado?.seconds || 0;
      return tB - tA;
    });

    savels(cacheKey, posts, 168);

    if (loader) loader.style.display = 'none';
    if (card) card.style.display = 'flex';

    updateKPIs();
    renderPosts();

    if (force) {
      Notificacion('Historias actualizadas con éxito', 'success');
    }
  } catch(e) {
    console.error(e);
    if (loader) loader.style.display = 'none';
    if (card) card.style.display = 'flex';
    Notificacion('Error cargando base de datos', 'error');
  } finally {
    const btnRefresh = document.getElementById('ed_btn_refresh');
    if (btnRefresh) {
      btnRefresh.disabled = false;
      btnRefresh.innerHTML = '<i class="fas fa-sync-alt"></i> Actualizar';
    }
  }
};

const handleBorrarPost = async () => {
  if (!activeDeletePost) return;
  const p = activeDeletePost;

  const modal = document.getElementById('delete_modal');
  if (modal) modal.classList.add('dpn');

  try {
    await deleteDoc(doc(db, COL_BLOG, p.id));

    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(`wi_post_${p.slug || p.id}`);
      Object.keys(localStorage)
        .filter(k => k.startsWith('wi_blogs') || k.startsWith('wi_draft_edit_' + (p.slug || p.id)))
        .forEach(k => localStorage.removeItem(k));
    }

    posts = posts.filter(item => item.id !== p.id);
    const cacheKey = `wi_editor_posts_${u.usuario.trim().toLowerCase()}`;
    savels(cacheKey, posts, 168);
    updateKPIs();
    renderPosts();
    Notificacion('Artículo eliminado permanentemente', 'success');
  } catch(e) {
    console.error(e);
    Notificacion('Error al intentar eliminar el artículo', 'error');
  } finally {
    activeDeletePost = null;
  }
};

const handleGlobalClicks = (e) => {
  const target = e.target;
  
  // Borrar modal trigger
  const btnDel = target.closest('.btn_delete');
  if (btnDel) {
    const id = btnDel.getAttribute('data-id');
    const p = posts.find(item => item.id === id);
    if (p) {
      activeDeletePost = p;
      const lblTitle = document.getElementById('delete_post_title');
      const modal = document.getElementById('delete_modal');
      if (lblTitle) lblTitle.textContent = `"${p.titulo || 'Sin título'}"`;
      if (modal) modal.classList.remove('dpn');
    }
    return;
  }

  // Interceptar clic en editar post (Workaround de SPA para query params)
  const btnEdit = target.closest('.btn_edit');
  if (btnEdit) {
    e.preventDefault();
    const href = btnEdit.getAttribute('href');
    if (href) {
      history.pushState({ ruta: href }, '', href);
      rutas.navigate('/nuevo', false);
    }
    return;
  }
};

export const render = () => {
  const user = wiAuth.user?.usuario ? wiAuth.user : (getls('wiSmile') || {});
  if (!user.email) {
    setTimeout(() => rutas.navigate('/login'), 100);
    return '';
  }

  return `
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
  `;
};

export const init = async () => {
  u = wiAuth.user?.usuario ? wiAuth.user : (getls('wiSmile') || {});
  if (!u.email) return setTimeout(() => rutas.navigate('/login'), 100);

  // Iniciales
  const iniciales = `${(u.nombre || '?')[0]}${(u.apellidos || '')[0] || ''}`.toUpperCase();
  const avEl = document.getElementById('ed_av');
  if (avEl) avEl.textContent = iniciales;

  // Saludo
  const saludoEl = document.getElementById('ed_saludo');
  if (saludoEl) saludoEl.innerHTML = `${Saludar()} <strong>${getNombre(u.nombre || u.usuario || '')}</strong>`;

  // Role Label
  const roleLbl = document.getElementById('ed_role_lbl');
  if (roleLbl) {
    if (u.rol === 'admin') roleLbl.innerHTML = '<i class="fas fa-crown"></i> Administrador';
    else if (u.rol === 'gestor') roleLbl.innerHTML = '<i class="fas fa-shield-alt"></i> Gestor Editorial';
    else roleLbl.innerHTML = '<i class="fas fa-pen-fancy"></i> Editor';
  }

  // Botón Gestor si rol es gestor o admin
  const btnGestor = document.getElementById('ed_btn_gestor');
  if (btnGestor && (u.rol === 'gestor' || u.rol === 'admin')) {
    btnGestor.classList.remove('dpn');
  }

  const loader = document.getElementById('ed_loader');
  const card = document.getElementById('ed_card');

  // Eventos globales del dashboard
  document.addEventListener('click', handleGlobalClicks);

  // Cancelar/Confirmar borrado
  const btnCancel = document.getElementById('delete_btn_cancel');
  const btnConfirm = document.getElementById('delete_btn_confirm');
  const modal = document.getElementById('delete_modal');

  if (btnCancel && modal) {
    btnCancel.addEventListener('click', () => {
      modal.classList.add('dpn');
      activeDeletePost = null;
    });
  }

  if (btnConfirm) {
    btnConfirm.addEventListener('click', handleBorrarPost);
  }

  // Buscador
  const searchInp = document.getElementById('ed_search');
  if (searchInp) {
    searchInp.addEventListener('input', (e) => {
      busqueda = e.target.value;
      renderPosts();
    });
  }

  // Filtros
  const filters = document.querySelectorAll('.ed_filter_btn');
  filters.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filters.forEach(b => b.classList.remove('active'));
      const activeBtn = e.currentTarget;
      activeBtn.classList.add('active');
      filterState = activeBtn.getAttribute('data-filter') || 'todos';
      renderPosts();
    });
  });

  // Botón Actualizar
  const btnRefresh = document.getElementById('ed_btn_refresh');
  if (btnRefresh) {
    btnRefresh.addEventListener('click', () => {
      fetchAndCachePosts(true);
    });
  }

  await fetchAndCachePosts(false);

  console.log(`🏜️ ${app} Dashboard de redacción cargado`);
  window.__WIREADY__ = true;
};

export const cleanup = () => {
  document.removeEventListener('click', handleGlobalClicks);
};
