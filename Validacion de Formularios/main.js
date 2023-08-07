const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Validar nombre
    if (name.value.trim() === "") {
        valid = false;
        name.nextElementSibling.textContent = "El nombre es obligatorio.";
    } else {
        name.nextElementSibling.textContent = "";
    }

    // Validar correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value.trim())) {
        valid = false;
        email.nextElementSibling.textContent = "Ingrese un correo válido.";
    } else {
        email.nextElementSibling.textContent = "";
    }

    // Validar contraseña (al menos 6 caracteres)
    if (password.value.trim().length < 6) {
        valid = false;
        password.nextElementSibling.textContent = "La contraseña debe tener al menos 6 caracteres.";
    } else {
        password.nextElementSibling.textContent = "";
    }

    if (valid) {
        form.submit(); // Si es válido, envía el formulario
    }
});
