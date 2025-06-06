document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll('.tab-link');

    const tabContents = document.querySelectorAll('.tab-conteudo');

    const banner = document.querySelector('.banner-carrossel');

    // Função para mostrar a aba correta
    function showTab(tabId) {
        tabContents.forEach(tab => tab.classList.remove('active'));

        // Mostra a aba correspondente
        const activeTab = document.getElementById(tabId);
        activeTab.classList.add('active');

        // Mostra o banner somente na aba "home"
        if (tabId === 'inicio') {
            banner.style.display = 'flex';
        } else {
            banner.style.display = 'none';
        }
    }

    // Adiciona eventos de clique nos links das abas
    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (modal.style.display === "flex") {
                e.preventDefault();
                return;
            }
    
            e.preventDefault();
            const tabId = link.getAttribute('data-tab');
            showTab(tabId);
        });
    });
    

    // Carrossel de banners
    const slides = document.querySelectorAll('.banner-slide');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 5000);

    const login = document.querySelector('[data-tab="login"]');
    const modal = document.getElementById("loginModal");
    const fecharBtn = document.querySelector(".fechar-btn");

    login.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "flex";
    });

    fecharBtn.addEventListener("click", function () {
        modal.style.display = "none";
        showTab('inicio');
    });

    document.querySelectorAll('.filme-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const tabId = this.getAttribute('href').replace('#', '');
            showTab(tabId);

            const titulo = this.dataset.titulo;
            const img = this.dataset.img;
            const descricao = this.dataset.descricao;
            const duracao = this.dataset.duracao;
            const classificacao = this.dataset.classificacao;
            const horarios = this.dataset.horarios;
            const elenco = this.dataset.elenco;
            const sala = this.dataset.sala;

            // Atualizar a aba de detalhes
            document.getElementById('detalhes-img').src = img;
            document.getElementById('detalhes-titulo').textContent = titulo;
            document.getElementById('detalhes-descricao').textContent = descricao;
            document.getElementById('detalhes-duracao').textContent = duracao;
            document.getElementById('detalhes-classificacao').textContent = classificacao;
            document.getElementById('detalhes-horarios').textContent = horarios;
            document.getElementById('detalhes-elenco').textContent = elenco;
            document.getElementById('detalhes-sala').textContent = sala;
        });
    });

    // Manipular o envio do formulário de login
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Login realizado com sucesso!");

        modal.style.display = "none";

    showTab('inicio');
    });

    // Botão extra para fechar o login
    const fecharLogin = document.getElementById("fecharLogin");
    fecharLogin.addEventListener("click", function () {
        modal.style.display = "none";
        showTab('inicio');
    });

    const setaDireita = document.getElementById('catalogo-direita');
    const setaEsquerda = document.getElementById('catalogo-esquerda');
    const catalogoContainer = document.getElementById('catalogoContainer');

    function verificarSetas() {
        const scrollLeft = catalogoContainer.scrollLeft;
        const scrollWidth = catalogoContainer.scrollWidth;
        const clientWidth = catalogoContainer.clientWidth;

        setaEsquerda.style.display = scrollLeft <= 5 ? 'none' : 'block';
        setaDireita.style.display = scrollLeft + clientWidth >= scrollWidth - 5 ? 'none' : 'block';
    }
    
    // Verifica no carregamento da página
    verificarSetas();

    // Verifica a cada rolagem do container
    catalogoContainer.addEventListener('scroll', verificarSetas);

    setaDireita.addEventListener('click', () => {
        catalogoContainer.scrollBy({ left: 400, behavior: 'smooth' });
    });

    setaEsquerda.addEventListener('click', () => {
        catalogoContainer.scrollBy({ left: -400, behavior: 'smooth' });
    });

});