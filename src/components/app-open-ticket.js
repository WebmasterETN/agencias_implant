class AppOpenTicket extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section class="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3">
                <h2 class="w-100 text-center">Venta de boletos para agencias</h2>
                <article class="d-flex justify-content-center align-items-center w-100 h-100 p-0 m-0">
                    <form class="row justify-content-center align-items-center w-100">
                        <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                            <label for="origen">Origen</label>
                            <select id="origen" name="origen" class="form-select form-select-lg" aria-label="Default select example" required>
                                <option value="">Selecciona un origen</option>
                                <option value="viaje1">4 Caminos Mich</option>
                                <option value="viaje2">Acapulco</option>
                                <option value="viaje3">Acapulco diamante</option>
                            </select>
                        </fieldset>
                        <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                            <label for="destino">Destino</label>
                            <select id="destino" name="destino" class="form-select form-select-lg" aria-label="Default select example" required>
                                <option value="">Selecciona un destino</option>
                                <option value="viaje1">Aereopuerto Guadalajara</option>
                                <option value="viaje2">México norte</option>
                                <option value="viaje3">México póniente</option>
                            </select>
                        </fieldset>
                        <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                            <label for="destino">Selecciona Servicio</label>
                            <select id="destino" name="destino" class="form-select form-select-lg" aria-label="Default select example" required>
                                <option value="">Selecciona un servicio</option>
                                <option value="viaje1">Dos pisos ETN</option>
                                <option value="viaje1">Dos pisos ETN</option>
                                <option value="viaje1">Dos pisos ETN</option>
                            </select>
                        </fieldset>

                        <fieldset class="col-12 w-100 d-flex justify-content-start align-items-center">
                            <fieldset class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                <label class="form-check-label" for="exampleRadios1">
                                    Default radio
                                </label>
                            </fieldset>
                            <fieldset class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                <label class="form-check-label" for="exampleRadios1">
                                    Default radio
                                </label>
                            </fieldset>
                        </fieldset>

                        <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                            <label for="origen">Número de pasajeros adultos</label>
                            <select id="origen" name="origen" class="form-select form-select-lg" aria-label="Default select example" required>
                                <option value="">Selecciona la cantidad</option>
                                <option value="viaje1">01</option>
                                <option value="viaje2">02</option>
                                <option value="viaje3">03</option>
                                <option value="viaje1">04</option>
                                <option value="viaje2">05</option>
                                <option value="viaje3">06</option>
                                <option value="viaje1">07</option>
                                <option value="viaje2">08</option>
                                <option value="viaje3">09</option>
                                <option value="viaje3">10</option>
                            </select>
                        </fieldset>
                        <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                            <label for="destino">Número de pasajeros menores</label>
                            <select id="destino" name="destino" class="form-select form-select-lg" aria-label="Default select example" required>
                                <option value="">Selecciona la cantidad</option>
                                <option value="viaje1">01</option>
                                <option value="viaje2">02</option>
                                <option value="viaje3">03</option>
                            </select>
                        </fieldset>
                        <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                            <label for="destino">Número de pasajeros INAPAM</label>
                            <select id="destino" name="destino" class="form-select form-select-lg" aria-label="Default select example" required>
                                <option value="">Selecciona la cantidad</option>
                                <option value="viaje1">01</option>
                                <option value="viaje2">02</option>
                                <option value="viaje3">03</option>
                            </select>
                        </fieldset>
                        <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                            <label for="salida">Salida</label>
                            <input type="date" id="salida" name="salida" class="form-control form-control-lg" required>
                        </fieldset>
                        <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                            <label for="regreso">Regreso (OP)</label>
                            <input type="date" id="regreso" name="regreso" class="form-control form-control-lg">
                        </fieldset>
                        <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                            <button type="submit" class="btn btn-primary col-xl col-12">Buscar</button>
                        </fieldset>

                    </form>
                </article>
            </section>
        `;
  }
}

customElements.define("app-open-ticket", AppOpenTicket);
