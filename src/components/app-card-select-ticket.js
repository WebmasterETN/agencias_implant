class AppCardSelectTicket extends HTMLElement {
  static get observedAttributes() {
    return ["typecards", "prices"]; // Observa los atributos typecards y prices
  }

  constructor() {
    super();
    this.typeCards = [];
    this.prices = [];
  }

  connectedCallback() {
    this.render(); // Renderiza el contenido inicial
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "typecards") {
      this.typeCards = JSON.parse(newValue); // Convierte el JSON en un array
    } else if (name === "prices") {
      this.prices = JSON.parse(newValue); // Convierte el JSON en un array
    }
    this.render(); // Vuelve a renderizar cuando cambian los atributos
  }

  render() {
    // Renderiza el contenido dinámicamente usando los datos de los atributos
    this.innerHTML = `
            <div class="card border-0 rounded-4 shadow" style="min-width: 9rem;">
                <div class="card-body">
                    <div class="col d-flex justify-content-between align-items-center">
                        <!-- Renderiza el tipo de tarjeta -->
                        <p class="card-text mb-0" style="font-size: 15px;">
                            ${
                              this.typeCards
                                .map((card) => card.typeCard)
                                .join(", ") || "Sin tipo"
                            }
                        </p>
                        <!-- Renderiza el precio -->
                        <p class="card-text__cost mb-0" style="font-size: 15px;">
                            Desde: <strong>${
                              this.prices
                                .map((price) => price.price)
                                .join(", ") || "Sin precio"
                            }</strong>
                        </p>
                    </div>
                    <a href="#" class="btn btn-agregar mt-3">Agregar</a>
                </div>
            </div>
        `;
  }
}

customElements.define("app-card-select-ticket", AppCardSelectTicket);
