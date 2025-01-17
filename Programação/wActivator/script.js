document.getElementById('generateBtn').addEventListener('click', function(){
    const confirm = document.getElementById('confirm');
    confirm.innerText = 'Código válido, ao pressionar o botão abaixo, o reembolso não poderá mais ser solicitado.\nDeseja prosseguir?';
    confirm.style.opacity = '1';
    confirm.style.marginBottom = '-15px';

    const inputText = document.getElementById('key').value;
    if(inputText === 'naopode'){
        const inputText = document.getElementById('key');

        inputText.style.width = '150px'; // Altera
    
        const div = document.getElementById('newBtnDiv');
    
        const newBtn = document.createElement('button');
        newBtn.innerText = 'Sim, ativar.';
        newBtn.id = 'newBtnId';
    
        div.append(newBtn);
    
        newBtn.addEventListener('click', function(){

            const confirm = document.getElementById('confirm');
            const removeConfirm = document.querySelector('.reedem');
            removeConfirm.removeChild(confirm);
            
            const inputText = document.getElementById('key');
            inputText.readOnly = true;
            inputText.style.width = '200px';
            inputText.style.marginTop = '35px';
            inputText.style.transform = 'scale(1.2)';
            inputText.style.boxShadow = '0 0 15px rgba(25, 124, 194, 0.5)';
            inputText.classList.add('locked');
    
            const reedem = document.querySelector('.reedem');
            reedem.style.width = '300px';
            const activateBtn = document.getElementById('generateBtn');
            reedem.removeChild(activateBtn);
    
            const div = document.getElementById('newBtnDiv');
            inputText.style
            div.removeChild(newBtn);
            
            const howToGetKey = document.createElement('div');
            howToGetKey.id = 'howToGetKey'; 
            howToGetKey.style.opacity = '1'; 
            const p = document.createElement('p');
            p.innerHTML = `<br>Usos para essa chave: <strong>1/2</strong>.
            <br><strong>Apenas será possível ativar pelo PC.</strong>
            <br><br>Obs: O Windows dirá que é um arquivo duvidoso, por se tratar de um ativador mas sem ser Oficial Deles, isso é normal não se preocupe.
            <br><br>1: Baixar o Ativador no botão abaixo.
            <br>2: Cole o mesmo Código que usou aqui e espere.
            <br>3: Siga as instruções simples no Prompt de Comando (CMD).`;

            howToGetKey.append(p);

            const activatorDownload = document.createElement('button');
            activatorDownload.innerText = 'Baixar Ativador';
            activatorDownload.id = 'activator';

            reedem.append(howToGetKey, activatorDownload);

            activatorDownload.addEventListener('click', function() {
                const downloadUrl = './keyGenerator/Dist/AtivadorPC.exe';
                window.location.href = downloadUrl;
            });
    
            howToGetKey.append(p);
            
        });
    }else{
        const confirm = document.getElementById('confirm');
        confirm.innerText = 'Código inválido';
    }

});

//const theVideo = document.getElementById('theVideo');
//theVideo.addEventListener('mouseenter', function(){
   // theVideo.classList.add('maior')
//})

//theVideo.addEventListener('mouseleave', function(){
    
//})

    //theVideo.style.transition = 'width 0.8s ease';
    //theVideo.style.width = '900px'
    //theVideo.style.transition = 'width 0.8s ease';
    //theVideo.style.width = '700px'//