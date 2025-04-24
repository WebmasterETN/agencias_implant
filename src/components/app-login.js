class AppLogin extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="card shadow p-4 __login-card" role="form" aria-labelledby="loginTitle">
        <h2 id="loginTitle" class="text-center mb-4">Ingresa tus datos y compra tus boletos de autobús</h2>
        <form novalidate>
          <div class="mb-3">
            <label for="username" class="form-label">Usuario *</label>
            <input 
              type="text" 
              class="form-control rounded" 
              id="username" 
              name="username" 
              required 
              aria-required="true" 
              autocomplete="username"
            >
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña *</label>
            <input 
              type="password" 
              class="form-control rounded" 
              id="password" 
              name="password" 
              required 
              aria-required="true" 
              autocomplete="current-password"
            >
          </div>
          <button type="submit" class="__btn-login btn btn-primary w-100 rounded">Entrar</button>
        </form>
      </div>
    `;
  }
}
customElements.define("app-login", AppLogin);
