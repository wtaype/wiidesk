const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-YFk7wr3b.css"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./wii-DZzdzbZC.js";import{b as n,i as r}from"./widev-DCNhLI3Q.js";import{a as i,r as a}from"./index-C8Impiaj.js";import{T as o,g as s,i as c,u as l,y as u}from"./firebase-HsegvofM.js";import{n as d,t as f}from"./firebase-Bl23Hk2a.js";var p=()=>new Promise(e=>{if(f.currentUser)return e(f.currentUser);let t=o(f,n=>{t(),e(n)})}),m=`ABCDEFGHIJKLMNOPQRSTUVWXYZ234567`,h=e=>{let t=0,n=0,r=[];for(let i of e.replace(/=+$/,``).toUpperCase())n=n<<5|m.indexOf(i),t+=5,t>=8&&(r.push(n>>>t-8&255),t-=8);return new Uint8Array(r)},g=()=>{let e=crypto.getRandomValues(new Uint8Array(20));return Array.from(e,e=>m[e&31]).join(``)},_=async(e,t=0)=>{let n=Math.floor(Date.now()/3e4)+t,r=new ArrayBuffer(8);new DataView(r).setUint32(4,n,!1);let i=await crypto.subtle.importKey(`raw`,h(e),{name:`HMAC`,hash:`SHA-1`},!1,[`sign`]),a=new Uint8Array(await crypto.subtle.sign(`HMAC`,i,r)),o=a[19]&15;return(((a[o]&127)<<24|a[o+1]<<16|a[o+2]<<8|a[o+3])%1e6).toString().padStart(6,`0`)},v=async(e,t)=>{for(let n of[-1,0,1])if(await _(t,n)===e)return!0;return!1},y=e=>{let t=n(`wiSmile`);return!e||!t?(a.navigate(`/login`),!1):t.rol===`admin`?t.estado===`activo`?sessionStorage.getItem(`vault_unlocked`)===`true`?(a.navigate(`/admin`),!1):t:(a.navigate(`/registrado`),!1):(a.navigate(`/`),!1)},b=`
  <svg viewBox="0 0 512 512" class="vault_svg_logo" xml:space="preserve">
    <path fill="#1A73E8" d="M440,256.0v0.0C440,273.1,426.1,287,409.0,287H302l-46-93.0l49.7-86.0 c8.6-14.8,27.5-19.9,42.3-11.3l0.0,0.0c14.8,8.6,19.9,27.5,11.3,42.3 L309.7,225h99.3C426.1,225,440,238.9,440,256.0z"/>
    <path fill="#EA4335" d="M348.0,415.3l-0.0,0.0c-14.8,8.6-33.8,3.5-42.3-11.3L256,318.0 l-49.7,86.0c-8.6,14.8-27.5,19.9-42.3,11.3l-0.0-0.0 c-14.8-8.6-19.9-27.5-11.3-42.3L202.3,287L256,285l53.7,2l49.7,86.0 C367.9,387.8,362.8,406.8,348.0,415.3z"/>
    <path fill="#FBBC04" d="M256,194.0L242,232l-39.7-7l-49.7-86.0 c-8.6-14.8-3.5-33.8,11.3-42.3l0.0-0.0c14.8-8.6,33.8-3.5,42.3,11.3 L256,194.0z"/>
    <path fill="#34A853" d="M248,225l-36,62H103.0C85.9,287,72,273.1,72,256.0v-0.0 C72,238.9,85.9,225,103.0,225H248z"/>
    <polygon fill="#185DB7" points="309.7,287 202.3,287 256,194.0 "/>
  </svg>
`,x=`
  <h1 class="vault_title">Configura tu Bóveda</h1>
  <p class="vault_subtitle">Escanea este código QR con <strong>Google Authenticator</strong> para proteger el panel de administración.</p>

  <div id="vault_qr_wrap" class="vault_qr_wrap">
    <canvas id="vault_qr"></canvas>
    <div class="vault_qr_shine"></div>
  </div>
  <p class="vault_qr_hint"><i class="fas fa-info-circle"></i> Abre Google Authenticator → Añadir cuenta → Escanear QR</p>

  <div class="vault_auth_box" style="margin-top:1.5rem">
    <label>Ingresa el código de 6 dígitos para confirmar</label>
    <div class="vault_input_wrap">
      <i class="fas fa-th"></i>
      <input type="text" id="vault_code_setup" placeholder="000000" maxlength="6" autocomplete="off" inputmode="numeric" />
    </div>
    <button id="btn_vault_confirmar" class="vault_btn_primary" disabled>
      <i class="fas fa-lock"></i> Confirmar y Cerrar Puerta
    </button>
  </div>
`,S=`
  <h1 class="vault_title">Verificar que eres tú</h1>
  <p class="vault_subtitle">Abre <strong>Google Authenticator</strong> en tu celular e ingresa el código de 6 dígitos.</p>

  <div class="vault_auth_box">
    <div class="vault_input_wrap vault_input_lg">
      <i class="fas fa-th"></i>
      <input type="text" id="vault_code" placeholder="000000" maxlength="6"
             autocomplete="off" inputmode="numeric" autofocus />
    </div>
    <button id="btn_code" class="vault_btn_primary">
      <i class="fas fa-unlock"></i> Verificar y Entrar
    </button>
  </div>

  <button id="btn_vault_back" class="vault_btn_back">
    <i class="fas fa-arrow-left"></i> Volver al inicio
  </button>
`,C=null,w=null,T=60;function E(){w&&clearInterval(w);let e=localStorage.getItem(`vault_expire`);e||(e=Date.now()+T*1e3,localStorage.setItem(`vault_expire`,e));let t=()=>Math.max(0,Math.ceil((parseInt(e)-Date.now())/1e3)),n=t(),a=document.getElementById(`vault_timer`);a&&(a.textContent=`${n}s`);let o=async()=>{n=t();let e=document.getElementById(`vault_timer`);if(e&&(e.textContent=`${n}s`),n<=0){w&&clearInterval(w),w=null,localStorage.removeItem(`vault_expire`),r(`Sesión cerrada por inactividad`,`error`);let{salir:e}=await i(async()=>{let{salir:e}=await import(`./login-DHOGUOGV.js`);return{salir:e}},__vite__mapDeps([0]));await e()}};o(),n>0&&(w=setInterval(o,1e3))}var D=e=>{e.stopPropagation(),e.preventDefault(),r(`<i class="fas fa-exclamation-circle"></i> No está permitido cambiar de tema en esta página.`,`warning`)},O=()=>{let e=n(`wiSmile`);return!e||e.rol!==`admin`?``:`
    <div class="vault_wrap">
      <div class="vault_card" id="vault_card_container">
        <div class="vault_timer_band">
          <i class="fas fa-clock fa-spin"></i> Cierre de seguridad en <strong id="vault_timer">60s</strong>
        </div>
        <div class="vault_logo_wrapper">
          ${b}
        </div>
        <div id="vault_content_area" style="text-align:center;padding:1rem 0">
          <i class="fas fa-spinner fa-spin fa-2x" style="color:var(--tx3,#aaa)"></i>
          <p style="margin-top:1rem;color:var(--tx2)">Cargando Autenticación...</p>
        </div>
      </div>
    </div>
  `},k=[],A=(e,t,n)=>{let r=e=>{if(!t)n.call(document,e);else{let r=e.target.closest(t);r&&n.call(r,e)}};document.addEventListener(e,r),k.push({type:e,wrapper:r})},j=async()=>{F(),document.body.classList.add(`is-vault-locked`),E();let e=document.getElementById(`wiTema`);e&&(e.addEventListener(`click`,D,{capture:!0}),e.style.opacity=`0.4`,e.style.cursor=`not-allowed`,e.querySelectorAll(`.tema`).forEach(e=>e.style.cursor=`not-allowed`)),A(`click`,`a, [href], .nv_item`,function(e){if(document.body.classList.contains(`is-vault-locked`)){if(this.id===`btn_vault_back`||this.closest(`#btn_vault_back`))return;e.preventDefault(),e.stopPropagation(),r(`<i class="fas fa-exclamation-triangle"></i> Identidad no verificada. Completa el 2FA primero.`,`warning`)}}),A(`contextmenu`,null,function(e){document.body.classList.contains(`is-vault-locked`)&&(e.preventDefault(),r(`<i class="fas fa-eye-slash"></i> Clic derecho inhabilitado por seguridad.`,`warning`))}),[`copy`,`cut`,`paste`].forEach(e=>{A(e,`input, body`,function(e){document.body.classList.contains(`is-vault-locked`)&&(e.preventDefault(),r(`<i class="fas fa-key"></i> Copiar y pegar inhabilitado en esta boveda.`,`warning`))})}),A(`keydown`,null,function(e){if(document.body.classList.contains(`is-vault-locked`)){if(e.keyCode===123)return e.preventDefault(),r(`<i class="fas fa-shield-alt"></i> DevTools bloqueado por seguridad.`,`error`),!1;if(e.ctrlKey||e.metaKey){let t=String.fromCharCode(e.keyCode).toLowerCase();if(t===`u`||t===`s`||t===`p`||e.shiftKey&&(t===`i`||t===`j`||t===`c`))return e.preventDefault(),r(`<i class="fas fa-shield-alt"></i> Combinación de teclas restringida en esta zona.`,`error`),!1}}});let t=y(await p());if(t)try{let e=await c(s(d,`configwii`,t.usuario)),n=e.exists()?e.data():null;if(n?.configurado&&n?.secret){C=n.secret;let e=document.getElementById(`vault_card_container`);e&&e.classList.remove(`vault_card_setup`);let r=document.getElementById(`vault_content_area`);r&&(r.innerHTML=S),N(t)}else{let e=document.getElementById(`vault_card_container`);e&&e.classList.add(`vault_card_setup`);let n=document.getElementById(`vault_content_area`);n&&(n.innerHTML=x),await M(t)}}catch(e){console.error(`[verificar] init:`,e),r(`Error al cargar la bóveda`,`error`)}};async function M(a){let o=await i(()=>import(`./vendor-B_X_RtOd.js`).then(t=>e(t.t(),1)),[]);C=g();let c=t,f=n(`wiSmile`),p=`otpauth://totp/${c}:${encodeURIComponent(f?.usuario||a.usuario)}?secret=${C}&issuer=${c}&algorithm=SHA1&digits=6&period=30`,m=document.getElementById(`vault_qr`);m&&await o.toCanvas(m,p,{width:200,margin:2,color:{dark:`#0f172a`,light:`#ffffff`}}),A(`input`,`#vault_code_setup`,function(){this.value=this.value.replace(/[^0-9]/g,``);let e=document.getElementById(`btn_vault_confirmar`);e&&(e.disabled=this.value.length!==6)}),A(`click`,`#btn_vault_confirmar`,async function(){let e=document.getElementById(`vault_code_setup`),t=e?e.value.trim():``;if(t.length!==6)return;if(!await v(t,C)){r(`<i class="fas fa-times-circle"></i> Código incorrecto, intenta de nuevo`,`error`),e&&(e.value=``,e.focus());return}let n=this,i=n.innerHTML;n.innerHTML=`<i class="fas fa-spinner fa-spin"></i> Guardando...`,n.disabled=!0;try{await l(s(d,`configwii`,a.usuario),{configurado:!0,secret:C,email:a.email||``,creado:u(),actualizado:u()}),r(`<i class="fas fa-lock"></i> ¡Bóveda configurada! Bienvenido al panel.`,`success`),P()}catch(e){console.error(`[verificar] setup save:`,e),r(`Error al guardar la configuración`,`error`),n.innerHTML=i,n.disabled=!1}})}function N(e){setTimeout(()=>{let e=document.getElementById(`vault_code`);e&&e.focus()},100),A(`input`,`#vault_code`,function(){if(this.value=this.value.replace(/[^0-9]/g,``),this.value.length===6){let e=document.getElementById(`btn_code`);e&&e.click()}}),A(`click`,`#btn_code`,async function(){let e=document.getElementById(`vault_code`),t=e?e.value.trim():``;if(t.length!==6)return r(`Ingresa los 6 dígitos`,`warning`);let n=this,i=n.innerHTML;n.innerHTML=`<i class="fas fa-spinner fa-spin"></i> Verificando...`,n.disabled=!0;try{await v(t,C)?(r(`<i class="fas fa-unlock"></i> ¡Bóveda desbloqueada!`,`success`),P()):(r(`<i class="fas fa-times-circle"></i> Código incorrecto o expirado`,`error`),e&&(e.value=``,e.focus()),n.innerHTML=i,n.disabled=!1)}catch(e){console.error(`[verificar] unlock:`,e),n.innerHTML=i,n.disabled=!1}}),A(`click`,`#btn_vault_back`,()=>{localStorage.removeItem(`vault_expire`),a.navigate(`/`)})}function P(){w&&=(clearInterval(w),null),localStorage.removeItem(`vault_expire`),document.body.classList.remove(`is-vault-locked`),sessionStorage.setItem(`vault_unlocked`,`true`),window.location.href=`/admin`}var F=()=>{w&&=(clearInterval(w),null),document.body.classList.remove(`is-vault-locked`),k.forEach(({type:e,wrapper:t})=>{document.removeEventListener(e,t)}),k=[];let e=document.getElementById(`wiTema`);e&&(e.removeEventListener(`click`,D,{capture:!0}),e.style.opacity=``,e.style.cursor=``,e.querySelectorAll(`.tema`).forEach(e=>e.style.cursor=``))};export{F as cleanup,j as init,O as render};