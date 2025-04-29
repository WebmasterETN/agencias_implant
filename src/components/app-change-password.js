class AppChangePassword extends HTMLElement {
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
                <h3 class="w-100 text-center mb-4">Cambiar Contraseña</h3>
                <article class="d-flex justify-content-center align-items-center w-100 p-0 m-0">
                    <form class="row justify-content-center align-items-end w-100 gap-3 p-0" id="form-change-password" novalidate>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="current-password" class="form-label">Contraseña actual:</label>
                            <input type="password" id="current-password" name="current_password" class="form-control form-control-lg" required autocomplete="current-password">
                        </div>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="new-password" class="form-label">Contraseña nueva:</label>
                            <input type="password" id="new-password" name="new_password" class="form-control form-control-lg" required autocomplete="new-password">
                        </div>

                        <div class="col-xl col-12 d-flex flex-column p-0">
                            <label for="confirm-password" class="form-label">Confirma contraseña:</label>
                            <input type="password" id="confirm-password" name="confirm_password" class="form-control form-control-lg" required autocomplete="new-password">
                        </div>

                        <div class="col-xl-auto col-12 d-flex p-0">
                            <button type="submit" class="__btn-forms btn text-white btn-lg w-100">Guardar Cambios</button>
                        </div>
                    </form>
                </article>
            </section>
        `;
    }

    addFormSubmitListener() {
        const form = this.querySelector('#form-change-password');
        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault(); // Previene el envío por defecto

                const formData = new FormData(form);
                const newPassword = formData.get('new_password');
                const confirmPassword = formData.get('confirm_password');

                if (newPassword !== confirmPassword) {
                    alert('Las contraseñas nuevas no coinciden.');
                    return; // Detiene el proceso si no coinciden
                }

                // TODO: Implementar la lógica para enviar los datos al backend
            });
        } else {
            console.error('No se encontró el elemento del formulario #form-change-password');
        }
    }
}

customElements.define("app-change-password", AppChangePassword);
