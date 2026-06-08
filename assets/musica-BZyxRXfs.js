import{l as e}from"./wii-DZzdzbZC.js";import{E as t,O as n,R as r,b as i,i as a}from"./widev-DCNhLI3Q.js";import{r as o}from"./index-DBlU--2U.js";import{a as s,f as c,g as l,h as u,l as d,n as f,p,s as m,u as h,y as g}from"./firebase-HsegvofM.js";import{n as _}from"./firebase-Bl23Hk2a.js";var v=()=>i(`wiSmile`)||null,y=async e=>{if(!e)return[];try{let t=await s(d(u(_,`wimusicaLikes`),p(`email`,`==`,e.trim())));return t.empty?[]:t.docs.map(e=>e.data().trackId)}catch(e){return console.warn(`Error loading favorites from Firestore:`,e),[]}},b=async(e,t)=>{let n=`${e.usuario.trim().toLowerCase()}_${t.id.trim().toLowerCase()}`,r={id:n,usuario:e.usuario.trim().toLowerCase(),email:e.email,userId:e.uid,trackId:t.id,artista:t.idioma||t.cantante||`CumpleWii`,poster:t.poster||``,creado:g(),actualizado:g()};await h(l(_,`wimusicaLikes`,n),r)},x=async(e,t)=>{await f(l(_,`wimusicaLikes`,`${e.usuario.trim().toLowerCase()}_${t.trim().toLowerCase()}`))},S=null,C=[],w=[],T=!1,E=`none`,D=`todas`,O=``,k=null,A=null,j=[],M=e=>{if(isNaN(e))return`0:00`;let t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?`0`:``}${n}`},N=e=>{let t=(e,t)=>!!t.pin-+!!e.pin||(t.creado?.seconds||0)-(e.creado?.seconds||0);return[...e].sort(t)},P=()=>{let e=O.toLowerCase().trim();return C.filter(t=>{let n=`${t.titulo||``} ${t.cantante||``} ${t.idioma||``}`.toLowerCase().includes(e);return D===`todas`?n:D===`favoritos`?w.includes(t.id)&&n:t.tag?.toLowerCase().trim()===D.toLowerCase().trim()&&n})},F=(e,t,n,r={})=>{e&&(e.addEventListener(t,n,r),j.push({target:e,type:t,handler:n}))},I=()=>{let e=document.getElementById(`musPls`);if(!e)return;v();let t=P(),n=Array.from(new Set(C.map(e=>e.tag).filter(Boolean))).slice(0,8),r=document.getElementById(`catSugs`);if(r&&(r.innerHTML=n.map(e=>`<button type="button" class="cat sug_cat" style="padding:0.4vh 1.2vh; font-size:var(--fz_s3);">${e}</button>`).join(``)),!t.length){e.innerHTML=`
      <div class="mus_empty">
        <i class="fas fa-headphones"></i>
        <p>No se encontraron canciones</p>
      </div>`;return}let a=i(`musActual`);e.innerHTML=t.map(e=>{let t=a===e.id,n=w.includes(e.id),r=e.poster||`https://wiidesk.web.app/smile.avif`;return`
      <div class="mpi ${t?`on`:``} ${n?`fav`:``}" data-id="${e.id}">
        <div class="mpi_cov">
          <img src="${r}" loading="lazy" alt="Carátula" onerror="this.src='/smile.avif'">
          <div class="mpi_ico">
            <i class="fas ${t&&T?`fa-pause`:`fa-play`}"></i>
          </div>
        </div>
        <div class="mpi_info">
          <b>${e.titulo||``}</b>
          <small>${e.idioma||e.cantante||`Español`} ${e.tag?`• ${e.tag.toUpperCase()}`:``}</small>
        </div>
        <div class="mpi_acts">
          <button class="ma fav_t ${n?`on`:``}" data-id="${e.id}" title="Favorito">
            <i class="fas fa-heart"></i>
          </button>
        </div>
      </div>`}).join(``)},L=e=>{if(!S||!e)return;S.src=e.url,S.load();let n=document.getElementById(`musActual`),r=document.getElementById(`musArtista`),i=document.getElementById(`musCover`),a=document.getElementById(`musFav`);n&&(n.textContent=e.titulo||``),r&&(r.textContent=e.idioma||e.cantante||`Español`);let o=e.poster||`https://wiidesk.web.app/smile.avif`;i&&(i.src=o);let s=w.includes(e.id);a&&a.classList.toggle(`active`,s),document.querySelectorAll(`.mpi`).forEach(t=>{t.classList.toggle(`on`,t.getAttribute(`data-id`)===e.id)}),t(`musActual`,e.id,168);let c=document.getElementById(`musProgressFill`);c&&(c.style.width=`0%`);let l=document.getElementById(`musCur`);l&&(l.textContent=`0:00`),document.querySelectorAll(`.mpi_ico i`).forEach(e=>{e.className=`fas fa-play`}),T&&S.play().catch(e=>console.warn(`Playback error:`,e))},R=()=>{if(!S)return;let e=i(`musActual`),t=C.find(t=>t.id===e);if(!t)if(C.length>0)t=C[0],L(t);else{a(`No hay canciones en la lista`,`warning`);return}let n=document.getElementById(`vinylDisc`),r=document.getElementById(`vinylArm`),o=document.getElementById(`musEqualizer`);S.play().then(()=>{T=!0;let e=document.querySelector(`#musPlay i`);e&&(e.className=`fas fa-pause`),n&&n.classList.add(`playing`),r&&r.classList.add(`playing`),o&&o.classList.add(`playing`);let i=document.querySelector(`.mpi[data-id="${t.id}"] .mpi_ico i`);i&&(i.className=`fas fa-pause`)}).catch(e=>{console.error(e),a(`Error al reproducir audio`,`error`)})},z=()=>{if(!S)return;S.pause(),T=!1;let e=document.querySelector(`#musPlay i`);e&&(e.className=`fas fa-play`);let t=document.getElementById(`vinylDisc`),n=document.getElementById(`vinylArm`),r=document.getElementById(`musEqualizer`);t&&t.classList.remove(`playing`),n&&n.classList.remove(`playing`),r&&r.classList.remove(`playing`),document.querySelectorAll(`.mpi_ico i`).forEach(e=>{e.className=`fas fa-play`})},B=e=>{if(!C.length)return;let t=i(`musActual`),n=C.findIndex(e=>e.id===t);n===-1&&(n=0);let r=n+e;r<0&&(r=C.length-1),r>=C.length&&(r=0),L(C[r]),R()},V=()=>{let e=document.getElementById(`musRep`);e&&(E===`none`?(E=`all`,e.classList.add(`active`),e.innerHTML=`<i class="fas fa-redo-alt"></i>`,a(`Bucle: Todos`,`success`)):E===`all`?(E=`one`,e.classList.add(`active`),e.innerHTML=`<i class="fas fa-redo"></i>`,a(`Bucle: Uno`,`success`)):(E=`none`,e.classList.remove(`active`),e.innerHTML=`<i class="fas fa-repeat"></i>`,a(`Bucle desactivado`,`success`)),t(`musRep`,E,168))},H=()=>{let t=document.getElementById(`fmMusica`);t&&t.reset(),k=null;let n=document.getElementById(`fiId`);n&&(n.value=``);let r=document.getElementById(`fiNom`);r&&(r.value=``);let i=document.getElementById(`fiUrl`);i&&(i.value=``);let a=document.getElementById(`fmTitle`);a&&(a.innerHTML=`<i class="fas fa-plus-circle"></i> Compartir Canción`);let o=document.querySelector(`#fmSave span`),s=document.querySelector(`#fmSave i`);o&&(o.textContent=`Guardar`),s&&(s.className=`fas fa-save`);let c=document.getElementById(`fmDelete`),l=document.getElementById(`fmNew`);c&&(c.style.display=`none`),l&&(l.style.display=`none`);let u=document.getElementById(`musFormBadge`);u&&(u.innerHTML=`<span class="badge_nuevo"><i class="fas fa-plus"></i> NUEVA CANCIÓN</span>`);let d=document.getElementById(`fiPor`);d&&(d.value=e+`/smile.avif`);let f=document.getElementById(`fiTag`);f&&(f.value=`Cumpleaños`);let p=document.getElementById(`fiArt`);p&&(p.value=`Español`)},U=()=>{S&&(F(S,`timeupdate`,()=>{if(!S)return;let{currentTime:e,duration:t}=S,n=document.getElementById(`musCur`),r=document.getElementById(`musDur`),i=document.getElementById(`musProgressFill`),a=document.getElementById(`musProgressBar`);n&&(n.textContent=M(e)),r&&t&&!isNaN(t)&&(r.textContent=M(t)),i&&t&&!isNaN(t)&&t>0&&(i.style.width=`${e/t*100}%`),a&&t&&!isNaN(t)&&t>0&&a.setAttribute(`aria-valuenow`,String(Math.round(e/t*100)))}),F(S,`ended`,()=>{E===`one`?S&&(S.currentTime=0,S.play().catch(e=>console.warn(e))):B(1)}),F(S,`loadedmetadata`,()=>{if(!S)return;let e=document.getElementById(`musDur`);e&&(e.textContent=M(S.duration))}),F(S,`error`,()=>{a(`Error de conexión con la pista`,`error`)}))},W=()=>{let e=v(),n=document.getElementById(`musPlay`);n&&F(n,`click`,e=>{e.stopPropagation(),T?z():R()});let o=document.getElementById(`musPrev`);o&&F(o,`click`,e=>{e.stopPropagation(),B(-1)});let s=document.getElementById(`musNext`);s&&F(s,`click`,e=>{e.stopPropagation(),B(1)});let u=document.getElementById(`musRep`);u&&F(u,`click`,e=>{e.stopPropagation(),V()});let d=document.getElementById(`musMute`);d&&F(d,`click`,e=>{if(e.stopPropagation(),!S)return;S.muted=!S.muted;let t=d.querySelector(`i`);t&&(t.className=`fas ${S.muted?`fa-volume-xmark`:`fa-volume-high`}`);let n=document.getElementById(`musVolRange`);n&&(n.value=S.muted?`0`:String(S.volume))});let p=document.getElementById(`musVolRange`);p&&F(p,`input`,e=>{if(!S)return;let n=parseFloat(e.target.value);S.volume=n,S.muted=n===0;let r=document.querySelector(`#musMute i`);r&&(r.className=`fas ${n===0?`fa-volume-xmark`:n<.4?`fa-volume-low`:`fa-volume-high`}`),t(`musVolume`,n,168)});let m=document.getElementById(`musProgressBar`);m&&F(m,`click`,e=>{if(!S||!S.duration||isNaN(S.duration))return;let t=m.getBoundingClientRect(),n=(e.clientX-t.left)/t.width;S.currentTime=n*S.duration});let y=document.getElementById(`musPls`);y&&F(y,`click`,async t=>{let n=t.target,r=n.closest(`.fav_t`);if(r){t.stopPropagation();let n=r.getAttribute(`data-id`),o=C.find(e=>e.id===n);if(!o)return;let s=w.includes(o.id),c=!s;r.classList.toggle(`on`,c);let l=r.closest(`.mpi`);l&&l.classList.toggle(`fav`,c);try{if(s?(await x(e,o.id),w=w.filter(e=>e!==o.id)):(await b(e,o),w.push(o.id)),i(`musActual`)===o.id){let e=document.getElementById(`musFav`);e&&e.classList.toggle(`active`,c)}I()}catch(e){console.error(e),r.classList.toggle(`on`,s),l&&l.classList.toggle(`fav`,s),a(`Error al actualizar favoritos`,`error`)}return}let o=n.closest(`.mpi`);if(!o)return;let s=o.getAttribute(`data-id`),c=C.find(e=>e.id===s);if(c)if(i(`musActual`)===c.id?T?z():R():(L(c),R()),e&&(e.rol===`admin`||e.rol===`gestor`||!c.email||c.email===e.email)){k=c.id;let e=document.getElementById(`fiNom`),t=document.getElementById(`fiArt`),n=document.getElementById(`fiUrl`),r=document.getElementById(`fiPor`),i=document.getElementById(`fiTag`),a=document.getElementById(`fiId`),o=document.getElementById(`fiFav`),s=document.getElementById(`fiPub`);e&&(e.value=c.titulo||``),t&&(t.value=c.idioma||c.cantante||`Español`),n&&(n.value=c.url||``),r&&(r.value=c.poster||``),i&&(i.value=c.tag||``),a&&(a.value=c.id||``),o&&(o.checked=!!c.pin),s&&(s.checked=c.publico!==!1);let l=document.getElementById(`fmTitle`);l&&(l.innerHTML=`<i class="fas fa-pen"></i> Editar Música`);let u=document.querySelector(`#fmSave span`),d=document.querySelector(`#fmSave i`);u&&(u.textContent=`Actualizar`),d&&(d.className=`fas fa-pen`);let f=document.getElementById(`fmDelete`),p=document.getElementById(`fmNew`);f&&(f.style.display=`inline-flex`),p&&(p.style.display=`inline-flex`);let m=document.getElementById(`musFormBadge`);m&&(m.innerHTML=`<span class="badge_editando"><i class="fas fa-pen"></i> EDITANDO: ${c.titulo}</span>`)}else H()});let E=document.getElementById(`musFav`);E&&F(E,`click`,async t=>{t.stopPropagation();let n=i(`musActual`),r=C.find(e=>e.id===n);if(!r)return;let o=w.includes(r.id),s=!o;E.classList.toggle(`active`,s);let c=document.querySelector(`.mpi[data-id="${r.id}"]`);c&&c.classList.toggle(`fav`,s);let l=document.querySelector(`.fav_t[data-id="${r.id}"]`);l&&l.classList.toggle(`on`,s);try{o?(await x(e,r.id),w=w.filter(e=>e!==r.id)):(await b(e,r),w.push(r.id)),I()}catch(e){console.error(e),E.classList.toggle(`active`,o),c&&c.classList.toggle(`fav`,o),l&&l.classList.toggle(`on`,o),a(`Error al actualizar favoritos`,`error`)}});let A=document.getElementById(`musSrc`);if(A){let e;F(A,`input`,()=>{window.clearTimeout(e),e=window.setTimeout(()=>{O=A.value,I()},250)})}let j=document.getElementById(`musCatsList`);j&&F(j,`click`,e=>{let t=e.target.closest(`.cat`);t&&(t.classList.contains(`sug_cat`)||(document.querySelectorAll(`#musCatsList .cat`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),D=t.getAttribute(`data-cat`)||`todas`,I()))});let M=document.getElementById(`catSugs`);M&&F(M,`click`,e=>{let t=e.target.closest(`.sug_cat`);if(!t)return;let n=document.getElementById(`fiTag`);n&&(n.value=t.textContent||``,n.focus())});let N=document.getElementById(`fmNew`);N&&F(N,`click`,H);let P=document.getElementById(`fmDelete`);P&&F(P,`click`,async n=>{if(n.stopPropagation(),!k)return;let r=C.find(e=>e.id===k);if(r){if(!(e&&(e.rol===`admin`||e.rol===`gestor`||!r.email||r.email===e.email))){a(`Sin permisos para eliminar esta canción`,`warning`);return}if(confirm(`¿Estás seguro de eliminar "${r.titulo}"?`))try{if(await f(l(_,`wimusica`,r.id)),C=C.filter(e=>e.id!==r.id),t(`wiMusica`,C,168),i(`musActual`)===r.id){z();let e=document.getElementById(`musActual`),t=document.getElementById(`musArtista`),n=document.getElementById(`musCover`);e&&(e.textContent=`Selecciona una canción`),t&&(t.textContent=`CumpleWii`),n&&(n.src=`/smile.avif`)}a(`Música eliminada ✓`,`success`),H(),I()}catch(e){console.error(e),a(`Error al eliminar música`,`error`)}}});let U=document.getElementById(`fmMusica`);U&&F(U,`submit`,async t=>{if(t.preventDefault(),!e){a(`Inicia sesión para realizar esta acción`,`warning`);return}let n=document.getElementById(`fiNom`)?.value.trim(),i=document.getElementById(`fiArt`)?.value.trim(),o=document.getElementById(`fiUrl`)?.value.trim(),s=document.getElementById(`fiPor`)?.value.trim(),u=document.getElementById(`fiTag`)?.value.trim(),d=document.getElementById(`fiFav`)?.checked,f=document.getElementById(`fiPub`)?.checked,p=document.getElementById(`fiId`)?.value||``;if(!n||!i||!o||!s||!u){a(`Completa todos los campos obligatorios`,`warning`);return}if(!o.toLowerCase().includes(`.mp3`)){a(`El enlace debe ser directo a un archivo .mp3`,`warning`);return}let m={titulo:n,idioma:i,url:o,poster:s,tag:u.toLowerCase().trim(),pin:!!d,publico:f!==!1,email:e.email,userId:e.uid,usuario:e.usuario||e.nombre||`CumpleWii`,actualizado:g()};try{if(r(`#fmSave`,!0),k||p)await c(l(_,`wimusica`,k||p),m),a(`Música actualizada`,`success`);else{m.creado=g();let e=`music_${Date.now()}`;await h(l(_,`wimusica`,e),{...m,id:e}),a(`Música guardada `,`success`)}H()}catch(e){console.error(e),a(`Error al guardar música`,`error`)}finally{r(`#fmSave`,!1)}})},G=()=>{let t=v();if(!t)return location.replace(`/`),``;let n=!!t;return`
    <div class="mu_wrap wimusica">
      <div class="mus_body_grid ${n?`autenticado`:``}" id="musLayout">
        
        <!-- Columna Izquierda: Player + Playlist -->
        <div class="mus_left_col">
          <!-- REPRODUCTOR COMPACTO -->
          <div class="mus_player_wrap">
            <div class="mus_player compact_player" id="musPlayer">
              <!-- Tocadiscos de Vinilo -->
              <div class="vinyl_wrap">
                <div class="vinyl_disc" id="vinylDisc">
                  <img id="musCover" class="mus_cover" src="/smile.avif" alt="Portada de música" onerror="this.src='/smile.avif'">
                  <div class="vinyl_center"></div>
                </div>
                <div class="vinyl_arm" id="vinylArm"></div>
              </div>

              <!-- Lógica central del reproductor -->
              <div class="mus_pcore">
                <div class="mus_now_wrap">
                  <div class="mus_now">
                    <strong id="musActual">Selecciona una canción</strong>
                    <span id="musArtista">CumpleWii</span>
                  </div>
                  
                  <!-- Ondas del Ecualizador -->
                  <div class="mus_equalizer" id="musEqualizer">
                    <span class="eq_bar"></span>
                    <span class="eq_bar"></span>
                    <span class="eq_bar"></span>
                    <span class="eq_bar"></span>
                    <span class="eq_bar"></span>
                    <span class="eq_bar"></span>
                  </div>
                </div>

                <!-- Controles principales -->
                <div class="mus_ctrls">
                  <button class="mc" id="musPrev" title="Anterior"><i class="fas fa-backward-step"></i></button>
                  <button class="mc mc_play" id="musPlay" title="Reproducir / Pausar"><i class="fas fa-play"></i></button>
                  <button class="mc" id="musNext" title="Siguiente"><i class="fas fa-forward-step"></i></button>
                  <button class="mc" id="musRep" title="Repetir"><i class="fas fa-repeat"></i></button>
                  <button class="mc" id="musFav" title="Favorito"><i class="fas fa-heart"></i></button>
                </div>

                <!-- Barra de progreso -->
                <div class="mus_prog">
                  <span id="musCur">0:00</span>
                  <div class="mus_bar" id="musProgressBar" role="slider" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div class="mus_fill" id="musProgressFill"></div>
                  </div>
                  <span id="musDur">0:00</span>
                </div>

                <!-- Control de Volumen -->
                <div class="mus_volume_wrap">
                  <button class="mc" id="musMute" title="Silenciar"><i class="fas fa-volume-high"></i></button>
                  <input type="range" id="musVolRange" min="0" max="1" step="0.05" value="0.8" class="mus_vol_slider" title="Ajustar Volumen">
                </div>
              </div>
            </div>
          </div>

          <!-- Biblioteca y listado -->
          <div class="mus_playlist_box" data-showi="80">
            <div class="mus_tools">
              <div class="mus_sbox">
                <i class="fas fa-search"></i>
                <input id="musSrc" placeholder="Buscar por título, cantante o etiqueta..." autocomplete="off">
              </div>
              <div class="mus_cats" id="musCatsList">
                <button class="cat active" data-cat="todas"><i class="fas fa-music"></i> Todas</button>
                <button class="cat" data-cat="animado"><i class="fas fa-bolt"></i> Animado</button>
                <button class="cat" data-cat="tradicional"><i class="fas fa-birthday-cake"></i> Tradicional</button>
                <button class="cat" data-cat="pop / rock"><i class="fas fa-guitar"></i> Pop / Rock</button>
                <button class="cat" data-cat="favoritos"><i class="fas fa-heart"></i> Favoritos</button>
              </div>
            </div>

            <!-- Listado de canciones -->
            <div id="musPls" class="mus_list">
              <div class="mus_skeleton"></div>
              <div class="mus_skeleton"></div>
              <div class="mus_skeleton"></div>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Formulario de Subida -->
        ${n?`
          <div class="mus_right" id="musRightPanel">
            <div class="mus_card">
              <h3 id="fmTitle"><i class="fas fa-plus-circle"></i> Compartir Canción</h3>
              
              <!-- Indicador de estado -->
              <div class="mus_badge" id="musFormBadge">
                <span class="badge_nuevo"><i class="fas fa-plus"></i> NUEVA CANCIÓN</span>
              </div>

              <form id="fmMusica" novalidate>
                <input type="hidden" class="fi_id" id="fiId">
                
                <!-- Grilla interna de dos columnas de campos -->
                <div class="fm_fields_grid">
                  <div class="fg">
                    <label for="fiNom">Título de la Música *</label>
                    <input class="fi fi_nom" id="fiNom" maxlength="100" placeholder="Ej. Cumpleaños Feliz" required>
                  </div>
                  <div class="fg">
                    <label for="fiArt">Idioma / Artista *</label>
                    <input class="fi fi_art" id="fiArt" maxlength="100" placeholder="Ej. Español" value="Español" required>
                  </div>
                  <div class="fg">
                    <label for="fiTag">Categoría / Etiqueta *</label>
                    <input class="fi fi_tag" id="fiTag" placeholder="Ej. cumpleaños, animado, pop / rock" value="Cumpleaños" required>
                    <div id="catSugs" class="mus_cats" style="margin-top: 1vh; gap: 0.6vh;"></div>
                  </div>
                  <div class="fg">
                    <label for="fiPor">URL de Imagen de Portada *</label>
                    <input type="url" class="fi fi_por" id="fiPor" placeholder="https://ejemplo.com/portada.jpg" value="${e}/smile.avif" required>
                    <small>URL de imagen cuadrada preferentemente (500x500px)</small>
                  </div>
                  <div class="fg span_full">
                    <label for="fiUrl">URL de Audio (.mp3) *</label>
                    <input type="url" class="fi fi_url" id="fiUrl" placeholder="https://ejemplo.com/musica.mp3" required>
                    <small>Dirección URL directa a un archivo .mp3 público</small>
                  </div>
                </div>

                <div class="fchecks_row">
                  <label class="fck"><input type="checkbox" id="fiFav"><i class="fas fa-star" style="color: #ffc107;"></i> Destacar en la lista</label>
                  <label class="fck"><input type="checkbox" id="fiPub" checked><i class="fas fa-eye"></i> Pública para todos</label>
                </div>
                
                <div class="fbtns">
                  <button type="button" class="btn_sec" id="fmDelete" style="display:none;" title="Eliminar Música"><i class="fas fa-trash"></i></button>
                  <button type="button" class="btn_sec" id="fmNew" style="display:none;" title="Limpiar formulario"><i class="fas fa-plus"></i> Nuevo</button>
                  <button type="submit" class="btn_pri" id="fmSave"><i class="fas fa-save"></i> <span>Guardar</span></button>
                </div>
              </form>
            </div>
          </div>
        `:``}

      </div>
    </div>
  `},K=async()=>{let e=v();if(!e)return o.navigate(`/`);q(),w=await y(e.email),S=new Audio,U();let r=i(`musVolume`),s=r===null?.8:Number(r);S.volume=s,S.muted=s===0;let c=document.getElementById(`musVolRange`);c&&(c.value=String(s));let l=document.querySelector(`#musMute i`);l&&(l.className=`fas ${s===0?`fa-volume-xmark`:s<.4?`fa-volume-low`:`fa-volume-high`}`);let d=i(`musRep`);if(d){E=d;let e=document.getElementById(`musRep`);e&&(e.classList.toggle(`active`,E!==`none`),E===`one`?e.innerHTML=`<i class="fas fa-redo"></i>`:E===`all`&&(e.innerHTML=`<i class="fas fa-redo-alt"></i>`))}e&&H(),W();let f=i(`wiMusica`);if(f&&f.length){C=N(f),I();let e=i(`musActual`),t=C.find(t=>t.id===e);t?L(t):C.length>0&&L(C[0])}A=m(u(_,`wimusica`),n=>{C=N(n.docs.map(e=>({id:e.id,...e.data()})).filter(t=>t.publico!==!1||t.email===e.email||e.rol===`admin`||e.rol===`gestor`)),t(`wiMusica`,C,168),I();let r=i(`musActual`);if(C.length>0){let e=C.find(e=>e.id===r);if(!e)L(C[0]);else{let t=document.getElementById(`musActual`),n=document.getElementById(`musArtista`),r=document.getElementById(`musCover`),i=document.getElementById(`musFav`);t&&(t.textContent=e.titulo),n&&(n.textContent=e.idioma||e.cantante||`Español`);let a=e.poster||`/smile.avif`;r&&(r.src=a);let o=w.includes(e.id);i&&i.classList.toggle(`active`,o)}}},e=>{console.error(`Firestore music listener error:`,e),a(`Error de sincronización con Firestore`,`error`)}),n(`[data-showi]`),console.log(`Música Premium Inicializada`)},q=()=>{j.forEach(({target:e,type:t,handler:n})=>{e&&e.removeEventListener(t,n)}),j=[],A&&=(A(),null),S&&=(S.pause(),S.removeAttribute(`src`),S.load(),null),T=!1};export{q as cleanup,K as init,G as render};