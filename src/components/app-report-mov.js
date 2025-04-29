class AppReportMov extends HTMLElement {
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
                <h3 class="text-center mb-4">REPORTE DE MOVIMIENTOS</h3>

                <article class="d-flex justify-content-center align-items-center w-100 p-0 m-0">
                    <form class="row justify-content-center align-items-end w-100 gap-3 p-0" id="form-report-mov" novalidate>

                        <!-- Fecha Inicial -->
                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="date-start" class="form-label">Fecha Inicial</label>
                            <input type="date" id="date-start" name="fecha_inicio" class="form-control form-control-lg" required>
                        </div>

                        <!-- Fecha Final -->
                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="date-end" class="form-label">Fecha Final</label>
                            <input type="date" id="date-end" name="fecha_fin" class="form-control form-control-lg" required>
                        </div>

                        <!-- Botón Buscar -->
                        <div class="col-xl-auto col-12 d-flex p-0">
                            <button type="submit" class="__btn-forms btn text-white btn-lg w-100">Buscar</button>
                        </div>
                    </form>
                </article>
            </section>
        `;
    }

    addFormSubmitListener() {
        const form = this.querySelector('#form-report-mov');
        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault(); // Previene el envío tradicional del formulario

                // Aquí se procesa el envío del formulario
                console.log('Formulario enviado!');
                const formData = new FormData(form);

                // Ejemplo: Mostrar los datos que se enviarían
                for (let [key, value] of formData.entries()) {
                    console.log(`${key}: ${value}`); // El backend recibirá 'fecha_inicio' y 'fecha_fin'
                }

                // TODO: Implementar la lógica para enviar los datos (e.g., fetch a una API)
                // fetch('/api/reporte-movimientos', {
                //     method: 'POST',
                //     body: formData
                // })
                // .then(response => response.json())
                // .then(data => {
                //     console.log('Respuesta del servidor:', data);
                //     // Actualizar la UI con los resultados
                // })
                // .catch(error => {
                //     console.error('Error al enviar el formulario:', error);
                // });
            });
        } else {
            console.error('No se encontró el elemento del formulario #form-report-mov');
        }
    }

    // disconnectedCallback() {
    //     // Considera limpiar listeners si el componente se elimina dinámicamente
    // }
}

customElements.define("app-report-mov", AppReportMov);
