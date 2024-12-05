const gerarBtn = document.getElementById('gerarBtn');
gerarBtn.addEventListener('click', function(){
    const textInput = document.getElementById('textInput').value;
    if(textInput){
        const qrImage = document.getElementById('qrImg')
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textInput}`
    }else{
        alert('Preencha todos os campos.')
    }
})