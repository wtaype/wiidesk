import{b as e}from"./widev-V_5yEuMT.js";import{g as t,s as n,u as r}from"./firebase-_L-ceeDf.js";import{n as i}from"./firebase--f4B31o7.js";var a=()=>e(`wiSmile`)||{},o=()=>`
  <div style="padding: 20px; text-align: center;">
    <h2>Lab Firestore</h2>
    <button onclick="window.enviarLab('Hola')">Hola</button>
    <button onclick="window.enviarLab('Hello')">Hello</button>
    <p>Activo: <strong id="lab-cmd">—</strong></p>
  </div>`;window.enviarLab=e=>{let{usuario:n,userId:o}=a();n&&o&&r(t(i,`lab`,n),{texto:e,userId:o},{merge:!0})};var s=()=>{let{usuario:e}=a();e&&n(t(i,`lab`,e),e=>{let t=document.getElementById(`lab-cmd`);t&&(t.textContent=e.data()?.texto||`—`)})};export{s as init,o as render};