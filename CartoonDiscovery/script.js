document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links das abas
    const tabLinks = document.querySelectorAll('.tab-link');

    // Seleciona todas as seções
    const tabContents = document.querySelectorAll('.tab-conteudo');

    // Seleciona o banner
    const banner = document.querySelector('.banner-carrossel');

    // Função para mostrar a aba correta
    function showTab(tabId) {
        // Esconde todas as abas
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
            // Se o modal de login estiver visível, bloqueia a troca de aba
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

/*
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    document.querySelectorAll('.filme-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tabId = this.getAttribute('href').replace('#', '');
            showTab(tabId);
        });
    });   
    
    const filmes = {
        'filme1': {
            titulo: 'Thunderbolts*',
            descricao: 'Os Vingadores enfrentam Thanos em uma batalha épica pelo destino do universo.',
            duracao: '3h 2min',
            classificacao: '12 anos',
            horarios: '14:00, 17:30, 21:00',
            elenco: 'Robert Downey Jr., Chris Evans, Scarlett Johansson',
            imagem: 'caminho/para/vingadores.jpg'
        },
        'filme2': {
        }
        // Adicione outros filmes aqui
    };
    
*/

    document.querySelectorAll('.filme-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Pegar o ID da aba e ativar
            const tabId = this.getAttribute('href').replace('#', '');
            showTab(tabId);

            // Pegar os dados do filme via data-attributes
            const titulo = this.dataset.titulo;
            const img = this.dataset.img;
            const descricao = this.dataset.descricao;
            const duracao = this.dataset.duracao;
            const classificacao = this.dataset.classificacao;
            const horarios = this.dataset.horarios;
            const elenco = this.dataset.elenco;

            // Atualizar a aba de detalhes
            document.getElementById('detalhes-img').src = img;
            document.getElementById('detalhes-titulo').textContent = titulo;
            document.getElementById('detalhes-descricao').textContent = descricao;
            document.getElementById('detalhes-duracao').textContent = duracao;
            document.getElementById('detalhes-classificacao').textContent = classificacao;
            document.getElementById('detalhes-horarios').textContent = horarios;
            document.getElementById('detalhes-elenco').textContent = elenco;
        });
    });

    // Manipular o envio do formulário de login
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Login realizado com sucesso!");

        // Fecha o modal após login
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

        // Verrifica se chegou ao inicio ou final da rolagem na aba de catalogos e esconde as setas
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
