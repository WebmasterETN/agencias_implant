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
                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item dropdown list-group-item-action">
                                        <a class="nav-link dropdown-toggle" href="#" id="dropdownBoletos" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <!-- CAMBIO AQUÍ -->
                                          Boletos de autobús
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="dropdownBoletos">
                                          <a class="dropdown-item" href="https://etn.com.mx/boletos-de-autobus.html">Tipos de Boleto</a>
                                          <a class="dropdown-item" href="https://etn.com.mx/donde-comprar-etn.html">¿Dónde comprar?</a>
                                          <a class="dropdown-item" href="https://etn.com.mx/horarios-y-destinos-etn.html">Horarios</a>
                                        </div>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item">
                                        <a class="nav-link" href="https://etn.com.mx/turismo/">Renta de autobuses</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item">
                                        <a class="nav-link" href="https://etn.com.mx/destinos.html">Destinos</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="dropdownTerminales" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <!-- CAMBIO AQUÍ -->
                                          Terminales
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="dropdownTerminales">
                                          <a class="dropdown-item" href="https://etn.com.mx/taquillas.html">Taquillas</a>
                                          <a class="dropdown-item" href="https://etn.com.mx/salas-de-espera-vip.html">Salas de Espera</a>
                                          <a class="dropdown-item" href="https://etn.com.mx/salidas-charters.html">Salidas Charters</a>
                                        </div>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item">
                                        <a class="nav-link" href="https://etn.com.mx/servicios-a-bordo.html">Servicios a bordo</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item">
                                        <a class="nav-link" href="https://etn.com.mx/promociones.html">Promociones</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item">
                                        <a class="nav-link" href="https://venta.etn.com.mx/request.aspx?PRGNAME=AccesoEx&amp;ARGUMENTS=-AAG,-AH,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-AES">Agencias</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="dropdownPagos" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <!-- CAMBIO AQUÍ -->
                                          Pagos referenciados
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="dropdownPagos">
                                          <a class="dropdown-item" href="https://etn.com.mx/pago-referenciado-walmart.html">WALMART</a>
                                          <a class="dropdown-item" href="https://etn.com.mx/pago-referenciado-paynet.html">PAYNET</a>
                                          <a class="dropdown-item" href="https://etn.com.mx/pago-referenciado-banamex.html">BANAMEX</a>
                                          <a class="dropdown-item" href="https://etn.com.mx/pago-referenciado-oxxo.html">OXXO PAY</a>
                                          <a class="dropdown-item" href="https://etn.com.mx/todito-cash.html">TODITO CASH</a>
                                        </div>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item">
                                        <a class="nav-link" href="https://etn.com.mx/viajero-anticipado.html">Viajero Anticipado</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item">
                                        <a class="nav-link" href="https://etn.com.mx/viajero-protegido.html">Viajero Protegido</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item">
                                        <a class="nav-link" href="https://www.viajamas.com/">Viaja más</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item">
                                        <a class="nav-link" href="https://etn.com.mx/viaja-ahorrando.html">Viaja Ahorrando</a>
                                      </li>

                                      <li class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action nav-item">
                                        <a class="nav-link" href="https://etn.com.mx/blog/">BLOG</a>
                                      </li>

                                      <li  class="header__nav__offcanvas__content__list__items__itemnav-item list-group-item-action dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="dropdownOtros" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                          Otros Servicios
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownOtros"> <!-- AÑADIDO aria-labelledby -->
                                          <li><a class="dropdown-item" href="https://etn.com.mx/atencion-a-clientes-app/index.php">Atención a clientes</a></li>
                                          <li><a class="dropdown-item" href="https://venta.etn.com.mx/request.aspx?PRGNAME=MiViaje">Mi viaje</a></li>
                                          <li><a class="dropdown-item" href="https://venta.etn.com.mx/request.aspx?PRGNAME=AccesoEx&amp;ARGUMENTS=-AIA,-AV,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-AES">Utiliza tu Boleto Abierto</a></li>
                                        </ul>
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
      // --- Navbar de Agencias (Toggle y cierre de items) ---
      // Busca elementos DENTRO del componente usando this.querySelector
      const toggleBtn = this.querySelector("#customNavbarToggle");
      const navbarCollapse = this.querySelector("#navbarNavAgency");
  
      // Verifica si ambos elementos existen antes de añadir listeners
      if (toggleBtn && navbarCollapse) {
        // Listener para el botón que muestra/oculta el navbar de agencias en móviles
        toggleBtn.addEventListener("click", () => {
          const isExpanded = navbarCollapse.classList.toggle("show");
          toggleBtn.setAttribute("aria-expanded", isExpanded.toString());
        });
  
        // Listener para los items DENTRO del navbar colapsable de agencias
        const navbarItems = navbarCollapse.querySelectorAll(".agency-menu-item");
        navbarItems.forEach((item) => {
          item.addEventListener("click", () => {
            // Cierra el navbar colapsable si está abierto
            if (navbarCollapse.classList.contains("show")) {
              navbarCollapse.classList.remove("show");
              toggleBtn.setAttribute("aria-expanded", "false");
            }
            // También cierra el dropdown de agencias si está abierto (importante)
            const agencyDropdownMenu = this.querySelector("#agencyDropdownMenu");
             if (agencyDropdownMenu && agencyDropdownMenu.classList.contains('show')) {
                 agencyDropdownMenu.classList.remove('show');
                 const agencyDropdownToggleElement = this.querySelector("#agencyDropdownToggle");
                 if(agencyDropdownToggleElement) {
                   agencyDropdownToggleElement.setAttribute('aria-expanded', 'false');
                 }
             }
          });
        });
      } else {
          // Es útil saber si estos elementos cruciales no se encontraron
          console.warn("Warning: Toggle button (#customNavbarToggle) or navbar collapse (#navbarNavAgency) not found within app-header.");
      }
  
      // --- Botones de Logout (Ambos) ---
      // Selecciona TODOS los botones con id="logout-button" dentro del componente
      const allLogoutButtons = this.querySelectorAll("#logout-button");
      allLogoutButtons.forEach(btn => {
          // Asegúrate de que la función handleLogout está bindeada correctamente
          btn.addEventListener('click', this.handleLogout.bind(this));
      });
      // Ya no necesitas buscar offcanvasLogoutButton por separado
  
      // --- Botón de Idioma ---
      const languageButton = this.querySelector("#language-toggle-button");
      if (languageButton) {
        languageButton.addEventListener("click", this.toggleVisibility.bind(this));
      } else {
          console.warn("Warning: Language toggle button (#language-toggle-button) not found within app-header.");
      }
  
      // --- Dropdown Manual: MENÚ AGENCIAS ---
      const agencyDropdownToggleElement = this.querySelector("#agencyDropdownToggle");
      const agencyDropdownMenu = this.querySelector("#agencyDropdownMenu");
  
      if (agencyDropdownToggleElement && agencyDropdownMenu) {
        agencyDropdownToggleElement.addEventListener("click", (e) => {
          e.preventDefault(); // Evita la navegación si href="#"
          e.stopPropagation(); // Detiene la propagación para que el listener del document no lo cierre al instante
  
          // Alterna la visibilidad del menú de agencias
          const isShown = agencyDropdownMenu.classList.toggle("show");
          // Actualiza el estado ARIA
          agencyDropdownToggleElement.setAttribute("aria-expanded", isShown.toString());
  
          // Si se está mostrando el menú de agencias, cierra los dropdowns del offcanvas
          if (isShown) {
              this.closeAllOffcanvasDropdowns(); // Llama al helper para cerrar los otros
          }
        });
  
         // --- Listeners para los items DENTRO del Menú Agencias ---
         // Es bueno añadir estos listeners aquí, asegurando que agencyDropdownMenu existe
         const agencyMenuItems = agencyDropdownMenu.querySelectorAll(".agency-menu-item");
         agencyMenuItems.forEach((item) => {
           // El handler handleAgencyMenuClick ya cierra el dropdown
           item.addEventListener("click", this.handleAgencyMenuClick.bind(this));
         });
  
      } else {
        // Error crítico si el menú principal de agencias no funciona
        console.error("Error: Agency dropdown toggle (#agencyDropdownToggle) or menu (#agencyDropdownMenu) not found within app-header.");
      }
  
  
      // --- Dropdown Manual: MENÚS DENTRO DEL OFFCANVAS ---
      // Selecciona todos los toggles de dropdown DENTRO del offcanvas
      const offcanvasDropdownToggles = this.querySelectorAll('#offcanvasNavbar .dropdown-toggle');
  
      offcanvasDropdownToggles.forEach(toggle => {
          toggle.addEventListener('click', (event) => {
              event.preventDefault(); // Evita que el enlace '#' navegue
              event.stopPropagation(); // Evita que el listener del document lo cierre inmediatamente
  
              // Asume que el menú (div o ul) es el siguiente hermano
              const menu = toggle.nextElementSibling;
  
              // Verifica que el siguiente elemento sea un menú desplegable válido
              if (menu && (menu.classList.contains('dropdown-menu') || menu.tagName === 'UL')) {
                   // Antes de abrir este, cierra cualquier OTRO dropdown abierto DENTRO del offcanvas
                   this.closeOtherOffcanvasDropdowns(menu); // Llama al helper
  
                   // Alterna la clase 'show' en el menú actual
                   const isShown = menu.classList.toggle('show');
                   // Actualiza el estado ARIA del toggle clickeado
                   toggle.setAttribute('aria-expanded', isShown.toString());
  
                   // Si se está mostrando un menú del offcanvas, cierra el dropdown de agencias
                   if (isShown && agencyDropdownMenu && agencyDropdownMenu.classList.contains('show')) {
                       agencyDropdownMenu.classList.remove('show');
                       if(agencyDropdownToggleElement) { // Asegúrate que el toggle de agencias existe
                          agencyDropdownToggleElement.setAttribute('aria-expanded', 'false');
                       }
                   }
              } else {
                  // Ayuda a depurar si la estructura HTML no es la esperada
                  console.error("Error: Dropdown menu not found as the next sibling for toggle:", toggle);
              }
          });
      });
  
  
      // --- Listener Global para cerrar dropdowns al hacer clic fuera ---
      // Guardamos la referencia a la función bindeada para poder removerla después
      // Esto es importante para evitar listeners duplicados si addEventListeners se llama más de una vez
      // o para limpiarlo en disconnectedCallback
      this._boundClickHandler = this._handleDocumentClick.bind(this);
  
      // Removemos el listener anterior (si existe) antes de añadir el nuevo.
      // Esto previene que se acumulen listeners si render() y addEventListeners() se llaman repetidamente.
      document.removeEventListener('click', this._boundClickHandler);
  
      // Añadimos el listener al documento para detectar clics fuera de los menús abiertos
      document.addEventListener('click', this._boundClickHandler);
  
    } // --- Fin de addEventListeners ---

    handleAgencyMenuClick(event) {
      event.preventDefault(); // Previene la acción por defecto del enlace
      const targetElement = event.currentTarget; // El <li> o <a> clickeado
      const componentToLoad = targetElement.dataset.component; // Obtiene el nombre del componente a cargar
      const dropdownMenu = this.querySelector("#agencyDropdownMenu"); // El menú dropdown de agencias
      const agencyDropdownToggleElement = this.querySelector("#agencyDropdownToggle"); // El toggle del menú de agencias
      const offcanvasElement = this.querySelector('#offcanvasNavbar'); // El contenedor del Offcanvas
  
      // 1. Cierra el dropdown de agencias SIEMPRE que se hace clic en un item
      if (dropdownMenu && dropdownMenu.classList.contains('show')) {
          dropdownMenu.classList.remove('show');
          // Actualiza ARIA en el toggle correspondiente
          if (agencyDropdownToggleElement) {
              agencyDropdownToggleElement.setAttribute('aria-expanded', 'false');
          }
      }
  
      // 2. Intenta cerrar el Offcanvas si está abierto
      // Verifica si Bootstrap y su componente Offcanvas están disponibles globalmente
      if (offcanvasElement && typeof bootstrap !== 'undefined' && bootstrap.Offcanvas) {
           const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
           // Cierra solo si existe una instancia y el offcanvas está visible
           if (offcanvasInstance && offcanvasElement.classList.contains('show')) {
               offcanvasInstance.hide();
           }
      } else if (offcanvasElement && offcanvasElement.classList.contains('show')) {
           // Fallback: Intento de cierre manual si Bootstrap JS no está o falla
           console.warn("Bootstrap Offcanvas JS no detectado o instancia no encontrada. Intentando cierre manual del Offcanvas.");
           offcanvasElement.classList.remove('show');
           // Elimina el backdrop si existe
           const backdrop = document.querySelector('.offcanvas-backdrop');
           if (backdrop) {
               backdrop.remove();
           }
           // Restaura el scroll y padding del body (Bootstrap los modifica)
           document.body.style.overflow = '';
           document.body.style.paddingRight = '';
      }
  
      // 3. Carga el componente si está definido
      if (componentToLoad) {
        const mainContentArea = document.getElementById("main-content"); // Busca el área principal
  
        if (mainContentArea) {
          console.log(`Cargando componente: <${componentToLoad}></${componentToLoad}>`);
          // Reemplaza el contenido del área principal con el nuevo componente
          mainContentArea.innerHTML = `<${componentToLoad}></${componentToLoad}>`;
          // El dropdown ya se cerró en el paso 1
        } else {
          // Error si no se encuentra el contenedor principal
          console.error("¡Error Crítico! El contenedor principal '#main-content' no fue encontrado en el DOM.");
          alert("Error: No se pudo encontrar el área principal para cargar el contenido.");
        }
      } else {
        // Advertencia si el item no tiene el atributo data-component
        console.warn("El item del menú clickeado no tiene el atributo 'data-component'.");
      }
    }
  

    handleLogout() {
      // Limpia el estado de login
      localStorage.removeItem("isLoggedIn");
  
      // --- NUEVO: Limpiar listener global antes de recargar ---
      // Es importante remover el listener que añadimos al 'document'
      // para evitar posibles memory leaks o comportamientos inesperados.
      if (this._boundClickHandler) {
          document.removeEventListener('click', this._boundClickHandler);
          console.log('Logout: Removed document click listener.'); // Mensaje de depuración opcional
      }
      // --- FIN NUEVO ---
  
      // Recarga la página para reflejar el estado de logout
      window.location.reload();
    }
  
  toggleVisibility() {
    const iconMx = this.querySelector("#Lanaguage-Icon-Mx");
    const iconUs = this.querySelector("#Lanaguage-Icon-US");

    // Verifica que ambos iconos existan
    if (!iconMx || !iconUs) {
      console.error(
        "Error: No se encontraron los iconos de idioma (#Lanaguage-Icon-Mx or #Lanaguage-Icon-US) dentro de app-header."
      );
      return; // Sale si no se encuentran los iconos
    }

    // Comprueba si el icono de México está actualmente oculto (usando d-none)
    const isMxHidden = iconMx.classList.contains("d-none");

    // Alterna las clases 'd-none' y 'd-inline-block' para ambos iconos
    // El segundo argumento de toggle fuerza a añadir (true) o quitar (false) la clase.
    iconMx.classList.toggle("d-none", !isMxHidden); // Oculta MX si NO estaba oculto, lo muestra si SÍ estaba oculto
    iconMx.classList.toggle("d-inline-block", isMxHidden); // Muestra MX si estaba oculto, lo oculta si NO estaba oculto

    iconUs.classList.toggle("d-none", isMxHidden); // Oculta US si MX estaba oculto, lo muestra si MX NO estaba oculto
    iconUs.classList.toggle("d-inline-block", !isMxHidden); // Muestra US si MX NO estaba oculto, lo oculta si MX SÍ estaba oculto
  }

}

customElements.define("app-header-venta-boletos", AppHeader);
