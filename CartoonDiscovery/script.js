document.addEventListener("DOMContentLoaded", function () {
// Seleciona todos os links das abas
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-conteudo');
    const banner = document.querySelector('.banner-carrossel');
    const filmeItems = document.querySelectorAll('.filme-item');

// Função para mostrar a aba correta
    function showTab(tabId) {
        tabContents.forEach(tab => tab.classList.remove('active'));
        const activeTab = document.getElementById(tabId);
        activeTab.classList.add('active');
        banner.style.display = tabId === 'inicio' ? 'flex' : 'none';

        if (tabId === 'inicio') {
        filmeItems.forEach(item => {
            item.style.display = 'flex';
            });
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
            // Fechar o menu hamburguer após clicar em uma opção
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.getElementById('hamburger');
            navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
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

    // Modal de login
    const login = document.querySelector('[data-tab="login"]');
    const modal = document.getElementById("loginModal");
    const fecharBtn = document.querySelector(".fechar-btn");

    login.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "flex";
        // Fechar o menu hamburguer ao abrir o modal
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });

    fecharBtn.addEventListener("click", function () {
        modal.style.display = "none";
        showTab('inicio');
    });

    // Manipular detalhes dos filmes
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

    // Adicionar evento para o botão do banner
    document.querySelectorAll('.comprar-ingresso').forEach(botao => {
    botao.addEventListener('click', function (e) {
        e.preventDefault();
        const tabId = this.getAttribute('href').replace('#', '');
        showTab(tabId);

        document.getElementById('detalhes-img').src = this.dataset.img;
        document.getElementById('detalhes-titulo').textContent = this.dataset.titulo;
        document.getElementById('detalhes-descricao').textContent = this.dataset.descricao;
        document.getElementById('detalhes-duracao').textContent = this.dataset.duracao;
        document.getElementById('detalhes-classificacao').textContent = this.dataset.classificacao;
        document.getElementById('detalhes-horarios').textContent = this.dataset.horarios;
        document.getElementById('detalhes-elenco').textContent = this.dataset.elenco;
        document.getElementById('detalhes-sala').textContent = this.dataset.sala;
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

    // Navegação do catálogo
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

    verificarSetas();
    catalogoContainer.addEventListener('scroll', verificarSetas);

    setaDireita.addEventListener('click', () => {
        catalogoContainer.scrollBy({ left: 400, behavior: 'smooth' });
    });

    setaEsquerda.addEventListener('click', () => {
        catalogoContainer.scrollBy({ left: -400, behavior: 'smooth' });
    });

    // Barra de pesquisa
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function () {
        const query = searchInput.value.toLowerCase().trim();
        filmeItems.forEach(item => {
            item.style.display = 'none';
        });

        filmeItems.forEach(item => {
            const titulo = item.querySelector('p').textContent.toLowerCase();
            if (titulo.includes(query)) {
                item.style.display = 'flex';
            }
        }); 
        showTab('catalogo');
    });

    // Permitir busca ao pressionar Enter
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
/*
    // Menu hamburguer
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
    });

        // Fechar o menu ao clicar fora
        document.addEventListener('click', function (e) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Botão Voltar ao Topo
    const voltarTopo = document.querySelector('.voltar-topo');
    if (voltarTopo) {
        voltarTopo.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', function () {
            voltarTopo.style.display = window.scrollY > 100 ? 'flex' : 'none';
        });
    }
*/
    // Adicionar função para retornar ao menu inicial ao clicar no logo
    const logoSite = document.getElementById('logoSite');
    if (logoSite) {
        logoSite.addEventListener('click', function() {
            showTab('inicio');
        });
    }
});