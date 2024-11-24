const addWorkBtn = document.querySelector('.addWork');
addWorkBtn.addEventListener('click', function(){
    const tarefas = document.querySelector('.tarefas');

    const div = document.createElement('div');
    div.className = 'conteudo';

    const name = document.createElement('p');
    name.innerText = prompt('Qual o nome da Tarefa?')
    name.className = 'nomeDaTarefa';

    const desc = document.createElement('p')
    desc.innerText = 'Descricao: ' + prompt('Qual a descrição da tarefa? (Não obrigatório');
    desc.className = 'descDaTarefa';

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Concluido'
    removeBtn.className = 'removeBtn';
    removeBtn.addEventListener('click', function(){
        tarefas.removeChild(div);
    })
    removeBtn.addEventListener('mouseover', function(){
        removeBtn.style.transition = 'transform background-color 0.9s ease';
        removeBtn.style.backgroundColor = 'rgba(22, 105, 24, 0.621)';
    })
    removeBtn.addEventListener('mouseleave', function(){
        removeBtn.style.transition = 'transform background-color 0.9s ease';
        removeBtn.style.backgroundColor = 'rgba(165, 42, 42, 0.708)';
    })

    div.append(name, desc, removeBtn);
    tarefas.append(div);
})