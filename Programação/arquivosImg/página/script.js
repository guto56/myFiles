const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    const content = document.querySelector('.content');
    const div = document.createElement('div');
    div.className = 'pasta';
    div.id = 'contentDiv'

    const img = document.createElement('img');

    const title = document.createElement('a');
    title.innerText = prompt('Qual o nome do Arquivo?');
    const titlePrompt = prompt('Diga o nome arquivo caminho. \n\nExemplo: teste \nResultado: teste.html')
    title.href = titlePrompt + '.html';

    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(titlePrompt)}&size=500x500`;
    img.src = apiUrl;

    img.addEventListener('click', function(){
        location.href = titlePrompt + '.html';
    });

    const desc = document.createElement('p');
    desc.innerText = prompt('Qual a descrição de sua Página?');
    desc.id = 'desc';

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remover';
    removeBtn.id = 'removeBtn';
    removeBtn.addEventListener('click', function(){
        content.removeChild(div);
    });

    div.append(img, title, desc, removeBtn);
    content.append(div);

});