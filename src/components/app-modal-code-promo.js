class AppCodePromo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- button para mostrar el modal de código de promoción -->
            <button
                type="button"
                class="__button__promo__code btn btn-outline-primary rounded-5 fw-semibold"
                id="button-Show-Promo-Code"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                aria-label="Ingresar un código de promoción"
            >
                Código de promoción
            </button>

            <!-- modal para el código de promoción -->
            
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <header class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">código de promoción</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </header>
                        <section class="modal-body">
                            <p>ingresa el texto solo si cuentas con un código de promócion</p>
                        </section>
                        <footer class="modal-footer d-flex justify-content-between">
                            <input
                            type="text"
                            class="form-control"
                            id="promo-code"
                            placeholder="Ingresa tu código de promoción"
                            aria-label="Ingresa tu código de promoción"
                            />
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="aplicar cpdigo de promócion">
                            Aplicar
                            </button>
                        </footer>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("app-code-promo", AppCodePromo);