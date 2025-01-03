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

qrcodeImg.addEventListener('mouseover', function() {
    const inputText = document.getElementById('inputText').value;
    
    // Fade out
    title.style.opacity = '0'; // Torna o título invisível
    
    setTimeout(() => {
        title.innerText = `${inputText}`; // Altera o texto
        title.style.opacity = '1'; // Torna o título visível novamente
    }, 300); // Tempo igual ao da transição
});

qrcodeImg.addEventListener('mouseleave', function() {
    // Fade out
    title.style.opacity = '0'; // Torna o título invisível
    
    setTimeout(() => {
        title.innerText = 'AL5 Code Generator.'; // Altera o texto
        title.style.opacity = '1'; // Torna o título visível novamente
    }, 300); // Tempo igual ao da transição
});

const inputText = document.getElementById('inputText');

inputText.addEventListener('input', function() {
    if (inputText.value.length > 1) {
        inputText.style.width = '250px'; // Altera
        //  o tamanho para 200px
    } else {
        inputText.style.width = '10px'; // Retorna ao tamanho original
    }
});

const img = document.getElementById('qrcode');
img.addEventListener('mouseenter', function(){
    img.style.transform = 'scale(1.1)';
})

img.addEventListener('mouseleave', function(){
    img.style.transform = 'scale(1.0)';
})