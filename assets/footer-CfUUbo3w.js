import{c as e,n as t,s as n,t as r}from"./wii-DZzdzbZC.js";import{E as i,b as a}from"./widev-V_5yEuMT.js";function o(){return`
  <footer class="foo">
    <div class="foo_inner">
      <div class="foo_left">
        <div class="foo_brand">
          <span class="foo_app"><a href="/">${r}</a></span>
          <span class="foo_ver">v10</span>
        </div>
        <div class="foo_links">
          <a href="/acerca"   class="foo_link nv_item" data-page="acerca"  ><i class="fas fa-circle-info"></i> Acerca</a>
          <a href="/terminos"   class="foo_link nv_item" data-page="terminos"  ><i class="fas fa-file-contract"></i> Términos</a> 
          <a href="/cookies"    class="foo_link nv_item" data-page="cookies"   ><i class="fas fa-cookie-bite"></i> Cookies</a>
          <a href="/privacidad" class="foo_link nv_item" data-page="privacidad"><i class="fas fa-lock"></i> Privacidad</a>
          <a href="/feedback"   class="foo_link nv_item" data-page="feedback"  ><i class="fas fa-comment-dots"></i> Feedback</a>
          <a href="/contacto"   class="foo_link nv_item" data-page="contacto"  ><i class="fas fa-envelope"></i> Contacto</a>
        </div>
      </div>
      <div class="foo_right">
        <span>Creado con <i class="fas fa-heart" style="color:var(--mco);"></i> by <a href="${e}" target="_blank"><strong>${t}</strong></a> ${n} - ${new Date().getFullYear()}</span>
      </div>
    </div>
  </footer>
  `}if(document.querySelector(`.foo`)||document.body.insertAdjacentHTML(`beforeend`,o()),!document.getElementById(`wi_bg_style`)){let e=document.createElement(`style`);e.id=`wi_bg_style`,e.textContent=`:root{--bgim:url("/wiidesk/wpuntos.svg")}body{background: var(--bgim), var(--bg)}`,document.head.appendChild(e)}var s=`cookies`,c=e=>{i(s,e);let t=document.getElementById(`cookies`);t&&(t.classList.remove(`cookies_show`),setTimeout(()=>t.remove(),150))};if(document.addEventListener(`pointerdown`,e=>{e.target.closest(`#ck_aceptar`)?c(!0):e.target.closest(`#ck_rechazar`)&&c(!1)}),!a(s))document.getElementById(`cookies`)||document.body.insertAdjacentHTML(`beforeend`,`
<div class="cookiess" id="cookies" role="dialog" aria-live="polite" aria-label="Consentimiento de Cookies">
    <p class="cookiess_txt"><i class="fas fa-cookie-bite cookiess_ico"></i>Usamos almacenamiento local para guardar tus preferencias de tema y configuración de privacidad de forma segura.
    <a class="cookiess_link nv_item" href="/cookies">Más info</a></p>
    <div class="cookiess_btns"><button class="cookiess_aceptar" id="ck_aceptar"><i class="fas fa-check"></i> Entendido</button>
    <button class="cookiess_rechazar" id="ck_rechazar">Cerrar</button></div>
  </div>`),setTimeout(()=>{let e=document.getElementById(`cookies`);e&&e.classList.add(`cookies_show`)},800);else{let e=document.getElementById(`cookies`);e&&e.remove()}export{o as footer};