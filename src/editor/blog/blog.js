import './blog.css';
import { wiTip, Notificacion, getls, herowi } from '../../widev.js';
import { getPostsPaginated, fetchAll, catInfo, skCard, srcBadge, prefetchPost, clearBlogCache } from './devblog.js';

const PAG_INI = 16, PAG_MAS = 8;
const ORDEN = [{ id:'nuevo', icon:'fa-clock', label:'Recientes' }, { id:'vistas', icon:'fa-fire', label:'Populares' }];

const tplCard = (p) => { const c = catInfo(p.categoria); return `
  <a href="/${p.slug||p.id}" class="bl_card">
    <div class="bl_card_img">
      <img src="${p.imagen||'https://placehold.co/600x400?text=📖'}" alt="${p.imagenAlt||p.titulo}" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=📖'"/>
      <div class="bl_card_over">
        <span class="bl_card_cat" style="--cc:${c.color}"><i class="fas ${c.icon}"></i> ${p.categoria||'—'}</span>
        ${p.pin?`<span class="bl_card_dest" ${wiTip('Destacada')}><i class="fas fa-thumbtack"></i></span>`:''}
      </div>
    </div>
    <div class="bl_card_body">
      <h2 class="bl_card_tit">${p.titulo}</h2>
      <p class="bl_card_res">${p.resumen||''}</p>
      <div class="bl_card_footer">
        <div class="bl_card_meta">
          <span ${wiTip('Tiempo')}><i class="fas fa-clock"></i> ${p.tiempoLectura||'—'}</span>
          <span ${wiTip('Vistas')}><i class="fas fa-eye"></i> ${p.vistas||0}</span>
          <span ${wiTip('Likes')}><i class="fas fa-heart" style="color:#fe0149"></i> ${p.likes||0}</span>
        </div>
        <span class="bl_card_leer">Leer <i class="fas fa-arrow-right"></i></span>
      </div>
    </div>
  </a>`; 
};

export const render = () => `
  <div class="bl_wrap">
    <div class="bl_hero" data-herowi="100">
      <h1 class="bl_hero_tit">Historias que <span class="bl_grad">inspiran</span> 🕊️</h1>
      <p class="bl_hero_sub">Reflexiones, fe y palabras que tocan el corazón</p>
    </div>
    <div class="bl_search_bar" id="bl_search_bar" style="display:none">
      <div class="bl_search_inner">
        <i class="fas fa-search bl_search_ico"></i>
        <input id="bl_search_inp" type="text" placeholder="Buscar historias..." autocomplete="off" spellcheck="false"/>
        <button id="bl_search_close" class="bl_search_close"><i class="fas fa-xmark"></i></button>
      </div>
    </div>
    <div class="bl_bar">
      <div class="bl_cats" id="bl_cats"></div>
      <div class="bl_bar_right">
        <div class="bl_orden">${ORDEN.map(o=>`<button class="bl_ord_btn ${o.id==='nuevo'?'active':''}" data-ord="${o.id}"><i class="fas ${o.icon}"></i><span>${o.label}</span></button>`).join('')}</div>
        <button class="bl_icon_btn" id="bl_search_toggle" ${wiTip('Buscar')}><i class="fas fa-search"></i></button>
        <button class="bl_icon_btn" id="bl_refresh" ${wiTip('Actualizar')}><i class="fas fa-rotate"></i></button>
      </div>
    </div>
    <div class="bl_result_bar" id="bl_result_bar"></div>
    <div class="bl_grid" id="bl_grid" data-herowi="140"></div>
    <div class="bl_mas_wrap" id="bl_mas_wrap" style="display:none"><button class="bl_mas_btn" id="bl_mas"><i class="fas fa-plus"></i> Ver más</button></div>
    <div class="bl_empty dpvc" id="bl_empty" style="display:none"><i class="fas fa-dove"></i><h3>Sin historias</h3></div>
  </div>`;

// ── Helpers de animación slide ──
const slideUp = (el, duration = 200) => {
  el.style.transition = `height ${duration}ms ease, padding-top ${duration}ms ease, padding-bottom ${duration}ms ease, margin-top ${duration}ms ease, margin-bottom ${duration}ms ease`;
  el.style.boxSizing = 'border-box';
  el.style.height = el.offsetHeight + 'px';
  el.offsetHeight; // force repaint
  el.style.overflow = 'hidden';
  el.style.height = '0';
  el.style.paddingTop = '0';
  el.style.paddingBottom = '0';
  el.style.marginTop = '0';
  el.style.marginBottom = '0';
  window.setTimeout(() => {
    el.style.display = 'none';
    el.style.removeProperty('height');
    el.style.removeProperty('padding-top');
    el.style.removeProperty('padding-bottom');
    el.style.removeProperty('margin-top');
    el.style.removeProperty('margin-bottom');
    el.style.removeProperty('overflow');
    el.style.removeProperty('transition');
    el.style.removeProperty('box-sizing');
  }, duration);
};

const slideDown = (el, duration = 200) => {
  el.style.removeProperty('display');
  let display = window.getComputedStyle(el).display;
  if (display === 'none') display = 'block';
  el.style.display = display;
  let height = el.offsetHeight;
  el.style.overflow = 'hidden';
  el.style.height = '0';
  el.style.paddingTop = '0';
  el.style.paddingBottom = '0';
  el.style.marginTop = '0';
  el.style.marginBottom = '0';
  el.offsetHeight; // force repaint
  el.style.boxSizing = 'border-box';
  el.style.transition = `height ${duration}ms ease, padding-top ${duration}ms ease, padding-bottom ${duration}ms ease, margin-top ${duration}ms ease, margin-bottom ${duration}ms ease`;
  el.style.height = height + 'px';
  el.style.removeProperty('padding-top');
  el.style.removeProperty('padding-bottom');
  el.style.removeProperty('margin-top');
  el.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    el.style.removeProperty('height');
    el.style.removeProperty('overflow');
    el.style.removeProperty('transition');
    el.style.removeProperty('box-sizing');
  }, duration);
};

const slideToggle = (el, duration = 200, callback) => {
  if (window.getComputedStyle(el).display === 'none') {
    slideDown(el, duration);
    if (callback) setTimeout(callback, duration);
  } else {
    slideUp(el, duration);
    if (callback) setTimeout(callback, duration);
  }
};

let clickBlogHandler;
let inputBlogHandler;
let mouseoverBlogHandler;

export const init = async () => {
  let cat='todo', ord='nuevo', lista=[], busy=false, lastDoc=null, hasMore=true, isFirstLoad=true;
  const nav = s => import('../../rutas.js').then(m => m.rutas.navigate(s));

  const buildCats = (posts) => {
    const uniq = [...new Set(posts.map(p=>p.categoria).filter(Boolean))].sort();
    localStorage.setItem('wi_blogs_cats', JSON.stringify(uniq));
    const catsEl = document.getElementById('bl_cats');
    if (catsEl) {
      catsEl.innerHTML = `<button class="bl_cat_btn ${cat==='todo'?'active':''}" data-cat="todo" style="--cc:var(--mco)"><i class="fas fa-grip"></i><span>Todas</span></button>` + 
        uniq.map(c => `<button class="bl_cat_btn ${cat===c?'active':''}" data-cat="${c}" style="--cc:${catInfo(c).color}"><i class="fas ${catInfo(c).icon}"></i><span>${c}</span></button>`).join('');
    }
  };

  const grid = (append, newItems = []) => {
    const items = append || newItems.length ? newItems : lista;
    const emptyEl = document.getElementById('bl_empty');
    const masWrapEl = document.getElementById('bl_mas_wrap');
    const gridEl = document.getElementById('bl_grid');

    if (!items.length && !append) {
      if (emptyEl) emptyEl.style.display = '';
      if (masWrapEl) masWrapEl.style.display = 'none';
      if (gridEl) gridEl.innerHTML = '';
      return;
    }
    
    if (emptyEl) emptyEl.style.display = 'none';
    if (gridEl) {
      if (append) {
        gridEl.insertAdjacentHTML('beforeend', items.map(tplCard).join(''));
      } else {
        gridEl.innerHTML = items.map(tplCard).join('');
      }
    }
    herowi();
    if (masWrapEl) {
      masWrapEl.style.display = (newItems.length && newItems !== lista ? false : hasMore) ? '' : 'none';
    }
  };

  const renderInstantaneo = () => {
    try {
      const c = JSON.parse(localStorage.getItem('wi_blogs_cats')||'[]');
      if (c.length) buildCats(c.map(categoria => ({ categoria })));
    } catch {}
    const cData = getls(cat === 'todo' && ord === 'nuevo' ? 'wi_blogs' : `wi_blogs_${cat}_${ord}`);
    if (Array.isArray(cData) && cData.length) {
      lista = cData.slice(0, PAG_INI);
      const resultBarEl = document.getElementById('bl_result_bar');
      if (resultBarEl) {
        resultBarEl.innerHTML = `<span><strong>${lista.length}</strong> historia${lista.length!==1?'s':''}</span><span class="bl_cache_tag" ${wiTip('⚡ Memoria')}><i class="fas fa-bolt"></i> Local</span>`;
      }
      grid(false, lista);
      isFirstLoad = false;
      return true;
    }
    return false;
  };

  const cargar = async (force=false, append=false) => {
    if (busy) return; busy = true;
    const limit = append ? PAG_MAS : PAG_INI;
    if (!append) {
      const emptyEl = document.getElementById('bl_empty');
      const masWrapEl = document.getElementById('bl_mas_wrap');
      if (emptyEl) emptyEl.style.display = 'none';
      if (masWrapEl) masWrapEl.style.display = 'none';
      lastDoc = null;
    }
    
    try {
      const r = await getPostsPaginated(cat, ord, force, lastDoc, limit);
      if (isFirstLoad || JSON.stringify(append ? [] : lista) !== JSON.stringify(r.lista)) {
        lista = append ? [...lista, ...r.lista] : r.lista;
        buildCats(lista);
        grid(append, r.lista);
      }
      lastDoc = r.lastSnap; hasMore = r.lista.length === limit;
      const resultBarEl = document.getElementById('bl_result_bar');
      if (resultBarEl) {
        resultBarEl.innerHTML = `<span><strong>${lista.length}</strong> historia${lista.length!==1?'s':''}</span>${srcBadge(r.fromCache)}`;
      }
    } catch(e) {
      console.error('[blog]', e);
      Notificacion('Error', 'error');
      const gridEl = document.getElementById('bl_grid');
      const emptyEl = document.getElementById('bl_empty');
      if (!append && !lista.length && gridEl && gridEl.querySelectorAll('.bl_card').length === 0) {
        if (emptyEl) emptyEl.style.display = '';
      }
    }
    isFirstLoad = busy = false;
  };

  let sT;
  const doSearch = q => {
    clearTimeout(sT);
    sT = setTimeout(async () => {
      const resultBarEl = document.getElementById('bl_result_bar');
      if (!q.trim()) {
        grid(false);
        if (resultBarEl) {
          resultBarEl.innerHTML = `<span><strong>${lista.length}</strong> historias</span>`;
        }
        return;
      }
      const s = q.toLowerCase();
      if (resultBarEl) {
        resultBarEl.innerHTML = `<span><i class="fas fa-spinner fa-spin"></i> Buscando...</span>`;
      }
      const res = (await fetchAll()).filter(p => [p.titulo, p.resumen, p.categoria, ...(p.tags||[])].some(t => t?.toLowerCase().includes(s)));
      if (resultBarEl) {
        resultBarEl.innerHTML = `<span><i class="fas fa-search"></i> <strong>${res.length}</strong> resultados — "<em>${q}</em>"</span>`;
      }
      grid(false, res);
    }, 400);
  };

  const resetList = () => {
    isFirstLoad = true;
    const gridEl = document.getElementById('bl_grid');
    if (!renderInstantaneo() && gridEl && gridEl.querySelectorAll('.bl_card').length === 0) {
      gridEl.innerHTML = Array(16).fill(skCard()).join('');
    }
  };

  const gridEl = document.getElementById('bl_grid');
  renderInstantaneo() || (gridEl && gridEl.querySelectorAll('.bl_card').length === 0 && (gridEl.innerHTML = Array(16).fill(skCard()).join('')));
  await cargar(false, false);
  window.__WIREADY__ = true;

  clickBlogHandler = async (e) => {
    const catBtn = e.target.closest('.bl_cat_btn');
    if (catBtn) {
      const c = catBtn.getAttribute('data-cat');
      if (c === cat) return;
      cat = c;
      resetList();
      cargar();
      return;
    }

    const ordBtn = e.target.closest('.bl_ord_btn');
    if (ordBtn) {
      const o = ordBtn.getAttribute('data-ord');
      if (o === ord) return;
      ord = o;
      resetList();
      cargar();
      return;
    }

    const refreshBtn = e.target.closest('#bl_refresh');
    if (refreshBtn) {
      refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      refreshBtn.disabled = true;
      clearBlogCache();
      localStorage.removeItem('wi_blogs_cats');
      resetList();
      await cargar(true);
      refreshBtn.innerHTML = '<i class="fas fa-rotate"></i>';
      refreshBtn.disabled = false;
      Notificacion('Actualizado ✅', 'success');
      return;
    }

    const searchToggle = e.target.closest('#bl_search_toggle');
    if (searchToggle) {
      const searchBar = document.getElementById('bl_search_bar');
      if (searchBar) {
        slideToggle(searchBar, 180, () => {
          const searchInp = document.getElementById('bl_search_inp');
          if (window.getComputedStyle(searchBar).display !== 'none') {
            if (searchInp) searchInp.focus();
          } else {
            if (searchInp) searchInp.value = '';
            grid(false);
          }
        });
      }
      return;
    }

    const searchClose = e.target.closest('#bl_search_close');
    if (searchClose) {
      const searchBar = document.getElementById('bl_search_bar');
      if (searchBar) {
        slideUp(searchBar, 160);
      }
      const searchInp = document.getElementById('bl_search_inp');
      if (searchInp) searchInp.value = '';
      grid(false);
      return;
    }

    const masBtn = e.target.closest('#bl_mas');
    if (masBtn) {
      const originalHtml = masBtn.innerHTML;
      masBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
      masBtn.disabled = true;
      cargar(false, true).finally(() => {
        masBtn.innerHTML = originalHtml;
        masBtn.disabled = false;
      });
      return;
    }

    const cardLink = e.target.closest('.bl_card');
    if (cardLink) {
      e.preventDefault();
      const s = cardLink.getAttribute('href');
      if (s) nav(s);
      return;
    }
  };
  document.addEventListener('click', clickBlogHandler);

  inputBlogHandler = (e) => {
    const target = e.target.closest('#bl_search_inp');
    if (target) {
      doSearch(target.value);
    }
  };
  document.addEventListener('input', inputBlogHandler);

  mouseoverBlogHandler = (e) => {
    const target = e.target.closest('.bl_card');
    if (target) {
      const h = target.getAttribute('href');
      if (h) prefetchPost(h.substring(1));
    }
  };
  document.addEventListener('mouseover', mouseoverBlogHandler);
    
  herowi();
};

export const cleanup = () => {
  if (clickBlogHandler) document.removeEventListener('click', clickBlogHandler);
  if (inputBlogHandler) document.removeEventListener('input', inputBlogHandler);
  if (mouseoverBlogHandler) document.removeEventListener('mouseover', mouseoverBlogHandler);
};