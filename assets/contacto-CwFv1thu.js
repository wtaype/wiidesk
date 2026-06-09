import{t as e}from"./wii-DZzdzbZC.js";import{H as t,L as n,R as r,U as i,o as a}from"./widev-DCNhLI3Q.js";import{a as o}from"./index-BBkUU4ZD.js";/* empty css               */var s={pub:void 0,sid:void 0,tid:void 0};n({js:[()=>o(()=>import(`https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js`),[])]});var c=[{ico:`fa-envelope`,color:`#0EBEFF`,label:`Email Soporte`,value:`wilder.taype@hotmail.com`,copiable:!0},{ico:`fa-users`,color:`#FF5C69`,label:`Comunidad`,value:`Soporte Comunitario GitHub`,copiable:!1},{ico:`fa-clock`,color:`#29C72E`,label:`Atención Técnica`,value:`Lunes a Viernes (Respuesta en 24h)`,copiable:!1}],l=[`Preguntar sobre planes (Free, Pro, Vip)`,`Reportar problema con inicio de sesión o cuenta`,`Sugerir una canción para la app`,`Sugerir una idea de regalo o artículo para el blog`,`Soporte general con CumpleWii`,`Otro motivo de contacto`],u=[{q:`¿Respondemos todos los mensajes?`,r:`Sí. Cada mensaje que recibimos se lee y responde de forma personal por el equipo.`},{q:`¿CumpleWii sigue siendo gratis?`,r:`Sí. El plan base de CumpleWii es y será gratuito, buscamos mantener la app accesible para todos.`},{q:`¿Tus mensajes son confidenciales?`,r:`Absolutamente. Solo los revisa el equipo de soporte de CumpleWii y no se comparten con terceros bajo ninguna circunstancia.`},{q:`¿El formulario interno vendrá después?`,r:`Por ahora preferimos usar correo directo y GitHub Issues para mantener la seguridad, simplicidad y rapidez en las respuestas.`}],d=500,f=`wi_ct_last`,p=60*1e3,m=()=>{let e=parseInt(localStorage.getItem(f)||`0`,10);return Date.now()-e>p},h=()=>localStorage.setItem(f,String(Date.now())),g=[],_=()=>`
<main id="wimain">
<div class="ac_wrap ct_wrap">

  <!-- ══ HERO ══ -->
  <section class="ac_hero ct_hero">
    <div class="ac_hero_orb ac_orb1"></div>
    <div class="ac_hero_orb ac_orb2"></div>
    <div class="ac_hero_orb ac_orb3"></div>
    <div class="ac_hero_body">
      <div class="ac_hero_badge"><i class="fas fa-headset"></i> Estamos para ti</div>
      <h1 class="ac_hero_tit">Soporte y<br><span class="ac_grad">Contacto 💌</span></h1>
      <p class="ac_hero_sub">
        Si tienes una duda, una sugerencia o solo quieres saludar, 
        <strong>aquí tienes los caminos más directos hacia nosotros.</strong>
      </p>
      <div class="tm_hero_chips">
        <span class="tm_chip"><i class="fas fa-clock"></i> Respuesta rápida</span>
        <span class="tm_chip"><i class="fas fa-shield-halved"></i> 100% Seguro</span>
        <span class="tm_chip"><i class="fas fa-heart"></i> Atención Personal</span>
      </div>
    </div>
  </section>

  <!-- ══ GRID: FORM + INFO ══ -->
  <section class="ac_sec ct_sec">
    <div class="ct_grid">

      <!-- Formulario -->
      <div class="ct_form_wrap">
        <div class="ac_sec_head" style="text-align:left;margin-bottom:4vh">
          <div class="ac_sec_badge"><i class="fas fa-comment-dots"></i> Escríbenos</div>
          <h2 class="ac_sec_tit">Enviar <span class="ac_grad">un mensaje</span></h2>
        </div>
        <form id="ctForm" class="ct_form" novalidate autocomplete="off">
          <!-- Honeypot anti-bot (invisible) -->
          <input type="text" name="ct_honey" id="ct_honey" tabindex="-1" aria-hidden="true" style="position:absolute;left:-9999px;opacity:0">

          <div class="ct_field">
            <label for="ct_nombre"><i class="fas fa-user"></i> Tu Nombre</label>
            <input type="text" id="ct_nombre" name="from_name" placeholder="Ingresa tu nombre o alias" required maxlength="80">
          </div>
          <div class="ct_field">
            <label for="ct_email"><i class="fas fa-envelope"></i> Correo Electrónico</label>
            <input type="email" id="ct_email" name="email" placeholder="ejemplo@correo.com" required maxlength="120">
          </div>
          <div class="ct_field">
            <label for="ct_asunto"><i class="fas fa-tag"></i> Motivo</label>
            <select id="ct_asunto" name="asunto" required>
              <option value="">Selecciona un motivo</option>
              ${l.map(e=>`<option value="${e}">${e}</option>`).join(``)}
            </select>
          </div>
          <div class="ct_field">
            <label for="ct_mensaje"><i class="fas fa-comment-dots"></i> Detalles de tu mensaje</label>
            <textarea id="ct_mensaje" name="message" rows="6" placeholder="Escribe aquí tu duda, sugerencia o comentario..." required maxlength="${d}"></textarea>
            <div class="ct_chars"><span id="ct_count">0</span> / ${d}</div>
          </div>

          <div class="ct_actions">
            <button type="submit" class="ac_btn_p ct_btn_submit" id="ct_submit">
              <i class="fas fa-paper-plane"></i> <span>Enviar Mensaje</span>
            </button>
            <button type="reset" class="ac_btn_s">
              <i class="fas fa-redo"></i> <span>Limpiar</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Info -->
      <div class="ct_info_wrap">
        <div class="ct_info_card wi_fadeUp">
          <h3><i class="fas fa-address-card"></i> Contacto Directo</h3>
          <div class="ct_info_items">
            ${c.map(e=>`
              <div class="ct_info_item">
                <div class="ct_info_ico" style="background:color-mix(in srgb,${e.color} 15%,transparent);color:${e.color}">
                  <i class="fas ${e.ico}"></i>
                </div>
                <div class="ct_info_data">
                  <span class="ct_info_label">${e.label}</span>
                  <span class="ct_info_value">${e.value}</span>
                </div>
                ${e.copiable?`<button class="ct_copy" data-copy="${e.value}" title="Copiar"><i class="fas fa-copy"></i></button>`:``}
              </div>`).join(``)}
          </div>
        </div>

        <a href="https://github.com/wtaype/CumpleWii/issues" target="_blank" class="ct_info_card wi_fadeUp" style="margin-top:3vh; text-decoration:none; display:block; border-color:var(--mco);">
          <h3><i class="fab fa-github"></i> GitHub Issues</h3>
          <div style="font-size:0.8rem; line-height:1.6; padding:12px; color:var(--tx2);">
            Si prefieres un seguimiento técnico, puedes reportar errores o pedir nuevas funciones directamente en nuestro repositorio oficial de GitHub.
          </div>
        </a>
      </div>

    </div>
  </section>

  <!-- ══ FAQ ══ -->
  <section class="ac_sec ac_sec_alt">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-circle-question"></i> Respuestas Rápidas</div>
      <h2 class="ac_sec_tit">Preguntas <span class="ac_grad">Frecuentes</span></h2>
    </div>
    <div class="ct_faq">
      ${u.map((e,t)=>`
        <div class="ct_faq_item wi_fadeUp" id="faq_${t}">
          <div class="ct_faq_q">
            <i class="fas fa-circle-question"></i>
            <h3>${e.q}</h3>
            <i class="fas fa-chevron-down ct_faq_arr"></i>
          </div>
          <div class="ct_faq_a"><p>${e.r}</p></div>
        </div>`).join(``)}
    </div>
  </section>

</div></main>`,v=[],y=(e,t,n)=>{let r=e=>{if(!t){n.call(e.currentTarget,e);return}let r=e.target.closest(t);r&&n.call(r,e)};document.addEventListener(e,r),v.push({type:e,wrapper:r})},b=()=>{v.forEach(({type:e,wrapper:t})=>{document.removeEventListener(e,t)}),v.length=0},x=(e,t=280)=>{e.style.height=e.offsetHeight+`px`,e.style.transition=`height ${t}ms ease, padding ${t}ms ease, margin ${t}ms ease`,e.offsetHeight,e.style.height=`0`,e.style.paddingTop=`0`,e.style.paddingBottom=`0`,e.style.marginTop=`0`,e.style.marginBottom=`0`,e.style.overflow=`hidden`,setTimeout(()=>{e.style.display=`none`,e.style.removeProperty(`height`),e.style.removeProperty(`padding-top`),e.style.removeProperty(`padding-bottom`),e.style.removeProperty(`margin-top`),e.style.removeProperty(`margin-bottom`),e.style.removeProperty(`overflow`),e.style.removeProperty(`transition`)},t)},S=(e,t=280)=>{e.style.display=`block`,e.style.overflow=`hidden`;let n=window.getComputedStyle(e),r=n.paddingTop,i=n.paddingBottom,a=n.marginTop,o=n.marginBottom,s=e.offsetHeight;e.style.height=`0`,e.style.paddingTop=`0`,e.style.paddingBottom=`0`,e.style.marginTop=`0`,e.style.marginBottom=`0`,e.offsetHeight,e.style.transition=`height ${t}ms ease, padding ${t}ms ease, margin ${t}ms ease`,e.style.height=s+`px`,e.style.paddingTop=r,e.style.paddingBottom=i,e.style.marginTop=a,e.style.marginBottom=o,setTimeout(()=>{e.style.removeProperty(`height`),e.style.removeProperty(`padding-top`),e.style.removeProperty(`padding-bottom`),e.style.removeProperty(`margin-top`),e.style.removeProperty(`margin-bottom`),e.style.removeProperty(`overflow`),e.style.removeProperty(`transition`)},t)},C=()=>{y(`input`,`#ct_mensaje`,function(){let e=this.value;e.length>d&&(this.value=e.slice(0,d));let t=document.getElementById(`ct_count`);t&&(t.textContent=Math.min(this.value.length,d))}),y(`reset`,`#ctForm`,()=>{setTimeout(()=>{let e=document.getElementById(`ct_count`);e&&(e.textContent=`0`)},10)}),y(`submit`,`#ctForm`,async function(t){t.preventDefault();let n=document.getElementById(`ct_honey`);if(n&&n.value)return;if(!m()){a(`Espera un momento antes de enviar otro mensaje.`,`warning`);return}let i=document.getElementById(`ct_nombre`),o=document.getElementById(`ct_email`),c=document.getElementById(`ct_asunto`),l=document.getElementById(`ct_mensaje`),u=i?i.value.trim():``,d=o?o.value.trim():``,f=c?c.value:``,p=l?l.value.trim():``;if(u.length<3)return a(`El nombre debe tener al menos 3 caracteres.`,`error`);if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d))return a(`Ingresa un email válido.`,`error`);if(!f)return a(`Selecciona una incidencia.`,`error`);if(p.length<10)return a(`El mensaje debe tener al menos 10 caracteres.`,`error`);let g=document.getElementById(`ct_submit`);r(g,!0,`Enviando…`);try{window.emailjs===void 0&&await new Promise((e,t)=>{let n=document.createElement(`script`);n.src=`https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js`,n.onload=e,n.onerror=()=>t(Error(`No se pudo cargar EmailJS`)),document.head.appendChild(n)}),window.emailjs.init(s.pub),await window.emailjs.send(s.sid,s.tid,{nombre:u,email:d,telefono:`N/A`,asunto:f,mensaje:p,app_name:e}),h(),a(`¡Mensaje enviado al equipo de CumpleWii! Te responderemos pronto. 💌`,`success`,4500),this.reset();let t=document.getElementById(`ct_count`);t&&(t.textContent=`0`)}catch(e){console.error(`[contacto] EmailJS error:`,e),a(`No se pudo enviar el mensaje. Revisa tu conexión o intenta más tarde.`,`error`)}finally{r(g,!1,`Enviar Mensaje`)}}),y(`click`,`.ct_copy`,function(){i(this.getAttribute(`data-copy`),this,`¡Copiado!`)}),y(`click`,`.ct_faq_q`,function(){let e=this.closest(`.ct_faq_item`);if(!e)return;let t=e.classList.contains(`active`);if(document.querySelectorAll(`.ct_faq_item`).forEach(e=>{e.classList.remove(`active`);let t=e.querySelector(`.ct_faq_a`);t&&t.style.display!==`none`&&window.getComputedStyle(t).display!==`none`&&x(t,280)}),document.querySelectorAll(`.ct_faq_arr`).forEach(e=>e.classList.remove(`rotated`)),!t){e.classList.add(`active`);let t=e.querySelector(`.ct_faq_a`);t&&S(t,280);let n=e.querySelector(`.ct_faq_arr`);n&&n.classList.add(`rotated`)}}),g.push(t(`.wi_fadeUp`,e=>e.classList.add(`visible`))),g.push(t(`.ct_faq_item`,(e,t)=>setTimeout(()=>e.classList.add(`visible`),t*80))),console.log(`📩 ${e} Contacto cargado`),window.__WIREADY__=!0},w=()=>{b(),g.forEach(e=>e?.disconnect?.()),g=[]};export{w as cleanup,C as init,_ as render};