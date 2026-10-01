// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const gamesGrid = document.getElementById('games-grid');
    const gameCards = gamesGrid.getElementsByClassName('game-card');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        Array.from(gameCards).forEach(card => {
            const titleKeywords = card.getAttribute('data-title');
            if (titleKeywords.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});