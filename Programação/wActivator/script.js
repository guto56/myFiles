document.getElementById('generateBtn').addEventListener('click', function(){
    const confirm = document.getElementById('confirm');
    confirm.innerText = 'Código válido, ao pressionar o botão abaixo, o reembolso não poderá mais ser solicitado.\nDeseja prosseguir?';
    confirm.style.opacity = '1';
    confirm.style.marginBottom = '-15px';

    var newKeys = [
        '73d7-e8f0-a388-42d',
        'eadf-6092-79e7-4cf',
        '4594-9ec5-07cc-40f',
        'e1a2-4e39-f461-412',
        '532a-24a3-552b-492',
        'f6e6-9300-a4bf-4ec',
        '2dfe-4d73-ce35-4b7',
        '6857-38a3-0511-4a3',
        'b565-394e-fab3-477',
        '5d0b-3bcf-19db-45d',
        '5252-5b41-e8c9-47e',
        '9fd6-a091-6205-4e8',
        'e29d-d57c-eee3-4b3',
        '9f1e-526f-092a-40e',
        '33b7-f685-bbb4-47b',
        '84c5-8128-e9f1-4f4',
        '646a-e41a-b115-4ba',
        '722a-a3e2-44e6-495',
        '1811-d8a4-0290-49d',
        'c1d3-fbcf-3df9-472',
        '4182-35c5-5e11-49c',
        '2cc0-cf21-21a6-4f1',
        'd5a1-1e90-7666-4e6',
        '73af-5341-1cf9-4e7',
        '27ec-cf64-3c74-4bd',
        'b96b-ac88-1aa4-499',
        'ba61-864e-f613-428',
        'd951-9479-ed09-408',
        'ac07-3ecb-a4a3-470',
        'f58a-1155-42f0-474',
        '4f22-7ded-966c-423',
        '9be6-caf8-be69-415',
        'e5e6-244a-9be6-4cd',
        '88db-a0b8-4a61-420',
        '0b5e-d46c-5814-469',
        'dbe3-40f8-44a3-485',
        '0252-e830-27c4-4f6',
        'c881-aef4-01e0-4d9',
        '2a71-f36a-475f-42c',
        '5988-512a-55cf-4c4',
        'dc74-0963-060f-4d1',
        '3f28-2a1c-d386-408',
        'd10b-ac58-668f-4df',
        'c47b-fd53-080c-4b0',
        '94b8-a817-f192-4a5',
        '5aab-70bc-ff65-41b',
        '667e-2dcf-d593-408',
        '45a5-00da-b224-467',
        'a77d-4a88-cf55-493',
        '071006-guto-adm'
    ];

    const inputText = document.getElementById('key').value;
    if(newKeys.includes(inputText)){
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

const theVideo = document.getElementById('theVideo');
theVideo.addEventListener('mouseenter', function(){
    theVideo.style.transition = 'width 0.8s ease';
    theVideo.style.width = '800px'
})

theVideo.addEventListener('mouseleave', function(){
    theVideo.style.transition = 'width 0.8s ease';
    theVideo.style.width = '700px'
})

  