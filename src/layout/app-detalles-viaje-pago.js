class AppDetallesViajePago extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <article class="d-flex flex-column align-items-start justify-content-center w-100 gap-3 p-0">
              <header class="d-flex align-items-center justify-content-start w-100 gap-2">
                <p class="m-0 p-0">Regresar a</p>
                <button type="button" class="btn btn-regresar p-1" style="width: 6rem;">
                  Horarios
                </button>
              </header>
              <section
                class="d-flex flex-xl-row flex-column justify-content-xl-between justify-content-center align-items-center border w-100 p-2 fondo-card"
              >
                <p class="m-0 p-0">Completa tu compra en:</p>
                <span class="tiempo">13:31</span>
              </section>
              <section class="d-flex flex-column align-items-start justify-content-center w-100 gap-3 p-0">
                <p class="m-0 p-0">Detalles de tu viaje</p>
                <article class="card">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <div class="row">
                        <label class="details-tittle">Viaje de ida</label>
                        <div class="list-group-item__main__section__item__logo">
                           <img
                            src="src/assets/img/logos/compañia/logo.svg"
                            class="main__section__item__logo__img"
                            alt="logo de amealcenses"
                            style="max-width:170px; width: 100%;"
                          />
                        </div>
                        <label class="details-route"
                          >Guadalajara - Ciudad de Mexico</label
                        >
                        <label class="details-date"
                          >15 Abr 2025 01:00 P:M</label
                        >
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="row">
                        <label class="details-tittle">Viaje de regreso</label>
                        <div class="list-group-item__main__section__item__logo">
                          <img
                            src="src/assets/img/logos/compañia/logo.svg"
                            class="main__section__item__logo__img"
                            alt="logo de amealcenses"
                            style="max-width:170px; width: 100%;"
                          />
                        </div>
                        <label class="details-route"
                          >Guadalajara - Ciudad de Mexico</label
                        >
                        <label class="details-date"
                          >24 Abr 2025 10:30 P:M</label
                        >
                      </div>
                    </li>
                  </ul>
                  <footer class="card-footer d-flex justify-content-center align-items-center">
                    <button type="button" class="main__section__item__details__link border-0 bg-transparent m-0 p-0 text-decoration-underline" data-bs-toggle="modal" data-bs-target="#details-trip-payment-modal" aria-label="Ver los detalles del viaje">
                        ver detalles
                    </button>
                  </footer>
                </article>
              </section>
              <footer class="row">
                <label class="suport">Atencion a clientes</label>
                <a
                  href="#contact"
                  class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-personalizada"
                >
                  800 622 22 22
                </a>
              </footer>
            </article>
          `;
          // logica para el boton de regresar
          const backButton = this.querySelector('.btn-regresar');

          // 2. Añadir el event listener
          if (backButton) {
            backButton.addEventListener('click', () => {
              // 3. Disparar un evento personalizado para indicar la navegación
              this.dispatchEvent(new CustomEvent('navigate-to-select-time', {
                bubbles: true, // Permite que el evento suba por el árbol DOM
                composed: true // Permite que el evento cruce los límites del Shadow DOM (si aplica)
              }));
              console.log('Evento navigate-to-select-time disparado'); // Para depuración
            });
          } else {
            console.error('Botón .btn-regresar no encontrado en AppDetallesViajePago.');
          }
  }
}
customElements.define("app-detalles-viaje-pago", AppDetallesViajePago);
