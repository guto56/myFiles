document.addEventListener('DOMContentLoaded', function() {
    var loadingOverlay = document.getElementById('loading');
    var loadingAnm = document.getElementById('loader');

    if (loadingOverlay) {
        // Ajustar o tempo para garantir que o conteúdo da página tenha carregado
        setTimeout(function() {
            loadingOverlay.classList.add('hidden');
            loadingAnm.classList.add('hidden');
        }, 500); // Ajuste o tempo conforme necessário
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    const messageDiv = document.getElementById('message');

    // Verifica se o usuário e senha estão corretos
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'view_users.html'; // Redireciona para a página de visualização dos usuários
    } else {
        messageDiv.innerText = 'Usuário ou senha incorretos.';
    }
});

const leaveBtn = document.getElementById('leaveBtn').addEventListener('click', function(){
    window.location.href = 'login.html'
})