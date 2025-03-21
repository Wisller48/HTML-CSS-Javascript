// scripts.js

let slideIndex = 0; // Índice da slide atual

// Função para mostrar a slide atual
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0; // Volta para a primeira slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Vai para a última slide
    } else {
        slideIndex = index;
    }

    // Esconde todas as slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Mostra a slide atual
    slides[slideIndex].style.display = 'block';
}

// Função para mostrar a próxima slide
function nextSlide() {
    showSlide(slideIndex + 1);
}

// Função para mostrar a slide anterior
function prevSlide() {
    showSlide(slideIndex - 1);
}

// Adiciona eventos aos botões de navegação
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Mostra a primeira slide ao carregar a página
showSlide(slideIndex);
