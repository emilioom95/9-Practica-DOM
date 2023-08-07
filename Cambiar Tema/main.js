const btnId = document.getElementById('btnId');
const bodyElement = document.body;

let darkThemeEnabled = false;

btnId.addEventListener('click', function() {
    darkThemeEnabled = !darkThemeEnabled;

    if (darkThemeEnabled) {
        // Si el tema oscuro está habilitado
        bodyElement.classList.remove('light-theme');
        bodyElement.classList.add('dark-theme');
        btnId.textContent = 'Cambiar a tema claro';
    } else {
        // Si el tema oscuro no está habilitado
        bodyElement.classList.remove('dark-theme');
        bodyElement.classList.add('light-theme');
        btnId.textContent = 'Cambiar a tema oscuro';
    }
});
