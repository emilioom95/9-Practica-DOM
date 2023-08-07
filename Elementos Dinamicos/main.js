const cardForm = document.getElementById('cardForm');
const cardContent = document.getElementById('cardContent');
const cardsContainer = document.getElementById('cardsContainer');

cardForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Crear la tarjeta y añadirla al contenedor
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = cardContent.value;
    
    cardsContainer.appendChild(card);
    
    // Limpiar el contenido del formulario
    cardContent.value = '';
});
