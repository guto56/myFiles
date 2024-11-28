const iniciarBtn = document.getElementById('iniciar');

iniciarBtn.addEventListener('click', function(){

    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const codigo = num1 + num2;

    const seuCodigo = alert(`Seu código: ${codigo}`);

    const nomePad = prompt("Qual seu nome?")
    document.body.removeChild(iniciarBtn);

    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.className = 'newDiv';

    const h1 = document.createElement('h1')
    const codLabel = document.createElement('label');
    const codInput = document.createElement('input');
    const mensagem = document.createElement('p');
    const entrarBtn = document.createElement('button');

    h1.innerText = `Welcome back, ${nomePad}.`;

    codLabel.innerText = 'Insira seu Código.';
    codLabel.className = 'labels';
    codLabel.id = 'codId';

    codInput.className = 'inputs';
    codInput.id = 'codInput';
    codInput.placeholder = 'insira seu código.';

    entrarBtn.innerText = 'Entrar.';
    entrarBtn.className = 'btn';
    entrarBtn.id = 'entrarBtn';

    div.append(h1, codLabel, codInput, mensagem, entrarBtn);
    content.appendChild(div);
});