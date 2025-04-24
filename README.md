# Compras de boletos agencias: Aplicación Web para la compra de boletos de Autobuses para agencias

![ETN Turistar Lujo Screenshot](src/assets/img/logos/compañia/Logo%20Hor%20blanco.webp)

**Seleccione el idioma / Select Language:**
- [Versión en Español](#Compras-de-boletos-agencias:-Aplicación-Web-para-la-compra-de-boletos-de-Autobuses-para-agencias)
- [English Version](#Ticket-Purchases-for-Agencies:-Web-Application-for-the-Purchase-of-Bus-Tickets-for-Agencies)

---

## Version en Español

---

Esta es una aplicación web diseñada para brindar a los usuarios de agencias un acceso fácil y rápido a los horarios de autobuses. Cuenta con un diseño responsivo, navegación dinámica, filtros de búsqueda y una interfaz limpia y amigable. Este proyecto prioriza la modularidad, mantenibilidad y una excelente experiencia de usuario.

## Tabla de Contenidos

- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
  - [Estructura HTML](#estructura-html)
  - [Estructura SCSS](#estructura-scss)
  - [Módulos JavaScript](#módulos-javascript)
- [Características Clave](#características-clave)
- [Configuración y Uso](#configuración-y-uso)
- [Uso de Íconos Personalizados](#uso-de-íconos-personalizados)
- [Trabajo con Componentes](#trabajo-con-componentes)
  - [Componente Header](#componente-header)
  - [Componente Footer](#componente-footer)
- [Uso de Módulos JavaScript](#uso-de-módulos-javascript)
  - [Módulo Header (`header.js`)](#módulo-header-headerjs)
  - [Módulo Principal (`main.js`)](#módulo-principal-mainjs)
  - [Módulo de Inicio de Sesión (`login-handler.js`)](#módulo-de-inicio-de-sesión-login-handlerjs)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Tecnologías Utilizadas

- **HTML5:** Para la estructura de la página web.
- **CSS3:** Para el diseño y estilo visual.
- **SCSS:** Para escribir CSS modular y mantenible.
- **Bootstrap:** Para diseño responsivo y componentes preconstruidos.
- **JavaScript (ES6+):** Para elementos interactivos y comportamiento dinámico.
- **Íconos Personalizados:** Icomoon se utiliza para generar los íconos.

## Estructura del Proyecto

El proyecto está organizado en carpetas claras y lógicas para facilitar su mantenimiento y escalabilidad.

### Estructura HTML

El archivo `index.html` es el punto de entrada. Contiene la estructura base de la página, incluyendo header, contenido principal y footer. El HTML es semántico y está bien organizado.

### Estructura SCSS

Los archivos SCSS siguen el patrón 7-1, una práctica común para proyectos SCSS grandes.

- **`_01-settings/`:** Configuraciones globales como variables y fuentes.
- **`_02-tools/`:** Funciones y mixins reutilizables.
- **`_03-generic/`:** Estilos base y reseteo.
- **`_04-elements/`:** Estilos base para elementos HTML.
- **`_05-object/`:** Estilos generales de diseño y animaciones.
- **`_06-components/`:** Estilos para componentes UI específicos.
- **`_07-utilities/`:** Clases utilitarias para estilos rápidos.
- **`styles.scss`:** Archivo principal que importa los anteriores.

### Módulos JavaScript

El código JS se divide en módulos para mayor organización.

- **`main.js`:** Punto de entrada que importa e inicializa los módulos.
- **`header.js`:** Controla el comportamiento dinámico del encabezado.

## Características Clave

- **Header Responsivo:** Se adapta a diferentes tamaños de pantalla.
- **Menú Off-Canvas:** Menú oculto que aparece en móviles.
- **Navegación Dinámica:** Los elementos del menú se ajustan según el tamaño de la ventana.
- **Filtros de Búsqueda:** Sección para filtrar horarios.
- **Visualización de Horarios:** Muestra horarios disponibles con detalles relevantes.
- **Fuentes Personalizadas** y **Íconos Personalizados**.

## Configuración y Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/WebmasterETN/amealcenses.git
   ```
2. Accede al directorio:
   ```bash
   cd amealcenses
   ```
3. Abre `index.html` en tu navegador.

   - No se requiere servidor para su ejecución.

## Uso de Íconos Personalizados

1. **Importa los estilos:** `style.css` en la carpeta `icons` ya está vinculado en `index.html`.
2. **Usa las clases CSS:**
   ```html
   <i class="icon-bus"></i>
   <i class="icon-menu"></i>
   ```
   - Para ver los íconos disponibles, abre el archivo `demo.html` en la carpeta `icons`.

## Trabajo con Componentes

### Componente Header

- **Ubicación:**
  - HTML: `index.html` (`<header>`)
  - SCSS: `scss/_06-components/_header.scss`
  - JS: `js/header.js`
- **Funcionalidad:**
  - Muestra el logo y la navegación.
  - Controla el menú responsivo y dinámico.

### Componente Footer

- **Ubicación:**
  - HTML: `index.html` (`<footer>`)
  - SCSS: `scss/_06-components/_footer.scss`
- **Funcionalidad:**
  - Muestra información de derechos y enlaces adicionales.

## Uso de Módulos JavaScript

### Módulo Header (`header.js`)

- **Propósito:** Control de navegación responsiva.
- **Funciones:**
  - Mueve elementos entre el menú principal y off-canvas.
  - Escucha eventos de `DOMContentLoaded` y `resize`.

### Módulo Principal (`main.js`)

- **Propósito:** Inicializa todos los módulos JS.
- **Funciones:**
  - Punto central para agregar funcionalidades globales.

### Módulo de Inicio de Sesión (`login-handler.js`)

- **Propósito:** Control del login persistente.
- **Uso:**
  - Importar en `index.js`.
  - Eliminar `testCredentials` en producción.

## Contribuciones

1. Haz un fork del repositorio.
2. Crea una nueva rama.
3. Realiza tus cambios y haz commit.
4. Empuja los cambios a tu fork.
5. Envía un pull request.

## Licencia

Este proyecto está bajo licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

# Ticket Purchases for Agencies: Web Application for the Purchase of Bus Tickets for Agencies

**Seleccione el idioma / Select Language:**
- [Versión en Español](#Compras-de-boletos-agencias:-Aplicación-Web-para-la-compra-de-boletos-de-Autobuses-para-agencias)
- [English Version](#Ticket-Purchases-for-Agencies:-Web-Application-for-the-Purchase-of-Bus-Tickets-for-Agencies)

---

## English Version

---

![ETN Turistar Lujo Screenshot](src/assets/img/logos/compañia/Logo%20Hor%20blanco.webp) 

This is a web application designed to provide agency users with quick and easy access to bus schedules. It features a responsive design, dynamic navigation, search filters, and a clean and user-friendly interface. This project prioritizes modularity, maintainability, and an excellent user experience.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
  - [HTML Structure](#html-structure)
  - [SCSS Structure](#scss-structure)
  - [JavaScript Modules](#javascript-modules)
- [Key Features](#key-features)
- [Setup and Usage](#setup-and-usage)
- [Using Custom Icons](#using-custom-icons)
- [Working with Components](#working-with-components)
  - [Header Component](#header-component)
  - [Footer Component](#footer-component)
- [JavaScript Modules Usage](#javascript-modules-usage)
  - [Header Module (`header.js`)](#header-module-headerjs)
  - [Main Module (`main.js`)](#main-module-mainjs)
  - [Main Module (`login-handler.js`)](#main-module-login-handlerjs)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **HTML5:** For structuring the web page.
- **CSS3:** For styling the web page.
- **SCSS:** For writing modular and maintainable CSS.
- **Bootstrap:** For responsive design and pre-built components.
- **JavaScript (ES6+):** For interactive elements and dynamic behavior.
- **Custom Icons:** Icomoon is used to generate custom icons.

## Project Structure

The project is organized into clear and logical folders to ensure maintainability and scalability.

### HTML Structure

The `index.html` file is the entry point of the application. It contains the basic structure of the web page, including the header, main content area, and footer. The HTML is semantic and well-organized, making it easy to understand and modify.

### SCSS Structure

The SCSS files are organized using the 7-1 pattern, a common and effective way to structure large SCSS projects. This pattern helps maintain a clean and scalable codebase.

- **`_01-settings/`:** Contains global settings like variables and font definitions.
  - `_fonts.scss`: Defines custom font faces.
  - `_variables.scss`: Contains SCSS variables (e.g., `$font-primary`, `$color-background`).
- **`_02-tools/`:** Contains mixins and functions for reusable styles.
  - `_mixin.scss`: Contains SCSS mixins for reusable styles (e.g., media queries, button styles).
- **`_03-generic/`:** Contains base styles and resets.
  - `_reset.scss`: Contains CSS reset rules to normalize browser styles.
- **`_04-elements/`:** Contains base styles for HTML elements.
  - `_elements.scss`: Contains base styles for HTML elements (e.g., `h1`, `p`, `a`).
- **`_05-object/`:** Contains styles related to the overall layout and animations.
  - `_animations.scss`: Contains CSS animations.
  - `_layout.scss`: Contains styles related to the overall layout (e.g., grid, flexbox).
- **`_06-components/`:** Contains styles for specific UI components.
  - `_header.scss`: Styles for the header component.
  - `_footer.scss`: Styles for the footer component.
- **`_07-utilities/`:** Contains utility classes for quick styling.
  - `_utilities.scss`: Contains utility classes for quick styling (e.g., `.text-center`, `.margin-top-2`).
- **`styles.scss`:** The main SCSS file that imports all other SCSS files.

### JavaScript Modules

The JavaScript code is divided into modules to improve organization and maintainability.

- **`main.js`:** The entry point for the JavaScript code. It imports and initializes other modules.
- **`header.js`:** Manages the dynamic behavior of the header navigation.

## Key Features

- **Responsive Header:** The header adapts to different screen sizes, with a collapsible navigation menu for smaller screens.
- **Off-Canvas Menu:** A hidden menu that slides in from the side on mobile devices.
- **Dynamic Navigation Items:** Navigation items are moved between the main navigation bar and the off-canvas menu based on screen size.
- **Search Filters:** A section for users to customize their search for bus schedules.
- **Schedule Display:** A section to show available bus schedules with relevant details.
- **Custom Fonts:** The project uses custom fonts defined in the `_fonts.scss` file.
- **Custom Icons:** The project uses custom icons defined in the `icons` folder.

## Setup and Usage

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/WebmasterETN/amealcenses.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd amealcenses
    ```
3.  **Open `index.html` in your web browser.**

    - The project is designed to run directly in a browser without the need for a server.

## Using Custom Icons

The project uses a custom icon font generated with Icomoon. Here's how to use the icons:

1.  **Import the Icon Styles:** The `style.css` file inside the `icons` folder contains the styles for the icon font. This file is already linked in the `index.html` file.
2.  **Use Icon Classes:** Each icon has a corresponding CSS class. To use an icon, add an `<i>` tag with the appropriate class name.

    ```html
    <i class="icon-bus"></i>
    <!-- Example: Bus icon -->
    <i class="icon-menu"></i>
    <!-- Example: Menu icon -->
    ```

    - **Finding Icon Classes:**
      - There will be the following [link](https://drive.google.com/drive/folders/1thbi25J485K5pjSA0vUdkNh_ZNLCCluY?usp=drive_link) to download the demo files of the icons.
      - Open the `demo.html` file in the `icons` folder. This file displays all available icons and their corresponding class names.
      - You can also find the class names in the `style.css` file.

## Working with Components

The project uses a component-based approach for building the UI. Here's how to work with the main components:

### Header Component

- **Location:**
  - HTML: `index.html` (within the `<header>` tag)
  - SCSS: `scss/_06-components/_header.scss`
  - JavaScript: `js/header.js`
- **Functionality:**
  - Displays the website logo and navigation links.
  - Dynamically moves navigation items between the main navigation bar and the off-canvas menu based on screen size.
  - Handles the opening and closing of the off-canvas menu.
- **Usage:**
  - The header component is automatically included in the `index.html` file.
  - The `header.js` module handles its dynamic behavior.
  - You can customize the header's appearance by modifying the `_header.scss` file.

### Footer Component

- **Location:**
  - HTML: `index.html` (within the `<footer>` tag)
  - SCSS: `scss/_06-components/_footer.scss`
- **Functionality:**
  - Displays copyright information and other relevant links.
- **Usage:**
  - The footer component is automatically included in the `index.html` file.
  - You can customize the footer's appearance by modifying the `_footer.scss` file.

## JavaScript Modules Usage

### Header Module (`header.js`)

- **Purpose:** Manages the dynamic behavior of the header navigation.
- **Functionality:**
  - Moves navigation items between the main navigation bar (`#navItems`) and the off-canvas menu (`#offcanvasNavItems`) based on the window width.
  - Uses `DOMContentLoaded` to ensure the DOM is fully loaded before manipulating it.
  - Uses `resize` event listener to update the navigation items when the window is resized.
  - Handles the opening and closing of the off-canvas menu.
- **Usage:**
  - The `header.js` module is imported and initialized in `main.js`.
  - You can modify the behavior of the header by editing the `header.js` file.

### Main Module (`main.js`)

- **Purpose:** The entry point for the JavaScript code.
- **Functionality:**
  - Imports and initializes other JavaScript modules (e.g., `header.js`).
  - Can be used to add global event listeners or other global JavaScript functionality.
- **Usage:**
  - All JavaScript modules should be imported and initialized in `main.js`.
  - You can add new modules and functionality by creating new `.js` files and importing them into `main.js`.

### Main Module (`login-handler.js`)

- **Purpose:** The entry point for the JavaScript code.
- **Functionality:**
  - Handles login.
  - Keeps the login open for the user when they refresh the page.
- **Usage:**
  - Import in file `index.js`.
  - For production remove `testCredentials` function.
  - Test credentials: 
    - username: testuser
    - password: testpassword

## Contributing

If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
"# agencias_implant" 
