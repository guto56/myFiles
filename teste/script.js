function startBtn(){
    const startDiv = document.createElement('div');
    startDiv.id = 'startDiv';

    const labelName = document.createElement('label');
    labelName.innerHTML = 'Nome: ';
    const inputName = document.createElement('input');
    inputName.id = 'inputName';

    const labelEmail = document.createElement('label');
    labelEmail.innerHTML = 'Email: ';
    const inputEmail = document.createElement('input');
    inputEmail.id = 'inputEmail';
    inputEmail.type = 'email';

    const labelPassword = document.createElement('label');
    labelPassword.innerHTML = 'Senha: ';
    const inputPassword = document.createElement('input');
    inputPassword.id = 'inputPassword';
    inputPassword.type = 'password';

    const saveBtn = document.createElement('button');
    saveBtn.innerHTML = 'Salvar';
    saveBtn.id = 'saveBtn';

    startDiv.append(labelName, inputName, labelEmail, inputEmail, labelPassword, inputPassword, saveBtn);
    
    const section = document.getElementById('section');
    section.append(startDiv);
}

function saveBtnClick(){
    alert('teste');
}