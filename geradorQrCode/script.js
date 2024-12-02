document.getElementById('generateBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const qrcodeImg = document.getElementById('qrcode');

    if (inputText) {
        qrcodeImg.classList.remove('opacity')
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputText)}&size=200x200`;
        qrcodeImg.src = apiUrl;
        const mensagem = document.getElementById('mensagem');
        mensagem.innerText = '';
    } else {
        const mensagem = document.getElementById('mensagem');
        mensagem.innerText = 'Por favor, insira um texto ou link.';
        mensagem.style.color = 'rgb(196, 21, 21)';

    }
});


const qrcodeImg = document.getElementById('qrcode');
const title = document.getElementById('title');
qrcodeImg.addEventListener('mouseover', function(){
    const inputText = document.getElementById('inputText').value;
    title.innerText = `${inputText}`;
})

qrcodeImg.addEventListener('mouseleave', function(){
    title.innerText = 'Gerador de QR Code   ';
})