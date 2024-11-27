document.addEventListener('DOMContentLoaded', function() {
    const usersTableBody = document.querySelector('#users-table tbody');
    const logoutButton = document.getElementById('logout-button');
    const messageDiv = document.getElementById('message');

    // Carrega os usuários do localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Adiciona os usuários à tabela
    users.forEach(user => {
        const row = document.createElement('tr');
        const usernameCell = document.createElement('td');
        const actionCell = document.createElement('td');

        usernameCell.innerText = user.username;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Excluir';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => showConfirmationDialog(user));

        actionCell.appendChild(deleteButton);
        row.appendChild(usernameCell);
        row.appendChild(actionCell);
        usersTableBody.appendChild(row);
    });

    // Adiciona o evento para o botão de logout
    logoutButton.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    function showConfirmationDialog(user) {
        const dialog = document.createElement('div');
        dialog.classList.add('confirmation-dialog');
        dialog.innerHTML = `
            <h2>Confirmar Exclusão</h2>
            <p>Você tem certeza que deseja excluir o usuário ${user.username}?</p>
            <input type="password" id="confirmation-password" placeholder="Digite a senha">
            <button id="confirm-delete" class="confirm">Confirmar</button>
            <button id="cancel-delete" class="cancel">Cancelar</button>
        `;
        document.body.appendChild(dialog);

        document.getElementById('confirm-delete').addEventListener('click', () => {
            const enteredPassword = document.getElementById('confirmation-password').value;
            if (enteredPassword === 'admin' || enteredPassword === user.password) {
                deleteUser(user.username);
                document.body.removeChild(dialog);
                showMessage('Usuário excluído com sucesso.');
            } else {
                showMessage('Senha incorreta. Não foi possível excluir o usuário.');
            }
        });

        document.getElementById('cancel-delete').addEventListener('click', () => {
            document.body.removeChild(dialog);
        });
    }

    function deleteUser(username) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.filter(user => user.username !== username);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        // Atualiza a tabela
        usersTableBody.innerHTML = '';
        updatedUsers.forEach(user => {
            const row = document.createElement('tr');
            const usernameCell = document.createElement('td');
            const actionCell = document.createElement('td');

            usernameCell.innerText = user.username;
            
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Excluir';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => showConfirmationDialog(user));

            actionCell.appendChild(deleteButton);
            row.appendChild(usernameCell);
            row.appendChild(actionCell);
            usersTableBody.appendChild(row);
        });
    }

    function showMessage(message) {
        messageDiv.innerText = message;
        setTimeout(() => {
            messageDiv.innerText = '';
        }, 3000);
    }
});


