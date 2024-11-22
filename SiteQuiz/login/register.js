document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Verifica se o usuário já existe
    if (users.find(user => user.username === username)) {
        messageDiv.innerText = 'Usuário já existe.';
    } else {
        // Adiciona o novo usuário
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        messageDiv.innerText = 'Usuário registrado com sucesso!';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        window.location.href = 'login.html'
        
    }
});

// Adiciona o evento para o botão de administração
document.getElementById('admin-login-button').addEventListener('click', () => {
    window.location.href = 'loginadm.html';
});

// Adiciona o evento para o botão de login
document.getElementById('login-button').addEventListener('click', () => {
    window.location.href = 'login.html';
});

document.addEventListener('DOMContentLoaded', function() {
    var loadingOverlay = document.getElementById('loading');
    if (loadingOverlay) {
        setTimeout(function() {
            loadingOverlay.classList.add('hidden');
        }, 500); // Ajuste o tempo conforme necessário
    }
});
