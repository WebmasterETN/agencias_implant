class AppAdminTicktes extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.addFormSubmitListener(); // Aunque no hay botón submit aún, preparamos la estructura
    }

    render() {
        this.innerHTML = `
            <section class="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3">
                <h2 class="w-100 text-center">Venta de boletos para agencias</h2>
                <h3 class="w-100 text-center mb-4">Administrar Tickets/Usuarios</h3> 
                <article class="w-100"> 
                    <form id="form-admin-tickets" novalidate>
                        <div class="table-responsive"> 
                            <table class="table table-striped table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">Usuario</th>
                                        <th scope="col">Nombres</th>
                                        <th scope="col" class="text-center">Elegir</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <td>NG4L6C1</td>
                                        <td>angel cruz betanzos</td>
                                        <td class="text-center">
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" value="NG4L6C1" id="user-NG4L6C1" name="selected_users">
                                                <label class="form-check-label visually-hidden" for="user-NG4L6C1">
                                                    Elegir usuario NG4L6C1
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        
                    </form>
                </article>
            </section>
        `;
    }

    addFormSubmitListener() {
        const form = this.querySelector('#form-admin-tickets');
        if (form) {
            // Podrías escuchar cambios en los checkboxes en lugar de un submit,
            // o añadir un botón de submit al formulario si es necesario.
            form.addEventListener('change', (event) => {
                if (event.target.type === 'checkbox' && event.target.name === 'selected_users') {
                    console.log(`Checkbox ${event.target.id} cambiado a: ${event.target.checked}`);
                    
                    // TODO: Implementar lógica cuando un checkbox cambia (si es necesario)
                }
            });

            // Logica del botón type="submit" aquí

        } else {
            console.error('No se encontró el elemento del formulario #form-admin-tickets');
        }
    }
}

customElements.define("app-admin-ticktes", AppAdminTicktes);
