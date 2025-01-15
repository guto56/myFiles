document.getElementById('generateBtn').addEventListener('click', function(){

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
        const msg = document.getElementById('msg');
        
    });

});
