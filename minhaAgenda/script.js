function addWork(){
    const afazeresP = document.getElementById('afazeresP');
    afazeresP.innerText = 'Nova Tarefa:';

    const criandoNovaTarefa = document.getElementById('criandoNovaTarefa');

    sectionNovaTarefa = document.createElement('section');

    const nomeDaTarefa = document.createElement('h3');
    nomeDaTarefa.innerText = 'teste';

    const salvarTarefa = document.createElement('button');
    salvarTarefa.onclick = 'novaTarefa';
    salvarTarefa.innerText = 'Salvar'
    salvarTarefa.id = 'salvarBtn'

    sectionNovaTarefa.append(nomeDaTarefa, salvarTarefa);

    criandoNovaTarefa.append(sectionNovaTarefa);

}

const salvarBtn = document.getElementById('salvarBtn');
salvarBtn.addEventListener('click', function(){
    alert('ijo')
})