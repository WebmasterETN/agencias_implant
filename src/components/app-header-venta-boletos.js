class AppHeader extends HTMLElement {
  connectedCallback() {
    const logoData = JSON.parse(this.getAttribute("logo"));
    const { src, alt, href } = logoData;

    // Renderizar el contenido inicial del header
    this.render(logoData);

    // Escuchar el evento personalizado para actualizar el header cuando el usuario inicie sesión
    document.addEventListener("userLoggedIn", () => {
      this.render(logoData);
      this.addEventListeners(); // Reasignar listeners después de renderizar
    });

    // Asignar listeners iniciales
    this.addEventListeners();
  }

  render({ src, alt, href }) {
    // Verificar si el usuario está logueado
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    this.innerHTML = `
              <header class="header container-fluid flex-column justify-content-center align-items-center text-white p-0 m-0 z-2">
                  <nav class="header__nav navbar fixed-top p-2" role="navigation">
                      <div
                      class="header__nav__items container-fluid flex-nowrap justify-content-xl-around justify-content-between align-items-center w-100 m-0 p-0"
                      >
                          <a
                              href="${href}"
                              class="header__nav__item header__nav__button--logo navbar-brand"
                              type="button"
                              aria-label="Ir al inicio"
                          >
                              <h1 class="header__nav__button__logo__title d-none">
                                  ETN Turistar Lujo
                              </h1>
                              <img
                              class="header__nav__button__logo__img img-fluid"
                              src="${src}"
                              alt="${alt}"
                              />
                          </a>
  
                          <!-- Contenedor para elementos que se mueven -->
  
                          <ul class="header__nav__list d-flex justify-content-center align-items-center text-center gap-4 m-0" id="navbarToggler">
                              ${
                                isLoggedIn
                                  ? `
                                  <li class="header__nav__list__button nav-item">
                                      <!-- Botón de cierre de sesión -->
                                      <button id="logout-button" type="button" aria-label="Cerrar sesión" class="__btn-logout btn text-light d-xl-flex d-none" style="width: 8rem;">
                                          Cerrar sesión
                                      </button>
                                  </li>
                              `
                                  : ""
                              }
                              <li class="header__nav__list__button nav-item">
                                  <a
                                      id="language-toggle-button"
                                      class="header__nav__button--language nav-link btn bg-transparent border-0"
                                      type="button"
                                      aria-label="Cambiar idioma"
                                  >
                                      <span
                                      class="header__nav__button__language__icon icon-mx-flag d-inline-block"
                                      id="Lanaguage-Icon-Mx"
                                      >
                                      <span class="path1"></span><span class="path2"></span
                                      ><span class="path3"></span><span class="path4"></span
                                      ><span class="path5"></span><span class="path6"></span
                                      ><span class="path7"></span><span class="path8"></span
                                      ><span class="path9"></span><span class="path10"></span
                                      ><span class="path11"></span><span class="path12"></span
                                      ><span class="path13"></span><span class="path14"></span
                                      ><span class="path15"></span><span class="path16"></span
                                      ><span class="path17"></span><span class="path18"></span
                                      ><span class="path19"></span><span class="path20"></span
                                      ><span class="path21"></span><span class="path22"></span>
                                      </span>
  
                                      <span
                                      class="header__nav__button__language__icon icon-us-flag d-none"
                                      id="Lanaguage-Icon-US"
                                      >
                                      <span class="path1"></span><span class="path2"></span
                                      ><span class="path3"></span><span class="path4"></span
                                      ><span class="path5"></span><span class="path6"></span
                                      ><span class="path7"></span><span class="path8"></span
                                      ><span class="path9"></span><span class="path10"></span
                                      ><span class="path11"></span><span class="path12"></span
                                      ><span class="path13"></span><span class="path14"></span
                                      ><span class="path15"></span><span class="path16"></span
                                      ><span class="path17"></span><span class="path18"></span
                                      ><span class="path19"></span><span class="path20"></span
                                      ><span class="path21"></span><span class="path22"></span
                                      ><span class="path23"></span><span class="path24"></span
                                      ><span class="path25"></span><span class="path26"></span
                                      ><span class="path27"></span><span class="path28"></span
                                      ><span class="path29"></span><span class="path30"></span
                                      ><span class="path31"></span><span class="path32"></span
                                      ><span class="path33"></span><span class="path34"></span
                                      ><span class="path35"></span><span class="path36"></span
                                      ><span class="path37"></span><span class="path38"></span
                                      ><span class="path39"></span><span class="path40"></span
                                      ><span class="path41"></span><span class="path42"></span
                                      ><span class="path43"></span><span class="path44"></span
                                      ><span class="path45"></span><span class="path46"></span
                                      ><span class="path47"></span><span class="path48"></span
                                      ><span class="path49"></span><span class="path50"></span>
                                      </span>
                                  </a>
                              </li>
                              <button
                                  class="header__nav__list_button--menu navbar-toggler"
                                  type="button"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#offcanvasNavbar"
                                  aria-controls="offcanvasNavbar"
                                  aria-label="Toggle navigation"
                              >
                                  <i class="icon-bars-menu" :before></i>
                              </button>
                          </ul>
  
                          <!-- Menú Offcanvas -->
  
                          <div
                              class="header__nav__offcanvas offcanvas offcanvas-end align-items-start"
                              tabindex="-1"
                              id="offcanvasNavbar"
                              aria-labelledby="offcanvasNavbarLabel"
                          >
                              <div class="header__nav__offcanvas__container__button offcanvas-header">
                                  <button
                                      type="button"
                                      class="header__nav__offcanvas__container__button--close btn-close"
                                      data-bs-dismiss="offcanvas"
                                      aria-label="Close"
                                  ></button>
                              </div>
                              <div class="header__nav__offcanvas__content__list offcanvas-body w-100">
                                  <ul class="header__nav__offcanvas__content__list__items navbar-nav list-group justify-content-end flex-grow-1">
                                      <!-- Aquí se moverán los nav-items en móviles -->
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                                      </li>
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                          <a class="nav-link" href="#">Nosotros</a>
                                      </li>
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                      <a class="nav-link" href="#">Facture su viaje</a>
                                      </li>
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                          <a class="nav-link" href="#">Imprimir pase de abordar</a>
                                      </li>
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                          <a class="nav-link" href="#">Modifique su itinerario</a>
                                      </li>
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                          <a class="nav-link" href="#">Taquillas</a>
                                      </li>
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                          <a class="nav-link" href="#">Servicios a bordo</a>
                                      </li>
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                          <a class="nav-link" href="#">Agencias</a>
                                      </li>
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                          <a class="nav-link" href="#">Utilice su boleto abierto</a>
                                      </li>
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                      <a class="nav-link" href="#">Viajo protejido</a>
                                      </li>
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                          <a class="nav-link" href="#">Bus Protect</a>
                                      </li>
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                          <a class="nav-link" href="#">Bas Protegido</a>
                                      </li>
                                      <!-- Botón de cierre de sesión -->
                                      ${
                                        isLoggedIn
                                          ? `
                                          <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                              <button id="logout-button" type="button" aria-label="Cerrar sesión" class="__btn-logout btn text-black d-xl-none d-flex pe-0 ps-0" style="width: 8rem;">
                                                  Cerrar sesión
                                              </button>
                                          </li>
                                      `
                                          : ""
                                      }
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </nav>
              </header>
              <header class="header container-fluid flex-column justify-content-center align-items-center fixed-top text-white mt-5 p-0 bg-body-tertiary z-1">
                  <nav class="navbar navbar-expand-lg w-100 mt-2">
                      <div class="container-fluid p-0">
                          <button id="customNavbarToggle" class="navbar-toggler" type="button" aria-controls="navbarNavAgency" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarNavAgency">
                              <ul class="navbar-nav justify-content-between align-items-center w-100 ms-3 me-3">
                                    
                            ${
                              isLoggedIn
                                ? `
                                <li class="nav-item"><a href="#" class="nav-link active text-white">Agencia: <strong>VIAJES BUMERAN</strong></a></li>
                                <li class="nav-item"><a href="#" class="nav-link text-white">Usuario:<strong> CABRERA DAVID YAFTE</strong></a></li>

                            `
                                : `
                               
                                <li class="nav-item me-auto"></li>
                            `
                            }
                                    <li class="nav-item dropdown ">
                                      <a class="nav-link dropdown-toggle text-white" href="#" id="agencyDropdownToggle" role="button" aria-expanded="false" >
                                          <strong>Menú Agencias</strong>
                                      </a>
                                      <ul class="dropdown-menu" id="agencyDropdownMenu">
                                         
                                          <li><a class="dropdown-item agency-menu-item" href="#" data-component="app-admin-ticktes">Administrador</a></li>
                                          <li><a class="dropdown-item agency-menu-item" href="#" data-component="layout-select-viaje">Adquirir boleto de autobús</a></li>
                                          <li><a class="dropdown-item agency-menu-item" href="#" data-component="app-open-ticket">Boleto Abierto</a></li>
                                          <li><a class="dropdown-item agency-menu-item" href="#" data-component="app-change-ticktes">Modifique su Itinerario</a></li>
                                          <li><a class="dropdown-item agency-menu-item" href="#" data-component="app-cancel-ticktes">Cancelación</a></li>
                                          <li><a class="dropdown-item agency-menu-item" href="#" data-component="app-change-password">Cambiar Contraseña</a></li>
                                          <li><a class="dropdown-item agency-menu-item" href="#" data-component="app-report-mov">Movimiento</a></li>
                                          
                                      </ul>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
              </header>
          `;

    if (isLoggedIn) {
      const logoutButton = this.querySelector("#logout-button");
      if (logoutButton) {
        logoutButton.addEventListener("click", this.handleLogout.bind(this));
      }
    }

    const languageButton = this.querySelector("#language-toggle-button");
    if (languageButton) {
      languageButton.addEventListener(
        "click",
        this.toggleVisibility.bind(this)
      );
    } else {
      console.error(
        "Botón de idioma (#language-toggle-button) no encontrado en app-header."
      );
    }
  }

  addEventListeners() {
    const toggleBtn = document.querySelector("#customNavbarToggle");
    const navbarCollapse = document.querySelector("#navbarNavAgency");
    const navbarItems = navbarCollapse.querySelectorAll(".agency-menu-item"); // Selecciona los elementos con la clase 'agency-menu-item'
    const agencyDropdownToggle = document.querySelector(
      "#agencyDropdownToggle"
    ); // El enlace "Menú Agencias"

    // Cierra el menú cuando se hace clic en un enlace de 'agency-menu-item'
    navbarItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Solo cierra si el navbar está expandido
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
          toggleBtn.setAttribute("aria-expanded", "false");
        }
      });
    });

    // Impide que el clic en el "Menú Agencias" cierre el menú
    if (agencyDropdownToggle) {
      agencyDropdownToggle.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }
    if (toggleBtn && navbarCollapse) {
      toggleBtn.addEventListener("click", () => {
        const isExpanded = navbarCollapse.classList.toggle("show");
        toggleBtn.setAttribute("aria-expanded", isExpanded.toString());
      });
    }

    const logoutButton = this.querySelector("#logout-button");
    if (logoutButton) {
      logoutButton.addEventListener("click", this.handleLogout.bind(this));
    }

    const offcanvasLogoutButton = this.querySelector(
      ".header__nav__offcanvas__content__list__items__item #logout-button"
    );
    if (offcanvasLogoutButton) {
      offcanvasLogoutButton.addEventListener(
        "click",
        this.handleLogout.bind(this)
      );
    }

    const languageButton = this.querySelector("#language-toggle-button");
    if (languageButton) {
      languageButton.addEventListener(
        "click",
        this.toggleVisibility.bind(this)
      );
    }

    // --- Comportamiento manual del dropdown ---
    const dropdownToggle = this.querySelector("#agencyDropdownToggle");
    const dropdownMenu = this.querySelector("#agencyDropdownMenu");

    if (dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        dropdownMenu.classList.toggle("show");
      });

      document.addEventListener("click", (e) => {
        if (
          !this.contains(e.target) &&
          dropdownMenu.classList.contains("show")
        ) {
          dropdownMenu.classList.remove("show");
        }
      });
    } else {
      console.error("Dropdown toggle o menu no encontrados en app-header.");
    }

    // --- Listeners para los items del Menú Agencias ---
    const agencyMenuItems = this.querySelectorAll(
      "#agencyDropdownMenu .agency-menu-item"
    );
    agencyMenuItems.forEach((item) => {
      item.addEventListener("click", this.handleAgencyMenuClick.bind(this));
    });
  }

  handleAgencyMenuClick(event) {
    event.preventDefault();
    const targetElement = event.currentTarget;
    const componentToLoad = targetElement.dataset.component;
    const dropdownMenu = this.querySelector("#agencyDropdownMenu");

    if (componentToLoad) {
      const mainContentArea = document.getElementById("main-content");
      // ---           ---

      if (mainContentArea) {
        console.log(
          `Cargando componente: <${componentToLoad}></${componentToLoad}>`
        );
        mainContentArea.innerHTML = `<${componentToLoad}></${componentToLoad}>`;
        if (dropdownMenu) {
          dropdownMenu.classList.remove("show");
        }
      } else {
        console.error(
          "¡Error Crítico! El contenedor principal '#main-content' no fue encontrado en el DOM."
        );
        alert(
          "Error: No se pudo encontrar el área principal para cargar el contenido."
        );
      }
    } else {
      console.warn(
        "El item del menú clickeado no tiene el atributo 'data-component'."
      );
    }
  }

  handleLogout() {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  }

  toggleVisibility() {
    const iconMx = this.querySelector("#Lanaguage-Icon-Mx");
    const iconUs = this.querySelector("#Lanaguage-Icon-US");

    if (!iconMx || !iconUs) {
      console.error(
        "No se encontraron los iconos de idioma dentro de app-header."
      );
      return;
    }

    const isMxHidden = iconMx.classList.contains("d-none");

    iconMx.classList.toggle("d-none", !isMxHidden);
    iconMx.classList.toggle("d-inline-block", isMxHidden);

    iconUs.classList.toggle("d-none", isMxHidden);
    iconUs.classList.toggle("d-inline-block", !isMxHidden);
  }
}

customElements.define("app-header-venta-boletos", AppHeader);
