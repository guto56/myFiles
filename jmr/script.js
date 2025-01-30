function enviar(){
    alert('to brincandoKKKK a função de mandar mensagem nem funciona fiz só pra vc perder tempoo <3')
    const gutoDiv = document.querySelector('.guto');
    const enviarDiv = document.querySelector('.enviarDiv');

    document.body.removeChild(gutoDiv);
    document.body.removeChild(enviarDiv);

    const newDiv = document.createElement('div');
    newDiv.style.marginTop = '200px';
    newDiv.style.textAlign = 'center';
    newDiv.innerHTML = `perdão pelo sustokkk, <br><br>
    então, vamos para o assunto, você falou no Teams "sei", e eu respondi "sabe do que? :(
    <br><br> e aí eu que não entendi mais nada, quer saber do que? 
    <strong>mas não é mentira que a função de mandar mensagem não funcionaKKK responde pelo Teams</strong> <br><br>
    minha intenção é você perder tempo mesmo.
    <br><br>tem sim como fazer a listinha de coisas favoritas ;)
    <br><br><button onclick='fechar()'>Clique para Fechar</button>`;

    document.body.appendChild(newDiv);
}

function fechar(){
    alert('já falei que não funcionaKKKKKKK')
}