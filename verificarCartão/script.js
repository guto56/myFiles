document.getElementById('imagemAni').addEventListener('click', function() {
    const cardName = document.getElementById('cardNameId').value
    const cardNumber = document.getElementById('cardNumberId').value
    const cardDate = document.getElementById('cardDateId').value
    const cardCvv = document.getElementById('cardCvvId').value

    if(cardName && cardNumber && cardDate && cardCvv){
        const cardImage = document.querySelector('.cardImage');
        cardImage.style.transition = 'transform 1s ease'; // Define a transição
        cardImage.style.transform = 'translateX(-60px)'; // Move a imagem para a esquerda
        
        const dadosSalvos = document.getElementById('dadosSalvos');
        dadosSalvos.style.opacity = '1';
        dadosSalvos.innerHTML = 'Salvo.'

        const desc = document.getElementById('desc');
        desc.innerText = 'Seus dados foram salvos com sucesso!'

        const cardsSaved = document.querySelector('.cardsSaved');
        const h1 = document.createElement('h1');
        h1.classList.add('h1');
        h1.innerHTML += `
        <p>Nome no Cartão: ${cardName}</p>
        <p>Número do Cartão: ${cardNumber}</p>
        <p>Data de Validade: ${cardDate}</p>
        <p>Código CVV: ${cardCvv}</p> 
        
        `;

        cardsSaved.append(h1)

    }else{
        alert('Preencha todos os dados.')
    };
    
});
