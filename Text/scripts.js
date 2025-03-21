// scripts.js

// Função para capturar e exibir o texto

document.getElementById('form-texto').addEventListener('submit', function(event){
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta o texto do formulário
    const texto = document.getElementById('texto').value;

    // Exibe o texto na página
    document.getElementById('texto-capturado').textContent = texto;
    
    // Limpa o campo do Formulário
    document.getElementById('form-texto').reset();
});