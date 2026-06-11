import{t as e}from"./wii-DZzdzbZC.js";import{O as t,b as n}from"./widev-V_5yEuMT.js";import{r}from"./main-Br4xgtk5.js";var i=()=>n(`wiSmile`)||null,a=()=>{let e=i();if(!e)return location.replace(`/`),``;let t=e.nombre||e.usuario||`Gestor`,r=n(`wi_editor_posts_${e.usuario.trim().toLowerCase()}`)||[],a=e.rol===`admin`?`Administrador`:`Gestor de Contenido`;return`
    <div class="ges_container" data-showi="80">
      
      <!-- Banner de Bienvenida Amable -->
      <header class="ges_hero">
        <div class="ges_hero_glow"></div>
        <div class="ges_hero_content">
          <div class="ges_avatar_wrap">
            <div class="ges_avatar">${(t[0]||`?`).toUpperCase()}</div>
          </div>
          <div class="ges_welcome">
            <h1>¡Qué bueno verte de nuevo, <strong>${t}</strong>! 👋</h1>
            <p>Bienvenido a tu panel de control. Desde aquí puedes supervisar el contenido de la plataforma de forma rápida.</p>
            <span class="ges_badge_role"><i class="fas fa-user-shield"></i> ${a}</span>
          </div>
        </div>
      </header>

      <!-- Panel de Estadísticas Rápidas -->
      <section class="ges_stats_grid">
        <div class="ges_stat_card">
          <div class="ges_stat_icon blog"><i class="fas fa-feather"></i></div>
          <div class="ges_stat_info">
            <span class="ges_stat_val" id="st_blog">${r.length}</span>
            <span class="ges_stat_lbl">Tus Historias Redactadas</span>
          </div>
        </div>
      </section>

      <!-- Navegación de Gestión -->
      <div>
        <h2 class="ges_nav_title"><i class="fas fa-compass"></i> Accesos Rápidos de Gestión</h2>
        <div class="ges_quick_nav" data-showi="60">
          ${[{page:`editor`,ico:`fa-feather`,col:`#FFDA34`,tit:`Panel de Redactor`,sub:`Escribir y publicar artículos en el blog de Wiidesk`},{page:`chat`,ico:`fa-comments`,col:`#7000FF`,tit:`Chat del Equipo`,sub:`Coordinar con otros editores y administradores`},{page:`smile`,ico:`fa-laptop`,col:`#0EBEFF`,tit:`Consola de Equipos`,sub:`Ver y administrar computadoras registradas`}].map(e=>`
            <a href="/${e.page}" class="ges_nav_card nv_item" data-page="${e.page}">
              <div class="ges_nav_left">
                <div class="ges_nav_icon" style="background: ${e.col}"><i class="fas ${e.ico}"></i></div>
                <div class="ges_nav_details">
                  <strong>${e.tit}</strong>
                  <span>${e.sub}</span>
                </div>
              </div>
              <i class="fas fa-arrow-right"></i>
            </a>
          `).join(``)}
        </div>
      </div>

    </div>
  `},o=()=>{let a=i();if(!a)return setTimeout(()=>r.navigate(`/login`),100);let o=n(`wi_editor_posts_${a.usuario.trim().toLowerCase()}`)||[],s=document.getElementById(`st_blog`);s&&(s.textContent=o.length),t(`[data-showi]`),console.log(`🛡️ ${e} Dashboard del Gestor cargado.`),window.__WIREADY__=!0},s=()=>{};export{s as cleanup,o as init,a as render};