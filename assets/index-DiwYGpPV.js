const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/admin-Sz_uoXZq.css","assets/usuarios-CSx8nriB.css","assets/verificar-mialvYKy.css","assets/blog-Pvtd5AbW.css","assets/nuevo-BJdQZpYp.css","assets/post-CaVCZ_Tu.css","assets/chat-CmJWkqWy.css","assets/editor-BNmJ1tAR.css","assets/registrado-DMFE_p3X.css","assets/gestor-DXymzUiX.css","assets/acerca-rEkuWwpI.css","assets/contacto-C-QNnnsD.css","assets/terminos-CEyXQAUt.css","assets/descubre-Dq_06vmy.css","assets/chatwil-R1-t4gNv.css","assets/login-YFk7wr3b.css","assets/widevpro-BK0d8wGP.css","assets/mensajes-MIv6zaMF.css","assets/musica-CcLLBUHA.css","assets/notas-Bb0X9b3n.css","assets/perfil-BZqPOASC.css","assets/smile-Cn6fn9Cw.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./wii-DZzdzbZC.js";import{H as n,L as r,M as i,P as a,V as o,b as s,o as c,s as l}from"./widev-DCNhLI3Q.js";var u=e({cleanup:()=>x,init:()=>b,render:()=>y}),d=[`Escritorio Remoto de Baja Latencia 💻`,`Conexión Directa WebRTC Peer-to-Peer ⚡`,`Encendido Local Wake-on-LAN 🔌`,`Seguridad Avanzada con PIN Cifrado 🔐`,`Transferencia de Archivos Ultra-Rápida 📁`],f=[{valor:60,label:`Transmisión de Pantalla`,sufijo:` FPS`},{valor:25,label:`Latencia Promedio de Red`,sufijo:` ms`},{valor:100,label:`Cifrado Extremo a Extremo`,sufijo:`%`}],p=[{id:`webrtc`,icon:`fa-network-wired`,color:`#00f3ff`,nombre:`Transmisión WebRTC`,desc:`Conexión directa P2P para rendimiento superior`,items:[{icon:`fa-bolt`,name:`Ultra Baja Latencia`,desc:`Tiempos de respuesta de menos de 30ms en red local.`},{icon:`fa-shield-halved`,name:`Canal Seguro`,desc:`Transmisión de video y audio encriptada con SRTP.`},{icon:`fa-signal`,name:`Bitrate Dinámico`,desc:`Se adapta al ancho de banda disponible automáticamente.`}]},{id:`rendimiento`,icon:`fa-gauge-high`,color:`#29C72E`,nombre:`60 FPS Estables`,desc:`Codificación y decodificación por hardware`,items:[{icon:`fa-microchip`,name:`Aceleración GPU`,desc:`Usa la potencia de tu tarjeta gráfica (NVIDIA, AMD, Intel).`},{icon:`fa-video`,name:`Codificadores AV1 y H.265`,desc:`Máxima calidad de imagen con el menor consumo de datos.`},{icon:`fa-battery-full`,name:`Consumo Optimizado`,desc:`Batería de larga duración en clientes móviles.`}]},{id:`wol`,icon:`fa-power-off`,color:`#FFDA34`,nombre:`Wake-on-LAN Local`,desc:`Enciende tus computadoras a distancia`,items:[{icon:`fa-wifi`,name:`Encendido Un Clic`,desc:`Manda el paquete mágico directamente desde tu celular.`},{icon:`fa-bed`,name:`Optimizado para Camarote`,desc:`Despierta tu laptop de oficina desde tu cama sin levantarte.`},{icon:`fa-check`,name:`Sin Configuración WAN`,desc:`Funciona directamente en tu subred Wi-Fi local.`}]},{id:`seguridad`,icon:`fa-lock`,color:`#7000FF`,nombre:`Seguridad Local`,desc:`Tus credenciales nunca tocan la nube`,items:[{icon:`fa-key`,name:`PIN de 6 dígitos`,desc:`Validación local mediante desafío/respuesta criptográfico.`},{icon:`fa-cloud-slash`,name:`Privacidad Absoluta`,desc:`Firebase solo actúa como señalador; no almacena tus datos.`},{icon:`fa-user-check`,name:`Dispositivos Autorizados`,desc:`Lista blanca de equipos permitidos para conexión.`}]},{id:`multiplataforma`,icon:`fa-laptop-code`,color:`#0EBEFF`,nombre:`Multiplataforma`,desc:`Controla desde cualquier dispositivo`,items:[{icon:`fa-windows`,name:`PC Client (Rust)`,desc:`Servidor ultraligero y rápido para Windows con Tauri v2.`},{icon:`fa-android`,name:`Android Client`,desc:`Visualizador nativo con controles táctiles avanzados.`},{icon:`fa-globe`,name:`Consola Web SPA`,desc:`Acceso y visualización directa desde cualquier navegador.`}]},{id:`utilidades`,icon:`fa-folder-open`,color:`#FF8F00`,nombre:`Herramientas Extra`,desc:`Funciones para el trabajo diario`,items:[{icon:`fa-file-import`,name:`Transferencia de Archivos`,desc:`Envía y recibe carpetas a velocidad de red local.`},{icon:`fa-copy`,name:`Portapapeles Compartido`,desc:`Copia en tu PC y pega en tu celular o viceversa.`},{icon:`fa-keyboard`,name:`Teclado Virtual`,desc:`Diseños optimizados para móviles y atajos de sistema.`}]}],m=[{icon:`fa-circle-check`,titulo:`100% Configuración Simple`,desc:`Sin configuraciones complejas de routers ni redirección de puertos. Regístrate, vincula tu PC en dos pasos y empieza a controlar.`},{icon:`fa-shield-halved`,titulo:`Conexión Segura P2P`,desc:`Tus conexiones son directas de dispositivo a dispositivo. El video y los comandos de control viajan cifrados de extremo a extremo.`},{icon:`fa-bolt`,titulo:`Máxima Velocidad`,desc:`Programado sobre Rust nativo en el host y Kotlin en el celular para un rendimiento excepcional y tiempos de respuesta inmediatos.`}],h=e=>`
  <div class="ini_stat">
    <div class="ini_stat_n" data-target="${e.valor}" data-sufijo="${e.sufijo}">0</div>
    <div class="ini_stat_l">${e.label}</div>
  </div>`,g=e=>`
  <div class="ini_cat_card" style="--cc:${e.color}">
    <div class="ini_cat_bar"></div>
    <div class="ini_cat_top">
      <div class="ini_cat_ico"><i class="fas ${e.icon}"></i></div>
      <div class="ini_cat_info"><h3>${e.nombre}</h3><p>${e.desc}</p></div>
    </div>
    <ul class="ini_cat_tools">
      ${e.items.map(e=>`
        <li><div class="ini_tool_a">
          <i class="fas ${e.icon}"></i>
          <div><strong>${e.name}</strong><span>${e.desc}</span></div>
          <i class="fas fa-check ini_ext" style="color:var(--success)"></i>
        </div></li>`).join(``)}
    </ul>
  </div>`,_=(e,t)=>`
  <div class="ini_about_card" style="--d:${t*.15}s">
    <div class="ini_card_ico"><i class="fas ${e.icon}"></i></div>
    <h3>${e.titulo}</h3>
    <p>${e.desc}</p>
  </div>`,v,y=()=>`
<div class="ini_wrap">

  <!-- ===== HERO ===== -->
  <section class="ini_hero">
    <div class="ini_hero_content">

      <div class="ini_saludo" style="--d:0s">
        <span>${l()}</span><span class="ini_wave">👋</span>
      </div>

      <h1 class="ini_titulo" style="--d:.18s">
        Controla tus Equipos en Tiempo Real con <span class="ini_grad">${t}</span>
      </h1>

      <div class="ini_roles" style="--d:.36s">
        ${d.map((e,t)=>`<span class="ini_role${t===0?` active`:``}">${e}</span>`).join(``)}
      </div>

      <p class="ini_sub" style="--d:.54s">
        La plataforma premium de acceso remoto de código abierto. Administra, enciende y controla tu PC de forma segura desde tu móvil o navegador con tecnología WebRTC P2P de ultra baja latencia.
      </p>

      <div class="ini_stats" id="in_stats" style="--d:.72s">
        ${f.map(h).join(``)}
      </div>

      <div class="ini_btns" style="--d:.9s">
        <a href="/login" class="ini_btn_p"><i class="fas fa-arrow-right-to-bracket"></i> Empezar Gratis</a>
      </div>

    </div>

    <div class="ini_hero_visual">
      <div class="ini_nw_preview" style="--d:.3s; padding: 2.5vh; max-width: 340px; height: auto;">
        <div class="ini_nw_head" style="height: auto; padding: 1vh 0; display: flex; justify-content: space-between; border-bottom: 2px solid var(--brd); background: transparent;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i class="fas fa-desktop" style="color: var(--mco); font-size: 1.4rem;"></i>
            <span style="font-weight: 800; font-size: 0.95rem; color: var(--tx);">${t} Panel</span>
          </div>
          <div style="font-size: 0.65rem; font-weight: 700; background: var(--bg5); color: var(--mco); padding: 2px 6px; border-radius: 20px;">
            v10
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 2vh; padding: 2.5vh 0 1vh;">
          <div class="txc" style="text-align:left;">
            <span style="font-size: 0.7rem; font-weight: 600; color: var(--tx3); text-transform: uppercase; letter-spacing: 0.5px;">PC Seleccionada</span>
            <h3 id="widget_nombre" style="font-size: 1.2rem; font-weight: 800; color: var(--mco); margin-top: 0.5vh;"><i class="fas fa-laptop"></i> Laptop Oficina</h3>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; text-align: center;">
            <div style="background: var(--bg1); padding: 6px; border-radius: 8px; border: 1px solid var(--brd);">
              <div id="wd_dias" style="font-size: 1rem; font-weight: 800; color: var(--tx);">60</div>
              <div style="font-size: 0.5rem; color: var(--tx3); font-weight: 600;">FPS</div>
            </div>
            <div style="background: var(--bg1); padding: 6px; border-radius: 8px; border: 1px solid var(--brd);">
              <div id="wd_horas" style="font-size: 1rem; font-weight: 800; color: var(--tx);">14</div>
              <div style="font-size: 0.5rem; color: var(--tx3); font-weight: 600;">MS PING</div>
            </div>
            <div style="background: var(--bg1); padding: 6px; border-radius: 8px; border: 1px solid var(--brd);">
              <div id="wd_mins" style="font-size: 1rem; font-weight: 800; color: var(--tx);">P2P</div>
              <div style="font-size: 0.5rem; color: var(--tx3); font-weight: 600;">RED</div>
            </div>
            <div style="background: var(--bg1); padding: 6px; border-radius: 8px; border: 1px solid var(--brd);">
              <div id="wd_segs" style="font-size: 1rem; font-weight: 800; color: var(--tx);">4.5</div>
              <div style="font-size: 0.5rem; color: var(--tx3); font-weight: 600;">MBPS</div>
            </div>
          </div>
          
          <div style="border-top: 1px solid var(--brd); padding-top: 2vh; display: flex; flex-direction: column; gap: 1.5vh;">
            <div style="display: flex; flex-direction: column; gap: 0.4vh;">
              <label style="font-size: 0.7rem; font-weight: 700; color: var(--tx2); text-align: left;">Probar Simulador de Conexión:</label>
              <input type="text" id="widget_input_nombre" value="Laptop Oficina" placeholder="Nombre de tu PC" style="font-size: 0.8rem; padding: 0.8vh 1.2vh; border-radius: 6px; border: 1px solid var(--brd); background: var(--inp); color: var(--tx);" />
            </div>
            <a href="/login" class="ini_btn_p" style="padding: 1vh; font-size: 0.8rem; text-align: center; border-radius: 6px;"><i class="fas fa-play"></i> Iniciar Conexión</a>
          </div>
        </div>
      </div>
      <div class="ini_ftech ini_ft1" style="--d:.5s"  ${o(`WebRTC`)}><i class="fas fa-network-wired"></i></div>
      <div class="ini_ftech ini_ft2" style="--d:.65s" ${o(`Tauri Rust`)}><i class="fas fa-bolt"></i></div>
      <div class="ini_ftech ini_ft3" style="--d:.8s"  ${o(`Ultra Rápido`)}><i class="fas fa-gauge-high"></i></div>
      <div class="ini_ftech ini_ft4" style="--d:.95s" ${o(`Seguro`)}><i class="fas fa-shield-halved"></i></div>
    </div>
  </section>

  <!-- ===== FUNCIONALIDADES ===== -->
  <section class="ini_cats_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">Los <span class="ini_grad">6 Pilares</span> de ${t}</h2>
      <div class="ini_sec_line"></div>
      <p class="ini_sec_desc">Arquitectura optimizada para control remoto en tiempo real de nivel empresarial</p>
    </div>
    <div class="ini_cats_grid">${p.map(g).join(``)}</div>
  </section>

  <!-- ===== ¿POR QUÉ? ===== -->
  <section class="ini_about_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">¿Qué beneficios tienes al usar <span class="ini_grad">${t}?</span></h2>
      <div class="ini_sec_line"></div>
    </div>
    <div class="ini_about_grid">${m.map(_).join(``)}</div>
  </section>

  <!-- ===== CTA ===== -->
  <section class="ini_cta_sec">
    <div class="ini_cta_wrap">
      <i class="fas fa-desktop ini_cta_ico" style="color: var(--mco);"></i>
      <h2>Comienza a controlar tus equipos de forma remota hoy</h2>
      <p>Regístrate en segundos y descubre la fluidez de transmisión a 60 FPS sin configuraciones complejas.</p>
      <div class="ini_cta_chips">
        <a href="/login" class="ini_btn_p"><i class="fas fa-arrow-right-to-bracket"></i> Empezar Gratis</a>
      </div>
    </div>
  </section>

</div>`,b=()=>{let e=0,r=document.querySelectorAll(`.ini_role`),i=setInterval(()=>{r.forEach(e=>e.classList.remove(`active`)),r.length>0&&(e=(e+1)%r.length,r[e]?.classList.add(`active`))},2800);n(`#in_stats`,()=>{document.querySelectorAll(`.ini_stat_n`).forEach(e=>{let t=+e.dataset.target,n=e.dataset.sufijo||``,r=0,i=setInterval(()=>{r+=t/50,r>=t?(e.textContent=t+n,clearInterval(i)):e.textContent=Math.floor(r)},28)})}),n(`.ini_cat_card`,null,{anim:`wi_fadeUp`,stagger:80}),n(`.ini_about_card`,null,{anim:`wi_fadeUp`,stagger:140});let a=document.getElementById(`widget_input_nombre`),o=document.getElementById(`widget_nombre`);a&&o&&a.addEventListener(`input`,e=>{o.innerHTML=`<i class="fas fa-laptop"></i> ${e.target.value.trim()||`Laptop Oficina`}`}),v=setInterval(()=>{let e=document.getElementById(`wd_horas`),t=document.getElementById(`wd_segs`);e&&(e.textContent=Math.floor(12+Math.random()*8)),t&&(t.textContent=(4+Math.random()*1.5).toFixed(1))},1500),window._inicio_timers=[i,v],console.log(`🚀 ${t} v10 · Welcome Page OK`)},x=()=>{window._inicio_timers&&window._inicio_timers.forEach(e=>clearInterval(e)),clearInterval(v)},S=(function(){let e=typeof document<`u`&&document.createElement(`link`).relList;return e&&e.supports&&e.supports(`modulepreload`)?`modulepreload`:`preload`})(),C=function(e){return`/wiidesk/`+e},w={},T=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=C(t,n),t in w)return;w[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:S,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},E=e({NAV:()=>k,RUTAS:()=>A,rolPage:()=>D,rutas:()=>N}),D={usuario:`/smile`,editor:`/editor`,gestor:`/gestor`,admin:`/admin`},O=[{href:`/acerca`,ico:`fa-circle-info`,txt:`Acerca`}],k={todos:{nvleft:[{href:`/`,ico:`fa-house`,txt:`Bienvenido`},...O],nvright:[{href:`/descubre`,ico:`fa-compass`,txt:`Descubre`},{isBtn:!0,cls:`bt_auth registrar`,ico:`fa-user-plus`,txt:`Registrar`},{isBtn:!0,cls:`bt_auth login`,ico:`fa-sign-in-alt`,txt:`Login`}]},usuario:{nvleft:[{href:`/smile`,ico:`fa-house`,txt:`Dashboard`},{href:`/pc2pc`,ico:`fa-laptop`,txt:`PC a PC`},{href:`/pc2movil`,ico:`fa-mobile-alt`,txt:`PC a Móvil`},{href:`/pc2web`,ico:`fa-globe`,txt:`PC a Web`},{href:`/movil2pc`,ico:`fa-mobile-alt`,txt:`Móvil a PC`},...O],nvright:[{href:`/notas`,ico:`fa-book-open`,txt:`Notas`},{isPerfil:!0},{isSalir:!0}]},editor:{nvleft:[{href:`/editor`,ico:`fa-house`,txt:`Dashboard`},{href:`/blog`,ico:`fa-newspaper`,txt:`Blog`},...O],nvright:[{href:`/nuevo`,ico:`fa-plus-circle`,txt:`Crear Post`},{href:`/chat`,ico:`fa-comments`,txt:`Chat Grupal`},{isPerfil:!0},{isSalir:!0}]},gestor:{nvleft:[{href:`/gestor`,ico:`fa-house`,txt:`Dashboard`},...O],nvright:[{href:`/chat`,ico:`fa-comments`,txt:`Chat Grupal`},{isPerfil:!0},{isSalir:!0}]},admin:{nvleft:[{href:`/admin`,ico:`fa-globe`,txt:`Plataforma`},{href:`/usuarios`,ico:`fa-users`,txt:`Usuarios`},...O],nvright:[{href:`/notas`,ico:`fa-book-open`,txt:`Notas`},{href:`/chat`,ico:`fa-comments`,txt:`Chat Grupal`},{isPerfil:!0},{isSalir:!0}]},verificar:{nvleft:[],nvright:[]}},A=[{path:`/inicio`,area:`todos/`},{path:`/login`,area:`todos/`},{path:`/loginpc`,area:`todos/`},{path:`/registrado`,area:`editor/`},{path:`/blog`,area:`editor/blog/`},{path:`/post`,area:`editor/blog/`},{path:`/chatwil`,area:`todos/chatwil/`},{path:`/acerca`,area:`todos/acerca/`},{path:`/descubre`,area:`todos/acerca/`},{path:`/terminos`,area:`todos/acerca/`},{path:`/cookies`,area:`todos/acerca/`},{path:`/privacidad`,area:`todos/acerca/`},{path:`/feedback`,area:`todos/acerca/`},{path:`/contacto`,area:`todos/acerca/`},{path:`/smile`,area:`usuarios/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/notas`,area:`usuarios/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/perfil`,area:`usuarios/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/mensajes`,area:`usuarios/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/pc2pc`,area:`usuarios/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/pc2movil`,area:`usuarios/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/pc2web`,area:`usuarios/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/movil2pc`,area:`usuarios/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/chat`,area:`editor/`,roles:[`editor`,`gestor`,`admin`]},{path:`/editor`,area:`editor/`,roles:[`editor`,`gestor`,`admin`]},{path:`/nuevo`,area:`editor/blog/`,roles:[`editor`,`gestor`,`admin`]},{path:`/gestor`,area:`gestor/`,roles:[`gestor`,`admin`]},{path:`/admin`,area:`admin/`,roles:[`admin`]},{path:`/usuarios`,area:`admin/`,roles:[`admin`]},{path:`/verificar`,area:`admin/verificar/`,roles:[`admin`]}],j=Object.assign({"./admin/admin.js":()=>T(()=>import(`./admin-01cAbeAP.js`),__vite__mapDeps([0])),"./admin/usuarios.js":()=>T(()=>import(`./usuarios-BOPU7wJT.js`),__vite__mapDeps([1])),"./admin/verificar/verificar.js":()=>T(()=>import(`./verificar-B7RMKj7D.js`),__vite__mapDeps([2])),"./editor/blog/blog.js":()=>T(()=>import(`./blog-D51mnocE.js`),__vite__mapDeps([3])),"./editor/blog/nuevo.js":()=>T(()=>import(`./nuevo-B-hDLBYF.js`),__vite__mapDeps([4])),"./editor/blog/post.js":()=>T(()=>import(`./post-C030h2p-.js`),__vite__mapDeps([5])),"./editor/blog/woo.js":()=>T(()=>import(`./woo-DNkc3KUT.js`),[]),"./editor/chat.js":()=>T(()=>import(`./chat-BL3dj67F.js`),__vite__mapDeps([6])),"./editor/editor.js":()=>T(()=>import(`./editor-t6ZF7Zl4.js`),__vite__mapDeps([7])),"./editor/registrado.js":()=>T(()=>import(`./registrado-BFjmBnxt.js`),__vite__mapDeps([8])),"./gestor/gestor.js":()=>T(()=>import(`./gestor-q6U7wmnR.js`),__vite__mapDeps([9])),"./todos/404.js":()=>T(()=>import(`./404-Bm2qwSJK.js`),[]),"./todos/acerca/acerca.js":()=>T(()=>import(`./acerca-kQRyR1NI.js`),__vite__mapDeps([10])),"./todos/acerca/contacto.js":()=>T(()=>import(`./contacto-C_jtaN-x.js`),__vite__mapDeps([11,10])),"./todos/acerca/cookies.js":()=>T(()=>import(`./cookies-CKBGLLyy.js`),__vite__mapDeps([10,12])),"./todos/acerca/descubre.js":()=>T(()=>import(`./descubre-mE_VqzkR.js`),__vite__mapDeps([13])),"./todos/acerca/feedback.js":()=>T(()=>import(`./feedback-CaYX5vSU.js`),__vite__mapDeps([10,12])),"./todos/acerca/privacidad.js":()=>T(()=>import(`./privacidad-BVt2Mt9J.js`),__vite__mapDeps([10,12])),"./todos/acerca/terminos.js":()=>T(()=>import(`./terminos-kFsJydfZ.js`),__vite__mapDeps([10,12])),"./todos/chatwil/chatwil.js":()=>T(()=>import(`./chatwil-CYrxvQKc.js`),__vite__mapDeps([14])),"./todos/chatwil/config.js":()=>T(()=>import(`./config-CpJRQ2zz.js`),[]),"./todos/chatwil/contexto.js":()=>T(()=>import(`./contexto-BRMMxnTe.js`),[]),"./todos/chatwil/datawii.js":()=>T(()=>import(`./datawii-BvRk9kiK.js`),[]),"./todos/chatwil/waa.js":()=>T(()=>import(`./waa-ClgJHSI_.js`),[]),"./todos/login.js":()=>T(()=>import(`./login-Djft03pf.js`),__vite__mapDeps([15])),"./todos/loginpc.js":()=>T(()=>import(`./loginpc-BvRk9kiK.js`),[]),"./todos/widevpro.js":()=>T(()=>import(`./widevpro-Bqn7cp5R.js`),__vite__mapDeps([16])),"./usuarios/mensajes.js":()=>T(()=>import(`./mensajes-Dct25Uem.js`),__vite__mapDeps([17])),"./usuarios/movil2pc.js":()=>T(()=>import(`./movil2pc-CWBEGkq1.js`),[]),"./usuarios/musica.js":()=>T(()=>import(`./musica-MyJUwE4U.js`),__vite__mapDeps([18])),"./usuarios/notas.js":()=>T(()=>import(`./notas-CzSZla0x.js`),__vite__mapDeps([19])),"./usuarios/pc2movil.js":()=>T(()=>import(`./pc2movil-Jc_4jcgR.js`),[]),"./usuarios/pc2pc.js":()=>T(()=>import(`./pc2pc-DAFkg5W-.js`),[]),"./usuarios/pc2web.js":()=>T(()=>import(`./pc2web-CiR1nq44.js`),[]),"./usuarios/perfil.js":()=>T(()=>import(`./perfil-Cun4xV9J.js`),__vite__mapDeps([20])),"./usuarios/smile.js":()=>T(()=>import(`./smile-m2EFVdjQ.js`),__vite__mapDeps([21]))}),M=(e,t)=>j[`./${e}${t}.js`],N=new class{constructor(){this.rutas={},this.cache={"/inicio":u},this.modActual=null,this.cargand=!1,this.HOME=`inicio`,this.main=`#wimain`,this.pathActual=null,this.isFirstLoad=!0}register(e,t){this.rutas[e]=t}inicio(){return Promise.resolve(u)}registerAll(e){let t={},n={};A.forEach(({path:e,area:r,roles:i=null,mod:a})=>{if(e===`/inicio`){t[e]=()=>this.inicio();return}let o=a??e.split(`/`).pop(),s=M(r,o);if(!s){console.warn(`[ruta] no encontrado: ${r}${o}.js`);return}i===null?t[e]=s:(n[e]??=[]).push({roles:i,imp:s})});let r=()=>Promise.resolve({render:()=>``,init:()=>setTimeout(()=>this.navigate(`/login`),0)});new Set([...Object.keys(t),...Object.keys(n)]).forEach(i=>{let a=t[i],o=n[i]||[],s=()=>{let t=e?.()||null;return o.find(e=>e.roles.includes(t))};if(!o.length)return this.register(i,a);if(!a)return this.register(i,()=>{let e=s();return e?e.imp():r()});this.register(i,()=>{let e=s();return e?e.imp():a()})})}async prefetch(e){let t=a.limpiar(e)===`/`?`/${this.HOME}`:a.limpiar(e);if(!(this.cache[t]||!this.rutas[t]))try{this.cache[t]=await this.rutas[t](),console.log(`⚡ Listo ${t.replace(`/`,``)}`)}catch{console.warn(`[ruta] prefetch falló:`,t)}}async navigate(e,t=!0){if(this.cargand)return;this.cargand=!0;let n=a.limpiar(e)===`/`?`/${this.HOME}`:a.limpiar(e);if([`/admin`,`/usuarios`,`/paginas`].includes(n)){let{getls:e}=await T(async()=>{let{getls:e}=await import(`./widev-DCNhLI3Q.js`).then(e=>e.W);return{getls:e}},[]),t=e(`wiSmile`),n=e=>(this.cargand=!1,this.navigate(e,!0)),r=!t||t.rol!==`admin`?`/`:t.estado===`activo`?sessionStorage.getItem(`vault_unlocked`)?null:`/verificar`:`/registrado`;if(r)return n(r)}try{this.modActual?.cleanup?.();let e=this.rutas[n]?null:n.slice(1),r=e?M(`editor/blog/`,`post`):this.rutas[n]??M(`todos/`,`404`),o=this.cache[n]??await r();e||(this.cache[n]=o);let[s]=await Promise.all([o.render(e)]);document.body.classList.remove(`is-public-profile`),this.marcarNav(n),window.dispatchEvent(new CustomEvent(`winavigate`,{detail:{norm:n}}));let c=document.querySelector(this.main);this.isFirstLoad&&c&&c.children.length>0&&!window.__WIREADY__&&n===`/${this.HOME}`?this.isFirstLoad=!1:await i(this.main,s),this.isFirstLoad=!1,window.scrollTo(0,0),o.init?.(e),t&&a.poner(n===`/${this.HOME}`?`/`:n,document.title),this.pathActual=n,this.modActual=o}catch(e){if(e instanceof TypeError&&e.message.includes(`Failed to fetch`))return location.reload();c(`Error en la ruta`),console.error(`[ruta] navigate:`,e)}finally{this.cargand=!1}}marcarNav(e){let t=e.slice(1)||this.HOME;document.querySelectorAll(`.nv_item`).forEach(e=>e.classList.remove(`active`)),document.querySelectorAll(`.nv_item[data-page="${t}"]`).forEach(e=>e.classList.add(`active`))}init(){this.marcarNav(a.actual===`/`?`/${this.HOME}`:a.limpiar(a.actual)),document.addEventListener(`click`,e=>{let t=e.target.closest(`.nv_item`);if(t){e.preventDefault();let n=t.dataset.page;this.navigate(n===this.HOME?`/`:`/${n}`)}});let e=e=>{let t=e.target.closest(`.nv_item[data-page]`);if(t){let e=t.dataset.page;this.prefetch(e===this.HOME?`/`:`/${e}`)}};document.addEventListener(`mouseover`,e,{passive:!0}),document.addEventListener(`touchstart`,e,{passive:!0}),window.addEventListener(`popstate`,e=>{let t=e.state?.ruta||a.actual;(a.limpiar(t)===`/`?`/${this.HOME}`:a.limpiar(t))!==this.pathActual&&this.navigate(t,!1)}),this.navigate(a.actual,!1)}};N.registerAll(()=>s(`wiSmile`)?.rol),N.register(`/`,(e=!1)=>{let t=s(`wiSmile`);return t&&!e&&setTimeout(()=>N.navigate({usuario:`/smile`,editor:`/nuevo`,gestor:`/gestor`,admin:`/admin`}[t.rol]||`/smile`),0),N.inicio()}),N.init(),T(()=>import(`./header-CvGiE4yA.js`),[]),T(()=>import(`./footer-C_L2S22F.js`),[]),r({css:[`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap`,`https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap`,`https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap`]});export{T as a,E as i,D as n,N as r,k as t};