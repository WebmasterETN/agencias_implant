class AppReportMov extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <sectcion class="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3">
                <h2 class="w-100 text-center">Venta de boletos para agencias</h2>
                <h3 class="text-center">REPORTE DE MOVIMIENTOS<h3>
                <article class="d-flex justify-content-center align-items-center w-100 h-100 p-0 m-0">
                    <form  class"row justify-content-center align-items-center w-100 gap-3 p-0" id="form-report-mov" novalidate>
                        <fieldset class="form-report-mov col-xl col-12 d-flex flex-column p-0">
                            <label for="salida">fecha inicial</label>
                            <input type="date" id="date-initial" name="fecha de inicio" class="form-control form-control-lg" required>
                        </fieldset>
                        <fieldset class="form-report-mov col-xl col-12 d-flex flex-column p-0">
                            <label for="regreso">fecha inicial</label>
                            <input type="date" id="date-initial" name="fecha de inicio" class="form-control form-control-lg" required>
                        </fieldset>
                        <fieldset class="form-report-mov col-xl col-12 d-flex flex-column p-0">
                            <button type="submit" class="btn btn-primary col-xl col-12">Buscar</button>
                        </fieldset>
                    </form>
                </article>
            </sectcion>
        `;
    }
}
customElements.define("app-report-mov", AppReportMov);