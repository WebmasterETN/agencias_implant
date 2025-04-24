import "../components/app-modal-details-payment.js";

class AppHeadeDetallesPago extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                <header class="container-fluid border-bottom fondo-card mt-xl-2 mt-5 w-100">
                    <nav class="container">
                        <ul class="d-flex flex-wrap justify-content-between align-items-center w-100 text-details list-unstyled">
                            <li class="p-2">
                                <p class="titulo__route m-0 p-0">
                                    <span class="icon-filled-pointer"></span>
                                    Guadalajara - Ciudad de México
                                </p>
                            </li>
                            <li class="">
                                <div class="d-flex flex-xl-row flex-column align-items-center gap-1">
                                    <button class="btn btn-light d-flex align-items-center m-0">
                                        <span class="icon-user"></span>
                                        1
                                    </button>
                                    <span class="">Viaje redondo</span>
                                </div>
                            </li>
                            <li class="text-end">
                                <button type="button" class="btn btn-light shadow" data-bs-toggle="modal" data-bs-target="#details-trip-payment-modal" aria-label="Ver los detalles del viaje">
                                    Detalles
                                </button>
                                <app-modal-details-payment></app-modal-details-payment>
                            </li>
                        </ul>
                    </nav>
                </header>
              `;
  }
}
customElements.define("app-header-detalles-pago", AppHeadeDetallesPago);
