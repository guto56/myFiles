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

const inputText = document.getElementById('inputText');

inputText.addEventListener('input', function() {
    if (inputText.value.length > 1) {
        inputText.style.width = '200px'; 
        
        const qrcodeImg = document.getElementById('qrcode');
        const title = document.getElementById('title');

        qrcodeImg.addEventListener('mouseover', function() {
            const inputText = document.getElementById('inputText').value;
            
            title.style.opacity = '0'; 
            
            setTimeout(() => {
                title.innerText = `${inputText}`; 
                title.style.opacity = '1';
            }, 300);
        });

        qrcodeImg.addEventListener('mouseleave', function() {
            title.style.opacity = '0';
            
            setTimeout(() => {
                title.innerText = 'Gerador de Código QR';
                title.style.opacity = '1';
            }, 300);
        });
    } else {
        inputText.style.width = '55px';
    }
});

const img = document.getElementById('qrcode');
img.addEventListener('mouseenter', function(){
    img.style.transform = 'scale(1.2)';
})

img.addEventListener('mouseleave', function(){
    img.style.transform = 'scale(1.0)';
})

document.addEventListener('input', function(ev){
    if(ev.key)
})