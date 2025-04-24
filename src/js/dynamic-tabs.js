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
