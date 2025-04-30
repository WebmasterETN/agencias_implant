function dynamic_tabs() {
    const tabLinks = document.querySelectorAll('.main-tabs .nav-link');
    const statusText = document.getElementById('statusText');

    tabLinks.forEach((link, index) => {
        link.addEventListener('click', function() {
            statusText.textContent = `Paso ${index + 1} de 3`;
        });
    });
}

dynamic_tabs(); // Llamada directa


//----------------LOGIC BOTON BACK TO SELECT TIME - DETALLES VIAJE PAGO
// Obtén una referencia al contenedor principal donde se cargan los layouts
const mainContentArea = document.getElementById('main-content');

if (mainContentArea) {
  document.body.addEventListener('navigate-to-select-time', (event) => {
    console.log('Evento navigate-to-select-time recibido. Cambiando a layout-select-time.');
    mainContentArea.innerHTML = '<layout-select-time></layout-select-time>';
    mainContentArea.classList.remove('d-none');
  });
  document.body.addEventListener('navigate-to-payment', (event) => {
    console.log('Evento navigate-to-payment recibido. Cambiando a app-main-pasarela-pago.');
    mainContentArea.innerHTML = '<app-main-pasarela-pago></app-main-pasarela-pago>';
    mainContentArea.classList.remove('d-none');
  });
  function showSelectViajeLayout() {
      if (mainContentArea) {
          mainContentArea.innerHTML = '<layout-select-viaje></layout-select-viaje>';
          mainContentArea.classList.remove('d-none'); // Asegurarse de que sea visible
      } else {
          console.error('Contenedor main#main-content no encontrado.');
      }
  }
} else {
  console.error('El contenedor principal main#main-content no fue encontrado.');
}