document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links das abas
    const tabLinks = document.querySelectorAll('.tab-link');

    // Seleciona todas as seções
    const tabContents = document.querySelectorAll('.tab-content');

    // Seleciona o banner
    const banner = document.querySelector('.banner');

    // Função para mostrar a aba correta
    function showTab(tabId) {
        // Esconde todas as abas
        tabContents.forEach(tab => tab.classList.remove('active'));

        // Mostra a aba correspondente
        const activeTab = document.getElementById(tabId);
        activeTab.classList.add('active');

        // Mostra o banner somente na aba "home"
        if (tabId === 'home') {
            banner.style.display = 'flex'; // ou 'block'
        } else {
            banner.style.display = 'none';
        }
    }

    // Adiciona eventos de clique nos links das abas
    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tabId = link.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    // Inicialmente, mostra a aba "inicio"
    showTab('home');
});
