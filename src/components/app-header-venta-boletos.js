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

                          <ul class="header__nav__list d-flex justify-content-center align-items-center text-center gap-4 m-0" id="navbarToggler">
                              ${
                                isLoggedIn
                                  ? `
                                  <li class="header__nav__list__button nav-item">
                                      <button id="logout-button-desktop" type="button" aria-label="Cerrar sesión" class="__btn-logout btn text-light d-xl-flex d-none" style="width: 8rem;">
                                          Cerrar sesión
                                      </button>
                                  </li>
                              `
                                  : `
                                  <li class="header__nav__list__button nav-item">
                                      <button id="login-button-desktop" type="button" aria-label="Iniciar sesión" class="__btn-login btn btn-outline-light d-xl-flex d-none" style="width: 8rem;">
                                          Iniciar sesión
                                      </button>
                                  </li>
                                  `
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
                                      <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span>
                                      </span>
                                      <span
                                      class="header__nav__button__language__icon icon-us-flag d-none"
                                      id="Lanaguage-Icon-US"
                                      >
                                      <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span><span class="path29"></span><span class="path30"></span><span class="path31"></span><span class="path32"></span><span class="path33"></span><span class="path34"></span><span class="path35"></span><span class="path36"></span><span class="path37"></span><span class="path38"></span><span class="path39"></span><span class="path40"></span><span class="path41"></span><span class="path42"></span><span class="path43"></span><span class="path44"></span><span class="path45"></span><span class="path46"></span><span class="path47"></span><span class="path48"></span><span class="path49"></span><span class="path50"></span>
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
                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action dropdown">

                                        <a class="nav-link dropdown-toggle" href="#" id="boletosDropdownToggle" role="button" aria-haspopup="true" aria-expanded="false">
                                          Boletos de autobus
                                        </a>
                                     
                                        <ul class="dropdown-menu active" id="boletosDropdownMenu">
                                           <li> <a class="dropdown-item" href="https://costaline.com.mx/boletos-de-autobus.html">Tipos de Boleto</a></li>
                                           <li> <a class="dropdown-item" href="https://costaline.com.mx/donde-comprar-costaline.html">¿Dónde comprar?</a></li>
                                           
                                        </ul>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action nav-item">
                                        <a class="nav-link" href="https://costaline.com.mx/destinos.html">Destinos</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action dropdown">

                                        <a class="nav-link dropdown-toggle" href="#" id="dropdownTerminales" role="button" aria-haspopup="true" aria-expanded="false">
                                          Terminales
                                        </a>

                                        <div class="dropdown-menu" aria-labelledby="dropdownTerminales">
                                          <a class="dropdown-item" href="https://costaline.com.mx/taquillas.html">Taquillas</a>
                                          <a class="dropdown-item" href="https://costaline.com.mx/salas-de-espera-vip.html">Salas de Espera</a>
                                        </div>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                        <a class="nav-link" href="https://costaline.com.mx/servicios-a-bordo.html">Servicios a bordo</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                        <a class="nav-link" href="https://costaline.com.mx/promociones.html">Promociones</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                        <a class="nav-link" href="https://ventas.costaline.com.mx/request.aspx?APPNAME=Navegante&PRGNAME=AccesoEx&ARGUMENTS=-AAG,-AH,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-AES&_ga=2.70363408.1421465980.1688335622-27413750.1682467979">Agencias</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action dropdown">

                                        <a class="nav-link dropdown-toggle" href="#" id="dropdownPagos" role="button" aria-haspopup="true" aria-expanded="false">
                                          Pagos referenciados
                                        </a>

                                        <div class="dropdown-menu" aria-labelledby="dropdownPagos">
                                          <a class="dropdown-item" href="https://costaline.com.mx/pago-referenciado-oxxo.html">OXXO PAY</a>
                                          <a class="dropdown-item" href="https://costaline.com.mx/pago-referenciado-paynet.html">PAYNET</a>
                                          <a class="dropdown-item" href="https://costaline.com.mx/pago-referenciado-walmart.html">WALMART</a>
                                        
                                        </div>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                        <a class="nav-link" href="https://costaline.com.mx/viajero-anticipado/">Viajero Anticipado</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                        <a class="nav-link" href="https://costaline.com.mx/viajero-protegido.html">Viajero Protegido</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                        <a class="nav-link" href="https://www.reservamos.mx/">Viaja más</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                        <a class="nav-link" href="https://costaline.com.mx/viaja-ahorrando.html">Viaja Ahorrando</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                        <a class="nav-link" href="https://costaline.com.mx/blog/">BLOG</a>
                                      </li>

                                      <li  class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action dropdown">

                                        <a class="nav-link dropdown-toggle" href="#" id="dropdownOtros" role="button" aria-expanded="false">
                                          Otros Servicios
                                        </a>

                                        <ul class="dropdown-menu bg-light" aria-labelledby="dropdownOtros">
                                          <li><a class="dropdown-item" href="https://costaline.com.mx/atencion-a-clientes-costaline.html">Atención a clientes</a></li>

                                        </ul>
                                      </li>

                                      ${
                                        isLoggedIn
                                          ? `
                                          <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                              <button id="logout-button-offcanvas" type="button" aria-label="Cerrar sesión" class="__btn-logout btn text-black d-xl-none d-flex pe-0 ps-0" style="width: 8rem;">
                                                  Cerrar sesión
                                              </button>
                                          </li>
                                      `
                                          : `
                                          <li class="header__nav__offcanvas__content__list__items__item nav-item list-group-item-action">
                                              <button id="login-button-offcanvas" type="button" aria-label="Iniciar sesión" class="__btn-login btn text-black d-xl-none d-flex pe-0 ps-0" style="width: 8rem;">
                                                  Iniciar sesión
                                              </button>
                                          </li>
                                          `
                                      }
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </nav>
              </header>

              <header class="header container-fluid flex-column justify-content-center align-items-center fixed-top text-white mt-5 p-0 bg-body-tertiary z-3">
                  <nav class="navbar navbar-expand-lg w-100 mt-4">
                      <div class="container-fluid p-0">
                          <button id="customNavbarToggle" class="navbar-toggler" type="button" aria-controls="navbarNavAgency" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarNavAgency">
                              <ul class="navbar-nav justify-content-between align-items-center w-100 ms-3 me-3">
                                ${
                                  isLoggedIn
                                    ? `
                                    <li class="nav-item"><a href="#" class="nav-link active text-white">Agencia:<strong> VIAJES BUMERAN</strong></a></li>
                                    <li class="nav-item"><a href="#" class="nav-link text-white">Usuario:<strong> CABRERA DAVID YAFTE</strong> </a></li>
                                `
                                    : `
                                    <li class="nav-item me-auto"></li>
                                `
                                }
                                <li class="nav-item dropdown ">

                                  <a class="__menu-dropdown nav-link dropdown-toggle text-white" href="#" id="agencyDropdownToggle" role="button" aria-expanded="false" >
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
  }

  addEventListeners() {
    this.removeEventListeners();

    const toggleBtn = this.querySelector("#customNavbarToggle");
    const navbarCollapse = this.querySelector("#navbarNavAgency");

    if (toggleBtn && navbarCollapse) {
      this._boundHandleAgencyNavbarToggle = this.handleAgencyNavbarToggle.bind(
        this,
        navbarCollapse
      );
      toggleBtn.addEventListener("click", this._boundHandleAgencyNavbarToggle);

      const agencyNavbarItems =
        navbarCollapse.querySelectorAll(".agency-menu-item");
      agencyNavbarItems.forEach((item) => {
        this._boundHandleAgencyMenuItemClickClose =
          this.handleAgencyMenuItemClickClose.bind(
            this,
            navbarCollapse,
            toggleBtn
          );
        item.addEventListener(
          "click",
          this._boundHandleAgencyMenuItemClickClose
        );
        this._boundHandleAgencyMenuClick =
          this.handleAgencyMenuClick.bind(this);
        item.addEventListener("click", this._boundHandleAgencyMenuClick);
      });
    }

    const agencyDropdownToggleElement = this.querySelector(
      "#agencyDropdownToggle"
    );
    const agencyDropdownMenu = this.querySelector("#agencyDropdownMenu");

    if (agencyDropdownToggleElement && agencyDropdownMenu) {
      this._boundHandleAgencyDropdownToggle =
        this.handleDropdownToggleClick.bind(
          this,
          agencyDropdownToggleElement,
          agencyDropdownMenu
        );
      agencyDropdownToggleElement.addEventListener(
        "click",
        this._boundHandleAgencyDropdownToggle
      );

      const agencyMenuItems =
        agencyDropdownMenu.querySelectorAll(".agency-menu-item");
      agencyMenuItems.forEach((item) => {
        this._boundHandleAgencyMenuClick =
          this.handleAgencyMenuClick.bind(this);
        item.addEventListener("click", this._boundHandleAgencyMenuClick);
      });
    }

    const offcanvasDropdownToggles = this.querySelectorAll(
      "#offcanvasNavbar .dropdown-toggle"
    );
    offcanvasDropdownToggles.forEach((toggle) => {
      const menu = toggle.nextElementSibling;
      if (
        menu &&
        (menu.classList.contains("dropdown-menu") || menu.tagName === "UL")
      ) {
        const handler = this.handleDropdownToggleClick.bind(this, toggle, menu);
        toggle._boundDropdownClickHandler = handler;
        toggle.addEventListener("click", handler);

        const offcanvasMenuItems = menu.querySelectorAll(".dropdown-item");
        offcanvasMenuItems.forEach((item) => {
          const itemHandler = (event) => {
            console.log("Offcanvas dropdown item clicked");
            menu.classList.remove("show");
            toggle.setAttribute("aria-expanded", "false");
          };
          item._boundItemClickHandler = itemHandler;
          item.addEventListener("click", itemHandler);
        });
      } else {
        console.error(
          "Dropdown menu not found as the next sibling for toggle:",
          toggle
        );
      }
    });

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      const logoutButtonDesktop = this.querySelector("#logout-button-desktop");
      if (logoutButtonDesktop) {
        this._boundHandleLogout = this.handleLogout.bind(this);
        logoutButtonDesktop.addEventListener("click", this._boundHandleLogout);
      }
      const logoutButtonOffcanvas = this.querySelector(
        "#logout-button-offcanvas"
      );
      if (logoutButtonOffcanvas) {
        logoutButtonOffcanvas.addEventListener(
          "click",
          this._boundHandleLogout || this.handleLogout.bind(this)
        );
      }
    } else {
      const loginButtonDesktop = this.querySelector("#login-button-desktop");
      if (loginButtonDesktop) {
        this._boundHandleLogin = this.handleLogin.bind(this);
        loginButtonDesktop.addEventListener("click", this._boundHandleLogin);
      }
      const loginButtonOffcanvas = this.querySelector(
        "#login-button-offcanvas"
      );
      if (loginButtonOffcanvas) {
        loginButtonOffcanvas.addEventListener(
          "click",
          this._boundHandleLogin || this.handleLogin.bind(this)
        );
      }
    }

    const languageButton = this.querySelector("#language-toggle-button");
    if (languageButton) {
      this._boundToggleVisibility = this.toggleVisibility.bind(this);
      languageButton.addEventListener("click", this._boundToggleVisibility);
    }

    if (!this._boundClickHandler) {
      this._boundClickHandler = this._handleDocumentClick.bind(this);
    }
    document.removeEventListener("click", this._boundClickHandler);
    document.addEventListener("click", this._boundClickHandler);
  }

  removeEventListeners() {
    const toggleBtn = this.querySelector("#customNavbarToggle");
    if (toggleBtn && this._boundHandleAgencyNavbarToggle) {
      toggleBtn.removeEventListener(
        "click",
        this._boundHandleAgencyNavbarToggle
      );
    }

    const agencyNavbarItems = this.querySelectorAll(
      "#navbarNavAgency .agency-menu-item"
    );
    agencyNavbarItems.forEach((item) => {
      if (this._boundHandleAgencyMenuItemClickClose) {
        item.removeEventListener(
          "click",
          this._boundHandleAgencyMenuItemClickClose
        );
      }
    });

    const agencyDropdownToggle = this.querySelector("#agencyDropdownToggle");
    if (agencyDropdownToggle && this._boundHandleAgencyDropdownToggle) {
      agencyDropdownToggle.removeEventListener(
        "click",
        this._boundHandleAgencyDropdownToggle
      );
    }
    const agencyMenuItems = this.querySelectorAll(
      "#agencyDropdownMenu .agency-menu-item"
    );
    agencyMenuItems.forEach((item) => {
      if (this._boundHandleAgencyMenuClick) {
        item.removeEventListener("click", this._boundHandleAgencyMenuClick);
      }
    });

    const offcanvasDropdownToggles = this.querySelectorAll(
      "#offcanvasNavbar .dropdown-toggle"
    );
    offcanvasDropdownToggles.forEach((toggle) => {
      if (toggle._boundDropdownClickHandler) {
        toggle.removeEventListener("click", toggle._boundDropdownClickHandler);
        toggle._boundDropdownClickHandler = null;
      }
      const menu = toggle.nextElementSibling;
      if (
        menu &&
        (menu.classList.contains("dropdown-menu") || menu.tagName === "UL")
      ) {
        const offcanvasMenuItems = menu.querySelectorAll(".dropdown-item");
        offcanvasMenuItems.forEach((item) => {
          if (item._boundItemClickHandler) {
            item.removeEventListener("click", item._boundItemClickHandler);
            item._boundItemClickHandler = null;
          }
        });
      }
    });

    const logoutButtonDesktop = this.querySelector("#logout-button-desktop");
    if (logoutButtonDesktop && this._boundHandleLogout) {
      logoutButtonDesktop.removeEventListener("click", this._boundHandleLogout);
    }
    const logoutButtonOffcanvas = this.querySelector(
      "#logout-button-offcanvas"
    );
    if (logoutButtonOffcanvas && this._boundHandleLogout) {
      logoutButtonOffcanvas.removeEventListener(
        "click",
        this._boundHandleLogout
      );
    }

    const loginButtonDesktop = this.querySelector("#login-button-desktop");
    if (loginButtonDesktop && this._boundHandleLogin) {
      loginButtonDesktop.removeEventListener("click", this._boundHandleLogin);
    }
    const loginButtonOffcanvas = this.querySelector("#login-button-offcanvas");
    if (loginButtonOffcanvas && this._boundHandleLogin) {
      loginButtonOffcanvas.removeEventListener("click", this._boundHandleLogin);
    }

    const languageButton = this.querySelector("#language-toggle-button");
    if (languageButton && this._boundToggleVisibility) {
      languageButton.removeEventListener("click", this._boundToggleVisibility);
    }

    if (this._boundClickHandler) {
      document.removeEventListener("click", this._boundClickHandler);
    }

    this._boundHandleAgencyNavbarToggle = null;
    this._boundHandleAgencyMenuItemClickClose = null;
    this._boundHandleAgencyMenuClick = null;
    this._boundHandleAgencyDropdownToggle = null;

    this._boundHandleLogout = null;
    this._boundHandleLogin = null;
    this._boundToggleVisibility = null;
  }

  handleAgencyNavbarToggle(navbarCollapse, event) {
    const toggleBtn = event.currentTarget;
    const isExpanded = navbarCollapse.classList.toggle("show");
    toggleBtn.setAttribute("aria-expanded", isExpanded.toString());
  }

  handleAgencyMenuItemClickClose(navbarCollapse, toggleBtn, event) {
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
      if (toggleBtn) {
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    }
  }

  handleDropdownToggleClick(toggleElement, menuElement, event) {
    event.preventDefault();
    event.stopPropagation();

    const isOffcanvasDropdown = toggleElement.closest("#offcanvasNavbar");
    const agencyDropdownMenu = this.querySelector("#agencyDropdownMenu");
    const agencyDropdownToggleElement = this.querySelector(
      "#agencyDropdownToggle"
    );

    if (isOffcanvasDropdown) {
      this.closeOtherOffcanvasDropdowns(menuElement);
      if (agencyDropdownMenu && agencyDropdownMenu.classList.contains("show")) {
        agencyDropdownMenu.classList.remove("show");
        if (agencyDropdownToggleElement) {
          agencyDropdownToggleElement.setAttribute("aria-expanded", "false");
        }
      }
    } else {
      this.closeAllOffcanvasDropdowns();
    }

    const isShown = menuElement.classList.toggle("show");
    toggleElement.setAttribute("aria-expanded", isShown.toString());
  }

  handleAgencyMenuClick(event) {
    event.preventDefault();
    const targetElement = event.currentTarget;
    const componentToLoad = targetElement.dataset.component;
    const dropdownMenu = this.querySelector("#agencyDropdownMenu");
    const agencyDropdownToggleElement = this.querySelector(
      "#agencyDropdownToggle"
    );

    if (dropdownMenu && dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
      if (agencyDropdownToggleElement) {
        agencyDropdownToggleElement.setAttribute("aria-expanded", "false");
      }
    }

    const offcanvasElement = this.querySelector("#offcanvasNavbar");
    if (
      offcanvasElement &&
      typeof bootstrap !== "undefined" &&
      bootstrap.Offcanvas
    ) {
      const offcanvasInstance =
        bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvasInstance && offcanvasElement.classList.contains("show")) {
        offcanvasInstance.hide();
      }
    }

    if (componentToLoad) {
      const mainContentArea = document.getElementById("main-content");
      if (mainContentArea) {
        mainContentArea.innerHTML = `<${componentToLoad}></${componentToLoad}>`;
      } else {
        console.error("Contenedor '#main-content' no encontradossss.");
        alert("Error: No se pudo encontrar el área principal.");
      }
    } else {
      console.warn("Item no tiene 'data-component'.");
    }
  }

  _handleDocumentClick(event) {
    this.closeAllDropdownsIfNeeded(event.target);
  }

  handleLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    if (this._boundClickHandler) {
      document.removeEventListener("click", this._boundClickHandler);
    }
    document.dispatchEvent(new CustomEvent("userLoggedOut"));

    window.location.reload();
  }

  handleLogin() {
    document.dispatchEvent(new CustomEvent("requestLogin"));
  }

  toggleVisibility() {
    const iconMx = this.querySelector("#Lanaguage-Icon-Mx");
    const iconUs = this.querySelector("#Lanaguage-Icon-US");
    if (!iconMx || !iconUs) {
      console.error("Iconos de idioma no encontradosss.");
      return;
    }
    const isMxHidden = iconMx.classList.contains("d-none");
    iconMx.classList.toggle("d-none", !isMxHidden);
    iconMx.classList.toggle("d-inline-block", isMxHidden);
    iconUs.classList.toggle("d-none", isMxHidden);
    iconUs.classList.toggle("d-inline-block", !isMxHidden);
  }

  closeOtherOffcanvasDropdowns(excludeMenu) {
    const allOffcanvasMenus = this.querySelectorAll(
      "#offcanvasNavbar .dropdown-menu, #offcanvasNavbar ul[aria-labelledby]"
    );
    allOffcanvasMenus.forEach((menu) => {
      if (menu !== excludeMenu && menu.classList.contains("show")) {
        menu.classList.remove("show");
        const toggleId = menu.getAttribute("aria-labelledby");
        const toggle = toggleId
          ? this.querySelector(`#${toggleId}`)
          : menu.previousElementSibling;
        if (toggle && toggle.classList.contains("dropdown-toggle")) {
          toggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  }

  closeAllOffcanvasDropdowns() {
    this.closeOtherOffcanvasDropdowns(null);
  }

  closeAllDropdownsIfNeeded(clickedElement) {
    const allToggles = this.querySelectorAll(".dropdown-toggle");
    let clickedInsideADropdown = false;

    allToggles.forEach((toggle) => {
      const menu =
        toggle.id === "agencyDropdownToggle"
          ? this.querySelector("#agencyDropdownMenu")
          : toggle.nextElementSibling;

      if (
        toggle.contains(clickedElement) ||
        (menu &&
          menu.classList.contains("show") &&
          menu.contains(clickedElement))
      ) {
        clickedInsideADropdown = true;
      }
    });

    if (!clickedInsideADropdown) {
      allToggles.forEach((toggle) => {
        const menu =
          toggle.id === "agencyDropdownToggle"
            ? this.querySelector("#agencyDropdownMenu")
            : toggle.nextElementSibling;

        if (menu && menu.classList.contains("show")) {
          menu.classList.remove("show");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }
  }
}

customElements.define("app-header-venta-boletos", AppHeader);
