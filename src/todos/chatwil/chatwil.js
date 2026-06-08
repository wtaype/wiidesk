import './chatwil.css';
import { version } from './waa.js';
import { Saludar } from '../../widev.js';
import { SUGERENCIAS, detectarTema } from './contexto.js';

// ── RENDER ─────────────────────────────────────────────────────────────────────
export const render = () => {
  const sugs = SUGERENCIAS.general;

  const saludoStr = Saludar().replace(/, $/, '').toLowerCase();
  const saludoCap = saludoStr.charAt(0).toUpperCase() + saludoStr.slice(1);

  return `
<div class="miia">
  
  <div class="miia_messages_wrap">
    <div class="miia_messages" id="miiaMessages">
      <div class="miia_empty wi_fadeUp visible">
        <div class="miia_welcome_icon">
          <img src="/perfil.webp" alt="ChatWil" class="miia_avatar_img">
          <div class="miia_icon_ring"></div>
        </div>
        <h2 class="miia_welcome_title">ChatWil</h2>
        <p class="miia_welcome_text">
          ${saludoCap} herman@, <strong>bienvenid@ a ChatWil. ¿Cuéntame, cómo te sientes hoy?</strong>
        </p>
        <div class="miia_suggestions">
          ${sugs.map((s, i) => `
            <div class="suggestion_card" data-prompt="${s.prompt}" style="animation-delay: ${i * 0.1}s">
              <i class="fas ${s.ico}"></i><span>${s.txt}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </div>

  <div class="miia_input_area wi_fadeUp visible">
    <div class="miia_input_container">
      <div class="miia_input_wrapper">
        <textarea class="miia_input" id="miiaInput" placeholder="Escribe tu petición aquí..." rows="1"></textarea>
        <button class="miia_send active" id="miiaSend">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
      <div class="miia_input_info">
        <span><i class="fas fa-hands-praying"></i> ChatWil ${version} · <a href="https://chatwiil.web.app/terminos.html" target="_blank">Términos</a></span>
      </div>
    </div>
  </div>

</div>`;
};

// ── ESTADO ─────────────────────────────────────────────────────────────────────
let escribiendo = false, contador = 0;
let _brain = null;
let historia = []; // Arreglo local para el historial en memoria

const obtenerEl  = () => ({
  msg: document.getElementById('miiaMessages'),
  inp: document.getElementById('miiaInput'),
  btn: document.getElementById('miiaSend')
});

const desplazar  = (suave = false) => {
  const c = document.querySelector('.miia_messages_wrap'); if (!c) return;
  suave ? c.scrollTo({ top: c.scrollHeight, behavior: 'smooth' }) : (c.scrollTop = c.scrollHeight);
};

const getBrain = async () => _brain ??= await import('./brain.js');

// ── FORMATO DE MENSAJE (Markdown & Emojis) ─────────────────────────────────────
const formatMsg = (t) => t
  .replace(/</g, '&lt;').replace(/>/g, '&gt;') // Anti-XSS
  .replace(/\n/g, '<br>') // Saltos de línea
  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Negrita **
  .replace(/\*(.*?)\*/g, '<strong>$1</strong>'); // Negrita *

// ── MENSAJES ───────────────────────────────────────────────────────────────────
const agregarMsg = (texto, tipo) => {
  const { msg } = obtenerEl();
  if (!msg) return;
  const hora = new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
  const avatar = tipo === 'user'
    ? '<i class="fas fa-user-circle"></i>'
    : '<img src="/perfil.webp" alt="ChatWil" class="miia_avatar_img">';

  const m = document.createElement('div');
  m.className = `miia_message ${tipo}`;
  m.setAttribute('data-time', hora);
  m.innerHTML = `
    <div class="message_avatar">${avatar}</div>
    <div class="message_content">
      <div class="message_header">
        <span class="message_name">${tipo === 'user' ? 'Tú' : 'ChatWil'}</span>
        <span class="message_time">${hora}</span>
      </div>
      <div class="message_text"></div>
    </div>`;

  m.querySelector('.message_text').innerHTML = formatMsg(texto);
  msg.appendChild(m);
  desplazar();
};

const mostrarEscribiendo = (mostrar) => {
  const typingMsg = document.querySelector('.miia_message.typing');
  if (typingMsg) typingMsg.remove();
  if (!mostrar) return;
  
  const msgWrap = document.getElementById('miiaMessages');
  if (!msgWrap) return;
  
  const m = document.createElement('div');
  m.className = 'miia_message ai typing';
  m.innerHTML = `
    <div class="message_avatar"><img src="/perfil.webp" alt="ChatWil" class="miia_avatar_img"></div>
    <div class="message_content">
      <div class="message_text"><div class="typing_dots"><span></span><span></span><span></span></div></div>
    </div>`;
  msgWrap.appendChild(m);
  desplazar();
};

const escribirTexto = (contenido, callback) => {
  const { msg } = obtenerEl();
  if (!msg) return;
  const hora = new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
  const id = `tw_${Date.now()}_${++contador}`;

  const m = document.createElement('div');
  m.className = 'miia_message ai';
  m.setAttribute('data-time', hora);
  m.innerHTML = `
    <div class="message_avatar"><img src="/perfil.webp" alt="ChatWil" class="miia_avatar_img"></div>
    <div class="message_content">
      <div class="message_header">
        <span class="message_name">ChatWil</span>
        <span class="message_time">${hora}</span>
      </div>
      <div class="message_text" id="${id}"></div>
    </div>`;
  msg.appendChild(m);

  desplazar();
  const el = document.getElementById(id);
  if (!el) return;
  const caracteres = Array.from(contenido); // Array.from maneja los Emojis perfectamente
  let idx = 0, ultimoScroll = 0;

  const escribir = () => {
    if (idx < caracteres.length) {
      el.innerHTML = formatMsg(caracteres.slice(0, idx + 1).join(''));
      idx++;
      if (Date.now() - ultimoScroll > 100) { desplazar(); ultimoScroll = Date.now(); }
      setTimeout(escribir, 15);
    } else {
      el.removeAttribute('id');
      desplazar(true);
      callback?.();
    }
  };
  escribir();
};

// ── SUGERENCIAS CONTEXTUALES ───────────────────────────────────────────────────
const mostrarSugerencias = (tema) => {
  const existing = document.querySelector('.miia_contextual_suggestions');
  if (existing) existing.remove();
  const sugs = SUGERENCIAS[tema] ?? SUGERENCIAS.general;
  if (!sugs?.length) return;

  const html = `
    <p class="suggestions_title"><i class="fas fa-hands-praying"></i> ¿En qué más podemos orar?</p>
    <div class="suggestions_grid">
      ${sugs.map(s => `
        <div class="suggestion_card_small" data-prompt="${s.prompt}">
          <i class="fas ${s.ico}"></i><span>${s.txt}</span>
        </div>`).join('')}
    </div>`;

  const div = document.createElement('div');
  div.className = 'miia_contextual_suggestions';
  div.innerHTML = html;

  const msgWrap = document.getElementById('miiaMessages');
  if (msgWrap) {
    msgWrap.appendChild(div);
  }
  desplazar(true);
};

// ── ENVIAR MENSAJE ─────────────────────────────────────────────────────────────
const enviarMsg = async () => {
  const { inp } = obtenerEl();
  if (!inp) return;
  const msg = inp.value.trim();
  if (!msg || escribiendo) return;

  const emptyEl = document.querySelector('.miia_empty');
  if (emptyEl) {
    emptyEl.style.transition = 'opacity 0.2s';
    emptyEl.style.opacity = '0';
    setTimeout(() => {
      emptyEl.remove();
    }, 200);
  }
  agregarMsg(msg, 'user');
  inp.value = '';
  inp.style.height = 'auto';
  inp.dispatchEvent(new Event('input', { bubbles: true }));

  escribiendo = true;
  mostrarEscribiendo(true);

  try {
    historia.push({ role: 'user', content: msg });
    await new Promise(r => setTimeout(r, 800 + Math.random() * 700));

    const brain = await getBrain();
    let res = await brain.procesar(msg, historia);

    mostrarEscribiendo(false);
    if (!res || typeof res !== 'string') throw new Error('Respuesta inválida');

    historia.push({ role: 'assistant', content: res });

    escribirTexto(res, () => {
      escribiendo = false;
      const tema = detectarTema(msg);
      mostrarSugerencias(tema);
    });
  } catch (err) {
    console.error('❌ Error:', err);
    mostrarEscribiendo(false);
    agregarMsg('😔 Disculpa, tuve un problema. Por favor, intenta de nuevo. 💚', 'ai');
    escribiendo = false;
  }
};

// ============================================================
// ⚡ EVENT DELEGATION SYSTEM
// ============================================================
const docListeners = [];
const onDoc = (type, selector, handler) => {
  const wrapper = (e) => {
    if (!selector) {
      handler.call(e.currentTarget, e);
      return;
    }
    const target = e.target.closest(selector);
    if (target) {
      handler.call(target, e);
    }
  };
  document.addEventListener(type, wrapper);
  docListeners.push({ type, wrapper });
};

const offDoc = () => {
  docListeners.forEach(({ type, wrapper }) => {
    document.removeEventListener(type, wrapper);
  });
  docListeners.length = 0;
};

// ── INIT ───────────────────────────────────────────────────────────────────────
export const init = () => {
  const { inp } = obtenerEl();

  // Pre-llenar input con saludo inicial por defecto
  if (inp) {
    const saludoStr = Saludar().replace(/, $/, '').toLowerCase();
    const saludoCap = saludoStr.charAt(0).toUpperCase() + saludoStr.slice(1);
    const textoInicial = `${saludoCap}, me gustaría que ores por mí, por favor.`;
    inp.value = textoInicial;
    inp.setAttribute('placeholder', 'Escribe tu petición aquí...');
    
    // Set initial button disabled state and active class
    const tieneTxt = inp.value.trim().length > 0;
    const btn = document.getElementById('miiaSend');
    if (btn) {
      btn.disabled = !tieneTxt;
      btn.classList.toggle('active', tieneTxt);
    }
  }

  // ── EVENTOS GLOBALES DE CHATWIL ───────────────────────────────────
  onDoc('input', '#miiaInput', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    const tieneTxt = this.value.trim().length > 0;
    const btn = document.getElementById('miiaSend');
    if (btn) {
      btn.disabled = !tieneTxt;
      btn.classList.toggle('active', tieneTxt);
    }
  });

  onDoc('keydown', '#miiaInput', e => { 
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); enviarMsg(); } 
  });

  onDoc('click', '#miiaSend', enviarMsg);

  onDoc('click', '.suggestion_card, .suggestion_card_small', function () {
    const inpEl = document.getElementById('miiaInput');
    if (!inpEl) return;
    inpEl.value = this.getAttribute('data-prompt');
    inpEl.style.height = 'auto';
    inpEl.dispatchEvent(new Event('input', { bubbles: true }));
    inpEl.focus();
    if (this.classList.contains('suggestion_card_small')) {
      setTimeout(enviarMsg, 120);
    }
  });

  console.log(`✅ ChatWil ${version} iniciado`);
};

export const cleanup = () => {
  offDoc();
  historia = [];
};