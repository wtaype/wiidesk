import { auth, db } from '../firebase.js';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, getDocs, collection, query, where, limit } from 'firebase/firestore';
import { Mensaje } from '../widev.js';

// Gateway: intercepta Google login cuando hay ?port= en la URL
document.addEventListener('click', async (e) => {
  const btnGoogle = e.target.closest('#btnGoogle');
  const port = new URLSearchParams(window.location.search).get('port');

  if (btnGoogle && port && window.__TAURI__ === undefined) {
    e.stopPropagation();
    e.preventDefault();

    if (btnGoogle.dataset.busy === 'true') return;
    btnGoogle.dataset.busy = 'true';
    const prevHtml = btnGoogle.innerHTML;
    btnGoogle.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Conectando...';

    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(res);
      const idToken = credential?.idToken;
      const accessToken = credential?.accessToken;

      if (idToken && accessToken) {
        const regSnap = await getDocs(query(collection(db, 'registros'), where('uid', '==', res.user.uid), limit(1)));
        if (!regSnap.empty) {
          // Redirigir al servidor local (sin CORS porque es navegación directa)
          window.location.href = `http://127.0.0.1:${port}/callback?idToken=${encodeURIComponent(idToken)}&accessToken=${encodeURIComponent(accessToken)}`;
        } else {
          await signOut(auth);
          Mensaje('Primero regístrate en la web antes de conectar la aplicación de escritorio.', 'warning');
          btnGoogle.innerHTML = prevHtml;
          btnGoogle.dataset.busy = 'false';
        }
      }
    } catch (errVal) {
      if (errVal.code !== 'auth/popup-closed-by-user' && errVal.code !== 'auth/cancelled-popup-request') {
        Mensaje('Error: ' + errVal.message, 'error');
      }
      btnGoogle.innerHTML = prevHtml;
      btnGoogle.dataset.busy = 'false';
    }
  }
}, { capture: true });
