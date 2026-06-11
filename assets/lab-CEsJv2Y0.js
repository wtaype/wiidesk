import{b as e}from"./widev-V_5yEuMT.js";import{g as t,s as n,u as r}from"./firebase-_L-ceeDf.js";import{n as i}from"./firebase--f4B31o7.js";var a=()=>e(`wiSmile`)?.uid,o=()=>`
  <div style="padding: 20px; text-align: center;">
    <h2>Lab Firestore</h2>
    <button onclick="window.enviarLab('Hola')">Hola</button>
    <button onclick="window.enviarLab('Hello')">Hello</button>
    <p>Activo: <strong id="lab-cmd">—</strong></p>
  </div>`;window.enviarLab=e=>a()&&r(t(i,`lab`,a()),{comando:e,userId:a()},{merge:!0});var s=()=>a()&&n(t(i,`lab`,a()),e=>{let t=document.getElementById(`lab-cmd`);t&&(t.textContent=e.data()?.comando||`—`)});export{s as init,o as render};