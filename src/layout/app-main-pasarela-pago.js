class AppMainPasarelaPago extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-header-detalles-pago></app-header-detalles-pago>
            <section class="container-fluid bg-light m-0 border-bottom" style="height: 100%">
                <article class="container p-0">
                    <section class="row justify-content-evenly align-items-start w-100 m-0 p-0">
                         <aside class="col-3 d-xl-flex d-none m-0 me-2 p-0">
                            <app-detalles-viaje-pago></app-detalles-viaje-pago>
                         </aside>
                         <article class="col-xl-8 col p-0">
                            <app-pagination-pago></app-pagination-pago>
                         </article>
                    </secton>
                </artcile>
            </section>
            `;
  }
}
customElements.define("app-main-pasarela-pago", AppMainPasarelaPago);
