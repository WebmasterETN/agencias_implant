class AppAdminTicktes extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3">
                <h2 class="w-100 text-center">Venta de boletos para agencias</h2>
                <article class="d-flex justify-content-center align-items-center w-100 h-100 p-0 m-0">
                    <header class="row w-100">
                        <div class="col"><p>usuario</p></div>
                        <div class="col-12"><p>nombres</p></div>
                        <div class="col"><p>elegir</p></div>
                    </header>
                    <form class="d-flex justify-content-center align-items-center w-100">
                        <ul class="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-0 m-0 list-unstyled">
                            <li class="row w-100">
                                <div class="col"><p>NG4L6C1</p></div>
                                <div class="col-12"><p>angel cruz betanzos</p></div>
                                <input class="col" type="checkbox"><p>elegir</p></input>
                            </li>
                        </ul>
                    </form>
                </article>
            </section>
        `;
    }
}

customElements.define("app-admin-ticktes", AppAdminTicktes);