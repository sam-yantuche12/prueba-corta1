import { banner } from './components/banner/bannerComponent.js';
import { banner2 } from './components/banner2/banner2Component.js';
import { busquedaComponent } from './components/BusquedaComponents/busquedaComponents.js';

// Mostrar banner 1 al cargar
const banner1 = banner();
document.body.appendChild(banner1);

const botonShopNow = banner1.querySelector('.div-boton');
botonShopNow.addEventListener('click', (e) => {
  e.preventDefault();
  banner1.remove();
  const bannerDos = banner2();
  document.body.appendChild(bannerDos);

  // Ahora escucha el botón LOG IN del banner 2 para mostrar la página de búsqueda
  const loginBtnBanner2 = bannerDos.querySelector('.btn-login');
  loginBtnBanner2.addEventListener('click', () => {
    bannerDos.remove();
    const busqueda = busquedaComponent();
    document.body.appendChild(busqueda);
  });
});
