// Obtener el formulario y el contenedor de errores
const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Evento de envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío tradicional del formulario

    const cuit = document.getElementById('cuit').value;
    const password = document.getElementById('password').value;

    // Validación del CUIT (11 dígitos numéricos)
    if (cuit.length !== 11 || isNaN(cuit)) {
        errorMessage.textContent = 'El CUIT debe tener 11 dígitos numéricos, sin espacios ni guiones.';
        return;  // Detener el flujo si la validación falla
    }

    // Validación de la contraseña (esto debería ser mejorado según tu lógica de seguridad)
    if (password === "") {
        errorMessage.textContent = 'La contraseña no puede estar vacía.';
        return;  // Detener el flujo si la contraseña está vacía
    }

    // Si la validación es exitosa
    errorMessage.textContent = '';  // Limpiar el mensaje de error

    // Verificar los datos de autenticación
    if (cuit === "20412459572" && password === "contraseña123") {
        // Redirigir al usuario a otra página después de un ingreso exitoso
        window.location.href = "admin.html";  // Cambia la URL por la que desees
    } else {
        // Si los datos son incorrectos, mostrar mensaje de error
        errorMessage.textContent = "CUIT o contraseña incorrectos.";
    }
});