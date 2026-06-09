import{n as e,s as t,t as n}from"./wii-DZzdzbZC.js";import{E as r,b as i,o as a,s as o}from"./widev-DCNhLI3Q.js";import{h as s,l as c,p as l,r as u}from"./firebase-_L-ceeDf.js";import{n as d}from"./firebase--f4B31o7.js";var f=()=>i(`wiSmile`),p=`am_users`,m=`am_activos`,h=`am_devices`,g=`am_blog`,_=`am_chat`,v=`am_plan_free`,y=`am_plan_pro`,b=`am_plan_vip`,x=`am_rol_usuario`,S=`am_rol_editor`,C=`am_rol_gestor`,w=`am_rol_admin`,T=(e,t)=>{let n=document.getElementById(e);n&&(n.textContent=t)},E=(e,t,n)=>{let r=document.getElementById(e);r&&r.style.setProperty(t,n)},D=()=>{let r=f();return!r||r.rol!==`admin`?`<div class="am_page"><div class="am_empty"><i class="fas fa-ban"></i> Acceso denegado.</div></div>`:`
  <div class="am_page">

    <!-- ══ HERO ══ -->
    <div class="am_hero">
      <div class="am_hero_left">
        <div class="am_hero_icon"><i class="fas fa-user-shield"></i></div>
        <div class="am_hero_txt">
          <div class="am_badge"><i class="fas fa-shield-halved"></i> Admin Master</div>
          <h1 class="am_hero_title">Centro de Control</h1>
          <p class="am_hero_sub">${o()}, <strong>${r.nombre||r.usuario||`Admin`}</strong> · ${n} v10 · Desde ${t}</p>
        </div>
      </div>
      <div class="am_hero_right">
        <div class="am_hero_meta">
          <span class="am_hero_tag"><i class="fas fa-code-branch"></i> v10</span>
          <span class="am_hero_tag"><i class="fas fa-user-pen"></i> ${e}</span>
        </div>
        <button class="am_btn_sync" id="am_btn_refresh">
          <i class="fas fa-sync-alt"></i> Sincronizar
        </button>
      </div>
    </div>

    <!-- ══ KPIs ══ -->
    <div class="am_grid_6" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">

      <div class="am_kpi" style="--c:#38bdf8">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-users"></i></div>
          <span class="am_ki_label">Usuarios</span>
        </div>
        <div class="am_ki_val" id="am_n_users">—</div>
        <div class="am_ki_trend"><i class="fas fa-user-plus"></i> Registros totales</div>
      </div>

      <div class="am_kpi" style="--c:#22c55e">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-circle-check"></i></div>
          <span class="am_ki_label">Activos</span>
        </div>
        <div class="am_ki_val" id="am_n_activos">—</div>
        <div class="am_ki_trend"><i class="fas fa-toggle-on"></i> Cuentas habilitadas</div>
      </div>

      <div class="am_kpi" style="--c:#f59e0b">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-laptop"></i></div>
          <span class="am_ki_label">Equipos (Hosts)</span>
        </div>
        <div class="am_ki_val" id="am_n_devices">—</div>
        <div class="am_ki_trend"><i class="fas fa-network-wired"></i> PCs vinculadas</div>
      </div>

      <div class="am_kpi" style="--c:#8b5cf6">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-newspaper"></i></div>
          <span class="am_ki_label">Blog</span>
        </div>
        <div class="am_ki_val" id="am_n_blog">—</div>
        <div class="am_ki_trend"><i class="fas fa-pen-nib"></i> Novedades publicadas</div>
      </div>

      <div class="am_kpi" style="--c:#06b6d4">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-comments"></i></div>
          <span class="am_ki_label">Chat</span>
        </div>
        <div class="am_ki_val" id="am_n_chat">—</div>
        <div class="am_ki_trend"><i class="fas fa-message"></i> Canal de Soporte</div>
      </div>

    </div>

    <!-- ══ ESTADO DE LA PLATAFORMA ══ -->
    <div class="am_sec_header">
      <i class="fas fa-database"></i>
      <h2 class="am_sec_h2">Estado de la Plataforma</h2>
    </div>

    <div class="am_status_grid">

      <div class="am_status_card">
        <div class="am_status_head">
          <i class="fas fa-layer-group"></i>
          <span>Colecciones Firestore</span>
        </div>
        <ul class="am_col_list">
          <li><span class="am_col_dot" style="background:#38bdf8"></span><code>smiles</code><em>Usuarios</em></li>
          <li><span class="am_col_dot" style="background:#22c55e"></span><code>registros</code><em>Auth index</em></li>
          <li><span class="am_col_dot" style="background:#f59e0b"></span><code>devices</code><em>Equipos vinculados</em></li>
          <li><span class="am_col_dot" style="background:#8b5cf6"></span><code>blog</code><em>Artículos y Novedades</em></li>
          <li><span class="am_col_dot" style="background:#06b6d4"></span><code>chatGrupal</code><em>Chat equipo</em></li>
          <li><span class="am_col_dot" style="background:#64748b"></span><code>wiNotas</code><em>Notas de usuario</em></li>
        </ul>
      </div>

      <div class="am_status_card">
        <div class="am_status_head">
          <i class="fas fa-crown"></i>
          <span>Distribución de Licencias</span>
        </div>
        <div class="am_plan_bar">
          <div class="am_plan_row">
            <span class="am_plan_lbl">Free</span>
            <div class="am_plan_track">
              <div class="am_plan_fill" id="am_bar_free" style="--w:0%;background:#64748b"></div>
            </div>
            <span class="am_plan_num" id="am_cnt_free">—</span>
          </div>
          <div class="am_plan_row">
            <span class="am_plan_lbl">Pro</span>
            <div class="am_plan_track">
              <div class="am_plan_fill" id="am_bar_pro" style="--w:0%;background:#38bdf8"></div>
            </div>
            <span class="am_plan_num" id="am_cnt_pro">—</span>
          </div>
          <div class="am_plan_row">
            <span class="am_plan_lbl">VIP</span>
            <div class="am_plan_track">
              <div class="am_plan_fill" id="am_bar_vip" style="--w:0%;background:linear-gradient(90deg,#f59e0b,#8b5cf6)"></div>
            </div>
            <span class="am_plan_num" id="am_cnt_vip">—</span>
          </div>
        </div>
        <div class="am_status_head" style="margin-top:2vh">
          <i class="fas fa-user-tag"></i>
          <span>Distribución de Roles</span>
        </div>
        <div class="am_plan_bar">
          <div class="am_plan_row">
            <span class="am_plan_lbl">Usuario</span>
            <div class="am_plan_track"><div class="am_plan_fill" id="am_bar_rol_usuario" style="--w:0%;background:#3b82f6"></div></div>
            <span class="am_plan_num" id="am_cnt_rol_usuario">—</span>
          </div>
          <div class="am_plan_row">
            <span class="am_plan_lbl">Editor</span>
            <div class="am_plan_track"><div class="am_plan_fill" id="am_bar_rol_editor" style="--w:0%;background:#10b981"></div></div>
            <span class="am_plan_num" id="am_cnt_rol_editor">—</span>
          </div>
          <div class="am_plan_row">
            <span class="am_plan_lbl">Gestor</span>
            <div class="am_plan_track"><div class="am_plan_fill" id="am_bar_rol_gestor" style="--w:0%;background:#f97316"></div></div>
            <span class="am_plan_num" id="am_cnt_rol_gestor">—</span>
          </div>
          <div class="am_plan_row">
            <span class="am_plan_lbl">Admin</span>
            <div class="am_plan_track"><div class="am_plan_fill" id="am_bar_rol_admin" style="--w:0%;background:#8b5cf6"></div></div>
            <span class="am_plan_num" id="am_cnt_rol_admin">—</span>
          </div>
        </div>
      </div>

      <div class="am_status_card">
        <div class="am_status_head">
          <i class="fas fa-info-circle"></i>
          <span>Info del Proyecto</span>
        </div>
        <ul class="am_info_list">
          <li><i class="fas fa-laptop"></i><span>App</span><strong>${n}</strong></li>
          <li><i class="fas fa-code-branch"></i><span>Versión</span><strong>v10</strong></li>
          <li><i class="fas fa-calendar-check"></i><span>Lanzamiento</span><strong>${t}</strong></li>
          <li><i class="fas fa-user-pen"></i><span>Developer</span><strong>${e}</strong></li>
          <li><i class="fas fa-fire"></i><span>Backend</span><strong>Firebase / Firestore</strong></li>
          <li><i class="fas fa-bolt"></i><span>Build</span><strong>Vite</strong></li>
          <li><i class="fas fa-palette"></i><span>UI</span><strong>Vanilla CSS + WiDev</strong></li>
        </ul>
      </div>

    </div>

    <!-- ══ ACCESO RÁPIDO ══ -->
    <div class="am_sec_header">
      <i class="fas fa-bolt"></i>
      <h2 class="am_sec_h2">Acceso Rápido</h2>
    </div>

    <div class="am_quick_grid" style="grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));">
      <a href="/smile" class="am_quick_card nv_item" data-page="smile">
        <i class="fas fa-gauge-high"></i><span>Dashboard</span>
      </a>
      <a href="/usuarios" class="am_quick_card nv_item" data-page="usuarios">
        <i class="fas fa-users"></i><span>Usuarios</span>
      </a>
      <a href="/blog" class="am_quick_card nv_item" data-page="blog">
        <i class="fas fa-newspaper"></i><span>Blog</span>
      </a>
      <a href="/notas" class="am_quick_card nv_item" data-page="notas">
        <i class="fas fa-book-open"></i><span>Notas</span>
      </a>
      <a href="/chat" class="am_quick_card nv_item" data-page="chat">
        <i class="fas fa-comments"></i><span>Chat</span>
      </a>
      <a href="/perfil" class="am_quick_card nv_item" data-page="perfil">
        <i class="fas fa-user-gear"></i><span>Perfil</span>
      </a>
    </div>

  </div>`},O=[],k=(e,t,n)=>{let r=e=>{let r=e.target.closest(t);r&&n.call(r,e)};document.addEventListener(e,r),O.push({type:e,wrapper:r})},A=async()=>{let e=f();!e||e.rol!==`admin`||(M(),P(),k(`click`,`#am_btn_refresh`,function(){let e=this.querySelector(`i`);e&&e.classList.add(`fa-spin`),P(!0).finally(()=>{setTimeout(()=>{e&&e.classList.remove(`fa-spin`)},600)})}))},j=()=>{O.forEach(({type:e,wrapper:t})=>{document.removeEventListener(e,t)}),O=[]};function M(){T(`am_n_users`,i(p)??`—`),T(`am_n_activos`,i(m)??`—`),T(`am_n_devices`,i(h)??`—`),T(`am_n_blog`,i(g)??`—`),T(`am_n_chat`,i(_)??`—`);let e=i(p)||0;N(`free`,v,e),N(`pro`,y,e),N(`vip`,b,e),N(`rol_usuario`,x,e),N(`rol_editor`,S,e),N(`rol_gestor`,C,e),N(`rol_admin`,w,e)}function N(e,t,n){let r=i(t);if(r===null)return;let a=n>0?Math.round(r/n*100):0;T(`am_cnt_${e}`,r),E(`am_bar_${e}`,`--w`,`${a}%`)}async function P(e=!1){try{let t=s(d,`smiles`),n=s(d,`devices`),o=s(d,`blog`),f=s(d,`chatGrupal`),D=(e,t)=>e?[t()]:[],O=[...D(e||i(p)===null,()=>u(t).then(e=>{let t=e.data().count;r(p,t,1),T(`am_n_users`,t)})),...D(e||i(m)===null,()=>u(c(t,l(`activo`,`==`,!0))).then(e=>{let t=e.data().count;r(m,t,1),T(`am_n_activos`,t)})),...D(e||i(h)===null,()=>u(n).then(e=>{let t=e.data().count;r(h,t,1),T(`am_n_devices`,t)})),...D(e||i(g)===null,()=>u(o).then(e=>{let t=e.data().count;r(g,t,1),T(`am_n_blog`,t)})),...D(e||i(_)===null,()=>u(f).then(e=>{let t=e.data().count;r(_,t,1),T(`am_n_chat`,t)}))],k=[{key:v,id:`free`,val:`free`},{key:y,id:`pro`,val:`pro`},{key:b,id:`vip`,val:`vip`}],A=[{key:x,id:`rol_usuario`,val:`usuario`},{key:S,id:`rol_editor`,val:`editor`},{key:C,id:`rol_gestor`,val:`gestor`},{key:w,id:`rol_admin`,val:`admin`}],j=k.filter(t=>e||i(t.key)===null).map(e=>u(c(t,l(`plan`,`==`,e.val))).then(t=>{let n=t.data().count;r(e.key,n,1);let a=i(p)||1,o=Math.round(n/a*100);T(`am_cnt_${e.id}`,n),E(`am_bar_${e.id}`,`--w`,`${o}%`)})),M=A.filter(t=>e||i(t.key)===null).map(e=>u(c(t,l(`rol`,`==`,e.val))).then(t=>{let n=t.data().count;r(e.key,n,1);let a=i(p)||1,o=Math.round(n/a*100);T(`am_cnt_${e.id}`,n),E(`am_bar_${e.id}`,`--w`,`${o}%`)}));await Promise.allSettled([...O,...j,...M]);let N=i(p)||1;[...k,...A].forEach(e=>{let t=i(e.key);if(t!==null){let n=Math.round(t/N*100);T(`am_cnt_${e.id}`,t),E(`am_bar_${e.id}`,`--w`,`${n}%`)}}),e&&a(`Estadísticas sincronizadas ✅`,`success`)}catch(t){console.error(`[Admin] Error stats:`,t),e&&a(`Error al sincronizar`,`error`)}}export{j as cleanup,A as init,D as render};