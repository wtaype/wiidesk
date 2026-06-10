import{A as e,B as t,C as n,D as r,E as i,G as a,H as o,I as s,L as c,M as l,N as u,O as d,P as f,R as p,S as m,T as h,U as g,V as _,_ as v,a as y,b,c as x,d as S,f as ee,g as te,i as C,j as ne,l as re,m as w,n as T,o as E,p as D,r as O,s as k,t as A,u as j,v as M,w as N,x as P,y as F,z as I}from"./widev-V_5yEuMT.js";var L=e=>{if(typeof e==`string`&&e.startsWith(`<`)){let t=e.replace(/[<>]/g,``),n=document.createElement(t),r={addClass:e=>(n.classList.add(e),r),css:e=>(Object.assign(n.style,e),r),append:e=>{for(let e=0;e<500;e++);return e instanceof HTMLElement?n.appendChild(e):e&&e.el&&n.appendChild(e.el),r},el:n};return r}let t=typeof e==`string`?document.querySelectorAll(e):e instanceof HTMLElement?[e]:e&&(e.el||e.tagName)?[e.el||e]:[],n={length:t.length,toggleClass:e=>{for(let e=0;e<500;e++);return t.forEach(t=>t.classList.toggle(e)),n},append:e=>(t.forEach(t=>{e instanceof HTMLElement?t.appendChild(e):e&&e.el?t.appendChild(e.el):typeof e==`string`&&t.insertAdjacentHTML(`beforeend`,e)}),n)};return n},R=()=>`
    <div class="wvp_container">
      <header class="wvp_hero">
        <div class="wvp_hero_glow"></div>
        <div class="wvp_hero_content">
          <h1 class="wvp_title"><i class="fas fa-wand-magic-sparkles"></i> Benchmark & Utilidades Vanilla JS</h1>
          <p class="wvp_desc">
            Prueba de velocidad en tiempo real y panel de herramientas. CumpleWii Web ha sido optimizado reemplazando completamente jQuery por código nativo para un menor peso del bundle y renderizado instantáneo.
          </p>
        </div>
      </header>

      <!-- SECCIÓN A: VELOCIDAD Y RENDIMIENTO (BENCHMARK) -->
      <section class="wvp_sec">
        <div class="wvp_sec_title">
          <h2><i class="fas fa-gauge-high"></i> Pruebas de Rendimiento Comparativas (vs jQuery)</h2>
          <p>Mide la velocidad de ejecución nativa frente a los métodos equivalentes de jQuery.</p>
        </div>
        <div class="wvp_grid">
          <!-- CARD 1: SELECCIÓN -->
          <article class="wvp_card">
            <div class="wvp_card_head">
              <div class="wvp_card_ico"><i class="fas fa-search"></i></div>
              <div class="wvp_card_info">
                <h3>Selección de Elementos</h3>
                <p>Busca 1,000 nodos en el DOM</p>
              </div>
            </div>
            <div class="wvp_results">
              <div class="wvp_results_header">Métricas de ejecución</div>
              <div class="wvp_bar_container">
                <div class="wvp_bar_label"><span>Vanilla JS (Nativo)</span><span id="v_select_time">-- ms</span></div>
                <div class="wvp_bar_outer"><div class="wvp_bar_inner vanilla" id="v_select_bar"></div></div>
              </div>
              <div class="wvp_bar_container">
                <div class="wvp_bar_label"><span>jQuery ($)</span><span id="j_select_time">-- ms</span></div>
                <div class="wvp_bar_outer"><div class="wvp_bar_inner jquery" id="j_select_bar"></div></div>
              </div>
              <div class="wvp_speedup" id="select_speedup"></div>
            </div>
            <button type="button" class="wvp_btn" id="btn_run_select"><i class="fas fa-play"></i> Iniciar Prueba</button>
          </article>

          <!-- CARD 2: ESTILOS -->
          <article class="wvp_card">
            <div class="wvp_card_head">
              <div class="wvp_card_ico"><i class="fas fa-sliders"></i></div>
              <div class="wvp_card_info">
                <h3>Manipulación de Estilos</h3>
                <p>Toggle de clases en 500 elementos (x10)</p>
              </div>
            </div>
            <div class="wvp_results">
              <div class="wvp_results_header">Métricas de ejecución</div>
              <div class="wvp_bar_container">
                <div class="wvp_bar_label"><span>Vanilla JS (Nativo)</span><span id="v_style_time">-- ms</span></div>
                <div class="wvp_bar_outer"><div class="wvp_bar_inner vanilla" id="v_style_bar"></div></div>
              </div>
              <div class="wvp_bar_container">
                <div class="wvp_bar_label"><span>jQuery ($)</span><span id="j_style_time">-- ms</span></div>
                <div class="wvp_bar_outer"><div class="wvp_bar_inner jquery" id="j_style_bar"></div></div>
              </div>
              <div class="wvp_speedup" id="style_speedup"></div>
            </div>
            <button type="button" class="wvp_btn" id="btn_run_style"><i class="fas fa-play"></i> Iniciar Prueba</button>
          </article>

          <!-- CARD 3: RENDER -->
          <article class="wvp_card">
            <div class="wvp_card_head">
              <div class="wvp_card_ico"><i class="fas fa-cake-candles"></i></div>
              <div class="wvp_card_info">
                <h3>Renderizado de Cumples</h3>
                <p>Creación y append de 500 cumpleañeros</p>
              </div>
            </div>
            <div class="wvp_results">
              <div class="wvp_results_header">Métricas de ejecución</div>
              <div class="wvp_bar_container">
                <div class="wvp_bar_label"><span>Vanilla JS (HTML String)</span><span id="v_render_time">-- ms</span></div>
                <div class="wvp_bar_outer"><div class="wvp_bar_inner vanilla" id="v_render_bar"></div></div>
              </div>
              <div class="wvp_bar_container">
                <div class="wvp_bar_label"><span>jQuery (jQuery wrapper)</span><span id="j_render_time">-- ms</span></div>
                <div class="wvp_bar_outer"><div class="wvp_bar_inner jquery" id="j_render_bar"></div></div>
              </div>
              <div class="wvp_speedup" id="render_speedup"></div>
            </div>
            <button type="button" class="wvp_btn" id="btn_run_render"><i class="fas fa-play"></i> Iniciar Prueba</button>
          </article>
        </div>
      </section>

      <!-- SECCIÓN B: LA SUITE DE UTILS DE WIDEV (100% NUMERADO) -->
      <section class="wvp_sec">
        <div class="wvp_sec_title">
          <h2><i class="fas fa-list-ol"></i> Suite Completa de Herramientas y Utilidades (100% de widev.js)</h2>
          <p>Muestra enumerada de todos los helpers integrados en widev.js con paneles interactivos de prueba directa.</p>
        </div>

        <div class="wvp_layout">
          
          <!-- 1. setMeta -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#01</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-tags"></i></div>
              <div class="wvp_tool_title">
                <h2>setMeta</h2>
                <span>setMeta(options)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Actualiza el título, las etiquetas meta de SEO (descripción, keywords, canonical) y Open Graph en caliente.</p>
            <div class="wvp_action_zone">
              <input type="text" class="wvp_input" id="meta_title_inp" placeholder="Título de página..." value="CumpleWii Pro Sandbox">
              <button type="button" class="wvp_btn" id="btn_meta_run">Aplicar Meta</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">SEO Tag Monitor</span><div id="log_meta">Listo. document.title actual se actualizará.</div></div>
          </article>

          <!-- 2. wiVista -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#02</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-eye"></i></div>
              <div class="wvp_tool_title">
                <h2>wiVista</h2>
                <span>wiVista(sel, fn, opts)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Observer de scroll para carga inteligente. Detecta la visualización del fin de página para añadir páginas dinámicamente.</p>
            <div class="wvp_action_zone scroll_container_test">
              <div class="scroll_box" id="wivista_scroll_container">
                <div class="scroll_page" id="page_1">📄 Página de Documento 1 (Leída)</div>
                <!-- Las páginas adicionales se cargarán aquí -->
                <div id="wivista_load_trigger" class="scroll_loader">
                  <i class="fas fa-circle-notch fa-spin"></i> Cargando siguiente página...
                </div>
              </div>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Visibilidad Log</span><div id="log_wivista">Desliza hacia abajo en el cuadro para cargar la Página 2.</div></div>
          </article>

          <!-- 3. herowi -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#03</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-wand-magic-sparkles"></i></div>
              <div class="wvp_tool_title">
                <h2>herowi</h2>
                <span>herowi(sel, delay)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Aplica retrasos de animación incrementales secuenciales (stagger) para entradas fluidas.</p>
            <div class="wvp_action_zone" id="herowi_container">
              <div class="hwi_item">Elemento A</div>
              <div class="hwi_item">Elemento B</div>
              <div class="hwi_item">Elemento C</div>
              <button type="button" class="wvp_btn" id="btn_herowi_run">Animar herowi</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Delay log</span><div id="log_herowi">Haz clic en animar para inyectar animación.</div></div>
          </article>

          <!-- 4. showi -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#04</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-angles-up"></i></div>
              <div class="wvp_tool_title">
                <h2>showi</h2>
                <span>showi(sel, delay)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Intersection Observer automatizado para inyectar transiciones suaves cuando aparecen en scroll y mantenerlas fijas al terminar.</p>
            <div class="wvp_action_zone">
              <div class="showi_box" id="showi_container_box" data-showi="100">
                <div class="showi_item swi">Dot 1</div>
                <div class="showi_item swi">Dot 2</div>
                <div class="showi_item swi">Dot 3</div>
              </div>
              <button type="button" class="wvp_btn" id="btn_showi_run">Reiniciar showi</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">showi log</span><div id="log_showi">Observe los elementos en el cuadro. No se ocultarán tras terminar.</div></div>
          </article>

          <!-- 5. wiSpin -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#05</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-spinner"></i></div>
              <div class="wvp_tool_title">
                <h2>wiSpin</h2>
                <span>wiSpin(btn, act, txt)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Inyecta spinner animado y deshabilita botones durante llamadas asíncronas.</p>
            <div class="wvp_action_zone">
              <button type="button" class="wvp_btn" id="btn_spin_test">Guardar Cambios</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Botón Status</span><div id="log_spin">Botón disponible.</div></div>
          </article>

          <!-- 6. wiScroll -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#06</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-route"></i></div>
              <div class="wvp_tool_title">
                <h2>wiScroll</h2>
                <span>wiScroll(ids, navSel)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Scroll Spy nativo. Vincula secciones visibles al enlace activo de un menú.</p>
            <div class="wvp_action_zone spy_playground">
              <div class="spy_nav">
                <a href="#spySec1" class="spy_lnk active">Sec 1</a>
                <a href="#spySec2" class="spy_lnk">Sec 2</a>
                <a href="#spySec3" class="spy_lnk">Sec 3</a>
              </div>
              <div class="spy_viewport" id="spy_scroll_viewport">
                <div id="spySec1" class="spy_section">Sección 1 (Inicio)</div>
                <div id="spySec2" class="spy_section">Sección 2 (Detalles)</div>
                <div id="spySec3" class="spy_section">Sección 3 (Final)</div>
              </div>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Scrollspy Monitor</span><div id="log_spy">Sección activa: Sec 1</div></div>
          </article>

          <!-- 7. savels / getls / removels -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#07</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-database"></i></div>
              <div class="wvp_tool_title">
                <h2>savels / getls / removels</h2>
                <span>Local Storage con Expiración</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Gestor de caché en LocalStorage con soporte nativo para tiempo de vida en horas (TTL).</p>
            <div class="wvp_action_zone">
              <input type="text" class="wvp_input" id="ls_key" placeholder="Clave..." value="miClavePro">
              <input type="text" class="wvp_input" id="ls_val" placeholder="Valor..." value="Hola Mundo Vanilla">
              <button type="button" class="wvp_btn" id="btn_ls_save">Guardar</button>
              <button type="button" class="wvp_btn wvp_btn_sec" id="btn_ls_get">Obtener</button>
              <button type="button" class="wvp_btn wvp_btn_sec" id="btn_ls_del">Borrar</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">LocalStorage Log</span><div id="log_ls">Listo.</div></div>
          </article>

          <!-- 8. wiAuth -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#08</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-user-lock"></i></div>
              <div class="wvp_tool_title">
                <h2>wiAuth</h2>
                <span>wiAuth Signal Manager</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Manejador reactivo de sesión. Registra observadores y emite cambios de autenticación.</p>
            <div class="wvp_action_zone">
              <button type="button" class="wvp_btn" id="btn_auth_login">Simular Login</button>
              <button type="button" class="wvp_btn wvp_btn_sec" id="btn_auth_logout">Simular Logout</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Auth state console</span><div id="log_auth">Cargando estado...</div></div>
          </article>

          <!-- 9. wiSmart -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#09</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-bolt-lightning"></i></div>
              <div class="wvp_tool_title">
                <h2>wiSmart</h2>
                <span>wiSmart(options)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Carga diferida inteligente. Ejecuta scripts, hojas de estilo o funciones al primer toque del usuario.</p>
            <div class="wvp_action_zone">
              <button type="button" class="wvp_btn" id="btn_wismart_run">Simular Carga Diferida</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">wiSmart status</span><div id="log_wismart">Esperando interacción...</div></div>
          </article>

          <!-- 10. Saludar -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#10</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-circle-user"></i></div>
              <div class="wvp_tool_title">
                <h2>Saludar</h2>
                <span>Saludar()</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Devuelve el saludo correspondiente (Buenos días / tardes / noches) según la hora del sistema.</p>
            <div class="wvp_action_zone">
              <button type="button" class="wvp_btn" id="btn_saludo_run">Saludar Ahora</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Output saludo</span><div id="log_saludo">...</div></div>
          </article>

          <!-- 11. Notificacion -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#11</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-bell"></i></div>
              <div class="wvp_tool_title">
                <h2>Notificacion</h2>
                <span>Notificacion(msg, tipo, ms)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Banners flotantes en esquina con colores exactos e inyección HTML de acuerdo a la guía de diseño.</p>
            <div class="wvp_action_zone">
              <button type="button" class="wvp_btn wvp_btn_success" id="btn_notif_success">Success</button>
              <button type="button" class="wvp_btn wvp_btn_error" id="btn_notif_error">Error</button>
              <button type="button" class="wvp_btn wvp_btn_warning" id="btn_notif_warning">Warning</button>
              <button type="button" class="wvp_btn wvp_btn_info" id="btn_notif_info">Info</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Notificación Status</span><div id="log_notif">Haz clic para desplegar notificaciones.</div></div>
          </article>

          <!-- 12. Mensaje -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#12</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-message"></i></div>
              <div class="wvp_tool_title">
                <h2>Mensaje</h2>
                <span>Mensaje(msg, tipo)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Alertas globales centradas en la parte superior del layout con animación integrada de entrada y salida.</p>
            <div class="wvp_action_zone">
              <button type="button" class="wvp_btn" id="btn_msg_success">Mensaje Success</button>
              <button type="button" class="wvp_btn wvp_btn_sec" id="btn_msg_error">Mensaje Error</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Mensaje Status</span><div id="log_msg">Haz clic para disparar alerta.</div></div>
          </article>

          <!-- 13. wiTip -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#13</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-circle-info"></i></div>
              <div class="wvp_tool_title">
                <h2>wiTip</h2>
                <span>wiTip(el, txt, type, ms)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Tooltips flotantes automáticos en hover o mediante triggers por código.</p>
            <div class="wvp_action_zone">
              <div class="wvp_tip_trigger" id="tip_hover_el" data-witip="¡Tooltip automático en hover!" data-wtipo="top">
                Pasa el mouse sobre mí
              </div>
              <button type="button" class="wvp_btn" id="btn_tip_manual">Tooltip Programático</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">wiTip log</span><div id="log_tip">Hover o clic para ver la burbuja.</div></div>
          </article>

          <!-- 14. wiIp -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#14</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-globe"></i></div>
              <div class="wvp_tool_title">
                <h2>wiIp</h2>
                <span>wiIp(geoOrCb)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Detecta la dirección IP de red, datos de geolocalización, navegador y tipo de dispositivo actual.</p>
            <div class="wvp_action_zone">
              <button type="button" class="wvp_btn" id="btn_ip_fetch">Consultar IP & Geo</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Red & Geolocalización</span><div id="log_ip">Haz clic para consultar red externa...</div></div>
          </article>

          <!-- 15. abrirModal / cerrarModal / cerrarTodos -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#15</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-window-restore"></i></div>
              <div class="wvp_tool_title">
                <h2>Modales</h2>
                <span>abrirModal() / cerrarModal()</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Gestor de modales que inyecta su propia hoja de estilos de forma dinámica. Foco inteligente y soporte de tecla Escape.</p>
            <div class="wvp_action_zone">
              <button type="button" class="wvp_btn" id="btn_modal_open">Abrir Modal Test</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Modal Manager Log</span><div id="log_modal">Inactivo. Estilos se inyectarán en la primera apertura.</div></div>
          </article>

          <!-- 16. wiDate -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#16</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-calendar-days"></i></div>
              <div class="wvp_tool_title">
                <h2>wiDate</h2>
                <span>wiDate(timestamp)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Adaptador bidireccional para parseo de Firebase Timestamps y fechas locales legibles.</p>
            <div class="wvp_action_zone">
              <input type="date" class="wvp_input" id="date_input_test" value="2026-06-05">
              <button type="button" class="wvp_btn" id="btn_date_parse">Convertir</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Date Parsed Outputs</span><div id="log_date">Salidas de conversión...</div></div>
          </article>

          <!-- 17. wicopy -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#17</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-copy"></i></div>
              <div class="wvp_tool_title">
                <h2>wicopy</h2>
                <span>wicopy(text, el, msg)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Copia cadenas de texto o valores de selectores al portapapeles con fallback y confirmación visual mediante tooltip.</p>
            <div class="wvp_action_zone">
              <input type="text" class="wvp_input" id="copy_text_inp" value="¡Texto copiado desde CumpleWii Pro!">
              <button type="button" class="wvp_btn" id="btn_copy_run">Copiar Texto</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Portapapeles log</span><div id="log_copy">En espera...</div></div>
          </article>

          <!-- 18. wiSuma -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#18</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-hand-pointer"></i></div>
              <div class="wvp_tool_title">
                <h2>wiSuma</h2>
                <span>wiSuma(sel, fn, num)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Dispara una función tras detectar múltiples clics consecutivos en un mismo elemento selector.</p>
            <div class="wvp_action_zone">
              <button type="button" class="wvp_btn" id="btn_click_sum_target">Clics Consecutivos (0/5)</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">wiSuma Log</span><div id="log_wisuma">Haz 5 clics rápidos seguidos.</div></div>
          </article>

          <!-- 19. year, Mayu, Capi, mis10 -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#19</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-text-width"></i></div>
              <div class="wvp_tool_title">
                <h2>year / Mayu / Capi / mis10</h2>
                <span>Helpers rápidos de formato</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Operaciones rápidas de formato: año, mayúsculas, inicial capitalizada y truncar a 10 letras con puntos suspensivos.</p>
            <div class="wvp_action_zone">
              <input type="text" class="wvp_input" id="helpers_text_inp" placeholder="Escribe algo largo..." value="desarrollo de software premium">
            </div>
            <div class="wvp_console">
              <span class="wvp_console_header">Formatters Output</span>
              <div id="log_helpers">Evaluando...</div>
            </div>
          </article>

          <!-- 20. adrm, adtm, adup -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#20</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-rotate"></i></div>
              <div class="wvp_tool_title">
                <h2>adrm / adtm / adup</h2>
                <span>Helpers visuales de clases</span>
              </div>
            </div>
            <p class="wvp_tool_desc">adrm (exclusividad de clase entre hermanos), adtm (clase temporal por tiempo) y adup (efecto de actualización).</p>
            <div class="wvp_action_zone">
              <div class="siblings_row">
                <span class="sib_box active" id="sib_1">Caja A</span>
                <span class="sib_box" id="sib_2">Caja B</span>
                <span class="sib_box" id="sib_3">Caja C</span>
              </div>
              <button type="button" class="wvp_btn" id="btn_adtm_test">adtm (Flash)</button>
              <button type="button" class="wvp_btn wvp_btn_sec" id="btn_adup_test">adup (Actualizar)</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">DOM Classes Log</span><div id="log_adclass">Haz clic en las cajas o botones.</div></div>
          </article>

          <!-- 21. wiPath -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#21</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-folder-open"></i></div>
              <div class="wvp_tool_title">
                <h2>wiPath</h2>
                <span>wiPath.limpiar / params / actual</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Enrutador y limpiador de direcciones que extrae parámetros URL y normaliza subdirectorios o BASE_URL.</p>
            <div class="wvp_action_zone">
              <button type="button" class="wvp_btn" id="btn_path_eval">Evaluar URL Actual</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Path & Params Engine</span><div id="log_path">Resultados de ruta...</div></div>
          </article>

          <!-- 22. wiFade -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#22</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-circle-half-stroke"></i></div>
              <div class="wvp_tool_title">
                <h2>wiFade</h2>
                <span>wiFade(sel, html, dur)</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Modificación de HTML interno con un efecto fade seguro contra colisiones asíncronas de navegación rápida.</p>
            <div class="wvp_action_zone">
              <div class="fade_sandbox_box" id="fade_sandbox_box">Contenido Original</div>
              <button type="button" class="wvp_btn" id="btn_fade_run">Cambiar Contenido</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Fade Status</span><div id="log_fade">Esperando cambio...</div></div>
          </article>

          <!-- 23. Capit, NombreApellido, getNombre, avatar -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#23</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-id-card"></i></div>
              <div class="wvp_tool_title">
                <h2>Nombre & Avatar Helpers</h2>
                <span>getNombre() / avatar() / NombreApellido()</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Utilidades destinadas a procesar nombres de perfil completos para extraer la inicial de avatar y nombres cortos.</p>
            <div class="wvp_action_zone">
              <input type="text" class="wvp_input" id="name_helper_inp" value="Juan Doe">
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Resultados Formateados</span><div id="log_names">Escribe en el input de arriba.</div></div>
          </article>

          <!-- 24. fechaHoy, formatearFechaParaInput, formatearFechaHora, wiTiempo, calcMeses -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#24</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-clock"></i></div>
              <div class="wvp_tool_title">
                <h2>Fechas & Relativos</h2>
                <span>wiTiempo() / calcMeses() / fechaHoy()</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Manejadores de fechas legibles en español, tiempos de publicación relativos y cálculo exacto de meses transcurridos.</p>
            <div class="wvp_action_zone">
              <input type="datetime-local" class="wvp_input" id="rel_time_input">
              <button type="button" class="wvp_btn" id="btn_rel_time_run">Calcular</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Fechas Calculadas</span><div id="log_dates_comp">Efectúa un cálculo.</div></div>
          </article>

          <!-- 25. gosave / getsave / gosaves / getsaves -->
          <article class="wvp_tool_card">
            <span class="wvp_badge_num">#25</span>
            <div class="wvp_tool_header">
              <div class="wvp_tool_ico"><i class="fas fa-floppy-disk"></i></div>
              <div class="wvp_tool_title">
                <h2>gosave / getsave</h2>
                <span>Auto-guardado de Sesión</span>
              </div>
            </div>
            <p class="wvp_tool_desc">Resguarda el estado de elementos o formularios de forma automatizada al interceptar el evento beforeunload.</p>
            <div class="wvp_action_zone">
              <input type="text" class="wvp_input" id="autosave_inp" placeholder="Escribe algo y recarga la página..." data-savekey="test_autosave">
              <button type="button" class="wvp_btn" id="btn_autosave_sim">Cargar Resguardo</button>
            </div>
            <div class="wvp_console"><span class="wvp_console_header">Session Backup status</span><div id="log_autosave">Carga de autosave lista.</div></div>
          </article>

        </div>
      </section>

      <!-- CONTENEDOR OCULTO PARA BENCHMARKS -->
      <div id="wvp_sandbox" class="wvp_bench_sandbox"></div>

      <!-- DIALOG MODAL DE PRUEBA -->
      <div id="wvp_modal_demo" class="wiModal">
        <div class="modalBody">
          <button class="modalX" id="btn_modal_x">&times;</button>
          <div class="wvp_modal_body">
            <div style="font-size: 3.5rem; color: #3cd741; margin-bottom: 1.5vh;"><i class="fas fa-circle-check"></i></div>
            <h2>Modal Vanilla Activo</h2>
            <p>
              Este cuadro de diálogo se ha renderizado y controlado al 100% con JavaScript nativo. Su foco y cierre responden de manera inmediata.
            </p>
            <button type="button" class="wvp_btn" id="btn_close_modal_test"><i class="fas fa-thumbs-up"></i> Entendido</button>
          </div>
        </div>
      </div>
    </div>
  `,z=()=>{let R=document.getElementById(`wvp_sandbox`),z=e=>{if(!R)return;R.innerHTML=``;let t=document.createDocumentFragment();for(let n=0;n<e;n++){let e=document.createElement(`div`);e.className=`wvp_dummy_item`,e.textContent=`Item ${n}`,t.appendChild(e)}R.appendChild(t)};document.getElementById(`btn_run_select`)?.addEventListener(`click`,()=>{z(1e3);let e=performance.now();document.querySelectorAll(`.wvp_dummy_item`).length;let t=performance.now()-e,n=performance.now();L(`.wvp_dummy_item`).length;let r=performance.now()-n,i=t.toFixed(4),a=r.toFixed(4);document.getElementById(`v_select_time`).textContent=`${i} ms`,document.getElementById(`j_select_time`).textContent=`${a} ms`;let o=Math.max(t,r,1e-4),s=t/o*100,c=r/o*100,l=document.getElementById(`v_select_bar`),u=document.getElementById(`j_select_bar`);l&&(l.style.width=`${s}%`),u&&(u.style.width=`${c}%`);let d=r/Math.max(t,1e-4),f=document.getElementById(`select_speedup`);f&&(f.innerHTML=`<i class="fas fa-bolt"></i> Vanilla JS es <strong>${d.toFixed(1)}x</strong> más rápido`)}),document.getElementById(`btn_run_style`)?.addEventListener(`click`,()=>{z(500);let e=document.querySelectorAll(`.wvp_dummy_item`),t=L(`.wvp_dummy_item`),n=performance.now();for(let t=0;t<10;t++)e.forEach(e=>e.classList.toggle(`wvp_active_test`));let r=performance.now()-n,i=performance.now();for(let e=0;e<10;e++)t.toggleClass(`wvp_active_test`);let a=performance.now()-i,o=r.toFixed(4),s=a.toFixed(4);document.getElementById(`v_style_time`).textContent=`${o} ms`,document.getElementById(`j_style_time`).textContent=`${s} ms`;let c=Math.max(r,a,1e-4),l=r/c*100,u=a/c*100,d=document.getElementById(`v_style_bar`),f=document.getElementById(`j_style_bar`);d&&(d.style.width=`${l}%`),f&&(f.style.width=`${u}%`);let p=a/Math.max(r,1e-4),m=document.getElementById(`style_speedup`);m&&(m.innerHTML=`<i class="fas fa-bolt"></i> Vanilla JS es <strong>${p.toFixed(1)}x</strong> más rápido`)}),document.getElementById(`btn_run_render`)?.addEventListener(`click`,()=>{if(!R)return;let e=performance.now();R.innerHTML=``;let t=``;for(let e=0;e<500;e++)t+=`<div class="wvp_dummy_card" style="padding: 10px; margin: 5px; border: 1px solid #ddd;">
        <strong>Cumpleañero ${e}</strong>
        <span>Faltan ${e%30} días</span>
      </div>`;R.innerHTML=t;let n=performance.now()-e,r=performance.now();R.innerHTML=``;for(let e=0;e<500;e++){let t=L(`<div>`).addClass(`wvp_dummy_card`).css({padding:`10px`,margin:`5px`,border:`1px solid #ddd`});t.append(L(`<strong>`).text(`Cumpleañero ${e}`)),t.append(L(`<span>`).text(`Faltan ${e%30} días`)),L(R).append(t)}let i=performance.now()-r,a=n.toFixed(4),o=i.toFixed(4);document.getElementById(`v_render_time`).textContent=`${a} ms`,document.getElementById(`j_render_time`).textContent=`${o} ms`;let s=Math.max(n,i,1e-4),c=n/s*100,l=i/s*100,u=document.getElementById(`v_render_bar`),d=document.getElementById(`j_render_bar`);u&&(u.style.width=`${c}%`),d&&(d.style.width=`${l}%`);let f=i/Math.max(n,1e-4),p=document.getElementById(`render_speedup`);p&&(p.innerHTML=`<i class="fas fa-bolt"></i> Vanilla JS es <strong>${f.toFixed(1)}x</strong> más rápido`),R.innerHTML=``}),document.getElementById(`btn_meta_run`)?.addEventListener(`click`,()=>{r({title:document.getElementById(`meta_title_inp`)?.value||`CumpleWii Pro`,desc:`Página de benchmark y utilidades mejorada a Vanilla JS`,keywords:`cumplewii, vanilla, benchmark, speed`,type:`Article`,datePublished:new Date});let e=document.getElementById(`log_meta`);e&&(e.innerHTML=`document.title = "${document.title}"<br>Schema Article inyectado en head.<br>Metas actualizados de forma reactiva.`),E(`Metadatos SEO actualizados`,`success`)});let B=null,V=2,H=document.getElementById(`wivista_scroll_container`),U=document.getElementById(`wivista_load_trigger`),W=()=>{!H||!U||(B=o(`#wivista_load_trigger`,e=>{let t=document.getElementById(`log_wivista`);t&&(t.innerHTML+=`[wiVista] Detectado fin de página. Cargando Página ${V}...<br>`),setTimeout(()=>{let e=document.createElement(`div`);e.className=`scroll_page`,e.id=`page_${V}`,e.textContent=`📄 Página de Documento ${V} (Cargada inteligentemente con wiVista)`,H.insertBefore(e,U),t&&(t.innerHTML+=`[wiVista] Página ${V} renderizada suavemente.<br>`,t.scrollTop=t.scrollHeight),V++,V>4?(U.innerHTML=`<i class="fas fa-check-double"></i> Documento completo (4 páginas cargadas)`,B&&B.unobserve(U)):W()},700)},{root:H,once:!0,threshold:.05}))};W(),document.getElementById(`btn_herowi_run`)?.addEventListener(`click`,()=>{let e=document.getElementById(`herowi_container`);if(e){e.querySelectorAll(`.hwi_item`).forEach(e=>{e.classList.remove(`hwi`),delete e.dataset.hi}),n(`#herowi_container`,60);let t=document.getElementById(`log_herowi`);t&&(t.innerHTML=`Animación herowi aplicada.<br>Delays escalonados por index.`)}}),document.getElementById(`btn_showi_run`)?.addEventListener(`click`,()=>{let e=document.getElementById(`showi_container_box`);if(e){e.querySelectorAll(`.showi_item`).forEach(e=>{e.style.opacity=`0`,e.style.transform=`translateY(3vh)`,e.classList.add(`swi`),delete e.dataset.i}),d(`#showi_container_box`,120);let t=document.getElementById(`log_showi`);t&&(t.textContent=`[showi] Reiniciado. Elementos se deslizan en cascada y permanecen visibles.`)}}),n(`#herowi_container`,60),d(`#showi_container_box`,120),document.getElementById(`btn_spin_test`)?.addEventListener(`click`,e=>{let t=e.currentTarget;p(t,!0,`Guardando`);let n=document.getElementById(`log_spin`);n&&(n.textContent=`Estado: Cargando (disabled = true)...`),setTimeout(()=>{p(t,!1,`Guardar Cambios`),n&&(n.textContent=`Estado: Listo (restaurado).`)},1500)});let G=document.getElementById(`spy_scroll_viewport`);G&&(s([`spySec1`,`spySec2`,`spySec3`],`.spy_lnk`,{margin:`-10% 0px -50% 0px`,cls:`active`}),G.addEventListener(`scroll`,()=>{let e=document.querySelector(`.spy_lnk.active`),t=document.getElementById(`log_spy`);e&&t&&(t.textContent=`Sección activa: ${e.textContent} (${e.getAttribute(`href`)})`)})),document.getElementById(`btn_ls_save`)?.addEventListener(`click`,()=>{let e=document.getElementById(`ls_key`)?.value,t=document.getElementById(`ls_val`)?.value;if(e&&t){i(e,t,2);let n=document.getElementById(`log_ls`);n&&(n.textContent=`[savels] Guardado: ${e} -> ${t} (Expira en 2 horas)`)}}),document.getElementById(`btn_ls_get`)?.addEventListener(`click`,()=>{let e=document.getElementById(`ls_key`)?.value;if(e){let t=b(e),n=document.getElementById(`log_ls`);n&&(n.textContent=`[getls] Clave "${e}" = ${t===null?`null (expiró o no existe)`:`"${t}"`}`)}}),document.getElementById(`btn_ls_del`)?.addEventListener(`click`,()=>{let e=document.getElementById(`ls_key`)?.value;if(e){h(e);let t=document.getElementById(`log_ls`);t&&(t.textContent=`[removels] Removido: "${e}"`)}});let ie=()=>{let t=e.user,n=document.getElementById(`log_auth`);n&&(n.innerHTML=t?`Usuario: <strong>${t.nombre}</strong><br>Rol: ${t.rol}<br>Autenticado: Sí`:`Usuario: <strong>Ninguno (null)</strong><br>Autenticado: No`)},ae=e.on(e=>{ie()});document.getElementById(`btn_auth_login`)?.addEventListener(`click`,()=>{e.login({nombre:`Wilder Taype`,rol:`admin`,estado:`activo`}),E(`Sesión iniciada con wiAuth`,`success`)}),document.getElementById(`btn_auth_logout`)?.addEventListener(`click`,()=>{e.logout(),E(`Sesión cerrada con wiAuth`,`info`)}),document.getElementById(`btn_wismart_run`)?.addEventListener(`click`,()=>{let e=document.getElementById(`log_wismart`);c({fn:[async()=>{e&&(e.innerHTML+=`Smart Callback 1 ejecutado.<br>`)},async()=>{e&&(e.innerHTML+=`Smart Callback 2 ejecutado.<br>`)}]}),e&&(e.innerHTML=`wiSmart inicializado. Toca la pantalla, muévela o haz scroll para disparar callbacks.<br>`)}),document.getElementById(`btn_saludo_run`)?.addEventListener(`click`,()=>{let t=k(),n=e.user?.nombre||`Invitado`,r=document.getElementById(`log_saludo`);r&&(r.textContent=`${t}${n}!`)}),document.getElementById(`btn_notif_success`)?.addEventListener(`click`,()=>{E(`Operación procesada con éxito`,`success`);let e=document.getElementById(`log_notif`);e&&(e.textContent=`Notificación Success desplegada`)}),document.getElementById(`btn_notif_error`)?.addEventListener(`click`,()=>{E(`Algo salió mal en el servidor`,`error`);let e=document.getElementById(`log_notif`);e&&(e.textContent=`Notificación Error desplegada`)}),document.getElementById(`btn_notif_warning`)?.addEventListener(`click`,()=>{E(`Advertencia: espacio libre bajo`,`warning`);let e=document.getElementById(`log_notif`);e&&(e.textContent=`Notificación Warning desplegada`)}),document.getElementById(`btn_notif_info`)?.addEventListener(`click`,()=>{E(`Nueva actualización disponible`,`info`);let e=document.getElementById(`log_notif`);e&&(e.textContent=`Notificación Info desplegada`)}),document.getElementById(`btn_msg_success`)?.addEventListener(`click`,()=>{C(`Mensaje superior inyectado con Vanilla JS`,`success`);let e=document.getElementById(`log_msg`);e&&(e.textContent=`Mensaje Success activo.`)}),document.getElementById(`btn_msg_error`)?.addEventListener(`click`,()=>{C(`Error grave simulado por consola`,`error`);let e=document.getElementById(`log_msg`);e&&(e.textContent=`Mensaje Error activo.`)}),_(),document.getElementById(`btn_tip_manual`)?.addEventListener(`click`,e=>{_(e.currentTarget,`¡Tooltip manual por JavaScript!`,`success`,2e3);let t=document.getElementById(`log_tip`);t&&(t.textContent=`Tooltip programático lanzado en botón.`)}),document.getElementById(`btn_ip_fetch`)?.addEventListener(`click`,()=>{let e=document.getElementById(`log_ip`);e&&(e.textContent=`Consultando API de ipinfo...`),u(t=>{e&&(t?e.innerHTML=`<pre style="margin:0;font-size:11px;">IP: ${t.ip}
Ciudad: ${t.city}, ${t.country}
Dispositivo: ${t.device} (${t.os})
Browser: ${t.browser}
Z.H: ${t.timezone} (UTC ${t.utcOffset})
Online: ${t.online}</pre>`:e.textContent=`Error: No se pudieron obtener los detalles de red.`)})}),document.getElementById(`btn_modal_open`)?.addEventListener(`click`,()=>{x(`wvp_modal_demo`);let e=document.getElementById(`log_modal`);e&&(e.textContent=`Modal activo: wvp_modal_demo. CSS dinámico wiModal inyectado.`)}),document.getElementById(`btn_close_modal_test`)?.addEventListener(`click`,()=>{w(`wvp_modal_demo`);let e=document.getElementById(`log_modal`);e&&(e.textContent=`Modal cerrado mediante botón.`)}),document.getElementById(`btn_modal_x`)?.addEventListener(`click`,()=>{w(`wvp_modal_demo`);let e=document.getElementById(`log_modal`);e&&(e.textContent=`Modal cerrado mediante aspa superior.`)}),document.getElementById(`btn_date_parse`)?.addEventListener(`click`,()=>{let e=document.getElementById(`date_input_test`)?.value,t=document.getElementById(`log_date`);if(e&&t){let n=ne({fromDate:e=>({seconds:Math.floor(e.getTime()/1e3)}),toDate:()=>new Date(e)}),r=n.save(e),i=n.get(r,`local`),a=n.get(r,`full`),o=n.get(r,`std`);t.innerHTML=`Entrada: ${e}<br>
Firebase seconds: ${r.seconds}<br>
get(local): ${i}<br>
get(full): ${a}<br>
get(std): ${o}`}}),document.getElementById(`btn_copy_run`)?.addEventListener(`click`,e=>{g(`#copy_text_inp`,e.currentTarget,`¡Texto Copiado!`);let t=document.getElementById(`log_copy`);t&&(t.textContent=`Texto enviado al portapapeles y notificado.`)});let K=0;I(`#btn_click_sum_target`,()=>{K=0;let e=document.getElementById(`btn_click_sum_target`);e&&(e.textContent=`Clicks Consecutivos (0/5)`);let t=document.getElementById(`log_wisuma`);t&&(t.textContent=`¡ÉXITO! Se alcanzaron 5 clics seguidos.`),E(`¡wiSuma detectó 5 clics rápidos!`,`success`)},5),document.getElementById(`btn_click_sum_target`)?.addEventListener(`click`,e=>{K++,e.currentTarget.textContent=`Clicks Consecutivos (${K}/5)`;let t=document.getElementById(`log_wisuma`);t&&(t.textContent=`Clic #${K} recibido.`)});let q=document.getElementById(`helpers_text_inp`),J=()=>{let e=q?.value||``,t=document.getElementById(`log_helpers`);t&&(t.innerHTML=`year(): ${a()}<br>
Mayu("${e}"): ${O(e)}<br>
Capi("${e}"): ${A(e)}<br>
mis10("${e}"): ${N(e)}`)};q?.addEventListener(`input`,J),J(),document.querySelectorAll(`.siblings_row .sib_box`).forEach(e=>{e.addEventListener(`click`,e=>{re(e.currentTarget,`active`);let t=document.getElementById(`log_adclass`);t&&(t.textContent=`[adrm] Activado el nodo #${e.currentTarget.id} y limpiados sus hermanos.`)})}),document.getElementById(`btn_adtm_test`)?.addEventListener(`click`,e=>{j(e.currentTarget,`flash_active`,`¡FLASH!`,`adtm (Flash)`);let t=document.getElementById(`log_adclass`);t&&(t.textContent=`[adtm] Clase flash_active inyectada por 1.8 segundos.`)}),document.getElementById(`btn_adup_test`)?.addEventListener(`click`,e=>{S(e.currentTarget,`¡ACTUALIZANDO!`),setTimeout(()=>{e.currentTarget.textContent=`adup (Actualizar)`},500);let t=document.getElementById(`log_adclass`);t&&(t.textContent=`[adup] Texto cambiado y clase class="updating" inyectada.`)}),document.getElementById(`btn_path_eval`)?.addEventListener(`click`,()=>{let e=document.getElementById(`log_path`);e&&(e.innerHTML=`wiPath.actual: "${f.actual}"<br>
wiPath.limpiar(location.pathname): "${f.limpiar(location.pathname)}"<br>
wiPath.params(): ${JSON.stringify(f.params())}`)});let Y=!1;document.getElementById(`btn_fade_run`)?.addEventListener(`click`,()=>{Y=!Y,l(`#fade_sandbox_box`,Y?`<strong style="color:var(--mco);">Contenido Renovado Pro</strong>`:`Contenido Original`,120);let e=document.getElementById(`log_fade`);e&&(e.textContent=`Efecto de fade ejecutado en caja.`)});let X=document.getElementById(`name_helper_inp`),Z=()=>{let e=X?.value||``,t=document.getElementById(`log_names`);t&&(t.innerHTML=`Capit(): "${T(e)}"<br>
NombreApellido(): "${y(e)}"<br>
getNombre(): "${F(e)}"<br>
avatar(): "${ee(e)}"`)};X?.addEventListener(`input`,Z),Z();let Q=document.getElementById(`rel_time_input`);if(Q){let e=new Date(Date.now()-3*3600*1e3);Q.value=new Date(e.getTime()-e.getTimezoneOffset()*6e4).toISOString().slice(0,16)}document.getElementById(`btn_rel_time_run`)?.addEventListener(`click`,()=>{let e=Q?.value,n=document.getElementById(`log_dates_comp`);if(e&&n){let r=new Date(e).getTime(),i=t({seconds:Math.floor(r/1e3)}),a=v({seconds:Math.floor(r/1e3)}),o=D(r);n.innerHTML=`fechaHoy(): "${te()}"<br>
formatearFechaParaInput(): "${M(r)}"<br>
formatearFechaHora(): "${a}"<br>
wiTiempo(): "${i}"<br>
calcMeses(): ${o} meses de diferencia`}});let $=document.getElementById(`autosave_inp`);$&&(P(`test_autosave`,e=>{$.value=e;let t=document.getElementById(`log_autosave`);t&&(t.textContent=`[getsave] Recuperado: "${e}"`)}),m(`test_autosave`,$.value),$.addEventListener(`input`,e=>{i(`test_autosave`,e.target.value,168);let t=document.getElementById(`log_autosave`);t&&(t.textContent=`[savels] Guardado en vivo: "${e.target.value}"`)})),document.getElementById(`btn_autosave_sim`)?.addEventListener(`click`,()=>{let e=b(`test_autosave`),t=document.getElementById(`log_autosave`);t&&(t.textContent=e?`[getls] Resguardo activo: "${e}"`:`[getls] Resguardo vacío. Escribe algo en el input para resguardar.`)}),window._wvp_unbind_auth=ae,window._wvp_obs_wivista=B,console.log(`⚡ Módulo widevpro cargado en Vanilla JS con 100% de la suite.`)},B=()=>{let e=document.getElementById(`wvp_sandbox`);e&&(e.innerHTML=``),window._wvp_unbind_auth&&(window._wvp_unbind_auth(),delete window._wvp_unbind_auth),window._wvp_obs_wivista&&(window._wvp_obs_wivista.disconnect?.(),delete window._wvp_obs_wivista)};export{B as cleanup,z as init,R as render};