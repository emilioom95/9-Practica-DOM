document.getElementById('imcForm').addEventListener('submit', function(e) {
    // Prevenir el comportamiento por defecto del formulario
    e.preventDefault();

    // Obtener los valores ingresados por el usuario
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);

    // Calcular IMC
    const imc = peso / (estatura * estatura);

    // Clasificar el IMC obtenido
    let clasificacion;
    if (imc < 18.5) {
        clasificacion = "Peso inferior al normal";
    } else if (imc >= 18.5 && imc <= 24.9) {
        clasificacion = "Normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        clasificacion = "Peso superior al normal";
    } else {
        clasificacion = "Obesidad";
    }

    // Mostrar el resultado en la etiqueta correspondiente
    document.getElementById('resultado').textContent = `Tu IMC es ${imc.toFixed(2)}: ${clasificacion}`;
});
