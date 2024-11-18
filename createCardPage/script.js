const cadastrarBtn = document.getElementById('cadastrarBtn');
cadastrarBtn.addEventListener('click', function(){
    const contentDiv = document.getElementById('content');
    contentDiv.style.display = 'block';
})

const createNewCard = document.getElementById('createNewCard').addEventListener('click', function(){
    const contentDiv = document.getElementById('content');
    contentDiv.style.display = 'none';

   const nomeId = document.getElementById('nomeId').value
   const cpfId = document.getElementById('cpfId').value
   const numberId = document.getElementById('numberId').value
   const cvvId = document.getElementById('cvvId').value

   if(nomeId && cpfId && numberId && cvvId){
    const cardsRegistered = document.getElementById("cardsRegistered");
    const cardsDiv = document.createElement('div')
    cardsDiv.classList.add('cardsDiv');
    cardsDiv.innerHTML = `
    <strong>Nome: ${nomeId}</strong>
    <strong>CPF: ${cpfId}</strong>
    <strong>Número do Cartão: ${nomeId}</strong>
    <strong>CVV: ${nomeId}</strong>
    <button id="removeBtn">Remover</button>
    `;

    cardsRegistered.append(cardsDiv)

    document.getElementById('nomeId').value = '';
    document.getElementById('cpfId').value = '';
    document.getElementById('numberId').value = '';
    document.getElementById('cvvId').value = '';

    const removeBtn = document.getElementById('removeBtn');
    removeBtn.addEventListener('click', function(){
        alert('Função em desenvolvimento.')
    })

   }else{
    alert('Preencha todos os campos.')
   }
})