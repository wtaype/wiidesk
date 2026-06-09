import{s as e}from"./widev-DCNhLI3Q.js";import{a as t}from"./main-pQv_1tkP.js";import{SUGERENCIAS as n,detectarTema as r}from"./contexto-BRMMxnTe.js";import"./waa-ClgJHSI_.js";var i=()=>{let t=n.general,r=e().replace(/, $/,``).toLowerCase();return`
<div class="miia">
  
  <div class="miia_messages_wrap">
    <div class="miia_messages" id="miiaMessages">
      <div class="miia_empty wi_fadeUp visible">
        <div class="miia_welcome_icon">
          <img src="/perfil.webp" alt="ChatWil" class="miia_avatar_img">
          <div class="miia_icon_ring"></div>
        </div>
        <h2 class="miia_welcome_title">ChatWil</h2>
        <p class="miia_welcome_text">
          ${r.charAt(0).toUpperCase()+r.slice(1)} herman@, <strong>bienvenid@ a ChatWil. ¿Cuéntame, cómo te sientes hoy?</strong>
        </p>
        <div class="miia_suggestions">
          ${t.map((e,t)=>`
            <div class="suggestion_card" data-prompt="${e.prompt}" style="animation-delay: ${t*.1}s">
              <i class="fas ${e.ico}"></i><span>${e.txt}</span>
            </div>`).join(``)}
        </div>
      </div>
    </div>
  </div>

  <div class="miia_input_area wi_fadeUp visible">
    <div class="miia_input_container">
      <div class="miia_input_wrapper">
        <textarea class="miia_input" id="miiaInput" placeholder="Escribe tu petición aquí..." rows="1"></textarea>
        <button class="miia_send active" id="miiaSend">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
      <div class="miia_input_info">
        <span><i class="fas fa-hands-praying"></i> ChatWil v11 · <a href="https://chatwiil.web.app/terminos.html" target="_blank">Términos</a></span>
      </div>
    </div>
  </div>

</div>`},a=!1,o=0,s=null,c=[],l=()=>({msg:document.getElementById(`miiaMessages`),inp:document.getElementById(`miiaInput`),btn:document.getElementById(`miiaSend`)}),u=(e=!1)=>{let t=document.querySelector(`.miia_messages_wrap`);t&&(e?t.scrollTo({top:t.scrollHeight,behavior:`smooth`}):t.scrollTop=t.scrollHeight)},d=async()=>s??=await t(()=>import(`./brain-w1UIgWyX.js`),[]),f=e=>e.replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\n/g,`<br>`).replace(/\*\*(.*?)\*\*/g,`<strong>$1</strong>`).replace(/\*(.*?)\*/g,`<strong>$1</strong>`),p=(e,t)=>{let{msg:n}=l();if(!n)return;let r=new Date().toLocaleTimeString(`es-PE`,{hour:`2-digit`,minute:`2-digit`}),i=t===`user`?`<i class="fas fa-user-circle"></i>`:`<img src="/perfil.webp" alt="ChatWil" class="miia_avatar_img">`,a=document.createElement(`div`);a.className=`miia_message ${t}`,a.setAttribute(`data-time`,r),a.innerHTML=`
    <div class="message_avatar">${i}</div>
    <div class="message_content">
      <div class="message_header">
        <span class="message_name">${t===`user`?`Tú`:`ChatWil`}</span>
        <span class="message_time">${r}</span>
      </div>
      <div class="message_text"></div>
    </div>`,a.querySelector(`.message_text`).innerHTML=f(e),n.appendChild(a),u()},m=e=>{let t=document.querySelector(`.miia_message.typing`);if(t&&t.remove(),!e)return;let n=document.getElementById(`miiaMessages`);if(!n)return;let r=document.createElement(`div`);r.className=`miia_message ai typing`,r.innerHTML=`
    <div class="message_avatar"><img src="/perfil.webp" alt="ChatWil" class="miia_avatar_img"></div>
    <div class="message_content">
      <div class="message_text"><div class="typing_dots"><span></span><span></span><span></span></div></div>
    </div>`,n.appendChild(r),u()},h=(e,t)=>{let{msg:n}=l();if(!n)return;let r=new Date().toLocaleTimeString(`es-PE`,{hour:`2-digit`,minute:`2-digit`}),i=`tw_${Date.now()}_${++o}`,a=document.createElement(`div`);a.className=`miia_message ai`,a.setAttribute(`data-time`,r),a.innerHTML=`
    <div class="message_avatar"><img src="/perfil.webp" alt="ChatWil" class="miia_avatar_img"></div>
    <div class="message_content">
      <div class="message_header">
        <span class="message_name">ChatWil</span>
        <span class="message_time">${r}</span>
      </div>
      <div class="message_text" id="${i}"></div>
    </div>`,n.appendChild(a),u();let s=document.getElementById(i);if(!s)return;let c=Array.from(e),d=0,p=0,m=()=>{d<c.length?(s.innerHTML=f(c.slice(0,d+1).join(``)),d++,Date.now()-p>100&&(u(),p=Date.now()),setTimeout(m,15)):(s.removeAttribute(`id`),u(!0),t?.())};m()},g=e=>{let t=document.querySelector(`.miia_contextual_suggestions`);t&&t.remove();let r=n[e]??n.general;if(!r?.length)return;let i=`
    <p class="suggestions_title"><i class="fas fa-hands-praying"></i> ¿En qué más podemos orar?</p>
    <div class="suggestions_grid">
      ${r.map(e=>`
        <div class="suggestion_card_small" data-prompt="${e.prompt}">
          <i class="fas ${e.ico}"></i><span>${e.txt}</span>
        </div>`).join(``)}
    </div>`,a=document.createElement(`div`);a.className=`miia_contextual_suggestions`,a.innerHTML=i;let o=document.getElementById(`miiaMessages`);o&&o.appendChild(a),u(!0)},_=async()=>{let{inp:e}=l();if(!e)return;let t=e.value.trim();if(!t||a)return;let n=document.querySelector(`.miia_empty`);n&&(n.style.transition=`opacity 0.2s`,n.style.opacity=`0`,setTimeout(()=>{n.remove()},200)),p(t,`user`),e.value=``,e.style.height=`auto`,e.dispatchEvent(new Event(`input`,{bubbles:!0})),a=!0,m(!0);try{c.push({role:`user`,content:t}),await new Promise(e=>setTimeout(e,800+Math.random()*700));let e=await(await d()).procesar(t,c);if(m(!1),!e||typeof e!=`string`)throw Error(`Respuesta inválida`);c.push({role:`assistant`,content:e}),h(e,()=>{a=!1,g(r(t))})}catch(e){console.error(`❌ Error:`,e),m(!1),p(`😔 Disculpa, tuve un problema. Por favor, intenta de nuevo. 💚`,`ai`),a=!1}},v=[],y=(e,t,n)=>{let r=e=>{if(!t){n.call(e.currentTarget,e);return}let r=e.target.closest(t);r&&n.call(r,e)};document.addEventListener(e,r),v.push({type:e,wrapper:r})},b=()=>{v.forEach(({type:e,wrapper:t})=>{document.removeEventListener(e,t)}),v.length=0},x=()=>{let{inp:t}=l();if(t){let n=e().replace(/, $/,``).toLowerCase();t.value=`${n.charAt(0).toUpperCase()+n.slice(1)}, me gustaría que ores por mí, por favor.`,t.setAttribute(`placeholder`,`Escribe tu petición aquí...`);let r=t.value.trim().length>0,i=document.getElementById(`miiaSend`);i&&(i.disabled=!r,i.classList.toggle(`active`,r))}y(`input`,`#miiaInput`,function(){this.style.height=`auto`,this.style.height=Math.min(this.scrollHeight,120)+`px`;let e=this.value.trim().length>0,t=document.getElementById(`miiaSend`);t&&(t.disabled=!e,t.classList.toggle(`active`,e))}),y(`keydown`,`#miiaInput`,e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),_())}),y(`click`,`#miiaSend`,_),y(`click`,`.suggestion_card, .suggestion_card_small`,function(){let e=document.getElementById(`miiaInput`);e&&(e.value=this.getAttribute(`data-prompt`),e.style.height=`auto`,e.dispatchEvent(new Event(`input`,{bubbles:!0})),e.focus(),this.classList.contains(`suggestion_card_small`)&&setTimeout(_,120))}),console.log(`✅ ChatWil v11 iniciado`)},S=()=>{b(),c=[]};export{S as cleanup,x as init,i as render};