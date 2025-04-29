class AppHeader extends HTMLElement {
    connectedCallback() {
        const logoData = JSON.parse(this.getAttribute('logo'));
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

    render({src, alt, href}) {
    
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
                                <button
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
                                </button>
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
                <nav class="navbar navbar-expand-lg w-100">
                    <div class="container-fluid p-0">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAgency" aria-controls="navbarNavAgency" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAgency">
                            <ul class="navbar-nav justify-content-between align-items-center w-100">
                                <li class="nav-item"><a href="#" class="nav-link active">Agencia: </a></li>
                                <li class="nav-item"><a href="#" class="nav-link">Usuario: </a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menú Agencias
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Administrador</a></li>
                                        <li><a class="dropdown-item" href="#">Adquirir boleto de autobus</a></li>
                                        <li><a class="dropdown-item" href="#">Boleto Abierto</a></li>
                                        <li><a class="dropdown-item" href="#">Modifique su Itinerario</a></li>
                                        <li><a class="dropdown-item" href="#">Cancelación</a></li>
                                        <li><a class="dropdown-item" href="#">Cambiar Contraseña</a></li>
                                        <li><a class="dropdown-item" href="#">Movimiento</a></li>
                                        <li><a class="dropdown-item" href="#">Cerrar Sesión</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        `;
        // Añadir el listener para el botón de cierre de sesión si está logueado
        if (isLoggedIn) {
            const logoutButton = this.querySelector("#logout-button");
            if (logoutButton) {
                logoutButton.addEventListener("click", this.handleLogout.bind(this));
            }
        }
        // --- listener después de que el HTML esté en el DOM ---
        const languageButton = this.querySelector("#language-toggle-button"); // Ahora sí encontrará el botón por ID
        if (languageButton) {
            // Usamos .bind(this) para asegurar que 'this' dentro de toggleVisibility se refiera al componente
            languageButton.addEventListener("click", this.toggleVisibility.bind(this));
        } else {
             // log por si acaso sigue sin encontrarlo
             console.error("Botón de idioma (#language-toggle-button) no encontrado en app-header.");
        }
    }

    addEventListeners() {
        // Listener para el botón de cierre de sesión en el menú principal
        const logoutButton = this.querySelector("#logout-button");
        if (logoutButton) {
            logoutButton.addEventListener("click", this.handleLogout.bind(this));
        }
    
        // Listener para el botón de cierre de sesión en el menú desplegable (offcanvas)
        const offcanvasLogoutButton = this.querySelector(".header__nav__offcanvas__content__list__items__item #logout-button");
        if (offcanvasLogoutButton) {
            offcanvasLogoutButton.addEventListener("click", this.handleLogout.bind(this));
        }
    
        // Listener para el botón de cambio de idioma
        const languageButton = this.querySelector("#language-toggle-button");
        if (languageButton) {
            languageButton.addEventListener("click", this.toggleVisibility.bind(this));
        } else {
            console.error("Botón de idioma (#language-toggle-button) no encontrado en app-header.");
        }
    }

    // Método para manejar el cierre de sesión
    handleLogout() {
        // Elimina el estado de sesión del localStorage
        localStorage.removeItem("isLoggedIn");

        // Redirige al usuario a la página de inicio de sesión
        window.location.reload(); // Recarga la página para mostrar la pantalla de login
    }

    // --- Método para cambiar la visibilidad del icono de idioma ---
    toggleVisibility() {
        // Usar this.querySelector para buscar DENTRO del componente
        const iconMx = this.querySelector("#Lanaguage-Icon-Mx");
        const iconUs = this.querySelector("#Lanaguage-Icon-US");

        // Comprobación extra por si los elementos no se encuentran
        if (!iconMx || !iconUs) {
            console.error("No se encontraron los iconos de idioma dentro de app-header.");
            return;
        }

        // Lógica original, pero usando classList.toggle para simplificar
        const isMxHidden = iconMx.classList.contains("d-none");

        iconMx.classList.toggle("d-none", !isMxHidden);
        iconMx.classList.toggle("d-inline-block", isMxHidden);

        iconUs.classList.toggle("d-none", isMxHidden);
        iconUs.classList.toggle("d-inline-block", !isMxHidden);
    }
}
customElements.define("app-header-venta-boletos", AppHeader);