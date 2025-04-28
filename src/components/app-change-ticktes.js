class AppChangeTicket extends HTMLElement {
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
                <h3 class="w-100 text-center mb-4">Intercambio de Boletos</h3>
                <article class="d-flex justify-content-center align-items-center w-100 p-0 m-0">
                    <form class="row justify-content-center align-items-end w-100 gap-3 p-0" id="form-change-tickets" novalidate>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="operation-number-change" class="form-label">Número de operación</label>
                            <input type="text" id="operation-number-change" name="numero_operacion" class="form-control form-control-lg" required>
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
        const form = this.querySelector('#form-change-tickets');
        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault(); // Previene el envío por defecto

                const formData = new FormData(form);

                // TODO: Implementar la lógica para enviar los datos al backend
                
            });
        } else {
            console.error('No se encontró el elemento del formulario #form-change-tickets');
        }
    }
}

customElements.define("app-change-ticktes", AppChangeTicket);
