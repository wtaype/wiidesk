import{t as e}from"./wii-DZzdzbZC.js";import{G as t}from"./widev-DCNhLI3Q.js";import{a as n}from"./index-BmuCDrV3.js";/* empty css               *//* empty css                 */var r=[{ico:`fa-info`,color:`#0EBEFF`,num:`01`,tit:`Información que recopilamos`,body:`<p>Pedimos lo necesario para la app: cuenta, perfil, plan, cumpleaños guardados, notas, favoritos, feedback y token de notificaciones si lo autorizas.</p>`},{ico:`fa-chart-line`,color:`#29C72E`,num:`02`,tit:`Cómo usamos tu información`,body:`<p>La usamos para autenticarte, sincronizar tus datos, calcular avisos, aplicar límites por plan y mejorar estabilidad.</p>`},{ico:`fa-globe`,color:`#FF5C69`,num:`03`,tit:`Publicidad y servicios externos`,body:`<p>Usamos Firebase y servicios de Google para autenticación, Firestore, Cloud Messaging y análisis técnico cuando corresponda.</p>`},{ico:`fa-users`,color:`#7000FF`,num:`04`,tit:`Compartir información con terceros`,body:`<p>No vendemos ni alquilamos tus datos. Solo compartimos información con proveedores necesarios para operar CumpleWii.</p>`},{ico:`fa-lock`,color:`#FFDA34`,num:`05`,tit:`Tus derechos`,body:`<p>Puedes pedir acceso, corrección o eliminación de tu información escribiendo al equipo. Queremos que tengas control real sobre tus datos.</p>`},{ico:`fa-user-shield`,color:`#0EBEFF`,num:`06`,tit:`Seguridad`,body:`<p>Usamos conexiones cifradas y proveedores con estándares modernos de seguridad para cuidar tus sesiones y datos sincronizados.</p>`}],i=()=>`
<main id="wimain">
<div class="ac_wrap tm_wrap">

  <!-- ══ HERO ══ -->
  <section class="ac_hero tm_hero">
    <div class="ac_hero_orb ac_orb1"></div>
    <div class="ac_hero_orb ac_orb2"></div>
    <div class="ac_hero_orb ac_orb3"></div>
    <div class="ac_hero_body">
      <div class="ac_hero_badge"><i class="fas fa-shield-halved"></i> Datos Claros, Uso Responsable</div>
      <h1 class="ac_hero_tit">Política de<br><span class="ac_grad">Privacidad</span></h1>
      <p class="ac_hero_sub">
        <strong>${e}</strong> guarda solo lo necesario para iniciar sesión, sincronizar tus cumpleaños, activar recordatorios y mejorar la experiencia.
      </p>
      <div class="tm_hero_chips">
        <span class="tm_chip"><i class="fas fa-ban"></i> 0 Venta de Datos</span>
        <span class="tm_chip"><i class="fas fa-lock"></i> 100% Cifrado</span>
        <span class="tm_chip"><i class="fas fa-bell"></i> Avisos Locales</span>
      </div>
      <div class="tm_last_upd">
        <i class="fas fa-calendar-check"></i>
        Última actualización: ${t()} · Versión v10
      </div>
    </div>
  </section>

  <!-- ══ ÍNDICE RÁPIDO ══ -->
  <div class="tm_index_band">
    ${r.map((e,t)=>`
      <a href="#tm_sec_${t}" class="tm_index_item">
        <i class="fas ${e.ico}" style="color:${e.color}"></i>
        <span>${e.tit}</span>
      </a>`).join(``)}
  </div>

  <!-- ══ SECCIONES ══ -->
  <section class="ac_sec tm_secciones">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-shield-halved"></i> Protección</div>
      <h2 class="ac_sec_tit">Nuestros Compromisos de <span class="ac_grad">Privacidad</span></h2>
      <p class="ac_sec_sub">Tus fechas y notas se guardan con transparencia y control absoluto.</p>
    </div>
    <div class="tm_secs_grid">
      ${r.map((e,t)=>`
        <div class="tm_sec_card wi_fadeUp" id="tm_sec_${t}">
          <div class="tm_sec_header">
            <div class="tm_sec_ico" style="--tc:${e.color}"><i class="fas ${e.ico}"></i></div>
            <div>
              <span class="tm_sec_num" style="color:${e.color}">${e.num}</span>
              <h2 class="tm_sec_tit">${e.tit}</h2>
            </div>
          </div>
          <div class="tm_sec_body">${e.body}</div>
        </div>`).join(``)}
    </div>
  </section>

</div></main>
`,a=[],o=(e,t,n)=>{let r=e=>{if(!t){n.call(e.currentTarget,e);return}let r=e.target.closest(t);r&&n.call(r,e)};document.addEventListener(e,r),a.push({type:e,wrapper:r})},s=()=>{a.forEach(({type:e,wrapper:t})=>{document.removeEventListener(e,t)}),a.length=0},c=null,l=()=>{c=new IntersectionObserver(e=>e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`visible`)}),{threshold:.1}),document.querySelectorAll(`.wi_fadeUp`).forEach(e=>{c.observe(e)}),o(`click`,`.tm_nav`,function(e){e.preventDefault(),n(()=>import(`./index-BmuCDrV3.js`).then(e=>e.i).then(e=>e.rutas.navigate(this.getAttribute(`href`))),[])}),o(`click`,`.tm_index_item`,function(e){e.preventDefault();let t=this.getAttribute(`href`),n=t?document.querySelector(t):null;n&&window.scrollTo({top:n.getBoundingClientRect().top+window.scrollY-90,behavior:`smooth`})}),console.log(`🔒 ${e} Privacidad cargada`),window.__WIREADY__=!0},u=()=>{c?.disconnect?.(),c=null,s()};export{u as cleanup,l as init,i as render};