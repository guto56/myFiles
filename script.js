document.getElementById('btn').addEventListener('click', function(){
    input_numero = document.getElementById('numeroC');
    if (input_numero.value < 2){
        print('Erro')
    }
})