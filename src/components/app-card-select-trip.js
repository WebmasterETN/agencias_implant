class AppCardSelectTrip extends HTMLElement {
  // Define los atributos que el componente observará
  static get observedAttributes() {
    return [
      "floors",
      "icon-class-names",
      "times-trips",
      "info-details",
      "info-available",
      "prices",
    ];
  }

  constructor() {
    super(); // Siempre llama a super() primero en el constructor
    // Inicializa las propiedades con valores por defecto o vacíos
    this.floors = [];
    this.iconClassNames = [];
    this.timesTrips = [];
    this.infoAvailable = [];
    this.prices = [];
  }

  connectedCallback() {
      // Llama a renderizar cuando el componente se conecta al DOM
      this.render();
      this.attachEventListener();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Cuando un atributo observado cambia, actualiza la propiedad correspondiente
    // y vuelve a renderizar si ya está conectado
    try {
      // Los nombres de atributos HTML (kebab-case) se convierten a camelCase para las propiedades JS
      const propName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      this[propName] = JSON.parse(newValue || "[]");
    } catch (e) {
      console.error(`Error parsing attribute ${name}: ${newValue}`, e);
      // Asigna un array vacío en caso de error para evitar fallos posteriores
      const propName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      this[propName] = [];
    }
    // Vuelve a renderizar solo si el componente ya está en el DOM
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    // Ahora usamos las propiedades de la instancia (this.floors, etc.)
    this.innerHTML = `
          <div class="__section__item d-flex flex-xl-row flex-column  rounded-4 justify-content-center align-items-center w-100">

              <div class="__section__item__logo d-xl-flex d-none flex-lg-column flex-row align-items-center justify-content-center">

                <img src="src/assets/img/logos/compañia/logo.svg" class="__section__item__logo__img" alt="logo de amealcenses"/>
                ${this.renderFloors(this.floors)}

              </div>

              <div class="__section__item__details d-grid align-items-center justify-content-evenly rounded-4 h-100">
                <div class="__section__item__logo-grid d-xl-none d-flex flex-lg-column flex-row align-items-center justify-content-center">

                  <img src="src/assets/img/logos/compañia/logo.svg" class="__section__item__logo__img-grid" alt="logo de amealcenses"/>
                  ${this.renderFloors(this.floors)}

                </div>

                ${this.renderIcon(this.iconClassNames)}

                ${this.renderTimesTrip(this.timesTrips)}
                <div class="main__section__item__details__time__text__info d-flex gap-3 justify-content-start align-items-center">
                    <button type="button" class="main__section__item__details__link border-0 bg-transparent m-0 p-0 text-decoration-underline" data-bs-toggle="modal" data-bs-target="#details-trip-modal" aria-label="Ver los detalles del viaje">
                        ver detalles
                    </button>
                    ${this.renderInfoAvailable(this.infoAvailable)}
                </div>

                <p class="__item__level-cost d-xl-block d-none rounded-5 bg-primary text-white m-0 pt-1 pb-1 ps-3 pe-3">Más barato</p>

                <div class="__item__prices-points">

                  ${this.renderPrice(this.prices)}

                </div>

                <button class="__section__item__details__button--choose btn btn-outline-primary fw-semibold rounded-5 elegir-viaje-btn">
                    Ver asientos
                </button>

              </div>
          </div>
        `;
    }
     // --- NUEVO: Método para añadir el Event Listener ---
  attachEventListener() {
    // Buscamos el botón DENTRO de este componente específico usando this.querySelector
    const elegirButton = this.querySelector(".elegir-viaje-btn"); // Usamos la clase que añadimos

    if (elegirButton) {
      // Usamos una función flecha para mantener el contexto de 'this'
      elegirButton.addEventListener("click", () => {
        this.navigateToPasarela();
      });
    } else {
      // Es buena idea loguear si no se encuentra, para depuración
      console.warn(
        "Botón 'Elegir' (.elegir-viaje-btn) no encontrado en esta instancia de app-card-select-trip."
      );
    }
  }

  // --- NUEVO: Método para realizar la navegación ---
  navigateToPasarela() {
    // Busca el contenedor <main> usando el ID que le pusiste
    const pageContentContainer = document.getElementById("main-content"); // <--- CAMBIO AQUÍ

    if (pageContentContainer) {
      // Limpia TODO el contenido actual del <main>
      pageContentContainer.innerHTML = "";

      // Crea el nuevo componente de pasarela
      const pasarelaPagoElement = document.createElement(
        "app-main-pasarela-pago"
      );

      // Añade el nuevo componente directamente dentro del <main>
      pageContentContainer.appendChild(pasarelaPagoElement);

      // Opcional: Ajusta clases del contenedor <main> si es necesario para el nuevo layout
      // pageContentContainer.className = 'nuevo-layout-para-pasarela'; // Ejemplo

      // Opcional: Mueve el scroll al inicio de la nueva vista
      window.scrollTo(0, 0);
    } else {
      console.error(
        "Error: No se encontró el contenedor principal con id='page-content'." // <--- CAMBIO AQUÍ
      );
      alert(
        "Error al navegar. No se encontró el elemento principal de la página."
      );
    }
  }

  // --- Métodos de renderizado (sin cambios, pero ahora reciben los datos correctamente) ---

  renderFloors(floors) {
    // Añade una comprobación por si el array está vacío o no es un array
    if (!Array.isArray(floors)) return "";
    return floors
      .map(
        (floor) => `
            <small class="__item-floors text-body-secondary d-flex">${
              floor.floorNumber || ""
            }</small>
        `
      )
      .join("");
  }

  renderIcon(iconClassNames) {
    if (!Array.isArray(iconClassNames)) return "";
    return iconClassNames
      .map(
        (iconClassName) => `
            <i id="icon-time-trip" class="main__section__item__details__icon ${
                iconClassName.class || ""
            } text-black fs-3 fw-semibold" aria-hidden="true"></i>
        `
      )
      .join("");
  }

  renderTimesTrip(timesTrips) {
    if (!Array.isArray(timesTrips)) return "";
    return timesTrips
      .map(
        (timeTrip) => `
            <strong class="main__section__item__details__time__text__time d-flex gap-3 justify-content-start align-items-center">
                <span class="main__section__item__details__time__text__time__hour">${
                    timeTrip.exitTime || ""
                }</span>
                <span class="outline"></span>
                Local
                <i class="arrow icon-next-arrow"></i>
                <span class="fw-light">${
                    timeTrip.arrivalTime || ""
                }</span>
            </strong>
        `
      )
      .join("");
  }

  renderInfoAvailable(infoAvailable) {
    if (!Array.isArray(infoAvailable)) return "";
    return infoAvailable
      .map(
        (available) => `
            <p class="m-0 text-body-secondary">${
                available.category || ""
            }</p>
        `
      )
      .join("");
  }

  renderPrice(prices) {
    if (!Array.isArray(prices)) return "";
    // Asegúrate de que el precio se formatea correctamente si es necesario
    return prices
      .map(
        (price) => `
            <p class="m-0 text-danger fw-bold">$${
                Number(price.price).toFixed(2) || "0.00"
            }<span class="">mxn</span></p>
        `
      )
      .join("");
  }

}

customElements.define("app-card-select-trip", AppCardSelectTrip);
