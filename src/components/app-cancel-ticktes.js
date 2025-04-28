class AppCancelTicktes extends HTMLElement {
  connectedCallabck() {
    this.innerHTML = `
        <section class="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3">
            <h2 class="w-100 text-center">Venta de boletos para agencias</h2>
            <h3 class="w-100 text-center">Cancelación de tickets</h3>
            <article class="d-flex justify-content-center align-items-center w-100 h-100 p-0 m-0">
                    <form  class"row justify-content-center align-items-center w-100 gap-3 p-0" id="form-report-mov" novalidate>
                        <fieldset class="form-report-mov col-xl col-12 d-flex flex-column p-0">
                            <label for="salida">Número de operación</label>
                            <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" required>
                        </fieldset>
                        <fieldset class="form-report-mov col-xl col-12 d-flex flex-column p-0">
                            <label for="regreso">NIT</label>
                            <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" required>
                        </fieldset>
                        <fieldset class="form-report-mov col-xl col-12 d-flex flex-column p-0">
                            <button type="submit" class="btn btn-primary col-xl col-12">Buscar</button>
                        </fieldset>
                    </form>
            </article>
        </section>
    `;class AppCancelTicktes extends HTMLElement {
        constructor() {
            super();
        }
    
        connectedCallback() { // Corregido: connectedCallback
            this.render();
            this.addFormSubmitListener(); // Añadir listener
        }
    
        render() {
            this.innerHTML = `
                <section class="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3">
                    <h2 class="w-100 text-center">Venta de boletos para agencias</h2>
                    <h3 class="w-100 text-center mb-4">Cancelación de tickets</h3>
                    <article class="d-flex justify-content-center align-items-center w-100 p-0 m-0">
                        <form class="row justify-content-center align-items-end w-100 gap-3 p-0" id="form-cancel-tickets" novalidate>
    
                            <div class="col-xl col-12 d-flex flex-column p-0">
                                <label for="operation-number" class="form-label">Número de operación</label>
                                <input type="text" id="operation-number" name="numero_operacion" class="form-control form-control-lg" required>
                            </div>
    
                            <div class="col-xl col-12 d-flex flex-column p-0">
                                <label for="nit" class="form-label">NIT</label>
                                <input type="text" id="nit" name="nit" class="form-control form-control-lg" required>
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
            const form = this.querySelector('#form-cancel-tickets');
            if (form) {
                form.addEventListener('submit', (event) => {
                    event.preventDefault(); // Previene el envío por defecto
    
                    const formData = new FormData(form);
    
                });
            } else {
                console.error('No se encontró el elemento del formulario #form-cancel-tickets');
            }
        }
    }
    
    customElements.define("app-cancel-ticktes", AppCancelTicktes);
    
  }
}
customElements.define("app-cancel-ticktes", AppCancelTicktes);