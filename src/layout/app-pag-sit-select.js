class AppPagSitSelect extends HTMLElement {
  constructor() {
    super();
    this._handleSeatSelectionChange = this.updateSelectionSummary.bind(this);
    this._handleContinueClick = this.handleContinueClick.bind(this);
    this._handleFloorTabClick = this.handleFloorTabClick.bind(this);
  }

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
                          <p id="free-seats-count" class="card-text__cost mb-0" style="font-size: 15px;">?</p>
                          <p class="card-text__cost mb-0" style="font-size: 15px;">LIBRES</p>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center">
                          <button type="button" class="btn btn-selected"></button>
                          <p id="selected-seats-count" class="card-text__cost mb-0" style="font-size: 15px;">0</p>
                          <p class="card-text__cost mb-0" style="font-size: 15px;">ELEGIDOS</p></div>
                        <div class="d-flex flex-column justify-content-center align-items-center">
                          <button type="button" class="btn btn-taken"></button>
                          <p id="taken-seats-count" class="card-text__cost mb-0" style="font-size: 15px;">?</p>
                          <p class="card-text__cost mb-0" style="font-size: 15px;">OCUPADOS</p>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </header>
                <nav class="container mt-3">
                  <ul class="nav nav-tabs" id="floorTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a class="pagination__floor nav-link active" id="piso2-tab" data-bs-toggle="tab" data-bs-target="#piso2" role="tab"
                        aria-controls="piso2" aria-selected="true">Piso 2</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="pagination__floor nav-link" id="piso1-tab" data-bs-toggle="tab" data-bs-target="#piso1" role="tab"
                        aria-controls="piso1" aria-selected="false">Piso 1</a>
                    </li>
                  </ul>
                  <div class="tab-content__floor" id="floorTabsContent">
                    <app-second-floor></app-second-floor>
                    <app-first-floor></app-first-floor>
                  </div>
                </nav>

                <div class="tab-content__onboard col-12 mt-5">
                  <div class="row">
                    <button id="onboard-button" type="button" class="btn btn-onboard d-flex align-items-center me-0">
                      A bordo
                      <span class="icon-bus" style="font-size: 30px"><span class="path1"></span><span
                          class="path2"></span></span>
                      <div id="onboard-count" class="badge text-wrap center" style="width: 3rem; background-color: #1e3b5a">
                        0
                      </div>
                    </button>
                    <button id="continue-to-passengers-btn" type="button" class="btn btn-continue d-flex align-items-center me-0">
                      <label id="continue-button-label" class="tab-content__onboard__continue">Continuar con 0 asientos</label>
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
    setTimeout(() => {
        this.addEventListeners();
        this.updateSelectionSummary();
    }, 0);
  }

  disconnectedCallback() {
    this.removeEventListener("seat-selection-changed", this._handleSeatSelectionChange);
    const continueButton = this.querySelector("#continue-to-passengers-btn");
    if (continueButton) {
      continueButton.removeEventListener("click", this._handleContinueClick);
    }
    const floorTriggerTabList = this.querySelectorAll("#floorTabs a");
    floorTriggerTabList.forEach((triggerEl) => {
        triggerEl.removeEventListener("click", this._handleFloorTabClick);
    });
  }

  addEventListeners() {
    const floorTriggerTabList = this.querySelectorAll("#floorTabs a");
    floorTriggerTabList.forEach((triggerEl) => {
      if (typeof bootstrap !== 'undefined' && bootstrap.Tab) {
          triggerEl.addEventListener("click", this._handleFloorTabClick);
      } else {
          console.error("Bootstrap Tab no está disponible.");
      }
    });

    const continueButton = this.querySelector("#continue-to-passengers-btn");
    if (continueButton) {
      continueButton.addEventListener("click", this._handleContinueClick);
    } else {
      console.error("#continue-to-passengers-btn no encontrado.");
    }

    this.addEventListener("seat-selection-changed", this._handleSeatSelectionChange);
  }

  handleFloorTabClick(event) {
    // Lógica adicional si es necesaria al cambiar de piso
  }

  handleContinueClick() {
    const selectedSeatsCount = this.querySelectorAll('.seat.selected').length;
    if (selectedSeatsCount === 0) {
      alert("Por favor, selecciona al menos un asiento.");
      return;
    }

    this.dispatchEvent(
      new CustomEvent("navigate-to-passengers", {
        bubbles: true,
        composed: true,
        detail: { selectedSeats: this.getSelectedSeatNumbers() }
      })
    );
  }

  updateSelectionSummary() {
    const freeSeats = this.querySelectorAll('.seat.free').length;
    const selectedSeats = this.querySelectorAll('.seat.selected');
    const takenSeats = this.querySelectorAll('.seat.taken').length;
    const selectedSeatsCount = selectedSeats.length;

    const freeCountEl = this.querySelector("#free-seats-count");
    const selectedCountEl = this.querySelector("#selected-seats-count");
    const takenCountEl = this.querySelector("#taken-seats-count");
    const onboardCountEl = this.querySelector("#onboard-count");
    const continueLabelEl = this.querySelector("#continue-button-label");

    if (freeCountEl) freeCountEl.textContent = freeSeats;
    if (selectedCountEl) selectedCountEl.textContent = selectedSeatsCount;
    if (takenCountEl) takenCountEl.textContent = takenSeats;
    if (onboardCountEl) onboardCountEl.textContent = selectedSeatsCount;

    if (continueLabelEl) {
      continueLabelEl.textContent = `Continuar con ${selectedSeatsCount} asiento${selectedSeatsCount !== 1 ? 's' : ''}`;
    }
  }

  getSelectedSeatNumbers() {
      const selectedSeats = this.querySelectorAll('.seat.selected');
      return Array.from(selectedSeats).map(seat => seat.dataset.asiento);
  }
}
customElements.define("app-pag-sit-select", AppPagSitSelect);
