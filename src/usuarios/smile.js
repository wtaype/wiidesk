import './smile.css';
import { getls } from '../widev.js';
import { app } from '../wii.js';
import { rutas } from '../rutas.js';

const wiUser = () => getls('wiSmile') || null;

export const render = () => {
  const user = wiUser();
  if (!user) { location.replace('/'); return ''; }

  const firstName = user.nombre || user.usuario || 'amigo';

  return `
    <div class="smw_dash" style="padding: 4vh; color: var(--tx1);">
      <header class="smw_hero" style="position:relative; margin-bottom: 4vh;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: var(--tx1); margin-bottom:1vh;">¡Hola, ${firstName}!</h1>
        <p style="color: var(--tx3); font-size: var(--fz_m1);">Consola de Control de Equipos de ${app}</p>
      </header>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 3vh; margin-top: 4vh;">
        
        <!-- PC 1 Mock (Online) -->
        <div style="background: var(--wb); border: 1px solid var(--brd); border-radius: 12px; padding: 3vh; position: relative; display: flex; flex-direction: column; gap: 2vh;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 2vh;">
              <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, var(--mco), var(--Mora)); display: flex; align-items: center; justify-content: center; color: #fff;"><i class="fas fa-laptop" style="font-size: 1.5rem;"></i></div>
              <div>
                <strong style="display: block; font-size: var(--fz_m2);">Mi Laptop Oficina</strong>
                <span style="font-size: var(--fz_s3); color: var(--success); font-weight: 600;"><i class="fas fa-circle" style="font-size: 0.6rem;"></i> En Línea</span>
              </div>
            </div>
          </div>
          <p style="font-size: var(--fz_s2); color: var(--tx3);">Última actividad: Hace un momento. Habilitado para Wake-on-LAN.</p>
          <div style="display: flex; gap: 1.5vh; margin-top: 1vh;">
            <button class="nv_item" data-page="pc2pc" style="flex: 1; padding: 1.2vh; border: none; background: var(--mco); color: var(--bg); font-weight: 800; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 1vh;"><i class="fas fa-expand"></i> Conectar</button>
            <button style="padding: 1.2vh; border: 1px solid var(--brd); background: transparent; color: var(--tx2); border-radius: 6px; cursor: pointer;" title="Acciones"><i class="fas fa-ellipsis-v"></i></button>
          </div>
        </div>

        <!-- PC 2 Mock (Offline) -->
        <div style="background: var(--wb); border: 1px solid var(--brd); border-radius: 12px; padding: 3vh; position: relative; display: flex; flex-direction: column; gap: 2vh; opacity: 0.75;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 2vh;">
              <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--bg5); display: flex; align-items: center; justify-content: center; color: var(--tx2);"><i class="fas fa-desktop" style="font-size: 1.5rem;"></i></div>
              <div>
                <strong style="display: block; font-size: var(--fz_m2);">PC Casa Familiar</strong>
                <span style="font-size: var(--fz_s3); color: var(--tx3); font-weight: 600;"><i class="fas fa-circle" style="font-size: 0.6rem;"></i> Desconectado</span>
              </div>
            </div>
          </div>
          <p style="font-size: var(--fz_s2); color: var(--tx3);">Última actividad: Ayer a las 18:30. Soporta Wake-on-LAN.</p>
          <div style="display: flex; gap: 1.5vh; margin-top: 1vh;">
            <button style="flex: 1; padding: 1.2vh; border: none; background: var(--bg2); color: var(--tx3); font-weight: 800; border-radius: 6px; cursor: not-allowed; display: flex; align-items: center; justify-content: center; gap: 1vh;" disabled><i class="fas fa-power-off"></i> Wake-on-LAN</button>
            <button style="padding: 1.2vh; border: 1px solid var(--brd); background: transparent; color: var(--tx2); border-radius: 6px; cursor: pointer;" title="Acciones"><i class="fas fa-ellipsis-v"></i></button>
          </div>
        </div>

      </div>

      <!-- Quick Connections Shortcuts -->
      <h3 style="margin-top: 6vh; margin-bottom: 2vh; font-weight:700;">Accesos Directos</h3>
      <nav style="display: flex; flex-wrap: wrap; gap: 2vh;">
        <a href="/pc2pc" class="nv_item" data-page="pc2pc" style="display:flex; align-items:center; gap: 1.5vh; background: var(--wb); border: 1px solid var(--brd); padding: 2vh 3vh; border-radius: 8px; text-decoration: none; color: var(--tx1);">
          <i class="fas fa-laptop" style="color: var(--mco);"></i> <strong>PC a PC</strong>
        </a>
        <a href="/movil2pc" class="nv_item" data-page="movil2pc" style="display:flex; align-items:center; gap: 1.5vh; background: var(--wb); border: 1px solid var(--brd); padding: 2vh 3vh; border-radius: 8px; text-decoration: none; color: var(--tx1);">
          <i class="fas fa-mobile-alt" style="color: var(--Mora);"></i> <strong>Móvil a PC</strong>
        </a>
        <a href="/pc2movil" class="nv_item" data-page="pc2movil" style="display:flex; align-items:center; gap: 1.5vh; background: var(--wb); border: 1px solid var(--brd); padding: 2vh 3vh; border-radius: 8px; text-decoration: none; color: var(--tx1);">
          <i class="fas fa-mobile-screen" style="color: var(--Cielo);"></i> <strong>PC a Móvil</strong>
        </a>
        <a href="/pc2web" class="nv_item" data-page="pc2web" style="display:flex; align-items:center; gap: 1.5vh; background: var(--wb); border: 1px solid var(--brd); padding: 2vh 3vh; border-radius: 8px; text-decoration: none; color: var(--tx1);">
          <i class="fas fa-share-nodes" style="color: var(--Oro);"></i> <strong>PC a Web</strong>
        </a>
      </nav>
    </div>
  `;
};

const handleCardClick = (e) => {
  const cardLink = e.target.closest('.nv_item');
  if (cardLink && cardLink.getAttribute('data-page')) {
    e.preventDefault();
    rutas.navigate('/' + cardLink.getAttribute('data-page'));
  }
};

export const init = async () => {
  const user = wiUser();
  if (!user) return setTimeout(() => rutas.navigate('/login'), 100);

  document.addEventListener('click', handleCardClick);
  console.log(`🏜️ Dashboard de ${app} cargado.`);
  window.__WIREADY__ = true;
};

export const cleanup = () => {
  document.removeEventListener('click', handleCardClick);
};
