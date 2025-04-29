document.addEventListener("DOMContentLoaded", () => {
  const loginSection = document.getElementById("login-section");
  const mainContent = document.getElementById("main-content");

  // Credenciales de prueba para desarrollo frontend
  const testCredentials = {
    username: "testuser",
    password: "testpassword",
  };

  // Verificar si el usuario ya está logueado
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    loginSection.classList.add("d-none");
    mainContent.classList.remove("d-none");
  }

  // Manejar el envío del formulario de login
  document.querySelector("app-login form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar credenciales
    if (
      username === testCredentials.username &&
      password === testCredentials.password
    ) {
      // Guardar el estado de sesión en localStorage
      localStorage.setItem("isLoggedIn", "true");

      // Ocultar la sección de login y mostrar el contenido principal
      loginSection.classList.add("d-none");
      mainContent.classList.remove("d-none");

      // Emitir un evento personalizado para notificar que el usuario ha iniciado sesión
      document.dispatchEvent(new CustomEvent("userLoggedIn"));
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
});