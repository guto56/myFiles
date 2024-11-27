document.addEventListener('DOMContentLoaded', function() {
    var loadingOverlay = document.getElementById('loading');
    if (loadingOverlay) {
        setTimeout(function() {
            loadingOverlay.classList.add('hidden');
        }, 500); // Ajuste o tempo conforme necessário
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('login-feedback');

    // Verifica as credenciais no localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        // Armazena o usuário logado e redireciona para o quiz
        localStorage.setItem('loggedInUser', username);
        setTimeout(() => { // Simula o tempo de carregamento
            window.location.href = '../quiz/index.html';  // Caminho relativo para a pasta do quiz
        }, 1000);
    } else {
        feedback.innerText = 'Usuário ou senha inválidos. Tente novamente.';
    }

    const registerbtn = document.getElementById('registerbtn')
    registerbtn.addEventListener('click', function(){
        if(registerbtn){
            window.location.href = '../sitequiz/register.html'
        }

    })
});

const registerBtn = document.getElementById('registerBtn').addEventListener('click', function(){
    window.location.href = 'register.html'
})