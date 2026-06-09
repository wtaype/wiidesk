import{r as e}from"./index-C8Impiaj.js";var t=`
  <div class="reg_wrap">
    <div class="reg_card">
      <div class="reg_icon_wrap">
        <div class="reg_icon_pulse"></div>
        <i class="fas fa-user-clock reg_icon"></i>
      </div>
      
      <h1 class="reg_title">¡Registro Exitoso!</h1>
      <p class="reg_subtitle">Gracias por querer ser parte de nuestra plataforma.</p>
      
      <div class="reg_body">
        <p>Tu cuenta ha sido creada y actualmente se encuentra en <strong>estado de revisión</strong>.</p>
        <p>Nuestro equipo de gestores está verificando tus datos para brindarte el acceso oficial muy pronto.</p>
      </div>

      <div class="reg_actions">
        <button class="reg_btn_back" id="reg_btn_back">Volver al inicio</button>
      </div>
    </div>
  </div>
`,n=()=>t,r=[],i=(e,t,n)=>{let i=e=>{let r=e.target.closest(t);r&&n.call(r,e)};document.addEventListener(e,i),r.push({type:e,wrapper:i})},a=()=>{i(`click`,`#reg_btn_back`,()=>{e.navigate(`/`)})},o=()=>{r.forEach(({type:e,wrapper:t})=>{document.removeEventListener(e,t)}),r=[]};export{o as cleanup,a as init,n as render};