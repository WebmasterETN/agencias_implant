class AppSelectViaje extends HTMLElement {
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
                <p class="text-center mb-4">Selecciona el viaje que deseas realizar</p> 
                <article class="d-flex justify-content-center align-items-center w-100 p-0 m-0">
                    <form class="row justify-content-center align-items-end w-100 gap-3 p-0" id="form-select-viaje">

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="origen-viaje" class="form-label">Origen</label> 
                            <select id="origen-viaje" name="origen" class="form-select form-select-lg" required> 
                                <option value="" selected>Selecciona un origen</option> 
                                <option value="4 Caminos Mich">4 Caminos Mich</option>
                                <option value="Acapulco">Acapulco</option>
                                <option value="Acapulco diamante">Acapulco diamante</option>
                            </select>
                        </div>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="destino-viaje" class="form-label">Destino</label> 
                            <select id="destino-viaje" name="destino" class="form-select form-select-lg" required> 
                                <option value="" selected>Selecciona un destino</option> 
                                <option value="Chilpancingo">Chilpancingo</option>
                                <option value="Cuernavaca">Cuernavaca</option>
                                <option value="Guadalajara">Guadalajara</option>
                            </select>
                        </div>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="salida-viaje" class="form-label">Salida</label> 
                            <input type="date" id="salida-viaje" name="salida" class="form-control form-control-lg" required> 
                        </div>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="regreso-viaje" class="form-label">Regreso (Opcional)</label> 
                            <input type="date" id="regreso-viaje" name="regreso" class="form-control form-control-lg"> 
                        </div>

                        <div class="col-xl-auto col-12 d-flex p-0"> 
                            <button type="submit" class="btn btn-primary btn-lg w-100">Buscar</button>
                        </div>
                    </form>
                </article>
            </section>
        `;
    }

    addFormSubmitListener() {
        // Es importante buscar el formulario DESPUÉS de que render() lo haya añadido al DOM
        const form = this.querySelector("#form-select-viaje");
        if (form) {
            form.addEventListener("submit", (event) => {
                event.preventDefault(); // Evitar el envío por defecto del formulario

                const formData = new FormData(form);

                // Validación simple (puedes usar la validación de Bootstrap si quitas novalidate)
                const origen = formData.get('origen');
                const destino = formData.get('destino');
                const salida = formData.get('salida');

                if (!origen || !destino || !salida) {
                    alert("Por favor, completa Origen, Destino y Fecha de Salida.");
                    // Podrías añadir aquí lógica para marcar los campos inválidos visualmente
                    return;
                }

                // TODO: Implementar la lógica para enviar los datos al backend o procesarlos

                // --- Lógica (ejemplo) ---
                console.log("Buscando viaje...");
                console.log("Origen:", origen);
                console.log("Destino:", destino);
                console.log("Salida:", salida);
                console.log("Regreso:", formData.get('regreso'));

                // Reemplaza el contenido actual con el componente layout-select-time
                const parent = this.parentElement;
                if (parent) {
                    const layoutSelectTime = document.createElement("layout-select-time");
                    parent.replaceChild(layoutSelectTime, this);
                } else {
                    alert("Error: No se encontró el elemento padre para reemplazar el contenido.");
                    console.error("No se encontró el elemento padre para reemplazar el contenido.");
                }

            });
        } else {
            console.error("No se encontró el elemento del formulario #form-select-viaje");
        }
    }
}

customElements.define("layout-select-viaje", AppSelectViaje);
