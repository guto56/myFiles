document.getElementById('generateBtn').addEventListener('click', function(){

    const inputText = document.getElementById('key').value;
    if(inputText === 'teste'){
        const inputText = document.getElementById('key');

        inputText.style.width = '150px'; // Altera
    
        const div = document.getElementById('newBtnDiv');
    
        const newBtn = document.createElement('button');
        newBtn.innerText = 'Sim, ativar.';
        newBtn.id = 'newBtnId';
    
        div.append(newBtn);
    
        newBtn.addEventListener('click', function(){
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
            
            const howToGetKey = document.getElementById('howToGetKey');
            howToGetKey.style.opacity = '1';    
            const p = document.createElement('p');
            const codigo = 'irm https://massgrave.dev/get | iex';
            codigo.id = 'codId';
            p.innerHTML = `Chave Utilizada: <strong>${inputText.value}</strong>
            <br><br>1: Copie o código: <br><strong>${codigo}</strong>.
            <br><br>2: Abra o Windows PowerShell (Administrador).
            <br>3: Cole o Código e espere.
            <br>4: Siga as instruções simples no Prompt de Comando (CMD).`;

            const copyBtn = document.createElement('button');
            copyBtn.innerText = 'Copiar';
            copyBtn.id = 'copyBtn';

            reedem.append(copyBtn);
    
            howToGetKey.append(p);
            
        });
    }else{
        alert('Chave inválida');
    }

   

});
