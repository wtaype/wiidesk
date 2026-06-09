import { rutas } from '../rutas.js';

const invocarTauri = async (cmd, args = {}) => {
  if (window.__TAURI__) {
    if (window.__TAURI__.core && typeof window.__TAURI__.core.invoke === 'function') {
      return await window.__TAURI__.core.invoke(cmd, args);
    }
    if (typeof window.__TAURI__.invoke === 'function') {
      return await window.__TAURI__.invoke(cmd, args);
    }
  }
  throw new Error('Tauri no disponible');
};

const escucharEvento = async (event, handler) => {
  if (window.__TAURI__) {
    if (window.__TAURI__.event && typeof window.__TAURI__.event.listen === 'function') {
      return await window.__TAURI__.event.listen(event, handler);
    }
    if (typeof window.__TAURI__.listen === 'function') {
      return await window.__TAURI__.listen(event, handler);
    }
  }
  return () => {};
};

// ==========================================
// 1. COMPORTAMIENTO CLIENTE (TAURI WINDOWS)
// ==========================================
document.addEventListener('click', async (e) => {
  const btn = e.target.closest('.loginpc');
  if (btn) {
    const esTauri = typeof window !== 'undefined' && (
      window.__TAURI__ !== undefined || 
      window.__TAURI_INTERNALS__ !== undefined || 
      navigator.userAgent.includes('WebView2') ||
      window.origin?.includes("tauri") || 
      (typeof location !== 'undefined' && location.protocol === 'tauri:')
    );
    if (esTauri) {
      e.preventDefault();
      e.stopPropagation();
      
      try {
        const { Mensaje } = await import('../widev.js');
        Mensaje('<i class="fas fa-circle-notch fa-spin"></i> Iniciando enlace...', 'info');
        
        // Iniciar servidor local dinámico
        const port = await invocarTauri('iniciar_servidor_auth');
        console.log('--- [FRONTEND] Servidor local abierto en puerto:', port);
        
        // Escuchar el resultado
        let unsub;
        unsub = await escucharEvento('auth-completado', async (evt) => {
          const { idToken, accessToken } = evt.payload || {};
          console.log('--- [FRONTEND] Evento auth-completado recibido con tokens ---');
          if (idToken && accessToken) {
            try {
              const { signInWithCredential, GoogleAuthProvider } = await import('firebase/auth');
              const { auth, db } = await import('../firebase.js');
              const { doc, getDoc, getDocs, collection, query, where, limit } = await import('firebase/firestore');

              // Autenticar a Tauri en Firebase
              const credential = GoogleAuthProvider.credential(idToken, accessToken);
              const res = await signInWithCredential(auth, credential);
              
              if (res.user) {
                // Obtener perfil smiles
                const regSnap = await getDocs(query(collection(db, 'registros'), where('uid', '==', res.user.uid), limit(1)));
                if (!regSnap.empty) {
                  const usuario = regSnap.docs[0].data().usuario;
                  const wiSnap = await getDoc(doc(db, 'smiles', usuario));
                  if (wiSnap.exists()) {
                    const wi = wiSnap.data();
                    const { wiAuth, Mensaje } = await import('../widev.js');
                    wiAuth.login(wi, 7, ['wiSmart', 'cookiesPrivacidad']);
                    Mensaje('<i class="fa-solid fa-hand-wave"></i> Sesión iniciada con éxito', 'success');
                    setTimeout(() => { rutas.navigate('/smile'); }, 1000);
                  }
                }
              }
            } catch (err) {
              console.error('Error al iniciar sesión en Tauri:', err);
              Mensaje('Error al sincronizar cuenta de Firebase: ' + err.message, 'error');
            }
          }
          if (unsub) unsub();
        });

        // Redirigir siempre al navegador de producción oficial
        const authUrl = `https://wiidesk.web.app/login?port=${port}`;
        
        if (window.__TAURI__ && window.__TAURI__.core && typeof window.__TAURI__.core.invoke === 'function') {
          await window.__TAURI__.core.invoke('abrir_navegador', { url: authUrl });
        } else if (window.__TAURI__ && typeof window.__TAURI__.invoke === 'function') {
          await window.__TAURI__.invoke('abrir_navegador', { url: authUrl });
        } else {
          window.open(authUrl, '_blank');
        }
      } catch (err) {
        console.error('Error en loopback auth, abriendo modal:', err);
        const { abrirLogin } = await import('./login.js');
        abrirLogin('login');
      }
    } else {
      // Si no es Tauri, abrimos el modal de login
      e.preventDefault();
      const { abrirLogin } = await import('./login.js');
      abrirLogin('login');
    }
  }
}, { capture: true });

// ==========================================
// 2. COMPORTAMIENTO PASARELA (NAVEGADOR WEB)
// ==========================================
document.addEventListener('click', async (e) => {
  const btnGoogle = e.target.closest('#btnGoogle');
  const port = new URLSearchParams(window.location.search).get('port');
  
  // Interceptar clic si estamos en la web y el puerto loopback está en la URL
  if (btnGoogle && port && window.__TAURI__ === undefined) {
    e.stopPropagation(); // Detiene la propagación del evento para que login.js no lo procese
    e.preventDefault();

    if (btnGoogle.dataset.busy === 'true') return;
    btnGoogle.dataset.busy = 'true';
    const prevHtml = btnGoogle.innerHTML;
    btnGoogle.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Conectando...';

    try {
      const { auth, db } = await import('../firebase.js');
      const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
      const { doc, getDoc, getDocs, collection, query, where, limit } = await import('firebase/firestore');

      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const idToken = credential?.idToken;
      const accessToken = credential?.accessToken;

      if (idToken && accessToken) {
        // Verificar si está registrado
        const regSnap = await getDocs(query(collection(db, 'registros'), where('uid', '==', res.user.uid), limit(1)));
        if (!regSnap.empty) {
          // Enviar credenciales al puerto local de Tauri
          await fetch(`http://127.0.0.1:${port}/callback`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken, accessToken })
          });

          // Mostrar UI de éxito
          const card = document.querySelector('.wilg_card');
          if (card) {
            card.innerHTML = `
              <div class="wilg_head" style="text-align: center; padding: 4vh 2vh; background: var(--bg);">
                <div class="wilg_logo" style="width: 8vh; height: 8vh; margin: 0 auto 3vh;"><img src="/smile.avif" alt="Wiidesk"></div>
                <h2 style="color: var(--success); font-size: var(--fz_l2);"><i class="fas fa-circle-check"></i> Enlace Listo</h2>
                <p style="margin-top: 2vh; color: var(--tx2); font-size: var(--fz_m1);">La aplicación de escritorio ha sido vinculada con tu cuenta.</p>
                <p style="font-weight: 700; color: var(--mco); margin-top: 3vh; font-size: var(--fz_m1);">Ya puedes cerrar esta pestaña del navegador de forma segura.</p>
              </div>
            `;
          }
          const { Mensaje } = await import('../widev.js');
          Mensaje('¡Aplicación vinculada con éxito!', 'success');
        } else {
          // Si no está registrado, cerramos la sesión y le indicamos que se registre normalmente
          const { signOut } = await import('firebase/auth');
          await signOut(auth);
          const { Mensaje } = await import('../widev.js');
          Mensaje('Por favor, regístrate en la web primero antes de conectar la aplicación de escritorio.', 'warning');
          btnGoogle.innerHTML = prevHtml;
          btnGoogle.dataset.busy = 'false';
        }
      }
    } catch (errVal) {
      console.error(errVal);
      btnGoogle.innerHTML = prevHtml;
      btnGoogle.dataset.busy = 'false';
      const { Mensaje } = await import('../widev.js');
      Mensaje('Error de conexión con Google: ' + errVal.message, 'error');
    }
  }
}, { capture: true }); // Fase de captura activa
