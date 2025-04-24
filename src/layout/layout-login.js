import "../components/app-login.js";

class LayouLogin extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <main id="login-section" class="main d-flex flex-xl-row flex-column-reverse justify-content-start align-items-center vw-100 p-5">
                <div class="">
                    <img src="src/assets/img/autobuses/img-autobus-login.webp" alt="Logo Omega" class="img-fluid" style="max-width: 1050px; width: 100%; height: auto;"/>
                </div>
                <app-login></app-login>
            </main>
        `;
    }
}
customElements.define("layout-login", LayouLogin);