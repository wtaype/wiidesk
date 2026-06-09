import{E as e,V as t,b as n,i as r,j as i}from"./widev-DCNhLI3Q.js";import{r as a}from"./index-C8Impiaj.js";import{f as o,g as s,i as c,j as l,u,y as d}from"./firebase-HsegvofM.js";import{n as f,t as p}from"./firebase-Bl23Hk2a.js";var m=()=>n(`wiSmile`)||{},h=()=>{let e=m();if(!e.email)return location.replace(`/`),``;let t=e.nombre||``,n=e.apellidos||``,r=e.usuario||``,a=e.email||``,o=e.rol||`smile`,s=e.plan||`free`,c=e.estado||`activo`;(e.tema||`Por defecto`).split(`|`)[0],e.uid;let l=e.avatar||``,u=e.fechaNacimiento||``,d=e.pais||``,f=e.genero||``,p=e.gustos||``,h=e.bio||``,g=e.creacion||e.creado,_=g?i(null).get(g,`local`):`Desconocido`,v=e.ultActividad,y=v?i(null).get(v,`local`):`Recién activo`,b=e.activo!==!1,x=c===`activo`?`var(--success)`:`var(--error)`,S=``;if(u)try{let e=u.toDate?u.toDate():new Date(u);isNaN(e.getTime())||(S=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`)}catch(e){console.warn(`Error formatting birthdate:`,e)}return`
  <div class="prf_wrap">

    <div class="prf_hero">
      <div class="prf_av_wrap">
        <img src="${l||`/smile.avif`}" alt="${t}" class="prf_av" onerror="this.src='/smile.avif'">
        <div class="prf_av_ring"></div>
      </div>
      <div class="prf_hero_info">
        <h1 class="prf_fullname">${t} ${n}</h1>
        <p class="prf_username"><i class="fas fa-at"></i> ${r}</p>
        <span class="prf_rol_chip"><i class="fas fa-crown"></i> Plan ${s.toUpperCase()}</span>
      </div>
    </div>

    <div class="prf_grid">

      <div class="prf_card">
        <h2 class="prf_card_tit"><i class="fas fa-user-edit"></i> Editar perfil</h2>
        
        <div class="prf_form_2col">
          <div class="prf_form_grp">
            <label>Nombres</label>
            <input id="prf_nombre" value="${t}" placeholder="Tus nombres">
          </div>
          <div class="prf_form_grp">
            <label>Apellidos</label>
            <input id="prf_apellidos" value="${n}" placeholder="Tus apellidos">
          </div>
        </div>
        
        <label>Enlace del Avatar (URL)</label>
        <input id="prf_avatar" value="${l}" placeholder="https://tu-foto.com/imagen.jpg">
        
        <div class="prf_form_2col">
          <div class="prf_form_grp">
            <label>Fecha de Nacimiento</label>
            <input type="date" id="prf_nacimiento" value="${S}">
          </div>
          <div class="prf_form_grp">
            <label>Género</label>
            <select id="prf_genero">
              <option value="" disabled ${f?``:`selected`}>Selecciona tu género</option>
              <option value="Masculino" ${f===`Masculino`?`selected`:``}>Masculino</option>
              <option value="Femenino" ${f===`Femenino`?`selected`:``}>Femenino</option>
              <option value="Otro" ${f===`Otro`?`selected`:``}>Otro</option>
              <option value="Prefiero no decirlo" ${f===`Prefiero no decirlo`?`selected`:``}>Prefiero no decirlo</option>
            </select>
          </div>
        </div>

        <div class="prf_form_2col">
          <div class="prf_form_grp">
            <label>País</label>
            <input id="prf_pais" value="${d}" placeholder="Ej. Perú, México, España...">
          </div>
          <div class="prf_form_grp">
            <label>Gustos o intereses</label>
            <input id="prf_gustos" value="${p}" placeholder="Ej. Fútbol, leer, viajar...">
          </div>
        </div>
        
        <label>Biografía</label>
        <textarea id="prf_bio" rows="3" placeholder="Cuéntanos un poco sobre ti...">${h}</textarea>

        <button id="prf_guardar" class="prf_btn"><i class="fas fa-save"></i> Guardar cambios</button>
      </div>

      <div class="prf_col_right">
        <div class="prf_card">
          <h2 class="prf_card_tit"><i class="fas fa-lock"></i> Actualizar contraseña</h2>
          <label>Nueva contraseña</label>
          <input type="password" id="prf_pass" placeholder="Ingresa tu nueva contraseña">
          <label>Confirmar contraseña</label>
          <input type="password" id="prf_pass_conf" placeholder="Confirma tu nueva contraseña">
          <button id="prf_guardar_pass" class="prf_btn"><i class="fas fa-key"></i> Actualizar contraseña</button>
        </div>

        <div class="prf_card">
          <h2 class="prf_card_tit"><i class="fas fa-info-circle"></i> Datos de cuenta</h2>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-envelope"></i> Email</span>
            <span class="prf_val em">${a}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-crown"></i> Plan</span>
            <span class="prf_val" style="color:var(--mco); text-transform:uppercase;">${s}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-signal"></i> Estado</span>
            <span class="prf_val" style="color:${x}">${c}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-toggle-on"></i> Activo</span>
            <span class="prf_val" style="color:${b?`var(--success)`:`var(--error)`}; font-weight: bold;">${b?`Sí`:`No`}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-calendar-alt"></i> Registro</span>
            <span class="prf_val">${_}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-history"></i> Actividad</span>
            <span class="prf_val">${y}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-user-tag"></i> Rol</span>
            <span class="prf_val" style="text-transform:capitalize;">${o}</span>
          </div>
        </div>
      </div>

    </div>
  </div>`},g=[],_=(e,t,n)=>{let r=e=>{let r=e.target.closest(t);r&&n.call(r,e)};document.addEventListener(e,r),g.push({type:e,wrapper:r})},v=async()=>{y();let n=m();if(!n.email)return a.navigate(`/`);try{let t=await c(s(f,`smiles`,n.usuario));if(t.exists()){let r={...t.data()};if(r.fechaNacimiento)try{let e=r.fechaNacimiento.toDate?r.fechaNacimiento.toDate():new Date(r.fechaNacimiento);r.fechaNacimiento=isNaN(e.getTime())?``:e.toISOString()}catch{r.fechaNacimiento=``}r.creacion&&r.creacion.toDate&&(r.creacion=r.creacion.toDate().getTime()),r.creado&&r.creado.toDate&&(r.creado=r.creado.toDate().getTime()),r.ultActividad&&r.ultActividad.toDate?r.ultActividad=r.ultActividad.toDate().getTime():r.ultActividad&&=new Date(r.ultActividad).getTime();let i={...n,...r};if(JSON.stringify(n)!==JSON.stringify(i)){e(`wiSmile`,i,24),a.navigate(`/perfil`,!1);return}}let r=s(f,`registros`,n.usuario);(await c(r)).exists()||await u(r,{usuario:n.usuario,email:n.email,uid:n.uid,creado:n.creado||d()})}catch(e){console.warn(`Sync Firestore perfil/registros error:`,e)}_(`click`,`#prf_guardar`,async function(){let n=m(),i=document.getElementById(`prf_nacimiento`),c=i?i.value:``,l=``;if(c){let[e,t,n]=c.split(`-`).map(Number);l=new Date(e,t-1,n,12,0,0)}let p=document.getElementById(`prf_nombre`),h=document.getElementById(`prf_apellidos`),g=document.getElementById(`prf_avatar`),_=document.getElementById(`prf_pais`),v=document.getElementById(`prf_genero`),y=document.getElementById(`prf_gustos`),b=document.getElementById(`prf_bio`),x=p?p.value.trim():``,S=h?h.value.trim():``,C=g?g.value.trim():``,w=_?_.value.trim():``,T=v?v.value:``,E=y?y.value.trim():``,D=b?b.value.trim():``,O={nombre:x,apellidos:S,avatar:C,fechaNacimiento:l,pais:w,genero:T,gustos:E,bio:D,ultActividad:d()};if(!O.nombre)return t(p,`Ingresa tu nombre`,`error`);this.disabled=!0,this.innerHTML=`<i class="fas fa-spinner fa-spin"></i> Guardando...`;try{await o(s(f,`smiles`,n.usuario),O),await u(s(f,`registros`,n.usuario),{usuario:n.usuario,email:n.email,uid:n.uid,actualizado:d()},{merge:!0}),e(`wiSmile`,{...n,...O,fechaNacimiento:l?l.toISOString():``,ultActividad:Date.now()},24);let t=document.querySelector(`.prf_fullname`);t&&(t.textContent=`${O.nombre} ${O.apellidos}`);let i=document.querySelector(`.prf_av`);i&&(i.src=O.avatar||`/smile.avif`),r(`Perfil actualizado ✅`,`success`),setTimeout(()=>a.navigate(`/perfil`,!1),1e3)}catch(e){console.error(e),r(`Error al guardar`,`error`)}finally{this.disabled=!1,this.innerHTML=`<i class="fas fa-save"></i> Guardar cambios`}}),_(`click`,`#prf_guardar_pass`,async function(){let e=document.getElementById(`prf_pass`),n=document.getElementById(`prf_pass_conf`),i=e?e.value:``,a=n?n.value:``;if(!i||i.length<6)return t(e,`Mínimo 6 caracteres`,`error`);if(i!==a)return t(n,`Las contraseñas no coinciden`,`error`);if(!p.currentUser)return r(`Sesión expirada. Por favor recarga`,`error`);this.disabled=!0,this.innerHTML=`<i class="fas fa-spinner fa-spin"></i> Actualizando...`;try{await l(p.currentUser,i),e&&(e.value=``),n&&(n.value=``),r(`Contraseña actualizada correctamente ✅`,`success`)}catch(e){console.error(e),e.code===`auth/requires-recent-login`?r(`Por seguridad, cierra sesión y vuelve a ingresar para cambiar la contraseña.`,`error`):r(`Error al actualizar contraseña`,`error`)}finally{this.disabled=!1,this.innerHTML=`<i class="fas fa-key"></i> Actualizar contraseña`}})},y=()=>{g.forEach(({type:e,wrapper:t})=>{document.removeEventListener(e,t)}),g=[]};export{y as cleanup,v as init,h as render};