class AppFooterVentaBoletos extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <footer class="footer bg-light w-100">
        <nav class="navbar navbar-expand-lg navbar-light d-flex flex-column w-100 justify-content-center align-items-center gap-3">
          <ul class="navbar-nav w-100 justify-content-center align-items-center ">
            <li class="nav-item">
              <a class="nav-link" href="https://etn.com.mx/quienes-somos.html">¿Quienes somos?</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://etn.com.mx/preguntas-frecuentes.html">Preguntas frecuentes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://etn.com.mx/certificaciones.html">Certificados</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://etn.com.mx/bolsa-de-trabajo-etn-turistar.html">Bolsa de trabajo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://etn.com.mx/aviso-privacidad.html">Aviso de privacidad</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://etn.com.mx/terminos-condiciones.html">Términos y condiciones</a>
            </li>
          </ul>
          <ul class="list-inline d-flex justify-content-center align-items-center w-100 gap-3 text-center">
            <li class="list-inline-item d-flex justify-content-center align-items-center">
              <a href="https://www.facebook.com/etnturistar" class="text-decoration-none">
                <i class="icon-fb text-black fs-3"></i>
              </a>
            </li>
            <li class="list-inline-item d-flex justify-content-center align-items-center">
              <a href="https://twitter.com/ETNTURISTAR" class="text-decoration-none">
                <i class="icon-x text-black fs-3"></i>
              </a>
            </li>
            <li class="list-inline-item d-flex justify-content-center align-items-center">
              <a href="https://instagram.com/etn_turistar" class="text-decoration-none">
                <i class="icon-ig text-black fs-3"></i>
              </a>
            </li>
            <li class="list-inline-item d-flex justify-content-center align-items-center">
              <a href="https://www.youtube.com/ETNTuristarLujo" class="text-decoration-none">
                <i class="icon-yt text-black fs-3"></i>
              </a>
            </li>
            <li class="list-inline-item d-flex justify-content-center align-items-center">
              <a id="phoneTypeDos" class="phone-lada text-black tel text-decoration-none d-flex align-items-center gap-2" href="wtai://wp/mc;8008000386">
                <i class="icon-phone text-black fs-3"></i>
                <span class="telefono fs-3">| 800 8000 386</span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    `;
  }
}

customElements.define("app-footer-venta-boletos", AppFooterVentaBoletos);