import{i as e,t}from"./wii-DZzdzbZC.js";import{A as n,D as r,L as i,O as a,U as o,V as s,b as c,o as l}from"./widev-V_5yEuMT.js";import{a as u}from"./main-CvmAxXVs.js";import{c as d,f,m as p,n as m,o as h,p as g,r as _,s as v,u as y,v as b,y as x}from"./devblog-CuyuJhM1.js";if(!document.getElementById(`wiad_styles`)){let e=document.createElement(`style`);e.id=`wiad_styles`,e.textContent=`
    .wi_ad_link { max-width:300px; }
    .wi_ad_link:hover { opacity:1!important; transform:scale(1.01); }
    .wi_ad_img { margin-block:4vh 2vh; }
  `,document.head.appendChild(e)}var S=`
  <div class="lc_ad_side lc_ad_r">
    <a href="https://wtaype.me/" target="_blank" class="lc_ad_box wi_ad_link">
      <img src="https://typingwii.web.app/Img1.webp" alt="Ad Right" class="wi_ad_img" />
    </a>
  </div>
`,C=e=>`<a href="/${e.slug||e.id}" class="po_rel_card" ${s(e.resumen||e.titulo)}><div class="po_rel_img"><img src="${e.imagen}" alt="${e.imagenAlt||e.titulo}" loading="lazy"/></div><div class="po_rel_info"><span class="po_rel_cat"><i class="fas fa-paw"></i> ${e.categoria}</span><strong>${e.titulo}</strong><span class="po_rel_meta"><i class="fas fa-calendar"></i> ${b(e.actualizado||e.creado)} · <i class="fas fa-eye"></i> ${e.vistas||0} · <i class="fas fa-heart" style="color:#fe0149"></i> ${e.likes||0}</span></div></a>`,w=(e,t,n=`po_fade po_visible`)=>e||t?`
    <div class="po_pn_box ${n}" style="--d:.4s">
      ${e?`<a href="/${e.slug||e.id}" class="po_pn_card pn_prev" ${s(`Anterior`)}><div class="po_pn_img"><img src="${e.imagen}" loading="lazy"/></div><div class="po_pn_info"><span class="po_pn_lb"><i class="fas fa-arrow-left"></i> Anterior</span><strong class="po_pn_tit">${e.titulo}</strong></div></a>`:`<div></div>`}
      ${t?`<a href="/${t.slug||t.id}" class="po_pn_card pn_next" ${s(`Siguiente`)}><div class="po_pn_info"><span class="po_pn_lb">Siguiente <i class="fas fa-arrow-right"></i></span><strong class="po_pn_tit">${t.titulo}</strong></div><div class="po_pn_img"><img src="${t.imagen}" loading="lazy"/></div></a>`:`<div></div>`}
    </div>`:``,T=(r,i,a,o,c)=>{let l=n.user?.usuario,u=c?`po_fade po_visible`:`po_fade`,d=i!==null&&a!==null,f=i||[],p=a||[],m=f[0]||p[0],h=f[1]||p[1],g=d?w(m,h,u):`<div id="po_nav_container"></div>`;return`
    <div class="po_progress_bar" id="po_progress"></div>
    <div class="po_wrap"><div class="po_layout">
      <div class="po_col_main"><div class="po_content">
        <div class="po_hero ${u}" style="--d:0s">
          <img src="${r.imagenTop||r.imagen}" alt="${r.imagenAlt||r.titulo}" class="po_hero_img" loading="eager"/>
          <div class="po_hero_over">
            <a href="/blog" class="po_back" ${s(`Volver`)}><i class="fas fa-arrow-left"></i> Blog</a>
            <div class="po_hero_badges">
              <span class="po_cat_badge" ${s(r.categoria)}><i class="fas fa-paw"></i> ${r.categoria}</span>
              ${r.pin?`<span class="po_dest_badge" ${s(`Destacada`)}><i class="fas fa-thumbtack"></i> Pin</span>`:``}
              <button class="po_like_btn po_like_sync ${localStorage.getItem(`wi_like_`+o)?`active`:``}" data-slug="${o}" ${s(`Me encanta`)} style="border-color:rgba(255,255,255,0.2);background:rgba(0,0,0,0.4);color:#fff;padding:.6vh 1.2vh;font-size:var(--fz_s4)"><i class="fas fa-heart"></i> <span class="po_likes_count_text">${r.likes||0}</span></button>
            </div>
          </div>
        </div>
        <header class="po_header ${u}" style="--d:.1s">
          <h1 class="po_titulo">${r.titulo}</h1>
          <p class="po_resumen">${r.resumen}</p>
          <div class="po_meta">
            <span ${s(`Autor`)}><i class="fas fa-user-pen"></i> ${r.autor}</span>
            <span ${s(`Fecha`)}><i class="fas fa-calendar"></i> ${b(r.creado,!0)}</span>
            <span ${s(`Lectura`)}><i class="fas fa-clock"></i> ${r.tiempoLectura}</span>
            <span ${s(`Vistas`)}><i class="fas fa-eye"></i> ${(r.vistas||0)+1}</span>
            <button class="po_like_btn po_like_sync ${localStorage.getItem(`wi_like_`+o)?`active`:``}" data-slug="${o}" ${s(`Me encanta`)}><i class="fas fa-heart"></i> <span class="po_likes_count_text">${r.likes||0}</span></button>
            ${c?`<span class="po_cache_badge" ${s(`Cache ⚡`)}><i class="fas fa-bolt"></i> Local</span>`:``}
          </div>
        </header>
        <div class="po_contenido ${u}" style="--d:.2s">${r.contenido}</div>
        ${g}
        <div class="po_share ${u}" style="--d:.45s"><span><i class="fas fa-share-nodes"></i> Comparte</span>
          <div class="po_share_btns">
            <button class="po_like_btn po_like_sync ${localStorage.getItem(`wi_like_`+o)?`active`:``}" data-slug="${o}" ${s(`Me encanta`)}><i class="fas fa-heart"></i> <span class="po_likes_count_text">${r.likes||0}</span></button>
            ${x(r.titulo)}<button class="po_share_btn po_copy" style="--sc:var(--mco)" ${s(`Copiar`)}><i class="fas fa-link"></i></button>
          </div>
        </div>
      </div>
      <div id="wi_comments" class="po_comments ${u}" style="--d:.55s"><div class="po_comments_title"><i class="fas fa-comments"></i> Comentarios</div><div id="disqus_thread"></div></div>
    </div>
    <aside class="po_sidebar">
      <div class="po_side_card ${u}" style="--d:.15s">
        <div class="po_side_title"><i class="fas fa-user-pen"></i> Autor</div>
        <div class="po_autor_box"><div class="po_autor_av"><img src="/wiidesk/smile.avif" alt="${r.autor}"/></div><div class="po_autor_info"><strong>${r.autor}</strong><span>${t} <i class="fas ${e}"></i></span></div></div>
        ${l?`<div class="po_admin_actions" style="margin-top:.8vh"><a href="/nuevo?edit=${o}" class="po_admin_btn_edit" ${s(`Editar`)}><i class="fas fa-pen"></i> Editar</a><button id="po_refresh" class="po_admin_btn_refresh" data-slug="${o}" data-cat="${r.categoria}" ${s(`Recargar`)}><i class="fas fa-rotate"></i></button></div>`:``}
      </div>
      <div id="po_ultimas_container">${d?p.length?`<div class="po_side_card ${u}" style="--d:.2s"><div class="po_side_title"><i class="fas fa-clock"></i> Últimas historias</div><div class="po_relacionados" data-showi="100">${p.map(C).join(``)}</div></div>`:``:`<div class="po_side_card po_fade po_visible" style="--d:.2s"><div class="po_side_title"><i class="fas fa-clock"></i> Últimas historias</div><div class="po_sk_side shimmer" style="height:120px"></div></div>`}</div>
      <div id="po_rels_container">${d?f.length?`<div class="po_side_card ${u}" style="--d:.25s"><div class="po_side_title"><i class="fas fa-heart"></i> Más historias de ${r.categoria}</div><div class="po_relacionados" data-showi="100">${f.map(C).join(``)}</div></div>`:``:`<div class="po_side_card po_fade po_visible" style="--d:.25s"><div class="po_side_title"><i class="fas fa-heart"></i> Más historias de ${r.categoria}</div><div class="po_sk_side shimmer" style="height:120px"></div></div>`}</div>
    
      <!-- AdSense Sticky Sidebar 300x600 con adRight Fallback -->
      <div class="po_ad_sticky ${u}" style="--d:.3s; position: sticky; top: 8vh; margin-top: 2vh; text-align:center; min-height:600px;">
         <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1362457560630815" data-ad-slot="1800353788" data-ad-format="auto" data-full-width-responsive="true"></ins>
         <div class="wi_ad_fallback">${S}</div>
      </div>
    </aside>
  </div></div>`},E=!1,D=e=>{let t=e&&c(`wi_post_${e}`);if(t)return E=!0,T(t,c(`wi_mas_${t.categoria}`)||[],c(`wi_sidebar_posts`)||[],e,!0);E=!1;let n=e&&f(e);return n?`
    <div class="po_wrap"><div class="po_layout"><div class="po_col_main"><div class="po_content">
      <div class="po_hero po_fade po_visible" style="--d:0s"><img src="${n.imagenTop||n.imagen}" alt="${n.imagenAlt||n.titulo}" class="po_hero_img" loading="eager"/><div class="po_hero_over"><a href="/blog" class="po_back" ${s(`Volver`)}><i class="fas fa-arrow-left"></i> Blog</a><div class="po_hero_badges"><span class="po_cat_badge"><i class="fas fa-paw"></i> ${n.categoria}</span></div></div></div>
      <header class="po_header po_fade po_visible" style="--d:0s"><h1 class="po_titulo">${n.titulo}</h1><p class="po_resumen">${n.resumen}</p></header>
      <div class="po_contenido po_fade" style="--d:.1s; min-height:98vh;"><div class="po_sk_body">${`<div class="po_sk_p shimmer"></div>`.repeat(6)}</div></div>
    </div></div><aside class="po_sidebar" style="min-height:98vh;">${`<div class="po_sk_side shimmer"></div>`.repeat(3)}</aside></div></div>`:`<div class="po_wrap"><div class="po_layout"><div class="po_col_main"><div class="po_content"><div class="po_sk_img shimmer"></div><div class="po_sk_body" style="min-height:98vh;"><div class="po_sk_cat shimmer"></div><div class="po_sk_tit shimmer"></div><div class="po_sk_meta shimmer"></div>${`<div class="po_sk_p shimmer"></div>`.repeat(5)}</div></div></div><aside class="po_sidebar" style="min-height:98vh;">${`<div class="po_sk_side shimmer"></div>`.repeat(3)}</aside></div></div>`},O,k,A=async(e,n=!1)=>{if(e){E&&!n&&(d(`po_fade`),a(),j(),M());try{let o=await y(e,n),s=document.getElementById(`wimain`);if(!o?.data?.activo){s&&(s.innerHTML=`<div class="po_err dpvc"><i class="fas fa-paw"></i><h2>Historia no encontrada</h2><p>No existe o no está disponible 🐾</p><a href="/blog" class="po_back_btn"><i class="fas fa-arrow-left"></i> Ver historias</a></div>`);return}let{data:c,fromCache:l}=o;!l&&!n&&_(e),r({title:c.titulo,desc:c.resumen,keywords:c.keywords,img:c.imagenTop||c.imagen,path:`/${e}`,type:`Article`,datePublished:c.creado}),!E||n?(s&&(s.innerHTML=T(c,null,null,e,l)),d(`po_fade`),a(),j(),M()):l||document.querySelectorAll(`.po_cache_badge`).forEach(e=>e.remove());let u=(e,t)=>{let n=document.getElementById(`po_nav_container`);n&&(n.innerHTML=w(e[0]||t[0],e[1]||t[1]));let r=document.getElementById(`po_ultimas_container`);r&&(r.innerHTML=t.length?`<div class="po_side_card po_fade po_visible" style="--d:0s"><div class="po_side_title"><i class="fas fa-clock"></i> Últimas historias</div><div class="po_relacionados" data-showi="100">${t.map(C).join(``)}</div></div>`:``);let i=document.getElementById(`po_rels_container`);i&&(i.innerHTML=e.length?`<div class="po_side_card po_fade po_visible" style="--d:0s"><div class="po_side_title"><i class="fas fa-heart"></i> Más historias de ${c.categoria}</div><div class="po_relacionados" data-showi="100">${e.map(C).join(``)}</div></div>`:``),a()};Promise.all([g(e,c.categoria,n),p(e,n)]).then(([e,t])=>{u(e||[],t||[])});let f=function(){this.page.url=`https://wiihope.com/${e}`,this.page.identifier=e,this.page.title=c.titulo};window.DISQUS?window.DISQUS.reset({reload:!0,config:f}):(window.disqus_config=f,i({disqus:[async()=>{let e=document.createElement(`script`);e.src=`https://superwii.disqus.com/embed.js`,e.setAttribute(`data-timestamp`,(+new Date).toString()),document.body.appendChild(e)}]})),console.log(`🐾 ${t} Post OK`),window.__WIREADY__=!0}catch(e){console.error(`[post]`,e),l(`Error al cargar`,`error`)}}};function j(){if(document.querySelector(`.po_toc_box`))return;let e=document.querySelector(`.po_contenido`);if(!e)return;let t=e.querySelectorAll(`h2,h3`);if(!t.length)return;let n=`<div class="po_toc_box po_fade" style="--d:.15s"><div class="po_toc_title"><i class="fas fa-list"></i> En este artículo</div><ul class="po_toc">`;t.forEach((e,t)=>{let r=`po_h_`+t;e.setAttribute(`id`,r),e.style.scrollMarginTop=`7vh`,n+=`<li style="margin-left:${e.tagName.toLowerCase()===`h3`?`1.5vh`:`0`}"><a href="#${r}" class="po_toc_link">${e.textContent}</a></li>`}),n+=`</ul></div>`,e.insertAdjacentHTML(`beforebegin`,n)}function M(){O&&window.removeEventListener(`scroll`,O),O=()=>{let e=document.getElementById(`po_progress`);if(e){let t=window.scrollY||document.documentElement.scrollTop,n=document.documentElement.scrollHeight,r=window.innerHeight,i=t/Math.max(n-r,1)*100;e.style.width=i+`%`}},window.addEventListener(`scroll`,O)}k=async e=>{if(e.target.closest(`.po_copy, .po_copy2`)){o(location.href,`.po_copy`,`¡Enlace copiado! 🔗`);return}let t=e.target.closest(`.po_rel_card`);if(t){e.preventDefault();let n=t.getAttribute(`href`);n&&u(()=>import(`./main-CvmAxXVs.js`).then(e=>e.i).then(e=>e.rutas.navigate(n)),[]);return}let n=e.target.closest(`.po_like_sync`);if(n){let e=n.getAttribute(`data-slug`);if(localStorage.getItem(`wi_like_`+e))return;localStorage.setItem(`wi_like_`+e,`1`),document.querySelectorAll(`.po_like_sync`).forEach(e=>e.classList.add(`active`));let t=document.querySelector(`.po_likes_count_text`),r=t&&parseInt(t.textContent,10)||0;document.querySelectorAll(`.po_likes_count_text`).forEach(e=>{e.textContent=(r+1).toString()}),m(e);return}let r=e.target.closest(`.po_yt_btn`);if(r){let e=r.getAttribute(`data-yt`),t=document.getElementById(`wi_yt_modal`);if(!t){let e=document.createElement(`div`);e.id=`wi_yt_modal`,e.className=`wiModal`,e.innerHTML=`
        <div class="modalBody" style="background:#000; padding:0; border-radius:1.5vh; overflow:hidden; width:95%; max-width:800px; border:1px solid rgba(255,255,255,.1);">
          <button class="modalX wi_yt_close" style="color:#fff; text-shadow:0 0 8px #000; right:1.5vh; top:1vh; font-size:2.2rem; z-index:10;">&times;</button>
          <div id="wi_yt_player" style="width:100%; aspect-ratio:16/9; background:#000;"></div>
        </div>`,document.body.appendChild(e),t=e,t.addEventListener(`click`,function(e){if(e.target===this){let e=document.querySelector(`.wi_yt_close`);e&&e.click()}})}let n=document.getElementById(`wi_yt_player`);n&&(n.innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${e}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);let{abrirModal:i}=await u(async()=>{let{abrirModal:e}=await import(`./widev-V_5yEuMT.js`).then(e=>e.W);return{abrirModal:e}},[]);i(`wi_yt_modal`);return}if(e.target.closest(`.wi_yt_close`)){let{cerrarModal:e}=await u(async()=>{let{cerrarModal:e}=await import(`./widev-V_5yEuMT.js`).then(e=>e.W);return{cerrarModal:e}},[]);e(`wi_yt_modal`),setTimeout(()=>{let e=document.getElementById(`wi_yt_player`);e&&(e.innerHTML=``)},300);return}let i=e.target.closest(`#po_refresh`);if(i){i.innerHTML,i.innerHTML=`<i class="fas fa-spinner fa-spin"></i>`,i.disabled=!0;let e=i.getAttribute(`data-slug`),t=i.getAttribute(`data-cat`);h(e),v(t),await A(e,!0);return}},document.addEventListener(`click`,k);var N=()=>{O&&window.removeEventListener(`scroll`,O),k&&document.removeEventListener(`click`,k)};export{N as cleanup,A as init,D as render};