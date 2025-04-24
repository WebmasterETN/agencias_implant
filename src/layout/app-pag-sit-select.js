class AppPagSitSelect extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <article class="d-flex flex-column w-100">
              <div class="d-flex flex-column p-4 border rounded fondo-card">
                <header class="w-100">
                  <nav class="container">
                    <ul class="d-flex flex-xl-row flex-column align-items-center justify-content-between list-unstyled">
                      <li class="d-flex flex-column flex-wrap">
                        <h2 class="titulo__page">Tus asientos</h2>
                        <p class="d-flex text-break">
                          Elige los asientos que necesites, en seguida te
                          solicitaremos los datos de los pasajeros
                        </p>
                      </li>
                      <li class="d-flex flex-row align-items-center gap-3">
                        <div class="d-flex flex-column justify-content-center align-items-center">
                          <button type="button" class="btn btn-free"></button>
                          <p class="card-text__cost mb-0" style="font-size: 15px;">50</p>
                          <p class="card-text__cost mb-0" style="font-size: 15px;">LIBRES</p>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center">
                          <button type="button" class="btn btn-selected"></button>
                          <p class="card-text__cost mb-0" style="font-size: 15px;">0</p>
                          <p class="card-text__cost mb-0" style="font-size: 15px;">ELEGIDOS</p></div>
                        <div class="d-flex flex-column justify-content-center align-items-center">
                          <button type="button" class="btn btn-taken"></button>
                          <p class="card-text__cost mb-0" style="font-size: 15px;">0</p>
                          <p class="card-text__cost mb-0" style="font-size: 15px;">OCUPADOS</p>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </header>
                <nav class="container mt-3">
                  <!-- Pestañas -->
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a class="pagination__floor nav-link active" id="piso2-tab" data-bs-toggle="tab" href="#piso2" role="tab"
                        aria-controls="piso2" aria-selected="true">Piso 2</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="pagination__floor nav-link" id="piso1-tab" data-bs-toggle="tab" href="#piso1" role="tab"
                        aria-controls="piso1" aria-selected="false">Piso 1</a>
                    </li>
                  </ul>
                  <div class="tab-content__floor" id="myTabContent">
                    <app-second-floor></app-second-floor>
                    <app-first-floor></app-first-floor>
                  </div>
                </nav>

                <div class="tab-content__onboard col-12 mt-5">
                  <div class="row">
                    <button class="btn btn-onboard d-flex align-items-center me-0">
                      A bordo
                      <span class="icon-bus" style="font-size: 30px"><span class="path1"></span><span
                          class="path2"></span></span>
                      <div class="badge text-wrap center" style="width: 3rem; background-color: #1e3b5a">
                        22
                      </div>
                    </button>
                    <button class="btn btn-continue d-flex align-items-center me-0">
                      <label class="tab-content__onboard__continue">Continuar con 1 asiento</label>
                      <div class="container">
                        <div class="arrow">&#62;</div>
                        <div class="arrow">&#62;</div>
                        <div class="arrow">&#62;</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
          </article>
              `;
  }
}
customElements.define("app-pag-sit-select", AppPagSitSelect);
