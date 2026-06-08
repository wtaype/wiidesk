import './nuevo.css';
import { db } from '../../firebase.js';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { COL, getPost, clearPostCache, clearBlogCache, wiSanihtml } from './devblog.js';
import { wiAuth, wiSpin, Notificacion, Mensaje, wiPath, wiTip, getls } from '../../widev.js';
import { linkweb } from '../../wii.js';

const toSlug = s => s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  .replace(/\b(el|la|los|las|de|del|en|un|una|y|a|con|por|para|que|es|se)\b/g,' ')
  .replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,'_').replace(/_{2,}/g,'_').replace(/^_|_$/g,'').slice(0,50);
const countWords = html => { const t=html.replace(/<[^>]*>/g,' ').split(/\s+/).filter(Boolean); return { words:t.length, min:Math.max(1,Math.ceil(t.length/200)) }; };

// ── Detectar modo edición ─────────────────────────────────────
const getEditSlug = () => wiPath.params()?.edit || new URLSearchParams(location.search).get('edit') || null;

export const render = () => {
  const u = wiAuth.user?.usuario ? wiAuth.user : (getls('wiSmile') || {});
  if (!u.email) return `<div class="nu_err dpvc"><i class="fas fa-lock"></i><h2>Acceso restringido</h2><p>Inicia sesión para crear historias</p></div>`;
  const editSlug = getEditSlug();
  return `
  <div class="nu_wrap">
    <div class="nu_head">
      <div class="nu_head_left"><h1><i class="fas fa-${editSlug?'pen':'pen-fancy'}"></i> ${editSlug?'Editar historia':'Nueva historia'}</h1><p>${editSlug?`Editando: <strong>${editSlug}</strong> ✏️`:''}</p></div>
      <div class="nu_head_right">
        ${editSlug?`<a href="/${editSlug}" class="nu_btn_outline" ${wiTip('Ver post')}><i class="fas fa-eye"></i> Ver</a>`:`<button type="button" id="nu_preview_pg" class="nu_btn_outline" ${wiTip('Preview')}><i class="fas fa-eye"></i> Preview</button>`}
        <button type="submit" form="nu_form" id="nu_submit" class="nu_btn_submit"><i class="fas fa-${editSlug?'save':'paper-plane'}"></i> ${editSlug?'Guardar':'Publicar'}</button>
      </div>
    </div>
    <form id="nu_form" autocomplete="off"><div class="nu_layout">
      <div class="nu_left">
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-heading"></i> Título</div>
          <input id="nu_titulo" type="text" class="nu_titulo_inp" placeholder="Historias que inspiren y con mucho valor" maxlength="100" required/>
          <div class="nu_slug_box">
            <span class="nu_slug_label"><i class="fas fa-link"></i> ${linkweb}</span>
            <input id="nu_slug_inp" type="text" placeholder="mi_historia" maxlength="50" spellcheck="false" ${editSlug?'readonly':''}/>
            ${editSlug?'':`<button type="button" id="nu_slug_reset" class="nu_slug_btn" ${wiTip('Regenerar')}><i class="fas fa-rotate"></i></button>`}
          </div>
          <div id="nu_slug_status" class="nu_slug_status">${editSlug?'<span class="ok"><i class="fas fa-lock"></i> Slug bloqueado (edición)</span>':''}</div>
        </div>
        <div class="nu_grid_seo">
          <div class="nu_card">
            <div class="nu_card_title"><i class="fas fa-align-left"></i> Resumen (Meta Description)</div>
            <textarea id="nu_resumen" rows="3" maxlength="160" placeholder="Describe en pocas palabras..."></textarea>
            <div class="nu_counter"><span id="nu_resumen_cnt">0</span>/160</div>
          </div>
          <div class="nu_card">
            <div class="nu_card_title"><i class="fas fa-search"></i> Palabras Clave (Meta Keywords)</div>
            <textarea id="nu_keywords" rows="3" placeholder="amor, fe, esperanza, wiihope..."></textarea>
            <div class="nu_hint">Separa las palabras con comas. Solo para SEO.</div>
          </div>
        </div>
        <div class="nu_card nu_card_editor">
          <div class="nu_card_title_row">
            <span><i class="fas fa-code"></i> Contenido Markdown</span>
            <div class="nu_editor_tabs">
              <button type="button" class="nu_tab active" data-tab="edit"><i class="fas fa-code"></i> Editor</button>
              <button type="button" class="nu_tab" data-tab="prev"><i class="fas fa-eye"></i> Preview</button>
            </div>
          </div>
          <div class="nu_toolbar" style="flex-wrap:wrap;">${[
            [['fa-bold','**texto**', 'Negrita'],['fa-italic','*texto*', 'Cursiva'],['fa-strikethrough','~~texto~~', 'Tachado']],
            [['fa-heading','## Título H2', 'Subtítulo (H2)'],['fa-heading','### Título H3', 'Sección (H3)']],
            [['fa-list-ul','- item\n- item2', 'Lista'],['fa-check-square','- [ ] tarea', 'Checklist'],['fa-quote-right','> cita', 'Citar'],['fa-minus','\n---\n', 'Separador']],
            [['fa-code','`código`', 'Código'],['fa-image','![desc](url)', 'Imagen'],['fa-link','[texto](url)', 'Enlace']]
          ].map((g,i) => `<div style="display:flex;gap:0.4vh${i<3?';border-right:1px solid var(--brd);padding-right:0.6vh;margin-right:0.2vh':''}">${g.map(([ic,tag,tip])=>`<button type="button" class="nu_tool" data-tag='${tag}' ${wiTip(tip)}><i class="fas ${ic}"></i></button>`).join('')}</div>`).join('')}</div>
          <textarea id="nu_contenido" class="nu_code" rows="18" placeholder="Escribe tu historia en Markdown...\n\n## Un nuevo comienzo\n\nHabía una vez..."></textarea>
          <div id="nu_prev_html" class="nu_html_prev dpn po_contenido" style="padding: 1.5vh; border: 1px solid var(--brd); border-radius: 1vh; min-height: 20vh; margin-top: 1vh; background: var(--wb);"></div>
          <div class="nu_content_footer"><span id="nu_palabras" class="nu_hint"><i class="fas fa-font"></i> 0 palabras</span><span id="nu_lectura" class="nu_hint"><i class="fas fa-clock"></i> 1 min</span></div>
        </div>
      </div>
      <div class="nu_right">
        <div class="nu_card nu_card_publish">
          <div class="nu_card_title"><i class="fas fa-rocket"></i> ${editSlug?'Actualizar':'Publicar'}</div>
          <div class="nu_publish_opts">
            <label class="nu_check_l"><input type="checkbox" id="nu_activo" checked/><span><i class="fas fa-globe"></i> Público</span></label>
            <label class="nu_check_l"><input type="checkbox" id="nu_pin"/><span><i class="fas fa-thumbtack"></i> Pin</span></label>
          </div>
          <button type="submit" form="nu_form" class="nu_btn_submit nu_btn_full"><i class="fas fa-${editSlug?'save':'paper-plane'}"></i> ${editSlug?'Guardar cambios':'Publicar'}</button>
        </div>
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-folder"></i> Categoría</div>
          <input id="nu_cat_inp" type="text" placeholder="Ej: Esperanza, Salud..." maxlength="30" required/>
          <div id="nu_cat_sug" class="nu_sug_box"></div>
        </div>
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-tags"></i> Tags</div>
          <input id="nu_tags_inp" type="text" placeholder="Escribe y presiona Enter"/>
          <div id="nu_tag_sug" class="nu_sug_box"></div>
          <div id="nu_tags_box" class="nu_tags_box"></div>
        </div>
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-image"></i> Imágenes</div>
          <div style="display:flex; flex-direction:column; gap:1vh; margin-bottom: 1.5vh;">
            <label style="font-size:var(--fz_s4); color:var(--tx2); font-weight:600;"><i class="fas fa-compress"></i> Miniatura (Inicio-Blog)</label>
            <input id="nu_img" type="url" placeholder="https://... (Sugerido: 334x208px)"/>
            <div id="nu_img_prev" class="nu_img_prev dpn"><img id="nu_img_el" src="" alt=""/><button type="button" id="nu_img_clear" class="nu_img_clear" ${wiTip('Quitar')}><i class="fas fa-xmark"></i></button></div>
          </div>
          <div style="display:flex; flex-direction:column; gap:1vh;">
            <label style="font-size:var(--fz_s4); color:var(--tx2); font-weight:600;"><i class="fas fa-panorama"></i> ImagenTop (Post)</label>
            <input id="nu_img_top" type="url" placeholder="https://... (Sugerido: 1180px425px u horizontal)"/>
            <div id="nu_img_top_prev" class="nu_img_prev dpn"><img id="nu_img_top_el" src="" alt=""/><button type="button" id="nu_img_top_clear" class="nu_img_clear" ${wiTip('Quitar')}><i class="fas fa-xmark"></i></button></div>
          </div>
        </div>
        <div class="nu_card nu_card_autor">
          <div class="nu_card_title"><i class="fas fa-user-pen"></i> Autor</div>
          <div class="nu_autor_info"><div class="nu_autor_av"><i class="fas fa-user-circle"></i></div><div><strong>${u?.nombre||u?.usuario||'Anónimo'}</strong><span>${u?.email||''}</span></div></div>
        </div>
      </div>
    </div></form>
  </div>`;
};

let inputDraftHandler;
let keydownFormHandler;
let slugInputHandler;
let slugChangeHandler;
let slugResetHandler;
let inputResumenHandler;
let inputImgHandler;
let clickImgClearHandler;
let inputImgTopHandler;
let clickImgTopClearHandler;
let inputContenidoHandler;
let keydownTagsHandler;
let clickDocumentHandler;
let submitFormHandler;

export const init = async () => {
  const u = wiAuth.user?.usuario ? wiAuth.user : (getls('wiSmile') || {});
  if (!u.email) return;
  const editSlug = getEditSlug();
  let tags=[], sT, iT, isEdit = !!editSlug;

  const elTitulo = document.getElementById('nu_titulo');
  const elSlugInp = document.getElementById('nu_slug_inp');
  const elSlugStatus = document.getElementById('nu_slug_status');
  const elResumen = document.getElementById('nu_resumen');
  const elResumenCnt = document.getElementById('nu_resumen_cnt');
  const elKeywords = document.getElementById('nu_keywords');
  const elContenido = document.getElementById('nu_contenido');
  const elPalabras = document.getElementById('nu_palabras');
  const elLectura = document.getElementById('nu_lectura');
  const elImg = document.getElementById('nu_img');
  const elImgPrev = document.getElementById('nu_img_prev');
  const elImgEl = document.getElementById('nu_img_el');
  const elImgTop = document.getElementById('nu_img_top');
  const elImgTopPrev = document.getElementById('nu_img_top_prev');
  const elImgTopEl = document.getElementById('nu_img_top_el');
  const elActivo = document.getElementById('nu_activo');
  const elPin = document.getElementById('nu_pin');
  const elCatInp = document.getElementById('nu_cat_inp');
  const elTagsInp = document.getElementById('nu_tags_inp');
  const elTagsBox = document.getElementById('nu_tags_box');
  const elForm = document.getElementById('nu_form');
  const elCatSug = document.getElementById('nu_cat_sug');
  const elTagSug = document.getElementById('nu_tag_sug');

  const genSlug = ()=> toSlug(elTitulo ? elTitulo.value : '');
  const updCount = ()=>{
    const {words,min} = countWords(elContenido ? elContenido.value : '');
    if (elPalabras) elPalabras.innerHTML = `<i class="fas fa-font"></i> ${words} palabras`;
    if (elLectura) elLectura.innerHTML = `<i class="fas fa-clock"></i> ${min} min`;
  };
  const renderTags = ()=> {
    if (elTagsBox) {
      elTagsBox.innerHTML = tags.map((t,i)=>`<span class="nu_tag_chip">#${t} <i class="fas fa-xmark nu_tag_rm" data-i="${i}"></i></span>`).join('');
    }
  };

  // ── MARKDOWN TO HTML ────────────────────────────────────────
  const mdToHtml = (md) => {
    if (!md) return '';
    let html = md
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/~~(.*?)~~/gim, '<del>$1</del>')
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2" />')
      .replace(/\[(.*?)\]\((https:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*?))\)/gim, '<button type="button" class="po_yt_btn" data-yt="$3"><i class="fab fa-youtube" style="color:#fe0149; font-size:1.2em; margin-right:6px;"></i> $1</button>')
      .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/^---/gim, '<hr style="border:none;border-top:1px solid var(--brd);margin:2vh 0"/>');

    const lines = html.split('\n');
    const result = [];
    let inList = false;
    let inTable = false;

    lines.forEach(line => {
      const trimLine = line.trim();

      // Lógica de Tablas
      if (trimLine.startsWith('|') && trimLine.endsWith('|')) {
        if (!inTable) {
          result.push('<div class="po_table_wrap"><table>');
          inTable = true;
        }
        // Ignorar la línea separadora |---|---|
        if (trimLine.match(/^\|?[\s\-\|:]+\|?$/)) return;
        
        const cells = trimLine.split('|').filter((c, i, a) => (i > 0 && i < a.length - 1));
        const isHeader = inTable && result[result.length-1].includes('<table>');
        const tag = isHeader ? 'th' : 'td';
        result.push('<tr>' + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('') + '</tr>');
        return;
      } else if (inTable) {
        result.push('</table></div>');
        inTable = false;
      }

      // Lógica de Listas
      const listMatch = line.match(/^[\-\*]\s+(.*)$/);
      if (listMatch) {
        if (!inList) { result.push('<ul>'); inList = true; }
        let text = listMatch[1];
        if (text.startsWith('[ ] ')) text = '<input type="checkbox" disabled style="margin-right:0.5vh"> ' + text.slice(4);
        else if (text.startsWith('[x] ')) text = '<input type="checkbox" checked disabled style="margin-right:0.5vh"> ' + text.slice(4);
        result.push(`<li>${text}</li>`);
      } else {
        if (inList) { result.push('</ul>'); inList = false; }
        if (trimLine === '') return;
        if (!line.match(/^<(h2|h3|ul|ol|li|blockquote|img|hr|div|table|tr|th|td)/)) {
          result.push(`<p>${line}</p>`);
        } else {
          result.push(line);
        }
      }
    });

    if (inTable) result.push('</table></div>');
    if (inList) result.push('</ul>');
    return result.join('\n');
  };

  // ── DRAFTS (AUTOGUARDADO LOCAL) ─────────────────────────────
  const draftKey = isEdit ? 'wi_draft_edit_'+editSlug : 'wi_draft_new';
  const saveDraft = () => {
    const draft = {
      titulo: elTitulo ? elTitulo.value : '',
      slug: elSlugInp ? elSlugInp.value : '',
      resumen: elResumen ? elResumen.value : '',
      keywords: elKeywords ? elKeywords.value : '',
      cat: elCatInp ? elCatInp.value : '',
      img: elImg ? elImg.value : '',
      imgTop: elImgTop ? elImgTop.value : '',
      content: elContenido ? elContenido.value : '',
      tags
    };
    localStorage.setItem(draftKey, JSON.stringify(draft));
  };
  
  inputDraftHandler = (e) => {
    const target = e.target;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      clearTimeout(window.wiDraftTimer);
      window.wiDraftTimer = setTimeout(saveDraft, 1000);
    }
  };
  if (elForm) elForm.addEventListener('input', inputDraftHandler);

  // ── CARGAR SUGERENCIAS (SOLO CACHÉ) ─────────────────────────
  const cargarSugerencias = () => {
    try {
      const setCats = new Set(), setTags = new Set();
      for (const k of Object.keys(localStorage).filter(k => k.startsWith('wi_blogs') || k.startsWith('wi_post_'))) {
        const arr = getls(k);
        const list = Array.isArray(arr) ? arr : (arr ? [arr] : []);
        list.forEach(p => {
          if (p.categoria) setCats.add(p.categoria);
          if (p.tags && Array.isArray(p.tags)) p.tags.forEach(t => setTags.add(t));
        });
      }
      if (setCats.size > 0 && elCatSug) {
        elCatSug.innerHTML = Array.from(setCats).slice(0,8).map(c => `<span class="nu_sug_chip cat_sug">${c}</span>`).join('');
      }
      if (setTags.size > 0 && elTagSug) {
        elTagSug.innerHTML = Array.from(setTags).slice(0,12).map(t => `<span class="nu_sug_chip tag_sug">#${t}</span>`).join('');
      }
    } catch (e) { console.warn('No se pudieron cargar sugerencias'); }
  };
  cargarSugerencias();

  // ── CARGAR POST PARA EDICIÓN ────────────────────────────────
  if (isEdit) {
    try {
      const result = await getPost(editSlug, true); // force para tener datos frescos
      if (!result?.data) { Notificacion('Post no encontrado','error'); return; }
      const p = result.data;

      // Rellenar formulario
      if (elTitulo) elTitulo.value = p.titulo || '';
      if (elSlugInp) elSlugInp.value = p.slug || p.id || '';
      if (elResumen) {
        elResumen.value = p.resumen || '';
        if (elResumenCnt) elResumenCnt.textContent = (p.resumen||'').length;
      }
      if (elKeywords) elKeywords.value = p.keywords || '';
      if (elContenido) elContenido.value = p.contenidoMd || p.contenido || '';
      if (elImg) elImg.value = p.imagen || '';
      if (elImgTop) elImgTop.value = p.imagenTop || '';
      if (elActivo) elActivo.checked = p.activo !== false;
      if (elPin) elPin.checked = !!p.pin;

      // Categoría
      if (elCatInp) elCatInp.value = p.categoria || '';

      // Tags
      tags = Array.isArray(p.tags) ? [...p.tags] : [];
      renderTags();

      // Imagen preview
      if (p.imagen) {
        if (elImgEl) elImgEl.setAttribute('src', p.imagen);
        if (elImgPrev) elImgPrev.classList.remove('dpn');
      }
      if (p.imagenTop) {
        if (elImgTopEl) elImgTopEl.setAttribute('src', p.imagenTop);
        if (elImgTopPrev) elImgTopPrev.classList.remove('dpn');
      }

      updCount();

    } catch(e) { console.error('edit load:', e); Notificacion('Error cargando post','error'); }
  } else {
    // Si no es edición, cargamos el draft
    try {
      const d = JSON.parse(localStorage.getItem(draftKey));
      if (d) { 
        if (elTitulo) elTitulo.value = d.titulo || '';
        if (elSlugInp) elSlugInp.value = d.slug || '';
        if (elResumen) elResumen.value = d.resumen || '';
        if (elKeywords) elKeywords.value = d.keywords || '';
        if (elCatInp) elCatInp.value = d.cat || '';
        if (elImg) {
          elImg.value = d.img || '';
          if (d.img && elImgEl) {
            elImgEl.setAttribute('src', d.img);
            if (elImgPrev) elImgPrev.classList.remove('dpn');
          }
        }
        if (elImgTop) {
          elImgTop.value = d.imgTop || '';
          if (d.imgTop && elImgTopEl) {
            elImgTopEl.setAttribute('src', d.imgTop);
            if (elImgTopPrev) elImgTopPrev.classList.remove('dpn');
          }
        }
        if (elContenido) elContenido.value = d.content || '';
        if (d.tags) { tags = d.tags; renderTags(); }
        updCount();
      }
    } catch(e){}
  }

  // ── EVENTOS COMUNES ─────────────────────────────────────────
  keydownFormHandler = (e) => { if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') e.preventDefault(); };
  if (elForm) elForm.addEventListener('keydown', keydownFormHandler);

  if (!isEdit) {
    slugInputHandler = (e) => {
      const target = e.target.closest('#nu_slug_inp');
      if (target) {
        target.value = target.value.replace(/[^a-z0-9_]/gi, s => s === ' ' ? '_' : '').toLowerCase().replace(/_{2,}/g, '_');
        if (elSlugStatus) {
          elSlugStatus.innerHTML = '<i class="fas fa-pen"></i> Escribiendo...';
          elSlugStatus.classList.remove('ok', 'err');
        }
      }
    };
    document.addEventListener('input', slugInputHandler);

    slugChangeHandler = async (e) => {
      const target = e.target.closest('#nu_slug_inp');
      if (target) {
        const v = target.value;
        if (!v) {
          if (elSlugStatus) {
            elSlugStatus.innerHTML = '';
            elSlugStatus.classList.remove('ok', 'err');
          }
          return;
        }
        if (v.length < 3) {
          if (elSlugStatus) {
            elSlugStatus.innerHTML = '<i class="fas fa-exclamation"></i> Muy corto';
            elSlugStatus.classList.add('err');
            elSlugStatus.classList.remove('ok');
          }
          return;
        }
        if (elSlugStatus) {
          elSlugStatus.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
          elSlugStatus.classList.remove('ok', 'err');
        }
        const snap = await getDoc(doc(db, COL, v)).catch(() => null);
        if (snap?.exists()) {
          if (elSlugStatus) {
            elSlugStatus.innerHTML = '<i class="fas fa-xmark"></i> Ya existe';
            elSlugStatus.classList.add('err');
            elSlugStatus.classList.remove('ok');
          }
        } else {
          if (elSlugStatus) {
            elSlugStatus.innerHTML = '<i class="fas fa-check"></i> OK';
            elSlugStatus.classList.add('ok');
            elSlugStatus.classList.remove('err');
          }
        }
      }
    };
    document.addEventListener('change', slugChangeHandler);

    slugResetHandler = (e) => {
      const target = e.target.closest('#nu_slug_reset');
      if (target) {
        if (elSlugInp) {
          elSlugInp.value = genSlug();
          elSlugInp.dispatchEvent(new Event('input', { bubbles: true }));
          elSlugInp.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    };
    document.addEventListener('click', slugResetHandler);
  }

  inputResumenHandler = (e) => {
    const target = e.target.closest('#nu_resumen');
    if (target && elResumenCnt) {
      elResumenCnt.textContent = target.value.length;
    }
  };
  document.addEventListener('input', inputResumenHandler);

  inputImgHandler = (e) => {
    const target = e.target.closest('#nu_img');
    if (target) {
      clearTimeout(iT);
      iT = setTimeout(() => {
        const u = target.value.trim();
        if (!u) {
          if (elImgPrev) elImgPrev.classList.add('dpn');
          return;
        }
        if (elImgEl) {
          elImgEl.setAttribute('src', u);
          elImgEl.onload = () => {
            if (elImgPrev) elImgPrev.classList.remove('dpn');
          };
          elImgEl.onerror = () => {
            if (elImgPrev) elImgPrev.classList.add('dpn');
          };
        }
      }, 600);
    }
  };
  document.addEventListener('input', inputImgHandler);

  clickImgClearHandler = (e) => {
    const target = e.target.closest('#nu_img_clear');
    if (target) {
      if (elImg) {
        elImg.value = '';
        elImg.dispatchEvent(new Event('input', { bubbles: true }));
      }
      if (elImgPrev) elImgPrev.classList.add('dpn');
    }
  };
  document.addEventListener('click', clickImgClearHandler);
  
  let iT2;
  inputImgTopHandler = (e) => {
    const target = e.target.closest('#nu_img_top');
    if (target) {
      clearTimeout(iT2);
      iT2 = setTimeout(() => {
        const u = target.value.trim();
        if (!u) {
          if (elImgTopPrev) elImgTopPrev.classList.add('dpn');
          return;
        }
        if (elImgTopEl) {
          elImgTopEl.setAttribute('src', u);
          elImgTopEl.onload = () => {
            if (elImgTopPrev) elImgTopPrev.classList.remove('dpn');
          };
          elImgTopEl.onerror = () => {
            if (elImgTopPrev) elImgTopPrev.classList.add('dpn');
          };
        }
      }, 600);
    }
  };
  document.addEventListener('input', inputImgTopHandler);

  clickImgTopClearHandler = (e) => {
    const target = e.target.closest('#nu_img_top_clear');
    if (target) {
      if (elImgTop) {
        elImgTop.value = '';
        elImgTop.dispatchEvent(new Event('input', { bubbles: true }));
      }
      if (elImgTopPrev) elImgTopPrev.classList.add('dpn');
    }
  };
  document.addEventListener('click', clickImgTopClearHandler);

  inputContenidoHandler = (e) => {
    const target = e.target.closest('#nu_contenido');
    if (target) {
      updCount();
    }
  };
  document.addEventListener('input', inputContenidoHandler);

  keydownTagsHandler = (e) => {
    const target = e.target.closest('#nu_tags_inp');
    if (target) {
      if (e.key !== 'Enter' && e.key !== ',') return;
      e.preventDefault();
      target.value.toLowerCase().split(',').map(t => t.trim().replace(/\s+/g, '_')).filter(Boolean).forEach(t => {
        if (!tags.includes(t) && tags.length < 8) tags.push(t);
      });
      renderTags();
      target.value = '';
    }
  };
  document.addEventListener('keydown', keydownTagsHandler);

  clickDocumentHandler = (e) => {
    const toolBtn = e.target.closest('.nu_tool');
    if (toolBtn) {
      const tag = toolBtn.getAttribute('data-tag');
      if (elContenido) {
        const ta = elContenido;
        const s = ta.selectionStart;
        const selEnd = ta.selectionEnd;
        const sel = ta.value.substring(s, selEnd) || 'texto';
        const ins = tag.replace('texto', sel).replace('cita', sel);
        ta.value = ta.value.substring(0, s) + ins + ta.value.substring(selEnd);
        ta.focus();
        ta.selectionStart = s;
        ta.selectionEnd = s + ins.length;
        updCount();
        saveDraft();
      }
      return;
    }

    const tabBtn = e.target.closest('.nu_tab');
    if (tabBtn) {
      const t = tabBtn.getAttribute('data-tab');
      document.querySelectorAll('.nu_tab').forEach(el => el.classList.remove('active'));
      tabBtn.classList.add('active');
      const prevHtmlEl = document.getElementById('nu_prev_html');
      if (t === 'prev') {
        if (prevHtmlEl) {
          prevHtmlEl.innerHTML = wiSanihtml(mdToHtml(elContenido ? elContenido.value : ''));
          prevHtmlEl.classList.remove('dpn');
        }
        if (elContenido) elContenido.classList.add('dpn');
      } else {
        if (elContenido) elContenido.classList.remove('dpn');
        if (prevHtmlEl) prevHtmlEl.classList.add('dpn');
      }
      return;
    }

    const tagRm = e.target.closest('.nu_tag_rm');
    if (tagRm) {
      const idx = parseInt(tagRm.getAttribute('data-i'), 10);
      tags.splice(idx, 1);
      renderTags();
      return;
    }

    const catSugChip = e.target.closest('.cat_sug');
    if (catSugChip) {
      if (elCatInp) elCatInp.value = catSugChip.textContent || '';
      return;
    }

    const tagSugChip = e.target.closest('.tag_sug');
    if (tagSugChip) {
      const t = (tagSugChip.textContent || '').replace('#', '');
      if (t && !tags.includes(t) && tags.length < 8) {
        tags.push(t);
        renderTags();
      }
      return;
    }
  };
  document.addEventListener('click', clickDocumentHandler);

  // ── SUBMIT: CREAR o ACTUALIZAR ──────────────────────────────
  submitFormHandler = async (e) => {
    e.preventDefault();
    const btnSubmit = document.getElementById('nu_submit');
    const u = wiAuth.user?.usuario ? wiAuth.user : (getls('wiSmile') || {});
    
    let catVal = elCatInp ? elCatInp.value.trim() : '';
    if (catVal) {
      catVal = catVal.charAt(0).toUpperCase() + catVal.slice(1).toLowerCase(); // Capitalizar primera letra
    }
    
    const titulo = elTitulo ? elTitulo.value.trim() : '';
    const resumen = elResumen ? elResumen.value.trim() : '';
    const keywords = elKeywords ? elKeywords.value.trim() : '';
    const cat = catVal;
    const img = elImg ? elImg.value.trim() : '';
    const imgTop = elImgTop ? elImgTop.value.trim() : '';
    const contenidoMD = elContenido ? elContenido.value.trim() : '';
    const slug = elSlugInp ? elSlugInp.value.trim() : '';
    const contenido = wiSanihtml(mdToHtml(contenidoMD)); // HTML limpio para guardar

    if(!titulo||!resumen||!cat||!img||!contenidoMD) return Notificacion('Completa los campos obligatorios','warning');
    if(contenidoMD.length<10) return Notificacion('Contenido muy corto','warning');
    if(!slug||slug.length<3) return Notificacion('Slug inválido','warning');
    if(!isEdit && elSlugStatus && elSlugStatus.classList.contains('err')) return Notificacion('Slug no disponible','error');

    wiSpin(btnSubmit, true, isEdit ? 'Guardando...' : 'Publicando...');

    try {
      const tiempo_lectura = `${countWords(contenido).min} min`;

      if (isEdit) {
        // ── MODO EDICIÓN: updateDoc ───────────────────────────
        await updateDoc(doc(db, COL, editSlug), {
          activo: !!(elActivo && elActivo.checked),
          pin: !!(elPin && elPin.checked),
          titulo, resumen, keywords, categoria: cat, contenido, contenidoMd: contenidoMD,
          imagen: img, imagenTop: imgTop, imagenAlt: titulo,
          tags, tiempoLectura: tiempo_lectura,
          actualizado: serverTimestamp()
        });
        clearPostCache(editSlug);
        clearBlogCache();
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem(`wi_editor_posts_${(u.usuario || '').trim().toLowerCase()}`);
        }
        Mensaje('¡Historia actualizada! 🐾✨', 'success');
        setTimeout(() => import('../../rutas.js').then(m => m.rutas.navigate(`/${editSlug}`)), 1200);

      } else {
        // ── MODO CREAR: setDoc ────────────────────────────────
        if ((await getDoc(doc(db, COL, slug))).exists()) return wiSpin(btnSubmit, false), Notificacion('Slug existente','warning');
        await setDoc(doc(db, COL, slug), {
          id: slug, slug,
          activo: !!(elActivo && elActivo.checked),
          pin: !!(elPin && elPin.checked),
          usuario: u.usuario, email: u.email,
          autor: u.nombre || u.usuario,
          titulo, resumen, keywords, categoria: cat, contenido, contenidoMd: contenidoMD,
          imagen: img, imagenTop: imgTop, imagenAlt: titulo,
          tags, vistas: 0, likes: 0, tiempoLectura: tiempo_lectura,
          creado: serverTimestamp(), actualizado: serverTimestamp()
        });
        clearBlogCache();
        localStorage.removeItem(draftKey);
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem(`wi_editor_posts_${(u.usuario || '').trim().toLowerCase()}`);
        }
        Mensaje('¡Historia publicada! 🐾✨', 'success');
        setTimeout(() => import('../../rutas.js').then(m => m.rutas.navigate(`/${slug}`)), 1200);
      }

    } catch(err) { console.error('nuevo:', err); Notificacion(isEdit ? 'Error al guardar' : 'Error al publicar', 'error'); wiSpin(btnSubmit, false); }
  };
  if (elForm) elForm.addEventListener('submit', submitFormHandler);
};

export const cleanup = () => {
  const elForm = document.getElementById('nu_form');
  if (elForm) {
    if (inputDraftHandler) elForm.removeEventListener('input', inputDraftHandler);
    if (keydownFormHandler) elForm.removeEventListener('keydown', keydownFormHandler);
    if (submitFormHandler) elForm.removeEventListener('submit', submitFormHandler);
  }
  if (slugInputHandler) document.removeEventListener('input', slugInputHandler);
  if (slugChangeHandler) document.removeEventListener('change', slugChangeHandler);
  if (slugResetHandler) document.removeEventListener('click', slugResetHandler);
  if (inputResumenHandler) document.removeEventListener('input', inputResumenHandler);
  if (inputImgHandler) document.removeEventListener('input', inputImgHandler);
  if (clickImgClearHandler) document.removeEventListener('click', clickImgClearHandler);
  if (inputImgTopHandler) document.removeEventListener('input', inputImgTopHandler);
  if (clickImgTopClearHandler) document.removeEventListener('click', clickImgTopClearHandler);
  if (inputContenidoHandler) document.removeEventListener('input', inputContenidoHandler);
  if (keydownTagsHandler) document.removeEventListener('keydown', keydownTagsHandler);
  if (clickDocumentHandler) document.removeEventListener('click', clickDocumentHandler);
};