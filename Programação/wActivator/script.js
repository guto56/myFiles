document.getElementById('generateBtn').addEventListener('click', function(){
    const senha = document.getElementById('senha').value;

    if(senha === '4886'){
        alert('Senha correta!');
        const senha = document.getElementById('senha');
        senha.value = '';
    }else{
        alert('Senha incorreta!');
        const senha = document.getElementById('senha');
        senha.value = '';
    }
})