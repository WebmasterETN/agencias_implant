class AppOpenTicket extends HTMLElement {
  // Corregido: HTMLElement
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.addFormSubmitListener();
  }

  render() {
    this.innerHTML = `
            <section class="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3">
                <h2 class="w-100 text-center">Venta de boletos para agencias</h2>
                <h3 class="w-100 text-center mb-4">Abrir Boleto</h3> 
                <article class="d-flex justify-content-center align-items-center w-100 p-0 m-0">
                    <form class="row justify-content-center align-items-end w-100 gap-3 p-0" id="form-open-ticket" novalidate>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="origen" class="form-label">Origen</label>
                            <select id="origen" name="origen" class="form-select form-select-lg" required>
                                <option value="" selected>Selecciona un origen</option> 
                                <option value="4 Caminos Mich">4 Caminos Mich</option>
                                <option value="Acapulco">Acapulco</option>
                                <option value="Acapulco diamante">Acapulco diamante</option>
                            </select>
                        </div>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="destino" class="form-label">Destino</label>
                            <select id="destino" name="destino" class="form-select form-select-lg" required>
                                <option value="" selected>Selecciona un destino</option> 
                                <option value="Aereopuerto Guadalajara">Aereopuerto Guadalajara</option>
                                <option value="México norte">México norte</option>
                                <option value="México póniente">México póniente</option>
                            </select>
                        </div>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="servicio" class="form-label">Servicio</label> 
                            <select id="servicio" name="servicio" class="form-select form-select-lg" required> 
                                <option value="" selected>Selecciona un servicio</option> 
                                <option value="Dos pisos ETN">Dos pisos ETN</option>
                                <option value="Otro Servicio">Otro Servicio</option> 
                            </select>
                        </div>

                        <div class="col-12 w-100 d-flex justify-content-start align-items-center gap-3 mb-3"> 
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="tipo_viaje" id="viaje-sencillo" value="sencillo" checked>
                                <label class="form-check-label" for="viaje-sencillo">
                                    Viaje Sencillo
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="tipo_viaje" id="viaje-redondo" value="redondo">
                                <label class="form-check-label" for="viaje-redondo">
                                    Viaje Redondo
                                </label>
                            </div>
                        </div>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="pasajeros-adultos" class="form-label">Pasajeros Adultos</label> 
                            <select id="pasajeros-adultos" name="pasajeros_adultos" class="form-select form-select-lg" required> 
                                <option value="0" selected>0</option> 
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="pasajeros-menores" class="form-label">Pasajeros Menores</label> 
                            <select id="pasajeros-menores" name="pasajeros_menores" class="form-select form-select-lg" required> 
                                <option value="0" selected>0</option> 
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="pasajeros-inapam" class="form-label">Pasajeros INAPAM</label> 
                            <select id="pasajeros-inapam" name="pasajeros_inapam" class="form-select form-select-lg" required> 
                                <option value="0" selected>0</option> 
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>

                        <div class="col-xl-auto col-12 d-flex p-0"> 
                            <button type="submit" class="__btn-forms btn text-white btn-lg w-100">Buscar</button>
                        </div>
                    </form>
                </article>
            </section>
        `;
  }

  addFormSubmitListener() {
    // Es importante buscar el formulario DESPUÉS de que render() lo haya añadido al DOM
    const form = this.querySelector("#form-open-ticket");
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar el envío por defecto del formulario

        const formData = new FormData(form);

        // Validación simple (puedes usar la validación de Bootstrap si quitas novalidate)
        const origen = formData.get("origen");
        const destino = formData.get("destino");
        const servicio = formData.get("servicio");

        if (!origen || !destino || !servicio) {
          alert("Por favor, completa Origen, Destino y Servicio.");
          // Podrías añadir aquí lógica para marcar los campos inválidos visualmente
          return;
        }

        // TODO: Implementar la lógica para enviar los datos al backend o procesarlos

        // --- Lógica (ejemplo) ---
        console.log("Buscando viaje...");
        console.log("Origen:", origen);
        console.log("Destino:", destino);
        console.log("Servicio:", servicio);

        //:", destino);

        // Reemplaza el contenido actual con el componente layout-select-time
        const parent = this.parentElement;
        if (parent) {
          const layoutSelectTime = document.createElement("layout-select-time");
          parent.replaceChild(layoutSelectTime, this);
        } else {
          alert(
            "Error: No se encontró el elemento padre para reemplazar el contenido."
          );
          console.error(
            "No se encontró el elemento padre para reemplazar el contenido."
          );
        }
      });
    } else {
      console.error(
        "No se encontró el elemento del formulario #form-select-viaje"
      );
    }
  }
}

customElements.define("app-open-ticket", AppOpenTicket);
