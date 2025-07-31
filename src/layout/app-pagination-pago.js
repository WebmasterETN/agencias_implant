class AppPaginationPago extends HTMLElement {
  constructor() {
    super();
    // Bind event handlers to the instance
    this._handleNavigateToPassengers = this.handleNavigateToPassengers.bind(this);
    this._handleNavigateToPayment = this.handleNavigateToPayment.bind(this);
  }
  connectedCallback() {
    console.log("app-pagination-pago connected");
    this.innerHTML = `
              <section class="container w-100">
                <nav>
                  <ul class="nav nav-tabs w-100 main-tabs" id="myTab" role="tablist">
                    <li class="nav-item flex-fill" role="presentation">
                      <button class="nav-link text-black active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Asientos de ida</button>
                    </li>
                    <li class="nav-item flex-fill" role="presentation">
                      <button class="nav-link text-black" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Pasajeros</button>
                    </li>
                    <li class="nav-item flex-fill" role="presentation">
                      <button class="nav-link text-black" id="payment-tab" data-bs-toggle="tab" data-bs-target="#payment" type="button" role="tab" aria-controls="payment" aria-selected="false">Pago</button>
                    </li>
                    <li class="nav-item ms-auto nav-item-small" id="tabStatus">
                      <span class="nav-link disabled" aria-current="page" id="statusText">Paso 1 de 3</span>
                    </li>
                  </ul>
                </nav>
                <article class="tab-content" id="myTabContent">
                  <section class="tab-pane fade show active w-100 p-0" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <app-pag-sit-select></app-pag-sit-select>
                  </section>
                  <section class="tab-pane fade w-100 p-0" id="profile" role="tabpanel" aria-labelledby="profile-tab" >
                      <app-passangers-form></app-passangers-form>
                  </section>
                  <section class="tab-pane fade w-100 p-0" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                    <app-payment-form></app-payment-form>
                  </section>
                </article>
              </section>
            
    `;
    // Use setTimeout to ensure child elements are potentially rendered and Bootstrap might be ready
    setTimeout(() => {
      this.addEventListeners();
      this.initializeTabStatus();
    }, 0);
  }

  disconnectedCallback() {
    console.log("app-pagination-pago disconnected");
    this.removeEventListeners();
  }

  addEventListeners() {
    const tabLinks = this.querySelectorAll('.main-tabs .nav-link:not(.disabled)'); // Excluimos el disabled
    const statusText = this.querySelector('#statusText'); // Busca el ID dentro del componente

    // 3. Añade los event listeners
    if (statusText) { // Comprueba si statusText se encontró
      tabLinks.forEach((link, index) => {
        // Store the handler reference for removal
        link._tabShownHandler = () => {
          statusText.textContent = `Paso ${index + 1} de ${tabLinks.length}`;
        };
        // Escucha el evento 'shown.bs.tab' de Bootstrap que se dispara DESPUÉS de que la pestaña se muestra
        link.addEventListener('shown.bs.tab', link._tabShownHandler);
      });
    } else {
      console.error("Elemento #statusText no encontrado dentro de app-pagination-pago.");
    }

    // Listen for navigation events from children
    this.addEventListener('navigate-to-passengers', this._handleNavigateToPassengers);
    this.addEventListener('navigate-to-payment', this._handleNavigateToPayment);
    console.log("Navigation event listeners added to app-pagination-pago");
  }

  removeEventListeners() {
    const tabLinks = this.querySelectorAll('.main-tabs .nav-link:not(.disabled)');
    tabLinks.forEach(link => {
      if (link._tabShownHandler) {
        link.removeEventListener('shown.bs.tab', link._tabShownHandler);
        delete link._tabShownHandler; // Clean up the stored handler
      }
    });

    // Remove navigation event listeners
    this.removeEventListener('navigate-to-passengers', this._handleNavigateToPassengers);
    this.removeEventListener('navigate-to-payment', this._handleNavigateToPayment);
    console.log("Navigation event listeners removed from app-pagination-pago");
  }

  initializeTabStatus() {
    const activeTabLink = this.querySelector('.main-tabs .nav-link.active:not(.disabled)');
    const tabLinks = this.querySelectorAll('.main-tabs .nav-link:not(.disabled)');
    const statusText = this.querySelector('#statusText');
    if (activeTabLink && statusText) {
      const activeIndex = Array.from(tabLinks).indexOf(activeTabLink);
      if (activeIndex !== -1) {
        statusText.textContent = `Paso ${activeIndex + 1} de ${tabLinks.length}`;
      }
    }
  }

  handleNavigateToPassengers(event) {
    console.log("navigate-to-passengers event caught by app-pagination-pago", event.detail);
    event.stopPropagation(); // Evita que el evento se propague y sea capturado por otros listeners.
    const passengersTabLink = this.querySelector('#profile-tab');
    if (passengersTabLink && typeof bootstrap !== 'undefined' && bootstrap.Tab) {
      const tabInstance = bootstrap.Tab.getOrCreateInstance(passengersTabLink);
      tabInstance.show();
    } else {
      console.error("Could not find passengers tab link or Bootstrap Tab is not available.");
    }
  }

  handleNavigateToPayment(event) {
    console.log("navigate-to-payment event caught by app-pagination-pago", event.detail);
    event.stopPropagation(); // Evita que el evento se propague y sea capturado por otros listeners.
    const paymentTabLink = this.querySelector('#payment-tab');
     if (paymentTabLink && typeof bootstrap !== 'undefined' && bootstrap.Tab) {
      const tabInstance = bootstrap.Tab.getOrCreateInstance(paymentTabLink);
      tabInstance.show();
    } else {
      console.error("Could not find payment tab link or Bootstrap Tab is not available.");
    }
  }
}
customElements.define("app-pagination-pago", AppPaginationPago);
