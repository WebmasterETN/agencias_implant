class AppChangeTicket extends HTMLElement {
    connectedCalback() {
        this.innerHTML = `
            <section class="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3">
                <h2 class="w-100 text-center">Venta de boletos para agencias</h2>
                <h3 class="w-100 text-center">Intercambio de Boletos</h3>
                <article class="d-flex justify-content-center align-items-center w-100 h-100 p-0 m-0">
                        <form  class"row justify-content-center align-items-center w-100 gap-3 p-0" id="form-report-mov" novalidate>
                            <fieldset class="form-report-mov col-xl col-12 d-flex flex-column p-0">
                                <label for="salida">Número de operación</label>
                                <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" required>
                            </fieldset>
                            <fieldset class="form-report-mov col-xl col-12 d-flex flex-column p-0">
                                <button type="submit" class="btn btn-primary col-xl col-12">Buscar</button>
                            </fieldset>
                        </form>
                </article>
            </section>
        `;
    }
}
customElements.define("app-change-ticktes", AppChangeTicket);