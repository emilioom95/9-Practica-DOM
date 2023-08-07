const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');

searchInput.addEventListener('keyup', function() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const items = itemList.querySelectorAll('li');

    items.forEach(function(item) {
        const text = item.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
