import { getls } from '../widev.js';
import { db } from '../firebase.js'; import { doc, setDoc, onSnapshot } from 'firebase/firestore';
const uid = () => getls('wiSmile')?.uid;
export const render = () => `
  <div style="padding: 20px; text-align: center;">
    <h2>Lab Firestore</h2>
    <button onclick="window.enviarLab('Hola')">Hola</button>
    <button onclick="window.enviarLab('Hello')">Hello</button>
    <p>Activo: <strong id="lab-cmd">—</strong></p>
  </div>`;
window.enviarLab = c => uid() && setDoc(doc(db, 'lab', uid()), { comando: c, userId: uid() }, { merge: true });
export const init = () => uid() && onSnapshot(doc(db, 'lab', uid()), s => {
  const el = document.getElementById('lab-cmd');
  if (el) el.textContent = s.data()?.comando || '—';
});
