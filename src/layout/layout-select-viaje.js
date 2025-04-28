class AppSelectViaje extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section class="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3">
                <h2 class="text-center">Venta de boletos para agencias</h2>
                <p class="text-center">Selecciona el viaje que deseas realizar</p>
                <form class="form-select-viaje row justify-content-center align-items-center w-100 gap-3 p-0" id="form-select-viaje">
                    <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                        <label for="origen">Origen</label>
                        <select id="origen" name="origen" class="form-select" aria-label="Default select example" required>
                            <option value="">Selecciona un origen</option>
                            <option value="viaje3">4 caminos mich</option>
                            <option value="viaje1">acapulco</option>
                            <option value="viaje2">acapulco diamante</option>
                        </select>
                    </fieldset>
                    <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                        <label for="destino">Destino</label>
                        <select id="destino" name="destino" class="form-select" aria-label="Default select example" required>
                            <option value="">Selecciona un destino</option>
                            <option value="viaje1">chilpancingo</option>
                            <option value="viaje2">cuernavaca</option>
                            <option value="viaje3">guadalajara</option>
                        </select>
                    </fieldset>
                    <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                        <label for="salida">Salida</label>
                        <input type="date" id="salida" name="salida" class="form-control" required>
                    </fieldset>
                    <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                        <label for="regreso">Regreso (OP)</label>
                        <input type="date" id="regreso" name="regreso" class="form-control">
                    </fieldset>
                    <fieldset class="fieldset-select-viaje col-xl col-12 d-flex flex-column p-0">
                        <button type="submit" class="btn btn-primary col-xl col-12">Buscar</button>
                    </fieldset>
                </form>
            </section>
        `;

    // Agregar manejador de eventos al formulario
    const form = this.querySelector("#form-select-viaje");
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evitar el envío por defecto del formulario

      // Validar los campos
      const origen = this.querySelector("#origen").value;
      const destino = this.querySelector("#destino").value;
      const salida = this.querySelector("#salida").value;

      if (!origen || !destino || !salida) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
      }

      // Reemplazar el contenido actual con el componente layout-select-time
      const parent = this.parentElement;
      parent.innerHTML = "<layout-select-time></layout-select-time>";
    });
  }
}

customElements.define("layout-select-viaje", AppSelectViaje);
