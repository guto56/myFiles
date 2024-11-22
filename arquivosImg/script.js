const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    const content = document.querySelector('.content');
    const div = document.createElement('div');
    div.className = 'pasta';

    const img = document.createElement('img');
    img.src = './img/pasta-removebg-preview.png';

    const title = document.createElement('a');
    title.innerText = prompt('Qual o nome do Arquivo?');
    title.href = prompt('Diga o nome do arquivo caminho (exemplo.html).')

    const desc = document.createElement('p');
    desc.innerText = prompt('Qual a descrição de sua Página?')
    desc.id = 'desc';

    div.append(img, title, desc)
    content.append(div)

})